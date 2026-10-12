// Zero-dependency QA harness over the Chrome DevTools Protocol (adapted from docs/source-audit/.../tools/probe.mjs).
// Usage: node scripts/qa/check.mjs --base http://localhost:3000 --widths 1440,768,390 --paths /,/faqs [--shots dir] [--reduced]
// For each path × width: console errors, uncaught exceptions, horizontal overflow, h1 count, images without alt,
// broken images, ScrollTrigger count; optional full-page screenshot (after scrolling so reveals have run).
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const args = Object.fromEntries(process.argv.slice(2).reduce((acc, a, i, arr) => (a.startsWith('--') ? [...acc, [a.slice(2), arr[i + 1]?.startsWith('--') || arr[i + 1] === undefined ? true : arr[i + 1]]] : acc), []));
const base = args.base || 'http://localhost:3000';
const widths = String(args.widths || '1440,768,390').split(',').map(Number);
const paths = String(args.paths || '/').split(',');
const shots = args.shots && args.shots !== true ? args.shots : null;
const reduced = Boolean(args.reduced);
const PORT = Number(args.port || 9333);
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function ensureChrome() {
  try { await fetch(`http://127.0.0.1:${PORT}/json/version`); return null; } catch { /* start it */ }
  const dir = path.join(process.env.TEMP || '/tmp', `shala-qa-profile-${PORT}`);
  const p = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${dir}`, '--hide-scrollbars', '--mute-audio', 'about:blank'], { stdio: 'ignore', detached: true });
  for (let i = 0; i < 40; i++) { await sleep(250); try { await fetch(`http://127.0.0.1:${PORT}/json/version`); return p; } catch { /* wait */ } }
  throw new Error('Chrome did not start');
}

async function openTab() {
  const tab = await (await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: 'PUT' })).json();
  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  let id = 0; const pend = new Map(); const events = [];
  ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && pend.has(m.id)) { const p = pend.get(m.id); pend.delete(m.id); m.error ? p.rej(new Error(JSON.stringify(m.error))) : p.res(m.result); } else if (m.method) events.push(m); };
  await new Promise((r) => (ws.onopen = r));
  const send = (method, params = {}) => new Promise((res, rej) => { const i = ++id; pend.set(i, { res, rej }); ws.send(JSON.stringify({ id: i, method, params })); });
  const evalJs = async (expr) => { const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true }); return r.exceptionDetails ? { error: r.exceptionDetails.text } : r.result.value; };
  return { tab, ws, send, evalJs, events };
}

