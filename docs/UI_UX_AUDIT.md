# UI/UX Audit — The Shala Bali (source site)

**Date:** 2026-10-12 · **Scope:** all 29 sitemap pages, measured from the live rendered DOM in headless Chrome 154 (computed styles, bounding boxes), at 1440px, 768px (11 main pages) and 390px (mobile UA).
**Goal of this audit:** record the site's *actual* visual identity so the rebuild reproduces it faithfully, and separately flag defects the rebuild should not reproduce.

Values marked **(measured)** come from `getComputedStyle` or pixel sampling. Values marked **(observed)** come from screenshots only. Nothing here is invented. Where a value could not be measured, it says so.

Raw data: `source-audit/capture-2026-10-12/data/<page>-<width>.json`, element-level listing in `source-audit/capture-2026-10-12/PAGE_CAPTURE_DETAIL.md`.

---

## 1. Platform facts that shape everything

| Fact | Evidence | Consequence for the rebuild |
|---|---|---|
| Wix classic editor: **fixed 980px content grid** (`--site-width: 980px`), centred; at 1440 the grid spans x = 230–1210 | (measured) | Reproduce a 980px content container; strips and hero images are full-bleed |
| **Separate mobile layout at a fixed 320px width**, scaled by the browser; not responsive CSS | (measured) docWidth 320 on every page at 390 | The rebuild must be genuinely responsive; mobile **content order** comes from the Wix mobile layout |
| **No tablet layout.** At 768px the desktop layout renders 980–1200px wide and **scrolls horizontally** | (measured) docWidth 980–1200 at 768 | Tablet layouts must be designed; do not reproduce the overflow |
| Pages are stacks of full-width **strips** (sections) holding absolutely-positioned elements | (measured) section boxes | Recreate as flow-layout sections that match proportions, not absolute positioning |

---

## 2. Visual identity

### 2.1 Logo and marks

| Asset | Description | Where |
|---|---|---|
| Full lockup `4c89f1_9d1ede72…_d_5000_5000_s_4_2.png` (5000×5000) | Bodhi leaf (teal→mint gradient) over three grey brushed stripes, with the "The Shala Bali" wordmark | Site icon |
| Mark `4c89f1_bab7b437…png` | Leaf + stripes only | Site icon / favicon |
| Header wordmark `4c89f1_732e2d9c…png` (rendered 199×30) + leaf mark `4c89f1_f402c516…png` (95×42) | Teal "The Shala Bali" wordmark stacked over the leaf mark | Home header only |
| Tagline "Yoga Retreat & Ayurvedic Spa" | **Live text** in Tangerine (20px desktop, 17px mobile), white over the hero on Home and #717070 elsewhere; links to `/baliyogaretreat` | Every header |

Only raster logo files exist (PNG). No SVG was found.

### 2.2 Colour palette (measured)

**Surfaces**

| Token (proposed name) | Value | Where used | Measured from |
|---|---|---|---|
| `--color-bg` | `#FFFFFF` | Page background, cards | page bg layer |
| `--color-sand` | `#F6EBE4` | Warm bands: "Choose your journey", Accommodation options, Contact blocks, spa menu band | bg layers on 5+ pages; pixel sample `#F5EBE2` |
| `--color-blush` | `#FFF5F0` | Room-profile bands on accommodation pages | bg layers |
| `--color-mist` | `#FAFAFA` | Home photo-collage strip | bg layer |
| `--color-panel` | `rgba(236,236,236,.8)` | Panchakarma FAQ panel | bg layer |
| `--color-drawer` | `#4A4A4A` | Mobile menu drawer | pixel sample |
| White overlay | `rgba(255,255,255,.35)` | Home video strip overlay | bg layer |

**Text**

| Token | Value | Share of all text (main pages) | Role |
|---|---|---|---|
| `--color-text` | `#4A4A4A` | 70% | Body copy, lists, nav default, header rule |
| `--color-text-muted` | `#717070` | 27% | Titles (script), intro paragraphs, secondary text |
| `--color-accent` | `#01B1AF` | small | **Active nav item**, some links |
| `--color-accent-hover` | `#009DA6` | n/a | **Nav hover** (measured on hover) |
| `--color-price` | `#36B5CD` | small | Package prices (Cormorant Italic, underlined links) |
| `--color-link-alt` | `#577083` | small | Occasional inline link colour |
| `--color-forest` | `#0C4426` | small | Thin button borders (room-page CTAs) |
| On-image | `#FFFFFF` | small | Hero overlay text, "A Day in Paradise" |

