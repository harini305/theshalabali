# Asset Inventory — The Shala Bali

**Date:** 2026-10-12 · **Status: catalogued and reachability-verified; nothing downloaded into the project yet.** The download into `public/assets/` is a Phase 3 action awaiting your approval (see §7). The only files fetched so far are the 11 font files, into the session scratchpad, to identify them.

**Method:** media IDs were collected from (a) the earlier raw-HTML parse of all 29 pages, (b) the rendered-DOM captures at 1440px and 390px, and (c) live probes that stepped through slideshows (this recovered 4 Indian Cafe menu slides missing from the server HTML). Every file was then HTTP `HEAD`-checked on `static.wixstatic.com`. Results: `source-audit/capture-2026-10-12/data/head-results.json`; ID→page map: `asset-ids.json`.

## 1. Summary

| Category | Files | Retrievable | Notes |
|---|---|---|---|
| Owner photography & graphics (`4c89f1_*`) | 204 | **204 / 204** (HTTP 200) | ~590 MB of originals; 22 files over 10 MB (max 19.7 MB); dimensions up to 6000×4000 |
| Logos | 6 | 6 / 6 | Raster PNG only. **No SVG exists** |
| Social icons (Wix library PNGs) | 3 | 3 / 3 | Facebook, Google+ (dead link), Instagram |
| Other Wix-library graphics | 12 | not needed | Share/social icons on the blog and old home |
| WebP derivatives | 12 | 403 (expected) | Each has a JPG/PNG original that returns 200, so nothing is lost |
| **Wix template stock** (`a9ff3b_*`, `a3c153_*`) | 55 | not checked | **Excluded.** Wix-licensed placeholders on template pages |
| Background / inline videos | 5 | **5 / 5** as MP4 | 4.7–69 MB per rendition (§3) |
| Wix Video gallery ("A Day in Paradise" ×3) | 3 | **Posters only** | Streams are token-protected HLS (§3) |
| Fonts | 11 files, 7 families | 11 / 11 | All SIL OFL, available on Google Fonts (§4); plus 1 proprietary Wix system font |

## 2. Logos and brand marks

| File | Use on source | Proposed path |
|---|---|---|
| `4c89f1_9d1ede72f7d04b67a270405c8997798e~mv2_d_5000_5000_s_4_2.png` (5000×5000, 462 KB) | Full lockup; site icon | `public/assets/logo/` |
| `4c89f1_bab7b4372309459aa58045ea700469c9~mv2.png` (42 KB) | Mark (leaf + three stripes); favicon | `public/assets/logo/` |
| `4c89f1_732e2d9c5b074b8abdfc4f6be9041ef3~mv2.png` (15 KB) | Desktop header wordmark (Home) | `public/assets/logo/` |
| `4c89f1_f402c51635334f089243e387079abd01~mv2.png` | Desktop header leaf mark (Home) | `public/assets/logo/` |
| `4c89f1_beea449628054d7b8c303ccfa314816b~mv2.png` | Mobile header mark | `public/assets/logo/` |
| `4c89f1_15da0744df4a4c9ba75ec20b67e79aae~mv2.png` | Mobile header wordmark | `public/assets/logo/` |

Limitation: raster only. The 5000px PNG is sharp enough for every rendered size; I will not redraw the logo as SVG without approval.

## 3. Video

| Media ID | Page / placement | Duration | Renditions (HTTP 200) | Poster |
|---|---|---|---|---|
| `4c89f1_bd392a7a09674ee2879505daaa4ce9be` | Home: full-width strip, loop | not measured | 720p **44.7 MB**, 480p 15.4 MB | `4c89f1_bd392a7a09674ee2879505daaa4ce9bef000.jpg` |
| `4c89f1_0cc538aab7ea4548aadb0c7334d2bead` | Old home: hero, loop | not measured | 1080p 69.4 MB, 720p 32.5 MB, 480p 16.1 MB | |
| `4c89f1_64a7cfad49334ac697a72b10f2bc1ce0` | Retreats: inside arch frame, plays once | not measured | 720p 53.9 MB, 480p 27.0 MB | |
| `4c89f1_fa23ed753a9a4012afc12475d06e5c7c` | Host a retreat: arch frame, loop | not measured | 1080p 22.0, 720p 10.6, 480p 5.0 MB | |
| `4c89f1_0670203e92e144c3aced8ac62b587137` | Spa: arch frame, loop (**not in the earlier audit**) | not measured | 1080p 20.7, 720p 9.5, 480p 4.7 MB | |
| `4c89f1_8e6a05ac9b2d42db9ae4c6fd3fc3b8ec` | Old home: "A Day in Paradise" (Wix Video) | 3:02 | **Token-protected HLS** | `…f000.jpg` (200) |
| `4c89f1_b0ed979c5af449b2b06529ad5786f37d` | "Nestled in the Groves and Rice Fields" | 1:57 | Token-protected HLS | `…f002.jpg` (200) |
| `4c89f1_180adbc73df5431e8b290b0a1bfcc6b5` | "Serenity of Morning Yoga practice" | 0:58 | Token-protected HLS | `…f001.jpg` (200) |
| `vimeo.com/182361958` | Linked from the blog | n/a | External link | n/a |

**Limitations**
- **The background-video files are far too heavy for decorative web video** (a 1–3 MB target is typical). Compressing them needs ffmpeg, which is **not installed**. Options are in §7.
- The three Wix Video items are streamed behind a signed token. **I have not attempted to bypass it.** If they are needed, the owner should supply the source files, or the rebuild can link to an owner-hosted copy (YouTube/Vimeo).

## 4. Fonts (identified from each file's embedded name table)

| Family / style | Wix upload ID | Used for | Licence | Proposed source |
|---|---|---|---|---|
| Bellota Regular | `428110_59fa6a15…` | Body text (~80% of text) | SIL OFL 1.1 | `next/font/google` (Bellota) |
| Bellota Bold / Italic / Light / Bold Italic | `800ab1_b88350c0…`, `f73cef_e9c5d2d2…`, `f73cef_b7997a51…`, `800ab1_b1408c2a…` | Night labels, emphasis | SIL OFL | same family, weights 300/400/700 + italics |
| Tangerine Regular / Bold | `4c89f1_3d9211df…`, `4c89f1_5da941bf…` | Script titles, tagline, "Book Now" | SIL OFL | `next/font/google` (Tangerine 400/700) |
| Italianno | `4c89f1_90048580…` | Theme heading font (FAQs, Testimonials, Blog) | SIL OFL | `next/font/google` |
| Darker Grotesque Medium | `663a12_47b0871b…` | Desktop nav | SIL OFL | `next/font/google` (weight 500) |
| Cormorant Italic | `baa45d_0d0955b3…` | Prices | SIL OFL | `next/font/google` (Cormorant, italic) |
| Cinzel Decorative | `6c939c_59c83eaf…` | La Vie en Rose page only | SIL OFL | only if that page is migrated |
| DIN Next W01 Light | Wix system | Mobile drawer menu | **Proprietary** (Monotype, Wix-licensed) | **Cannot be reused**: needs a substitute (propose Darker Grotesque to match the desktop nav) |

`next/font/google` downloads and self-hosts the same OFL fonts at build time, so `public/assets/fonts/` stays empty unless you prefer committed font files.

## 5. Images by intended page (counts of owner files)

| Folder (proposed) | Files | Folder | Files |
|---|---|---|---|
| `images/spa` (incl. ~25 spa-menu panels) | 29 | `images/indian-cafe` (incl. 7 menu slides) | 11 |
| `images/home` (home + old home) | 28 | `images/events` (La Vie en Rose) | 10 |
| `images/shala-cafe` (orphan cafe pages) | 19 | `images/retreats` | 10 |
| `images/accommodation/bungalows` | 18 | `images/experiences` | 8 |
| `images/accommodation/deluxe-rooms` | 18 | `images/panchakarma` | 7 |
| `images/accommodation/master-suites` | 18 | `images/shared` (used on ≥4 pages, e.g. OG image) | 5 |
| `images/blog` (index only) | 17 | `images/host-a-retreat`, `causes`, `faqs` | 4 / 1 / 1 |

Filenames: the Wix media ID **is** the original stored filename, so it is kept as-is (e.g. `4c89f1_a726b829…~mv2.jpg`). The uploader's original names survive only as alt text in some cases ("Flower baht.jpg", "Blessing.JPG"); they are listed in the manifest's "uploaded name" column. Proposal: keep the media ID as the filename (exact traceability) and keep a mapping to a readable name in `src/data/assets.js`.

**Images of text:** the spa menu (~19 menu-page panels) and the Indian Cafe menu (7 slides) carry their prices and descriptions *inside* the images. Reproducing them as images is faithful; an accessible HTML transcription is a content decision (Q8 in the plan).

## 6. Excluded / not to be used

- **55 Wix template-stock images** (`a9ff3b_*` store products, `a3c153_*` About/Causes templates): not owner content, and licensed only within Wix.
- **WebP derivatives**: use the originals.
- **Third-party widget assets** (Smartarget chat, Google Maps tiles): not assets; behaviour is covered in the plan.
- **Template-page photos**: never substitute stock for missing owner imagery.

## 7. Proposed collection procedure (needs approval: Phase 3 download)

1. A one-off Node script (no new packages) reads this manifest and downloads each owner/logo file into its `public/assets/...` path, verifying status and byte length, then writes `docs/asset-download-log.json`.
2. **Size issue:** the originals total about 590 MB and 22 files exceed 10 MB, which is too heavy for a git repository. Options:
   - **(A, recommended)** Download a Wix-rendered copy capped at 2560px on the long edge, quality 90, from the same media ID (`/v1/fit/w_2560,h_2560,q_90/<id>`). This is the identical original image, resized by Wix. The estimated total is a fraction of the original size; `next/image` then serves responsive sizes.
   - (B) Download full originals into a git-ignored `assets-source/` folder, plus the 2560px versions into `public/`.
   - (C) Full originals into `public/` (not recommended: repo size and build time).
3. **Videos:** use the **480p** MP4 renditions (4.7–27 MB) as-is. Or install ffmpeg (a new system tool, so it needs your approval) to re-encode to roughly 1–3 MB web loops. Or replace the decorative arch videos with their poster frames.
4. Social icons: use the 3 Wix PNGs, or equivalent inline SVG icons (Facebook/Instagram glyphs, not imagery). Drop Google+ (the service is defunct and the link is dead).

**Rights:** the photos, copy and logo belong to The Shala Bali. Reuse assumes you are authorised by the owner (Q1 in the plan).

## 8. Full manifest

Columns: original file on `static.wixstatic.com/media/`, type, pages, dimensions (where known), original size, HEAD status, uploader name/alt, proposed local path, notes. *Downloaded?* = **No (pending approval)** for every row.

