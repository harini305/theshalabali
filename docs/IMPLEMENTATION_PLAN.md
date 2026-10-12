# Implementation Plan — The Shala Bali rebuild (Next.js · JavaScript · App Router · GSAP)

**Date:** 2026-10-12 · **Status:** proposal awaiting approval. No application code, packages, git or deployment yet.
**Supersedes:** `PHASE-0-AUDIT-AND-PLAN.md`, which was written for an earlier *redesign* brief (new palette and fonts, a "Three Lines" concept). The current brief asks for a **faithful recreation** of the source's identity, so that creative direction is withdrawn. The file is kept for history; its verified facts are carried into the new documents.

Companion documents: [SITEMAP.md](SITEMAP.md) · [PAGE_CONTENT_INVENTORY.md](PAGE_CONTENT_INVENTORY.md) · [ASSET_INVENTORY.md](ASSET_INVENTORY.md) · [UI_UX_AUDIT.md](UI_UX_AUDIT.md) · [ANIMATION_SPECIFICATION.md](ANIMATION_SPECIFICATION.md)

---

## 1. Working directory (inspected, unchanged)

`D:\clone2` contains only `docs/`. It is not a git repository, has no `package.json`, and has no app code. Tooling verified: Node v24.13.0, npm 11.6.2, git 2.53.0, Chrome 154. ffmpeg is **not** installed. Separate projects in `D:\clone1` and `D:\site recreation` are untouched and will not be mixed in.

## 2. Decisions needed before building

Defaults are marked **(rec.)**. You can answer "use recommendations" for any of them.

| # | Decision | Options | Why it matters |
|---|---|---|---|
| **Q1** | Do you have the owner's permission to reuse The Shala Bali's photos, copy, logo and videos, and should the rebuild carry The Shala Bali brand? | Yes / no | Every asset belongs to the owner |
| **Q2** | Old home `/baliyogaretreat` (tiles, 3-video gallery, blog teaser, testimonial) | **Don't rebuild; redirect to `/` (rec.)** · rebuild as-is | Duplicate home with identical title/meta; several dead buttons |
| **Q3** | Orphan pages (real content, not in nav) | **Build: FAQs, Testimonials** and link them from the footer (rec.). **Skip:** the expired Special Offer, the past La Vie en Rose event, the 3 cafe drafts, Ayurvedic Wellness (mostly template), Causes. Optional: Organic Vegetarian Cafe | "Do not invent pages" vs. real but hidden content |
| **Q4** | Blog (75 posts, 2016–2020) | **Exclude from v1 (rec.)** · index-only · full migration | 75 posts were not inventoried in this phase |
| **Q5** | URLs | **Clean slugs + a redirect map from the Wix slugs (rec.)** · keep the Wix slugs (`/copy-of-general` etc.) | Readability vs. literal fidelity |
| **Q6** | Copy defects (typos, the "6 nights / 6 nights" label, "four vs three bungalows", Master Suites text copied from Deluxe, the mid-sentence cut on Experiences) | **Reproduce copy verbatim, fixing only spelling and obvious typos from a reviewed list (rec.)**; leave factual conflicts verbatim until the owner confirms · fix all · reproduce all | Must not invent or silently change facts |
| **Q7** | Contrast failures (teal active nav 2.7:1, price blue 2.4:1, grey on sand 4.2:1) | **Keep the exact colours for non-text and large text; darken only where small text fails AA (rec.)** · keep exactly | Accessibility vs. pixel fidelity |
| **Q8** | Spa menu (~19 image panels) and Indian Cafe menu (7 images) | **Keep the image slideshows exactly, plus an accessible text alternative (rec.)**, which needs transcription and your check of current prices · images only | Images of text are inaccessible |
| **Q9** | Third-party chat widget (Smartarget, misconfigured `tel:+8`) | **Replace with a native floating WhatsApp link to +62 812 3849 6136 (rec.)** · omit | No third-party scripts; the current widget is broken |
| **Q10** | Map | Google Maps iframe embed (as source) · **static "Open in Google Maps" link plus a map image (rec.)** | Privacy and performance vs. fidelity |
| **Q11** | Asset download | **Option A: 2560px Wix-rendered copies into `public/assets/` (rec.)** · B · C (see ASSET_INVENTORY §7) | Repo size (~590 MB of originals) |
| **Q12** | Videos | **480p MP4s as-is, with posters (rec.)** · install ffmpeg to compress · posters only | 5–27 MB per video |
| **Q13** | Mobile-only "Recipes" menu item (links to an empty page) | **Omit (rec.)** · keep | Empty destination |
| **Q14** | Brochure buttons ("Coming soon", or no link) | **Omit until a PDF exists (rec.)** · keep as disabled "Coming soon" | No dead controls allowed |
| **Q15** | Styling | **CSS Modules + global tokens (rec.)** · Tailwind | Brief allows either |

