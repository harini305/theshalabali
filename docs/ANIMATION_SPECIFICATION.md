# Animation Specification — The Shala Bali rebuild

**Date:** 2026-10-12
**Part 1** records what the source site actually animates (measured). **Part 2** specifies the GSAP + ScrollTrigger implementation: it reproduces the source effects, plus a small, clearly separated set of optional additions that need your approval.

---

## Part 1 — Source behaviour (measured)

**Method:** each page's server HTML contains Wix's generated motion CSS (`#comp-…:not([data-motion-enter="done"]){animation:…}` inside `@media (prefers-reduced-motion: no-preference)`), and Background-Reveal rules on `[data-motion-part="BG_MEDIA …"]`. These were extracted for all 29 pages and cross-checked in the live DOM by sampling `getComputedStyle().animationName` while scrolling. Wix entrance animations fire **when the element first enters the viewport**, once.

### 1.1 Global (every page)

| Element | Effect | Duration | Delay | Easing | Trigger |
|---|---|---|---|---|---|
| Header tagline "Yoga Retreat & Ayurvedic Spa" (`WRchTxt12-155k`) | Fade in (opacity 0→1) | **1800ms** | 1ms | `cubic-bezier(0.445, 0.05, 0.55, 0.95)` (easeInOutSine) | Page load |
| Desktop nav menu (`DrpDwnMn0-if`) | Fade in | **1800ms** | 1ms | same | Page load |

### 1.2 Per page

| Page | Element | Effect | Duration | Easing |
|---|---|---|---|---|
| Home `/` | Intro rich text ("Home of Wellness" block, `comp-kreolt0z`) | Fade in on enter | **1000ms** | easeInOutSine |
| Home `/` | Photo-collage strip (`comp-lalvrf05`, collage PNG) | **Background Reveal** (scroll-linked) | n/a | linear to scroll |
| Spa `/darshanavedaspa` | "Spa Menu" panel (`comp-kyvjeopv`) | Fade in on enter | **1500ms** | easeInOutSine |
| Old home `/baliyogaretreat` | Intro text `comp-iqaam5qz`; image matrix gallery `comp-iqm2em3z`; hero tile container `comp-kqusjrnn` | Fade in | 1800ms | easeInOutSine |
| Old home | 4 hero tile buttons (Host a Retreat / Personal Retreat / Experiences / Ayurvedic Spa) | Fade in | 1200ms each | easeInOutSine |
| Old home | Contact buttons "Email / Call Us" (`comp-krn8dtfy`, `comp-krn8dtgc`) | Fade in | 1200ms | easeInOutSine |
| Old home | `comp-krn8dtgk` (contact block element) | **Glide in** | 1200ms | easeInOutSine |
| Special Offer `/lead-collection-1` | Two content blocks | Fade in | 1200ms | easeInOutSine |

### 1.3 Background Reveal (scroll-linked)

Wix "BackgroundReveal": the strip's background image is sized `height: calc(100% + 200lvh); margin-top: -100lvh` and is counter-translated while scrolling, so the strip acts as a **window onto a fixed image** that is revealed as the strip passes. One strip per page:

| Page | Strip | Image |
|---|---|---|
| Home | Photo collage | `4c89f1_369ccd695482466dbd8787e5fd2fcd86~mv2.png` |
| Retreat Packages | Hero | `4c89f1_77fee1c3e92b4b8a82a5f6c9c550f1ac~mv2.jpg` |
| Panchakarma | Hero | `4c89f1_1a4f28c2509b4dbeaea8717fdc870bdc~mv2.jpeg` |
| Host a retreat | Hero | `4c89f1_a8172b96ac6d49c8a543556eabe74f46~mv2.jpg` |
| Spa | Hero | `4c89f1_c99f7f4b32994620be04ce96a38cbd57~mv2.jpg` |
| Indian Cafe | Hero | `4c89f1_6af07326a82b4e31b8f69b69059c0579~mv2.jpg` |
| Bungalows | Hero (`comp-l34265q31`) | `4c89f1_49daee6abfe346aeb35f3dcb964730e9~mv2_d_4096_2304_s_2.jpg` |
| Deluxe Rooms | Hero | `4c89f1_9c2225d3173d4119bbc92d79e9774029~mv2.jpg` |
| Master Suites | Hero | `4c89f1_d79480eaef6d4095800dbd11c00386b5~mv2.jpg` |
| Experiences | Hero | `4c89f1_9650f705e24349fdadf6872e0a9bfc1f~mv2.jpg` |
| Organic Cafe (orphan) | Hero | `4c89f1_f1415d1f60564d21bf24edff523030fc~mv2.jpg` |

