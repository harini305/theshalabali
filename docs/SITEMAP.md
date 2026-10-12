# Sitemap — The Shala Bali (source: theshalabali.com)

**Researched:** 2026-10-12 · **Platform:** Wix (Thunderbolt renderer, classic editor, fixed 980px desktop grid, separate 320px mobile layout)
**Method:** `robots.txt` → `sitemap.xml` index → 4 child sitemaps, cross-checked against the rendered desktop and mobile navigation of every page and HTTP status checks. Results matched the earlier 2026-10-12 pass exactly (29 pages, 75 posts, 12 products).

Evidence: [`source-audit/capture-2026-10-12/`](source-audit/capture-2026-10-12/) (full-page screenshots of all 29 pages at 1440px and 390px, and the 11 main pages at 768px).

---

## 1. Navigation as rendered

### Desktop header (identical on every page)

```
[Tagline "Yoga Retreat & Ayurvedic Spa" → /baliyogaretreat]   (Home shows the logo lockup instead)
HOME → /
Retreat Packages → /retreat-packages
Host a retreat → /copy-of-darshana-veda-spa
Panchakarma Retreats → /copy-of-retreat-packages
Darshana Veda Spa → /darshanavedaspa
Indian Cafe → /mumbaistationindiancafe
Accommodation ▾ (label only, not a link; opens on hover)
    Bungalows → /copy-of-villa-rooms
    Deluxe Rooms → /copy-of-general
    Master Suites → /copy-of-villa-rooms-1
Experiences → /copy-of-services
More ▾ (Wix overflow: appears only when the items don't fit, e.g. on Home where the logo is wider; holds the overflowed items)
```

### Mobile drawer menu (opened by the ☰ button)

HOME · Retreat Packages · Host a retreat · Panchakarma Retreats · Darshana Veda Spa · Indian Cafe · **+ Accommodation** (expandable: Bungalows, Deluxe Rooms, Master Suites) · Experiences · **Recipes → /recipes**

> The **"Recipes"** item exists only in the mobile menu. `/recipes` is an empty Wix template page (see §3).

### Footer

There is no shared multi-column footer. Contact blocks (address, WhatsApp, Email button, social icons, Google Map) are **page content** on Home, Spa and the old home; the global Wix footer strip is 35px and empty on inner pages.

---

## 2. Verified pages with real content (18)

| # | Page (as titled on site) | Source URL | In nav? | Content status | Proposed new route |
|---|---|---|---|---|---|
| 1 | Home ("Home of Wellness") | `/` | Desktop + mobile | Real | `/` |
| 2 | Old home ("The Shala Bali – Home of Wellness", tiles, videos, blog teaser) | `/baliyogaretreat` | Via tagline link only | Real (older version of home) | Decision Q2 (merge into `/` or keep) |
| 3 | Retreat Packages ("Personalized Retreats") | `/retreat-packages` | Yes | Real; 5 packages with prices | `/retreat-packages` |
| 4 | Panchakarma Retreats | `/copy-of-retreat-packages` | Yes | Real; 3 programmes with prices, doctor bio, FAQ | `/panchakarma-retreats` |
| 5 | Host a retreat | `/copy-of-darshana-veda-spa` | Yes | Real | `/host-a-retreat` |
| 6 | Darshana Veda Spa | `/darshanavedaspa` | Yes | Real; spa menu as image slideshow | `/darshana-veda-spa` |
| 7 | Indian Cafe (Mumbai Station) | `/mumbaistationindiancafe` | Yes | Real; menu as 7 images | `/indian-cafe` |
| 8 | Bungalows | `/copy-of-villa-rooms` | Yes (dropdown) | Real | `/accommodation/bungalows` |
| 9 | Deluxe Rooms | `/copy-of-general` | Yes (dropdown) | Real | `/accommodation/deluxe-rooms` |
| 10 | Master Suites | `/copy-of-villa-rooms-1` | Yes (dropdown) | Real, but descriptions copied from Deluxe Rooms | `/accommodation/master-suites` |
| 11 | Experiences | `/copy-of-services` | Yes | Real; 7 workshops | `/experiences` |
| 12 | FAQs | `/faqs` | **Orphan** | Real | `/faqs` (decision Q3: link it?) |
| 13 | Testimonials | `/testamonials` | **Orphan** | Real (one placeholder fragment) | `/testimonials` (decision Q3) |
| 14 | Organic Vegetarian Cafe | `/copy-of-organic-vegetarian-cafe` | **Orphan** | Real | Decision Q3 |
| 15 | Shala Cafe variants | `/general-6-1`, `/copy-of-the-shala-cafe`, `/copy-of-the-shala-cafe-1` | **Orphan** | Mixed real copy and template text; near-duplicates | Decision Q3 |
| 16 | Special Offer (host) | `/lead-collection-1` | **Orphan** | Real but **expired** (1–10 Oct 2026) | Decision Q3 |
| 17 | La Vie en Rose Pilates Retreat | `/about-3-4` | **Orphan** | Real past event | Decision Q3 |
| 18 | Ayurvedic Wellness Retreat | `/about-3-2` | **Orphan** | One real intro paragraph, rest template | Decision Q3 |

