# The Shala Bali — website recreation

A premium redesign of [theshalabali.com](https://www.theshalabali.com) (Wix) built with Next.js (App Router,
JavaScript), React, CSS Modules and GSAP (ScrollTrigger, SplitText, DrawSVG). Content, photography, video and logo
are the original site's own; only the design is new. See `docs/DESIGN_SYSTEM.md` and `docs/CONTENT_DECISIONS.md`.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

## Structure

```
src/app/                 routes (App Router); template.js scopes GSAP per page
src/components/          layout, navigation, ui, sections, cards, gallery, media, blog
src/data/                verbatim page content (pages/*.js), blog posts (blog/*.json), asset-manifest.json
src/lib/animations/      GSAP registration + declarative data-attribute motion engine
src/lib/assets/          media-ID → local file lookup (fails the build if a file is missing)
public/assets/           logo, images (by page), videos + posters, icons, fonts
scripts/                 asset manifest builder, QA harness (CDP), link crawler, interaction tests
docs/                    research (sitemap, inventories, audits), CONTENT_DECISIONS.md, QA_REPORT.md
```

## Motion

Server components mark elements with `data-anim`, `data-stagger`, `data-hero-item`, `data-parallax` and
`data-bg-reveal`; `src/lib/animations/effects.js` turns them into GSAP tweens inside a `gsap.context`
created by `app/template.js`, so animations are reverted on every route change. Everything is visible
without JavaScript and under `prefers-reduced-motion`.

## QA

```bash
node scripts/qa/links.mjs http://localhost:3000
node scripts/qa/check.mjs --base http://localhost:3000 --paths /,/faqs --widths 1440,768,390 [--reduced] [--shots dir]
node scripts/qa/interactions.mjs http://localhost:3000 9333   # needs headless Chrome on that port
```

## Content ownership

All copy, photography, video and the logo belong to The Shala Bali.
