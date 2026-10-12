(() => {
  const vis = el => { const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); return r.width > 2 && r.height > 2 && cs.visibility !== 'hidden' && cs.display !== 'none' && +cs.opacity > 0.05; };
  const R = el => { const r = el.getBoundingClientRect(); return [Math.round(r.left), Math.round(r.top + scrollY), Math.round(r.width), Math.round(r.height)]; };
  const out = { docHeight: document.documentElement.scrollHeight, docWidth: document.documentElement.scrollWidth, title: document.title };
  // text runs
  const texts = [];
  const seen = new Set();
  document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li,a,span,button,label,div').forEach(el => {
    const own = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join('').trim();
    if (!own || !vis(el)) return;
    const cs = getComputedStyle(el);
    const key = own.slice(0, 40) + R(el).join(',');
    if (seen.has(key)) return; seen.add(key);
    const blk = el.closest('h1,h2,h3,h4,h5,h6,p,li,button,a');
    texts.push({ tag: el.tagName.toLowerCase(), ctx: blk ? blk.tagName.toLowerCase() : '', t: own.slice(0, 120), ff: cs.fontFamily.split(',')[0].replace(/["']/g, ''), fs: cs.fontSize, fw: cs.fontWeight, fst: cs.fontStyle, lh: cs.lineHeight, ls: cs.letterSpacing, tt: cs.textTransform, ta: cs.textAlign, c: cs.color, td: cs.textDecorationLine, r: R(el), href: el.closest('a')?.getAttribute('href') || undefined });
  });
  texts.sort((a, b) => a.r[1] - b.r[1] || a.r[0] - b.r[0]);
  out.texts = texts;
  // sections / strips
  out.sections = [...document.querySelectorAll('section, [data-testid="columns"], #SITE_HEADER, #SITE_FOOTER, header, footer')].filter(vis).map(s => {
    const cs = getComputedStyle(s);
    return { id: s.id, tag: s.tagName.toLowerCase(), r: R(s), bg: cs.backgroundColor, bgImg: cs.backgroundImage.slice(0, 120), pos: cs.position };
  });
  // images
  out.images = [...document.querySelectorAll('img')].filter(vis).map(i => ({ src: (i.currentSrc || i.src).replace(/\/v1\/.*$/, ''), alt: i.alt, r: R(i), fit: getComputedStyle(i).objectFit, op: getComputedStyle(i).objectPosition, nat: [i.naturalWidth, i.naturalHeight] }));
  // background-image elements (wix bg media)
  out.bgImages = [...document.querySelectorAll('wow-image img, [data-testid="bgMedia"] img')].filter(vis).map(i => ({ src: (i.currentSrc || i.src).replace(/\/v1\/.*$/, ''), r: R(i) }));
  out.videos = [...document.querySelectorAll('video')].map(v => ({ src: v.currentSrc || v.src, poster: v.poster, r: R(v), autoplay: v.autoplay, loop: v.loop, muted: v.muted }));
  out.iframes = [...document.querySelectorAll('iframe')].map(f => ({ src: (f.src || '').slice(0, 200), title: f.title, r: R(f) }));
  // buttons / button-like links
  out.buttons = [...document.querySelectorAll('[data-testid="linkElement"], button, a[role="button"], .StylableButton2545352419__root, [data-testid="buttonElement"]')].filter(vis).map(b => {
    const cs = getComputedStyle(b);
    const lbl = b.querySelector('span') || b; const ls = getComputedStyle(lbl);
    return { t: b.innerText.trim().slice(0, 60), href: b.getAttribute('href') || b.closest('a')?.getAttribute('href'), r: R(b), bg: cs.backgroundColor, border: `${cs.borderTopWidth} ${cs.borderTopStyle} ${cs.borderTopColor}`, radius: cs.borderRadius, pad: cs.padding, ff: ls.fontFamily.split(',')[0], fs: ls.fontSize, fw: ls.fontWeight, c: ls.color, ls: ls.letterSpacing, tt: ls.textTransform };
  });
  // nav
  const nav = document.querySelector('nav, [data-testid="menu"], #SITE_HEADER [role="navigation"]');
  out.nav = nav ? [...nav.querySelectorAll('a,[aria-haspopup],li')].map(a => ({ t: a.innerText.trim().split('\n')[0], href: a.getAttribute('href'), r: R(a) })).filter(x => x.t).slice(0, 40) : null;
  // motion hints
  out.motion = [...document.querySelectorAll('[data-motion-enter], [data-angle], [data-motion-part]')].length;
  // root css vars (wix theme)
  const rs = getComputedStyle(document.documentElement);
  out.themeVars = {};
  for (let i = 0; i <= 65; i++) { const v = rs.getPropertyValue('--color_' + i).trim(); if (v) out.themeVars['color_' + i] = v; }
  for (let i = 0; i <= 10; i++) { const v = rs.getPropertyValue('--font_' + i).trim(); if (v) out.themeVars['font_' + i] = v; }
  out.bodyBg = getComputedStyle(document.body).backgroundColor;
  return out;
})()
