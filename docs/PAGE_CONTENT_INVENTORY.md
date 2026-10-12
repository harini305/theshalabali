# Page Content Inventory — The Shala Bali (source site)

**Date:** 2026-10-12 · **Pages covered:** all 29 sitemap pages (11 navigation pages, 11 real or partly-real orphan pages, 7 template/empty pages + 12 demo products)
**Sources:** rendered DOM captures at 1440px and 390px (`source-audit/capture-2026-10-12/data/*.json`, element-level listing in `source-audit/capture-2026-10-12/PAGE_CAPTURE_DETAIL.md`), verbatim copy (`source-audit/page-text/*.txt`), links and meta (`source-audit/page-data/*.json`), and full-page screenshots (`source-audit/capture-2026-10-12/screenshots/`).

**How to read this document**
- Copy shown in quotes is **verbatim** from the source, typos included. Long paragraphs point to `page-text/<slug>.txt`.
- "Global header/footer" refers to the shared header in [UI_UX_AUDIT.md](UI_UX_AUDIT.md) §4 and [SITEMAP.md](SITEMAP.md) §1.
- Media IDs are files on `static.wixstatic.com/media/`. Status and proposed local paths are in [ASSET_INVENTORY.md](ASSET_INVENTORY.md).
- Defects are recorded so they can be decided on (see IMPLEMENTATION_PLAN.md §Decisions), **not** silently fixed or reproduced.

## 0. Post-capture verification (resolves items marked "unclear in capture" below)

These were re-checked in a live browser after the per-page write-ups. **Where a page section below says otherwise, this section takes precedence.**

| Item | Result |
|---|---|
| Blurred hero images (Retreats, Panchakarma, Spa, Bungalows, Deluxe Rooms, Experiences) | **Capture artefact.** Live heroes load at full resolution (e.g. Spa `4c89f1_c99f7f4b…` at 1420×900, Indian Cafe `4c89f1_6af07326…` at 1440×900). The blur comes from the Background-Reveal effect in tall-viewport screenshots. |
| Desktop nav "not recorded / not visible" (Host a retreat, Indian Cafe) | **Capture artefact.** The live header shows all 9 items, at full opacity, on both pages. |
| Indian Cafe menu slides 4–7 | **Resolved.** The 7-slide slideshow `comp-lujakb75` holds, in order: `4c89f1_67c139aaa38f4704b8855ab617692fe0~mv2.jpg`, `4c89f1_9fa3b30857a54ee4931991e212371d4c~mv2.jpg`, `4c89f1_8a41682319234fd5b02ae7d1a1d78648~mv2.jpg`, `4c89f1_2f6162acb4a540ccabda7cc648f26e36~mv2.jpg`, `4c89f1_37ca570da97a4acb82893a9f8c0c4a2d~mv2.jpg`, `4c89f1_6ef071f28dab4b7ebe1d9fbac2d88f9e~mv2.jpg`, `4c89f1_86a56ab206e64553b71cc7ffc771e1fd~mv2.jpg` |
| Hero/title "above the page top" on FAQs, Blog, Organic Vegetarian Cafe (desktop) | **Real source defect.** Live DOM shows the hero image and h2 at negative y (e.g. FAQs h2 at −43px, Organic Cafe hero at −788px), so they are invisible on desktop. These pages also carry a fixed page-background image `4c89f1_778fac54…` (1440×900). |
| Mobile images rendered as empty white boxes | **Capture artefact** (lazy loading at 390px in a headless capture); all images return HTTP 200. |
| Room gallery click | **Verified.** Full-screen lightbox with ‹ › and × (screenshot `interactions/gallery-click.jpg`). |
| Desktop dropdown / mobile drawer | **Verified** (`interactions/dropdown-acc.jpg`, `interactions/mobile-menu.jpg`). |

---

## Part A — Pages in the navigation

