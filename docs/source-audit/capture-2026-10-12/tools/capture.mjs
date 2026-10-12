// Usage: node capture.mjs <outdir> <width> <slug,slug,...>
// Drives an already-running headless Chrome (port 9333) via CDP.
import fs from 'node:fs';
import path from 'node:path';

const [,, outdir, widthArg, slugArg] = process.argv;
const width = Number(widthArg);
const mobile = width < 600;
const slugs = slugArg.split(',');
const UA_M = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
const sleep = ms => new Promise(r => setTimeout(r, ms));

const EXTRACT = fs.readFileSync(new URL('./extract.js', import.meta.url), 'utf8');

async function newTab() {
  const r = await fetch('http://127.0.0.1:9333/json/new?about:blank', { method: 'PUT' });
  return r.json();
}

function client(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0; const pending = new Map(); const listeners = [];
  ws.onmessage = ev => {
    const m = JSON.parse(ev.data);
    if (m.id && pending.has(m.id)) { const p = pending.get(m.id); pending.delete(m.id); m.error ? p.rej(new Error(JSON.stringify(m.error))) : p.res(m.result); }
    else listeners.forEach(l => l(m));
  };
  const ready = new Promise(r => ws.onopen = r);
  const send = (method, params = {}) => new Promise((res, rej) => { const i = ++id; pending.set(i, { res, rej }); ws.send(JSON.stringify({ id: i, method, params })); });
  return { ready, send, on: f => listeners.push(f), close: () => ws.close() };
}

for (const slug of slugs) {
  const url = 'https://www.theshalabali.com/' + (slug === 'home' ? '' : slug);
  const tab = await newTab();
  const c = client(tab.webSocketDebuggerUrl);
  await c.ready;
  const consoleErrs = [];
  c.on(m => { if (m.method === 'Runtime.exceptionThrown') consoleErrs.push(m.params.exceptionDetails.text); });
  try {
    await c.send('Page.enable'); await c.send('Runtime.enable');
    if (mobile) {
      await c.send('Emulation.setUserAgentOverride', { userAgent: UA_M });
      await c.send('Emulation.setTouchEmulationEnabled', { enabled: true });
    }
    await c.send('Emulation.setDeviceMetricsOverride', { width, height: mobile ? 844 : 900, deviceScaleFactor: 1, mobile });
    await c.send('Page.navigate', { url });
    await sleep(7000);
    // scroll through to trigger lazy loading and entrance animations
    const h0 = (await c.send('Runtime.evaluate', { expression: 'document.documentElement.scrollHeight', returnByValue: true })).result.value;
    for (let y = 0; y < h0 + 900; y += 450) { await c.send('Runtime.evaluate', { expression: `window.scrollTo(0,${y})` }); await sleep(250); }
    await sleep(1500);
    // header state while scrolled
    const scrolledHeader = (await c.send('Runtime.evaluate', { expression: `(()=>{const h=document.querySelector('#SITE_HEADER,header');if(!h)return null;const r=h.getBoundingClientRect();const cs=getComputedStyle(h);return {top:r.top,height:r.height,position:cs.position,bg:cs.backgroundColor,scrollY:scrollY}})()`, returnByValue: true })).result.value;
    await c.send('Runtime.evaluate', { expression: 'window.scrollTo(0,0)' }); await sleep(1500);
    const data = (await c.send('Runtime.evaluate', { expression: EXTRACT, returnByValue: true })).result.value;
    data.scrolledHeader = scrolledHeader; data.url = url; data.width = width; data.consoleErrors = consoleErrs;
    fs.writeFileSync(path.join(outdir, `${slug}-${width}.json`), JSON.stringify(data, null, 1));
    const fullH = Math.min(data.docHeight, 16000);
    await c.send('Emulation.setDeviceMetricsOverride', { width, height: fullH, deviceScaleFactor: 1, mobile });
    await sleep(2500);
    const shot = await c.send('Page.captureScreenshot', { format: 'jpeg', quality: 55, captureBeyondViewport: true, clip: { x: 0, y: 0, width, height: fullH, scale: 1 } });
    fs.writeFileSync(path.join(outdir, `${slug}-${width}.jpg`), Buffer.from(shot.data, 'base64'));
    console.log('ok', slug, width, data.docHeight);
  } catch (e) { console.log('FAIL', slug, width, e.message); }
  c.close();
  await fetch('http://127.0.0.1:9333/json/close/' + tab.id);
}