**Wix theme palette** (declared in `--color_0…65`): greys `#FFFFFF #ECECEC #909090 #717070 #4A4A4A`, greens `#ADE6B3 #89CC90 #5BB364 #039912 #014D09`, teals `#B2E9D5 #91D3BA #64BC9C #0AA66D #055336`. Of these, only the greys and `#5BB364` (an underlay behind half-width images, normally covered) are actually visible. The brand teal of the logo (`#01B1AF`) is applied directly, not via the theme.

**Photographic palette** (from the earlier audit's sampling): teak, thatch, paddy green, ivory and terracotta. The photography carries the warmth; the UI itself is near-monochrome grey on white and sand.

### 2.3 Typography (measured; font files identified from their embedded name tables)

| Family | Files on site | Licence | Role | Share |
|---|---|---|---|---|
| **Bellota** (Regular; also Bold, Italic, Light, Bold Italic) | `ufonts/428110_59fa…`, `800ab1_b883…` (Bold), `f73cef_e9c5…` (Italic), `f73cef_b799…` (Light), `800ab1_b140…` (Bold Italic) | SIL OFL (Google Fonts) | Body, lists, "Contact Us", nights labels | ~80% of all text |
| **Tangerine** (Regular, Bold) | `4c89f1_3d92…`, `4c89f1_5da9…` (Bold) | SIL OFL (Google Fonts) | Page titles, card titles, the header tagline, **"Book Now" button labels** | |
| **Italianno** | `4c89f1_9004…` (Wix theme heading font) | SIL OFL | FAQs / Testimonials / Blog titles, "A Day in Paradise" | |
| **Darker Grotesque Medium** | `663a12_47b0…` | SIL OFL | Desktop navigation | |
| **Cormorant Italic** | `baa45d_0d09…` | SIL OFL | Package prices | |
| DIN Next W01 Light | Wix system font | Proprietary (Monotype via Wix) | Mobile drawer menu items | |
| Raleway, Open Sans, Dancing Script, Playfair, Sacramento, Cinzel (Decorative), Libre Baskerville | Google | OFL | Isolated uses on the blog, old home, events page and organic-cafe page | |
| Museo Slab, Brandon Grotesque, Futura, Bree, Belinda, American Typewriter | Wix system | Proprietary | **Template-placeholder pages only** | |

**Type scale as rendered (desktop → mobile)**

| Role | Family | Desktop | Mobile | Colour | Notes |
|---|---|---|---|---|---|
| Nav item | Darker Grotesque Medium | 18px, line box 40–50px | 18px (DIN Next Light, letter-spaced, in drawer) | `#4A4A4A`; active `#01B1AF`; hover `#009DA6` | No underline |
| Page title (h1) | Tangerine / Tangerine Bold | **40–60px, inconsistent per page** (Personalized Retreats 40, Spa 44, Rooms 55 with 19–23px letter-spacing, Mumbai Station 56, Experiences 60) | 24–33px | `#717070` or `#4A4A4A` | Home has **no h1**; "Home of Wellness" is a `<p>` at 40px, 6px tracking |
| Section title (h2) | Tangerine Bold 30–44 / Italianno 30–40 / Bellota 40 ("Contact Us", 4px tracking) | 30–44px | 22–30px | `#717070` | Three different families for the same role |
| Card title (h4) | Tangerine | 30px | 22–27px | `#717070` / `#4A4A4A` | |
| Sub-heading (h3) | Bellota 22px, 1.1px tracking ("Choose your journey") | 22px | 17px | `#717070` | |
| Body | Bellota Regular | **16px**, line-height 22.4 / 28.8 / 30.8 / 33.6px (1.4–2.1) | **12–14px** | `#4A4A4A` / `#717070` | Mostly centred text |
| Small body / lists | Bellota | 14px / 25.2–28.8px | 14px | `#4A4A4A` / `#717070` | Package inclusions, amenities |
| Fine print | Bellota | **10px** / 14px | 10px | `#4A4A4A` | "Quoted price is for 6 nights…" |
| Price | Cormorant Italic | 20px / 30px, underlined | 19px | `#36B5CD` | Prices are mailto links |
| Nights label | Bellota Bold | 15px, 0.75px tracking (h2!) | 15px | `#4A4A4A` | |

### 2.4 Buttons and links (measured)

| Variant | Where | Default | Hover (from CSS rules) |
|---|---|---|---|
| **Script "Book Now"** | Retreat & Panchakarma cards | White bg, 1px `#ECECEC` border, **5px radius**, 120×40, Tangerine Bold 20px `#717070` | Label underlines, letter-spacing 0.1em, text `#4A4A4A` |
| **Room "Book"** | Accommodation profiles | White bg, 1px `#0C4426` border, 0 radius, small (≈60×20 at desktop), 10px label | not captured |
| **Plain text-box button** ("Email", "Coming soon", "BOOK NOW" on the spa page) | Contact blocks, brochure | White bg, no border, 0 radius, 142×40, Bellota 16px `#717070` | not captured |
| **Ghost on image** | "A Day in Paradise", host page | Transparent, 1px `rgba(255,255,255,.63)` border, 5px radius, Bellota 20px white | `rgba(255,255,255,.47)` fill; label switches to Tangerine Bold |
| **Translucent tile buttons** | Old-home hero tiles (Host a Retreat / Personal Retreat / Experiences / Ayurvedic Spa) | `rgba(255,255,255,.51)` or `rgba(74,74,74,.2)` with 1px `rgba(144,144,144,.77)` border, 7px radius, Tangerine script labels | observed |
| Text link | Inline ("see menu", "Experiences Menu") | Underlined, inherits colour, sometimes bold | colour transition 0.4s |

There are **no focus styles** beyond browser defaults, and no pressed or disabled states are designed.

### 2.5 Shapes, borders, shadows, imagery (measured / observed)

| Element | Treatment |
|---|---|
| **Arch frame** (rounded top, flat bottom) | Signature motif: "What sets us apart" (Retreats), "Bring your vision to life" (Host), "Our ethos" (Spa). On those pages the arch holds a **muted autoplay video**, not a still. Implemented by Wix as a shape mask, not border-radius (observed) |
| Package card | 315×1172 white card, 1px radius, `box-shadow: 0 0 10px rgba(0,0,0,.08)`; image 318×238 with `0 1px 3px rgba(0,0,0,.15)` |
| Spa pillar / Experience cards | Image 306×226, **10px radius**, `0 1px 3px rgba(0,0,0,.5)` |
| Spa menu panel | 980×556 white, 5px radius, `0 0 3px rgba(0,0,0,.3)` |
| Accommodation-option thumbnails | 306×204, 1–5px radius, no shadow |
| Hero images | Full-width with a **10px inset** (1420 wide at 1440), ~524–540px tall, `object-fit: cover` |
| Room galleries | Full-bleed 3-column grid, 470×269 tiles (~16:9), 6 per gallery, small gutters |
| Half-split strips | 50/50 image + text strips (retreat "We'll take care of you / nourish / transport") |
| Header rule | 3px solid `#4A4A4A` under the header |
| Icons | Raster PNG social icons (29px desktop, 35px mobile); a "signal bars" glyph next to room names |

---

## 3. Layout (measured at 1440)

| Item | Value |
|---|---|
| Content width | 980px centred (x 230–1210) |
| Header | 54px tall, **sticky** (`position: sticky`), transparent background, 3px bottom rule; Home header is 62px with the logo lockup |
| Hero | 524–540px tall image, 10px side inset (old home: full-width autoplay video hero 1420×673) |
| Video placement | Home: full-width looping video strip (1420×548) below the intro; Retreats / Host / Spa: autoplay muted video **inside the arch frame** (369×475, 386×484, 416×535) |
| Section rhythm | Strip heights vary widely (400–3400px); vertical spacing between text blocks ≈ 40–80px; no consistent scale |
| Card grids | 4-up packages (318px cards, ~21px gutter); 3-up experiences and spa pillars (306px, ~20px gutter); 3-up accommodation options |
| Text measure | Centred paragraphs up to ~940px wide (≈130 characters per line at 16px), too long |
| Footer | 35px Wix footer strip, effectively empty; contact blocks live in page content |
| Mobile | 320px layout, single column, 20px side padding; card grids stack; the room gallery becomes a 2-column grid |

---

## 4. Navigation and interaction (tested)

| Behaviour | Result |
|---|---|
| Desktop dropdown (Accommodation) | Opens on **hover**; translucent white panel, 140px wide, 33px rows, Darker Grotesque 18px; no click or keyboard toggle observed |
| "More" overflow | Wix auto-overflow; appears on Home only (the logo takes the space) |
| Active state | Text colour `#01B1AF` only |
| Hover | Colour transition to `#009DA6` (0.4s ease) |
| Sticky header | Stays at top while scrolling (measured top = 0 at scrollY 2116) |
| Mobile menu | ☰ (50×50) → **left drawer**, `#4A4A4A`, DIN Next Light 18px with wide letter-spacing, white text with dividers, "+ Accommodation" expander, **"Accommodation" label clipped** by the drawer edge, "×" close at top right |
| Room galleries | Click → **full-screen lightbox** (dark overlay, image centred, ‹ › arrows, × close, URL gains `?lightbox=dataItem-…`) |
| Spa menu | Slideshow gallery of image panels with › arrows |
| Indian Cafe menu | 7-image gallery |
| Videos | Videos autoplay muted (loop on Home, Host, Spa; **not looped** on Retreats); "A Day in Paradise" uses the Wix Video player (Play Video / All Videos) |
| Map | Wix Google Maps iframe (445×321 desktop, 320×320 mobile) |
| Chat | Third-party Smartarget WhatsApp/iMessage bubble overlays the bottom right; on mobile it **covers the contact block and map** |
| Forms | **None** on real pages. Enquiries are `mailto:` and `wa.me` links |

---

## 5. Responsive behaviour

| Width | Behaviour on source |
|---|---|
| 1440 | 980 grid centred, full-bleed strips |
| 1280 | Same (not separately captured; the grid fits) |
| **768** | Desktop layout at 980–1200px wide → **horizontal scroll, content cut off at right** (all 11 main pages) |
| 390 / 375 | 320px mobile layout scaled up; single column; body text 12–14px |

**Mobile-specific observations**
- Price labels and figures are re-ordered on mobile retreat cards (e.g. "6 nights" printed after the 6-night price).
- The Experiences mobile hero has text overlapping the image.
- The home photo collage becomes a horizontally cropped grid with partial tiles at the edges.
- The chat widget overlaps content.
- Long empty gaps appear on several pages (old home, rooms).

---

## 6. Accessibility findings

| Area | Finding | Severity |
|---|---|---|
| Contrast | `#4A4A4A` on white = **8.9:1** ✓. `#717070` on white = **4.9:1** (passes AA, but at Bellota's thin strokes and 12–14px on mobile it reads faint). `#717070` on sand `#F6EBE4` = **4.2:1 ✗** (AA normal text). Active nav `#01B1AF` = **2.7:1 ✗**. Hover `#009DA6` = 3.3:1 ✗. Prices `#36B5CD` = **2.4:1 ✗** | High |
| Script fonts | Tangerine and Italianno used for titles **and button labels** ("Book Now") hurt legibility | Medium |
| Small text | 10px fine print; 12px mobile body | Medium |
| Headings | Home has no h1; h2 used for "3 nights" labels; heading levels skip (h1 → h4) | Medium |
| Alt text | Almost absent; where present it is the upload filename ("KLP_9117.jpg", "yoga.jpg") | High |
| Text in images | Spa menu (~25 panels) and Indian Cafe menu (7 images) are images of text | High |
| Keyboard | Dropdown opens on hover only; no visible focus styles; the mobile drawer label is clipped | High |
| Motion | Wix wraps entrance animations in `prefers-reduced-motion: no-preference` ✓; background videos autoplay with no pause control ✗ | Medium |
| Links | "Email" button and price links open mailto with no indication; the Google+ icon links nowhere | Low |

---

## 7. Faithful-reproduction vs. fix — recommended stance

The brief asks to reproduce the identity faithfully **and** apply professional UI/UX practice. Proposed rule: **keep everything that is identity, fix everything that is defect.**

| Keep exactly (identity) | Normalise (inconsistency) | Fix (defect; do not reproduce) |
|---|---|---|
| White / sand / blush palette, grey text, teal accent | Title sizes (one h1 scale instead of 40–60px per page) | Horizontal overflow at tablet widths |
| Bellota body, Tangerine script titles, Darker Grotesque nav, Cormorant Italic prices | Three families for section titles → Tangerine for titles, Italianno where it is used today | Contrast failures (darken accent or price colour for text uses only, e.g. teal for text at ≥4.5:1 while keeping `#01B1AF` for non-text) — **needs approval (Q7)** |
| 980px content grid, full-bleed strips, 10px-inset hero | Body line-height (pick 1.75) and measure (cap ~70ch) | Missing h1, heading misuse, alt text |
| Arch frames, card shadows, 5px script buttons | Button set → 4 variants above | Hover-only dropdown → hover + click + keyboard |
| Sticky header with 3px rule, left drawer on mobile | | Clipped drawer label, overlapping mobile hero text, re-ordered prices |
| Lightbox galleries, spa slideshow, background videos | | Menus as images → also provide HTML text (Q8) |
| Copy and photography verbatim | | Video pause control; no third-party chat script (Q9) |