### HOME — `/` (slug `home`)
- **Status:** in desktop nav ("HOME", shown active in #01B1AF on this page); canonical home `https://www.theshalabali.com`
- **Purpose:** Short brand landing page: hero photo, "Home of Wellness" welcome text, lifestyle video, photo-collage strip, contact block with map.
- **Title / meta description:** Title "Yoga Retreat in Bali | Ubud | The Shala Bali". Meta: "Experience yoga while you are in Bali. The Shala Bali is the best yoga retreat located in Ubud, which provides full equipped yoga shala. As a holistic wellness sanctuary, The Shala Bali also operates pampering spa treatments and fresh homemade, pure vegetarian Indian food, voted as the best Indian restaurant in Ubud." (og:image `4c89f1_5d417439a7eb443cb602e639ca06f157~mv2.jpg`)
- **Page height:** desktop 3016px, mobile 1819px

| # | Section | Content | Media | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Header (page-specific variant of global header) | Wordmark logo + emblem; nav HOME (active, #01B1AF), Retreat Packages, Host a retreat, Panchakarma Retreats, Darshana Veda Spa, Indian Cafe, **More** (Accommodation/Experiences collapse into "More" here because the logo takes space); tagline "Yoga Retreat & Ayurvedic Spa" (Tangerine Bold 20px **#FFFFFF**, sits over top-left of hero) | Wordmark `4c89f1_732e2d9c5b074b8abdfc4f6be9041ef3~mv2.png` 199×30 at x230; emblem `4c89f1_f402c51635334f089243e387079abd01~mv2.png` 95×42 at x283 | Nav per global; tagline → `/baliyogaretreat` | Logo left-centre (x230), nav to its right, Darker Grotesque Med 18px / 50px line-height, centred | Hamburger right; centred wordmark 166×25 + emblem 70×31 + tagline Tangerine Bold 17px #717070 centred below |
| 1 | Hero | No text | `4c89f1_9c9162e81b824ae69ccb14b0aee71139~mv2.jpg` (sunset aerial of bungalow roofs & rice field) 1420×540, inset 10px each side, cover | — | Section y0–601; image x10, y62 | 320×110 strip, full width, under logo block |
| 2 | Welcome / "Home of Wellness" | Heading "Home of Wellness" (Tangerine Bold 40px #717070, letter-spacing 6px). Paragraphs (Bellota 16px #717070, centred): "Welcome to The Shala Bali, lovingly created as a sanctuary to reconnect with our essence and realign with nature." / "Cocooned among magnificent nature of Ubud, the space was founded on the ancient principles of Balinese and Indian philosophy." / "The idyllic natural environment, combined with our comprehensive programs are sure to inspire harmony between" + "B O D Y , M I N D" + ", S P I R I T and E A R T H, the fundamental ingredients to living a joyful, and healthful life." / "It is our hope that no matter what you are seeking, after a stay at the The Shala Bali, you will depart with a greater sense of peace." | — | — | Single centred column, y601–1008 | Text 12px centred; **"Home of Wellness" heading not present in mobile capture/screenshot** |
| 3 | Video strip | No text | VIDEO `4c89f1_bd392a7a09674ee2879505daaa4ce9be` 720p mp4, autoplay/loop/muted, 1420×548 (poster `4c89f1_bd392a7a09674ee2879505daaa4ce9bef000.jpg`; woman with mug by window in 1440 shot; 768 shot catches aerial rice-field frame) | — | Inset 10px, y1008–1556 | Not rendered on mobile (section absent from 390 capture) |
| 4 | Photo-collage strip | No text | `4c89f1_369ccd695482466dbd8787e5fd2fcd86~mv2.png` alt "8.png", 1440×900 natural; used as section background with Background-Reveal (bg rect fixed at y866 while section is y1586–2477). Shows a collage (fruit plate, pie, pool, massage on desktop crop) | — | Full-bleed band ~891px tall | 320×400 band (y714–1114); crop shows a tile collage (yoga group, meditation, food, pool, massage) |
| 5 | Contact Us | h2 "Contact Us" (Bellota 40px #717070, ls 4px); h2 "The Shala Bali" (Tangerine Bold 30px); "Jalan Sanggingan No. 90," / "Kedewatan, Ubud 80571" / "Bali - Indonesia" / "Whatsapp +62 812 3849 6136" (Bellota 16px #4A4A4A) | Google Maps embed 445×321 (pin "The Shala Bali Yoga Retreat", Map/Satellite toggle); social icons Facebook `0fdef751204647a3bbd7eaa2827ed4f9.png`, Google+ `05546d0902004bfabba0396e21f33f7d.png`, Instagram `04b15d1b030049d1b3746f8ef5a72955.png` (29×29, black) | BUTTON "Email" 142×40 white bg, Bellota 16px #717070 → `mailto:manager4retreat@gmail.com?subject=Inquiry`; Facebook → `https://www.facebook.com/yogaretreatsandtrainingsubud/`; Instagram → `https://www.instagram.com/theshalabali/?hl=en`; Google+ icon: no link captured | Beige band (y2500–3016); text column left-centre (~x170–300 in half-scale sheet), map to the right (x701) | Stacked: heading, address, "Whatsapp" then "+62 812 3849 6136" as `tel:+62 812 3849 6136` link, Email button 120×42, map 320×320 full width, social icons 35×35 below |
| 6 | Footer | Global footer | — | — | — | — |

- **Pricing / factual details (verbatim):** Address "Jalan Sanggingan No. 90," "Kedewatan, Ubud 80571" "Bali - Indonesia"; "Whatsapp +62 812 3849 6136"; email `manager4retreat@gmail.com` (subject "Inquiry"). No prices.
- **Source defects observed:**
  - Typo "after a stay at the The Shala Bali" (doubled "the").
  - Desktop nav on this page shows "More" instead of "Accommodation ▾" and "Experiences" (overflow); other pages show the full nav.
  - Google+ icon (defunct service) with no captured link.
  - The WhatsApp number is plain text on desktop but a `tel:` link on mobile.
  - This page uses `manager4retreat@gmail.com`, while `/baliyogaretreat` uses `theshalabali@gmail.com`.
  - The "Home of Wellness" heading is missing on mobile.
  - The video strip is hidden on mobile.
- **Interactions:**
  - Autoplay muted looping background video.
  - Background-Reveal on the 8.png collage strip.
  - Interactive Google Map with Map/Satellite toggle, zoom and fullscreen.
  - A third-party chat widget overlays the bottom-right of the page. It shows a "Jero Ari / Manager — Hello, how can we help you? We will respond as soon as possible" bubble, an "Any questions? Ask in iMessages" pill and a WhatsApp icon, "Powered by Smartarget". This is not page content.
  - Header tagline and nav fade in per global behaviour.

---

### Yoga Retreat & Ayurvedic Spa (legacy home) — `/baliyogaretreat`
- **Status:** orphan from the nav. The only way in is the global header tagline "Yoga Retreat & Ayurvedic Spa", which links here on every page. It looks like an older home page: same title and meta as `/`.
- **Purpose:** Older long-form landing page: video hero with four quick-link buttons, welcome text, Wix Video "A Day in Paradise", blog feed, six image tiles, contact block and a testimonial.
- **Title / meta description:** Title "Yoga Retreat in Bali | Ubud | The Shala Bali" (same as home). Meta is the same as home: "Experience yoga while you are in Bali. The Shala Bali is the best yoga retreat located in Ubud, which provides full equipped yoga shala. As a holistic wellness sanctuary, The Shala Bali also operates pampering spa treatments and fresh homemade, pure vegetarian Indian food, voted as the best Indian restaurant in Ubud."
- **Page height:** desktop 5739px, mobile 4306px

| # | Section | Content | Media | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Header | Global header, no logo image. Tagline "Yoga Retreat & Ayurvedic Spa" (Tangerine 20px #717070) at far left, followed by the full nav (HOME … Accommodation, Experiences; Darker Grotesque Med 18px/40px) | — | global | 54px sticky; in the scrolled capture the header sits at top -54 | Global drawer menu |
| 1 | Video hero + quick links | Four buttons (Tangerine Bold 22px white, ls 2.2px): "Host a Retreat", "Personal Retreat", "Experiences", "Ayurvedic Spa" | VIDEO `4c89f1_0cc538aab7ea4548aadb0c7334d2bead` 1080p, autoplay/loop/muted, 1420×673 (poster `4c89f1_0cc538aab7ea4548aadb0c7334d2beadf000.jpg`; frame shows woman with mug by window), letterboxed with black bars top/bottom | Buttons 200×40, bg rgba(74,74,74,.2), 1px border rgba(144,144,144,.77), radius 7px: "Host a Retreat" → none; "Personal Retreat" → none; "Experiences" → none; "Ayurvedic Spa" → `/darshanavedaspa` | y54–725, inset 10px; buttons in one row across the lower third | Hero 320×403, black (video not shown on mobile; image box dark). Buttons 171×45 stacked vertically, left-aligned near top |
| 2 | Home of Wellness | "Home of Wellness" (Tangerine Bold 48px #717070); "Welcome to The Shala Bali, lovingly created as a sanctuary to reconnect with our essence and realign with nature." / "Cocooned among magnificent nature of Ubud, the space was founded on the ancient principles of Balinese and Indian philosophy....." / "Harmony between B O D Y , M I N D , S P I R I T and E A R T H, the fundamental ingredients to living a joyful, and healthful life." (Bellota 20px #717070) | — | — | Centred column, y725–~1100, then a large empty white gap to ~1824 | Left-aligned, tiny (heading 17px, body 10px); large empty gap below |
| 3 | "A Day in Paradise" video player (Wix Video) | Small "The Shala Bali" label (18px white); h3 "A Day in Paradise" (Italianno 58px white); "Play Video" (play icon + label); "All Videos +" pill button | Cover `4c89f1_8e6a05ac9b2d42db9ae4c6fd3fc3b8ecf000.jpg` alt "A Day in Paradise", 1440×603 (dark green grass) | "Play Video" (no href, opens player); "All Videos" 148×51 pill, 1px white border, radius 999px | Full-bleed y1824–2426 inside a section running y1399–2617 | Moved to the very end of the page: a 3-slide channel slider 320×250 (`4c89f1_8e6a05ac9b2d42db9ae4c6fd3fc3b8ecf000.jpg`, `4c89f1_b0ed979c5af449b2b06529ad5786f37df002.jpg`, `4c89f1_180adbc73df5431e8b290b0a1bfcc6b5f001.jpg`) with titles "A Day in Paradise", "Nestled in the Groves and Rice Fields", "Serenity of Morning Yoga practice", each with "Play Video"; 3 pagination dots |
| 4 | Blog feed (Wix Blog widget) | h2 "Blog" (Italianno 30px). Three posts (title Italianno 23px bold #717070 + excerpt Bellota 14px): "16 Fruits You Should Grill This Weekend + 4 Tips For Making Them Taste Great" / "For many people, summer cooking is synonymous with firing up the grill. And while you probably are used to reaching for a favorite burger..."; "5 Reasons To Consider A Regular Meditation Practice Right Now, From Light Watkins" / "The fight to end systemic racism is by no means an easy feat. It requires emotional labor, constant education, and untangling implicit..."; "5 WAYS TO HAVE A HEALTHIER RELATIONSHIP WITH SOCIAL MEDIA" / "We’ve all heard that social media can take a toll on our mental health, and I’m sure you’ve felt the effects of it too. The trouble is..." | `4c89f1_21ba49d6d992447480ce9dc62b4ca607~mv2.jpg`, `4c89f1_6dfada4d30d2426996fc6ddb61c2cfb2~mv2.jpg`, `4c89f1_e38a291bcc044e56a4dc856ea08484dc~mv2.jpg`, each 300×169 | Titles → `/single-post/2020/07/14/16-fruits-you-should-grill-this-weekend-4-tips-for-making-them-taste-great`, `/single-post/2020/06/30/5-reasons-to-consider-a-regular-meditation-practice-right-now-from-light-watkins`, `/single-post/2020/06/22/5-ways-to-have-a-healthier-relationship-with-social-media` | Light-grey band y2617–3127; 3 white cards in a row (x250/570/890), titles and excerpts clamped | Stacked single-column cards, "Blog" centred (25px), excerpt 16px |
| 5 | Six image tiles | Labels (Tangerine Bold 30px white): "Accommodation", "About us", "Stay with us", "Ayurvedic Spa", "Retreats", "Cuisine". Labels are not visible in the static screenshots, so they may only appear on hover (unclear in capture) | `4c89f1_ff87da036b41451c8c93fb57ce3630ac.jpg`, `4c89f1_bf154541a3f84853b0371c0d371e46ea.jpg`, `4c89f1_a73768bdc08646d896be8c2e09e4a404.jpg`, `4c89f1_e905feb9e473492395092c7e7b51bf4b.jpg`, `4c89f1_b9584afb727c40058965f58a0cfcd3da.jpg`, `4c89f1_7a86cc244eea484babe91603fe80b0e7~mv2.jpg`; 200×168 each, rounded, with drop shadow | Accommodation → `https://www.theshalabali.com`; About us → home; Stay with us → `/retreat-packages`; Ayurvedic Spa → home; Retreats → home; Cuisine → home | 3×2 grid centred (x401/621/841, y3901 and y4089) inside a section running y3127–4341, which leaves a large empty gap above the grid | 2 columns × 3 rows, 125×145 tiles |
| 6 | Contact Us | h2 "Contact Us" (custom font 45px white, ls 4.5px); "Jalan Sanggingan No. 90," / "Kedewatan, Ubud 80571" / "Bali - Indonesia" (Bellota 16px white); "OR" between buttons | Google Maps 368×368; extra embed `filesusr.com/html/4c89f1_ec19549bdfaa8d983268c7e2e045fd5a.html` 653×495 at x1354 (a Google Maps place card, overflowing the right edge); grey-circle social icons 48×48: Facebook `72a44c1b3b7c450287b9f4dd21be1548.png`, Instagram `15501a32e0b449b48fa639fd8e6935aa.png`, TripAdvisor `30cbe93446884c319a6fbd971b340396.png`, Pinterest `51595f20831643d4b785234fa63218d1.png` | BUTTON "Email" 212×40 (transparent, 1px white border at 63% opacity, radius 5px) → `mailto:theshalabali@gmail.com`; BUTTON "Call Us" → `tel:+6281238496136`; Facebook → `https://www.facebook.com/yogaretreatsandtrainingsubud/?fref=ts`; Instagram → `https://www.instagram.com/theshalabali/`; Pinterest → `https://www.pinterest.com/theshalabali/`; TripAdvisor → `https://www.tripadvisor.com/Hotel_Review-g297701-d10542029-Reviews-The_Shala_Bali-Ubud_Bali.html` | Grey (#ccc-ish) band y4341–4819: text column left, map right-centre | Stacked; buttons 120×48. The white text and buttons render as blank white boxes in the capture (legibility issue or capture artefact, unclear); map 280×240 |
| 7 | Testimonial | Big quote mark; "“This place is AMAZING. One of the most unique and beautiful places I have stayed! Very tranquil and peaceful, very private. Has a delicious vegetarian restaurant and staff that were so friendly and welcoming (they even brought cake and sang happy birthday to my fiancé in our room!). This is truly a sanctuary hidden away in the jungle"" — "Jessica" (dancingscript 15px white, ls 1.5px) | Background `4c89f1_7b3813fb96fc4553821cdd69ec370fe5~mv2.jpg` 1420×550 (Ganesha statue in leaves); TripAdvisor widget embed `filesusr.com/html/4c89f1_0b87a2f40c5f33235680d181dd1654a3.html` 185×111 ("The Shala Bali", rating bubbles, "54 reviews", Tripadvisor logo) | — | y4821–5371, inset 10px; quote at top centre, widget right of centre | Background 320×462; quote 9px; social icons overlaid on the image |
| 8 | Footer + stray icons | Global footer (35px). Below it (y5371–5739) is white space containing a loose cluster of grey social icons (Pinterest above; TripAdvisor, Instagram, Facebook below). page-text labels these links "Shop" | — | Same social URLs | Detached floating icons | — |

- **Pricing / factual details (verbatim):**
  - Address "Jalan Sanggingan No. 90," "Kedewatan, Ubud 80571" "Bali - Indonesia".
  - Phone `tel:+6281238496136`; email `theshalabali@gmail.com`.
  - TripAdvisor widget "54 reviews".
  - No prices.
- **Source defects observed:**
  - Three of the four hero buttons ("Host a Retreat", "Personal Retreat", "Experiences") have no link.
  - Four of the six image tiles (Accommodation, About us, Ayurvedic Spa, Retreats, Cuisine all point to `https://www.theshalabali.com`; only "Stay with us" goes elsewhere) link to the home page as placeholders.
  - Large empty white gaps: about y1100–1824 and about y3127–3900 on desktop. Mobile has them too.
  - The Embedded Content iframe (653×495 at x1354) overflows past the right edge of the 1440 viewport.
  - Stray social icons float below the footer, and white space runs to the page bottom.
  - "philosophy....." has five trailing dots.
  - The blog posts are generic template content from 2020: grilling fruit, and a post about systemic racism under a meditation headline.
  - The title and meta description duplicate the home page.
  - The mobile contact block appears white-on-white in the capture.
  - On mobile, the video slider is pushed to the bottom of the page, below the testimonial.
  - Body text on mobile is very small (10px) and left-aligned.
- **Interactions:**
  - Autoplay hero video.
  - Wix Video player: "Play Video" opens the player and "All Videos" expands the channel. On mobile this becomes a swipeable 3-slide slider with dots.
  - Blog cards link to the posts.
  - The image tiles may reveal their labels on hover (unclear in capture).
  - Interactive Google Map.
  - TripAdvisor widget.
  - Third-party chat widget overlay (Smartarget).

---

### Retreat Packages (Personalized Retreats) — `/retreat-packages`
- **Status:** in desktop nav ("Retreat Packages", active #01B1AF on this page)
- **Purpose:** Sells five all-inclusive personal retreat packages with prices per stay length, plus what's included and the accommodation options.
- **Title / meta description:** Title "Yoga Retreat Packages at The Shala Bali". Meta: "Indulge yourself in a comprehensive yoga retreat program presented at The Shala Bali. The Yoga, the healthy foods, the spa treatments and comfortable stay at our accommodation. That's all you will only need to rejuvenate your wellbeing."
- **Page height:** desktop 6469px, mobile 12031px

| # | Section | Content | Media | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Header | Global header, with "Retreat Packages" active | — | global | — | Header block with centred logo `4c89f1_beea449628054d7b8c303ccfa314816b~mv2.png` 130×46 + wordmark `4c89f1_15da0744df4a4c9ba75ec20b67e79aae~mv2.png` 140×23, tagline Italianno 17px; round grey home icon at top right |
| 1 | Hero strip | No text | `4c89f1_77fee1c3e92b4b8a82a5f6c9c550f1ac~mv2.jpg` alt "yoga.jpg" (woman in yoga pose), 1420×900 background behind a 524px-tall section, Background-Reveal / fixed bg. It appears blurred in the desktop capture, which is likely a lazy-load artefact | — | y54–578, inset 10px | 320×154, sharp |
| 2 | Intro | h1 "Personalized Retreats" (Tangerine Bold 40px #717070). "Regain your balance, or take your first steps towards" + "more peace and health" (#4A4A4A). "Whether your are wanting to turn over a new leaf or deepen your experience of healthful living, our retreats are designed to meet you where you are and inspire transformation. Gift yourself a personal wellness journey, a space for reflection and some much needed *you* time." (Bellota 16px/30.8) | — | — | Centred column ~600px | Same, 24px heading |
| 3 | What sets us apart + arch video | "What sets our Bali" / "retreat packages apart?" (Bellota 22px). Lotus-bullet list (Bellota 16px #4A4A4A, centred): "Authentic Balinese & Indian healing modalities"; "Unparalleled location - secluded nature setting, within walking distance to the heart of Ubud"; "Flexible dates invite you to come any time & stay as long as you wish"; "Customizable inclusions for a personalized journey"; "Around the clock support with arrival and onward travel assistance."; "Two restaurants to choose from! Serving deliciously nourishing chef crafted vegetarian cuisine at The Shala Cafe & specialized Ayurvedic meals from our Pure vegetarian Indian restaurant."; "Private workshops of your choice"; "Our luxe turn down service for your evening comfort" | VIDEO `4c89f1_64a7cfad49334ac697a72b10f2bc1ce0` 720p, 369×475, **arch-shaped frame**, autoplay, muted, **no loop** (hand mudra / grass close-ups) | — | Two columns: list on the left (~x100–500 at half scale), arch video on the right (x777, y855) | Arch video 280×360 centred above the list; list 12px |
| 4 | "Choose your journey" package cards | h3 "Choose your journey" (Bellota 22px, ls 1.1px). Five white cards. Each card has: title button (Tangerine 30px), photo, bulleted inclusions (Bellota 14px), dotted divider, extras, "Book Now", night-count labels (h2 15px #4A4A4A) with prices (Cormorant-style italic 20px **#36B5CD**, underlined), and a footnote "Quoted price is for 6 nights in private bungalow room." / "See below for room options. Click book now for further rates" (10px). See the pricing block for each card's contents | Healthy Holiday `4c89f1_a726b82932c24e3d87fbaa79b29e5ca5~mv2.jpg` ("The Shala Bali-32.jpg"); Spa Pamper `4c89f1_215bb21556714808a864ae73bc676527~mv2.jpg` ("Flower baht.jpg"); Ayurvedic Wellness `4c89f1_d67a0e095e76496c81bdfffda7ea207d~mv2.jpg` ("Blessing.JPG"); Yoga For You `4c89f1_75c441ef91284bcf905c9fa9f5a72e6e~mv2.jpg` ("Yoga merry and emily .jpg"); Yoga & Pilates `4c89f1_3f9c97e4ac8e4ed7b3237b6a75cac039~mv2.jpg` ("Pilates.jpg"). All 318×238 desktop, 315×236 mobile | Card title buttons → none. "experiences (see menu)" / "In-house experiences" → `/copy-of-services`. Book Now (120×40, white, 1px #ECECEC border, radius 5px, Tangerine Bold 20px #717070): Healthy Holiday & Spa Pamper → `mailto:marketing.theshalabali@gmail.com?subject=In-house retreat inquiry`; Ayurvedic → `mailto:marketing.theshalabali@gmail.com?subject=In-house Retreat inquiry`; Yoga For You **and Yoga & Pilates** → `mailto:marketing.theshalabali@gmail.com?subject=Yoga For You retreat booking ` (trailing space). The first price on each card is a link: → `mailto:manager4retreat@gmail.com?subject=In-house retreat inquiry` (Ayurvedic: `...subject=In-hiouse retreat inquiry`) | Beige (#F3E9E1-ish) band. Row 1 has 4 cards (x53/392/731/1070), row 2 has Yoga & Pilates alone at the left; cards are tall, with prices bottom-left, Book Now right of the first price, footnote at the card bottom | Heading becomes "Chooser Your Journey" (Bellota 20px), placed **after** the three "We'll take care…" blocks; cards stack full width. Prices split into "IDR" + a number that is auto-linked as `tel:` (e.g. `tel:28.550.000`); night labels are displaced (see defects); card images render as empty white boxes in the capture (lazy-load) |
| 5 | We'll take care of you | "We'll take care of you" (22px); bullets: "Safe airport transfers in private air conditioned vehicle"; "Butler to carry your luggage and guide you to your room"; "Welcome to The Shala Bali family blessing and gift"; "Sightseeing arrangements"; "Beautiful modern Balinese style accommodation"; "Intimate groups for individual attention and space for inner reflection"; "Daily room servicing" | `4c89f1_0686a676aa8c4bedbf4e93dfb561a87f~mv2.jpg` (blessing of a woman's forehead) 720×467 | — | Split 50/50: text left, image right (half-bleed), y3993–4539 | Heading centred → image 320×231 → list |
| 6 | … nourish and relax you | "... nourish and relax you"; bullets: "Gentle wake up herbal tea"; "Daily Yoga sessions in our picturesque shala overlooking the rice paddies and jungle"; "Delicious local and international cuisine made with love"; "Tea station with a variety of fresh herbs & flavors"; "Luxurious spa treatments in our nature spa (see menu) with lush organic treatment products made in house."; "Curated in house experiences from Balinese vegetarian cooking classes to natural beauty product making. Experiences Menu"; "Evening turn down to set the ambiance for a peaceful sleep!" | `4c89f1_e0e21b8b4ef14d1d848ba0455431e44b~mv2.jpg` alt "lunch.jpg" 720×472 | "(see menu)" → `/darshanavedaspa`; "Experiences Menu" → `/copy-of-services` | Split: image left, text right, y4539–5011 | Stacked; the h3 "Choose your journey" appears mid-list in the mobile DOM (not visible in the screenshot) |
| 7 | & transport you to another world | "& transport you to another world"; bullets: "Surrounded by coconut trees and rice paddies"; "Well appointed rooms each uniquely designed with attached ensuite bathrooms, all natural shampoo & body wash, tea making and purified water and air-conditioning"; "A 20 meter salt water, infinity pool. Long enough to do laps!"; "Sunning deck with comfy bale to relax"; "You'll be on the doorstep of the stunning Camphuan Ridge walk and largest temple in Ubud." | `4c89f1_36a0937b937a4e649d1add201d5b5833~mv2.jpg` alt "Campuhan-Ridge-Walk.jpg" 720×460 | — | Split: text left, image right, y5011–5471 | Stacked |
| 8 | Accommodation options | "Accommodation options" (22px). Three cards: h4 "Deluxe Rooms" — "Enjoy modern Balinese inspired beauty. Our six Deluxe Rooms each have a unique design and outlook, some with peaceful jungle views, others overlooking the endless green rice paddies. Located close to the Yoga Shala and Shala Cafe. All villa rooms can be set up as twin or king."; h4 "Wooden Bungalows" — "Relax in rustic elegance. Our three Darshana Bungalows built from 100% recycled Javanese wood are a perfect hideaway. Each have a private garden lined with lush greenery and wild flowers. Sitting a stones throw from our beautiful Ayurvedic spa and Indian Cafe. All Darshana Bungalows can be set up as king or twin"; h4 "Master Suites (limited availability)" — "Experience a little extra. Our three suites each with attached living area and kitchen are only available during limited dates. The luxurious master rooms of the Kasih Villa, Ganapati Villa and Rahasia Villa. Two of the three master suites can be set up as twin or king." Then "For a comprehensive room list with layout, we invite you to download our brochure below" | `4c89f1_a3a4cc47ae204b5e9256bb898fab244b~mv2.jpg` ("ganesh room with view.jpg"), `4c89f1_95fe79ffff084547b6bd690fc8cfda44~mv2.jpg` ("unspecified-10 copy.jpg"), `4c89f1_d79480eaef6d4095800dbd11c00386b5~mv2.jpg` ("The Shala bali villa"); 306×204 | Image links (empty-text) → `/copy-of-general`, `/copy-of-villa-rooms`, `/copy-of-villa-rooms-1` (presumably Deluxe / Bungalows / Master Suites in that order, matching the nav; the exact image-to-link mapping is not confirmed in the capture). BUTTON "Coming soon" 153×76 (white 51% opacity, Bellota 15px ls 3px) → none | Beige band y5471–6435; 3 columns (x231/567/903); brochure line + "Coming soon" button centred below | Stacked cards, image 297×231; **the brochure sentence and the "Coming soon" button are absent on mobile** |
| 9 | Footer | Global | — | — | — | — |

- **Pricing / factual details (verbatim):** card → price mapping is confirmed from the desktop column grouping and screenshot.
  - **Healthy Holiday Retreat.**
    - Inclusions: "Airport or hotel transfers"; "Accommodation of your choice"; "Daily morning yoga 90mins"; "All rejuvenating vegetarian meals - breakfasts, lunches dinners, desserts & snacks."; "*Unlimited* drinks, herbal teas, smoothies & coconuts"; "Guided rice paddy walk"; "In-house experiences (see menu)"; divider; "1 spa treatment per day" "(1 hours per day)".
    - Prices: "3 nights" "IDR 15.230.000"; "6 nights" "IDR 28.550.000"; "12 nights" "IDR 55.400.000".
  - **Spa Pamper Retreat.**
    - Inclusions: same base list; divider; "2 spa treatments per day -" "(1 hr + 1.5 hr = total 2.5hrs per day)"; "Luxurious Aromatherapy flower bath".
    - Prices: "3 nights" "IDR 17.650.000"; "6 nights" "IDR 33.400.000"; "12 nights" "IDR 65.000.000".
  - **Ayurvedic Wellness Retreat.**
    - Inclusions: "Airport or hotel pickup"; "Accommodation of your choice"; "Daily morning yoga 90mins"; "All ** dosha specific ** vegetarian breakfasts, lunches, dinners, desserts & snacks."; "*Unlimited* drinks, herbal teas, smoothies & coconuts"; "Guided rice paddy walk"; "In-house experiences"; divider; "2 spa treatments per day" "(1hr + 1.5hr = 2.5hr total per day)"; "Ayurvedic Lifestyle Consultation 1hr"; "Yogic talk" "( 1hr per 6 nights, 2hr per 12 nights)"; "Check-ins with Ayurvedic consultant"; "Relaxing flower bath".
    - Prices: "6 nights" "IDR 34.630.000"; "12 nights" "IDR 66.600.000".
  - **Yoga For You Retreat.**
    - Inclusions: base list; divider; "Therapeutic Yoga consultation 1hr"; "Daily afternoon therapeutic Yoga session specific to your needs 1.5hr"; "1 spa treatment per day" "(1hr per day)"; "Yogic lecture" "(1hr per 6 days, 2hrs per 12 days)"; "Relaxing flower bath".
    - Prices: "6 nights" "IDR 35.400.000"; **"6 nights"** "IDR 68.130.000". The second label is almost certainly meant to be 12 nights, but the source says "6 nights".
  - **Yoga & Pilates Retreat.**
    - Inclusions: "Airport or hotel transfers"; "Accommodation of your choice"; "Morning yoga 90 minutes"; "Afternoon Mat Pilates 60 minutes"; "All rejuvenating vegetarian meals - breakfasts, lunches dinners, desserts & snacks."; "*Unlimited* drinks, herbal teas, smoothies & coconuts"; "Guided rice paddy walk"; "In-house experiences (see menu)"; "1 spa treatment per day" "(1hr per day)".
    - Prices: "3 nights" "IDR 16.900.000"; "6 nights" "IDR 31.500.000".
  - Footnote on every card: "Quoted price is for 6 nights in private bungalow room." "See below for room options. Click book now for further rates".
  - Facilities: "A 20 meter salt water, infinity pool."; "six Deluxe Rooms"; "three Darshana Bungalows built from 100% recycled Javanese wood"; "three suites … Kasih Villa, Ganapati Villa and Rahasia Villa".
- **Source defects observed:**
  - **Copy and labels:**
    - The Yoga For You card labels both prices "6 nights".
    - The footnote "Quoted price is for 6 nights…" sits under cards that also list 3- and 12-night prices.
    - Typo "Whether your are wanting".
    - Typo "Camphuan Ridge"; the image alt says "Campuhan".
    - "(1 hours per day)".
    - Double space in "nature spa   with".
    - On mobile the heading reads "Chooser Your Journey".
    - Stray empty bullet "•" under the last price on the Ayurvedic, Yoga For You and Yoga & Pilates cards.
  - **Links:**
    - Mailto subject typo "In-hiouse retreat inquiry" on the Ayurvedic price link, plus the brochure-less "Coming soon" placeholder.
    - The Yoga & Pilates "Book Now" reuses the "Yoga For You retreat booking " subject.
    - The card title buttons have no link.
    - Price links go to a different mailbox (`manager4retreat@`) than Book Now (`marketing.theshalabali@`).
    - Only the first price on each card is linked.
  - **Mobile layout:**
    - Prices are split into "IDR" + a `tel:`-autolinked number.
    - Night labels are out of order. For example, Healthy Holiday shows "3 nights / IDR 15.230.000 / IDR 28.550.000 / 12 nights / IDR 55.400.000 / 6 nights / Book Now", and Ayurvedic ends with "12 nights" above Book Now.
    - The cards are placed after the three feature blocks.
    - The brochure line and the "Coming soon" button are missing.
- **Interactions:**
  - Arch-framed autoplay video plays once (no loop).
  - Background-Reveal hero strip.
  - Mailto links on prices and Book Now.
  - Third-party chat widget overlay.
  - No sliders or lightbox seen.

---

### Panchakarma Retreats — `/copy-of-retreat-packages`
- **Status:** in desktop nav ("Panchakarma Retreats", active #01B1AF on this page)
- **Purpose:** Sells the 7/14/21-night Ayurvedic Panchakarma programmes: benefits, what's included and prices, the doctor's profile, and an FAQ.
- **Title / meta description:** Title "Yoga Retreat Packages at The Shala Bali". Meta is the same as `/retreat-packages`: "Indulge yourself in a comprehensive yoga retreat program presented at The Shala Bali. The Yoga, the healthy foods, the spa treatments and comfortable stay at our accommodation. That's all you will only need to rejuvenate your wellbeing."
- **Page height:** desktop 5609px, mobile 14319px

| # | Section | Content | Media | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Header | Global header ("Panchakarma Retreats" active) | — | global | — | Logo block as on retreat-packages (`4c89f1_beea449628054d7b8c303ccfa314816b~mv2.png`, `4c89f1_15da0744df4a4c9ba75ec20b67e79aae~mv2.png`, Italianno tagline, round home icon) |
| 1 | Hero strip | No text | `4c89f1_1a4f28c2509b4dbeaea8717fdc870bdc~mv2.jpeg` alt "WhatsApp Image 2026-08-16 at 3.22.11 PM." 1440×900 fixed background (Background-Reveal), showing about 735px. Desktop capture shows a big blurry leaf/carved-door crop (lazy-load or zoomed crop) | — | Full-bleed y10–745 (starts under the header) | 320×154 (woman standing in a carved doorway, garden) |
| 2 | Intro + benefits | h1 "Panchakarma Retreats" (Tangerine Bold 40px #717070). 3 paragraphs (Bellota 16px #4A4A4A centred, full text in page-text): "At The Shala Bali, our Panchakarma Retreats offer a deeply restorative Ayurvedic healing experience designed to help you cleanse, rebalance and reconnect with your natural state of wellbeing." / "Rooted in the ancient wisdom of Ayurveda, Panchakarma is one of the most profound…" / "Held in the peaceful surroundings of The Shala Bali…". Bold subheading "Benefits of a Panchakarma Retreat" (22px). "A professionally guided Pancha Karma programme can offer profound support for both physical and emotional wellbeing." Lotus-bullet list: "Deep detoxification and cleansing of the body"; "Improved digestion, metabolism and elimination"; "Reduced stress and nervous system overload"; "Greater energy, clarity and emotional steadiness"; "Better sleep and deeper relaxation"; "Relief from heaviness, sluggishness and accumulated fatigue"; "Support for immunity and overall vitality"; "Rejuvenation of body tissues and a renewed sense of wellbeing"; "Greater connection to healthy routines and self-care practices"; "A deeper sense of balance, calm and inner clarity". Closing: "Many guests describe feeling lighter, clearer, calmer and more grounded after a Panchakarma retreat, with a renewed sense of vitality and a deeper understanding of how to support their health moving forward." | Teal lotus bullet icons | — | Centred narrow column; the first benefit line and the last two lines have no lotus icon | Order changes: the "Whether you are seeking…" image and paragraph from §4 appear **first**, then the h1 and intro (24px); the benefit list is 12px with no icons; large blank gaps |
| 3 | "What is included in our program ?" — 3 programme cards | h3 "What is included in our program ?" (Tangerine Bold 40px, ls 2px). Cards: bold duration ("7 Nights/ 8 Days", "14 Nights/ 15 Days", "21 Nights/ 22 Days"), bullet inclusions, "The Price :", two room prices, Book Now. Below the cards: "Set in the peaceful natural beauty of Ubud, The Shala Bali provides a nurturing retreat space where guests can step away from the demands of everyday life and fully focus on healing. Surrounded by nature and supported by a dedicated team, you are given the time, space and professional guidance to rest deeply and allow the Ayurvedic process to unfold with care." | `4c89f1_7d5ec65e7fc148acbb07baff321ae143~mv2.jpg` ("croped-06859_edited.jpg", oil brush/bowls), `4c89f1_e146a892637342c9b8236cf0a7d876da~mv2.jpg` ("croped-07010_edited.jpg", flower bath), `4c89f1_a685b268fb144714970fb60d760a3ff5~mv2.jpg` ("croped-05880_edited.jpg", oil vessel); 318×277 | Book Now ×3 (120×40, white, #ECECEC border, radius 5px, Tangerine Bold 20px) → `mailto:marketing.theshalabali@gmail.com?subject=In-house retreat inquiry` | Beige band; heading above; 3 white cards centred (x221/560/899); paragraph centred below | Heading text "Chooser Your Journey" above the cards; cards stacked; the "Set in the peaceful…" paragraph and the h3 "What is included in our program ?" come **after** the cards. Card images may render blank (lazy-load) |
| 4 | A Retreat to Cleanse, Restore & Reconnect | Heading "A Retreat to Cleanse, Restore & Reconnect" (Tangerine Bold 40px). "Whether you are seeking a deeper reset for body and mind, support for stress and fatigue, help restoring digestion and vitality, or simply the space to reconnect with yourself, our Panchakarma Retreats offer a meaningful opportunity for healing on every level." | `4c89f1_4e7835023e624170b0eb8b1c4f470b2e~mv2.jpg` ("croped-09242.jpg", woman receiving head treatment) 720×466 | — | Heading centred above; text left, image right (half-bleed), y2695–3268 | Image + paragraph moved to the top of the page; heading orphaned below the §3 cards (rendered as Tangerine Bold 25px "below last section") |
| 5 | Invitation | "We invite you to experience the profound healing potential of Panchakarma in a beautiful retreat setting, supported by experienced hands and grounded in the timeless wisdom of Ayurveda." | `4c89f1_9a94242c54634cfc88d96ae83289da6f~mv2.jpg` (shirodhara oil pour) 720×469 | — | Image left, text right, y3268–3735 | Image 320×213 then text, after the benefits list |
| 6 | Personalised experience + doctor | h2 "A Personalised Healing Experience at The Shala Bali" (Tangerine Bold 40px); "At The Shala Bali, we believe Panchakarma should be both authentic and deeply supportive." / "Our retreats are designed as a high-quality healing journey, where each guest is cared for as an individual and guided with attention, sensitivity and professionalism. Your retreat begins with assessment and consultation from our experienced Ayurvedic doctor, who carefully evaluates your constitution, current imbalances and personal health goals. From there, your programme is tailored specifically for you." h2 "About our Ayurvedic Doctor" + "Dr. Komang Sudarmi is the first local Indonesian to become an Ayurvedic doctor, completing her formal education in India, with years of experience working at Gujarat Ayurveda University & Hospital. She is committed to fulfilling her responsibility to educate, inspire and support others to understand and apply Ayurveda so they can experience health, happiness and longevity. Dr Komang’s expertise, sincerity, positive attitude and tireless energy provide our guests with an incredible experience and amazing results." | Portrait `4c89f1_905c666a7fe14b4299273301e9b1ff2e~mv2.jpg` ("WhatsApp Image 2026-08-16 at 3.22_edited") 258×267 in an **arch frame**; bio in a white rounded (pill/arch-ended) card with a short rule under it | — | Beige band y3735–4299; intro centred; then portrait (x324) left and bio card right | Portrait 170×239 arch centred, bio card below, then a large empty beige gap |
| 7 | Frequently Asked Questions | h3 "Frequently Asked Questions" (Tangerine Bold 38px, left). 8 Q&As: question bold Bellota 16px, answer italic bullet. Questions: "How long should I stay for a Panchakarma Retreat ?"; "Is Panchakarma suitable for everyone?"; "What treatments are included in a Panchakarma Retreat?"; "Will I receive a consultation with the Ayurvedic doctor?"; "Is Panchakarma just a detox?"; "What kind of food is served during the retreat?"; "Can I do a Panchakarma Retreats if I am feeling stressed or burnt out?"; "How do I know if a Panchakarma Retreat is right for me?". Answers verbatim in `page-text/copy-of-retreat-packages.txt` | — | — | Light-grey (#F0F0F0) box inset left/right, text justified, y4300–5574; all answers are open (static text, not an accordion) | Left-aligned, full width, long |
| 8 | Footer | Global | — | — | — | — |

- **Pricing / factual details (verbatim):**
  - **7 Nights/ 8 Days.**
    - Inclusions: "Accomodation"; "Airport Pick-up or Hotel Pick-up"; "3 x Ayurvedic Consultations"; "1 x Deep Session Screening + Therapy Healing"; "Detox Herbs"; "Daily Morning Yoga – 1.5 hour"; "3 x Vegetarian Meals per day"; "All drinks & Herbal Infusion Preparations"; "2 x Treatments per Day"; "1 x Herbal Flower Bath"; "1 x Ayurvedic Lecture 1 hour"; "1 x Rice Paddy Walk"; "1 x In-House Activity".
    - Prices: "The Price :" "Bungalow Room IDR 38.034.000++ / USD $2.113" "Deluxe Room IDR 41.832.000++ / USD $2.324".
  - **14 Nights/ 15 Days.**
    - Inclusions: as above, except "6 x Ayurvedic Consultations"; "2 x Deep Session Screening + Therapy Healing"; "2 x Ayurvedic Lecture 1 hour"; "1 x Rice Paddy Walk"; "2 x In-House Activity".
    - Prices: "Bungalow Room IDR 75.402.000++ / USD $4.189" "Deluxe Room IDR 82.980.000++ / USD $4.610".
  - **21 Nights/ 22 Days.**
    - Inclusions: as above, except "9 x Ayurvedic Consultations"; "3 x Deep Session Screening + Therapy Healing"; "3 x Ayurvedic Lecture 1 hour"; "3 x Rice Paddy Walk"; "3 x In-House Activity".
    - Prices: "Bungalow Room IDR 112.752.000++ / USD $6.264" "Deluxe Room IDR 124.128.000++ /USD $6.896".
  - FAQ facts: "durations of 7 days minimum is recommended and optimum up to 21 days"; "your programme will include 2 body treatments per day".
- **Source defects observed:**
  - **Copy:**
    - Typo "Accomodation" on all three cards.
    - Inconsistent spacing: "/USD" with no space on the 21-night Deluxe price.
    - Inconsistent spelling: "Panchakarma" / "PanchaKarma" / "Pancha Karma".
    - Question "Can I do a Panchakarma Retreats if…" (singular/plural mismatch).
    - Stray space before "?" in "our program ?" and "Retreat ?".
    - The "About our Ayurvedic Doctor" heading contains zero-width spaces.
  - **Images and metadata:**
    - The image alt text is a WhatsApp file name.
    - The title and meta description are copied from `/retreat-packages`; the slug is "copy-of-retreat-packages".
    - The desktop hero crop appears blurred/zoomed in the capture.
  - **Mobile layout:**
    - Section order is scrambled: §4's image and paragraph come first; "Chooser Your Journey" typo; "What is included…" heading below the cards; "A Retreat to Cleanse…" heading orphaned.
    - Prices split into "Bungalow Room IDR ++ / USD $2.113" with the number pulled out as a `tel:38.034.000` link (same for all six prices).
    - Very large empty gaps.
- **Interactions:**
  - Background-Reveal hero.
  - Book Now mailto links.
  - The FAQ is static (no accordion).
  - Third-party chat widget overlay.
  - No video, slider or gallery on this page.

---

### Host a retreat — `/copy-of-darshana-veda-spa`
- **Status:** in desktop nav ("Host a retreat"). The slug is a leftover from copying the Darshana Veda Spa page.
- **Purpose:** Pitches the venue to yoga teachers who want to host their own group retreats: intro, host testimonial, brochure request and accommodation options.
- **Title / meta description:** Title "Host a retreat  | theshalabali" (double space). Meta description: none.
- **Page height:** desktop 2946px, mobile 3855px

| # | Section | Content | Media | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Header | Global header. In the 1440 capture only the tagline was recorded and the nav row is not visible in the contact sheet (header shows just the 3px rule); whether this is a capture artefact or a real defect is unclear | — | tagline → `/baliyogaretreat` | — | Global drawer |
| 1 | Hero strip | No text | `4c89f1_a8172b96ac6d49c8a543556eabe74f46~mv2.jpg` alt "Shala .jpg", 1420×900 fixed background (Background-Reveal). Desktop crop shows the thatched shala ceiling with a woven chandelier; mobile shows the open-sided yoga shala floor | — | Inset 10px, ~y54–470 | 320×204 at top |
| 2 | Intro | h1 "Bring your vision to life" (Tangerine 40px #717070). "The Shala Bali is a home for people from around the world to learn, share and preserve the ancient practices of Yoga and to experience the benefits of integrated wellness." / "The Shala Bali was created by Yoga teachers for Yoga teachers and their groups. The serene and secluded nature environment is ideal for complete immersion and well equipped for trainings and courses." / "Our experienced team will work with you to create a memorable and transformational experience for your guests." (Bellota 18px #4A4A4A centred) | — | — | Centred column | 33px heading, 17px text |
| 3 | Host testimonial + arch video | "What other hosts are saying" (Bellota 20px #717070); quote (Bellota 16px, left): "" Hosting my week long retreat at The Shala Bali exceeded all expectations. The food was phenomenal. The design and architecture of the whole place was just so, so beautiful. Myself and my group of yogis were grateful to have a very relaxing time lazing by the salt water pool, and having long lazy swims in the sunshine. The staff were incredibly generous and helpful too. I'm so appreciative of the amount of support I received from you all in the lead up to and during the retreat itself. I'm already dreaming of the next one!" - Amy Landry Yoga & Ayurveda" | VIDEO `4c89f1_fa23ed753a9a4012afc12475d06e5c7c` 720p, 386×484, **arch frame with a carved-door style top**, autoplay/loop/muted (woman walking out through a carved doorway) | — | Quote column left (~x220–580), arch video right (x778, y932) | Video 280×350 first, then brochure (§4), then the testimonial heading + quote |
| 4 | Brochure request | — | `4c89f1_2f4e52209f9f44409749669e78e50127~mv2.jpg` alt "Shala Rooms.jpg" 443×353 (aerial of pool and bale with "The Shala Bali" brochure-cover overlay text) | BUTTON "Request brochure" 144×40, white, 1px #ECECEC border, square corners, 15px #4A4A4A ls 0.75px → `mailto:theshalabali@gmail.com?subject=Retreat borchure request ` | Centred image (x485) with a small button below | Image 280×198, button 160×42 |
| 5 | Accommodation options | "Accommodation options" (22px). Three cards: h4 "Villa rooms" — "Enjoy modern Balinese inspired beauty. Our six Villa Rooms each have a unique design and outlook, some with peaceful jungle views, others overlooking the endless green rice paddies. Located close to the Yoga Shala and Shala Cafe. All villa rooms can be set up as twin or king."; h4 "Wooden Bungalows" — "Relax in rustic elegance. Our three Darshana Bungalows built from 100% recycled Javanese wood are a perfect hideaway. Each have a private garden lined with lush greenery and wild flowers. Sitting a stones throw from our beautiful Ayurvedic spa and Indian Cafe. All Darshana Bungalows can be set up as king or twin"; h4 "Suite rooms (limited availability)" — "Experience a little extra. Our three suites each with attached living area and kitchen are only available during limited dates. The luxurious master rooms of the Kasih Villa, Ganapati Villa and Rahasia Villa. Two of the three master suites can be set up as twin or king." Then "For a comprehensive room list with layout, we invite you to download our brochure below" | `4c89f1_a3a4cc47ae204b5e9256bb898fab244b~mv2.jpg`, `4c89f1_95fe79ffff084547b6bd690fc8cfda44~mv2.jpg`, `4c89f1_d79480eaef6d4095800dbd11c00386b5~mv2.jpg` (306×204) | Image links (empty text) → `/copy-of-general`, `/copy-of-villa-rooms`, `/copy-of-villa-rooms-1` (per-image order not confirmed); BUTTON "Coming soon" 153×76 → none | Beige band; 3 columns (x231/567/903); brochure line + "Coming soon" centred. Identical block to retreat-packages §8 apart from the names | Stacked, image 297×231; **the brochure line and the "Coming soon" button are absent** |
| 6 | Footer | Global | — | — | — | — |

- **Pricing / factual details (verbatim):** No prices. Inventory: "six Villa Rooms"; "three Darshana Bungalows built from 100% recycled Javanese wood"; "three suites … Kasih Villa, Ganapati Villa and Rahasia Villa. Two of the three master suites can be set up as twin or king." Testimonial attributed to "Amy Landry Yoga & Ayurveda".
- **Source defects observed:**
  - **Room names don't match the rest of the site:**
    - "Villa rooms" here vs "Deluxe Rooms" on `/retreat-packages` and in the nav.
    - "Suite rooms" here vs "Master Suites".
  - **Copy, links and metadata:**
    - Mailto subject typo "Retreat borchure request " (with a trailing space).
    - The title has a double space; there is no meta description.
    - The "Coming soon" brochure placeholder has no link, and on this page the "Request brochure" button does work as a mailto.
    - The quote opens with `" ` (quote mark followed by a space).
  - **Layout:**
    - Desktop nav was missing or not captured in the 1440 run (unclear).
    - On mobile, the brochure block moves above the testimonial, and the brochure line and "Coming soon" button disappear.
- **Interactions:**
  - Arch-framed autoplay looping video.
  - Background-Reveal hero.
  - Mailto brochure button.
  - Third-party chat widget overlay.

---

### Darshana Veda Spa — `/darshanavedaspa`
- **Status:** in desktop nav ("Darshana Veda Spa", rendered active in #01B1AF on this page)
- **Purpose:** Presents the on-site Ayurvedic/Balinese day spa: ethos, opening hours, image-panel spa menu, four feature cards and a contact/map block, with WhatsApp booking.
- **Title / meta description:** Title "Darshana Veda Spa  | theshalabali" (double space before the pipe, verbatim). Meta description: none (only canonical, og:title, og:image `4c89f1_5d417439a7eb443cb602e639ca06f157~mv2.jpg`, og:url).
- **Page height:** desktop 3608px, mobile 4904px (320px layout)

| # | Section | Content | Media | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Global header | Global header/footer; nav item "Darshana Veda Spa" coloured #01B1AF (active). | — | global | sticky 54px | drawer menu |
| 1 | Hero image strip | No text. | IMG `4c89f1_c99f7f4b32994620be04ce96a38cbd57~mv2.jpg` alt "spa beds.jpg", 1420×900 source shown in a 520px-high strip (fit:cover, x10 — i.e. 10px inset each side, not fully edge-to-edge). In the 1440/768 captures it renders blurred (lazy-load placeholder; unclear in capture). | — | y54, h520, image strip near full width | h194, image 320×193 full-bleed; mobile capture shows the sharp spa-beds photo (thatched spa pavilion with massage beds). |
| 2 | Intro / "Our ethos" | h1 "Darshana Veda Spa" (Tangerine 44px #4A4A4A centred); "Open daily 9:30am - 8pm" (Bellota 14px); "Our ethos" (Bellota 22px #717070); five centred Bellota 16px/28.8px #717070 paragraphs: "At Darshana Veda Spa, we honor mother nature and her ability to renew and restore." / "By harnessing the soothing energy of Bali, we aspire to transport all our guests into a state of harmony in the present moment." / "We operate on the principle that everything needed to heal the physical body can be found in our natural environment." / "Our authentic treatments and lovingly made natural products are testament to our commitment for preserving the ancient healing techniques of Indian Natural medicine and Balinese therapies." / "We invite you to find your peace amid verdant nature, flickering candles and the trickle of flowing water" (no full stop). Phone "+62 8123 632 5617" (Bellota 17px bold #01B1AF). Script tagline "Darshan ; Vision of the Divine  Veda ; Sacred Knowledge" (Tangerine Bold 29px, right-aligned under the video). | VIDEO `4c89f1_0670203e92e144c3aced8ac62b587137` (720p mp4), 416×535, autoplay + loop + muted, shown in an **arch frame** (round top). Poster `4c89f1_0670203e92e144c3aced8ac62b587137f002.jpg`. | "BOOK NOW" → `https://wa.me/6281236325617` (153×40, white bg, 1px #ECECEC border, radius 10px, label Tangerine-family web font 15px #01B1AF ls 0.75px) | y574, h1001. Two columns: ethos text column left (~x110–300 in 720px sheet), arched video right; BOOK NOW + phone inline beneath text; script tagline bottom-right. | Single column: h1 26px, hours, then a phone link "+62 812 3632 5617" → `tel:+62 812 3632 5617` on a beige full-width band (mobile only, different digit grouping), ethos paragraphs, arched image (poster 280×350; video element 300×150 not autoplaying), BOOK NOW 160×42 centred. Script tagline not present on mobile. |
| 3 | Spa Menu | h2 "Spa Menu" (Tangerine Bold 44px, fades in 1.5s on load). | Horizontal image slider of 25 panels (19 menu-page PNG/JPG panels + 6 photo panels), all 443px high; panel widths 591 (menu pages), 295 (narrow JPGs), 787/665 (photos). See Interactions for ordered IDs. First panel shows "Welcome to Darshana Veda Spa" parchment menu page. | Next/prev arrow ">" on the slider (visible at right edge in sheet) | Beige full-width band; white card (~820px wide) containing title and slider; slider viewport shows ~1.5 panels. | Title 30px; slider scaled to 133px high (first panel 177×133, second 236×133) with arrows "<" ">". |
| 4 | Four feature cards | Card 1 h4 "Earth & skin friendly ingredients" — "ll our ingredients are mother earth friendly superfoods for the skin! Carefully chosen for their robust healing capabilities." (drop-cap "A" split into separate run) + "Luxurious homemade creams & gels to nourish and hydrate, cold pressed massage oils, deliciously fragrant scented powders and spritzes and vibrant plant based nail polish without any nasties. Your skin will feel the quality of our products." Card 2 h4 "Ayurveda" — "Experience the ancient art of Indian healing, balance and relaxation." + "Ayurvedic therapies are deeply rooted in Indian culture. The natural alternative to create harmony and prevent illness. The cornerstone of Ayurvedic medicine is - Balance and Harmony - both internally and" / "in relationship to ones environment." Card 3 h4 "At one with nature" — "\"Lose yourself in nature\" - and find peace... Ralph Waldo Emerson. One of the most powerful healing elements of our holistic spa experience is being enveloped by nature." Card 4 h4 "Signature Bali massage & beauty" — "Embody the peace and gentleness that is Bali with our signature Balinese massage" / "or t" / "reat yourself to one of our facials, mani pedi's and body wraps to make your skin glow and spirit sparkle." Headings Tangerine 30px, body Bellota 14px. Below: phone "+62 8123 632 5617" (Bellota 17px bold #717070). | Card images 306×226 rounded corners: `4c89f1_94797e16a5424ceea27e30e2a1ffea6b~mv2.jpg` "Spa powders.jpg"; `4c89f1_f7193a855426487886e782417ce03c74~mv2.png` "unnamed.png" (copper pot); `4c89f1_23cb67e82a6e4537922eaa9188119304~mv2.jpg` "Tea spa outside.jpg"; `4c89f1_b7065da1f13c43de9bed8e4e21ccd209~mv2.jpg` "massage.jpg". | "BOOK NOW" → `https://wa.me/6281236325617` (label colour #18C1C0) with phone beside it | 4 equal columns (x78/404/730/1056 in 1440 layout space at 306px each), left-aligned text; BOOK NOW + phone centred-left under cards 1–2. | Stacked single column, image 297×231 above each heading; heading 27px, body 13px. In mobile render the paragraph order of card 4 becomes "...Balinese massage" / "reat yourself..." / "or t" (broken order). Mobile card images blank (lazy-load artefact). One BOOK NOW after card 4. |
| 5 | Contact Us | h2 "Contact Us" (Bellota 40px ls 4px #717070); h2 "Darshana Veda Spa" (Tangerine Bold 30px); "OPEN DAILY 9" ":30" "am - 8pm" (split runs, read "OPEN DAILY 9:30am - 8pm"); "Jalan Sanggingan No. 90," / "Kedewatan, Ubud 80571" / "Bali - Indonesia"; "+62" + "8123 632 5617" (bold) on one line. | Social icons 29×29: Facebook `0fdef751204647a3bbd7eaa2827ed4f9.png`, Google+ `05546d0902004bfabba0396e21f33f7d.png`, Instagram `04b15d1b030049d1b3746f8ef5a72955.png`. EMBED Google Maps 445×321 (satellite, pin "The Shala Bali Yoga Retreat"). | "Email" box button (142×40, white, no border, Bellota 16px #717070) → `mailto:manager4retreat@gmail.com?subject=Inquiry`; Facebook → `https://www.facebook.com/darshanavedaspa/`; Instagram → `https://www.instagram.com/darshanavedaspa/?hl=en`; Google+ icon (no href captured) | Beige full-width band: centred text block left (~x145–245 of 720) and map right. | Stacked: Contact Us 26px, spa name 23px, hours, address, icons 35×35, "8123 632 5617" → `tel:8123 632 5617`, Email 120×42, map 320×320 last (map area appears blank in mobile capture). |
| 6 | Global footer | — | — | global | — | — |

- **Pricing / factual details (verbatim):** Hours "Open daily 9:30am - 8pm" / "OPEN DAILY 9:30am - 8pm". Phone "+62 8123 632 5617" (desktop), "+62 812 3632 5617" (mobile tel link), "8123 632 5617" (contact). WhatsApp `https://wa.me/6281236325617`. Email `manager4retreat@gmail.com`. Address "Jalan Sanggingan No. 90, Kedewatan, Ubud 80571 Bali - Indonesia". No prices in HTML text — treatment prices exist only inside the spa-menu images.
- **Source defects observed:**
  - Drop-cap "A" of "All our ingredients" is a separate text element; the run reads "ll our ingredients…".
  - "or t" / "reat yourself…" split across elements; on mobile the order breaks to "…Balinese massage" → "reat yourself…" → "or t".
  - Contact hours split into "OPEN DAILY 9" / ":30" / "am - 8pm"; phone split "+62" / "8123 632 5617".
  - Ethos last sentence and "…Balinese massage" lack full stops; "ones environment" (missing apostrophe).
  - Inconsistent phone formatting (8123 632 5617 vs 812 3632 5617).
  - Dead "Black Google+ Icon" (Google+ discontinued; no link captured).
  - Title has double space "Darshana Veda Spa  | theshalabali".
  - At 768px the desktop layout is clipped on the right (arch video, cards cut off).
  - Desktop hero renders blurred in capture (unclear whether lazy-load or source).
- **Interactions:**
  - Spa Menu slider: 25 panels, horizontal, with arrow navigation; order (by x position): 1 `4c89f1_1eb0901338a440e997b122e0f65dde00~mv2.png`, 2 `4c89f1_2dedc563b456415c8e759bda02cd44c2~mv2.jpg` (photo "Spa journey_edited.jpg"), 3 `4c89f1_05cb8091d392497fa3a6909cb41de63a~mv2.png`, 4 `4c89f1_c3fa0e5369094fdeb212c570dd7b4c7b~mv2.jpg` (photo "Scrub powders.jpg"), 5 `4c89f1_28db924036c3480c9ef53f6eebbe9076~mv2.png`, 6 `4c89f1_8a2b354ae514497ebba2ee1df37f3bc5~mv2.jpg` (narrow 295), 7 `4c89f1_74d1431e50e1407fa38a3edd83753d5a~mv2.jpg` (narrow 295), 8 `4c89f1_516be2daf3d540f690e955a031158292~mv2.png`, 9 `4c89f1_7e5504818bbd48adb4c2b5e9847920b2~mv2.png`, 10 `4c89f1_f857d5216908438f8f5ea7fa625a8a7c~mv2.jpg` (photo "Kati basti hot stone.jpg"), 11 `4c89f1_7fa8a9e928ec4931a70728b0f43f63c1~mv2.png`, 12 `4c89f1_72b871b3835f4bd9b477d0490757050f~mv2.jpg` (narrow 295), 13 `4c89f1_868bd93e094c449f8085c55b6dc94f2e~mv2.jpg` (photo "Facial closeup.jpg"), 14 `4c89f1_1e5d65615ebb4bb3b96f5c83f65832f1~mv2.png`, 15 `4c89f1_d69c989b6bf447a8882536bbaf866ca0~mv2.png`, 16 `4c89f1_b7065da1f13c43de9bed8e4e21ccd209~mv2.jpg` (photo "massage.jpg", 665 wide), 17 `4c89f1_de4376139e81411faf4a886beebd9ed5~mv2.png`, 18 `4c89f1_2fc23dbb15e841e68a0104a571114231~mv2.png`, 19 `4c89f1_62b4426e12f4404a8087a3e670e49e19~mv2.png`, 20 `4c89f1_bfd4c51805124a6986fa298ff1a9f0fd~mv2.png`, 21 `4c89f1_215bb21556714808a864ae73bc676527~mv2.jpg` (photo, 665 wide), 22 `4c89f1_4e5311b5c11448b9b7610e1cc2ad68df~mv2.png`, 23 `4c89f1_02c5734c96004065bb109fe46e3d4f8e~mv2.png`, 24 `4c89f1_75f09adea41646e487acecb0324e5f49~mv2.png`, 25 `4c89f1_d18a33af3cc14642b9ca2d0e3647d93f~mv2.png`. Whether panels open a lightbox: unclear in capture.
  - Ethos video: autoplay/loop/muted on desktop; on mobile shows poster (autoplay false).
  - Animations: header tagline + nav fade-in 1.8s; "Spa Menu" fade-in 1.5s. No Background-Reveal strip evidenced on this page.
  - Floating Wix widgets visible bottom-right (accessibility/chat bubble) — capture artefacts of Wix chat, unclear whether to recreate.

---

### Mumbai Station (Indian Cafe) — `/mumbaistationindiancafe`
- **Status:** in desktop nav ("Indian Cafe")
- **Purpose:** Introduces the on-site pure-vegetarian Indian / Ayurvedic garden cafe "Mumbai Station" with three feature cards and a 7-page menu slideshow.
- **Title / meta description:** Title "Indian Cafe | theshalabali". Meta description: none (canonical, og:title, og:image `4c89f1_5d417439a7eb443cb602e639ca06f157~mv2.jpg`, og:url only).
- **Page height:** desktop 2580px, mobile 2988px (320px layout)

| # | Section | Content | Media | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Global header | Global header/footer. Note: in the 1440 capture only the tagline was recorded in the header and the nav row looks empty in the sheet (unclear in capture; 768 render shows the normal nav). | — | global | sticky 54px | drawer menu |
| 1 | Hero image strip | No text. | IMG `4c89f1_6af07326a82b4e31b8f69b69059c0579~mv2.jpg` alt "TheShalaBali Food-19.jpg", full-bleed 1440 wide, cropped to 515px strip (fit:cover; shows a plate on a rattan placemat with frangipani). | — | y54, h515, edge-to-edge | h150 strip 320×150 (blurred placeholder in capture). |
| 2 | Intro | h1 "Mumbai Station" (Tangerine Bold 56px #717070 centred); "Indian food spiced with wellness!" (Bellota 18px ls 0.9px); "We serve pure vegetarian dishes made with the best quality ingredients and authentic flavors. Enjoy our favorite recipes from India and our special Ayurvedic menu."; "Our food is leaning into Sattvic style, light, fresh and perfect for daily consumption AND we always serve delicious condiments to add spice or flavor according to our guests personal taste!" (Bellota 18px/28.8px ls 0.8px #4A4A4A centred). | — | — | y569, h412, centred narrow text column (~600px). | h1 30px; body 17px; large empty gap (~150px) after intro before cards (see sheet). |
| 3 | Three feature cards | Card 1 h2 "Our specialty": "Initially Mumbai Station garden cafe served only Dosa and Masala Chai. Eight years on, we have grown into a welcoming home for locals and holiday makers from around the world who are seeking nourishing, feel good vegetarian food, reminiscent of a home cooked Indian meal. Our masala dosa is still our signature dish!" Card 2 h2 "Ayurvedic Menu": "Food packed with Prana, to increase our life force and create balance. Our specially designed Ayurvedic menu provides sattvic, soothing foods for the digestion and your individual doshic needs." Card 3 h2 "How we add extra": "Mumbai Station produce is thoughtfully sourced and our dishes our made with care & quality, whole ingredients - no hidden additives. We choose the healthiest options where possible, while maintaining authentic taste. You can expect less heavy oils or refined sugars and more whole, vital ingredients." Headings Tangerine 30px #717070 left; body Bellota 16px/28.8px #4A4A4A left. | 306×226 rounded-corner images: `4c89f1_c756d8553c444ddfbec42e02be3c3938~mv2.png` "dosa_edited_edited.png"; `4c89f1_4aeb61f37eec4dbfb26be852491109ce~mv2.jpg` "mumbai_edited.jpg" (cropped x0 y450 w1512 h1117); `4c89f1_f84ac578fc034a299102e287ec450abc~mv2.jpg` "efde4ba8-7779-4d2e-9e7a-782caddcf1cf-1_e…". | — | 3 equal columns centred (x230/566/902), image above heading above text. | Stacked; images 280×176 (blank in mobile capture — lazy-load artefact); large empty gaps between cards in mobile render. |
| 4 | Menu slideshow | Label "Menu" (Bellota 22px bold #717070 centred); counter "1/7" (Arial 12px, right-aligned); hidden text "press to zoom". First slide: cover "Mumbai Station" with script subtitle and blue herb illustration on white with thin black border. | Slideshow gallery 564×686 (portrait, source 1414×2000), 7 items. | Prev/next arrows (visible on mobile) ; click → zoom/lightbox ("press to zoom") | Within section 3 (y981, h1564): "Menu" label left-of-centre, slideshow centred-left (x419) below cards. | "Menu" 21px; slideshow 276×336 with "<" ">" arrows; counter 1/7. |
| 5 | Global footer | — | — | global | — | — |

- **Pricing / factual details (verbatim):** "pure vegetarian"; originally "only Dosa and Masala Chai"; "Eight years on"; "Our masala dosa is still our signature dish!". No prices, hours, phone or address on this page (prices only inside the menu images).
- **Source defects observed:**
  - "our dishes our made" (should be "are made").
  - "guests personal taste" (missing apostrophe).
  - No contact/booking CTA, hours or address on the page.
  - "Menu" label and slideshow sit off-centre relative to the 3-card row (left-shifted in sheet).
  - Mobile has very large empty vertical gaps between intro and cards and between cards (likely lazy images not loaded, but the gaps look larger than the 176px image height — unclear in capture).
  - At 768px the desktop layout is clipped on the right.
- **Interactions:**
  - Menu slideshow: 7 slides, counter "1/7", prev/next arrows, click to zoom (Wix "press to zoom" → expand/lightbox). Media IDs captured in order: 1 `4c89f1_67c139aaa38f4704b8855ab617692fe0~mv2.jpg`, 2 `4c89f1_9fa3b30857a54ee4931991e212371d4c~mv2.jpg`, 3 `4c89f1_8a41682319234fd5b02ae7d1a1d78648~mv2.jpg`; slides 4–7: IDs not present in capture (SSR only rendered 3 items) — unclear in capture.
  - No load/scroll animations recorded for this page's content (anim capture empty); no Background-Reveal evidenced.

---

### Bungalows — `/copy-of-villa-rooms`
- **Status:** in desktop nav (Accommodation ▾ → "Bungalows")
- **Purpose:** Accommodation page for the wooden Darshana bungalows: three room-type blocks (Darshana Bungalows, Darshana Deluxe Bungalow, Kasih bungalow) each with amenities, mailto booking and a 6-image gallery, then cross-links to the other room types and a brochure CTA.
- **Title / meta description:** Title "Bungalows | theshalabali". Meta description: none (canonical, og:title, og:image `4c89f1_5d417439a7eb443cb602e639ca06f157~mv2.jpg`, og:url only).
- **Page height:** desktop 11568px (content ends ≈ y5000; see defects), mobile 6706px

| # | Section | Content | Media | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Global header | Global header/footer. | — | global | sticky 54px | drawer |
| 1 | Hero strip | — | IMG `4c89f1_49daee6abfe346aeb35f3dcb964730e9~mv2_d_4096_2304_s_2.jpg` alt "IMG_20190306_114250.jpg", full-bleed, 599px high strip (fit:cover; renders as a dark blurred thatch close-up in capture — lazy placeholder or extreme crop, unclear in capture). | — | y54, h599, edge-to-edge | Only 50px high (320×50 sliver). |
| 2 | Intro | h1 "Bungalows" (Tangerine 55px, very wide letter-spacing 23.29px, centred); paragraph (Bellota 16px/18.2px centred): "Relax in rustic elegance. Our four bungalows are built from 100% recycled Javanese wood are a perfect hideaway. Each have a private garden lined with lush greenery and wild flowers. Sitting a stones throw from our beautiful Ayurvedic spa and Indian Cafe. All Darshana Bungalows can be set up as king or twin" | — | — | y653, h246, centred ~540px column | h1 27px ls 11.4px; text 16px/19.6px. |
| 3 | Room 1: Darshana Bungalows | Title "Darshana Bungalows" (Bellota 30px #717070, a p not a heading); small dark bar-chart icon (text alt "Chart"); "Our three traditional Darshana Bungalows are each enclosed in their own lush and fully private garden. With natural wood interior and semi open bathrooms." Bulleted amenity list (col 2) + size list (col 3) — see Pricing. | Bar-chart icon (decorative) | "Book" → `mailto:theshalabali@gmail.com?subject=Reservation Darshana Bungalow` (142×40, white, 1px #0C4426 border, square, label 15px #0C4426 ls 0.75px) | y899, h460. Pale blush/peach full-width band. 3 columns: title+icon+desc+Book (left, x≈240), amenities bullets (middle), sqm/capacity bullets (right). | Single column on peach band: title 23px, icon, desc, Book 140×42, then all bullets (amenities then sizes). |
| 4 | Gallery 1 | — | 2×3 grid of 6 images 470×269 (no gaps between rows; ~15px column gutter), full-width: `4c89f1_59c52e3eb3e0498e8f2562f3f33d1d89~mv2.jpg`, `4c89f1_22c6848b2ec0494893eeda5709963ced.jpg`, `4c89f1_49daee6abfe346aeb35f3dcb964730e9~mv2_d_4096_2304_s_2.jpg` (same as hero), `4c89f1_743d6147719641509f0600dcbe7b525d~mv2.jpg`, `4c89f1_073222969ba747ada9126b4dd8e4c8b7~mv2.jpg`, `4c89f1_40f1bd1d9c624982a266363f233fcdbc~mv2.jpg` | Click → lightbox (see Interactions) | y≈1359, edge-to-edge grid | 2 columns × 3 rows, 133×177 portrait crops. |
| 5 | Room 2: Darshana Deluxe Bungalow | Title "Darshana Deluxe Bungalow" (wraps to two lines on desktop); chart icon; description identical to Room 1 ("Our three traditional Darshana Bungalows are each enclosed…semi open bathrooms."); identical amenity + size lists to Room 1. | Chart icon | "Book" → `mailto:theshalabali@gmail.com?subject=Reservation Darshana Bungalow` (same subject as Room 1) | Same 3-column peach band | Same stacking; title 21px; Book 120×42 centred. |
| 6 | Gallery 2 | — | 2×3 grid 470×269: `4c89f1_66395c376efa45698cd927afb99c6fd6~mv2.jpg`, `4c89f1_ca8ef460bfc04007aba649ff0aee3892~mv2.jpg`, `4c89f1_0d89eed1e6b94e7b904bee0f0e96def5~mv2.jpg`, `4c89f1_78ce044c2338421a80eab87d034929d4~mv2.jpg`, `4c89f1_2029cf89e73d4af4bccaba47ef09dbbc~mv2.jpg`, `4c89f1_74d25827c9194245a08431334f2f64c9~mv2.jpg` | lightbox | y2380, h556 | 3 columns × 2 rows of tall slivers 97×269. |
| 7 | Room 3: Kasih bungalow | Title "Kasih bungalow"; chart icon; "This pretty Balinese hut is a favorite for solo guests or couples. Made with antique wood from Java it has a cozy interior with glass doors opening to a beautiful open air bathtub." Amenity list adds "Bathtub", bed "King bed set up only". | Chart icon | "Book" → `mailto:theshalabali@gmail.com?subject=Reservation Pretty Balinese Hut` | y2976, h465, 3-column peach band | stacked; preceded by a large blank gap on mobile (~350px, likely lazy-load artefact). |
| 8 | Gallery 3 | — | 2×3 grid 470×269: `4c89f1_180a84ecfb52451d95a8b3cc257d6879~mv2.jpg`, `4c89f1_109f708d20f9490f90c7b109cff7283c.jpg`, `4c89f1_dbbf38bb1ae04d0d8ef8efee52272097.jpg`, `4c89f1_8d8d59dbaec7478f986c0b3dc531c6a5.jpg`, `4c89f1_aba8bbf7c9554bfb94dabb09cf6b8e0e~mv2.jpg`, `4c89f1_c032243ab5614a1a8833a4220756e7a2~mv2.jpg` | lightbox | y3441, h562 | 3 × 2 slivers 83×273. |
| 9 | Other room types + brochure | Three cards: h4 "Deluxe Rooms" — "Enjoy modern Balinese inspired beauty. Our six Villa Rooms each have a unique design and outlook, some with peaceful jungle views, others overlooking the endless green rice paddies. Located close to the Yoga Shala and Shala Cafe. All villa rooms can be set up as twin or king."; h4 "Wooden Bungalows" — "Relax in rustic elegance. Our three Darshana Bungalows built from 100% recycled Javanese wood are a perfect hideaway. Each have a private garden lined with lush greenery and wild flowers. Sitting a stones throw from our beautiful Ayurvedic spa and Indian Cafe. All Darshana Bungalows can be set up as king or twin"; h4 "Master suite (limited availability)" — "Experience a little extra. Our three suites each with attached living area and kitchen are only available during limited dates. The luxurious master rooms of the Kasih Villa, Ganapati Villa and Rahasia Villa. Two of the three master suites can be set up as twin or king." Then "For a comprehensive room list with layout, we invite you to download our brochure below" (Bellota 22px #717070 centred). Headings Tangerine 30px #717070; body Bellota 16px/28.8px. | 306×204 rounded images: `4c89f1_a3a4cc47ae204b5e9256bb898fab244b~mv2.jpg` "ganesh room with view.jpg"; `4c89f1_95fe79ffff084547b6bd690fc8cfda44~mv2.jpg` "unspecified-10 copy.jpg"; `4c89f1_d79480eaef6d4095800dbd11c00386b5~mv2.jpg` "The Shala Full-59_edited_edited.jpg" | "Brochure" button (153×76 hit area, white @51% bg, Bellota 15px ls 3px #4A4A4A) → no href captured. Card images/titles are not links in capture. | y4003, h947; beige band; 3 equal columns centred (x231/567/903); brochure line + button centred below. | Stacked cards, images 278×208; brochure text 18px; Brochure 160×42. |
| 10 | Empty area + footer | ~6500px of blank white space on desktop between the brochure band and the footer. | — | — | — | Not present on mobile. |

- **Pricing / factual details (verbatim):**
  - Darshana Bungalows: "Free WiFi", "King or twin bed set up", "High-end mattresses with toppers", "Rain shower", "Air-conditioning", "Cotton mosquito nets", "Ceiling fan", "Safe for valuables", "Ensuite bathroom", "Mini fridge", "Natural bath amenities", "Tea making facility"; "Suite 24 sqm", "Terrace 16 sqm", "Max. capacity: 2".
  - Darshana Deluxe Bungalow: identical list to Darshana Bungalows.
  - Kasih bungalow: "Free WiFi", "King bed set up only", "High-end mattresses with toppers", "Rain shower", "Bathtub", "Air-conditioning", "Cotton mosquito nets", "Ceiling fan", "Safe for valuables", "Ensuite bathroom", "Mini fridge", "Natural bath amenities", "Tea making facility"; "Suite 24 sqm", "Terrace 16 sqm", "Max. capacity: 2".
  - No prices on page. Booking email: theshalabali@gmail.com.
- **Source defects observed:**
  - "Our four bungalows" (intro) vs "Our three traditional Darshana Bungalows" / "Our three Darshana Bungalows" (room text and card).
  - Darshana Deluxe Bungalow description and amenities copied verbatim from Darshana Bungalows; its Book button uses the same subject "Reservation Darshana Bungalow".
  - Kasih bungalow Book subject is "Reservation Pretty Balinese Hut" (doesn't match room name).
  - "Deluxe Rooms" card says "Our six Villa Rooms" and "All villa rooms" (old naming).
  - "are built from … wood are a perfect hideaway" (grammar), "Each have", "a stones throw", intro and card text lack final full stop.
  - "High-end mattresses​ with toppers" contains a zero-width space.
  - Room titles are paragraphs, not headings; "Master suite" singular vs page name "Master Suites".
  - Brochure button has no link (dead control).
  - Desktop page is 11568px tall with ~6500px empty white space after the brochure band.
  - Mobile hero strip only 50px high.
  - Hidden/empty slideshow artefact in page text ("press to zoom", "1/1") — not visible in renders.
- **Interactions:**
  - Three 6-image grid galleries (18 images total); clicking an image opens the dark zoom lightbox with prev/next arrows and close X, URL gains `?lightbox=` (per ix/gallery-click.jpg). No pagination.
  - Animations: header tagline + nav fade-in 1.8s (2 fadeIn entries recorded). No Background-Reveal evidenced.
  - No hover effects recorded.

---

### Deluxe Rooms — `/copy-of-general`
- **Status:** in desktop nav (Accommodation ▾ → "Deluxe Rooms")
- **Purpose:** Accommodation page for the six villa/deluxe rooms in three types (Ganesh & Jivana, Rahasia, Ganapati), each with amenities, mailto booking and a 6-image gallery, then cross-links to other room types and a brochure CTA.
- **Title / meta description:** Title "Deluxe Rooms | theshalabali". Meta description: none (canonical, og:title, og:image `4c89f1_5d417439a7eb443cb602e639ca06f157~mv2.jpg`, og:url only).
- **Page height:** desktop 10499px (content ends ≈ y5000), mobile 7286px

| # | Section | Content | Media | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Global header | Global header/footer. | — | global | sticky 54px | drawer |
| 1 | Hero strip | — | IMG `4c89f1_9c2225d3173d4119bbc92d79e9774029~mv2.jpg` alt "KLP_9980.jpg", full-bleed 600px strip (fit:cover; renders as a blurred beige/wood band in capture — unclear in capture whether placeholder). | — | y54, h600, edge-to-edge | Strip only 50px high and positioned at y1082 — ≈1030px of blank white space above it at the top of the mobile page. |
| 2 | Title + intro | h1 "Deluxe Rooms" (Tangerine 55px, ls 19.25px, centred); "Enjoy modern Balinese inspired beauty. Our six Deluxe Rooms each have a unique design and outlook, some with peaceful jungle views, others overlooking the endless green rice paddies. Located close to the Yoga Shala and Shala Cafe. All villa rooms can be set up as twin or king." (Bellota 16px/18.2px centred) | — | — | y654–984, centred ~460px column | h1 27px ls 9.45px; text 16px/19.6px. |
| 3 | Room 1: Ganesh & Jivana Rooms | Title "Ganesh & Jivana Rooms" (Bellota 30px #4A4A4A — darker than Bungalows' #717070); chart icon; "North facing double bedrooms with expansive rice paddy views and beautifully hand carved wooden doors. Jivana room has a semi open bathroom and traditional peaked ceiling while Ganesh room has an enclosed bathroom for more privacy and a cosy corner lounge." + amenity/size lists. | Chart icon | "Book" → `mailto:theshalabali@gmail.com?subject=Reservation Ganesh / Jivana room` (142×40, white, 1px #0C4426 border, label 15px #0C4426) | y984, h462. Blush/peach band, 3 columns (title/desc/Book · amenities · sizes). | Stacked; title 23px; Book 140×42; amenities then sizes. |
| 4 | Gallery 1 | — | 2×3 grid 470×269: `4c89f1_ff87da036b41451c8c93fb57ce3630ac.jpg`, `4c89f1_72c0f6c3e9704b9fb70fbdb562ce99c3~mv2.jpg`, `4c89f1_69f08cd68fea4cb2b387577168b1eb0a~mv2.jpg`, `4c89f1_6d1344f1ba074a8f8450441cd54a60ff~mv2.jpg`, `4c89f1_6e1017848e2047269a434de06cf60a36~mv2.jpg`, `4c89f1_ac3f7d7f6fcf4fd69233efe2255726c7.jpg` | lightbox | y1446, h553, edge-to-edge | 2 cols × 3 rows, 133×177. |
| 5 | Room 2: Rahasia Rooms | Title "Rahasia Rooms"; chart icon; "Elegant rooms with lush jungle outlook or pool view. Boasting colorful interiors and Balinese touches. Decorated with stone carvings, lovely teak wooden luggage chests and elegant bathrooms." + lists. | Chart icon | "Book" → `mailto:theshalabali@gmail.com?subject=Reservation Rahasia Green / Purple` | y1999, h460, peach band 3 cols | stacked |
| 6 | Gallery 2 | — | 2×3 grid 470×269: `4c89f1_f508874f9fcd4dd7ba3850290380473a~mv2.jpg`, `4c89f1_aba371cd481d4a318bb9fef4fc26bf9d~mv2.jpg`, `4c89f1_f5e54442131b45a38f0b26ebf4ce840a.jpg`, `4c89f1_46c4a60f100e4a15834e098cacd1f019.jpg`, `4c89f1_d5cc086629484924b7f4f54ceb619435.jpg`, `4c89f1_1858e1671f114e5e808e6281141c78dd~mv2.jpg` | lightbox | y2459, h552 | 2 × 3, 133×177 |
| 7 | Room 3: Ganapati Rooms | Title "Ganapati Rooms"; chart icon; "Spacious triple rooms with west facing balconies overlooking the paddy fields. Equipped with a work desk and sofa bed sleeping an extra person. Semi open bathrooms with open air shower in the upper room." + lists. | Chart icon | "Book" → `mailto:theshalabali@gmail.com?subject=Reservation Ganapati room` | y3011, h459, peach band 3 cols | stacked |
| 8 | Gallery 3 | — | 2×3 grid 470×269: `4c89f1_bb9be0ec230d4745b84d85d49c45653d~mv2.jpg`, `4c89f1_fc69eb7dcd7745eca900096616c06e6d.jpg`, `4c89f1_1efe5d1cae4d44e084c6fc829f06a877~mv2_d_3744_5616_s_4_2.jpg`, `4c89f1_daabaf95b1894ff0b60a8c8cf82369ee~mv2.jpg`, `4c89f1_c9ceba1608204ca88141b2e42ec598f4~mv2.jpg`, `4c89f1_43edb8f1fa14485b930c5bdef9113146~mv2.jpg` | lightbox | y3470, h552 | 2 × 3, 133×177 |
| 9 | Other room types + brochure | Same block as Bungalows page: h4 "Deluxe Rooms" ("Enjoy modern Balinese inspired beauty. Our six Villa Rooms each have…All villa rooms can be set up as twin or king."), h4 "Wooden Bungalows" ("Relax in rustic elegance. Our three Darshana Bungalows built from 100% recycled Javanese wood…can be set up as king or twin"), h4 "Master suites" / "(limited availability)" (line break; plural here vs singular on Bungalows page) ("Experience a little extra. Our three suites each with attached living area and kitchen are only available during limited dates. The luxurious master rooms of the Kasih Villa, Ganapati Villa and Rahasia Villa. Two of the three master suites can be set up as twin or king."); "For a comprehensive room list with layout, we invite you to download our brochure below". | 306×204 rounded: `4c89f1_a3a4cc47ae204b5e9256bb898fab244b~mv2.jpg` "ganesh room with view.jpg", `4c89f1_95fe79ffff084547b6bd690fc8cfda44~mv2.jpg` "unspecified-10 copy.jpg", `4c89f1_d79480eaef6d4095800dbd11c00386b5~mv2.jpg` "The Shala Full-59_edited_edited.jpg" | "Brochure" (white @51%, Bellota 15px ls 3px) → no href captured | y4022, h962; beige band; 3 centred columns; brochure centred below | Stacked, images 278×208; Brochure 160×42 |
| 10 | Empty area + footer | ≈5500px blank white space on desktop below brochure band. | — | — | — | — |

- **Pricing / factual details (verbatim):**
  - Ganesh & Jivana Rooms: "Free WiFi", "King or twin bed set up", "High-end mattresses with toppers", "Rain shower", "Air-conditioning", "Cotton mosquito nets", "Ceiling fan", "Safe for valuables", "Ensuite bathroom", "Mini fridge", "Natural bath amenities", "Tea making facility"; sizes column "Room 20 sqm", "Balcony", "Bathroom", "Max. capacity: 2".
  - Rahasia Rooms: same 12 amenities; "Room 19 sqm", "Balcony", "Bathroom", "Max. capacity: 2".
  - Ganapati Rooms: same 12 amenities; "Suite 24 sqm", "Terrace 16 sqm", "Max. capacity: 3".
  - No prices. Booking email theshalabali@gmail.com.
- **Source defects observed:**
  - Intro says "six Deluxe Rooms" but then "All villa rooms"; cross-link card says "Our six Villa Rooms".
  - Ganapati described as "Spacious triple rooms" but bed line still "King or twin bed set up"; its sizes ("Suite 24 sqm / Terrace 16 sqm") match the bungalow values — possibly copied.
  - "Balcony" / "Bathroom" listed as bullets in the size column without values.
  - Rahasia Book subject "Reservation Rahasia Green / Purple" (room variants not explained on page).
  - "High-end mattresses​ with toppers" contains a zero-width space; room titles are paragraphs, not headings.
  - Brochure button has no link.
  - Desktop: ~5500px empty white space below content. Mobile: ~1030px empty white space at the top before the hero; hero strip only 50px high.
  - Hidden slideshow artefact in page text ("press to zoom", "1/1").
- **Interactions:**
  - Three 6-image grid galleries (18 images); click opens dark zoom lightbox with prev/next arrows and close X, URL gains `?lightbox=` (ix/gallery-click.jpg).
  - Animations: header tagline + nav fade-in 1.8s only (no content animations recorded). No Background-Reveal evidenced.

---

### Master Suites — `/copy-of-villa-rooms-1`
- **Status:** in desktop nav (Accommodation ▾ → "Master Suites")
- **Purpose:** Accommodation page for the three limited-availability master suites (Kasih, Ganapati, Rahasia), each with amenities, mailto booking and a 6-image gallery, ending in a "Coming soon" brochure placeholder.
- **Title / meta description:** Title "Master Suites | theshalabali". Meta description: none (canonical, og:title, og:image `4c89f1_5d417439a7eb443cb602e639ca06f157~mv2.jpg`, og:url only).
- **Page height:** desktop 8294px (content ends ≈ y4290), mobile 5774px

| # | Section | Content | Media | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Global header | Global header/footer. | — | global | sticky 54px | drawer |
| 1 | Hero strip | — | IMG `4c89f1_d79480eaef6d4095800dbd11c00386b5~mv2.jpg` alt "The Shala Full-59_edited_edited.jpg" (same image as the "Master suite" cross-link card elsewhere), full-bleed 600px strip, fit:cover; capture shows a heavily cropped wooden roof-beam detail. | — | y54, h600 | 320×50 sliver only. |
| 2 | Title + intro | h1 "Master Suites" (Tangerine 55px ls 19.25px centred); "Experience a little extra. Our three master suites each with attached living area and kitchen are only available during limited dates. The luxurious master rooms of the Kasih Villa, Ganapati Villa and Rahasia Villa. Two of the three master suites can be set up as twin or king." (Bellota 16px/18.2px centred) | — | — | y654, h292 | h1 27px ls 9.45px |
| 3 | Suite 1: Kasih suite | Title "Kasih suite" (Bellota 30px #4A4A4A); chart icon; description (copied from Deluxe Rooms' Ganesh & Jivana): "North facing double bedrooms with expansive rice paddy views and beautifully hand carved wooden doors. Jivana room has a semi open bathroom and traditional peaked ceiling while Ganesh room has an enclosed bathroom for more privacy and a cosy corner lounge." + lists. | Chart icon | "Book" → `mailto:theshalabali@gmail.com?subject=Reservation Kasih master Suite` (142×40, 1px #0C4426 border, label #0C4426) | y946, h467; peach band, 3 columns (title/desc/Book · amenities · sizes) | stacked; Book 140×42 |
| 4 | Gallery 1 | — | 2×3 grid 470×269: `4c89f1_a216b4d6f25144fa959f622adbd482b6.jpg`, `4c89f1_397f40aa8a8b494b8d46e24579baee82.jpg`, `4c89f1_2ab5c2458fa04e248231f757317656e2.jpg`, `4c89f1_b30edd834aa243e59c8aa7c816726d59.jpg`, `4c89f1_ea888e482d7e477f850469e41f9d82c0~mv2.jpg`, `4c89f1_d8fae7c51c3341d68ff9bf6cc7f96130~mv2.jpg` | lightbox | y1413, h553, edge-to-edge | 2 × 3, 133×177 |
| 5 | Suite 2: Ganapati suite | Title "Ganapati suite"; chart icon; description (copied from Deluxe Rooms' Rahasia, with new typo): "Elegant rooms with lush jungle outlook or pool view. Boasting colorful interiors and Balinese touches. Decorated with stone carvings, lovely teak would luggage chests and elegant bathrooms." + lists. | Chart icon | "Book" → `mailto:theshalabali@gmail.com?subject=Reservation Ganapati Master suite` — button border 1px #FFFFFF (white) and label #717070, so it reads as a near-invisible white box on the peach band | y1966, h460 | stacked; same faint button |
| 6 | Gallery 2 | — | 2×3 grid 470×269: `4c89f1_ea4ca4c27eca49df8112cb250223578e~mv2.jpg`, `4c89f1_d827976d4a334e8ab8854c1d07f4f8ee~mv2.jpg`, `4c89f1_08b3fb59dbad480aaf1b580ccc5a592e.jpg`, `4c89f1_e6f902a87d3141fd97483c5b83828c3b.jpg`, `4c89f1_f686443228aa4ee9a3b621797b6c0ddd.jpg`, `4c89f1_da68aaa8fc884b5ba3af8b96ffce446d~mv2_d_1772_2655_s_2.jpg` | lightbox | y2426, h552 | 2 × 3, 133×177 |
| 7 | Suite 3: Rahasia suite | Title "Rahasia suite"; chart icon; description (copied from Deluxe Rooms' Ganapati): "Spacious triple rooms with west facing balconies overlooking the paddy fields. Equipped with a work desk and sofa bed sleeping an extra person. Semi open bathrooms with open air shower in the upper room." + lists. | Chart icon | "Book" → `mailto:theshalabali@gmail.com?subject=Reservation Rahasia Master suite` (1px #0C4426 border, label #717070) | y2978, h459 | stacked |
| 8 | Gallery 3 | — | 2×3 grid 470×269: `4c89f1_948969eacdb04744be2de620ba854ec8~mv2.jpg`, `4c89f1_97450f3af49d43a48d65f2b70f7e64f6.jpg`, `4c89f1_b01fcb1de3c649f086a26c8a2e2ad513~mv2.jpg`, `4c89f1_4904809897fb48f5a1dbf71bd5af338f~mv2.jpg`, `4c89f1_617590030e4b4c8eb4960512d18cac93~mv2.jpg`, `4c89f1_d1f090c8ff304b3db8d4c8fdfa3a2a08~mv2.jpeg` | lightbox | y3437, h552 | 2 × 3, 133×177 |
| 9 | Brochure placeholder | "For a comprehensive room list with layout, we invite you to download our brochure below" (Bellota 22px #717070 centred) | — | "Coming soon" button (153×76, white, 1px #0C4426 border, 15px #4A4A4A) → no link | y3989, h300, on white (no beige band, no cross-link cards on this page) | 18px text; button 160×42 |
| 10 | Empty area + footer | ≈4000px of blank white space on desktop below the brochure line. | — | — | — | — |

- **Pricing / factual details (verbatim):**
  - Kasih suite: "Free WiFi", "King or twin bed set up", "High-end mattresses with toppers", "Rain shower", "Air-conditioning", "Cotton mosquito nets", "Ceiling fan", "Safe for valuables", "Ensuite bathroom", "Mini fridge", "Natural bath amenities", "Tea making facility"; "Suite 26sqm", "Balcony", "Bathroom", "Max. capacity: 2".
  - Ganapati suite: same 12 amenities; "Suite 24 sqm", "Terrace 16 sqm", "Max. capacity: 2".
  - Rahasia suite: same 12 amenities; "Suite 24 sqm", "Terrace 16 sqm", "Max. capacity: 2".
  - No prices. Booking email theshalabali@gmail.com.
- **Source defects observed:**
  - All three suite descriptions are copied from the Deluxe Rooms page, in rotated order: Kasih ← Ganesh & Jivana (mentions "Jivana room" and "Ganesh room"), Ganapati ← Rahasia ("jungle outlook or pool view"), Rahasia ← Ganapati ("Spacious triple rooms … sofa bed sleeping an extra person") yet capacity stays "Max. capacity: 2".
  - "lovely teak would luggage chests" (would → wooden).
  - Intro says "Two of the three master suites can be set up as twin or king" but all three list "King or twin bed set up".
  - "Suite 26sqm" missing space (vs "24 sqm"). Sizes/bullets "Balcony"/"Bathroom" without values.
  - Ganapati suite Book button has white border on pale band — nearly invisible; Book label colours inconsistent (#0C4426 vs #717070).
  - Brochure CTA is a dead "Coming soon" placeholder.
  - Desktop has ~4000px of empty space after content; mobile hero only 50px.
  - Hidden slideshow artefact in page text ("press to zoom", "1/1").
  - h1 only heading on page (room titles are paragraphs).
- **Interactions:**
  - Three 6-image grid galleries (18 images); click → dark zoom lightbox with prev/next arrows and close X, URL gains `?lightbox=` (ix/gallery-click.jpg).
  - Animations: header tagline + nav fade-in 1.8s only. No Background-Reveal evidenced.

---

### Experiences — `/copy-of-services`
- **Status:** in desktop nav ("Experiences")
- **Purpose:** Lists seven hands-on workshops/classes guests can do (mala making, chocolate, cooking, offerings, raw desserts, Ayurvedic cooking, skin care) as image cards; no booking CTA.
- **Title / meta description:** Title "Experiences | theshalabali". Meta description: none (canonical, og:title, og:image `4c89f1_5d417439a7eb443cb602e639ca06f157~mv2.jpg`, og:url only).
- **Page height:** desktop 2375px, mobile 3418px

| # | Section | Content | Media | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Global header | Global header/footer. | — | global | sticky 54px | drawer |
| 1 | Hero strip | — | IMG `4c89f1_9650f705e24349fdadf6872e0a9bfc1f~mv2.jpg` (no alt), 1420 wide (x10 inset, 10px margins), 529px strip, fit:cover; shows warm brown wooden bowl/hand close-up (blurred in capture). | — | y54, h529 | 320×161 full-bleed; the intro paragraph is overlaid on top of the photo (text over image, poorly legible). |
| 2 | Title + intro | h1 "Experiences" (Tangerine 60px #4A4A4A centred); "The joy of life comes from our encounters with new experiences. Take a small piece of Bali home with you.." (Bellota 22px/30.8px #717070 centred, ends with double full stop). | — | — | Centred under hero, intro ~600px wide | h1 30px placed *below* the hero; intro 18px sits inside/over the hero image. |
| 3 | Experience cards grid | 7 cards, h4 Tangerine 30px #717070 left, body Bellota 14px/28.8px #717070 left. Row 1: "Sacred Mala Making" — "Design a unique sacred Mala necklace to take home with you. Choose beads based on their healing attributes to inspire you on your journey." · "Chocolate Making" — "Most of us crave a sweet treat.. learn to make guilt free, antioxidant packed, scrumptious chocolate" · "Vegetarian Balinese Cooking" — "From garden to table, you'll learn how to turn fresh local produce into a delicious three course meal." Row 2: "Raw Dessert Making" — "Live healthy desserts to sweeten your tooth and your spirit.." · "Balinese Offering Making" — "The beauty of Bali would not be the same without these little colorful baskets of devotion scattered throughout the temples, businesses and homes. Learn the meaning and" (truncated) · "Ayurvedic Cooking" — "Learn our favorite tridoshic recipes from our Vedic Kitchen, to balance and nourish your belly-mind! COMING SOON". Row 3: "Natural skin care making" — "Wondering how we make our lush skin care? We will share the recipes for some of our favorite natural products you can encounter at our nature spa Darshana Veda." + "COMING SOON". | 306×226 rounded-corner images: `4c89f1_261221bd80644ded94a28e2c82d14073~mv2.jpg` "mala making merry.jpg"; `4c89f1_b1fd44c070514357ae9fa4071a63d9f7~mv2.jpg` "Chocolate eating.jpg"; `4c89f1_68bc43fd07d94c8a81340a9793936b98~mv2.png` "3325af00-de30-4007-b78a-7e2ab91028c6.jpg"; `4c89f1_97e9ade8bacb41188ff431a5aa972085~mv2.jpg` "IMG_5264.JPG"; `4c89f1_5e8bcc4967b1449a9f22f37254c87e80~mv2.jpeg` "main-qimg-d23f249935daaa135d68919473215e…"; `4c89f1_06bdaa761d694173903af1ba66008ea0~mv2.jpg` "golden tea mumbai.jpg"; `4c89f1_ccc062038f094942b8603c8925254213~mv2.jpg` "1eee8136-de53-4741-b27f-10655426a6fd_edi…" | none (cards not linked) | y583–2340; 3-column grid centred (x230/566/902), 3 rows, last row has a single card left-aligned with empty space to its right. | Single column, images 297×231; h4 27px, body 13px; a thin grey divider line appears after "Raw Dessert Making" (unclear in capture whether source); Balinese Offering & Ayurvedic Cooking images blank (lazy-load artefact). |
| 4 | Global footer | — | — | global | — | — |

- **Pricing / factual details (verbatim):** No prices, durations, schedules or contacts. Status flags: "Ayurvedic Cooking" "… COMING SOON"; "Natural skin care making" "COMING SOON".
- **Source defects observed:**
  - "Balinese Offering Making" description truncated mid-sentence: "…Learn the meaning and".
  - Double full stops: "…home with you..", "sweet treat.. learn", "your spirit..".
  - "Chocolate Making" lacks a final full stop; "Natural skin care making" heading in lower-case style vs Title Case elsewhere.
  - Last grid row has a lone card (7 cards in a 3-column grid).
  - Mobile: intro paragraph overlaps the hero image.
  - No booking/enquiry CTA on the page.
  - Page-text order differs from visual order (DOM order: Mala, Raw Dessert, Skin care, Chocolate, Offering, Veg Balinese, Ayurvedic) — reproduce the visual 3-column order above.
- **Interactions:** None beyond global header (tagline + nav fade-in 1.8s). No galleries, hovers, video or Background-Reveal evidenced.

---


## Part B — Orphan pages (in sitemap, not in desktop navigation)

### FAQs — `/faqs`
- **Status / classification:** REAL owner content (orphan page: in sitemap, not in desktop nav). Copy is old and contains several outdated or incorrect facts (see below).
- **Purpose:** Practical travel and guest-information FAQ (location, food policy, airport, visas, money, health, safety).
- **Title / meta description:** Title `FAQs | theshalabali`; og:title `FAQs | theshalabali`; no meta description captured; og:image = site-wide `4c89f1_5d417439a7eb443cb602e639ca06f157~mv2.jpg`.
- **Page height:** desktop 3479px, mobile 4100px (320px layout)

| # | Section | Content | Media (IDs, owner vs template) | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Header | Global header/footer | — | — | Global | Global (hamburger) |
| 1 | Hero + title | H2 "FAQs" (Italianno 40px desktop / 30px mobile, #717070, centred) | `4c89f1_c7890b4975da4e7c98048ddaeb6caf46.jpg` (owner; frangipani flowers on stone, from the mobile shot), 1440×222 desktop / 320×400 mobile | — | In the desktop capture the hero strip measured at y −299 and the "FAQs" heading was listed after the content. The desktop screenshot shows **neither**: content starts straight under the header. Whether desktop shows them is unclear in the capture. | Shown: 320×400 flower image, then centred "FAQs" heading |
| 2 | FAQ list (15 Q&As) | Each item is one paragraph: the **bold question** (Bellota 16px w700 #4A4A4A) runs inline with the answer (Bellota 16px w400). The questions are listed below. | Page background `4c89f1_778fac54c048423d9ecc09bc967b3d8b.jpg` (owner; blurred yellow-green grass bokeh, site-wide background), 1440×900 fit cover | none | A translucent white panel about 820px wide (roughly x 228–1212), small text, left-aligned, over the full-bleed grass background. The panel ends near y 1320 and the grass continues to the bottom (about 3479px). | The panel spans the full 320px width, text 16px, about 4000px tall |

**FAQ items, in order (question verbatim → one-line answer summary):**
1. "Why choose us?!" → The founders have "a combined experience of over 70 years in the wellness industry"; world-renowned yoga teachers and body workers created a place for relaxation, health and connection with nature.
2. "Why Ubud?" → Ubud is a hub for culture, arts and wellness, with the widest range of body treatments and vegetarian, vegan and raw food in Bali.
3. "Where is The Shala Bali?" → "a straight forward 1.5 hour drive from the international airport", a 30-minute drive to the closest beach, walking distance to Ubud town centre, among rice fields.
4. "What can I find near by to The Shala Bali?" → Restaurants and massage on the doorstep; more shops, cafes and treatments "only a 20 minute walk away in Ubud town centre".
5. "What food is served at The Shala Bali restaurant?" → A changing menu of vegetarian and vegan dishes from around the world plus traditional Balinese dishes; caters for gluten-free and other allergies.
6. "Why vegetarian?" → They believe plant-based diets benefit the environment, animals and health; meat and seafood may not be cooked or eaten in the restaurant.
7. "Getting around Ubud?" → Taxis, private cars and scooters are available; scooter hire requires an international drivers licence.
8. "How do I get there from the Airport?" → Airport taxis are safe; the resort can arrange a private pick-up; "The average cost from the airport to our door step is INR 300,000 (approx $30 USD)".
9. "Which airport do I fly into?" → "Denpasar airport is the only international airport in Bali. It is called Ngura Rai International Airport."
10. "What about visas?" → Visa On Arrival for most countries, "valid for 30 days"; overstay charged "approx $30 USD per day", payable in Indonesian Ruphia.
11. "Taxes to enter and leave Bali?" → "There are no longer taxes to enter or leave Bali for mosy countries."
12. "Do I have to bring over USD or local currency?" → No need for much cash; there are many ATMs and money changers; better to change money on arrival.
13. "Bali belly?" → Advice to avoid an upset stomach: never drink tap water, no ice, eat at popular places, eat hot food, wash fruit in bottled water, wash hands.
14. "Vaccinations?" → Generally not considered necessary; some monkeys and dogs still carry rabies; consult your doctor.
15. "Safety?" → Be vigilant; drive-by bag snatching happens; there are safes in each room.

**Factual details (verbatim)**
- "combined experience of over 70 years in the wellness industry"
- "a straight forward 1.5 hour drive from the international airport of Bali and a 30 minute drive from the closest beach for surfing and swimming"
- "only a 20 minute walk away in Ubud town centre"
- "we do not allow meat / seafood to be cooked or consumed in the restaurant"
- "To hire a scooter the guest must have an international drivers licence."
- "The average cost from the airport to our door step is INR 300,000 (approx $30 USD)"
- "This visa is valid for 30 days." / "charged at approx $30 USD per day from the expiry of the visa"
- "There are safes in each room at The Shala Bali for your peace of mind."

**Source defects / outdated facts**
- "INR 300,000": the currency should be IDR (Indonesian Rupiah). INR is Indian Rupees.
- "Ngura Rai International Airport" should be Ngurah Rai.
- "Ruphia" should be Rupiah. "mosy countries" should be "most countries". "near by" and "drivers licence" are as in the source.
- "There are no longer taxes to enter or leave Bali": probably outdated. Bali introduced a tourist levy for foreign visitors in 2024. Verify with the owner before reusing.
- Overstay fee "approx $30 USD per day" and airport transfer "approx $30 USD": probably outdated. Verify.
- The FAQs heading and hero are not visible on desktop in the capture (see row 1).

**Interactions**
- None. Static text with no accordions, links or buttons. The background image appears fixed/full-bleed (site-wide page background).

---

### Guest testimonials — `/testamonials`
- **Status / classification:** REAL owner content (orphan page; the slug is misspelled "testamonials"). It contains one leftover Wix placeholder line, "Add Testimonial here".
- **Purpose:** Social proof: 7 guest quotes.
- **Title / meta description:** Title `TESTIMONIALS  | theshalabali` (double space as captured); og:title the same; no meta description; og:image is site-wide `4c89f1_5d417439…`.
- **Page height:** desktop 1480px, mobile 3049px

| # | Section | Content | Media (IDs, owner vs template) | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Header | Global header/footer | — | — | Global | Global |
| 1 | Intro | H2 "Guest testimonials" (Italianno 40px, #717070, centred). Paragraph: "We take great pleasure in seeing our guests smiling and feeling well cared for. Here is what some of our visitors shared about their experience at The Shala Bali." (Bellota 16px, centred) | — | — | Centred over the page background, y 54–259 | Italianno 30px. The mobile screenshot shows a frangipani image strip above the heading, but no IMG was captured for it. It may be the same hero as /faqs (`4c89f1_c7890b…`); unclear in capture. |
| 2 | Testimonial list (7 entries) | Each entry: italic quote (Bellota 16px italic #4A4A4A), then the name in a larger non-italic face, then the location. A thin rule separates entries (from the screenshot). Entries are listed below. | Page background `4c89f1_778fac54c048423d9ecc09bc967b3d8b.jpg` (owner, grass bokeh) | none | A translucent white panel about 820px wide, centred. Quotes are left-aligned, small text. Name and location are right-indented under each quote (at about x 960 in the 1440 shot). | Full width, quote, then name, then location, stacked left-aligned |

**Testimonials, in order (name / location verbatim; first sentence verbatim):**
1. **Erika Hernandez** / "Quadalajara, Mexico": "I´ve been so lucky to stayed at the Shala Bali for four months in total since last year."
2. **Martina** / "Auckland, New Zealand": "The Shala Bali is a true retreat, nestled in the rice fields of Ubud, I could enjoy a real retreat experience," (the quote has hard line breaks in the source). The placeholder line "Add Testimonial here" appears directly after this quote, before the name.
3. **Peter Rob** / "Nome, Alaska USA": "The Shala Bali is a beautiful retreat center located amidst rice fields near Ubud, Bali."
4. **Rexx Samuel** / "Nashville, TN": "I really enjoyed my month-long stay at the Shala Bali."
5. **Seema Sondhi** / "Delhi, India": "The Shala Bali is nestled between the rice fields and has the most beautiful tranquil ambience and is home away from home."
6. **Charlene McAuley** / "Berline, Germany": "The Shala Bali is a rare treat that combines exceptional quality, originality, and great service that is delivered in a calm and uncomplicated manner - it is both the look and atmosphere of The Shala Bali that makes it a very special place to stay."
7. **Amy Landry** / "Newcastle, Australia": "Hosting my week long retreat at The Shala exceeded all expectations."

The full quote texts are in `D:/clone2/docs/source-audit/page-text/testamonials.txt`.

**Factual details (verbatim)**
- Erika: "four months in total"; "food is delicious… vegan and organic"
- Martina: "salt water pool"; "along with the pets"
- Rexx: "month-long stay"; "Each room has a porch facing the rice fields or the jungle."; "infinity pool"
- Seema Sondhi: "the energy of our teachers Matthew and Lauren"
- Charlene: "the Nasi Goreng the best I've eaten!"
- Amy Landry: "Hosting my week long retreat"

**Source defects / outdated facts**
- The placeholder "Add Testimonial here" is visible on the live page (desktop and mobile).
- "Please reload" appears at the end of the page-text dump. It is a Wix widget error or fallback string and is not visible in the screenshots.
- Typos: "Quadalajara" (Guadalajara), "Berline" (Berlin), "to stayed", "yogui", "water following" (falling), "every guests needs". The quote mark styles are inconsistent (straight " vs curly “).
- "teachers Matthew and Lauren" refers to past teachers. They may no longer be current; unclear.
- The slug is misspelled: `testamonials`.

**Interactions**
- None (static text).

---

### Organic Vegetarian Cafe — `/copy-of-organic-vegetarian-cafe`
- **Status / classification:** REAL owner content (orphan). This is an older, fully written cafe page from before the "Indian Cafe / Mumbai Station" concept that is now in the nav. It has no placeholder text, but the "Organic Cafe Menu" button has no link.
- **Purpose:** Promotes the in-house organic vegetarian cafe (menu ethos, house-baked breads, ferments) and cooking lessons.
- **Title / meta description:** Title `Organic Vegetarian Cafe | theshalabali`; og:title the same; no meta description.
- **Page height:** desktop 2278px, mobile 3208px

| # | Section | Content | Media (IDs, owner vs template) | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Header | Global header/footer | — | — | Global | Global |
| 1 | Hero | Stacked white condensed words overlaid on the photo: "Vegan friendly", "Gluten free options", "RAW delights", "Fresh baked breads", "Organic", "Cooking Lessons", "Made with LOVE", "Yummy" (Open Sans Condensed bold 26–43px, letter-spaced, white) | `4c89f1_4e1888ca747742cb93712bb5d0c80849~mv2.png` (owner; woman serving food, plants) 1440×578 | — | Full-bleed 578px hero. In the desktop capture it measured at y −788 (above the top of the screenshot), so its desktop appearance is not visible in the screenshot. | 320×376, words 20–24px |
| 2 | Script banner | H2 "Food with flare , made with care" (Sacramento 60px italic, white) | — (teal band #01B1AF-ish, from the mobile shot) | — | A band under the hero (not visible in the desktop shot) | Teal band, 29px |
| 3 | FOOD! intro | "FOOD!" (Playfair Display 28px bold, #014D09). "It is one of the main ingredients in any amazing holiday and at The Shala Bali eating well does not mean deprivation. We believe in putting the joy and taste into healthy food. Every dish on our menu has been created with flare & care to NOURISH & SATISFY." Sub-items: ">> Imagine" + "- Organic spelt, sourdough & gluten free breads BAKED IN HOUSE with home made condiments - think Pineapple Vanilla Bean Jam! & creamy nut butters."; ">> Fermented products for a healthy tummy?? YES! We make our own Kombucha in different fruity flavours and our own natural yogurt or vegan coconut yogurt."; ">> Your retreat your menu!" + "Choose from our eclectic menu of sweet and savory dishes from around the world and enjoy the foods you like the most during your week with us." H1 ">> delicious >> healing >> kind to the earth" (Open Sans Condensed 32px, #014D09) | `4c89f1_97e9ade8bacb41188ff431a5aa972085~mv2.jpg` (owner; cheesecake tart with raspberries) 463×522 at x747; `4c89f1_f1415d1f60564d21bf24edff523030fc~mv2.jpg` 1440×900 (section background, owner) | — | Two columns: dark-green text left, tart photo right, on a cream background. The tagline H1 sits below. | Tart image (320×211) above the text, everything centred, 14px. The ">> delicious…" H1 moves to after the meal cards. |
| 4 | Menu CTA band | Button "Organic Cafe Menu" | Pasta photo strip behind the button (from the screenshot; probably `f1415d1f…`, unclear) | **"Organic Cafe Menu" → no href (dead)**: 234×66, bg #FF6161, white Bree thin oblique 15px, square corners | Full-width photo band with the coral button centred | 200×42 button |
| 5 | Food journey | H1 "COME ON A FOOD JOURNEY" (Playfair 40px, #01B1AF, letter-spacing 4px). Paragraph: "As a place of Yoga and healing, we serve food that not only supports your body to thrive but is also supportive to the earth. We pride ourselves on creating plant based dishes that are as good if not better than their original! Good for the body, the environment and the animals - good for the soul." Four image cards labelled "BREAKFAST", "LUNCH", "DINNER", "DESSERT" (Open Sans Condensed 35px white) | Cards: `4c89f1_8d1736e33cc643d1a3c6e1a2b437b096~mv2.jpg` (breakfast), `4c89f1_e315c109962345c48088e963891e7344.jpg` (lunch), `4c89f1_ec53e408d2c94f65bcb4ad9d031267ae.jpg` (dinner), `4c89f1_7a86cc244eea484babe91603fe80b0e7~mv2.jpg` (dessert), each about 235×365. Background `4c89f1_778fac54…` (grass) | Cards are not linked | Four portrait cards in a row (x 230–1210) on the yellow grass background, with the label at the bottom of each | Cards stacked full-width, about 320×160 each, label centred |
| 6 | Cook with us | H2 "Cook with us" (Playfair 32px #717070). H2 "We are waiting to share our secrets with you" (Museo Slab 18px). "Come and learn some of the most loved recipes of The Shala Bali kitchen. We offer both traditional Indonesian cooking lessons and vegan \| raw dishes. Get your apron on and join us for a hands on class followed by a special meal together to enjoy the fruits of your labour." | `4c89f1_b780f298831f46a7b217d8b46a444004~mv2.png` (owner; smiling cook, left) 403×507; `4c89f1_3d63b57558004addbe2aa2519e37e963~mv2.jpg` (owner; spices and chillies, right) 403×507 | **"Book a place >" → `mailto:manager4retreat@gmail.com?subject=Cooking Class Booking`** (Libre Baskerville 15px italic, #01B1AF, text link) | Three columns: photo, white text card, photo | Spice image (320×200), then text, then link, then cook image at the end |

**Factual details (verbatim)**
- "Organic spelt, sourdough & gluten free breads BAKED IN HOUSE"; "think Pineapple Vanilla Bean Jam!"
- "We make our own Kombucha in different fruity flavours and our own natural yogurt or vegan coconut yogurt."
- "We offer both traditional Indonesian cooking lessons and vegan | raw dishes."
- Booking email: `manager4retreat@gmail.com`, subject "Cooking Class Booking"

**Source defects / outdated facts**
- The "Organic Cafe Menu" button has no link (href None).
- Typos: "flare" (flair), "Food with flare , made with care" (space before the comma).
- This page is superseded by the nav's "Indian Cafe" (/mumbaistationindiancafe); the cafe concept may no longer be current.
- The hero and script banner are not visible in the desktop screenshot (they measured at negative y), so the desktop layout of rows 1–2 is unclear in capture.

**Interactions**
- mailto link only. There are no hover effects in the capture, and the cards are static.

---

### The Shala Cafe ("Eat") — `/general-6-1`
- **Status / classification:** PARTLY real (unfinished draft, orphan).
  - **Real:** H1 "Eat", "Food made with love", the three intro paragraphs, the "What's on the menu?" and "Whole indregients…" card copy (both cut off mid-sentence), the section headings, and all photos (all owner `4c89f1_`).
  - **Template placeholder:** the card 1 body ("This is a Paragraph. Click on "Edit Text"…") and both feature-block bodies ("I'm a paragraph. Click here to add your own text and edit me…").
  - The "Download menu" button has no link.
- **Purpose:** Draft page for the Shala Cafe (food ethos, menu highlights, extra food experiences).
- **Title / meta description:** Title `The Shala Cafe | theshalabali`; og:title the same; no meta description.
- **Page height:** desktop 2969px, mobile 3716px

| # | Section | Content | Media (IDs, owner vs template) | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Header | Global header/footer | — | — | Global | Global |
| 1 | Hero | — | `4c89f1_efbc7536f3df423cbf5f951f81d63840~mv2.jpg` alt "cafe.jpg" (owner; open-air cafe with Balinese umbrellas), 1440×523 | — | Full-bleed image strip, y 54–577 | 320×137 strip |
| 2 | Intro | H1 "Eat" (Tangerine 56px #717070, centred). "Food made with love". "The Shala Cafe is a food haven where you can feel safe to indulge. Everything we bring to the table is flavorful, nutritionally dense and made with whole ingredients. Even the sweets are healthful and packed with goodies." "We delight in creating dishes that are nourishing for the body and the spirit, as well as supportive of the environment and our fellow inhabitants." "Let food be thy medicine and medicine be thy food!" (Bellota 18px/39.6px, centred) | — | **"Download menu" → no href (dead)**: 153×40, white background, 1px #4A4A4A border, square, 15px letter-spaced text | Centred text column on white | 32px H1, 16px text, 160×42 button |
| 3 | Three cards | Card 1, H4 "Food tastes sweeter when shared" + PLACEHOLDER "This is a Paragraph. Click on "Edit Text" or double click on the text box to start editing the content and make sure to add any relevant details or information that you want to share with your visitors." Card 2, H4 "What's on the menu?" + "A mixture of international and local signature cuisine. Belly friendly soups, hearty salads, lean tasty pastas, freshly baked breads, colorful smoothies, raw sweets We welcome different dietary requirements and" (ends mid-sentence). Card 3, H4 "Whole indregients our our friends.." + "Less processed = more value. What do we value? Abundant energy, balanced mood," (ends mid-sentence) | `4c89f1_b5432b5f49364d85be38bb41b73cf82b~mv2.jpg` alt "KLP_9759.jpg" (group dining); `4c89f1_314ca5256b784846b9a4399b043a92fa~mv2.jpg` alt "love lunch .jpg" (plates on table); `4c89f1_a4b63e9d46224f1a9a705cba2ce94f13~mv2.jpg` alt "KLP_9295.jpg" (fruit platter). All owner, 306×226, slightly rounded corners and a shadow (from the shot) | — | Three equal columns (x 229 / 565 / 901) on a pale blush band (#F5E9E2-ish, from the shot). H4s in Tangerine 30px, body Bellota 16px. | Stacked, 278×208 images |
| 4 | "What else can we serve you?" | H2 (Tangerine Bold 40px) | — | — | Centred heading | 24px |
| 5 | Feature: Cooking | H3 "Cooking / chocolate making" + PLACEHOLDER "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you." (Brandon Grotesque light 16px #8F8F8F) | `4c89f1_e8a033b3386745c3b856f4cf5eca0c70~mv2.jpg` alt "cooking class mery.jpg" (owner; two women in aprons cooking), 559×470 | — | Text card on the left (pale grey), image on the right (x 651) | Text, then image (320×200) |
| 6 | Feature: Floating breakfast | H3 "Floating breakfast fun" + the same "I'm a paragraph…" PLACEHOLDER | `4c89f1_03aa35902b284b0f8536073bac223c0d~mv2.jpg` alt "floating breakfast 2.jpg" (owner; floating tray in pool), 559×470 | — | Same split as row 5, stacked directly below it | Text, then image |

**Factual details (verbatim)**
- "Let food be thy medicine and medicine be thy food!"
- Menu items: "Belly friendly soups, hearty salads, lean tasty pastas, freshly baked breads, colorful smoothies, raw sweets"
- Offerings named: "Cooking / chocolate making", "Floating breakfast fun"

**Source defects / outdated facts**
- Placeholder Wix text in 3 blocks (quoted above).
- Two sentences end mid-thought: "…We welcome different dietary requirements and" and "…balanced mood,".
- Typo heading: "Whole indregients our our friends.."
- "Download menu" button has no link.
- Same layout and copy as `/copy-of-the-shala-cafe` and `/copy-of-the-shala-cafe-1` (duplicated drafts).

**Interactions**
- None functional.

---

### Mumbai Station Indian Cafe (draft, "Eat") — `/copy-of-the-shala-cafe`
- **Status / classification:** PARTLY real (abandoned draft, orphan). This is a duplicate of `/general-6-1` (The Shala Cafe draft) with the browser title changed to "Mumbai Station Indian Cafe" and Indian-food photos swapped in. All on-page copy is the generic Shala Cafe text, **not** Indian-cafe copy.
  - **Real:** intro copy, headings, the two truncated card texts, and the owner photos.
  - **Placeholder:** card 1 body ("This is a Paragraph. Click on "Edit Text"…") and the cooking block body ("I'm a paragraph. Click here to add your own text…").
  - The live Indian cafe page is `/mumbaistationindiancafe` (desktop nav "Indian Cafe").
- **Purpose:** Abandoned draft of the Indian cafe page.
- **Title / meta description:** Title `Mumbai Station Indian Cafe | theshalabali`; og:title the same; no meta description.
- **Page height:** desktop 2446px, mobile 3148px

| # | Section | Content | Media (IDs, owner vs template) | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Header | Global header/footer | — | — | Global | Global |
| 1 | Hero | — | `4c89f1_25ccbcd9ee564f49b649e744fda76fdb~mv2.jpg` alt "Mumbai lunch.jpg" (owner), 1440×523 | — | Full-bleed strip | 320×137 |
| 2 | Intro | Identical to /general-6-1: H1 "Eat", "Food made with love", "The Shala Cafe is a food haven where you can feel safe to indulge. …", "We delight in creating dishes …", "Let food be thy medicine and medicine be thy food!" | — | **"Download menu" → no href (dead)**, 153×40 outlined | Centred | Stacked |
| 3 | Three cards | Same headings and copy as /general-6-1: "Food tastes sweeter when shared" (PLACEHOLDER body), "What's on the menu?" (truncated "…We welcome different dietary requirements and"), "Whole indregients our our friends.." (truncated "…balanced mood,") | `4c89f1_732768fa33814f84b5d8962402078331~mv2.jpg` alt "sweets.jpg"; `4c89f1_9442257b1bd845929c549b7d05498af4~mv2.jpg` alt "dosa_edited.jpg"; `4c89f1_468f8163e31848b8a27bfc2719459641~mv2.jpg` alt "mumbai.jpg" (all owner, 306×226) | — | Three columns on a blush band | Stacked, 278×208 |
| 4 | "What else can we serve you?" | H2 | — | — | Centred | — |
| 5 | Feature: Cooking | H3 "Cooking / chocolate making" + PLACEHOLDER "I'm a paragraph. Click here to add your own text and edit me. …" | `4c89f1_3ca196d1b83f48378a7c1b703b556491.jpg` alt "Coconut Chutney" (owner), 559×417 | — | Text left, image right | Text, then image |

There is no "Floating breakfast fun" block; this is the only structural difference from /general-6-1.

**Factual details (verbatim):** Same as /general-6-1. The only Indian-cafe signals are the title and the image alts ("Mumbai lunch.jpg", "dosa_edited.jpg", "mumbai.jpg", "Coconut Chutney").

**Source defects / outdated facts:** The title promises an Indian cafe but the copy describes "The Shala Cafe". It has placeholder text, truncated sentences, the "indregients our our" typo, and a dead Download menu button.

**Interactions:** none.

---

### Stay (draft) — `/copy-of-the-shala-cafe-1`
- **Status / classification:** PARTLY real (abandoned draft, orphan). This is a duplicate of `/general-6-1` with the H1 and title changed to "Stay" and a resort photo as the hero. **Everything else is unchanged cafe content.**
  - **Real:** the owner photos and the copied cafe copy.
  - **Placeholder:** card 1 body and both feature-block bodies (Wix "This is a Paragraph…" / "I'm a paragraph…").
  - There is no accommodation copy at all.
- **Purpose:** Abandoned start of an accommodation ("Stay") page.
- **Title / meta description:** Title `Stay | theshalabali`; og:title the same; no meta description.
- **Page height:** desktop 2926px, mobile 3716px

| # | Section | Content | Media (IDs, owner vs template) | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Header | Global header/footer | — | — | Global | Global |
| 1 | Hero | — | `4c89f1_cede29c775484acfa04a5e68512d8c51.jpg` alt "The Shala Full-40.jpg" (owner), 1440×480 | — | Full-bleed strip, y 54–534 | 320×137 |
| 2 | Intro | H1 **"Stay"** (Tangerine 56px). The rest is cafe copy: "Food made with love", "The Shala Cafe is a food haven where you can feel safe to indulge. …", "We delight in creating dishes …", "Let food be thy medicine and medicine be thy food!" | — | **"Download menu" → no href (dead)** | Centred | Stacked |
| 3 | Three cards | Identical to /general-6-1 (same headings, placeholder and truncated text) | Same as /general-6-1: `4c89f1_b5432b5f…` "KLP_9759.jpg", `4c89f1_314ca525…` "love lunch .jpg", `4c89f1_a4b63e9d…` "KLP_9295.jpg" | — | Three columns on a blush band | Stacked |
| 4 | "What else can we serve you?" | H2 | — | — | Centred | — |
| 5 | Feature: Cooking | "Cooking / chocolate making" + "I'm a paragraph…" PLACEHOLDER | `4c89f1_e8a033b3…` "cooking class mery.jpg" | — | Text left, image right | Text, then image |
| 6 | Feature: Floating breakfast | "Floating breakfast fun" + "I'm a paragraph…" PLACEHOLDER | `4c89f1_03aa3590…` "floating breakfast 2.jpg" | — | Text left, image right | Text, then image |

**Factual details (verbatim):** Same as /general-6-1. The only "Stay" element is the H1 "Stay".

**Source defects / outdated facts:** The H1 "Stay" sits above food copy ("Food made with love"). It also has the placeholder text, truncated sentences, the typo, and the dead button. Nothing here is usable as accommodation content.

**Interactions:** none.

---

### SPECIAL OFFER — Last Minute Availability — `/lead-collection-1`
- **Status / classification:** REAL owner content, **EXPIRED**. It advertises "Opening October 1st - 10th, 2026", and today is 2026-10-12, so the window has passed. Orphan page with no placeholder text. It has **no booking button, form or contact link**, so there is no conversion path on the page.
- **Purpose:** Last-minute promotion for retreat hosts (group bookings) for a specific open date window.
- **Title / meta description:** Title `SPECIAL OFFER | theshalabali`; og:title the same; no meta description.
- **Page height:** desktop 1137px, mobile 2126px

| # | Section | Content | Media (IDs, owner vs template) | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Header | Global header/footer | — | — | Global | Global |
| 1 | Offer panel (left) | H1 "Last Minute Availability" (Tangerine Bold 56px #717070). "Opening October 1st - 10th, 2026" (Bellota 20px). A decorative stroke glyph appears in the text as "1" (renders as a small "ı \" ornament; it is not a numeral). "Reserve your retreat and enjoy a curated collection of exclusive benefits designed to enhance your hosting experience." **"Secure your retreat dates and enjoy special offer ;"** (bold). Three items, each with a teal lotus bullet icon: "15% off our Best Available Rates", "Host stays free!", "Exclusive complimentary farewell dinner". Then a second ornament and "Be the first to book and unlock this exclusive last minute offer." | `4c89f1_a8172b96ac6d49c8a543556eabe74f46~mv2.jpg` alt "Shala .jpg" (owner; open-sided yoga shala with mats), 387×293 at x165 | **none** | Left half (about 0–720px): cream panel (#FBF6EE-ish), text left-aligned at about x 140, Bellota 16px/24px #4A4A4A, image under the offer list | Cream panel first: H1 at 50px over two lines, then text, image (270×205), then closing line |
| 2 | Host benefits card (right) | H1 "Exclusive Host Benefits" (Tangerine Bold 29px, centred). Bullets: "Retreat co-ordinators available 7 days"; "Retreat host and their respective partner receive all meals complimentary."; "Retreat host receives one complimentary Bali Massage per week."; "Daily breakfast buffet included for all rooms."; "Welcome flower Mandala in Yoga Shala. Complimentary use of Yoga Shala."; "Use of yoga props including blankets, straps, bolsters, chairs, and white board."; "Daily morning clean of yoga room + more frequently as requested."; "Drinking water & herbal tea station 24 hour security Landscaped grounds, pool, and lounging areas."; "Daily servicing of rooms." | `4c89f1_df7354393bac44a4b879941644e5759e~mv2.jpg` alt "TheShalaBali Instagram Size_edited.jpg" (owner; aerial view of a long pool beside a thatched roof), 380×524 at x836 | none | Right half: light grey panel (#F0F0F0). The portrait pool photo sits at the top-left of the panel, and a white card with the bullet list overlaps it, offset down and right. | Grey panel with the pool image (270×372), then the white list below. On mobile the "Exclusive Host Benefits" heading is captured at 20px, but it is not visible in the mobile screenshot (unclear). |

**Factual details (verbatim)**
- Dates: "Opening October 1st - 10th, 2026"
- Offer: "15% off our Best Available Rates" / "Host stays free!" / "Exclusive complimentary farewell dinner"
- Benefits: as listed in row 2, including "one complimentary Bali Massage per week", "Daily breakfast buffet included for all rooms", "24 hour security"

**Source defects / outdated facts**
- **Expired**: the October 1–10, 2026 window ended before 2026-10-12.
- There is no CTA, form or email/WhatsApp link on the page, despite "Be the first to book".
- "special offer ;" has a stray space and semicolon. "Drinking water & herbal tea station 24 hour security Landscaped grounds…" is three items run together without punctuation.
- The slug `lead-collection-1` suggests a Wix lead-capture template that was repurposed. The sibling `/lead-collection` is empty.

**Interactions**
- None.

---

### La Vie en Rose — Pilates & Pamper Retreat — `/about-3-4`
- **Status / classification:** REAL owner content, **DATED / likely past event**. "October 2-7" has no year. It is a co-branded retreat with an external partner (The Collective Club, a Pilates studio in Ubud), and enquiries go to the partner's email. Orphan page with no placeholder text.
- **Purpose:** Sales page for a 5-night / 6-day Pilates retreat hosted at The Shala Bali.
- **Title / meta description:** Title `Pilates Retreat | theshalabali`; og:title the same; no meta description.
- **Page height:** desktop 3851px, mobile 3874px

| # | Section | Content | Media (IDs, owner vs template) | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Header | Global header/footer | — | — | Global | Global |
| 1 | Hero | — | `4c89f1_c8f9f0bd62104bf294b64198ebecd9b7~mv2.jpg` alt "Pilates.jpg" (owner; woman doing a mat Pilates V-sit among plants), 1440×512 | — | Full-bleed | 320×213. The mobile shot shows it blurred, probably lazy-load (unclear). |
| 2 | Intro | "La Vie en Rose" (small caps-style custom font, 20px). H1 "Pilates & Pamper" / "Retreat" (Tangerine 41px). H1 "October 2-7" (Cinzel 22px). "La Vie en Rose Pilates Retreat is an inspired collaboration between Ubud's hottest Pilates studio - The Collective Club and the stunning Shala Bali Retreat & Spa." "Immerse yourself for 5 nights and 6 days of invigorating reformer and mat Pilates classes, innovative, nourishing vegetarian cuisine, adventure and pampering — all set against the breathtaking backdrop of rice paddies, lush jungle and coconut trees." "Nestled in serene nature, The Shala Bali's luxurious resort amenities combined with it's central location, just a stone's throw away from the heart of Ubud, make this the perfect playground for your week of wellness." "La Vie en Rose Retreat is the transformative escape from every day life that you have been waiting for!" (Bellota 16px/22.4px, centred) | — | **"Join us!" → `mailto:thecollectiveclub.retreats@gmail.com?subject=La%20Vie%20en%20Rose%20Retreat%20`**. Pill button (radius 200px), 142×42, pink-to-lilac gradient fill (from the shot), Futura light 20px, letter-spacing 4px, #282626 | Centred column on white | Same, 14px text, 160×42 pill |
| 3 | What's included | H2 "What's included" (Tangerine 38px). 18 bullets (Bellota 11px desktop / 12px mobile): "5 nights & 6 days in the beautiful accommodation of The Shala Bali, a tropical sanctuary hidden in the heart of Ubud, surrounded by rice paddies & coconut trees!"; "Airport transfer; pick up + drop off"; "Minibus transfer for classes and activities"; "x5 Reformer Pilates classes at The Collective Club's new studio in Ubud centre"; "x4 Mat Pilates classes at The Shala Bali's pictureque paddy view studio"; "Guided sunrise rice paddy walk through the vibrant green fields, starting your day with some fresh air and getting those steps in."; "A water adventure to cool off from the day followed by a destination lunch in a scenic venue"; "Daily wake up tea or coffee served to you in the comfort of your bed."; "Daily coconuts and smoothies after your Reformer classes"; "x2 meals a day included:"; "- A delicious buffet breakfast will be awaiting you every morning after your class. The Shala Bali kitchen is vegetarian, vegan and gluten free friendly."; "- Either lunch or dinner will be included (per day) depending on the day's schedule, at the two different restaurants situated in the retreat centre."; "A healthy cooking class in house where you can learn the Balinese cuisine using only the freshest, organic ingredients!"; "Indulge in a treatment at our nature spa, Darshana Veda 60 minute Balinese massage with a mini facial and finish it off with a relaxing flower bath"; "Photos to capture the hard work, memories and friendships you will have created during retreat"; "A beautiful pool amongst the palms to rejuvenate, relax and recover"; "The chance to explore Ubud and enjoy all the sights it has to offer"; "Extra surprises along the way!" | `4c89f1_c63a6524aca847be8119f07a9e1add96~mv2.jpg` alt "unnamed-6.jpg" (owner; jungle path, thatched bungalow, pink walls), 718×702 left half; `4c89f1_c55fcd314baf485c89001bf4fadcce2e~mv2.jpg` alt "KLP_9117.jpg" 1440×704 (section background, owner) | — | 50/50 split: photo left, white panel right with a centred heading and a small-text bulleted list | Background image fills the section (320×1179); the photo (320×200) sits above the white list |
| 4 | The Pilates | H2 "The Pilates". "The Mat Pilates classes will be hosted in house in the beautiful outdoor studio space. The classes will involve using equipment such as the fit ball, weights, ankle weights and resistance bands. Each class will vary in different Pilates exercises ensuring you're working all the muscles of the body in dynamic and challenging ways." "The Reformer Pilates classes will be held at The Collective Club's new larger studio in the centre of Ubud. You will be guided through 5 different reformer classes throughout your retreat, challenging your strength, flexibility and stability. After class you can enjoy a fresh coconut or protein smoothie whilst sitting amongst the palm trees and listen to the sound of streaming water." (Bellota 13px) | `4c89f1_c723aae47aea49c3b8d78a85e5e96cfc~mv2.jpg` alt "DSC04580.JPG" (owner; reformer Pilates class), 719×555 right; `4c89f1_9e74fe31b20543e08b9cf444eba4b250~mv2.jpg` alt "Food Love .jpg" 1440×557 (section background) | — | 50/50: text panel left, photo right | Background image (blurred in the shot), then text below, 14px |
| 5 | Schedule | H3 "Schedule" (Tangerine 35px). The schedule itself is **an image**. Text read from the low-resolution screenshot, so verify against the image. Class lines are in pink. **Day 1:** Airport pick up/transfer; Welcome drinks & room tour; Intro Mat Pilates class; Meet & Greet with retreat overview; Welcome dinner at The Shala Bali. **Day 2:** Coffee or tea in bed; Group Reformer Pilates class at The Collective Club; Post class refreshments; Buffet breakfast at The Shala Bali; Fun in the sun pool time; Lunch time cooking class; Sunset Mat Pilates class; Dinner off; explore Ubud! **Day 3:** Coffee or tea in bed; Group Reformer Pilates class at The Collective Club; Post class refreshments and breakfast; Adventure time & surprise destination lunch; Chillax by the pool or spa pampering!; Sunset Mat Pilates class; Dinner off. **Day 4:** Coffee or tea in bed; Group Reformer Pilates class at The Collective Club; Post class refreshments; Buffet breakfast at The Shala Bali; Lunch off; sightsee & shop! OR Spa pampering!; Sunset ridge walk; Evening Yin Yoga + Sound healing; Dinner at The Shala Bali. **Day 5:** Coffee or tea in bed; Group Reformer Pilates class at The Collective Club; Post class refreshments; Buffet breakfast at The Shala Bali; Bathhouse experience; Destination dinner. **Day 6:** Coffee or tea in bed; Group Reformer Pilates class at The Collective Club; Post class refreshments; Group feedback + farewell ceremony; Final breakfast at The Shala Bali; Check out 11am; Departure / Airport transfer. | `4c89f1_dbc8338404304f3e91a50ad01affeb98~mv2.png` (owner; schedule graphic, two columns with a vertical divider), 923×662 | Image is clickable ("press to zoom" in the page text, i.e. Wix lightbox) | Centred image | 280×201, so the text is very small. Needs a zoom or HTML text version. |
| 6 | Photo gallery | — (page text has "1/1", a Wix gallery counter) | 6 owner images, each 343×249, in a 3×2 grid: `4c89f1_affcfbce595248e2b6ee6cc914f417c8~mv2.jpg` (coconuts), `4c89f1_d6bbd768da4348929dff4ad8b97595ac~mv2.jpg` (jungle landscape), `4c89f1_b7065da1f13c43de9bed8e4e21ccd209~mv2.jpg` (massage), `4c89f1_9e74fe31b20543e08b9cf444eba4b250~mv2.jpg` (food spread, "Food Love"), `4c89f1_8f58a2ccc644432cb96941cf50f664cb.jpg` (bedroom), `4c89f1_cb704625d56c446593c8b3675fe576f0~mv2.jpg` (Pilates ball) | Gallery items probably open a lightbox (unclear) | 3-column grid, x 190–1248 | Kept as a 3-column grid at 83×249 (tall narrow thumbnails) |

**Factual details (verbatim)**
- "October 2-7" (no year); "5 nights and 6 days"
- Partner: "The Collective Club"; enquiry email `thecollectiveclub.retreats@gmail.com`
- "x5 Reformer Pilates classes"; "x4 Mat Pilates classes"; "x2 meals a day included"
- Spa: "Darshana Veda 60 minute Balinese massage with a mini facial … relaxing flower bath"
- "at the two different restaurants situated in the retreat centre"
- There is no price on the page.

**Source defects / outdated facts**
- The date "October 2-7" has no year. It is likely a past event; confirm with the owner.
- Typos: "pictureque" (picturesque), "it's central location" (its), "every day life" (everyday). The "x2 meals" sub-bullets start with stray "- " characters.
- The CTA goes to a third-party (partner) Gmail, not to The Shala Bali.
- The slug `about-3-4` is a leftover from the Wix "About" template.
- The schedule text exists only as an image (accessibility issue).

**Interactions**
- mailto CTA. Schedule image zoom (Wix "press to zoom" lightbox). The gallery may open a lightbox (unclear in capture).

---

### Ayurvedic Wellness Retreat — `/about-3-2`
- **Status / classification:** PARTLY real (unfinished, orphan).
  - **Real:** H1 "Ayurvedic Wellness Retreat", the tagline, the one intro paragraph, and the four section headings ("The journey", "The Schedule", "The offerings", "The options").
  - **Template placeholder:** all four section bodies ("This is a Paragraph. Click on "Edit Text" or double click on the text box…").
  - **Template stock images:** all images are Wix template stock (`a3c153_`). There are no owner images on the page.
- **Purpose:** Intended sales page for an Ayurvedic retreat package; never completed.
- **Title / meta description:** Title `Ayurevedic Wellness Retreat  | theshalabali` (typo "Ayurevedic", double space); og:title the same; no meta description.
- **Page height:** desktop 2720px, mobile 2791px

| # | Section | Content | Media (IDs, owner vs template) | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Header | Global header/footer | — | — | Global | Global |
| 1 | Intro (REAL) | H1 "Ayurvedic Wellness Retreat" (Italianno 56px #717070, centred). "The ancient healing wisdom gifted to the world from India." "Ayurveda is a way of life that seeks to harmonize and heal the whole body and mind. Deeply connected to the rhythms of nature and adapted to the uniqueness of each persons constitution." (Bellota 18px/39.6px, centred) | — | — | Centred text block, y 54–480 | 32px H1, 16px text |
| 2 | The journey | H2 "The journey" (Tangerine 38px) + PLACEHOLDER "This is a Paragraph. Click on "Edit Text" or double click on the text box to start editing the content and make sure to add any relevant details or information that you want to share with your visitors." | `a3c153_20122b9a32cc4e9a9faca835b9f82d14~mv2.jpg` (TEMPLATE), 718×550, left | — | 50/50: image left, text right | Image (320×250), then text |
| 3 | The Schedule | H2 "The Schedule" + same PLACEHOLDER | `a3c153_bbf1019446e34069a3b96c18f172e810~mv2.jpg` (TEMPLATE), 722×550, right | — | 50/50: text left, image right | **Moved to the last position** on mobile: image (320×300), then text |
| 4 | The offerings | H2 "The offerings" + same PLACEHOLDER | `a3c153_20122b9a…` (TEMPLATE), left | — | Image left | Image (320×200), then text |
| 5 | The options | H2 "The options" + same PLACEHOLDER | `a3c153_bbf10194…` (TEMPLATE), right | — | Image right | Text, then image (320×200) |

**Factual details (verbatim):** "The ancient healing wisdom gifted to the world from India." There are no prices, dates or inclusions.

**Source defects / outdated facts:** The title has the typo "Ayurevedic". "each persons constitution" is missing the apostrophe. There are 4 placeholder paragraphs and only template stock images. The slug `about-3-2` is a Wix About-template leftover. The mobile section order differs from desktop (journey, offerings, options, Schedule).

**Interactions:** none.

---

### Causes we love — `/projects-6`
- **Status / classification:** PARTLY real (orphan).
  - **Real:** H1 "Causes we love", the **Villa Kitty** entry (heading, full description, and owner kitten photo), and the heading "Mission Pawsible" (an organisation name, presumably real).
  - **Template placeholder:** the intro paragraph ("This is your Project Page…"), the Mission Pawsible description ("This is your Project description…"), the whole third entry "Project Name" plus its description, and 2 of the 3 images (`a3c153_` stock: feathers, sand dunes).
- **Purpose:** Charity and causes page (Bali animal welfare).
- **Title / meta description:** Title `Projects | theshalabali`; og:title the same; no meta description.
- **Page height:** desktop 1829px, mobile 2024px

| # | Section | Content | Media (IDs, owner vs template) | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Header | Global header/footer | — | — | Global | Global |
| 1 | Left column: page intro | H1 "Causes we love" (Tangerine Bold 40px #717070). PLACEHOLDER: "This is your Project Page. It's a great opportunity to help visitors understand the context and background of your latest work. Double click on the text box to start editing your content and make sure to add all the relevant details you want to share." | — | — | Left column (x about 105–480). It is not sticky as far as the capture shows (unclear). | Top of page, 23px H1 |
| 2 | Villa Kitty (REAL) | H2 "Villa Kitty" (Bellota 20px). "A nursery for mothers, a hospital for the unwell and a safe haven for all Bali cats who are in desperate need of love and care. Villa Kitty has worked tirelessly to provide a shelter for the many many cats who have been abandoned to live in scary and painful situations. They are the loving hand that takes in cats of all shapes sizes and medical difficulties. The Shala Bali is ever grateful for their compassionate and for making Bali a better place for our fury fellow beings." | `4c89f1_f629079f5ecc442a9cc5a123d0247917~mv2.png` (OWNER; kitten close-up), alt "Screenshot 2025-03-15 at 11.35.44.png", 537×245 | none (Villa Kitty is not linked) | Right column (x 619–1156): heading, text, then image | Heading, text, image (280×130) |
| 3 | Mission Pawsible (heading real, body placeholder) | H2 "Mission Pawsible" + PLACEHOLDER "This is your Project description. Click on "Edit Text" or double click on the text box to start." | `a3c153_4c9ff7f594c1414f9f7894e514098894~mv2.jpg` (TEMPLATE; feather/fabric texture), same alt "Screenshot 2025-03-15 at 11.35.44.png", 537×245 | none | Right column | Stacked |
| 4 | Project Name (pure placeholder) | H2 "Project Name" + "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on "Edit Text" or double click on the text box to start." | `a3c153_52461577c23b481ca63064298ce9268b~mv2.jpg` (TEMPLATE; sand dunes), same alt | none | Right column | Stacked |

**Factual details (verbatim):** "Villa Kitty" is described as "A nursery for mothers, a hospital for the unwell and a safe haven for all Bali cats…". The alt text shows a screenshot dated "2025-03-15", so the page was edited around March 2025.

**Source defects / outdated facts:** The placeholder intro, two placeholder entries, and template stock images are live. Typos: "their compassionate" (compassion), "fury fellow beings" (furry), "many many", "all shapes sizes". All three images share one wrong alt text. There are no outbound links to the charities.

**Interactions:** none.

---

### BLOG — `/blog`
- **Status / classification:** REAL (a Wix Blog app with real posts; orphan, not in the desktop nav). It is **dormant**: the newest dated post is 14 July 2020. Many 2019–2020 titles read like syndicated or third-party wellness articles (e.g. "…From Light Watkins", "16 Fruits You Should Grill This Weekend…"); authorship is unclear in capture. One sample post kept from the Wix template remains: slug `2013/05/01/this-is-the-title-of-your-first-image-post`, titled "Make a dragonfruit smoothie bowl".
- **Purpose:** News and wellness articles (yoga, Ayurveda, Balinese culture, meditation).
- **Title / meta description:** Title `BLOG | Ubud | The Shala Bali`; meta description and og:description "We share news, information and any updates about The Shala Bali, as well as nourishing articles about Yoga, wellness and soul-feeding readings."; RSS `link rel=alternate` → `https://www.theshalabali.com/blog-feed.xml`.
- **Page height:** desktop 7985px, mobile 6052px

| # | Section | Content | Media (IDs, owner vs template) | Buttons / links → destination | Layout (desktop) | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | Header | Global header/footer | — | — | Global | Global |
| 1 | Hero | H2 "BLOG" (American Typewriter ITC, 168px, white, letter-spacing −1.68px) and H2 "The Shala Bali" (Belinda script 32px, white) over the photo | `4c89f1_40c96ca2f7a04e10870e6c55deb63fdd~mv2_d_4240_2832_s_4_2.jpg` (owner; stone Ganesha statue among plants), 1440×562 | — | Full-bleed hero. In the desktop capture it measured at y −803 and is not visible in the desktop screenshot (unclear in capture). | 320×213. "BLOG" 29px and "The Shala Bali" 16px overlaid |
| 2 | Post feed (main column) | 10 posts per page. Each **post card**: featured image (670px wide, natural aspect ratio, no crop), then title H2 (Raleway 34px/47.6px #717070, linked), then excerpt (Museo Slab 100, 16px/24px #4A4A4A, about 2 lines, truncated with "…"). Cards are white/cream panels separated by spacing. There is no date, author or category line on the cards in the capture. | Featured images are owner-uploaded (`4c89f1_`), see the list below | Title → `/single-post/YYYY/MM/DD/slug`. Pagination "1 2 3 4 5" with next/last arrows → `/blog/page/2` … `/blog/page/8` (8 pages). Active page number is green #5BB364. | Main column x 259–929 (670 wide) inside a translucent panel over the site grass background (`4c89f1_778fac54…`) | Single column, full-width images (320 wide), titles 30px/42px. The capture shows 5 posts, then the pager "1/8"; whether mobile shows 5 or 10 per page is unclear. |
| 3 | Sidebar: Featured Posts | H6 "Featured Posts" (Italianno 28px). A slider of 220×123 thumbnails with an Italianno 22px title under each. Only the first is visible at a time on desktop; the others measured off-canvas (x > 1179), so it is a carousel. Items, in order: "Is Your Asana Practice Authentic?", "Type of Yoga", "KALI A MOST MISUNDERSTOOD GODDESS", "Rice Goddess, Shri Devi - Dewi Sri", "Tri Hita Karana", "Balinese Names", "Offering in Bali", "Campuhan Ridge walk in Ubud", "Life Cycle of Rice Paddies", "Make a dragonfruit smoothie bowl" | `4c89f1_a10ca08a890340b8964bc41a003db193.jpg`, `4c89f1_8a2a4c25b8384c10a6c6b24f16952384~mv2_d_1200_1200_s_2.jpg`, `4c89f1_73c26950931c48bd9c491edd9099550e~mv2.jpg`, `4c89f1_4aa41e48149047d6a4b66ac6dec7157c~mv2.jpg`, `4c89f1_c3b271f719554a5b963a2eff8a61f76b~mv2_d_4240_2832_s_4_2.jpg`, `4c89f1_f800621c5ef94d138aab72981ecd4d82~mv2_d_4240_2832_s_4_2.jpg`, `4c89f1_21019140caa443ec90464fccceba4b33~mv2_d_2831_3342_s_4_2.jpg`, `4c89f1_5825c108857f47e0a1830c7f8c3bedaf~mv2_d_4240_2832_s_4_2.jpg`, `4c89f1_4e59116d501c435e9dd9ff8fc87ffca4~mv2_d_4240_2832_s_4_2.jpg`, and a YouTube thumbnail `img.youtube.com/vi/XHbMT0nfNQA/mqdefault.jpg` (dragonfruit post) | Each → its `/single-post/...` URL | Right sidebar, x about 960–1180, narrow | Moves below the feed; 280×157 slides (two visible in the capture) |
| 4 | Sidebar: Recent Posts | H6 "Recent Posts". The 10 newest posts as a tiny thumbnail (38px wide) + title (Museo Slab 16px). Same 10 titles as the feed. | Same images as the feed | Each → post | Sidebar list | Shown after the archive grid; the capture lists 2 titles |
| 5 | Sidebar: Archive | H6 "Archive". Month links with counts, e.g. "July 2020 (1)", "June 2020 (2)", … "October 2016 (2)". 32 month entries (gaps allowed), from Oct 2016 to Jul 2020. | — | → `/blog/archive/YYYY/MM` | Sidebar list, 16px/24px | Rendered as a multi-column grid of counts plus a month list (layout unclear in capture) |
| 6 | Sidebar: Search By Tags | H6 "Search By Tags" + "No tags yet." | — | — | Sidebar | Same |
| 7 | Sidebar: Follow Us | H6 "Follow Us". 6 white-circle social icons on a teal ribbon: Facebook, Instagram, YouTube, TripAdvisor, Pinterest, Blogger (23×23 desktop, 35×35 mobile) | Wix stock social icons (`e0678ef2…`, `da7ef6dd…`, `e9bb463a…`, `52b5a40f…`, `767689ba…`, `d8dc0a23…`) | External links captured: `https://www.facebook.com/yogaretreatsandtrainingsubud/?fref=ts`, `https://www.instagram.com/theshalabali/`, `https://vimeo.com/182361958`, `https://www.tripadvisor.com/Hotel_Review-g297701-d10542029-Reviews-The_Shala_Bali-Ubud_Bali.html`, `https://fr.pinterest.com/theshalabali/`. That is 5 links for 6 icons. The icon-to-link mapping is unclear (the YouTube icon probably goes to Vimeo; Blogger has no captured link). | Sidebar | Row of 6 icons |

**Post count and dates**
- `blog-post-urls.txt`: **75 post URLs**. The archive counts also total **75**, which agrees.
- URL-slug dates: 70 dated slugs from 2016-10-13 ("whats-in-a-logo") to 2020-07-14, plus one template sample slug dated 2013-05-01, plus **4 undated newer-format slugs**: "the-bliss-of-chocolate-an-ayurveda-perspective", "the-myth-of-personal-destiny", "cleanse-and-nourish-your-liver-with-ayurveda", "calming-your-mind-with-shirodhara". Their dates are unclear in capture.
- The archive spans October 2016 to July 2020. Counts per year from the archive: 2016: 2, 2017: 12, 2018: 16, 2019: 30, 2020: 15.
- **Categories:** none shown. There is no category menu, and tags read "No tags yet.".

**Post titles visible on page 1 (newest first, verbatim), with excerpt starts**
1. "16 Fruits You Should Grill This Weekend + 4 Tips For Making Them Taste Great" ("For many people, summer cooking is synonymous with firing up the grill…") `4c89f1_21ba49d6d992447480ce9dc62b4ca607~mv2.jpg`
2. "5 Reasons To Consider A Regular Meditation Practice Right Now, From Light Watkins" ("The fight to end systemic racism is by no means an easy feat…") `4c89f1_6dfada4d30d2426996fc6ddb61c2cfb2~mv2.jpg`
3. "5 WAYS TO HAVE A HEALTHIER RELATIONSHIP WITH SOCIAL MEDIA" ("We've all heard that social media can take a toll on our mental health…") `4c89f1_e38a291bcc044e56a4dc856ea08484dc~mv2.jpg`
4. "Understanding the 5 Subdoshas of Vata" ("One of the fundamental principles of Ayurveda is that there are three different dosha…") `4c89f1_3fcb8eb0a6e04d1baaf4fc06eb378fe7~mv2.jpg`
5. "Meeting Grief with Mindfulness: How Embracing Pain Opens the Door to Joy" ("“We shake with joy, we shake with grief…” ~Mary Oliver") `4c89f1_14ea37cc89464145835168a31eef1c88~mv2.jpg`
6. "Don’t Try to Become the Best, Be Your Best Right Now" `4c89f1_edfd0004fbf64bb3b8c953cfa85628c1~mv2.jpg`
7. "It’s More Important to Be Authentic Than Impressive" `4c89f1_01c0e071291043379df7f9b2497918e5~mv2.jpg`
8. "Finding the Courage to Go After What You Want Out of Life" `4c89f1_88b5032d50014abea10d49e8188ad221~mv2.png`
9. "What to Do If You Want More Purpose, Passion, and Meaning" `4c89f1_cdf1b1d261b5499084e28da80fb475a1~mv2.jpg`
10. "7 Ways To Start To Value Yourself" `4c89f1_1d2a768d8b05497bb966177f13b4c8ce~mv2.jpg`

**Factual details (verbatim):** The meta description is quoted above. "No tags yet." The pagination goes to page 8.

**Source defects / outdated facts**
- The blog has been inactive since July 2020. The 2020 post "5 Reasons To Consider A Regular Meditation Practice…" opens with a topical June 2020 social-justice reference.
- A leftover Wix sample post (2013 slug "this-is-the-title-of-your-first-image-post") is live and featured.
- There are no dates, authors or categories on the cards. The tag widget is empty.
- The Follow Us icons and links do not match one to one (a Vimeo link but a YouTube icon; Blogger has no link).
- Featured-slider thumbnail URLs in the capture are partly truncated (`edia/…`, `/media/…`); the IDs listed above are complete.

**Interactions**
- Pagination (numbered and arrows). Featured Posts carousel (slides horizontally; the arrows/autoplay are unclear in capture). Links to posts and the archive. RSS feed.

---


## Part C — Template placeholders and empty pages

### Pure-template and empty pages (no usable owner body content)

All of these are orphan pages: in the sitemap but not in the desktop nav. Each has the global header and footer. The site-wide og:image is `4c89f1_5d417439…`, and `4c89f1_bab7b437…` (global header/footer asset) appears on every page. Neither is counted below as page media.

| slug | what it is | evidence of template (verbatim placeholder phrase) | any owner media IDs present | recommendation |
|---|---|---|---|---|
| `recipes` | **EMPTY stub.** Title `Recipes (All) | theshalabali`. Only the H1 "Recipes" (Italianno 56px, centred) on a blank white page; desktop 900px, mobile 693px. The "(All)" title suggests an empty Wix recipes/collection or blog-category page whose list renders nothing (unclear in capture). **It is linked from the mobile menu ("Recipes" → /recipes) but not from the desktop nav**, so mobile users reach a blank page. | No placeholder text. The page has nothing beyond the heading "Recipes". | none | see plan |
| `about-1` | **PURE TEMPLATE.** Wix "About Us" team template. The title `Rooms & facilities | theshalabali` was set by the owner, but nothing on the page is about rooms. Sections: About Us / "Finding Inspiration in Every Turn"; banner image; Our Story; Meet The Team (6 fake people with Facebook/Twitter/LinkedIn icons linking to Wix's own accounts); Our Clients (5 stock logos). Desktop 3523px, mobile 4695px. | "This is your About Page. This space is a great opportunity to give a full background on who you are…"; "Every website has a story, and your visitors want to hear yours."; fake team: "Don Francis / Founder & CEO", "Ashley Jones / Tech Lead", "Tess Brown / Office Manager", "Lisa Rose / Product Manager", "Kevin Nye / HR Lead", "Alex Young / Customer Support Lead"; social links → `facebook.com/wix`, `twitter.com/wix`, `linkedin.com/company/wix-com` | none (all `a3c153_` stock: `a3c153_20122b9a…`, `a3c153_ea643fa0…`, `a3c153_d272d21c…`, `a3c153_91dc1651…`, `a3c153_0225bd31…`, `a3c153_52445da2…`, `a3c153_2f3667a1…`, plus client logos `a3c153_1c21a3cd…`, `a3c153_18f13576…`, `a3c153_55e9a7e8…`, `a3c153_8f40ef98…`, `a3c153_a701bcdd…`) | see plan |
| `about-3` | **PURE TEMPLATE body with an owner-renamed heading.** Title and H1 "Shala Bali Signature Retreat" (Tangerine Bold 56px); Mission and Vision blocks, each with a stock image. Desktop 1619px, mobile 1836px. | "This is your About Page. It's a great opportunity to give a full background on who you are…"; "This is a Paragraph. Click on "Edit Text" or double click on the text box to start editing the content…" (Mission). The Vision heading has no body text at all. | none (`a3c153_20122b9a…`, `a3c153_bbf10194…` stock) | see plan |
| `about-3-1` | **PURE TEMPLATE.** Title `Luxe Pamper Retreat  | theshalabali` (owner-set), but the H1 is still the template "About" with eyebrow "The Full Story"; Mission and Vision blocks. Desktop 1617px, mobile 1844px. | "This is your About Page. It's a great opportunity…"; "This is a Paragraph. Click on "Edit Text"…" | none (`a3c153_20122b9a…`, `a3c153_bbf10194…`) | see plan |
| `about-3-3` | **PURE TEMPLATE.** Title `Yoga For You Retreat | theshalabali` (owner-set). Body is identical to about-3-1: "The Full Story" / H1 "About" / Mission / Vision. Desktop 1617px, mobile 1844px. | "This is your About Page. It's a great opportunity…"; "This is a Paragraph. Click on "Edit Text"…" | none (`a3c153_20122b9a…`, `a3c153_bbf10194…`) | see plan |
| `lead-collection` | **EMPTY.** Title `SPECIAL | theshalabali`. Below the header there is only a blank light-grey band (about y 54–775 on desktop) and then white space. No text, headings, form or images were captured. It may be a Wix lead-capture form/app that did not render; unclear in capture. Desktop 1800px, mobile 2002px. Its sibling `/lead-collection-1` holds the actual (expired) special offer. | No visible placeholder. The page is blank; the "lead-collection" slug is the Wix template page name. | none | see plan |
| `shop` | **PURE TEMPLATE.** Wix Stores demo grid: 12 products all named "I'm a product" with demo AUD prices and ribbons, each with a "Quick View" overlay; cart icon "0" → `/cart`; mobile has a "Load More" button. Desktop 1022px, mobile 3753px. | "I'm a product" (×12); prices "A$85.00", "A$20.00", "A$10.00" (ribbon "Best Seller"), "A$25.00", "A$7.50" (ribbon "New"), "A$15.00", "A$85.00", "A$40.00", "A$130.00", "A$45.00", "A$100.00"→"A$95.00" (ribbon "Sale"), "A$120.00"; product links `/product-page/i-m-a-product` … `-11` | none of its own (24 `a9ff3b_` stock product images, 2 per card for the hover swap). Only the site-wide grass background `4c89f1_778fac54…` appears. | see plan |

**Notes**
- `about-3`, `about-3-1` and `about-3-3` carry owner-chosen retreat names (Signature, Luxe Pamper, Yoga For You), which suggests retreat packages that were planned but never written. They have no owner copy, prices or media.
- The store is in AUD (A$), which suggests the Wix account currency is Australian dollars. Demo data only.