### 1.4 Other motion

| Behaviour | Measured / observed |
|---|---|
| Nav hover | Colour `#4A4A4A` → `#009DA6`, `transition: color .4s ease` |
| Script "Book Now" hover | Underline + `letter-spacing: .1em`, colour → `#4A4A4A` |
| Ghost button hover | Background → `rgba(255,255,255,.47)`, label font switches to Tangerine Bold |
| Desktop dropdown | Appears on hover (Wix default, no measurable animation) |
| Mobile drawer | Slides in from the left over the page (Wix default) |
| Gallery lightbox | Opens over a dark overlay; prev/next transitions (Wix default) |
| Spa / Cafe menu slideshows | Slide transition on arrow click |
| Videos | Muted autoplay; loop on Home, Host, Spa; play once on Retreats |
| Page transitions | Wix keyframes `slide-horizontal`, `out-in` exist in the CSS, but the site uses none of them (navigation is a full page change) |
| Reduced motion | Wix wraps all entrance animations in `prefers-reduced-motion: no-preference` ✓; videos still autoplay ✗ |

**Not present on the source:** parallax (other than Background Reveal), staggered card entrances, pinning, scroll-jacking, text splitting, image clip reveals, hover zoom on images.

---

## Part 2 — Rebuild specification (GSAP 3 + ScrollTrigger)

### 2.1 Architecture

| Piece | Responsibility |
|---|---|
| `src/lib/gsap.js` | Imports `gsap` and `ScrollTrigger`, registers the plugin once (`gsap.registerPlugin(ScrollTrigger)`), exports both. Client-only module. |
| `src/components/animation/MotionProvider.jsx` (`"use client"`) | Wraps the app; sets `gsap.defaults({ ease: 'sine.inOut' })`; calls `ScrollTrigger.refresh()` after fonts load (`document.fonts.ready`) and on route change. |
| `src/components/animation/FadeIn.jsx` (`"use client"`) | `<FadeIn duration={1} delay={0} as="div">`: one element, one tween, `scrollTrigger: { start: 'top 85%', once: true }`. |
| `src/components/animation/BackgroundReveal.jsx` (`"use client"`) | Section with an oversized inner image; scroll-linked `yPercent` counter-translation (`scrub: true`). |
| `src/hooks/useReducedMotion.js` | `matchMedia('(prefers-reduced-motion: reduce)')` subscription. |

All tweens are created inside `useGSAP(() => {…}, { scope: ref })` from `@gsap/react`, which wraps `gsap.context()` and **reverts on unmount**. That prevents duplicate ScrollTriggers after re-renders, route changes and React Strict Mode double-mounting.

### 2.2 No flash of hidden content

- Server HTML renders **visible** content (no `opacity:0` in CSS).
- The hidden start state is applied by GSAP only, inside `gsap.matchMedia()` under `(prefers-reduced-motion: no-preference)`, and only for elements **below the fold** at load. Elements already in view at load (header, hero, first block) use the load-time fade from §2.3 with `immediateRender` and a CSS fallback.
- If JavaScript fails or is disabled, every element is simply visible.
- Global header fade: a CSS keyframe in `globals.css` inside `@media (prefers-reduced-motion: no-preference)`, `animation: fadeIn 1.8s cubic-bezier(.445,.05,.55,.95) both`. Per the brief, simple CSS is preferred over GSAP where CSS suffices.

### 2.3 Effect catalogue: faithful reproduction (default)

