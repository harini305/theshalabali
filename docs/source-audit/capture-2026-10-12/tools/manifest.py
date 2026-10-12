import json, re
ids = json.load(open('asset-ids.json'))['images']
head = json.load(open('head-results.json'))
st = json.load(open('D:/clone2/docs/source-audit/images-structured.json', encoding='utf-8'))
FOLDER = {'home': 'home', 'baliyogaretreat': 'home', 'retreat-packages': 'retreats', 'copy-of-retreat-packages': 'panchakarma',
          'copy-of-darshana-veda-spa': 'host-a-retreat', 'lead-collection-1': 'host-a-retreat', 'darshanavedaspa': 'spa',
          'mumbaistationindiancafe': 'indian-cafe', 'copy-of-villa-rooms': 'accommodation/bungalows', 'copy-of-general': 'accommodation/deluxe-rooms',
          'copy-of-villa-rooms-1': 'accommodation/master-suites', 'copy-of-services': 'experiences', 'faqs': 'faqs', 'testamonials': 'testimonials',
          'copy-of-organic-vegetarian-cafe': 'shala-cafe', 'general-6-1': 'shala-cafe', 'copy-of-the-shala-cafe': 'shala-cafe', 'copy-of-the-shala-cafe-1': 'shala-cafe',
          'about-3-4': 'events', 'about-3-2': 'retreats', 'projects-6': 'causes', 'blog': 'blog', 'recipes': 'recipes'}
PRIORITY = list(FOLDER)
LOGO = {'4c89f1_bab7b4372309459aa58045ea700469c9~mv2.png': 'Logo mark (leaf + three stripes); site icon',
        '4c89f1_9d1ede72f7d04b67a270405c8997798e~mv2_d_5000_5000_s_4_2.png': 'Full logo lockup 5000×5000; site icon',
        '4c89f1_f402c51635334f089243e387079abd01~mv2.png': 'Header leaf mark (home header)',
        '4c89f1_732e2d9c5b074b8abdfc4f6be9041ef3~mv2.png': 'Header wordmark "The Shala Bali" (home header)', '4c89f1_beea449628054d7b8c303ccfa314816b~mv2.png': 'Mobile header logo mark', '4c89f1_15da0744df4a4c9ba75ec20b67e79aae~mv2.png': 'Mobile header wordmark'}
SOCIAL = {'0fdef751204647a3bbd7eaa2827ed4f9.png': 'Facebook icon', '05546d0902004bfabba0396e21f33f7d.png': 'Google+ icon (dead link)', '04b15d1b030049d1b3746f8ef5a72955.png': 'Instagram icon'}
rows = []
for k, pages in ids.items():
    if k.endswith('.webp') and not k.startswith(('a9ff3b', 'a3c153')):
        cat = 'derivative'
    elif k.startswith(('a9ff3b', 'a3c153')):
        cat = 'template'
    elif k in LOGO: cat = 'logo'
    elif k in SOCIAL: cat = 'icon'
    elif not k.startswith('4c89f1'): cat = 'wix-library'
    else: cat = 'owner'
    h = head['images'].get(k)
    status = (str(h[0]) if h else 'not checked')
    size = ((f"{h[2]/1e6:.1f} MB" if h[2] >= 1e6 else f"{h[2]/1e3:.0f} KB") if h and h[0] == 200 and h[2] else "")
    s = st.get(k, {})
    dims = f"{s['w']}×{s['h']}" if s.get('w') else ''
    m = re.search(r'_d_(\d+)_(\d+)_', k)
    if not dims and m: dims = f"{m.group(1)}×{m.group(2)}"
    alts = ', '.join(sorted(set(a for a in s.get('alt', []) if a)))[:50]
    prim = next((p for p in PRIORITY if p in pages), pages[0])
    if cat == 'logo': local = 'public/assets/logo/' + k
    elif cat == 'icon': local = 'public/assets/icons/' + k
    elif cat in ('template', 'derivative'): local = '— (do not download)'
    elif cat == 'wix-library': local = 'public/assets/icons/' + k + ' (verify)'
    else:
        f = FOLDER.get(prim, 'other')
        if len([p for p in pages if p in FOLDER]) >= 4: f = 'shared'
        local = f'public/assets/images/{f}/{k}'
    note = LOGO.get(k) or SOCIAL.get(k) or ''
    if cat == 'template': note = 'Wix template stock — exclude'
    if cat == 'derivative': note = 'WebP derivative (403); original JPG/PNG sibling is 200'
    if cat == 'wix-library': note = 'Wix shared library graphic (social/share icon) — confirm use'
    pg = ', '.join(pages) if len(pages) <= 4 else f"{len(pages)} pages incl. {', '.join(pages[:3])}"
    rows.append((['logo', 'icon', 'owner', 'wix-library', 'derivative', 'template'].index(cat), local, k, cat, pg, dims, size, status, alts, note))
rows.sort()
out = ['| # | Original file (static.wixstatic.com/media/…) | Type | Used on | Dimensions | Original size | HEAD status | Uploaded name / alt | Proposed local path | Notes |', '|---|---|---|---|---|---|---|---|---|---|']
for i, r in enumerate(rows, 1):
    _, local, k, cat, pg, dims, size, status, alts, note = r
    out.append(f"| {i} | `{k}` | {cat} | {pg} | {dims} | {size} | {status} | {alts} | `{local}` | {note} |")
from collections import Counter
c = Counter(r[3] for r in rows)
tot = sum(head['images'][r[2]][2] for r in rows if r[3] in ('owner', 'logo') and head['images'].get(r[2], [0])[0] == 200)
open('manifest-table.md', 'w', encoding='utf-8').write('\n'.join(out))
print(c, 'owner+logo bytes', tot / 1e6)
