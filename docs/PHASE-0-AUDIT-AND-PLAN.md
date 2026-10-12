# Phase 0: Source Audit, Asset Inventory and Implementation Plan

**Project:** Website redesign (working name "Bali Bliss"; see Open Question Q1)
**Source:** https://www.theshalabali.com (Wix site, title "Yoga Retreat in Bali | Ubud | The Shala Bali")
**Audit date:** 2026-10-12
**Status:** Research only. No application code written, no packages installed, nothing pushed or deployed.

Raw evidence backing this document is in [`docs/source-audit/`](source-audit/):
`page-text/*.txt` (verbatim extracted copy per page), `page-data/*.json` (headings, links, metadata, media per page), `media-by-page.json` (every media file ID and where it appears), `blog-post-urls.txt`, and `screenshots/`.

---

## 1. Executive summary

- The source is a **Wix site for The Shala Bali**, a yoga retreat and Ayurvedic spa in Kedewatan, Ubud. It has **29 pages in its sitemap**. **11 are linked from the navigation.** The other 18 are orphans: real content (FAQs, testimonials, the organic café, a host special offer) mixed with unedited Wix template pages.
- It also has **74 blog posts (2016–2020)** and **12 placeholder "I'm a product" store pages**.
- **Booking is not transactional anywhere.** Every "Book" or "Book Now" control is a `mailto:` link with a prefilled subject line, or a WhatsApp `wa.me` link. The Wix Bookings app is installed, but no public booking page exists (`/book-online` returns 404). The redesign should preserve and improve these real enquiry paths, not invent a booking engine.
- **The assets are strong.** There are about 201 owner-uploaded media files: professional photography of rooms, the shala, spa, food and grounds, plus the logo set and 4 downloadable background videos. 55 further images are Wix template stock and must be excluded.
- **The current UX has real problems:**
  - Body text is thin, light grey and very small. The old grey measures about 2.5:1 contrast on white; WCAG AA needs 4.5:1.
  - Headings use a decorative script (Italianno) that is hard to read.
  - The mobile home hero renders blank.
  - Room pages have large empty gaps on mobile.
  - Master Suite descriptions are copy-pasted from the Deluxe Rooms page.
  - `/contact` redirects to a 404.
- **Critical open question:** the brand. Every asset, logo, page and contact detail says **"The Shala Bali"**, but the brief calls the project **"Bali Bliss"**. I need to know which name the new site carries before any design work (Q1).

---

## 2. Verified findings (method)

| Method | What it covered |
|---|---|
| `curl` of robots.txt and all 4 sitemaps | Full URL discovery: 29 pages, 74 posts, 12 products |
| `curl` of the raw HTML of all 29 pages, parsed with a local Python script | Titles, meta, canonicals, headings, all copy, every link, every media ID, fonts, installed Wix apps |
| Internal link graph across all 29 pages | Which pages are in the navigation and which are orphans |
| Headless Chrome (already installed) screenshots at 1440px and 390px | Home, Retreat Packages, Deluxe Rooms |
| Previews of the logo files and 8 representative photos | Brand marks, photographic palette |
| MP4 rendition probing on `video.wixstatic.com` | Which videos are retrievable |
| HTTP status checks | Redirects, 404s |

---

## 3. Page inventory

### 3a. Navigation (verified, identical on all 29 pages)

`HOME` · `Retreat Packages` · `Host a retreat` · `Panchakarma Retreats` · `Darshana Veda Spa` · `Indian Cafe` · `Accommodation ▾` (Bungalows, Deluxe Rooms, Master Suites) · `Experiences` · `More` (a Wix overflow container). The logo / tagline "Yoga Retreat & Ayurvedic Spa" links to `/baliyogaretreat`, not `/`.

**Footer:** the address, WhatsApp number, an Email link, and social icons for Facebook, Instagram and Google+. The Google+ icon has no link.

### 3b. Live pages (linked from the navigation)