| ID | Effect | Implementation | Values (from source) | Used on |
|---|---|---|---|---|
| M1 | Header fade | CSS keyframe | 1.8s, `cubic-bezier(.445,.05,.55,.95)` | All pages |
| M2 | Fade in on enter | `FadeIn` → `gsap.from(el, { autoAlpha: 0, duration, ease: 'sine.inOut', scrollTrigger: { trigger: el, start: 'top 85%', once: true } })` | duration 1.0 / 1.2 / 1.5 / 1.8s per §1.2 | Home intro (1.0), Spa Menu (1.5), old-home elements (1.2 / 1.8) if migrated |
| M3 | Glide in | `gsap.from(el, { x: -60, autoAlpha: 0, duration: 1.2, ease: 'sine.inOut' })` with the same trigger. The direction and distance of the Wix glide were **not measurable** (defaults assumed: from the left, short distance) | 1.2s | Old home contact block, if migrated |
| M4 | Background Reveal | `BackgroundReveal`: inner image `height: calc(100% + 100vh)`; `gsap.fromTo(img, { yPercent: -X }, { yPercent: 0, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true } })`, with X computed so the image appears fixed | scroll-linked | The 11 strips in §1.3 |
| M5 | Nav / link hover | CSS `transition: color .4s ease` | `#009DA6` | Header, links |
| M6 | Button hover | CSS transitions (letter-spacing, underline, background) | per UI audit §2.4 | Buttons |
| M7 | Dropdown | CSS opacity/visibility transition 150ms; open on hover **and** focus/click (accessibility fix) | | Header |
| M8 | Mobile drawer | GSAP timeline: drawer `xPercent: -100 → 0` (0.35s, `power2.out`), overlay fade; reversed on close; focus trap; Esc closes | Source slides from the left; duration not measurable | Mobile header |
| M9 | Lightbox | CSS fade (200ms) for the dialog; image crossfade on prev/next | | Room galleries |
| M10 | Slideshow | GSAP `xPercent` slide (0.5s, `power2.inOut`) with arrows, swipe and keyboard | | Spa menu, Indian Cafe menu |

### 2.4 Optional enhancements (need your approval; **not** on the source)

The brief invites restrained GSAP polish. These would go beyond the original's motion, so they are listed separately:

| ID | Effect | Where | Spec |
|---|---|---|---|
| E1 | Section-title fade-up | Script page titles (h1) and section titles | `y: 16 → 0`, `autoAlpha`, 0.8s `sine.out`, once |
| E2 | Staggered card entrance | Package cards, experience cards, spa pillars, accommodation options | `y: 24 → 0`, `autoAlpha`, 0.7s, `stagger: 0.08`, `ScrollTrigger.batch` |
| E3 | Arch-frame reveal | Arch videos/images | `clip-path: inset(100% 0 0 0) → inset(0)`, 1.0s `power2.out`, once |
| E4 | Room gallery reveal | 3×2 grids | `autoAlpha` stagger 0.06s |

Rules for any approved enhancement:
- Max 1 effect per element.
- No pinning; no parallax beyond M4.
- Desktop-only for E3.
- All disabled under reduced motion.

### 2.5 Responsive and touch

- Wrap all ScrollTrigger setup in `gsap.matchMedia({ desktop: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)', mobile: '(max-width: 1023px) and (prefers-reduced-motion: no-preference)' })`.
- **M4 Background Reveal on mobile:** iOS Safari handles fixed-like backgrounds poorly, so on mobile M4 degrades to a static `object-fit: cover` image. The source's mobile layout shows these heroes as static strips (320×154).
- Fade distances and durations are unchanged on mobile; no horizontal motion under 768px (prevents overflow).
- Call `ScrollTrigger.refresh()` after images inside a trigger area load (`img.decode()`), on font load, and on resize (ScrollTrigger auto-refresh, debounced).

### 2.6 Reduced motion

`(prefers-reduced-motion: reduce)` →
- no entrance tweens (content static and visible);
- M4 becomes a static image;
- the drawer and lightbox open instantly (opacity only, ≤100ms);
- **videos do not autoplay**: the poster is shown with a play button;
- CSS transitions are kept for colour only.

### 2.7 Video behaviour (accessibility fix vs source)

- `autoplay muted playsinline` with a **visible pause/play control** (WCAG 2.2.2); `loop` as on the source (except Retreats: play once).
- The `poster` is always set (Wix `…f000.jpg` frames are available).
- `preload="metadata"`. Below-the-fold videos load via IntersectionObserver.

### 2.8 Performance budget and QA checks

- Animated elements per page ≤ 25; only `transform` and `opacity` are tweened (plus `clip-path` for E3 if approved).
- ScrollTrigger count per page ≤ 15. In development, log `ScrollTrigger.getAll().length` after navigation to catch duplicates.
- QA: navigate Home → Retreats → back ×5 and confirm the trigger count is stable; resize 1440 → 375 → 1440 and confirm there are no orphaned pin-spacers; run with `reducedMotion: 'reduce'` and confirm nothing animates and all content is visible.
