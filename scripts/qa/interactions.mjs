// Interaction checks over CDP: mobile drawer, desktop dropdown, gallery lightbox, menu slideshow,
// and ScrollTrigger count stability across client-side navigations.
// Usage: node scripts/qa/interactions.mjs [base] [chromePort]  (Chrome must already be running on chromePort)
const base = process.argv[2] || 'http://localhost:3210';
const port = Number(process.argv[3] || 9341);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function tab(width, mobile) {
  const t = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })).json();
  const ws = new WebSocket(t.webSocketDebuggerUrl); let id = 0; const pend = new Map();
  ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && pend.has(m.id)) { pend.get(m.id)(m.result); pend.delete(m.id); } };
  await new Promise((r) => (ws.onopen = r));
  const send = (method, params = {}) => new Promise((res) => { const i = ++id; pend.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (expr) => { const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true }); return r.result?.value ?? r.exceptionDetails?.text; };
  const key = async (k, code = k) => { await send('Input.dispatchKeyEvent', { type: 'keyDown', key: k, code, ...(k === 'Enter' ? { text: String.fromCharCode(13) } : {}), windowsVirtualKeyCode: { Escape: 27, Tab: 9, ArrowRight: 39, Enter: 13 }[k] }); await send('Input.dispatchKeyEvent', { type: 'keyUp', key: k, code }); };
  await send('Emulation.setDeviceMetricsOverride', { width, height: mobile ? 844 : 900, deviceScaleFactor: 1, mobile });
  const go = async (p) => { await send('Page.navigate', { url: base + p }); await sleep(2500); };
  return { ws, t, ev, key, go };
}

const out = [];
const ok = (name, cond, detail = '') => out.push(`${cond ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`);

// Mobile drawer
{
  const { ws, t, ev, key, go } = await tab(390, true);
  await go('/retreat-packages');
  await ev(`document.querySelector('button[aria-controls="mobile-menu"]').click()`);
  await sleep(900);
  const st = JSON.parse(await ev(`JSON.stringify({vis:getComputedStyle(document.getElementById('mobile-menu')).visibility, lock:document.documentElement.style.overflow, focusIn:!!document.activeElement.closest('#mobile-menu'), expanded:document.querySelector('button[aria-controls="mobile-menu"]').getAttribute('aria-expanded'), current:document.querySelector('#mobile-menu [aria-current="page"]')?.textContent})`));
  ok('drawer opens', st.vis === 'visible' && st.expanded === 'true', JSON.stringify(st));
  ok('drawer locks page scroll', st.lock === 'hidden');
  ok('drawer moves focus inside', st.focusIn);
  ok('drawer marks current page', /Retreat Packages$/.test(st.current || ''), st.current);
  ok('drawer lists all 10 pages incl. the 3 room types', (await ev(`document.querySelectorAll('#mobile-menu nav a').length`)) === 10);
  for (let i = 0; i < 30; i++) await key('Tab');
  ok('drawer traps Tab focus', await ev(`!!document.activeElement.closest('#mobile-menu')`));
  await key('Escape');
  await sleep(900);
  const after = JSON.parse(await ev(`JSON.stringify({vis:getComputedStyle(document.getElementById('mobile-menu')).visibility, lock:document.documentElement.style.overflow, focus:document.activeElement.getAttribute('aria-controls')})`));
  ok('Esc closes drawer, restores scroll and focus', after.vis === 'hidden' && after.lock === '' && after.focus === 'mobile-menu', JSON.stringify(after));
  // navigate via drawer link (client-side) and verify it closes
  await ev(`document.querySelector('button[aria-controls="mobile-menu"]').click()`); await sleep(700);
  await ev(`document.querySelector('#mobile-menu a[href="/experiences"]').click()`); await sleep(1800);
  ok('drawer link navigates and closes', await ev(`location.pathname==='/experiences' && getComputedStyle(document.getElementById('mobile-menu')).visibility==='hidden'`));
  ws.close(); await fetch(`http://127.0.0.1:${port}/json/close/${t.id}`);
}

// Desktop dropdown, lightbox, slideshow, trigger stability
{
  const { ws, t, ev, key, go } = await tab(1440, false);
  await go('/');
  await ev(`document.querySelector('button[aria-controls="accommodation-menu"]').focus()`);
  await key('Enter'); await sleep(400);
  ok('dropdown opens with keyboard', await ev(`document.querySelector('button[aria-controls="accommodation-menu"]').getAttribute('aria-expanded')==='true' && getComputedStyle(document.getElementById('accommodation-menu')).visibility==='visible'`));
  await key('Escape'); await sleep(300);
  ok('Esc closes dropdown, focus returns', await ev(`document.querySelector('button[aria-controls="accommodation-menu"]').getAttribute('aria-expanded')==='false' && document.activeElement.getAttribute('aria-controls')==='accommodation-menu'`));

  await go('/accommodation/deluxe-rooms');
  await ev(`document.querySelector('ul[aria-label$="photo gallery"] button').click()`); await sleep(600);
  ok('gallery tile opens lightbox', await ev(`!!document.querySelector('dialog[open]')`));
  const c1 = await ev(`document.querySelector('dialog[open] figcaption').textContent`);
  await key('ArrowRight'); await sleep(400);
  const c2 = await ev(`document.querySelector('dialog[open] figcaption').textContent`);
  ok('ArrowRight moves to next image', c1 !== c2, `${c1} → ${c2}`);
  await key('Escape'); await sleep(400);
  ok('Esc closes lightbox', await ev(`!document.querySelector('dialog[open]') && document.documentElement.style.overflow===''`));

  await go('/darshana-veda-spa');
  await ev(`document.querySelector('[aria-roledescription="carousel"] button[aria-label="Next slide"]').scrollIntoView({block:'center'})`); await sleep(1500);
  await ev(`document.querySelector('[aria-roledescription="carousel"] button[aria-label="Next slide"]').click()`); await sleep(1200);
  ok('spa slideshow advances', await ev(`document.querySelector('[aria-roledescription="carousel"] ul').scrollLeft>0`));
  ok('spa slideshow has 25 panels', (await ev(`document.querySelectorAll('[aria-roledescription="carousel"] li').length`)) === 25);

  await go('/indian-cafe');
  ok('cafe menu has 7 slides', (await ev(`document.querySelectorAll('[aria-roledescription="carousel"] li').length`)) === 7);

  // Client-side navigation loop: ScrollTrigger count must not grow (no leaked/duplicated triggers).
  await go('/');
  const counts = [];
  for (let i = 0; i < 5; i++) {
    await ev(`document.querySelector('a[href="/retreat-packages"]').click()`); await sleep(1500);
    await ev(`document.querySelector('a[href="/"]').click()`); await sleep(1500);
    counts.push(await ev(`ScrollTrigger.getAll().length`));
  }
  ok('ScrollTrigger count stable over 5 round trips', new Set(counts).size === 1, counts.join(','));
  ws.close(); await fetch(`http://127.0.0.1:${port}/json/close/${t.id}`);
}

console.log(out.join('\n'));