Per-page detail: [`PAGE_CONTENT_INVENTORY.md`](PAGE_CONTENT_INVENTORY.md).

## 3. Template placeholders and system pages (not proposed for migration)

| URL | What it is |
|---|---|
| `/about-1`, `/about-3`, `/about-3-1`, `/about-3-3` | Unedited Wix "About" templates ("This is your About Page…", fictional team) |
| `/projects-6` | "Causes we love" template; one real entry (Villa Kitty) |
| `/recipes` | Empty template page — **linked from the mobile menu** |
| `/lead-collection` | Template lead form |
| `/shop` + 12 × `/product-page/i-m-a-product[-N]` | Wix Stores demo products ("I'm a product") |

## 4. Blog

| Item | Value |
|---|---|
| Index | `/blog` (orphan; teaser on `/baliyogaretreat`) |
| Posts | **75** `/single-post/*` URLs in the sitemap (list: [`source-audit/blog-post-urls.txt`](source-audit/blog-post-urls.txt)) |
| Category pages | none (categories sitemap only lists `/blog`) |
| Feed | `/blog-feed.xml` → 200 |
| Individual posts | **Not inventoried** in this phase (decision Q4) |

## 5. URLs that don't resolve (verified 2026-10-12)

| URL | Result |
|---|---|
| `/contact` | 301 → `/contact-us` → **404** |
| `/about`, `/book-online` | 404 (Wix Bookings is installed but has no public page) |
| `http://theshalabali.com` | 301 → https → `www` (2 hops) |

## 6. External destinations (preserve as-is)

| Purpose | Destination |
|---|---|
| Room "Book" buttons | `mailto:theshalabali@gmail.com?subject=Reservation …` (subject per room) |
| Retreat "Book Now" | `mailto:marketing.theshalabali@gmail.com?subject=…`; price links → `mailto:manager4retreat@gmail.com?subject=In-house retreat inquiry` |
| General enquiry | `mailto:manager4retreat@gmail.com?subject=Inquiry` |
| Spa booking | `https://wa.me/6281236325617` (+62 812 3632 5617) |
| Main WhatsApp | +62 812 3849 6136 (`tel:` on mobile) |
| Social | facebook.com/yogaretreatsandtrainingsubud, instagram.com/theshalabali, pinterest.com/theshalabali, Tripadvisor d10542029; spa: facebook.com/darshanavedaspa, instagram.com/darshanavedaspa |
| Map | Wix Google Maps embed (pin "The Shala Bali – Yoga Retreat") |
| Chat | Third-party Smartarget WhatsApp/iMessage widget ("Jero Ari, Manager"), number not exposed, contains a malformed `tel:+8` link |

## 7. Coverage statement

- **Verified (rendered and captured at desktop and mobile):** all 29 sitemap pages.
- **Interaction-tested:** desktop dropdown, nav hover, mobile drawer, room-gallery lightbox.
- **Not inspected:** the 75 individual blog posts, 12 demo product pages (template), and the "More" overflow menu contents on Home (it holds the items that don't fit; inner pages show the full list).
