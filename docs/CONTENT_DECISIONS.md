# Content decisions, corrections and known source conflicts

**Date:** 2026-10-12 · Applies to the Next.js recreation in this repository.
**Rule followed:** keep everything that is identity and fact; fix only defects. Copy is verbatim unless listed here.

## 1. Routes

| Source URL (Wix) | Clone route | Notes |
|---|---|---|
| `/` | `/` | |
| `/baliyogaretreat` | `/yoga-retreat-and-ayurvedic-spa` | Legacy home; still the header tagline's destination, as on the source |
| `/retreat-packages` | `/retreat-packages` | |
| `/copy-of-retreat-packages` | `/panchakarma-retreats` | |
| `/copy-of-darshana-veda-spa` | `/host-a-retreat` | |
| `/darshanavedaspa` | `/darshana-veda-spa` | |
| `/mumbaistationindiancafe` | `/indian-cafe` | |
| `/copy-of-villa-rooms`, `/copy-of-general`, `/copy-of-villa-rooms-1` | `/accommodation/bungalows`, `/deluxe-rooms`, `/master-suites` | One data-driven template |
| `/copy-of-services` | `/experiences` | |
| `/faqs`, `/testamonials` | `/faqs`, `/testimonials` | Orphans on the source; linked from the new footer |
| `/copy-of-organic-vegetarian-cafe` | `/organic-vegetarian-cafe` | |
| `/general-6-1` (+ drafts `/copy-of-the-shala-cafe`, `/copy-of-the-shala-cafe-1`) | `/the-shala-cafe` | Drafts duplicated the same copy; they redirect here |
| `/lead-collection-1` | `/special-offer` | Offer dates have passed; page says so (noindex) |
| `/about-3-4` | `/la-vie-en-rose-pilates-retreat` | Undated past event; carries a note |
| `/about-3-2` | `/ayurvedic-wellness-retreat` | Only the real intro is shown |
| `/projects-6` | `/causes-we-love` | Only the Villa Kitty entry is real |
| `/blog`, `/blog/page/N`, `/single-post/*` | `/blog`, `/blog/page/N`, `/blog/*` | All 75 posts; plus `/blog/archive/YYYY/MM` |
| `/shop` | `/shop` | Branded empty state (see §3) |
| `/contact`, `/contact-us` (404 on source) | redirect → `/#contact` | The real contact block is on the home page |
| `/about-1`, `/about-3`, `/about-3-1`, `/about-3-3`, `/lead-collection`, `/recipes`, `/product-page/*` | none → branded 404 | Unedited Wix templates / empty pages |

All Wix slugs above are permanent (308) redirects in `next.config.mjs`.

## 2. Spelling and typo corrections (no change of meaning)

- Home: "after a stay at the The Shala Bali" → "at The Shala Bali".
- Retreat Packages: "Whether your are" → "you are"; "Camphuan" → "Campuhan"; "(1 hours per day)" → "(1 hour per day)".
- Panchakarma: "Accomodation" → "Accommodation"; stray spaces before "?" removed; "/USD" spacing normalised.
- Indian Cafe: "our dishes our made" → "are made"; "guests personal taste" → "guests' personal taste".
- Master Suites: "teak would luggage chests" → "teak wooden"; "Suite 26sqm" → "Suite 26 sqm".
- Experiences: double full stops ("you..", "treat..", "spirit..") reduced to one.
- FAQs: "near by" → "nearby"; "Ngura Rai" → "Ngurah Rai"; "Ruphia" → "Rupiah"; "mosy" → "most"; currency "INR 300,000" → "IDR 300,000" (figure unchanged).
- Testimonials: "Quadalajara" → "Guadalajara"; "Berline" → "Berlin"; "water following" → "water falling"; "every guests needs" → "every guest's needs". Other guest wording is left as written.
- Organic cafe: "flare" → "flair" (title "Food with flair, made with care").
- La Vie en Rose: "pictureque" → "picturesque"; "it's central location" → "its".
- Ayurvedic Wellness: "each persons" → "each person's". Causes: "their compassionate" → "compassion", "fury" → "furry".
- The Shala Cafe: heading "Whole indregients our our friends.." → "Whole ingredients are our friends.".
- Text split across Wix elements is rejoined ("A"+"ll our ingredients", "or t"+"reat yourself", "OPEN DAILY 9"+":30").
- Mailto subject "In-hiouse retreat inquiry" (Ayurvedic price link) → "In-house retreat inquiry". All other subjects are kept exactly, including "Retreat borchure request " and trailing spaces.