## 3. Route map (assuming the recommendations)

| New route | Source | Template |
|---|---|---|
| `/` | `/` | Home |
| `/retreat-packages` | `/retreat-packages` | RetreatPackages |
| `/panchakarma-retreats` | `/copy-of-retreat-packages` | Panchakarma |
| `/host-a-retreat` | `/copy-of-darshana-veda-spa` | HostRetreat |
| `/darshana-veda-spa` | `/darshanavedaspa` | Spa |
| `/indian-cafe` | `/mumbaistationindiancafe` | IndianCafe |
| `/accommodation/bungalows` | `/copy-of-villa-rooms` | RoomPage (shared template; 3 static params) |
| `/accommodation/deluxe-rooms` | `/copy-of-general` | RoomPage |
| `/accommodation/master-suites` | `/copy-of-villa-rooms-1` | RoomPage |
| `/experiences` | `/copy-of-services` | Experiences |
| `/faqs` | `/faqs` | Faqs (Q3) |
| `/testimonials` | `/testamonials` | Testimonials (Q3) |
| `not-found` | n/a | 404 in site style |

Redirects in `next.config.mjs`: each old Wix slug → its new route (permanent), plus `/baliyogaretreat` → `/` (Q2) and `/contact` → `/#contact`. Template pages get **no** route.

**Accommodation dropdown:** "Accommodation" stays a label (no overview page exists on the source), with the three children as on the source.

## 4. Architecture

```
src/
  app/
    layout.js                 fonts (next/font/google), SiteHeader, SiteFooter, skip link, metadata defaults
    page.js                   Home
    retreat-packages/page.js
    panchakarma-retreats/page.js
    host-a-retreat/page.js
    darshana-veda-spa/page.js
    indian-cafe/page.js
    accommodation/[type]/page.js   generateStaticParams → bungalows | deluxe-rooms | master-suites
    experiences/page.js
    faqs/page.js  testimonials/page.js
    not-found.js  sitemap.js  robots.js
    globals.css
  styles/tokens.css           colours, fonts, spacing, radii, shadows, z-index, motion (from UI_UX_AUDIT)
  components/
    layout/      SiteHeader (Server) · DesktopNav (Server + CSS hover/focus) · AccommodationMenu ("use client": click/keyboard)
                 MobileNav ("use client": drawer, focus trap) · SiteFooter · SkipLink
    ui/          Button (script | plain | ghost | outline), TextLink, ScriptHeading, BulletList, Icon
    sections/    HeroStrip, IntroBlock, ArchMedia (image | video), SplitFeature (image/text 50:50),
                 PackageCard + PackageGrid, RoomProfile, AccommodationOptions, CardGrid (experience / spa pillars),
                 ContactBlock, MapLink, Testimonial, FaqList, Band (white | sand | blush)
    gallery/     GalleryGrid + Lightbox ("use client", <dialog>), Slideshow ("use client")
    media/       BackgroundVideo ("use client": pause control, reduced motion)
    animation/   MotionProvider, FadeIn, BackgroundReveal  ("use client", GSAP)
  data/          site.js (contact, emails, mailto subjects, socials) · nav.js · home.js · retreats.js · panchakarma.js
                 host.js · spa.js · indianCafe.js · rooms.js · experiences.js · faqs.js · testimonials.js · assets.js (media ID → path, alt, size)
  lib/           gsap.js · mailto.js (builds mailto with the exact source subjects) · whatsapp.js · metadata.js
public/assets/   logo/ images/<page>/ videos/ icons/ (per ASSET_INVENTORY)
```

- **Server Components by default.** Client components only for the dropdown keyboard handling, the mobile drawer, the lightbox, slideshows, the video control and animation wrappers.
- **All content in `src/data/`**, copied verbatim from the inventory. JSX holds no business facts.
- **No raw colour or pixel values outside `tokens.css`** (checked with a grep in QA).
- **No backend:** enquiries stay `mailto:` / `wa.me` exactly as on the source (same addresses, same subjects); no forms exist on the real pages, so none are built.

### Dependencies (to install only after approval)
`next` (current stable), `react`, `react-dom`, `gsap`, `@gsap/react`; dev: `eslint`, `eslint-config-next`.
**QA:** reuse the zero-dependency Chrome DevTools harness already written for this research (`docs/source-audit/capture-2026-10-12/tools/`), extended for route, overflow, console and reduced-motion checks. This avoids Playwright's browser download. Playwright and axe-core can be added if you prefer them.

## 5. Design system (from UI_UX_AUDIT, values measured)

