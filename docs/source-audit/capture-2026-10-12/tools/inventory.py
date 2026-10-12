import json, os, re, sys
SHOTS = sys.argv[1]; OUT = sys.argv[2]
FONTS = {'428110_59fa6a157d424fa89beff24e7571e5e9': 'Bellota', '4c89f1_5da941bfee064cff8a72f128ba8fc92f': 'Tangerine Bold',
         '4c89f1_90048580e1ed4953ad6b1d32ad0be0d6': 'Italianno', '663a12_47b0871b2ce34980baea472a6d71627a': 'Darker Grotesque Med',
         '4c89f1_3d9211df002b434f8438887834b8e21f': 'Tangerine'}
def font(ff):
    m = re.search(r'wfont_([0-9a-f]+_[0-9a-f]+)', ff)
    if m: return FONTS.get(m.group(1), ff)
    return ff
def rgb(c):
    m = re.findall(r'[\d.]+', c)
    if len(m) >= 3:
        h = '#%02X%02X%02X' % tuple(int(float(x)) for x in m[:3])
        if len(m) == 4 and float(m[3]) < 1: h += '@%.2f' % float(m[3])
        return h
    return c
def mid(src):
    m = re.search(r'(4c89f1_[0-9a-f]+(?:~mv2)?(?:f\d+)?\.[a-z0-9]+|[0-9a-f]{6}_[0-9a-f]+(?:~mv2)?\.[a-z]+|[0-9a-f]{32}\.(?:png|jpg))', src)
    return m.group(1) if m else src[-70:]
SKIP = re.compile(r'Jero Ari|Manager|Smartarget|Any questions|how can we|Hello, how|Retreat Manager|reply as soo|respond as soo')
slug_order = sys.argv[3].split(',')
lines = []
def order(items, W):
    imgs = [it for it in items if it[3].startswith('- IMG') and it[2] < W*0.45]
    # find width groups of >=2 same-size images -> card columns
    from collections import Counter
    wc = Counter(round(it[2]/6) for it in imgs)
    gw = [w for w,c in wc.items() if c >= 2]
    if not gw: return [it[3] for it in sorted(items)]
    anchors = [it for it in imgs if round(it[2]/6) in gw]
    cols = sorted(set(round(a[1]/10) for a in anchors))
    colx = []
    for c in cols:
        a = [x for x in anchors if round(x[1]/10) == c][0]
        if not any(abs(a[1]-cx[0]) < 25 for cx in colx): colx.append((a[1], a[1]+a[2]))
    rows = sorted(set(a[0] for a in anchors))
    rowy = []
    for r in rows:
        if not rowy or r - rowy[-1] > 80: rowy.append(r)
    top = min(rowy) - 120
    cells = {}; wide = []
    for it in items:
        y, x, w = it[0], it[1], it[2]
        col = next((i for i,(a,b) in enumerate(colx) if a-30 <= x and x+w <= b+40), None)
        if col is None or y < top: wide.append(it); continue
        row = max([i for i,r in enumerate(rowy) if r - 120 <= y] or [0])
        cells.setdefault((row, col), []).append(it)
    out = []; done = False
    for it in sorted(wide):
        if not done and it[0] > top and cells:
            for (r,c) in sorted(cells):
                out.append(f'  - _(card row {r+1}, column {c+1})_')
                out += ['  ' + z[3] for z in sorted(cells[(r,c)])]
            done = True
        out.append(it[3])
    if not done:
        for (r,c) in sorted(cells):
            out.append(f'  - _(card row {r+1}, column {c+1})_')
            out += ['  ' + z[3] for z in sorted(cells[(r,c)])]
    return out
