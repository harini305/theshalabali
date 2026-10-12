# Premium redesign — design system and motion

**Date:** 2026-10-12 · Replaces the faithful-clone styling. Content, photography, video, logo and data files are
unchanged (see CONTENT_DECISIONS.md); only the design changed.

## Direction
Premium resort look in a warm luxury palette (revised on request: new colour theme, larger header, refined fonts).
**No page uses an image in its heading section**: every hero is typographic. Logo, photography, video and copy are the originals.

| Token | Value | Use |
|---|---|---|
| Bone / Paper / Sand | `#F4EFE8` / `#FAF7F2` / `#E9DFD2` | Page, cards, warm bands |
| Deep (espresso) | `#1E1915` | Dark bands, footer, menu overlay, buttons |
| Ink / Muted | `#1F1B17` / `#5F574E` | Text (muted 6.1:1 on bone) |
| Bronze accent / accent-text / accent-light | `#A57A4C` / `#7E5A33` / `#D8B98E` | Graphics & large text / small text (5.8:1) / on dark (9.6:1) |
| Bronze line | `#B8976A` | Hairlines, ornaments |

Type: **Cormorant Garamond** 500 for display, with its italic as the accent voice (replacing the Tangerine script),
and **Manrope** for body text, navigation and labels. Header: 88px (72px when scrolled), 15px sentence-case nav from
1360px wide, Menu overlay below that.

## Components
`PageHero` (typographic hero + drawn Bodhi-leaf SVG + ambient light + scroll cue), `SectionHead`, `Statement`,
`MediaReveal`, `FeatureSplit`, `FineList`, `ImageCard`, `HorizontalRail`, `Stats`, `ContactPanel`
(`src/components/sections/Blocks.jsx`), `MagneticButton`, `PackageCard`, `RoomProfile`, bento `GalleryGrid`,
`Slideshow`, `Lightbox`, `Accordion`, full-screen `MobileNav` overlay, mega-menu `DesktopNav`.
Layout: centred typographic heroes, square corners (2px), hairline rules, generous spacing.

## Motion (GSAP 3.15 + ScrollTrigger, SplitText, DrawSVG)
| Effect | Where |
|---|---|
| Hero: masked line/char rise (SplitText), leaf line drawing (DrawSVG), staggered fades | Every page hero |
| Scroll-in masked line reveals for headings | Section titles, footer wordmark |
| Word-by-word brightening scrubbed to scroll | Statements, legacy testimonial |
| Image mask wipe + settle from zoom; parallax drift (desktop) | Feature images, arches, cover images |
| Video frame expands from inset rounded card to full bleed (scrub) | Home, legacy home |
| Pinned horizontal rail (desktop) / swipe (touch) | Home "Explore" |
| Count-up figures | Home facts |
| Staggered batch reveals | Cards, lists, galleries |
| Hide-on-scroll / frosted header; mask-wipe menu overlay with rising links | Global |

Hover (understated by request; no custom cursor, magnetic or tilt effects): square-cornered buttons with a hairline
arrow that extends, slow image zoom, rolling nav text, mega-menu cards, underline sweeps.

All motion is created in a page-scoped `gsap.context` (reverted on navigation) and disabled under
`prefers-reduced-motion`; content is fully visible without JavaScript. Pointer effects only run on fine pointers.