const proc = await ensureChrome();
const results = [];
for (const width of widths) {
  const mobile = width < 768;
  const { tab, ws, send, evalJs, events } = await openTab();
  await send('Page.enable'); await send('Runtime.enable'); await send('Log.enable');
  await send('Emulation.setDeviceMetricsOverride', { width, height: mobile ? 844 : 900, deviceScaleFactor: 1, mobile });
  if (mobile) await send('Emulation.setTouchEmulationEnabled', { enabled: true });
  if (reduced) await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  for (const p of paths) {
    events.length = 0;
    await send('Page.navigate', { url: base + p });
    await sleep(2500);
    // Scroll through the page so lazy images load and scroll reveals complete.
    await evalJs(`(async()=>{const s=ms=>new Promise(r=>setTimeout(r,ms));for(let y=0;y<document.documentElement.scrollHeight;y+=innerHeight*0.6){scrollTo(0,y);await s(120)}scrollTo(0,document.documentElement.scrollHeight);await s(1600);scrollTo(0,0);await s(600);return 1})()`);
    const info = await evalJs(`(()=>{const de=document.documentElement;const imgs=[...document.images];return {
      status: document.title, h1: document.querySelectorAll('h1').length,
      overflow: de.scrollWidth - innerWidth,
      wideEls: [...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return r.right>innerWidth+1&&getComputedStyle(e).position!=='fixed'&&r.width>0}).slice(0,5).map(e=>e.tagName+'.'+(e.className&&e.className.baseVal===undefined?String(e.className).slice(0,40):'')+' '+Math.round(e.getBoundingClientRect().right)),
      imgNoAlt: imgs.filter(i=>!i.hasAttribute('alt')).length,
      brokenImgs: imgs.filter(i=>i.complete&&i.naturalWidth===0&&i.loading!=='lazy').map(i=>i.currentSrc||i.src).slice(0,5),
      hiddenAfterScroll: [...document.querySelectorAll('[data-anim],[data-stagger-item],[data-hero-item]')].filter(e=>parseFloat(getComputedStyle(e).opacity)<0.05).length,
      hiddenEls: [...document.querySelectorAll('[data-anim],[data-stagger-item],[data-hero-item]')].filter(e=>parseFloat(getComputedStyle(e).opacity)<0.05).slice(0,3).map(e=>e.tagName+'.'+String(e.className).slice(0,30)+' top='+Math.round(e.getBoundingClientRect().top+scrollY)+' doc='+document.documentElement.scrollHeight),
      triggers: window.ScrollTrigger ? window.ScrollTrigger.getAll().length : null,
      height: de.scrollHeight }})()`);
    const errors = events.filter((e) => (e.method === 'Runtime.consoleAPICalled' && ['error', 'warning'].includes(e.params.type)) || e.method === 'Runtime.exceptionThrown' || (e.method === 'Log.entryAdded' && e.params.entry.level === 'error'))
      
      .filter((e) => !JSON.stringify(e.params).includes('Largest Contentful Paint'))
      .map((e) => (e.params.args?.map((a) => a.value ?? a.description).join(' ') || e.params.exceptionDetails?.exception?.description || e.params.entry?.text || '').slice(0, 240));
    if (info?.error) { results.push({ path: p, width, h1: 1, overflow: 0, wideEls: [], imgNoAlt: 0, brokenImgs: [], hiddenAfterScroll: 0, errors: ['EVAL ' + info.error] }); continue; }
    if (shots) {
      fs.mkdirSync(shots, { recursive: true });
      // Capture beyond the viewport at the real viewport size (resizing the viewport would distort vh units).
      const { cssContentSize } = await send('Page.getLayoutMetrics');
      const h = Math.min(Math.ceil(cssContentSize.height), 16000);
      const s = await send('Page.captureScreenshot', { format: 'jpeg', quality: 55, captureBeyondViewport: true, clip: { x: 0, y: 0, width, height: h, scale: 1 } });
      fs.writeFileSync(path.join(shots, `${p === '/' ? 'home' : p.slice(1).replace(/\//g, '_')}-${width}.jpg`), Buffer.from(s.data, 'base64'));
    }
    results.push({ path: p, width, ...info, errors });
  }
  ws.close();
  await fetch(`http://127.0.0.1:${PORT}/json/close/${tab.id}`);
}
for (const r of results) {
  const flags = [r.overflow > 0 && `OVERFLOW ${r.overflow}px ${r.wideEls.join('; ')}`, r.h1 !== 1 && `h1=${r.h1}`, r.imgNoAlt && `noAlt=${r.imgNoAlt}`, r.brokenImgs.length && `broken=${r.brokenImgs.join(',')}`, r.hiddenAfterScroll && `hidden=${r.hiddenAfterScroll} ${(r.hiddenEls||[]).join('; ')}`, r.errors.length && `errors=${JSON.stringify(r.errors)}`].filter(Boolean);
  console.log(`${String(r.width).padStart(4)} ${r.path.padEnd(48)} ${flags.length ? flags.join(' | ') : 'ok'}`);
}
if (args.json) fs.writeFileSync(args.json, JSON.stringify(results, null, 1));
if (proc) { try { process.kill(-proc.pid); } catch { proc.kill(); } }
