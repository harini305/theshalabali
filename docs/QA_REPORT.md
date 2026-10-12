# QA report — local production build

> **Re-run after the premium redesign (2026-10-12):** build OK (139 pages), lint clean, crawl 134/134 pages 200 with 0 broken links and 0 missing assets; 24 pages × 1440/1280/1024/768/390/375 all pass (no overflow, one h1, no console errors, nothing left hidden); reduced motion passes; 17/17 interaction tests pass (menu overlay focus trap/Esc/scroll lock, mega-menu keyboard, lightbox, slideshows); ScrollTrigger count stable (38) across 5 navigation round trips. The details below are from the earlier faithful-clone pass.

**Date:** 2026-10-12 · **Build:** `next build` (Next.js 16.4.0, Turbopack), served with `next start`.
**Tools:** `scripts/qa/check.mjs` (headless Chrome via CDP), `scripts/qa/links.mjs` (crawler), `scripts/qa/interactions.mjs`.

## Results

| Check | Result |
|---|---|
| `next build` | ✅ Succeeds; 139 static pages (24 routes + 75 posts + 7 blog pages + 32 archive months + sitemap/robots) |
| ESLint (`eslint-config-next/core-web-vitals`) | ✅ 0 errors, 0 warnings |
| Crawl from `/` and `sitemap.xml` | ✅ 134 pages, all 200; 0 broken internal links |
| Local assets referenced by pages | ✅ 312 checked, 0 missing |
| External / mailto / tel destinations | ✅ 30 listed and checked against the source (SITEMAP §6, PAGE_CONTENT_INVENTORY) |
| Widths 1440 · 1280 · 1024 · 768 · 390 · 375 (24 representative pages each) | ✅ No horizontal overflow, exactly one `<h1>`, no images without `alt`, no broken images, no console errors or hydration warnings, no content left hidden after scrolling |
| `prefers-reduced-motion: reduce` | ✅ All content visible; no entrance animation; videos do not autoplay (poster + play button) |
| Mobile drawer | ✅ Opens, locks scroll, moves focus inside, traps Tab, Esc closes and returns focus, marks the current page, Accommodation expander works, link navigation closes it |
| Desktop Accommodation dropdown | ✅ Hover (as source) plus keyboard/click; Esc closes and returns focus |
| Room gallery lightbox | ✅ Opens from a tile, ←/→ and swipe navigate, Esc closes, scroll restored |
| Spa menu (25 panels) / Indian Cafe menu (7 slides) | ✅ Arrows, keyboard, swipe (scroll-snap), click to enlarge |
| ScrollTrigger stability | ✅ Count stays at 10 over 5 Home ↔ Retreat Packages client-side round trips (no duplicated triggers) |
| Unknown / template URLs (`/about-1` etc.) | ✅ Branded 404 |

## Issues found during QA and fixed

- Blog grid overflowed by 56 px at 768 px (scrolling "Featured Posts" strip) → grid tracks set to `minmax(0, 1fr)`.
- Header nav overflowed by 7 px at exactly 1280 px → the one-row header starts at 1360 px; 1024–1359 px uses a two-row header.
- Organic cafe photos overflowed at 1024 px (aspect-ratio + stretch) → fixed heights on desktop.
- Elements in the last ~14% of short pages never reached their scroll trigger → end-of-page fallback reveals anything still pending.
- Drawer did not receive focus on open → made visible before focusing; hidden again on close.
- Blog post with non-ASCII slug ("tārā…") 404'd → route segments are decoded before lookup.
- Next 16 deprecation: `next/image` `priority` → `preload`.

## Not verified / out of scope

- Real devices (iOS Safari, Android Chrome) and browsers other than Chrome 154 headless were not tested.
- Lighthouse / Core Web Vitals were not measured.
- Screen-reader testing was not performed (semantic structure, labels and focus handling were checked programmatically).
- Pixel-level comparison against the source screenshots was done visually on a sample of pages, not automatically.
