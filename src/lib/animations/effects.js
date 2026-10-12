'use client';

import { gsap, ScrollTrigger, SplitText } from './gsap';

/*
  Declarative motion for the premium redesign. Server components describe intent with data attributes;
  this module builds the GSAP timelines inside the page's gsap.context (app/template.js), so everything
  is reverted on route change and nothing is duplicated.

  data-hero                  page-load sequence container. Children:
    data-hero-split          heading split into masked lines/chars that rise in
    data-hero-fade           fades/rises in after the heading
    data-hero-draw           SVG whose [data-draw] paths are drawn
  data-split[="chars"]       heading split into masked lines (or chars) that rise on scroll
  data-reveal="up|fade|scale|left|right"
  data-stagger / data-stagger-item
  data-img-reveal            mask wipe up + image settles from a zoom
  data-parallax="0.15"       [data-parallax-media] drifts while the element crosses the viewport (desktop)
  data-scrub-words           words brighten one by one, scrubbed to scroll
  data-hero-media            hero media unmasks from an inset frame; [data-hero-zoom] settles from a zoom
  data-scroll-fade           hero copy drifts/fades while its section scrolls out
  data-horizontal            pinned horizontal scroll of [data-horizontal-track] (desktop only)
  data-expand                media grows from an inset rounded frame to full bleed, scrubbed
  data-counter               counts up to the number in its text
  data-draw (on SVG paths)   drawn when scrolled into view
*/

const START = 'top 85%';
let firstLoad = true;
const pending = { tweens: [], items: [] };

function inInitialViewport(el) {
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight * 0.95 && r.bottom > 0;
}

function track(t) {
  pending.tweens.push(t);
  return t;
}

/* ---------- Page-load hero ---------- */
// Built once the web fonts are ready so line breaks are final. Each split heading gets its own tween
// (not a shared timeline) so an automatic re-split on resize simply shows the settled text.
function hero(root) {
  root.querySelectorAll('[data-hero]').forEach((h) => {
    gsap.set(h.querySelectorAll('[data-hero-split]'), { opacity: 1 });
    let at = 0.15;
    // Media unmasks from an inset frame while the image settles from a slight zoom.
    h.querySelectorAll('[data-hero-media]').forEach((m) => {
      const inner = m.querySelector('[data-hero-zoom], [data-parallax-media]') || m.querySelector('img');
      gsap.fromTo(m, { clipPath: 'inset(6% 4% 6% 4% round 6px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 1.6, ease: 'expo.inOut' });
      if (inner) gsap.fromTo(inner, { scale: 1.18 }, { scale: 1, duration: 2.4, ease: 'expo.out' });
    });
    h.querySelectorAll('[data-hero-draw] [data-draw]').forEach((p) => {
      gsap.fromTo(p, { drawSVG: '0%' }, { drawSVG: '100%', duration: 2.6, ease: 'power2.inOut', delay: 0.1 });
    });
    h.querySelectorAll('[data-hero-split]').forEach((el) => {
      const chars = el.getAttribute('data-hero-split') === 'chars';
      const delay = at;
      at += 0.35;
      let played = false;
      SplitText.create(el, {
        type: chars ? 'lines,chars' : 'lines,words',
        mask: 'lines',
        linesClass: 'split-line',
        autoSplit: true,
        onSplit(self) {
          if (played) return undefined;
          played = true;
          return gsap.fromTo(chars ? self.chars : self.words, { yPercent: 115, rotate: chars ? 4 : 0 }, {
            yPercent: 0, rotate: 0, duration: 1.6, ease: 'expo.out', stagger: chars ? 0.035 : 0.06, delay,
          });
        },
      });
    });
    const fades = h.querySelectorAll('[data-hero-fade]');
    if (fades.length) gsap.fromTo(fades, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 1.3, ease: 'expo.out', stagger: 0.12, delay: at + 0.25 });
  });
}

/* ---------- Scroll reveals ---------- */
function splits(root, skipVisible) {
  root.querySelectorAll('[data-split]').forEach((el) => {
    if (skipVisible && inInitialViewport(el)) return;
    const chars = el.getAttribute('data-split') === 'chars';
    SplitText.create(el, {
      type: chars ? 'lines,chars' : 'lines,words',
      mask: 'lines',
      linesClass: 'split-line',
      autoSplit: true,
      onSplit(self) {
        return track(gsap.fromTo(chars ? self.chars : self.lines, { yPercent: 110 }, {
          yPercent: 0, duration: 1.3, ease: 'expo.out', stagger: chars ? 0.025 : 0.09,
          scrollTrigger: { trigger: el, start: START, once: true },
        }));
      },
    });
  });
}

const FROM = {
  up: { autoAlpha: 0, y: 48 },
  fade: { autoAlpha: 0 },
  scale: { autoAlpha: 0, scale: 0.92 },
  left: { autoAlpha: 0, x: -60 },
  right: { autoAlpha: 0, x: 60 },
};

function reveals(root, { desktop, skipVisible }) {
  root.querySelectorAll('[data-reveal]').forEach((el) => {
    if (skipVisible && inInitialViewport(el)) return;
    let type = el.getAttribute('data-reveal') || 'up';
    if (!desktop && (type === 'left' || type === 'right')) type = 'up';
    const delay = parseFloat(el.getAttribute('data-delay')) || 0;
    track(gsap.fromTo(el, FROM[type] || FROM.up, {
      autoAlpha: 1, x: 0, y: 0, scale: 1, duration: 1.3, delay, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: START, once: true },
    }));
  });

  root.querySelectorAll('[data-img-reveal]').forEach((el) => {
    if (skipVisible && inInitialViewport(el)) return;
    const media = el.querySelector('img, video');
    const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
    tl.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'expo.inOut' });
    if (media) tl.fromTo(media, { scale: 1.35 }, { scale: 1, duration: 2, ease: 'expo.out' }, 0.15);
    track(tl);
  });

  root.querySelectorAll('[data-stagger]').forEach((group) => {
    const items = gsap.utils.toArray(group.querySelectorAll('[data-stagger-item]')).filter((el) => !(skipVisible && inInitialViewport(el)));
    if (!items.length) return;
    gsap.set(items, { autoAlpha: 0, y: 60 });
    pending.items.push(...items);
    ScrollTrigger.batch(items, {
      start: START,
      once: true,
      onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, duration: 1.2, ease: 'expo.out', stagger: 0.1, overwrite: true }),
    });
  });

  root.querySelectorAll('[data-counter]').forEach((el) => {
    // Keep the original figure on the element: a re-mount (e.g. React StrictMode) must not read the "0" frame.
    if (!el.dataset.counterValue) el.dataset.counterValue = el.textContent;
    const raw = el.dataset.counterValue;
    const target = parseFloat(raw.replace(/[^\d.]/g, ''));
    if (!Number.isFinite(target)) return;
    const decimals = (raw.split('.')[1] || '').replace(/\D/g, '').length;
    const obj = { v: 0 };
    track(gsap.to(obj, {
      v: target, duration: 2, ease: 'power2.out',
      onUpdate: () => { el.textContent = obj.v.toFixed(decimals); },
      onComplete: () => { el.textContent = raw; },
      scrollTrigger: { trigger: el, start: START, once: true },
    }));
  });

  root.querySelectorAll('svg [data-draw]').forEach((p) => {
    if (p.closest('[data-hero-draw]')) return;
    track(gsap.fromTo(p, { drawSVG: '0%' }, { drawSVG: '100%', duration: 2.2, ease: 'power2.inOut', scrollTrigger: { trigger: p.closest('svg'), start: START, once: true } }));
  });
}