for slug in slug_order:
    for w in (1440, 390):
        p = os.path.join(SHOTS, f'{slug}-{w}.json')
        if not os.path.exists(p): lines.append(f'\n#### `{slug}` @ {w}px — capture missing\n'); continue
        d = json.load(open(p, encoding='utf-8'))
        W = d['docWidth']
        secs = []
        for s in d['sections']:
            if s['tag'] in ('header', 'footer') or s['id'] in ('SITE_HEADER', 'SITE_FOOTER'): continue
            if s['tag'] != 'section': continue
            x, y, ww, hh = s['r']
            if ww < W * 0.95 or hh < 5: continue
            if any(abs(y - t[0]) < 3 and abs(hh - t[1]) < 30 for t in secs): continue
            secs.append((y, hh, s['bg']))
        secs.sort()
        def which(y):
            for i, (sy, sh, _) in enumerate(secs):
                if sy <= y < sy + sh: return i
            if secs and y < secs[0][0]: return -1
            return 999
        groups = {}
        for t in d['texts']:
            if SKIP.search(t['t']) or len(t['t'].strip()) < 2: continue
            cy = t['r'][1] + t['r'][3] / 2
            sty = f"{font(t['ff'])} {t['fs']}/{t['lh']} w{t['fw']}{' italic' if t['fst']=='italic' else ''} {rgb(t['c'])}{' ls'+t['ls'] if t['ls']!='normal' else ''}{' '+t['tt'] if t['tt']!='none' else ''} {t['ta']}"
            href = f" → `{t['href']}`" if t.get('href') else ''
            groups.setdefault(which(cy), []).append((t['r'][1], t['r'][0], t['r'][2], f"- [{t['ctx'] or t['tag']}] \"{t['t'].strip()}\" — _{sty}_{href}"))
        for im in d['images']:
            if 'svg' in im['src'] and 'media' not in im['src']: continue
            if im['r'][2] < 20: continue
            groups.setdefault(which(im['r'][1] + im['r'][3] / 2), []).append((im['r'][1], im['r'][0], im['r'][2], f"- IMG `{mid(im['src'])}` {im['r'][2]}×{im['r'][3]} at x{im['r'][0]} fit:{im['fit']}{' alt=\"'+im['alt'][:40]+'\"' if im['alt'] else ''}"))
        for v in d['videos']:
            groups.setdefault(which(v['r'][1] + 5), []).append((v['r'][1], v['r'][0], v['r'][2], f"- VIDEO `{v['src'][-70:]}` {v['r'][2]}×{v['r'][3]} autoplay={v['autoplay']} loop={v['loop']} muted={v['muted']}"))
        for f in d['iframes']:
            if not f['src'] or f['src'] == 'about:blank': continue
            groups.setdefault(which(f['r'][1] + 5), []).append((f['r'][1], f['r'][0], f['r'][2], f"- EMBED {f['title']} `{f['src'][:90]}` {f['r'][2]}×{f['r'][3]}"))
        for b in d['buttons']:
            if not b['t'] or b['fs'] == '18px' and b['r'][1] < 80: continue
            groups.setdefault(which(b['r'][1] + b['r'][3] / 2), []).append((b['r'][1], b['r'][0] + 0.5, b['r'][2], f"- BUTTON \"{b['t']}\" → `{b.get('href')}` — {b['r'][2]}×{b['r'][3]}, bg {rgb(b['bg'])}, border {b['border'].replace('rgb','').strip()}, radius {b['radius']}, {font(b['ff'])} {b['fs']} {rgb(b['c'])}"))
        lines.append(f"\n#### `{slug}` @ {w}px (layout width {W}px, page height {d['docHeight']}px)\n")
        if w == 1440 and d.get('scrolledHeader'): lines.append(f"Header when scrolled: {d['scrolledHeader']}\n")
        for k in sorted(groups):
            if k == -1: label = 'Header area'
            elif k == 999: label = 'Below last section (footer area)'
            else: label = f"Section {k+1} — y{secs[k][0]}, h{secs[k][1]}, bg {rgb(secs[k][2])}"
            lines.append(f"\n**{label}**\n")
            for s in order(groups[k], W): lines.append(s)
open(OUT, 'w', encoding='utf-8').write('\n'.join(lines))
print('written', len(lines))
