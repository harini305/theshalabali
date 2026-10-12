// Builds src/data/asset-manifest.json: Wix media ID -> { src, w, h } for every file in public/assets.
// With --optimize, also downsizes oversized photos in place (max 2000px long edge) before measuring.
// Usage: node scripts/build-asset-manifest.mjs [--optimize]
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');
const pub = path.join(root, 'public');
const optimize = process.argv.includes('--optimize');
const MAX = 2000;
sharp.cache(false);

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}

const manifest = {};
let saved = 0;
for (const file of walk(path.join(pub, 'assets'))) {
  if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
  let meta = await sharp(fs.readFileSync(file)).metadata();
  if (optimize && Math.max(meta.width, meta.height) > MAX && !file.includes(`${path.sep}logo${path.sep}`)) {
    const before = fs.statSync(file).size;
    const img = sharp(fs.readFileSync(file)).rotate().resize({ width: MAX, height: MAX, fit: 'inside' });
    const buf = /\.png$/i.test(file)
      ? await img.png({ compressionLevel: 9, palette: false }).toBuffer()
      : await img.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
    if (buf.length < before) { fs.writeFileSync(file, buf); saved += before - buf.length; }
    meta = await sharp(fs.readFileSync(file)).metadata();
  }
  const id = path.basename(file);
  const src = '/' + path.relative(pub, file).split(path.sep).join('/');
  if (manifest[id] && manifest[id].src !== src) continue; // keep first copy
  manifest[id] = { src, w: meta.width, h: meta.height };
}
const out = path.join(root, 'src/data/asset-manifest.json');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(manifest, null, 1));
console.log('entries', Object.keys(manifest).length, 'saved MB', (saved / 1e6).toFixed(1));