/* ---------- Scrubbed effects ---------- */
function scrubbed(root, desktop) {
  root.querySelectorAll('[data-scrub-words]').forEach((el) => {
    SplitText.create(el, {
      type: 'words',
      autoSplit: true,
      onSplit(self) {
        return gsap.fromTo(self.words, { opacity: 0.16 }, {
          opacity: 1, stagger: 0.1, ease: 'none',
          scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 50%', scrub: 0.6 },
        });
      },
    });
  });

  root.querySelectorAll('[data-expand]').forEach((el) => {
    gsap.fromTo(el, { clipPath: desktop ? 'inset(8% 12% 8% 12% round 2px)' : 'inset(4% 5% 4% 5% round 2px)' }, {
      clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none',
      scrollTrigger: { trigger: el, start: 'top 90%', end: 'center 55%', scrub: 0.8 },
    });
  });

  root.querySelectorAll('[data-marquee]').forEach((el) => {
    const trackEl = el.querySelector('[data-marquee-track]');
    if (!trackEl) return;
    const loop = gsap.to(trackEl, { xPercent: -50, duration: parseFloat(el.getAttribute('data-marquee')) || 30, ease: 'none', repeat: -1 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const boost = gsap.utils.clamp(1, 5, 1 + Math.abs(self.getVelocity()) / 600);
        gsap.timeline({ overwrite: true })
          .to(loop, { timeScale: boost * self.direction, duration: 0.25 })
          .to(loop, { timeScale: self.direction, duration: 1.2 }, 0.35);
      },
    });
  });

  // Hero copy drifts up and fades as the hero scrolls away; the film eases back.
  root.querySelectorAll('[data-scroll-fade]').forEach((el) => {
    const section = el.closest('section') || el;
    gsap.to(el, { yPercent: -18, autoAlpha: 0.15, ease: 'none', scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true } });
    const zoom = section.querySelector('[data-hero-zoom]');
    if (zoom) gsap.to(zoom, { yPercent: 12, ease: 'none', scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true } });
  });

  if (!desktop) return;

  root.querySelectorAll('[data-parallax]').forEach((el) => {
    const media = el.querySelector('[data-parallax-media]');
    if (!media) return;
    const amount = (parseFloat(el.getAttribute('data-parallax')) || 0.15) * 100;
    gsap.fromTo(media, { yPercent: -amount / 2 }, { yPercent: amount / 2, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  root.querySelectorAll('[data-horizontal]').forEach((section) => {
    const trackEl = section.querySelector('[data-horizontal-track]');
    if (!trackEl) return;
    const distance = () => Math.max(0, trackEl.scrollWidth - section.clientWidth);
    gsap.to(trackEl, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: { trigger: section, start: 'top top', end: () => `+=${distance()}`, pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1 },
    });
  });
}

/* ---------- Scroll swap: sticky stage cross-fades to the active list item's photo ---------- */
function swaps(root, motion) {
  root.querySelectorAll('[data-swap]').forEach((section) => {
    const items = gsap.utils.toArray(section.querySelectorAll('[data-swap-item]'));
    const imgs = gsap.utils.toArray(section.querySelectorAll('[data-swap-img]'));
    const count = section.querySelector('[data-swap-count]');
    if (!items.length || imgs.length < 1) return;
    let current = 0;
    gsap.set(imgs, { autoAlpha: 0 });
    gsap.set(imgs[0], { autoAlpha: 1 });
    const activate = (itemIndex) => {
      items.forEach((it, i) => it.toggleAttribute('data-active', i === itemIndex));
      const next = Number(items[itemIndex].dataset.swapItem) || 0;
      if (next === current) return;
      const d = motion ? 0.8 : 0;
      gsap.to(imgs[current], { autoAlpha: 0, duration: d, ease: 'power2.out', overwrite: true });
      gsap.fromTo(imgs[next], { autoAlpha: 0, scale: motion ? 1.06 : 1 }, { autoAlpha: 1, scale: 1, duration: d * 1.4, ease: 'expo.out', overwrite: true });
      current = next;
      if (count) count.textContent = String(next + 1).padStart(2, '0');
    };
    items.forEach((it, i) => {
      ScrollTrigger.create({ trigger: it, start: 'top 55%', end: 'bottom 55%', onToggle: (self) => self.isActive && activate(i) });
    });
  });
}

function flushPending() {
  pending.tweens.forEach((t) => {
    if (t.progress() === 0) t.play();
  });
  const waiting = pending.items.filter((el) => parseFloat(getComputedStyle(el).opacity) < 0.05);
  if (waiting.length) gsap.to(waiting, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.06 });
}

/** Runs inside useGSAP (gsap.context scoped to the page); the context reverts it all on unmount. */
export function setupPageMotion(root) {
  const mm = gsap.matchMedia();
  const skipVisible = firstLoad;
  firstLoad = false;

  mm.add({ motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 1024px)' }, (ctx) => {
    const { motion, desktop } = ctx.conditions;
    if (!motion) {
      gsap.set(root.querySelectorAll('[data-hero] [data-hero-split], [data-hero] [data-hero-fade]'), { opacity: 1 });
      return undefined;
    }
    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
    fontsReady.then(() => ctx.add(() => hero(root)));
    // Pinned/scrubbed effects first: triggers are measured in creation order, so reveals created after a pin
    // account for its spacer.
    scrubbed(root, desktop);
    const footer = document.querySelector('body > footer');
    [root, footer].filter(Boolean).forEach((scope) => {
      splits(scope, skipVisible && scope === root);
      reveals(scope, { desktop, skipVisible: skipVisible && scope === root });
    });
    ScrollTrigger.create({ start: () => ScrollTrigger.maxScroll(window) - 4, onEnter: flushPending });
    return () => {
      pending.tweens = [];
      pending.items = [];
    };
  });

  // Scroll swap runs with or without motion (instant cross-fades when reduced), desktop only.
  mm.add({ desktop: '(min-width: 1024px)', motion: '(prefers-reduced-motion: no-preference)' }, (ctx) => {
    if (ctx.conditions.desktop) swaps(root, ctx.conditions.motion);
  });

  document.documentElement.classList.add('motion-ready');

  const refresh = () => ScrollTrigger.refresh();
  document.fonts?.ready.then(refresh);
  window.addEventListener('load', refresh, { once: true });
  const t = setTimeout(refresh, 1200);

  return () => {
    clearTimeout(t);
    window.removeEventListener('load', refresh);
    mm.revert();
  };
}
