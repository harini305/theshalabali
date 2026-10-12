// Usage: node probe.mjs <url> <width> <script.js> [shot.jpg]
// script.js is evaluated as an async function body receiving helper `cdp(method, params)` via window? No: we run steps from the file.
// The probe file exports default async ({send, evalJs, sleep, shot}) => result
import fs from 'node:fs';
const [,, url, widthArg, scriptPath] = process.argv;
const width = Number(widthArg); const mobile = width < 600;
const UA_M = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const tab = await (await fetch('http://127.0.0.1:9333/json/new?about:blank', { method: 'PUT' })).json();
const ws = new WebSocket(tab.webSocketDebuggerUrl); let id = 0; const pend = new Map();
ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && pend.has(m.id)) { const p = pend.get(m.id); pend.delete(m.id); m.error ? p.rej(new Error(JSON.stringify(m.error))) : p.res(m.result); } };
await new Promise(r => ws.onopen = r);
const send = (method, params = {}) => new Promise((res, rej) => { const i = ++id; pend.set(i, { res, rej }); ws.send(JSON.stringify({ id: i, method, params })); });
const evalJs = async expr => { const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true }); return r.exceptionDetails ? 'ERR ' + JSON.stringify(r.exceptionDetails).slice(0, 300) : r.result.value; };
const shot = async (file, h) => { if (h) await send('Emulation.setDeviceMetricsOverride', { width, height: h, deviceScaleFactor: 1, mobile }); const s = await send('Page.captureScreenshot', { format: 'jpeg', quality: 60 }); fs.writeFileSync(file, Buffer.from(s.data, 'base64')); };
await send('Page.enable'); await send('Runtime.enable'); await send('DOM.enable'); await send('CSS.enable');
if (mobile) { await send('Emulation.setUserAgentOverride', { userAgent: UA_M }); await send('Emulation.setTouchEmulationEnabled', { enabled: true }); }
await send('Emulation.setDeviceMetricsOverride', { width, height: mobile ? 844 : 900, deviceScaleFactor: 1, mobile });
await send('Page.navigate', { url }); await sleep(7000);
const mod = await import('file:///' + scriptPath.replace(/\\/g, '/'));
const result = await mod.default({ send, evalJs, sleep, shot });
console.log(typeof result === 'string' ? result : JSON.stringify(result, null, 1));
ws.close(); await fetch('http://127.0.0.1:9333/json/close/' + tab.id);
