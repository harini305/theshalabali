// Crawls the running site from "/", following every internal link. Reports non-200 pages, broken
// internal links, missing local assets (img/video/poster/srcset), and lists external/mailto/tel destinations.
// Usage: node scripts/qa/links.mjs [base=http://localhost:3100]
const base = process.argv[2] || 'http://localhost:3100';
const seen = new Map();
const queue = ['/', '/sitemap.xml'];
const external = new Map();
const assets = new Set();

function abs(href, from) {
  try { return new URL(href, base + from); } catch { return null; }
}

while (queue.length) {
  const path = queue.shift();
  if (seen.has(path)) continue;
  const res = await fetch(base + path, { redirect: 'manual' });
  seen.set(path, res.status);
  if (res.status >= 300 && res.status < 400) {
    const loc = res.headers.get('location');
    const u = abs(loc, path);
    if (u && u.origin === new URL(base).origin && !seen.has(u.pathname)) queue.push(u.pathname);
    continue;
  }
  const type = res.headers.get('content-type') || '';
  if (!type.includes('html') && !type.includes('xml')) continue;
  const html = await res.text();
  if (type.includes('xml')) {
    for (const m of html.matchAll(/<loc>([^<]+)<\/loc>/g)) queue.push(new URL(m[1]).pathname);
    continue;
  }
  for (const m of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = m[1].replace(/&amp;/g, '&');
    if (/^(mailto|tel):/.test(href)) { external.set(href, path); continue; }
    const u = abs(href, path);
    if (!u) continue;
    if (u.origin !== new URL(base).origin) { external.set(u.href, path); continue; }
    if (!seen.has(u.pathname)) queue.push(u.pathname);
  }
  for (const m of html.matchAll(/(?:src|poster|href)="(\/assets\/[^"]+)"/g)) assets.add(decodeURIComponent(m[1]));
  for (const m of html.matchAll(/url=(%2Fassets%2F[^&"]+)/g)) assets.add(decodeURIComponent(m[1]));
}

const missing = [];
for (const a of assets) {
  const r = await fetch(base + encodeURI(a), { method: 'HEAD' });
  if (r.status !== 200) missing.push(`${r.status} ${a}`);
}

const bad = [...seen].filter(([, s]) => s >= 400);
console.log(`pages crawled: ${seen.size}  (2xx: ${[...seen].filter(([, s]) => s < 300).length}, 3xx: ${[...seen].filter(([, s]) => s >= 300 && s < 400).length})`);
console.log(`broken internal: ${bad.length}`, bad.slice(0, 20));
console.log(`local assets referenced: ${assets.size}, missing: ${missing.length}`, missing.slice(0, 20));
console.log('external / mailto / tel destinations:');
for (const [href, from] of [...external].sort()) console.log(`  ${href}   (e.g. ${from})`);