| # | Page | Existing URL | Purpose and key content | Interactions | Proposed route |
|---|---|---|---|---|---|
| 1 | Home | `/` | Welcome / philosophy intro ("Home of Wellness"; Balinese and Indian philosophy; body, mind, spirit, earth), a photo collage, a contact block and a Google Map. A background video appears on desktop. | Email (manager4retreat@), map | `/` |
| 2 | Alt home | `/baliyogaretreat` | Older home page. It has the same title and meta description as `/`, plus a "Host a Retreat / Personal Retreat / Ayurvedic Spa" tile set, a 3-video "A Day in Paradise" gallery, a blog teaser, 6 photo tiles (About us, Stay with us, Retreats, Cuisine, Accommodation, Ayurvedic Spa), a Jessica testimonial, and links to Tripadvisor and Pinterest | tel:, mailto:theshalabali@ | Merge into `/`; **301** |
| 3 | Retreat Packages | `/retreat-packages` | "Personalized Retreats". Lists what sets them apart (8 points), then **5 packages**: Healthy Holiday, Spa Pamper, Ayurvedic Wellness, Yoga For You, and Yoga & Pilates. Prices are in IDR for 3, 6 and 12 nights. Then "We'll take care of you", "nourish and relax you", "& transport you to another world", and accommodation options. The brochure is marked "Coming soon". | 5× Book Now → mailto (marketing@ / manager4retreat@) | `/retreats` |
| 4 | Panchakarma Retreats | `/copy-of-retreat-packages` | Long-form Ayurveda copy and a benefits list (10 points). **3 programmes** (7, 14 and 21 nights) with an inclusions list and prices in IDR and USD for Bungalow and Deluxe rooms. A bio of **Dr. Komang Sudarmi**, and 8 FAQs. Copy appears recent (one photo is named "WhatsApp Image 2026-08-16"). | Book Now → mailto marketing@ | `/retreats/panchakarma` |
| 5 | Host a retreat | `/copy-of-darshana-veda-spa` | "Bring your vision to life", a pitch to yoga teachers, the Amy Landry testimonial, and accommodation options. Has a background video. | Request brochure → mailto | `/host-a-retreat` |
| 6 | Darshana Veda Spa | `/darshanavedaspa` | Ethos, hours (open daily 9:30am–8pm), and the name's meaning. Four pillars: ingredients, Ayurveda, nature, and Balinese massage and beauty. The **spa menu is about 25 image panels** (PNG and JPG). | BOOK NOW → wa.me/6281236325617; own Facebook and Instagram | `/spa` |
| 7 | Indian Cafe (Mumbai Station) | `/mumbaistationindiancafe` | Pure vegetarian and Sattvic food. "Our specialty" (masala dosa), the Ayurvedic menu, "How we add extra". The **menu is a 7-image gallery**. | Gallery lightbox | `/dining/mumbai-station` |
| 8 | Bungalows | `/copy-of-villa-rooms` | Darshana Bungalows and the Kasih bungalow ("pretty Balinese hut"), with amenity lists, sizes, capacity and 18 photos | Book → mailto (subject per room), gallery | `/stay/bungalows` |
| 9 | Deluxe Rooms | `/copy-of-general` | Ganesh & Jivana Rooms, Rahasia Rooms and Ganapati Rooms, with amenities, sizes and 19 photos | Book → mailto per room | `/stay/deluxe-rooms` |
| 10 | Master Suites | `/copy-of-villa-rooms-1` | Kasih, Ganapati and Rahasia suites with 19 photos. **The descriptions are wrong** (copied from Deluxe). | Book → mailto per suite | `/stay/master-suites` |
| 11 | Experiences | `/copy-of-services` | 7 workshops: Sacred Mala, Raw Dessert, Natural Skin Care (coming soon), Chocolate, Balinese Offering, Vegetarian Balinese Cooking, and Ayurvedic Cooking (coming soon). The Offering description is cut off mid-sentence in the source. | none | `/experiences` |

### 3c. Orphan pages (in the sitemap, not linked)

| Page | URL | Assessment | Recommendation |
|---|---|---|---|
| FAQs | `/faqs` | **Real, valuable content.** 15 Q&As covering founders, why Ubud, location, food, getting around, airport, visas, currency, Bali belly, vaccinations and safety. Some facts may be outdated (see Risks). | Restore as `/faqs` and link it from the navigation and footer |
| Testimonials | `/testamonials` | **Real.** 7 guest testimonials with names and locations. | Use them across pages; optional `/guest-stories` |
| Organic Vegetarian Cafe | `/copy-of-organic-vegetarian-cafe` | **Real copy** about the house café: breads baked in house, kombucha, cooking lessons, "Cook with us" | `/dining/shala-cafe` if the café still operates (Q5) |
| The Shala Cafe / Eat / Stay | `/general-6-1`, `/copy-of-the-shala-cafe`, `/copy-of-the-shala-cafe-1` | Three near-duplicates. Partly real ("Food made with love"), partly template placeholder text. | Mine for real copy and photos; 301 to `/dining` |
| Special Offer | `/lead-collection-1` | Host offer "Last Minute Availability, October 1st–10th, 2026", plus "Exclusive Host Benefits" (10 points). **The offer has expired** (today is 2026-10-12). | Keep the host benefits evergreen on `/host-a-retreat`; drop the dated offer unless renewed |
| La Vie en Rose Pilates Retreat | `/about-3-4` | A past partner event with The Collective Club, "October 2–7" (year not stated) | Archive; do not show as current (Q6) |
| Causes we love | `/projects-6` | One real entry (Villa Kitty); the rest is template text | Optional small section (Q7) |
| Ayurvedic Wellness Retreat | `/about-3-2` | One real intro paragraph; the rest is template | Fold the intro into the Ayurvedic package |
| Template pages | `/about-1`, `/about-3`, `/about-3-1`, `/about-3-3`, `/lead-collection`, `/recipes`, `/shop`, 12× `/product-page/*` | Wix placeholder ("This is your About Page…", fake team "Don Francis, Founder & CEO", "I'm a product A$85") | **Do not migrate.** 301 to the closest real page, or return 410 |
| Blog | `/blog` and 74 `/single-post/*` | Real articles from 2016–2020: Ayurveda, pranayama, Balinese culture, Ubud guides. Includes a 2013 template post and one titled "untitled". | Decision needed (Q4) |