| # | Original file (static.wixstatic.com/media/…) | Type | Used on | Dimensions | Original size | HEAD status | Uploaded name / alt | Proposed local path | Notes |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `4c89f1_15da0744df4a4c9ba75ec20b67e79aae~mv2.png` | logo | copy-of-retreat-packages, retreat-packages |  | 36 KB | 200 |  | `public/assets/logo/4c89f1_15da0744df4a4c9ba75ec20b67e79aae~mv2.png` | Mobile header wordmark |
| 2 | `4c89f1_732e2d9c5b074b8abdfc4f6be9041ef3~mv2.png` | logo | home |  | 15 KB | 200 |  | `public/assets/logo/4c89f1_732e2d9c5b074b8abdfc4f6be9041ef3~mv2.png` | Header wordmark "The Shala Bali" (home header) |
| 3 | `4c89f1_9d1ede72f7d04b67a270405c8997798e~mv2_d_5000_5000_s_4_2.png` | logo | 29 pages incl. about-1, about-3, about-3-1 | 5000×5000 | 462 KB | 200 |  | `public/assets/logo/4c89f1_9d1ede72f7d04b67a270405c8997798e~mv2_d_5000_5000_s_4_2.png` | Full logo lockup 5000×5000; site icon |
| 4 | `4c89f1_bab7b4372309459aa58045ea700469c9~mv2.png` | logo | 29 pages incl. about-1, about-3, about-3-1 |  | 42 KB | 200 |  | `public/assets/logo/4c89f1_bab7b4372309459aa58045ea700469c9~mv2.png` | Logo mark (leaf + three stripes); site icon |
| 5 | `4c89f1_beea449628054d7b8c303ccfa314816b~mv2.png` | logo | copy-of-retreat-packages, retreat-packages |  | 79 KB | 200 |  | `public/assets/logo/4c89f1_beea449628054d7b8c303ccfa314816b~mv2.png` | Mobile header logo mark |
| 6 | `4c89f1_f402c51635334f089243e387079abd01~mv2.png` | logo | home |  | 29 KB | 200 |  | `public/assets/logo/4c89f1_f402c51635334f089243e387079abd01~mv2.png` | Header leaf mark (home header) |
| 7 | `04b15d1b030049d1b3746f8ef5a72955.png` | icon | darshanavedaspa, home |  | 2 KB | 200 |  | `public/assets/icons/04b15d1b030049d1b3746f8ef5a72955.png` | Instagram icon |
| 8 | `05546d0902004bfabba0396e21f33f7d.png` | icon | darshanavedaspa, home |  | 4 KB | 200 |  | `public/assets/icons/05546d0902004bfabba0396e21f33f7d.png` | Google+ icon (dead link) |
| 9 | `0fdef751204647a3bbd7eaa2827ed4f9.png` | icon | about-1, darshanavedaspa, home |  | 1 KB | 200 |  | `public/assets/icons/0fdef751204647a3bbd7eaa2827ed4f9.png` | Facebook icon |
| 10 | `4c89f1_073222969ba747ada9126b4dd8e4c8b7~mv2.jpg` | owner | copy-of-villa-rooms | 6000×4000 | 12.6 MB | 200 |  | `public/assets/images/accommodation/bungalows/4c89f1_073222969ba747ada9126b4dd8e4c8b7~mv2.jpg` |  |
| 11 | `4c89f1_0d89eed1e6b94e7b904bee0f0e96def5~mv2.jpg` | owner | copy-of-villa-rooms | 3024×4032 | 1.1 MB | 200 |  | `public/assets/images/accommodation/bungalows/4c89f1_0d89eed1e6b94e7b904bee0f0e96def5~mv2.jpg` |  |
| 12 | `4c89f1_109f708d20f9490f90c7b109cff7283c.jpg` | owner | copy-of-villa-rooms | 5616×3744 | 3.6 MB | 200 |  | `public/assets/images/accommodation/bungalows/4c89f1_109f708d20f9490f90c7b109cff7283c.jpg` |  |
| 13 | `4c89f1_180a84ecfb52451d95a8b3cc257d6879~mv2.jpg` | owner | copy-of-villa-rooms | 3704×2469 | 1.9 MB | 200 |  | `public/assets/images/accommodation/bungalows/4c89f1_180a84ecfb52451d95a8b3cc257d6879~mv2.jpg` |  |
| 14 | `4c89f1_2029cf89e73d4af4bccaba47ef09dbbc~mv2.jpg` | owner | copy-of-villa-rooms | 3024×4032 | 2.0 MB | 200 |  | `public/assets/images/accommodation/bungalows/4c89f1_2029cf89e73d4af4bccaba47ef09dbbc~mv2.jpg` |  |
| 15 | `4c89f1_22c6848b2ec0494893eeda5709963ced.jpg` | owner | copy-of-villa-rooms | 1024×683 | 119 KB | 200 |  | `public/assets/images/accommodation/bungalows/4c89f1_22c6848b2ec0494893eeda5709963ced.jpg` |  |
| 16 | `4c89f1_40f1bd1d9c624982a266363f233fcdbc~mv2.jpg` | owner | copy-of-villa-rooms | 1280×854 | 237 KB | 200 |  | `public/assets/images/accommodation/bungalows/4c89f1_40f1bd1d9c624982a266363f233fcdbc~mv2.jpg` |  |
| 17 | `4c89f1_49daee6abfe346aeb35f3dcb964730e9~mv2_d_4096_2304_s_2.jpg` | owner | copy-of-villa-rooms | 4096×2304 | 3.4 MB | 200 | IMG_20190306_114250.jpg | `public/assets/images/accommodation/bungalows/4c89f1_49daee6abfe346aeb35f3dcb964730e9~mv2_d_4096_2304_s_2.jpg` |  |
| 18 | `4c89f1_59c52e3eb3e0498e8f2562f3f33d1d89~mv2.jpg` | owner | copy-of-villa-rooms | 1024×683 | 205 KB | 200 |  | `public/assets/images/accommodation/bungalows/4c89f1_59c52e3eb3e0498e8f2562f3f33d1d89~mv2.jpg` |  |
| 19 | `4c89f1_66395c376efa45698cd927afb99c6fd6~mv2.jpg` | owner | copy-of-villa-rooms | 4032×3024 | 2.1 MB | 200 |  | `public/assets/images/accommodation/bungalows/4c89f1_66395c376efa45698cd927afb99c6fd6~mv2.jpg` |  |
| 20 | `4c89f1_743d6147719641509f0600dcbe7b525d~mv2.jpg` | owner | copy-of-villa-rooms | 854×1280 | 197 KB | 200 |  | `public/assets/images/accommodation/bungalows/4c89f1_743d6147719641509f0600dcbe7b525d~mv2.jpg` |  |
| 21 | `4c89f1_74d25827c9194245a08431334f2f64c9~mv2.jpg` | owner | copy-of-villa-rooms | 3024×4032 | 1.6 MB | 200 |  | `public/assets/images/accommodation/bungalows/4c89f1_74d25827c9194245a08431334f2f64c9~mv2.jpg` |  |
| 22 | `4c89f1_78ce044c2338421a80eab87d034929d4~mv2.jpg` | owner | copy-of-villa-rooms | 1173×1564 | 366 KB | 200 |  | `public/assets/images/accommodation/bungalows/4c89f1_78ce044c2338421a80eab87d034929d4~mv2.jpg` |  |
| 23 | `4c89f1_8d8d59dbaec7478f986c0b3dc531c6a5.jpg` | owner | copy-of-villa-rooms | 5194×3463 | 3.1 MB | 200 |  | `public/assets/images/accommodation/bungalows/4c89f1_8d8d59dbaec7478f986c0b3dc531c6a5.jpg` |  |
| 24 | `4c89f1_aba8bbf7c9554bfb94dabb09cf6b8e0e~mv2.jpg` | owner | copy-of-villa-rooms | 768×1024 | 105 KB | 200 |  | `public/assets/images/accommodation/bungalows/4c89f1_aba8bbf7c9554bfb94dabb09cf6b8e0e~mv2.jpg` |  |
| 25 | `4c89f1_c032243ab5614a1a8833a4220756e7a2~mv2.jpg` | owner | copy-of-villa-rooms | 4000×5000 | 9.4 MB | 200 |  | `public/assets/images/accommodation/bungalows/4c89f1_c032243ab5614a1a8833a4220756e7a2~mv2.jpg` |  |
| 26 | `4c89f1_ca8ef460bfc04007aba649ff0aee3892~mv2.jpg` | owner | copy-of-villa-rooms | 3024×4032 | 1.6 MB | 200 |  | `public/assets/images/accommodation/bungalows/4c89f1_ca8ef460bfc04007aba649ff0aee3892~mv2.jpg` |  |
| 27 | `4c89f1_dbbf38bb1ae04d0d8ef8efee52272097.jpg` | owner | copy-of-villa-rooms | 3715×5573 | 2.2 MB | 200 |  | `public/assets/images/accommodation/bungalows/4c89f1_dbbf38bb1ae04d0d8ef8efee52272097.jpg` |  |
| 28 | `4c89f1_1858e1671f114e5e808e6281141c78dd~mv2.jpg` | owner | copy-of-general | 3661×5491 | 1.3 MB | 200 |  | `public/assets/images/accommodation/deluxe-rooms/4c89f1_1858e1671f114e5e808e6281141c78dd~mv2.jpg` |  |
| 29 | `4c89f1_1efe5d1cae4d44e084c6fc829f06a877~mv2_d_3744_5616_s_4_2.jpg` | owner | copy-of-general | 3744×5616 | 2.7 MB | 200 |  | `public/assets/images/accommodation/deluxe-rooms/4c89f1_1efe5d1cae4d44e084c6fc829f06a877~mv2_d_3744_5616_s_4_2.jpg` |  |
| 30 | `4c89f1_43edb8f1fa14485b930c5bdef9113146~mv2.jpg` | owner | copy-of-general | 6000×4000 | 17.2 MB | 200 |  | `public/assets/images/accommodation/deluxe-rooms/4c89f1_43edb8f1fa14485b930c5bdef9113146~mv2.jpg` |  |
| 31 | `4c89f1_46c4a60f100e4a15834e098cacd1f019.jpg` | owner | copy-of-general | 5251×3396 | 2.1 MB | 200 |  | `public/assets/images/accommodation/deluxe-rooms/4c89f1_46c4a60f100e4a15834e098cacd1f019.jpg` |  |
| 32 | `4c89f1_69f08cd68fea4cb2b387577168b1eb0a~mv2.jpg` | owner | copy-of-general | 6000×4000 | 12.9 MB | 200 |  | `public/assets/images/accommodation/deluxe-rooms/4c89f1_69f08cd68fea4cb2b387577168b1eb0a~mv2.jpg` |  |
| 33 | `4c89f1_6d1344f1ba074a8f8450441cd54a60ff~mv2.jpg` | owner | copy-of-general | 1024×683 | 203 KB | 200 |  | `public/assets/images/accommodation/deluxe-rooms/4c89f1_6d1344f1ba074a8f8450441cd54a60ff~mv2.jpg` |  |
| 34 | `4c89f1_6e1017848e2047269a434de06cf60a36~mv2.jpg` | owner | copy-of-general | 1024×682 | 192 KB | 200 |  | `public/assets/images/accommodation/deluxe-rooms/4c89f1_6e1017848e2047269a434de06cf60a36~mv2.jpg` |  |
| 35 | `4c89f1_72c0f6c3e9704b9fb70fbdb562ce99c3~mv2.jpg` | owner | copy-of-general | 6000×4000 | 11.5 MB | 200 |  | `public/assets/images/accommodation/deluxe-rooms/4c89f1_72c0f6c3e9704b9fb70fbdb562ce99c3~mv2.jpg` |  |
| 36 | `4c89f1_9c2225d3173d4119bbc92d79e9774029~mv2.jpg` | owner | copy-of-general | 1024×683 | 180 KB | 200 | KLP_9980.jpg | `public/assets/images/accommodation/deluxe-rooms/4c89f1_9c2225d3173d4119bbc92d79e9774029~mv2.jpg` |  |
| 37 | `4c89f1_aba371cd481d4a318bb9fef4fc26bf9d~mv2.jpg` | owner | copy-of-general | 6000×4000 | 17.6 MB | 200 |  | `public/assets/images/accommodation/deluxe-rooms/4c89f1_aba371cd481d4a318bb9fef4fc26bf9d~mv2.jpg` |  |
| 38 | `4c89f1_ac3f7d7f6fcf4fd69233efe2255726c7.jpg` | owner | copy-of-general | 5053×3369 | 1.8 MB | 200 |  | `public/assets/images/accommodation/deluxe-rooms/4c89f1_ac3f7d7f6fcf4fd69233efe2255726c7.jpg` |  |
| 39 | `4c89f1_bb9be0ec230d4745b84d85d49c45653d~mv2.jpg` | owner | copy-of-general | 6000×4000 | 12.3 MB | 200 |  | `public/assets/images/accommodation/deluxe-rooms/4c89f1_bb9be0ec230d4745b84d85d49c45653d~mv2.jpg` |  |
| 40 | `4c89f1_c9ceba1608204ca88141b2e42ec598f4~mv2.jpg` | owner | copy-of-general | 5515×3677 | 1.8 MB | 200 |  | `public/assets/images/accommodation/deluxe-rooms/4c89f1_c9ceba1608204ca88141b2e42ec598f4~mv2.jpg` |  |
| 41 | `4c89f1_d5cc086629484924b7f4f54ceb619435.jpg` | owner | copy-of-general | 5616×3744 | 1.8 MB | 200 |  | `public/assets/images/accommodation/deluxe-rooms/4c89f1_d5cc086629484924b7f4f54ceb619435.jpg` |  |
| 42 | `4c89f1_daabaf95b1894ff0b60a8c8cf82369ee~mv2.jpg` | owner | copy-of-general | 5197×3465 | 1.9 MB | 200 |  | `public/assets/images/accommodation/deluxe-rooms/4c89f1_daabaf95b1894ff0b60a8c8cf82369ee~mv2.jpg` |  |
| 43 | `4c89f1_f508874f9fcd4dd7ba3850290380473a~mv2.jpg` | owner | copy-of-general | 6000×4000 | 11.5 MB | 200 |  | `public/assets/images/accommodation/deluxe-rooms/4c89f1_f508874f9fcd4dd7ba3850290380473a~mv2.jpg` |  |
| 44 | `4c89f1_f5e54442131b45a38f0b26ebf4ce840a.jpg` | owner | copy-of-general | 5616×3744 | 1.7 MB | 200 |  | `public/assets/images/accommodation/deluxe-rooms/4c89f1_f5e54442131b45a38f0b26ebf4ce840a.jpg` |  |
| 45 | `4c89f1_fc69eb7dcd7745eca900096616c06e6d.jpg` | owner | copy-of-general | 4864×3243 | 1.6 MB | 200 |  | `public/assets/images/accommodation/deluxe-rooms/4c89f1_fc69eb7dcd7745eca900096616c06e6d.jpg` |  |
| 46 | `4c89f1_08b3fb59dbad480aaf1b580ccc5a592e.jpg` | owner | copy-of-villa-rooms-1 | 2655×1772 | 5.4 MB | 200 |  | `public/assets/images/accommodation/master-suites/4c89f1_08b3fb59dbad480aaf1b580ccc5a592e.jpg` |  |
| 47 | `4c89f1_2ab5c2458fa04e248231f757317656e2.jpg` | owner | copy-of-villa-rooms-1 | 4780×3187 | 1.8 MB | 200 |  | `public/assets/images/accommodation/master-suites/4c89f1_2ab5c2458fa04e248231f757317656e2.jpg` |  |
| 48 | `4c89f1_397f40aa8a8b494b8d46e24579baee82.jpg` | owner | copy-of-villa-rooms-1 | 5616×3744 | 3.3 MB | 200 |  | `public/assets/images/accommodation/master-suites/4c89f1_397f40aa8a8b494b8d46e24579baee82.jpg` |  |
| 49 | `4c89f1_4904809897fb48f5a1dbf71bd5af338f~mv2.jpg` | owner | copy-of-villa-rooms-1 | 6000×4000 | 17.4 MB | 200 |  | `public/assets/images/accommodation/master-suites/4c89f1_4904809897fb48f5a1dbf71bd5af338f~mv2.jpg` |  |
| 50 | `4c89f1_617590030e4b4c8eb4960512d18cac93~mv2.jpg` | owner | copy-of-villa-rooms-1 | 6000×4000 | 17.4 MB | 200 |  | `public/assets/images/accommodation/master-suites/4c89f1_617590030e4b4c8eb4960512d18cac93~mv2.jpg` |  |
| 51 | `4c89f1_948969eacdb04744be2de620ba854ec8~mv2.jpg` | owner | copy-of-villa-rooms-1 | 6000×4000 | 13.0 MB | 200 |  | `public/assets/images/accommodation/master-suites/4c89f1_948969eacdb04744be2de620ba854ec8~mv2.jpg` |  |
| 52 | `4c89f1_97450f3af49d43a48d65f2b70f7e64f6.jpg` | owner | copy-of-villa-rooms-1 | 3605×5407 | 1.2 MB | 200 |  | `public/assets/images/accommodation/master-suites/4c89f1_97450f3af49d43a48d65f2b70f7e64f6.jpg` |  |
| 53 | `4c89f1_a216b4d6f25144fa959f622adbd482b6.jpg` | owner | copy-of-villa-rooms-1 | 5616×3744 | 2.9 MB | 200 |  | `public/assets/images/accommodation/master-suites/4c89f1_a216b4d6f25144fa959f622adbd482b6.jpg` |  |
| 54 | `4c89f1_b01fcb1de3c649f086a26c8a2e2ad513~mv2.jpg` | owner | copy-of-villa-rooms-1 | 6000×4000 | 13.8 MB | 200 |  | `public/assets/images/accommodation/master-suites/4c89f1_b01fcb1de3c649f086a26c8a2e2ad513~mv2.jpg` |  |
| 55 | `4c89f1_b30edd834aa243e59c8aa7c816726d59.jpg` | owner | copy-of-villa-rooms-1 | 3744×5616 | 5.9 MB | 200 |  | `public/assets/images/accommodation/master-suites/4c89f1_b30edd834aa243e59c8aa7c816726d59.jpg` |  |
| 56 | `4c89f1_d1f090c8ff304b3db8d4c8fdfa3a2a08~mv2.jpeg` | owner | copy-of-villa-rooms-1 | 1280×853 | 505 KB | 200 |  | `public/assets/images/accommodation/master-suites/4c89f1_d1f090c8ff304b3db8d4c8fdfa3a2a08~mv2.jpeg` |  |
| 57 | `4c89f1_d827976d4a334e8ab8854c1d07f4f8ee~mv2.jpg` | owner | copy-of-villa-rooms-1 | 1772×2172 | 2.5 MB | 200 |  | `public/assets/images/accommodation/master-suites/4c89f1_d827976d4a334e8ab8854c1d07f4f8ee~mv2.jpg` |  |
| 58 | `4c89f1_d8fae7c51c3341d68ff9bf6cc7f96130~mv2.jpg` | owner | copy-of-villa-rooms-1 | 3600×2399 | 851 KB | 200 |  | `public/assets/images/accommodation/master-suites/4c89f1_d8fae7c51c3341d68ff9bf6cc7f96130~mv2.jpg` |  |
| 59 | `4c89f1_da68aaa8fc884b5ba3af8b96ffce446d~mv2_d_1772_2655_s_2.jpg` | owner | copy-of-villa-rooms-1 | 1772×2655 | 3.9 MB | 200 |  | `public/assets/images/accommodation/master-suites/4c89f1_da68aaa8fc884b5ba3af8b96ffce446d~mv2_d_1772_2655_s_2.jpg` |  |
| 60 | `4c89f1_e6f902a87d3141fd97483c5b83828c3b.jpg` | owner | copy-of-villa-rooms-1 | 5395×3597 | 2.0 MB | 200 |  | `public/assets/images/accommodation/master-suites/4c89f1_e6f902a87d3141fd97483c5b83828c3b.jpg` |  |
| 61 | `4c89f1_ea4ca4c27eca49df8112cb250223578e~mv2.jpg` | owner | copy-of-villa-rooms-1 | 2655×1772 | 4.0 MB | 200 |  | `public/assets/images/accommodation/master-suites/4c89f1_ea4ca4c27eca49df8112cb250223578e~mv2.jpg` |  |
| 62 | `4c89f1_ea888e482d7e477f850469e41f9d82c0~mv2.jpg` | owner | copy-of-villa-rooms-1 | 4664×3109 | 1.5 MB | 200 |  | `public/assets/images/accommodation/master-suites/4c89f1_ea888e482d7e477f850469e41f9d82c0~mv2.jpg` |  |
| 63 | `4c89f1_f686443228aa4ee9a3b621797b6c0ddd.jpg` | owner | copy-of-villa-rooms-1 | 1500×1000 | 606 KB | 200 |  | `public/assets/images/accommodation/master-suites/4c89f1_f686443228aa4ee9a3b621797b6c0ddd.jpg` |  |
| 64 | `4c89f1_01c0e071291043379df7f9b2497918e5~mv2.jpg` | owner | blog |  | 333 KB | 200 |  | `public/assets/images/blog/4c89f1_01c0e071291043379df7f9b2497918e5~mv2.jpg` |  |
| 65 | `4c89f1_14ea37cc89464145835168a31eef1c88~mv2.jpg` | owner | blog |  | 38 KB | 200 |  | `public/assets/images/blog/4c89f1_14ea37cc89464145835168a31eef1c88~mv2.jpg` |  |
| 66 | `4c89f1_1d2a768d8b05497bb966177f13b4c8ce~mv2.jpg` | owner | blog |  | 966 KB | 200 |  | `public/assets/images/blog/4c89f1_1d2a768d8b05497bb966177f13b4c8ce~mv2.jpg` |  |
| 67 | `4c89f1_21019140caa443ec90464fccceba4b33~mv2_d_2831_3342_s_4_2.jpg` | owner | blog | 2831×3342 | 2.5 MB | 200 |  | `public/assets/images/blog/4c89f1_21019140caa443ec90464fccceba4b33~mv2_d_2831_3342_s_4_2.jpg` |  |
| 68 | `4c89f1_3fcb8eb0a6e04d1baaf4fc06eb378fe7~mv2.jpg` | owner | blog |  | 24 KB | 200 |  | `public/assets/images/blog/4c89f1_3fcb8eb0a6e04d1baaf4fc06eb378fe7~mv2.jpg` |  |
| 69 | `4c89f1_40c96ca2f7a04e10870e6c55deb63fdd~mv2_d_4240_2832_s_4_2.jpg` | owner | blog | 4240×2832 | 3.6 MB | 200 |  | `public/assets/images/blog/4c89f1_40c96ca2f7a04e10870e6c55deb63fdd~mv2_d_4240_2832_s_4_2.jpg` |  |
| 70 | `4c89f1_4aa41e48149047d6a4b66ac6dec7157c~mv2.jpg` | owner | blog |  | 157 KB | 200 |  | `public/assets/images/blog/4c89f1_4aa41e48149047d6a4b66ac6dec7157c~mv2.jpg` |  |
| 71 | `4c89f1_4e59116d501c435e9dd9ff8fc87ffca4~mv2_d_4240_2832_s_4_2.jpg` | owner | blog | 4240×2832 | 5.2 MB | 200 |  | `public/assets/images/blog/4c89f1_4e59116d501c435e9dd9ff8fc87ffca4~mv2_d_4240_2832_s_4_2.jpg` |  |
| 72 | `4c89f1_5825c108857f47e0a1830c7f8c3bedaf~mv2_d_4240_2832_s_4_2.jpg` | owner | blog | 4240×2832 | 3.1 MB | 200 |  | `public/assets/images/blog/4c89f1_5825c108857f47e0a1830c7f8c3bedaf~mv2_d_4240_2832_s_4_2.jpg` |  |
| 73 | `4c89f1_73c26950931c48bd9c491edd9099550e~mv2.jpg` | owner | blog |  | 285 KB | 200 |  | `public/assets/images/blog/4c89f1_73c26950931c48bd9c491edd9099550e~mv2.jpg` |  |
| 74 | `4c89f1_88b5032d50014abea10d49e8188ad221~mv2.png` | owner | blog |  | 684 KB | 200 |  | `public/assets/images/blog/4c89f1_88b5032d50014abea10d49e8188ad221~mv2.png` |  |
| 75 | `4c89f1_8a2a4c25b8384c10a6c6b24f16952384~mv2_d_1200_1200_s_2.jpg` | owner | blog | 1200×1200 | 741 KB | 200 |  | `public/assets/images/blog/4c89f1_8a2a4c25b8384c10a6c6b24f16952384~mv2_d_1200_1200_s_2.jpg` |  |
| 76 | `4c89f1_a10ca08a890340b8964bc41a003db193.jpg` | owner | blog |  | 1.5 MB | 200 |  | `public/assets/images/blog/4c89f1_a10ca08a890340b8964bc41a003db193.jpg` |  |
| 77 | `4c89f1_c3b271f719554a5b963a2eff8a61f76b~mv2_d_4240_2832_s_4_2.jpg` | owner | blog | 4240×2832 | 4.3 MB | 200 |  | `public/assets/images/blog/4c89f1_c3b271f719554a5b963a2eff8a61f76b~mv2_d_4240_2832_s_4_2.jpg` |  |
| 78 | `4c89f1_cdf1b1d261b5499084e28da80fb475a1~mv2.jpg` | owner | blog |  | 147 KB | 200 |  | `public/assets/images/blog/4c89f1_cdf1b1d261b5499084e28da80fb475a1~mv2.jpg` |  |
| 79 | `4c89f1_edfd0004fbf64bb3b8c953cfa85628c1~mv2.jpg` | owner | blog |  | 26 KB | 200 |  | `public/assets/images/blog/4c89f1_edfd0004fbf64bb3b8c953cfa85628c1~mv2.jpg` |  |
| 80 | `4c89f1_f800621c5ef94d138aab72981ecd4d82~mv2_d_4240_2832_s_4_2.jpg` | owner | blog | 4240×2832 | 4.3 MB | 200 |  | `public/assets/images/blog/4c89f1_f800621c5ef94d138aab72981ecd4d82~mv2_d_4240_2832_s_4_2.jpg` |  |
| 81 | `4c89f1_f629079f5ecc442a9cc5a123d0247917~mv2.png` | owner | projects-6 |  | 1.4 MB | 200 |  | `public/assets/images/causes/4c89f1_f629079f5ecc442a9cc5a123d0247917~mv2.png` |  |
| 82 | `4c89f1_8f58a2ccc644432cb96941cf50f664cb.jpg` | owner | about-3-4 | 2655×1772 | 4.0 MB | 200 |  | `public/assets/images/events/4c89f1_8f58a2ccc644432cb96941cf50f664cb.jpg` |  |
| 83 | `4c89f1_9e74fe31b20543e08b9cf444eba4b250~mv2.jpg` | owner | about-3-4 | 5581×3721 | 14.3 MB | 200 | Food Love .jpg | `public/assets/images/events/4c89f1_9e74fe31b20543e08b9cf444eba4b250~mv2.jpg` |  |
| 84 | `4c89f1_affcfbce595248e2b6ee6cc914f417c8~mv2.jpg` | owner | about-3-4 | 1536×2304 | 517 KB | 200 |  | `public/assets/images/events/4c89f1_affcfbce595248e2b6ee6cc914f417c8~mv2.jpg` |  |
| 85 | `4c89f1_c55fcd314baf485c89001bf4fadcce2e~mv2.jpg` | owner | about-3-4 | 2400×3600 | 1.9 MB | 200 | KLP_9117.jpg | `public/assets/images/events/4c89f1_c55fcd314baf485c89001bf4fadcce2e~mv2.jpg` |  |
| 86 | `4c89f1_c63a6524aca847be8119f07a9e1add96~mv2.jpg` | owner | about-3-4 | 3024×4032 | 1.5 MB | 200 | unnamed-6.jpg | `public/assets/images/events/4c89f1_c63a6524aca847be8119f07a9e1add96~mv2.jpg` |  |
| 87 | `4c89f1_c723aae47aea49c3b8d78a85e5e96cfc~mv2.jpg` | owner | about-3-4 | 2304×1536 | 654 KB | 200 | DSC04580.JPG | `public/assets/images/events/4c89f1_c723aae47aea49c3b8d78a85e5e96cfc~mv2.jpg` |  |
| 88 | `4c89f1_c8f9f0bd62104bf294b64198ebecd9b7~mv2.jpg` | owner | about-3-4 | 2048×1365 | 652 KB | 200 | Pilates.jpg | `public/assets/images/events/4c89f1_c8f9f0bd62104bf294b64198ebecd9b7~mv2.jpg` |  |
| 89 | `4c89f1_cb704625d56c446593c8b3675fe576f0~mv2.jpg` | owner | about-3-4 | 1536×2304 | 530 KB | 200 |  | `public/assets/images/events/4c89f1_cb704625d56c446593c8b3675fe576f0~mv2.jpg` |  |
| 90 | `4c89f1_d6bbd768da4348929dff4ad8b97595ac~mv2.jpg` | owner | about-3-4 | 3600×2400 | 1.4 MB | 200 |  | `public/assets/images/events/4c89f1_d6bbd768da4348929dff4ad8b97595ac~mv2.jpg` |  |
| 91 | `4c89f1_dbc8338404304f3e91a50ad01affeb98~mv2.png` | owner | about-3-4 |  | 1.3 MB | 200 |  | `public/assets/images/events/4c89f1_dbc8338404304f3e91a50ad01affeb98~mv2.png` |  |
| 92 | `4c89f1_06bdaa761d694173903af1ba66008ea0~mv2.jpg` | owner | copy-of-services |  | 4.8 MB | 200 |  | `public/assets/images/experiences/4c89f1_06bdaa761d694173903af1ba66008ea0~mv2.jpg` |  |
| 93 | `4c89f1_261221bd80644ded94a28e2c82d14073~mv2.jpg` | owner | copy-of-services |  | 8.7 MB | 200 |  | `public/assets/images/experiences/4c89f1_261221bd80644ded94a28e2c82d14073~mv2.jpg` |  |
| 94 | `4c89f1_5e8bcc4967b1449a9f22f37254c87e80~mv2.jpeg` | owner | copy-of-services |  | 69 KB | 200 |  | `public/assets/images/experiences/4c89f1_5e8bcc4967b1449a9f22f37254c87e80~mv2.jpeg` |  |
| 95 | `4c89f1_68bc43fd07d94c8a81340a9793936b98~mv2.png` | owner | copy-of-services |  | 631 KB | 200 |  | `public/assets/images/experiences/4c89f1_68bc43fd07d94c8a81340a9793936b98~mv2.png` |  |
| 96 | `4c89f1_9650f705e24349fdadf6872e0a9bfc1f~mv2.jpg` | owner | copy-of-services | 2400×2402 | 1.2 MB | 200 |  | `public/assets/images/experiences/4c89f1_9650f705e24349fdadf6872e0a9bfc1f~mv2.jpg` |  |
| 97 | `4c89f1_97e9ade8bacb41188ff431a5aa972085~mv2.jpg` | owner | copy-of-organic-vegetarian-cafe, copy-of-services |  | 348 KB | 200 |  | `public/assets/images/experiences/4c89f1_97e9ade8bacb41188ff431a5aa972085~mv2.jpg` |  |
| 98 | `4c89f1_b1fd44c070514357ae9fa4071a63d9f7~mv2.jpg` | owner | copy-of-services |  | 10.7 MB | 200 |  | `public/assets/images/experiences/4c89f1_b1fd44c070514357ae9fa4071a63d9f7~mv2.jpg` |  |
| 99 | `4c89f1_ccc062038f094942b8603c8925254213~mv2.jpg` | owner | copy-of-services |  | 200 KB | 200 |  | `public/assets/images/experiences/4c89f1_ccc062038f094942b8603c8925254213~mv2.jpg` |  |
| 100 | `4c89f1_c7890b4975da4e7c98048ddaeb6caf46.jpg` | owner | faqs, testamonials | 1024×683 | 224 KB | 200 |  | `public/assets/images/faqs/4c89f1_c7890b4975da4e7c98048ddaeb6caf46.jpg` |  |
| 101 | `4c89f1_05640e985da34de08433d4ca794f3e4e~mv2.jpg` | owner | baliyogaretreat |  | 3 KB | 200 |  | `public/assets/images/home/4c89f1_05640e985da34de08433d4ca794f3e4e~mv2.jpg` |  |
| 102 | `4c89f1_0cc538aab7ea4548aadb0c7334d2beadf000.jpg` | owner | baliyogaretreat | 1920×1080 | 25 KB | 200 |  | `public/assets/images/home/4c89f1_0cc538aab7ea4548aadb0c7334d2beadf000.jpg` |  |
| 103 | `4c89f1_104452e235ca4373ba0df32beca595c7~mv2.jpg` | owner | baliyogaretreat |  | 3 KB | 200 |  | `public/assets/images/home/4c89f1_104452e235ca4373ba0df32beca595c7~mv2.jpg` |  |
| 104 | `4c89f1_180adbc73df5431e8b290b0a1bfcc6b5f000.jpg` | owner | baliyogaretreat |  | 9 KB | 200 |  | `public/assets/images/home/4c89f1_180adbc73df5431e8b290b0a1bfcc6b5f000.jpg` |  |
| 105 | `4c89f1_180adbc73df5431e8b290b0a1bfcc6b5f001.jpg` | owner | baliyogaretreat |  | 102 KB | 200 |  | `public/assets/images/home/4c89f1_180adbc73df5431e8b290b0a1bfcc6b5f001.jpg` |  |
| 106 | `4c89f1_21ba49d6d992447480ce9dc62b4ca607~mv2.jpg` | owner | baliyogaretreat, blog |  | 357 KB | 200 |  | `public/assets/images/home/4c89f1_21ba49d6d992447480ce9dc62b4ca607~mv2.jpg` |  |
| 107 | `4c89f1_369ccd695482466dbd8787e5fd2fcd86~mv2.png` | owner | home | 1748×1240 | 4.1 MB | 200 | 8.png | `public/assets/images/home/4c89f1_369ccd695482466dbd8787e5fd2fcd86~mv2.png` |  |
| 108 | `4c89f1_6dfada4d30d2426996fc6ddb61c2cfb2~mv2.jpg` | owner | baliyogaretreat, blog |  | 142 KB | 200 |  | `public/assets/images/home/4c89f1_6dfada4d30d2426996fc6ddb61c2cfb2~mv2.jpg` |  |
| 109 | `4c89f1_7047879fcf88440987b280c044e62baf~mv2.jpg` | owner | baliyogaretreat |  | 4 KB | 200 |  | `public/assets/images/home/4c89f1_7047879fcf88440987b280c044e62baf~mv2.jpg` |  |
| 110 | `4c89f1_743b1153039c4a2686ba725d78bfc3e0.jpg` | owner | baliyogaretreat, home |  | 3.4 MB | 200 |  | `public/assets/images/home/4c89f1_743b1153039c4a2686ba725d78bfc3e0.jpg` |  |
| 111 | `4c89f1_7a86cc244eea484babe91603fe80b0e7~mv2.jpg` | owner | baliyogaretreat, copy-of-organic-vegetarian-cafe | 999×1129 | 307 KB | 200 | Cuisine | `public/assets/images/home/4c89f1_7a86cc244eea484babe91603fe80b0e7~mv2.jpg` |  |
| 112 | `4c89f1_7b3813fb96fc4553821cdd69ec370fe5~mv2.jpg` | owner | baliyogaretreat | 1280×854 | 268 KB | 200 |  | `public/assets/images/home/4c89f1_7b3813fb96fc4553821cdd69ec370fe5~mv2.jpg` |  |
| 113 | `4c89f1_8e6a05ac9b2d42db9ae4c6fd3fc3b8ecf000.jpg` | owner | baliyogaretreat |  | 53 KB | 200 |  | `public/assets/images/home/4c89f1_8e6a05ac9b2d42db9ae4c6fd3fc3b8ecf000.jpg` |  |
| 114 | `4c89f1_97fe3be85a834a519200f34656d86921~mv2.jpg` | owner | baliyogaretreat |  | 4 KB | 200 |  | `public/assets/images/home/4c89f1_97fe3be85a834a519200f34656d86921~mv2.jpg` |  |
| 115 | `4c89f1_9c9162e81b824ae69ccb14b0aee71139~mv2.jpg` | owner | home | 3000×833 | 985 KB | 200 |  | `public/assets/images/home/4c89f1_9c9162e81b824ae69ccb14b0aee71139~mv2.jpg` |  |
| 116 | `4c89f1_a73768bdc08646d896be8c2e09e4a404.jpg` | owner | baliyogaretreat | 2655×1772 | 3.9 MB | 200 | Stay with us | `public/assets/images/home/4c89f1_a73768bdc08646d896be8c2e09e4a404.jpg` |  |
| 117 | `4c89f1_a971fade1e6542e6bfeb6fd81f17185d~mv2.jpg` | owner | baliyogaretreat |  | 3 KB | 200 |  | `public/assets/images/home/4c89f1_a971fade1e6542e6bfeb6fd81f17185d~mv2.jpg` |  |
| 118 | `4c89f1_b0ed979c5af449b2b06529ad5786f37df000.jpg` | owner | baliyogaretreat |  | 9 KB | 200 |  | `public/assets/images/home/4c89f1_b0ed979c5af449b2b06529ad5786f37df000.jpg` |  |
| 119 | `4c89f1_b0ed979c5af449b2b06529ad5786f37df002.jpg` | owner | baliyogaretreat |  | 219 KB | 200 |  | `public/assets/images/home/4c89f1_b0ed979c5af449b2b06529ad5786f37df002.jpg` |  |
| 120 | `4c89f1_b9584afb727c40058965f58a0cfcd3da.jpg` | owner | baliyogaretreat | 866×960 | 168 KB | 200 | Retreats | `public/assets/images/home/4c89f1_b9584afb727c40058965f58a0cfcd3da.jpg` |  |
| 121 | `4c89f1_bd392a7a09674ee2879505daaa4ce9bef000.jpg` | owner | home | 1920×790 | 9 KB | 200 |  | `public/assets/images/home/4c89f1_bd392a7a09674ee2879505daaa4ce9bef000.jpg` |  |
| 122 | `4c89f1_bf154541a3f84853b0371c0d371e46ea.jpg` | owner | baliyogaretreat | 1439×2159 | 716 KB | 200 | About us | `public/assets/images/home/4c89f1_bf154541a3f84853b0371c0d371e46ea.jpg` |  |
| 123 | `4c89f1_e38a291bcc044e56a4dc856ea08484dc~mv2.jpg` | owner | baliyogaretreat, blog |  | 153 KB | 200 |  | `public/assets/images/home/4c89f1_e38a291bcc044e56a4dc856ea08484dc~mv2.jpg` |  |
| 124 | `4c89f1_e905feb9e473492395092c7e7b51bf4b.jpg` | owner | baliyogaretreat | 854×1280 | 164 KB | 200 | Ayurvedic Spa | `public/assets/images/home/4c89f1_e905feb9e473492395092c7e7b51bf4b.jpg` |  |
| 125 | `4c89f1_ec1bc2ad26284c38bdf33ef614e0b1c5~mv2.jpg` | owner | baliyogaretreat |  | 5 KB | 200 |  | `public/assets/images/home/4c89f1_ec1bc2ad26284c38bdf33ef614e0b1c5~mv2.jpg` |  |
| 126 | `4c89f1_f1b505524fbc4363a8e4ee097cf77b29~mv2.jpg` | owner | baliyogaretreat |  | 3 KB | 200 |  | `public/assets/images/home/4c89f1_f1b505524fbc4363a8e4ee097cf77b29~mv2.jpg` |  |
| 127 | `4c89f1_febed8e36d3846c7817eddfa8c9220cb~mv2.jpg` | owner | baliyogaretreat |  | 5 KB | 200 |  | `public/assets/images/home/4c89f1_febed8e36d3846c7817eddfa8c9220cb~mv2.jpg` |  |
| 128 | `4c89f1_ff87da036b41451c8c93fb57ce3630ac.jpg` | owner | baliyogaretreat, copy-of-general | 5616×3744 | 2.1 MB | 200 | Accommodation | `public/assets/images/home/4c89f1_ff87da036b41451c8c93fb57ce3630ac.jpg` |  |
| 129 | `4c89f1_2f4e52209f9f44409749669e78e50127~mv2.jpg` | owner | copy-of-darshana-veda-spa |  | 1.4 MB | 200 |  | `public/assets/images/host-a-retreat/4c89f1_2f4e52209f9f44409749669e78e50127~mv2.jpg` |  |
| 130 | `4c89f1_a8172b96ac6d49c8a543556eabe74f46~mv2.jpg` | owner | copy-of-darshana-veda-spa, lead-collection-1 | 2800×1867 | 2.0 MB | 200 | Shala .jpg | `public/assets/images/host-a-retreat/4c89f1_a8172b96ac6d49c8a543556eabe74f46~mv2.jpg` |  |
| 131 | `4c89f1_df7354393bac44a4b879941644e5759e~mv2.jpg` | owner | lead-collection-1 |  | 2.3 MB | 200 |  | `public/assets/images/host-a-retreat/4c89f1_df7354393bac44a4b879941644e5759e~mv2.jpg` |  |
| 132 | `4c89f1_fa23ed753a9a4012afc12475d06e5c7cf000.jpg` | owner | copy-of-darshana-veda-spa |  | 414 KB | 200 |  | `public/assets/images/host-a-retreat/4c89f1_fa23ed753a9a4012afc12475d06e5c7cf000.jpg` |  |
| 133 | `4c89f1_2f6162acb4a540ccabda7cc648f26e36~mv2.jpg` | owner | mumbaistationindiancafe |  | 1.1 MB | 200 |  | `public/assets/images/indian-cafe/4c89f1_2f6162acb4a540ccabda7cc648f26e36~mv2.jpg` |  |
| 134 | `4c89f1_37ca570da97a4acb82893a9f8c0c4a2d~mv2.jpg` | owner | mumbaistationindiancafe |  | 1.0 MB | 200 |  | `public/assets/images/indian-cafe/4c89f1_37ca570da97a4acb82893a9f8c0c4a2d~mv2.jpg` |  |
| 135 | `4c89f1_4aeb61f37eec4dbfb26be852491109ce~mv2.jpg` | owner | mumbaistationindiancafe |  | 409 KB | 200 |  | `public/assets/images/indian-cafe/4c89f1_4aeb61f37eec4dbfb26be852491109ce~mv2.jpg` |  |
| 136 | `4c89f1_67c139aaa38f4704b8855ab617692fe0~mv2.jpg` | owner | mumbaistationindiancafe | 1414×2000 | 67 KB | 200 |  | `public/assets/images/indian-cafe/4c89f1_67c139aaa38f4704b8855ab617692fe0~mv2.jpg` |  |
| 137 | `4c89f1_6af07326a82b4e31b8f69b69059c0579~mv2.jpg` | owner | mumbaistationindiancafe | 6000×4000 | 12.8 MB | 200 | TheShalaBali Food-19.jpg | `public/assets/images/indian-cafe/4c89f1_6af07326a82b4e31b8f69b69059c0579~mv2.jpg` |  |
| 138 | `4c89f1_6ef071f28dab4b7ebe1d9fbac2d88f9e~mv2.jpg` | owner | mumbaistationindiancafe |  | 809 KB | 200 |  | `public/assets/images/indian-cafe/4c89f1_6ef071f28dab4b7ebe1d9fbac2d88f9e~mv2.jpg` |  |
| 139 | `4c89f1_86a56ab206e64553b71cc7ffc771e1fd~mv2.jpg` | owner | mumbaistationindiancafe |  | 1.0 MB | 200 |  | `public/assets/images/indian-cafe/4c89f1_86a56ab206e64553b71cc7ffc771e1fd~mv2.jpg` |  |
| 140 | `4c89f1_8a41682319234fd5b02ae7d1a1d78648~mv2.jpg` | owner | mumbaistationindiancafe | 3005×4250 | 1.1 MB | 200 |  | `public/assets/images/indian-cafe/4c89f1_8a41682319234fd5b02ae7d1a1d78648~mv2.jpg` |  |
| 141 | `4c89f1_9fa3b30857a54ee4931991e212371d4c~mv2.jpg` | owner | mumbaistationindiancafe | 3005×4250 | 1.1 MB | 200 |  | `public/assets/images/indian-cafe/4c89f1_9fa3b30857a54ee4931991e212371d4c~mv2.jpg` |  |
| 142 | `4c89f1_c756d8553c444ddfbec42e02be3c3938~mv2.png` | owner | mumbaistationindiancafe |  | 5.4 MB | 200 |  | `public/assets/images/indian-cafe/4c89f1_c756d8553c444ddfbec42e02be3c3938~mv2.png` |  |
| 143 | `4c89f1_f84ac578fc034a299102e287ec450abc~mv2.jpg` | owner | mumbaistationindiancafe |  | 976 KB | 200 |  | `public/assets/images/indian-cafe/4c89f1_f84ac578fc034a299102e287ec450abc~mv2.jpg` |  |
| 144 | `4c89f1_1a4f28c2509b4dbeaea8717fdc870bdc~mv2.jpeg` | owner | copy-of-retreat-packages | 1280×851 | 170 KB | 200 | WhatsApp Image 2026-08-16 at 3.22.11 PM.jpeg | `public/assets/images/panchakarma/4c89f1_1a4f28c2509b4dbeaea8717fdc870bdc~mv2.jpeg` |  |
| 145 | `4c89f1_4e7835023e624170b0eb8b1c4f470b2e~mv2.jpg` | owner | copy-of-retreat-packages | 4160×6240 | 1.1 MB | 200 | croped-09242.jpg | `public/assets/images/panchakarma/4c89f1_4e7835023e624170b0eb8b1c4f470b2e~mv2.jpg` |  |
| 146 | `4c89f1_7d5ec65e7fc148acbb07baff321ae143~mv2.jpg` | owner | copy-of-retreat-packages |  | 2.5 MB | 200 |  | `public/assets/images/panchakarma/4c89f1_7d5ec65e7fc148acbb07baff321ae143~mv2.jpg` |  |
| 147 | `4c89f1_905c666a7fe14b4299273301e9b1ff2e~mv2.jpg` | owner | copy-of-retreat-packages |  | 150 KB | 200 |  | `public/assets/images/panchakarma/4c89f1_905c666a7fe14b4299273301e9b1ff2e~mv2.jpg` |  |
| 148 | `4c89f1_9a94242c54634cfc88d96ae83289da6f~mv2.jpg` | owner | copy-of-retreat-packages | 2000×2555 | 3.4 MB | 200 |  | `public/assets/images/panchakarma/4c89f1_9a94242c54634cfc88d96ae83289da6f~mv2.jpg` |  |
| 149 | `4c89f1_a685b268fb144714970fb60d760a3ff5~mv2.jpg` | owner | copy-of-retreat-packages |  | 2.8 MB | 200 |  | `public/assets/images/panchakarma/4c89f1_a685b268fb144714970fb60d760a3ff5~mv2.jpg` |  |
| 150 | `4c89f1_e146a892637342c9b8236cf0a7d876da~mv2.jpg` | owner | copy-of-retreat-packages |  | 2.1 MB | 200 |  | `public/assets/images/panchakarma/4c89f1_e146a892637342c9b8236cf0a7d876da~mv2.jpg` |  |
| 151 | `4c89f1_0686a676aa8c4bedbf4e93dfb561a87f~mv2.jpg` | owner | retreat-packages | 2048×1366 | 256 KB | 200 | 270ca42a-e5d2-47a8-85b8-38d12028fcd3.jpg | `public/assets/images/retreats/4c89f1_0686a676aa8c4bedbf4e93dfb561a87f~mv2.jpg` |  |
| 152 | `4c89f1_215bb21556714808a864ae73bc676527~mv2.jpg` | owner | darshanavedaspa, retreat-packages |  | 572 KB | 200 |  | `public/assets/images/retreats/4c89f1_215bb21556714808a864ae73bc676527~mv2.jpg` |  |
| 153 | `4c89f1_36a0937b937a4e649d1add201d5b5833~mv2.jpg` | owner | retreat-packages | 2400×1350 | 798 KB | 200 | Campuhan-Ridge-Walk.jpg | `public/assets/images/retreats/4c89f1_36a0937b937a4e649d1add201d5b5833~mv2.jpg` |  |
| 154 | `4c89f1_3f9c97e4ac8e4ed7b3237b6a75cac039~mv2.jpg` | owner | retreat-packages |  | 652 KB | 200 |  | `public/assets/images/retreats/4c89f1_3f9c97e4ac8e4ed7b3237b6a75cac039~mv2.jpg` |  |
| 155 | `4c89f1_64a7cfad49334ac697a72b10f2bc1ce0f000.jpg` | owner | retreat-packages |  | 16 KB | 200 |  | `public/assets/images/retreats/4c89f1_64a7cfad49334ac697a72b10f2bc1ce0f000.jpg` |  |
| 156 | `4c89f1_75c441ef91284bcf905c9fa9f5a72e6e~mv2.jpg` | owner | retreat-packages |  | 9.3 MB | 200 |  | `public/assets/images/retreats/4c89f1_75c441ef91284bcf905c9fa9f5a72e6e~mv2.jpg` |  |
| 157 | `4c89f1_77fee1c3e92b4b8a82a5f6c9c550f1ac~mv2.jpg` | owner | retreat-packages | 6000×4000 | 9.8 MB | 200 | yoga.jpg | `public/assets/images/retreats/4c89f1_77fee1c3e92b4b8a82a5f6c9c550f1ac~mv2.jpg` |  |
| 158 | `4c89f1_a726b82932c24e3d87fbaa79b29e5ca5~mv2.jpg` | owner | retreat-packages |  | 277 KB | 200 |  | `public/assets/images/retreats/4c89f1_a726b82932c24e3d87fbaa79b29e5ca5~mv2.jpg` |  |
| 159 | `4c89f1_d67a0e095e76496c81bdfffda7ea207d~mv2.jpg` | owner | retreat-packages |  | 485 KB | 200 |  | `public/assets/images/retreats/4c89f1_d67a0e095e76496c81bdfffda7ea207d~mv2.jpg` |  |
| 160 | `4c89f1_e0e21b8b4ef14d1d848ba0455431e44b~mv2.jpg` | owner | retreat-packages | 4793×3834 | 13.2 MB | 200 | lunch.jpg | `public/assets/images/retreats/4c89f1_e0e21b8b4ef14d1d848ba0455431e44b~mv2.jpg` |  |
| 161 | `4c89f1_03aa35902b284b0f8536073bac223c0d~mv2.jpg` | owner | copy-of-the-shala-cafe-1, general-6-1 | 5419×3613 | 13.7 MB | 200 | floating breakfast 2.jpg | `public/assets/images/shala-cafe/4c89f1_03aa35902b284b0f8536073bac223c0d~mv2.jpg` |  |
| 162 | `4c89f1_25ccbcd9ee564f49b649e744fda76fdb~mv2.jpg` | owner | copy-of-the-shala-cafe | 5716×3811 | 8.4 MB | 200 | Mumbai lunch.jpg | `public/assets/images/shala-cafe/4c89f1_25ccbcd9ee564f49b649e744fda76fdb~mv2.jpg` |  |
| 163 | `4c89f1_314ca5256b784846b9a4399b043a92fa~mv2.jpg` | owner | copy-of-the-shala-cafe-1, general-6-1 |  | 14.3 MB | 200 |  | `public/assets/images/shala-cafe/4c89f1_314ca5256b784846b9a4399b043a92fa~mv2.jpg` |  |
| 164 | `4c89f1_3ca196d1b83f48378a7c1b703b556491.jpg` | owner | copy-of-the-shala-cafe | 960×960 | 146 KB | 200 | Coconut Chutney | `public/assets/images/shala-cafe/4c89f1_3ca196d1b83f48378a7c1b703b556491.jpg` |  |
| 165 | `4c89f1_3d63b57558004addbe2aa2519e37e963~mv2.jpg` | owner | copy-of-organic-vegetarian-cafe | 650×434 | 145 KB | 200 |  | `public/assets/images/shala-cafe/4c89f1_3d63b57558004addbe2aa2519e37e963~mv2.jpg` |  |
| 166 | `4c89f1_468f8163e31848b8a27bfc2719459641~mv2.jpg` | owner | copy-of-the-shala-cafe |  | 426 KB | 200 |  | `public/assets/images/shala-cafe/4c89f1_468f8163e31848b8a27bfc2719459641~mv2.jpg` |  |
| 167 | `4c89f1_4e1888ca747742cb93712bb5d0c80849~mv2.png` | owner | copy-of-organic-vegetarian-cafe | 1030×526 | 966 KB | 200 |  | `public/assets/images/shala-cafe/4c89f1_4e1888ca747742cb93712bb5d0c80849~mv2.png` |  |
| 168 | `4c89f1_732768fa33814f84b5d8962402078331~mv2.jpg` | owner | copy-of-the-shala-cafe |  | 976 KB | 200 |  | `public/assets/images/shala-cafe/4c89f1_732768fa33814f84b5d8962402078331~mv2.jpg` |  |
| 169 | `4c89f1_8d1736e33cc643d1a3c6e1a2b437b096~mv2.jpg` | owner | copy-of-organic-vegetarian-cafe | 1334×1000 | 542 KB | 200 |  | `public/assets/images/shala-cafe/4c89f1_8d1736e33cc643d1a3c6e1a2b437b096~mv2.jpg` |  |
| 170 | `4c89f1_9442257b1bd845929c549b7d05498af4~mv2.jpg` | owner | copy-of-the-shala-cafe |  | 855 KB | 200 |  | `public/assets/images/shala-cafe/4c89f1_9442257b1bd845929c549b7d05498af4~mv2.jpg` |  |
| 171 | `4c89f1_a4b63e9d46224f1a9a705cba2ce94f13~mv2.jpg` | owner | copy-of-the-shala-cafe-1, general-6-1 |  | 1.1 MB | 200 |  | `public/assets/images/shala-cafe/4c89f1_a4b63e9d46224f1a9a705cba2ce94f13~mv2.jpg` |  |
| 172 | `4c89f1_b5432b5f49364d85be38bb41b73cf82b~mv2.jpg` | owner | copy-of-the-shala-cafe-1, general-6-1 |  | 298 KB | 200 |  | `public/assets/images/shala-cafe/4c89f1_b5432b5f49364d85be38bb41b73cf82b~mv2.jpg` |  |
| 173 | `4c89f1_b780f298831f46a7b217d8b46a444004~mv2.png` | owner | copy-of-organic-vegetarian-cafe | 850×364 | 476 KB | 200 |  | `public/assets/images/shala-cafe/4c89f1_b780f298831f46a7b217d8b46a444004~mv2.png` |  |
| 174 | `4c89f1_cede29c775484acfa04a5e68512d8c51.jpg` | owner | copy-of-the-shala-cafe-1 | 3744×5616 | 1.4 MB | 200 | The Shala Full-40.jpg | `public/assets/images/shala-cafe/4c89f1_cede29c775484acfa04a5e68512d8c51.jpg` |  |
| 175 | `4c89f1_e315c109962345c48088e963891e7344.jpg` | owner | copy-of-organic-vegetarian-cafe | 958×1280 | 590 KB | 200 |  | `public/assets/images/shala-cafe/4c89f1_e315c109962345c48088e963891e7344.jpg` |  |
| 176 | `4c89f1_e8a033b3386745c3b856f4cf5eca0c70~mv2.jpg` | owner | copy-of-the-shala-cafe-1, general-6-1 | 3886×4857 | 10.5 MB | 200 | cooking class mery.jpg | `public/assets/images/shala-cafe/4c89f1_e8a033b3386745c3b856f4cf5eca0c70~mv2.jpg` |  |
| 177 | `4c89f1_ec53e408d2c94f65bcb4ad9d031267ae.jpg` | owner | copy-of-organic-vegetarian-cafe | 999×1335 | 512 KB | 200 |  | `public/assets/images/shala-cafe/4c89f1_ec53e408d2c94f65bcb4ad9d031267ae.jpg` |  |
| 178 | `4c89f1_efbc7536f3df423cbf5f951f81d63840~mv2.jpg` | owner | general-6-1 | 6000×4000 | 19.7 MB | 200 | cafe.jpg | `public/assets/images/shala-cafe/4c89f1_efbc7536f3df423cbf5f951f81d63840~mv2.jpg` |  |
| 179 | `4c89f1_f1415d1f60564d21bf24edff523030fc~mv2.jpg` | owner | copy-of-organic-vegetarian-cafe | 999×1335 | 482 KB | 200 |  | `public/assets/images/shala-cafe/4c89f1_f1415d1f60564d21bf24edff523030fc~mv2.jpg` |  |
| 180 | `4c89f1_5d417439a7eb443cb602e639ca06f157~mv2.jpg` | owner | 29 pages incl. about-1, about-3, about-3-1 |  | 509 KB | 200 |  | `public/assets/images/shared/4c89f1_5d417439a7eb443cb602e639ca06f157~mv2.jpg` |  |
| 181 | `4c89f1_778fac54c048423d9ecc09bc967b3d8b.jpg` | owner | 5 pages incl. blog, copy-of-organic-vegetarian-cafe, faqs | 940×300 | 167 KB | 200 |  | `public/assets/images/shared/4c89f1_778fac54c048423d9ecc09bc967b3d8b.jpg` |  |
| 182 | `4c89f1_95fe79ffff084547b6bd690fc8cfda44~mv2.jpg` | owner | copy-of-darshana-veda-spa, copy-of-general, copy-of-villa-rooms, retreat-packages |  | 197 KB | 200 |  | `public/assets/images/shared/4c89f1_95fe79ffff084547b6bd690fc8cfda44~mv2.jpg` |  |
| 183 | `4c89f1_a3a4cc47ae204b5e9256bb898fab244b~mv2.jpg` | owner | copy-of-darshana-veda-spa, copy-of-general, copy-of-villa-rooms, retreat-packages |  | 12.9 MB | 200 |  | `public/assets/images/shared/4c89f1_a3a4cc47ae204b5e9256bb898fab244b~mv2.jpg` |  |
| 184 | `4c89f1_d79480eaef6d4095800dbd11c00386b5~mv2.jpg` | owner | 5 pages incl. copy-of-darshana-veda-spa, copy-of-general, copy-of-villa-rooms | 3000×2000 | 1.7 MB | 200 | The Shala Full-59_edited_edited.jpg, The Shala bal | `public/assets/images/shared/4c89f1_d79480eaef6d4095800dbd11c00386b5~mv2.jpg` |  |
| 185 | `4c89f1_02c5734c96004065bb109fe46e3d4f8e~mv2.png` | owner | darshanavedaspa |  | 2.2 MB | 200 |  | `public/assets/images/spa/4c89f1_02c5734c96004065bb109fe46e3d4f8e~mv2.png` |  |
| 186 | `4c89f1_05cb8091d392497fa3a6909cb41de63a~mv2.png` | owner | darshanavedaspa |  | 2.5 MB | 200 |  | `public/assets/images/spa/4c89f1_05cb8091d392497fa3a6909cb41de63a~mv2.png` |  |
| 187 | `4c89f1_0670203e92e144c3aced8ac62b587137f002.jpg` | owner | darshanavedaspa |  | 126 KB | 200 |  | `public/assets/images/spa/4c89f1_0670203e92e144c3aced8ac62b587137f002.jpg` |  |
| 188 | `4c89f1_1e5d65615ebb4bb3b96f5c83f65832f1~mv2.png` | owner | darshanavedaspa |  | 2.3 MB | 200 |  | `public/assets/images/spa/4c89f1_1e5d65615ebb4bb3b96f5c83f65832f1~mv2.png` |  |
| 189 | `4c89f1_1eb0901338a440e997b122e0f65dde00~mv2.png` | owner | darshanavedaspa |  | 2.6 MB | 200 |  | `public/assets/images/spa/4c89f1_1eb0901338a440e997b122e0f65dde00~mv2.png` |  |
| 190 | `4c89f1_23cb67e82a6e4537922eaa9188119304~mv2.jpg` | owner | darshanavedaspa |  | 2.6 MB | 200 |  | `public/assets/images/spa/4c89f1_23cb67e82a6e4537922eaa9188119304~mv2.jpg` |  |
| 191 | `4c89f1_28db924036c3480c9ef53f6eebbe9076~mv2.png` | owner | darshanavedaspa |  | 2.3 MB | 200 |  | `public/assets/images/spa/4c89f1_28db924036c3480c9ef53f6eebbe9076~mv2.png` |  |
| 192 | `4c89f1_2dedc563b456415c8e759bda02cd44c2~mv2.jpg` | owner | darshanavedaspa |  | 215 KB | 200 |  | `public/assets/images/spa/4c89f1_2dedc563b456415c8e759bda02cd44c2~mv2.jpg` |  |
| 193 | `4c89f1_2fc23dbb15e841e68a0104a571114231~mv2.png` | owner | darshanavedaspa |  | 2.3 MB | 200 |  | `public/assets/images/spa/4c89f1_2fc23dbb15e841e68a0104a571114231~mv2.png` |  |
| 194 | `4c89f1_4e5311b5c11448b9b7610e1cc2ad68df~mv2.png` | owner | darshanavedaspa |  | 2.2 MB | 200 |  | `public/assets/images/spa/4c89f1_4e5311b5c11448b9b7610e1cc2ad68df~mv2.png` |  |
| 195 | `4c89f1_516be2daf3d540f690e955a031158292~mv2.png` | owner | darshanavedaspa |  | 2.3 MB | 200 |  | `public/assets/images/spa/4c89f1_516be2daf3d540f690e955a031158292~mv2.png` |  |
| 196 | `4c89f1_62b4426e12f4404a8087a3e670e49e19~mv2.png` | owner | darshanavedaspa |  | 2.2 MB | 200 |  | `public/assets/images/spa/4c89f1_62b4426e12f4404a8087a3e670e49e19~mv2.png` |  |
| 197 | `4c89f1_72b871b3835f4bd9b477d0490757050f~mv2.jpg` | owner | darshanavedaspa |  | 3.2 MB | 200 |  | `public/assets/images/spa/4c89f1_72b871b3835f4bd9b477d0490757050f~mv2.jpg` |  |
| 198 | `4c89f1_74d1431e50e1407fa38a3edd83753d5a~mv2.jpg` | owner | darshanavedaspa |  | 477 KB | 200 |  | `public/assets/images/spa/4c89f1_74d1431e50e1407fa38a3edd83753d5a~mv2.jpg` |  |
| 199 | `4c89f1_75f09adea41646e487acecb0324e5f49~mv2.png` | owner | darshanavedaspa |  | 2.2 MB | 200 |  | `public/assets/images/spa/4c89f1_75f09adea41646e487acecb0324e5f49~mv2.png` |  |
| 200 | `4c89f1_7e5504818bbd48adb4c2b5e9847920b2~mv2.png` | owner | darshanavedaspa |  | 2.2 MB | 200 |  | `public/assets/images/spa/4c89f1_7e5504818bbd48adb4c2b5e9847920b2~mv2.png` |  |
| 201 | `4c89f1_7fa8a9e928ec4931a70728b0f43f63c1~mv2.png` | owner | darshanavedaspa |  | 2.3 MB | 200 |  | `public/assets/images/spa/4c89f1_7fa8a9e928ec4931a70728b0f43f63c1~mv2.png` |  |
| 202 | `4c89f1_868bd93e094c449f8085c55b6dc94f2e~mv2.jpg` | owner | darshanavedaspa |  | 747 KB | 200 |  | `public/assets/images/spa/4c89f1_868bd93e094c449f8085c55b6dc94f2e~mv2.jpg` |  |
| 203 | `4c89f1_8a2b354ae514497ebba2ee1df37f3bc5~mv2.jpg` | owner | darshanavedaspa |  | 569 KB | 200 |  | `public/assets/images/spa/4c89f1_8a2b354ae514497ebba2ee1df37f3bc5~mv2.jpg` |  |
| 204 | `4c89f1_94797e16a5424ceea27e30e2a1ffea6b~mv2.jpg` | owner | darshanavedaspa |  | 1.3 MB | 200 |  | `public/assets/images/spa/4c89f1_94797e16a5424ceea27e30e2a1ffea6b~mv2.jpg` |  |
| 205 | `4c89f1_b7065da1f13c43de9bed8e4e21ccd209~mv2.jpg` | owner | about-3-4, darshanavedaspa | 6000×4000 | 13.1 MB | 200 | massage.jpg | `public/assets/images/spa/4c89f1_b7065da1f13c43de9bed8e4e21ccd209~mv2.jpg` |  |
| 206 | `4c89f1_bfd4c51805124a6986fa298ff1a9f0fd~mv2.png` | owner | darshanavedaspa |  | 2.2 MB | 200 |  | `public/assets/images/spa/4c89f1_bfd4c51805124a6986fa298ff1a9f0fd~mv2.png` |  |
| 207 | `4c89f1_c3fa0e5369094fdeb212c570dd7b4c7b~mv2.jpg` | owner | darshanavedaspa |  | 683 KB | 200 |  | `public/assets/images/spa/4c89f1_c3fa0e5369094fdeb212c570dd7b4c7b~mv2.jpg` |  |
| 208 | `4c89f1_c99f7f4b32994620be04ce96a38cbd57~mv2.jpg` | owner | darshanavedaspa | 6000×4000 | 14.1 MB | 200 | spa beds.jpg | `public/assets/images/spa/4c89f1_c99f7f4b32994620be04ce96a38cbd57~mv2.jpg` |  |
| 209 | `4c89f1_d18a33af3cc14642b9ca2d0e3647d93f~mv2.png` | owner | darshanavedaspa |  | 2.2 MB | 200 |  | `public/assets/images/spa/4c89f1_d18a33af3cc14642b9ca2d0e3647d93f~mv2.png` |  |
| 210 | `4c89f1_d69c989b6bf447a8882536bbaf866ca0~mv2.png` | owner | darshanavedaspa |  | 2.3 MB | 200 |  | `public/assets/images/spa/4c89f1_d69c989b6bf447a8882536bbaf866ca0~mv2.png` |  |
| 211 | `4c89f1_de4376139e81411faf4a886beebd9ed5~mv2.png` | owner | darshanavedaspa |  | 2.4 MB | 200 |  | `public/assets/images/spa/4c89f1_de4376139e81411faf4a886beebd9ed5~mv2.png` |  |
| 212 | `4c89f1_f7193a855426487886e782417ce03c74~mv2.png` | owner | darshanavedaspa |  | 192 KB | 200 |  | `public/assets/images/spa/4c89f1_f7193a855426487886e782417ce03c74~mv2.png` |  |
| 213 | `4c89f1_f857d5216908438f8f5ea7fa625a8a7c~mv2.jpg` | owner | darshanavedaspa |  | 581 KB | 200 |  | `public/assets/images/spa/4c89f1_f857d5216908438f8f5ea7fa625a8a7c~mv2.jpg` |  |
| 214 | `15501a32e0b449b48fa639fd8e6935aa.png` | wix-library | baliyogaretreat |  | 4 KB | 200 |  | `public/assets/icons/15501a32e0b449b48fa639fd8e6935aa.png (verify)` | Wix shared library graphic (social/share icon) — confirm use |
| 215 | `30cbe93446884c319a6fbd971b340396.png` | wix-library | baliyogaretreat |  | 6 KB | 200 |  | `public/assets/icons/30cbe93446884c319a6fbd971b340396.png (verify)` | Wix shared library graphic (social/share icon) — confirm use |
| 216 | `51595f20831643d4b785234fa63218d1.png` | wix-library | baliyogaretreat |  | 4 KB | 200 |  | `public/assets/icons/51595f20831643d4b785234fa63218d1.png (verify)` | Wix shared library graphic (social/share icon) — confirm use |
| 217 | `52b5a40f3b0c4b6c9423b71489ba1bb0.png` | wix-library | blog |  | 5 KB | 200 |  | `public/assets/icons/52b5a40f3b0c4b6c9423b71489ba1bb0.png (verify)` | Wix shared library graphic (social/share icon) — confirm use |
| 218 | `6ea5b4a88f0b4f91945b40499aa0af00.png` | wix-library | about-1 |  | 1 KB | 200 |  | `public/assets/icons/6ea5b4a88f0b4f91945b40499aa0af00.png (verify)` | Wix shared library graphic (social/share icon) — confirm use |
| 219 | `72a44c1b3b7c450287b9f4dd21be1548.png` | wix-library | baliyogaretreat |  | 3 KB | 200 |  | `public/assets/icons/72a44c1b3b7c450287b9f4dd21be1548.png (verify)` | Wix shared library graphic (social/share icon) — confirm use |
| 220 | `767689ba34f143a1a36e49b5f2fbe31a.png` | wix-library | blog |  | 4 KB | 200 |  | `public/assets/icons/767689ba34f143a1a36e49b5f2fbe31a.png (verify)` | Wix shared library graphic (social/share icon) — confirm use |
| 221 | `c7d035ba85f6486680c2facedecdcf4d.png` | wix-library | about-1 |  | 2 KB | 200 |  | `public/assets/icons/c7d035ba85f6486680c2facedecdcf4d.png (verify)` | Wix shared library graphic (social/share icon) — confirm use |
| 222 | `d8dc0a23fbd84f41a68ac2b74e86398a.png` | wix-library | blog |  | 3 KB | 200 |  | `public/assets/icons/d8dc0a23fbd84f41a68ac2b74e86398a.png (verify)` | Wix shared library graphic (social/share icon) — confirm use |
| 223 | `da7ef6dd1302486c9a67baebe4b364bc.png` | wix-library | blog |  | 24 KB | 200 |  | `public/assets/icons/da7ef6dd1302486c9a67baebe4b364bc.png (verify)` | Wix shared library graphic (social/share icon) — confirm use |
| 224 | `e0678ef25486466ba65ef6ad47b559e1.png` | wix-library | blog |  | 3 KB | 200 |  | `public/assets/icons/e0678ef25486466ba65ef6ad47b559e1.png (verify)` | Wix shared library graphic (social/share icon) — confirm use |
| 225 | `e9bb463a1bc4434c9d33b81b1fe937f5.png` | wix-library | blog |  | 3 KB | 200 |  | `public/assets/icons/e9bb463a1bc4434c9d33b81b1fe937f5.png (verify)` | Wix shared library graphic (social/share icon) — confirm use |
| 226 | `4c89f1_01c0e071291043379df7f9b2497918e5~mv2.webp` | derivative | blog |  |  | 403 |  | `— (do not download)` | WebP derivative (403); original JPG/PNG sibling is 200 |
| 227 | `4c89f1_14ea37cc89464145835168a31eef1c88~mv2.webp` | derivative | blog |  |  | 403 |  | `— (do not download)` | WebP derivative (403); original JPG/PNG sibling is 200 |
| 228 | `4c89f1_1d2a768d8b05497bb966177f13b4c8ce~mv2.webp` | derivative | blog |  |  | 403 |  | `— (do not download)` | WebP derivative (403); original JPG/PNG sibling is 200 |
| 229 | `4c89f1_21ba49d6d992447480ce9dc62b4ca607~mv2.webp` | derivative | baliyogaretreat, blog |  |  | 403 |  | `— (do not download)` | WebP derivative (403); original JPG/PNG sibling is 200 |
| 230 | `4c89f1_3fcb8eb0a6e04d1baaf4fc06eb378fe7~mv2.webp` | derivative | blog |  |  | 403 |  | `— (do not download)` | WebP derivative (403); original JPG/PNG sibling is 200 |
| 231 | `4c89f1_6dfada4d30d2426996fc6ddb61c2cfb2~mv2.webp` | derivative | baliyogaretreat, blog |  |  | 403 |  | `— (do not download)` | WebP derivative (403); original JPG/PNG sibling is 200 |
| 232 | `4c89f1_88b5032d50014abea10d49e8188ad221~mv2.webp` | derivative | blog |  |  | 403 |  | `— (do not download)` | WebP derivative (403); original JPG/PNG sibling is 200 |
| 233 | `4c89f1_8a2a4c25b8384c10a6c6b24f16952384~mv2_d_1200_1200_s_2.webp` | derivative | blog | 1200×1200 |  | 403 |  | `— (do not download)` | WebP derivative (403); original JPG/PNG sibling is 200 |
| 234 | `4c89f1_a10ca08a890340b8964bc41a003db193.webp` | derivative | blog |  |  | 403 |  | `— (do not download)` | WebP derivative (403); original JPG/PNG sibling is 200 |
| 235 | `4c89f1_cdf1b1d261b5499084e28da80fb475a1~mv2.webp` | derivative | blog |  |  | 403 |  | `— (do not download)` | WebP derivative (403); original JPG/PNG sibling is 200 |
| 236 | `4c89f1_e38a291bcc044e56a4dc856ea08484dc~mv2.webp` | derivative | baliyogaretreat, blog |  |  | 403 |  | `— (do not download)` | WebP derivative (403); original JPG/PNG sibling is 200 |
| 237 | `4c89f1_edfd0004fbf64bb3b8c953cfa85628c1~mv2.webp` | derivative | blog |  |  | 403 |  | `— (do not download)` | WebP derivative (403); original JPG/PNG sibling is 200 |
| 238 | `a3c153_0225bd316b414eb88d3358ba488bde5e~mv2.jpg` | template | about-1 |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 239 | `a3c153_18f1357650bc445092f511e9ca9ed710~mv2.png` | template | about-1 |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 240 | `a3c153_1c21a3cd7c0947ce88d31a8eef96503a~mv2.png` | template | about-1 |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 241 | `a3c153_20122b9a32cc4e9a9faca835b9f82d14~mv2.jpg` | template | 5 pages incl. about-1, about-3, about-3-1 | 2832×1409 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 242 | `a3c153_2f3667a1cdf7440090d33d9145f6ba02~mv2.jpg` | template | about-1 |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 243 | `a3c153_4c9ff7f594c1414f9f7894e514098894~mv2.jpg` | template | projects-6 |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 244 | `a3c153_52445da233db4ab6ba88eab5b99650de~mv2.jpg` | template | about-1 |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 245 | `a3c153_52461577c23b481ca63064298ce9268b~mv2.jpg` | template | projects-6 |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 246 | `a3c153_55e9a7e84ab5470e851e20135735b170~mv2.png` | template | about-1 |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 247 | `a3c153_8d1a945d2515486c824c292509617008~mv2.jpg` | template | about-3-4 |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 248 | `a3c153_8f40ef988e774bf68d7d402bbe334e8e~mv2.png` | template | about-1 |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 249 | `a3c153_91dc165103f9438bbc9a0216b278a11d~mv2.jpg` | template | about-1 |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 250 | `a3c153_a701bcdd2cf641deba1dbf0dbe6c5487~mv2.png` | template | about-1 |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 251 | `a3c153_bbf1019446e34069a3b96c18f172e810~mv2.jpg` | template | about-3, about-3-1, about-3-2, about-3-3 | 8661×4724 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 252 | `a3c153_d272d21cf9724e17be9e01ffe7173b88~mv2.jpg` | template | about-1 |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 253 | `a3c153_ea643fa0bec04606b8e22e51e7d510b4~mv2.jpg` | template | about-1 |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 254 | `a9ff3b_03155a7e79bd4cca9aaf3f0e98378100.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 255 | `a9ff3b_0d3eafb99c46485fb45425b766126631.jpg` | template | shop |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 256 | `a9ff3b_119100d8c0144221b2f6733f4d205d2e.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 257 | `a9ff3b_1400c2edbac2483a8b993b4521f0cd06.jpg` | template | shop |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 258 | `a9ff3b_18ef3d9c8058444ea08059329237a1f2.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 259 | `a9ff3b_1e66a0a1739b419093a0a7ad9fd2b029.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 260 | `a9ff3b_1eec973ae9eb43f4bca9876e5d90f6fa.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 261 | `a9ff3b_20ebbe17c66f40e2b27c99c900b98547.jpg` | template | shop |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 262 | `a9ff3b_2d250e05a86a4a9ca4040269efba6101.jpg` | template | shop |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 263 | `a9ff3b_2dc1e209d10945a7b4329d2328dfcd7b.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 264 | `a9ff3b_368c28dfbd9a4a47a7db85fe6c956996.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 265 | `a9ff3b_4121bbe6516d48278536acade5b02421.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 266 | `a9ff3b_4181ada6b8024111b57df31ca9a73863.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 267 | `a9ff3b_4766ba1e7c6c487f942d21ff962d902d.jpg` | template | shop |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 268 | `a9ff3b_491534cec39f49308db9a5d2832e8f74.jpg` | template | shop |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 269 | `a9ff3b_4b1550da0a014dea9d8dca081ce5b424.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 270 | `a9ff3b_5ad4db0e94b946eba4e163a42377b4c4.jpg` | template | shop |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 271 | `a9ff3b_5bc54b597d67423d8022157cef968f7b.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 272 | `a9ff3b_5e32b6d9419343c29c68e9173b5461e0.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 273 | `a9ff3b_779cdb925bf04bf58be912cb8a946432.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 274 | `a9ff3b_81b96254c64f474094480755abaa92d6.jpg` | template | shop |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 275 | `a9ff3b_849d96e85f044bc7ae0a47f78d9a898b.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 276 | `a9ff3b_85862b70d0e54a26a0fecd55385e27a3.jpg` | template | shop |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 277 | `a9ff3b_8f92a97f61524c7fae0cdfca65d91568.jpg` | template | shop |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 278 | `a9ff3b_9293cc23a71f4499a56e551ab2ac87c5.jpg` | template | shop |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 279 | `a9ff3b_9928686dcfa740bd802821d0b6f4ac03.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 280 | `a9ff3b_a71f9a5bd820418dbafbf56578b34c2a.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 281 | `a9ff3b_a7a3f25cb2fb46dcabf34d079498f371.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 282 | `a9ff3b_a943ab358e5b4980be1f449ea375e949.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 283 | `a9ff3b_b2039d1e6a954631a41b85d674400f19.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 284 | `a9ff3b_bdeb8c91d120488a9cdc483553fc87de.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 285 | `a9ff3b_bee01048c58e4d97b640f34075df0f3c.jpg` | template | shop |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 286 | `a9ff3b_c36aa04b212b4449a8081572e513a1a5.jpg` | template | shop |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 287 | `a9ff3b_c6158b4d41784ae8b08337a331e1de7f.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 288 | `a9ff3b_e7d0c0544be94523905cb9b9c7720cf9.jpg` | template | shop |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 289 | `a9ff3b_ea68bd8398ac489a8e4e8b99755f96b0.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 290 | `a9ff3b_ecd1a8bfeaf34bcd897c87f58cef90d4.jpg` | template | shop |  |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 291 | `a9ff3b_ed3b544c319b4fad9c222c791a997832.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |
| 292 | `a9ff3b_f9b427f2017641468a0b939aa26777b5.jpg` | template | shop | 1000×1000 |  | not checked |  | `— (do not download)` | Wix template stock — exclude |