## 3. Placeholder / template content not reproduced

- Wix placeholder paragraphs ("This is a Paragraph…", "I'm a paragraph…", "This is your Project Page…", "Add Testimonial here", "Please reload").
- Wix template stock images (`a3c153_*`, `a9ff3b_*`), the fake "Meet the Team" page, and the 12 "I'm a product" demo items (prices in A$). `/shop` shows a neutral "no products" message.
- Dead controls: "Coming soon" / "Brochure" buttons with no link, "Download menu", "Organic Cafe Menu", Google+ icon, the mobile-only "Recipes" item (empty page).
  - Brochure buttons were replaced by the working **"Request brochure"** email that the source already uses on Host a retreat (`theshalabali@gmail.com`, subject "Retreat borchure request ").
- Legacy home: three unlinked hero buttons and five tiles that pointed back to the home page now link to the matching real pages.
- The Smartarget chat widget (malformed `tel:+8` link, covered content on mobile) is replaced by a plain WhatsApp link to +62 812 3849 6136.

## 4. Source conflicts kept as published (owner should confirm)

| Where | Conflict | Treatment |
|---|---|---|
| Retreat Packages – Yoga For You | Both prices labelled "6 nights" (IDR 35.400.000 and IDR 68.130.000); the second is almost certainly 12 nights | Label kept; a visible note asks guests to confirm the duration when booking |
| Retreat Packages – all cards | Footnote "Quoted price is for 6 nights…" sits under 3/6/12-night prices | Kept verbatim |
| Yoga & Pilates "Book Now" | Reuses the "Yoga For You retreat booking " subject | Kept |
| Bungalows intro | "Our four bungalows" vs "three" elsewhere | Kept |
| Darshana Deluxe Bungalow | Description, amenities and booking subject copied from Darshana Bungalows | Kept |
| Kasih bungalow | Booking subject "Reservation Pretty Balinese Hut" | Kept |
| Master Suites | All three descriptions copied from Deluxe Rooms (Kasih mentions "Jivana room", Rahasia "triple rooms" with capacity 2) | Kept |
| Host a retreat | Calls rooms "Villa rooms"/"Suite rooms" vs "Deluxe Rooms"/"Master Suites" | Kept |
| Deluxe Rooms | "six Deluxe Rooms" then "All villa rooms" | Kept |
| FAQs | "No longer taxes to enter or leave Bali" (Bali introduced a tourist levy in 2024); ~$30 USD figures | Kept, flagged here |
| Experiences | "Balinese Offering Making" text ends mid-sentence | Shown with an ellipsis; nothing invented |
| The Shala Cafe | Two card texts end mid-sentence | Shown with an ellipsis |
| Phone formats | "+62 8123 632 5617" vs "+62 812 3632 5617" (same number) | Displayed as on desktop source; `tel:`/`wa.me` links use the full number |

## 5. Known limitations

- **Spa menu and Indian Cafe menu** prices exist only inside images (25 and 7 panels). They are shown as images with a full-screen zoom; an HTML transcription needs the owner to confirm current prices.
- **"A Day in Paradise" films** (3 Wix Video streams) are token-protected; only their public cover frames are used, linking to the original page where they play.
- **Fonts:** original OFL files from the source (Bellota Regular/Bold, Tangerine Regular/Bold, Italianno, Darker Grotesque Medium, Cormorant Italic). The proprietary Wix menu font (DIN Next) is replaced by Darker Grotesque; the blog's American Typewriter/Raleway titles use Bellota.
- **Lotus list bullets** were vector shapes the capture did not record; they are recreated as a small teal SVG.
- **Map:** a click-to-load Google Maps embed plus an "Open in Google Maps" link (avoids loading Google on every visit).
- **Videos** were re-encoded (H.264, silent, faststart) from Wix's 720p renditions: 2.0–13.8 MB instead of 9.5–53.9 MB, full length kept. Poster frames were taken 4 s in because Wix's first frames are black fade-ins.
- **Images** are Wix-rendered copies capped at 2560 px, then re-compressed to max 2000 px (next/image serves responsive sizes). Gallery photos have descriptive but generic alt text ("Rahasia Rooms, photo 2 of 6"); the owner never supplied captions.
- **Blog:** hashtag links pointed to Wix hashtag pages that are not part of this site, so they render as plain text; post author is not shown (the source shows none).
- **Contrast:** brand teal `#01B1AF` and price blue `#36B5CD` are kept for graphics and large text; small text uses darker variants (`#00807E`, `#1D7A8C`) to meet WCAG AA.