### 3d. Broken or odd behaviour (verified)

- `/contact` → 301 → `/contact-us` → **404**.
- `/` and `/baliyogaretreat` have the **same title and meta description**, and each canonicalises to itself. Search engines see two competing home pages.
- 26 of 29 pages have **no meta description**. Their titles are Wix defaults like "Deluxe Rooms | theshalabali", and spellings include "Ayurevedic" and "testamonials".
- **Dead controls:** "Brochure" and "Download menu" go nowhere. The brochure is "Coming soon" on 4 pages. The Google+ icon is dead.
- **No `noindex` anywhere**, including the template pages, so placeholder text is publicly indexed.
- `http://theshalabali.com` → `https://theshalabali.com` → `https://www.theshalabali.com` (two hops).

---

## 4. Contact, booking and third-party inventory

| Item | Value (verified in source) | Where |
|---|---|---|
| Address | Jalan Sanggingan No. 90, Kedewatan, Ubud 80571, Bali, Indonesia | Home, Spa, alt-home |
| WhatsApp (main) | +62 812 3849 6136 | Home footer, alt-home `tel:` |
| WhatsApp (spa) | +62 812 3632 5617 → `wa.me/6281236325617` | Spa "BOOK NOW" |
| Email: general | `manager4retreat@gmail.com` | Home, Spa, cooking class, Healthy Holiday |
| Email: reservations | `theshalabali@gmail.com` | All room "Book" links, alt-home, brochure request |
| Email: retreats | `marketing.theshalabali@gmail.com` | Package and Panchakarma "Book Now" |
| Social | facebook.com/yogaretreatsandtrainingsubud · instagram.com/theshalabali · pinterest.com/theshalabali · Tripadvisor (d10542029) · Spa: facebook.com/darshanavedaspa, instagram.com/darshanavedaspa | |
| Video | vimeo.com/182361958 (linked from the blog) | |
| Installed Wix apps | WhatsApp Chat widget ("Jero Ari, Manager"), Simple Maps, Wix Blog, Wix Bookings (unused publicly), Wix Stores (template), Inffuse Testimonials, Conversion Popup, Events Calendar | |

**mailto subject lines to preserve:** "Reservation Darshana Bungalow", "Reservation Pretty Balinese Hut", "Reservation Ganesh / Jivana room", "Reservation Rahasia Green / Purple", "Reservation Ganapati room", "Reservation Kasih master Suite", "Reservation Ganapati Master suite", "Reservation Rahasia Master suite", "In-house retreat inquiry", "Yoga For You retreat booking", "Cooking Class Booking", "Retreat borchure request" (typo in source).

---

## 5. Asset inventory

| Category | Count | Notes |
|---|---|---|
| Owner media (`4c89f1_*`) | **~201 files** (excluding WebP duplicates) | Full IDs, dimensions and pages are in `source-audit/media-by-page.json` and `images-structured.json` |
| Logo, full lockup | `4c89f1_9d1ede72…_d_5000_5000_s_4_2.png` (5000×5000), `4c89f1_f402c516…png` | Bodhi leaf over three grey brushed stripes, with a teal-to-mint gradient and "The Shala Bali" wordmark |
| Logo, mark only | `4c89f1_bab7b437…png` | Leaf and stripes |
| Logo, wordmark | `4c89f1_732e2d9c…png` (591×89) | Raster only. **No SVG logo was found** (Q3) |
| OG / share image | `4c89f1_5d417439…jpg` | Yoga pose at the infinity pool |
| Hero panorama | `4c89f1_9c9162e8…jpg` (3000×833) | Sunset over the villa and rice paddies |
| Room photography | about 56 images across the 3 room pages | Mostly 4000–6000px originals |
| Spa | 1 hero, plus about 25 spa-menu panels | **The menu is text set inside images**, which is inaccessible; it should be transcribed to HTML (Q8) |
| Mumbai Station menu | 7 images (`9fa3b308…`, `8a416823…` and others) | Same as the spa: transcribe |
| Food / café | about 20 images | |
| Panchakarma | 7 images, including Dr. Komang | |
| Experiences | 7 images | |
| Blog images | about 25 on the index, more inside posts (not audited) | |
| **Background videos (MP4 retrievable)** | home `4c89f1_bd392a7a…` (720p) · alt-home `4c89f1_0cc538aa…` (1080p) · packages `4c89f1_64a7cfad…` (720p) · host `4c89f1_fa23ed75…` (1080p) | Not yet watched or measured |
| "A Day in Paradise" videos | `8e6a05ac…`, `b0ed979c…`, `180adbc7…` | **403** at the standard path. Posters are available, the videos are not (unverified) |
| Template stock to exclude | 55 files (`a3c153_*`, `a9ff3b_*`) | Wix-licensed placeholders. Do not use. |
| **Fonts in use** | Bellota (wordmark and body, ~1,600 uses), Italianno (script headings), Tangerine, Cormorant Italic, Darker Grotesque, Cinzel Decorative, Raleway, Open Sans | All are Google Fonts under the OFL licence, so they are free to self-host |
| Alt text | Almost none. Where present, it is filenames ("KLP_9117.jpg", "WhatsApp Image…") | All alt text must be written fresh |