- **Colour tokens:** `#FFFFFF`, sand `#F6EBE4`, blush `#FFF5F0`, mist `#FAFAFA`, text `#4A4A4A`, muted `#717070`, accent `#01B1AF`, accent-hover `#009DA6`, price `#36B5CD`, forest `#0C4426`, border `#ECECEC`, drawer `#4A4A4A`.
- **Fonts:** Bellota (300/400/700 + italic), Tangerine (400/700), Italianno, Darker Grotesque 500, Cormorant italic, via `next/font/google`.
- **Type scale normalised from measured ranges:** h1 Tangerine `clamp(2rem, 1.2rem + 3vw, 3.5rem)`; h2 `clamp(1.6rem, …, 2.5rem)`; card title Tangerine 1.875rem; body Bellota 16px / 1.75; mobile body ≥ 15px (source: 12px); fine print ≥ 12px (source: 10px).
- **Layout:** `--container: 980px` (+ full-bleed bands); hero inset 10px; card shadows and radii as measured; arch frame via CSS `border-radius: 50% 50% 0 0 / 35% 35% 0 0` (approximation of Wix's shape mask, to be tuned visually against the screenshots).
- **Breakpoints:** 0–767 (single column, faithful to the Wix mobile order), 768–1023 (**new tablet layout**: 2-column cards, no overflow), ≥1024 (desktop 980 grid).

## 6. Build order and gates

| Step | Work | Gate |
|---|---|---|
| 0 | Phase 3 asset download per Q11/Q12 → `public/assets/`, download log, verify counts | You approve the download option |
| 1 | `create-next-app` (JS, App Router, ESLint, no Tailwind, `src/`), tokens, fonts, `site.js`/`nav.js`, layout shell (header, dropdown, mobile drawer, footer, skip link, 404) | |
| 2 | **Home** + MotionProvider/FadeIn/BackgroundReveal; run `next dev`; compare side-by-side with source screenshots at 1440/768/390 | **Review gate A: you review Home on localhost** |
| 3 | RoomPage template → Bungalows, Deluxe Rooms, Master Suites (RoomProfile, GalleryGrid + Lightbox) | |
| 4 | Retreat Packages (PackageGrid, SplitFeature, AccommodationOptions), Panchakarma (programmes, doctor bio, FAQ) | |
| 5 | Spa (ArchMedia video, Slideshow menu, pillars, ContactBlock), Indian Cafe (Slideshow menu), Host a retreat, Experiences | |
| 6 | FAQs, Testimonials (Q3); redirects; metadata per page (titles/descriptions copied from the source where they exist); sitemap.js/robots.js | |
| 7 | Full QA (§7), fixes, `next build` | **Review gate B: local preview approval** |
| 8 | GitHub: show repo name, file list, `git status`, secrets check, then push **only on explicit approval** | **Gate C** |
| 9 | Vercel: confirm account/project, deploy **only on explicit approval**, verify the live URL | **Gate D** |

## 7. QA plan

- **Routes:** every route returns 200; every internal link resolves; every `mailto:`/`wa.me` matches the source address and subject.
- **Widths:** 375, 390, 768, 820, 1024, 1280, 1440, 1920. Check: no horizontal overflow (`scrollWidth === innerWidth`), no overlapping elements, full-page screenshots compared side by side with the source captures.
- **Console:** no errors, no hydration warnings, no React key warnings.
- **Animation:** ScrollTrigger count is stable after 5 navigations; resize cycles; `prefers-reduced-motion: reduce` gives static, visible content and no video autoplay.
- **Accessibility:** keyboard pass (skip link, dropdown, drawer focus trap and Esc, lightbox arrows and Esc, slideshow); visible focus; one h1 per page; alt text on every image; contrast spot-checks.
- **Assets:** every `<img>`/`<video>` has a 200 response and `naturalWidth > 0`.
- **Build:** `next build` succeeds; `next lint` is clean.
- Anything not verified is reported as unverified.

## 8. Risks and limitations

| Risk | Mitigation |
|---|---|
| Owner rights to content (Q1) | Gate before any download or publication |
| ~590 MB originals; videos 5–70 MB | Q11/Q12 options; `next/image` for responsive delivery |
| 3 Wix Video items are token-protected | Posters only, unless the owner supplies the files |
| Wix fixed-position layouts don't map 1:1 to responsive flow | Match proportions and order per the screenshots; new tablet layout |
| Exact arch-mask geometry, glide-in distance and drawer timing were not measurable | Tune visually against the screenshots; documented as approximations |
| Content conflicts (prices labels, room counts, copied suite text, outdated FAQ facts) | Reproduced verbatim unless the owner confirms changes (Q6) |
| DIN Next (mobile menu) is proprietary | Substitute Darker Grotesque |
| Third-party embeds (map, chat) | Q9/Q10 |
| Spa/cafe menu prices are only in images | Transcription needs your verification (Q8) |
| Blog not inventoried | Excluded unless Q4 says otherwise |