**Photographic palette** (sampled from 8 representative photos): teak brown `#7a4726`, deep wood `#30281a`, thatch `#a19571`, paddy olive `#71704f`, sage `#a6b189`, ivory `#dddbc4`, terracotta `#bd7549`, sand `#d8c3a7`. The logo teal is the only cool colour in the brand.

---

## 6. Recommended creative direction

### Concept: "Three Lines": a terraced editorial

The logo's three brushed horizontal stripes sit behind the bodhi leaf, and they read naturally as **rice-terrace contours**. That is the organising idea of the design. It comes from the brand's own mark, not from another site.

- **Layout as terraces.** Pages are built from full-width horizontal bands that step down the page like a subak terrace. Content shifts between offset columns as you descend: text on a 7-column measure on the left, the next image breaking right. This produces the asymmetric, editorial rhythm the brief asks for without card grids.
- **The three-line rule** is the single decorative device. It appears as a hand-brushed triple stroke used for section breaks, the active-navigation underline and list markers. It is used sparingly, never as wallpaper.
- **Photography leads.** Large, mostly full-bleed or 2/3-width images with generous ivory margins. Rooms get a "room profile" spread: a field-notes table of facts (size, beds, view, bath) beside a tall image. This is not a card.
- **Packages and prices become a "ledger".** A real HTML `<table>` with nights across the top and packages down the side, set like a printed retreat brochure. This solves the current scrambled pricing cards.
- **Warm, not white.** An ivory and rice-paper ground replaces stark white, with deep teak text and the logo teal reserved for action.

### Colour strategy (contrast measured, WCAG 2.x)

| Token | Hex | Role | On ivory |
|---|---|---|---|
| `--ivory` | `#F7F2E8` | Page background | n/a |
| `--ricepaper` | `#ECE4D3` | Alternate band / surface | n/a |
| `--ink` (teak-900) | `#241B13` | Body text, also dark-band background | **15.2:1** |
| `--muted` | `#5E5244` | Secondary text, input borders | **6.8:1** |
| `--teal-800` | `#0F4F58` | Primary buttons, links (from the logo) | **8.3:1** |
| `--teal-700` | `#13646F` | Hover / secondary | 6.1:1 |
| `--moss-700` | `#4D6431` | Paddy accent, success-adjacent | 5.9:1 |
| `--turmeric-700` | `#94501E` | Restrained warm accent: eyebrows, price figures | 5.5:1 |
| `--turmeric-500` | `#C47A35` | Decorative only (rules, the three-line motif); never body text | 3.0:1 (large or graphic only) |
| `--sage-300` / `--mint` | `#A9B48C` / `#8FD3A0` | Decorative washes; mint is the logo gradient end | Not for text |
| `--error` / `--success` | `#A3321F` / `#2F6B3A` | Form states, always paired with an icon and text | 6.2:1 / 5.7:1 |

On dark teak bands, ivory text measures 15.2:1 and mint 9.7:1. For comparison, the old site's grey text measured about 2.5:1.

### Typography

| Role | Recommendation | Why |
|---|---|---|
| Display / headings | **Cormorant Garamond** (500–600, with italic for accents) | The current site already uses Cormorant Italic, so this keeps continuity. It is an expressive, high-contrast serif with an editorial feel. OFL. |
| Body / UI | **Figtree** (400 / 500 / 600) | Warm, very legible at small sizes, with good numerals for prices. OFL. Replaces the light-weight Raleway and Bellota body text. |
| Brand voice | **Bellota** for the logo wordmark only (supplied as an image) | Kept for continuity of the mark |
| Dropped | Italianno, Tangerine, Cinzel Decorative | These scripts fail legibility; the current headings in Italianno are the main readability problem |

Fonts are self-hosted through `next/font/google`, with no layout shift and no third-party requests at runtime.

**Fluid scale using `clamp()`:**

| Style | Range |
|---|---|
| Hero | 2.5→5rem, capped so that 3 lines fit at 360px |
| H1 | 2.25→3.75rem |
| H2 | 1.75→2.75rem |
| H3 | 1.375→1.75rem |
| H4 | 1.125→1.25rem |
| Body | 1.0625rem (17px), line-height 1.65, measure 60–70ch |
| Small / caption | 0.875rem, never under 14px |

### Imagery strategy

- Use only owner photos (`4c89f1_*`).
- The hero rotates between the paddy-sunset panorama, the shala, and the pool yoga image, used with art-directed crops per breakpoint.
- The collage image "8.png" is a pre-made montage and is not used. The original photos are used instead.
- Every image gets real, descriptive alt text written during the build.

### Motion principles (GSAP + ScrollTrigger)

1. **Settle, don't fly.** Text fades in with a 12–16px rise, 600–800ms, ease `power2.out`, staggered by 60ms at most.
2. **Image "terrace reveal".** A clip-path wipe from bottom to top, played once per image as it enters the viewport.
3. **Gentle parallax** of at most 6% on 2–3 hero images, desktop only.
4. **One pinned sequence at most**, on Home ("a day at the Shala": morning yoga → spa → dinner) and only if it earns its place in review.
5. Everything is wrapped in `gsap.matchMedia()` and gated on `prefers-reduced-motion: no-preference`. With reduced motion, content is simply visible.
6. Content is visible by default in the HTML. GSAP sets the initial hidden state only after hydration, so there is no flash of invisible content and no SEO risk.
7. Background video always has a visible pause control (WCAG 2.2.2) and a poster frame, and is not autoplayed when reduced motion is set.

### What we avoid

Three-card rows, pill buttons everywhere, glassmorphism, gradients (except the logo's own), decorative blobs, icon soup, and scroll-jacking.

---

## 7. UI/UX standards checklist

**Tokens** (single source: `src/styles/tokens.css`)
- [ ] Colour tokens as listed above, plus semantic aliases (`--color-bg`, `--color-text`, `--color-action`, `--color-focus` = teal-800 with a 3px offset ring).
- [ ] Spacing on a 4px base: `--space-1`…`--space-12` (4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160, 200). Section padding `clamp(64px, 10vw, 160px)`.
- [ ] Layout: `--measure: 68ch`; `--content: 1240px`; `--wide: 1440px`; 12-column grid with `--gutter: clamp(16px, 3vw, 32px)`.
- [ ] Radii: `--radius-0: 0`, `--radius-1: 2px` (inputs), `--radius-arch: 999px 999px 0 0`, used only for the arched image frame that echoes the current site.
- [ ] Shadows: 2 levels only (menus and dialogs).
- [ ] Breakpoints: 480 / 768 / 1024 / 1280 / 1600.
- [ ] Motion: `--dur-fast: 150ms`, `--dur-base: 300ms`, `--dur-slow: 700ms`; `--ease-out: cubic-bezier(.22,.61,.36,1)`.
- [ ] Z-index: base 0, sticky header 100, menu 200, dialog 300, toast 400.

**Components and states**
- [ ] Button variants:
  - Primary: solid teal.
  - Secondary: teal outline.
  - Text link: underline offset 0.2em.
  - On-dark: ivory.
  - States for every variant: default / hover / active / `:focus-visible` / disabled (`aria-disabled` with a reason) / loading (spinner plus `aria-busy`, label retained).
- [ ] Links are not styled as buttons unless they start an enquiry.
- [ ] One primary action per section.

**Accessibility (WCAG 2.2 AA)**
- [ ] Landmarks and a skip link, one `h1` per page, and no skipped heading levels.
- [ ] Focus visible on every control, at least 3:1 against adjacent colours.
- [ ] Touch targets of at least 24×24px (aiming for 44px).
- [ ] Mobile navigation is a disclosure with `aria-expanded`, a focus trap while open, Esc to close, and focus returned to the trigger.
- [ ] Gallery lightbox uses `<dialog>` with alt text, arrow-key navigation and a counter announced via `aria-live`.
- [ ] FAQs use native `<details>`/`<summary>`.
- [ ] Price ledger is a real `<table>` with `<th scope>` and a caption.
- [ ] Spa and café menus are transcribed to HTML, not shipped as images of text.
- [ ] Status is never conveyed by colour alone.

**Responsive**
- [ ] Mobile-first. Tested at 360, 390, 768, 1024, 1280 and 1440+ widths.
- [ ] The ledger table becomes stacked per-package definition lists below 768px.
- [ ] Art-directed crops per breakpoint, no horizontal scroll, sticky header shrinks on scroll and keeps 56px or more.

**Forms** (not planned: the project is frontend-only per §15. This applies only if a real external form service is approved later.)
- [ ] Each field has a `<label>`, the right `type` and `autocomplete`, and a required marker that is not colour-only.
- [ ] Inline errors linked via `aria-describedby`, plus an error summary.
- [ ] Submit button disabled while pending, with a success region that announces itself.
- [ ] Validation on both client and server, plus a honeypot field.

**Animation:** the checklist in §6 Motion principles, plus `useGSAP` cleanup, `ScrollTrigger.refresh()` after images load, and no animation on `display: none` elements.

**Testing:** see §8 QA.

---

## 8. Technical implementation plan

**Environment (verified):** `D:\clone2` is empty and not a git repository. Node v24.13.0, npm 11.6.2 and git 2.53.0 are installed. Chrome is installed (usable for headless QA).

**Stack**
- `next` (current stable, App Router, JavaScript), `react`, `react-dom`.
- `gsap` and `@gsap/react` (`useGSAP` for scoped cleanup).
- Dev dependencies: `eslint` + `eslint-config-next`, `@playwright/test` and `@axe-core/playwright` (route smoke tests, screenshots at 3 widths, axe scan), `lighthouse` run on demand via npx.
- Styling: **CSS Modules plus one global `tokens.css`**. No Tailwind, so the token system stays explicit. Open to Tailwind if you prefer it.
- No CMS, database, auth or payments.

**Structure**
```
src/
  app/
    layout.js                 # fonts, header/footer, skip link, default metadata
    page.js                   # Home
    retreats/page.js
    retreats/panchakarma/page.js
    host-a-retreat/page.js
    stay/page.js              # overview of 3 room types
    stay/[type]/page.js       # deluxe-rooms | bungalows | master-suites (generateStaticParams)
    spa/page.js
    dining/page.js
    dining/[venue]/page.js    # mumbai-station | shala-cafe
    experiences/page.js
    faqs/page.js
    contact/page.js
    journal/…                 # only if Q4 = migrate
    not-found.js
    sitemap.js  robots.js
  components/
    layout/   SiteHeader, MobileNav, SiteFooter, Breadcrumbs, SkipLink
    ui/       Button, LinkButton, ThreeLineRule, Eyebrow, Accordion, Table
    sections/ Hero (image | video), EditorialSplit, RoomProfile, AmenityList,
              PackageLedger, Gallery (+Lightbox), Quote, EnquiryPanel,
              ContactBlock, MapLink, MenuList (spa/café)
    motion/   Reveal, ImageReveal, Parallax  (client components, GSAP)
  content/    site.js (contact, social, emails: one source of truth)
              rooms.js, packages.js, panchakarma.js, spa.js, dining.js,
              experiences.js, faqs.js, testimonials.js, nav.js
  lib/        mailto.js (builds subject/body), whatsapp.js, seo.js (metadata helper, JSON-LD)
  styles/     tokens.css, globals.css
public/media/ curated originals, renamed descriptively (e.g. stay/deluxe-ganesh-01.jpg)
docs/         this plan, source-audit/, asset-map.json (old ID → new path, alt text)
```

**Server and client split:** all pages are Server Components. Only `MobileNav`, `Gallery`/`Lightbox`, `Hero` (video pause), and the `motion/*` wrappers are `'use client'`.

**Assets:** a one-off Node script downloads the curated originals from `static.wixstatic.com` into `public/media/` using a mapping file. `next/image` then handles AVIF/WebP, `sizes`, priority loading for the hero and lazy loading elsewhere. Self-hosting removes the dependency on the Wix account staying live. Videos are re-encoded only if they are over about 4 MB (needs ffmpeg; check at the time).

**Enquiry model (default, no backend):** `EnquiryPanel` offers "Email us" as a `mailto:` link with the original subject line and a prefilled body template (dates, guests, room), plus "WhatsApp us" via `wa.me` with prefilled text. Copy says clearly: "We reply personally to confirm availability". There is nothing fake about it.

**SEO**
- Unique titles and descriptions per route via `generateMetadata`, with canonical URLs on the final domain.
- OG images from owner photos.
- JSON-LD: `Resort` / `LodgingBusiness` (address, phone, geo), `FAQPage` (only where the FAQ is visible), `Offer` for packages.
- `sitemap.js` lists only real routes. `robots.js` allows all in production and disallows on preview/dev (by environment).
- **Redirects in `next.config.js`** (permanent):

| Old | New |
|---|---|
| `/baliyogaretreat` | `/` |
| `/retreat-packages` | `/retreats` |
| `/copy-of-retreat-packages` | `/retreats/panchakarma` |
| `/copy-of-darshana-veda-spa`, `/lead-collection-1` | `/host-a-retreat` |
| `/darshanavedaspa` | `/spa` |
| `/mumbaistationindiancafe`, `/copy-of-the-shala-cafe` | `/dining/mumbai-station` |
| `/copy-of-organic-vegetarian-cafe`, `/general-6-1`, `/copy-of-the-shala-cafe-1` | `/dining/shala-cafe` (or `/dining`) |
| `/copy-of-villa-rooms` | `/stay/bungalows` |
| `/copy-of-general` | `/stay/deluxe-rooms` |
| `/copy-of-villa-rooms-1` | `/stay/master-suites` |
| `/copy-of-services` | `/experiences` |
| `/testamonials` | `/#guest-stories` |
| `/faqs` | stays `/faqs` |
| `/contact`, `/contact-us` | `/contact` |
| `/about-1`, `/about-3*`, `/projects-6`, `/recipes`, `/shop`, `/product-page/*`, `/lead-collection` | `/` or 410 |
| `/blog`, `/single-post/*` | `/journal/*` or kept per Q4 |

  These only take effect if the new site eventually serves `theshalabali.com`, which is a deployment decision outside this phase.

**QA approach (after build approval)**
- **Playwright smoke test** on every route: HTTP 200, no console errors, no failed requests, no horizontal overflow at 360px, every `<img>` loaded, every link resolving (internal links get 200, `mailto:`/`wa.me` well-formed).
- **Screenshots** at 390, 768 and 1440 widths for visual review.
- **axe-core scan** on every route, with zero serious or critical violations as the bar.
- **Manual keyboard pass** through navigation, mobile menu, lightbox and accordions.
- **Reduced-motion run** via Playwright `reducedMotion: 'reduce'`.
- **Lighthouse** (mobile) on Home, Retreats and one room page. Results are reported as measured, with no promised score.
- Anything not tested is reported as unverified.

---

## 9. Risks and open questions

### Decisions needed from you

| # | Question | Why it matters |
|---|---|---|
| **Q1** | **Brand name:** "Bali Bliss" or "The Shala Bali"? | Every asset, the logo, all copy, the emails and the domain say The Shala Bali. A Bali Bliss rebrand would need a new logo; the brief forbids inventing assets. "Bali Bliss" also appears publicly as a 2024 retreat run by a third-party host (Sarah Oleson) *at* The Shala on WeTravel, so that may be the origin of the name. **My recommendation:** keep The Shala Bali as the brand and treat "Bali Bliss" as the internal project name. |
| Q2 | Do you have authority from the owner to reuse their photos, copy and logo, and is this site intended to replace theirs? | Reuse rights and the redirect plan depend on it |
| Q3 | Is there a vector (SVG / AI) logo? | The supplied logo is raster PNG only. I would use the 5000px PNG; an SVG would be crisper. I will not redraw the mark without approval. |
| Q4 | Blog (74 posts): migrate all, curate a subset, or exclude for now? | Migration means about 74 MDX files and a `/journal` route; some posts may be syndicated third-party content (e.g. "From Light Watkins"). **Recommendation:** exclude in v1, keep old URLs redirecting to an archive or to `/`, revisit later. |
| Q5 | Is **The Shala Cafe** (the organic vegetarian café) still operating? | The retreats page says "Two restaurants", but the café pages are orphaned and only the Indian Cafe is in the navigation |
| Q6 | Is the **Yoga & Pilates Retreat** package still offered? The La Vie en Rose event is past. | Avoids advertising something that has lapsed |
| Q7 | Include **Villa Kitty / causes**? | Real but minor content |
| Q8 | May I **transcribe the spa menu (about 25 image panels) and Mumbai Station menu (7 images) into HTML**? | Needed for accessibility and SEO. Prices in those images become live text, so they must be current. |
| ~~Q9~~ | **Resolved by §15 of the brief (frontend-only):** enquiries use the existing mailto / WhatsApp paths. No form backend, API route, email provider or environment secrets. No form will claim to submit anything. | n/a |
| Q10 | Which email is canonical for which purpose? | Three addresses are in use (manager4retreat@, theshalabali@, marketing.theshalabali@) and two WhatsApp numbers (main vs spa). I will preserve the current mapping unless told otherwise. |
| Q11 | Map: a Google Maps embed (third-party cookies and requests) or a static "Open in Google Maps" link? | **Recommendation:** a static link (privacy, performance) |
| Q12 | Keep the WhatsApp chat floating widget? | The original has one. I'd replace it with a lightweight native WhatsApp button, with no third-party script. |
| Q13 | Styling: CSS Modules (recommended) or Tailwind? | Affects every component |

### Content conflicts to resolve (I will not silently "fix" these)

1. The Bungalows intro says "**four** bungalows"; every other mention says "**three** Darshana Bungalows". There is also a separate "Kasih bungalow", which shares a name with the Kasih master suite.
2. **The Master Suites descriptions are copied from Deluxe Rooms.** The Kasih suite is described as "Jivana room has a semi open bathroom…". Real suite descriptions are needed.
3. The same six rooms are called "Deluxe Rooms" on two pages and "**Villa Rooms**" on two others.
4. **Package price mapping:** the price/duration order is ambiguous in the page structure. It must be verified visually against the live pricing cards before being typed into the ledger. Panchakarma prices are "++" (tax and service extra). The retreat package prices do not say whether tax is included.
5. FAQ facts that may be outdated:
   - "**INR** 300,000" should be IDR.
   - "Ngura Rai" should be I Gusti Ngurah Rai.
   - "There are no longer taxes to enter or leave Bali" — Bali introduced a tourist levy for foreign visitors in 2024 (please confirm).
   - The Visa on Arrival details.
6. The meta description says "**voted as the best Indian restaurant in Ubud**". No source is given, so I will keep it only if you confirm it.
7. Typos in testimonial locations ("Quadalajara", "Berline", "Nome, Alaska"). Fix them or preserve them verbatim?
8. One testimonial (Martina) has "Add Testimonial here" placeholder text in the middle of it. That text will be removed.
9. The Experiences "Balinese Offering Making" description is cut off ("Learn the meaning and").
10. The brochure is "Coming soon" everywhere. Should the control be dropped until a PDF exists?

### Technical risks

- The "A Day in Paradise" videos return 403, so they are unavailable unless you supply the files.
- The background videos are not yet reviewed for content, length or size.
- Original photos run up to 8–20 MB each, which makes the download large. Only the curated set will be pulled, and `next/image` handles delivery.
- Blog post body images were not audited.
- **Unverified:**
  - Tripadvisor rating and review count. I will not display numbers I can't verify live.
  - The WhatsApp chat widget's configured number (it is loaded client-side).
  - Behaviour of the "More" menu (a Wix overflow container).
  - Mobile behaviour of every page beyond the 3 screenshotted.

---

## 10. Implementation order

| Step | Scope | Gate |
|---|---|---|
| 0 | Scaffold Next.js (JS, App Router); `tokens.css`, `globals.css`, fonts; `content/site.js`; asset download script and `asset-map.json` with alt text; ESLint | |
| 1 | **Design system page** (`/_styleguide`, `noindex`, excluded from the sitemap): type scale, colours, buttons in all states, ThreeLineRule, form controls, ledger table | **Review gate A: you approve the look** |
| 2 | Shell: SiteHeader with desktop navigation and Stay dropdown, MobileNav, SiteFooter, SkipLink, Breadcrumbs, `not-found` | |
| 3 | **Home** (hero, philosophy, the four pillars Stay/Retreats/Spa/Dining as editorial splits, guest stories, location, enquiry), plus the motion layer | **Review gate B: Home on localhost, desktop and mobile** |
| 4 | Stay overview and the `stay/[type]` template (RoomProfile, Gallery, Lightbox), generating 3 routes | |
| 5 | Retreats (PackageLedger) and Panchakarma (programmes, doctor, FAQ) | |
| 6 | Spa (MenuList), Dining and its 2 venues, Experiences | |
| 7 | Host a retreat, FAQs, Contact | |
| 8 | SEO: metadata for every route, JSON-LD, sitemap, robots, redirects, OG images | |
| 9 | Full QA run (§8) and fixes, then a report covering the local preview, results, known limits and proposed deployment steps | **Review gate C: deployment approval (GitHub / Vercel)** |

**Keeping it consistent:**
- Pages compose only from `components/sections`.
- No raw hex or pixel values outside `tokens.css`; a lint rule or grep check flags them.
- All business facts come from `content/`, never hard-coded in JSX.
- The style guide is the visual source of truth and is re-checked at each gate.

---

## 11. Exact approval needed before coding begins

1. **Q1 (brand name)**, answered.
2. **Permission to scaffold** a Next.js app in `D:\clone2`: run `create-next-app` and install `next`, `react`, `react-dom`, `gsap`, `@gsap/react`, plus dev dependencies `eslint`, `eslint-config-next`, `@playwright/test`, `@axe-core/playwright` (Playwright will download a browser build). A `.gitignore` that excludes `.env*`, `node_modules` and `.next` is created at scaffold time. `git init` waits until Phase 4.
3. **Permission to download** the curated owner media (about 150–200 images and 4 videos) from `static.wixstatic.com` into `public/media/`.
4. **Approval of the creative direction** ("Three Lines" terraced editorial, palette and fonts above), or changes you want.
5. Answers to **Q4, Q5, Q6, Q8 and Q13**, or "use your recommendations". The remaining questions can be resolved during the build.

## 12. Delivery workflow (per §15 of the brief)

| Phase | What happens | Gate |
|---|---|---|
| 0 (this document) | Research, audit, plan | **Your approval of this plan** |
| 1 | Frontend-only build (steps 0–8 in §10); no backend, database, auth or API routes | Gates A and B in §10 |
| 2 | Run on `http://localhost:3000`; verify every route at mobile, tablet and desktop in a real browser; fix issues | |
| 3 | Report: URL, completed pages, working interactions, test results, known issues | **Your explicit publication approval** |
| 4 | Confirm the target repository and its visibility with you, review the files being committed, check for secrets, `git init`, commit, push | **Separate approval for Vercel** |
| 5 | Connect the repository to Vercel, deploy, verify the live URL, report | Domain and DNS changes need their own approval |

Approval of the local preview is not approval to publish. No command that could trigger a deployment (for example a push to a repository already linked to Vercel) runs before the matching gate.
