# Blog extraction report

Extracted 2026-10-12 from the live site https://www.theshalabali.com. The outputs are:

- `src/data/blog/posts.json`: 75 post objects, newest first.
- `src/data/blog/archive.json`: 32 sidebar Archive entries in live order.
- `public/assets/images/blog/`: 139 image files.

## Method

1. **Fetching.** Plain HTTP GET with a Chrome User-Agent, one request at a time with a 0.5 s pause. Fetched pages: the 75 URLs in `docs/source-audit/blog-post-urls.txt`, `/blog`, `/blog/page/2` to `/blog/page/8`, and `/blog-feed.xml`. Headless Chrome was not needed, because Wix server-renders the full post body.
2. **Post body.** Taken from the server-rendered Ricos viewer markup (`article [data-hook="post-description"] [data-id="content-viewer"]`). The page has no Ricos/Draft JSON for the body. Each `div[data-breakout]` child is one block, mapped like this:
   - Ricos `<p>`, and `<div data-ricos-paragraph>` with text, become `p`.
   - `h3` becomes `h3` and `h4` becomes `h4`. Live `h5` (54) and `h6` (9) become `h4`, and the block keeps the original tag in a `sourceTag` field. There were no h1 or h2 in post bodies.
   - `ul` and `ol` become lists. Every list item is level 1; there are no nested lists.
   - `figure-IMAGE` becomes `image`. The media ID and source width/height come from `wow-image` `data-image-info`, and `alt` comes from the `<img>`.
   - `figure-VIDEO` becomes `video`. Its URL comes from the post's `embedMedia` in the blog feed JSON.
   - Inline markup is reduced to `<strong>`, `<em>`, `<u>`, `<br>` and `<a href>`. All Wix classes and spans are removed.
   - Empty paragraphs and Ricos "empty-line" spacers are dropped. Headings that contain only whitespace are dropped too: there are many on the live pages, so the raw markup has more h4/h5/h6 tags than the JSON.
   - Text is otherwise verbatim, including typos and curly quotes.
3. **Metadata.**
   - `title`: the H1 on the post page.
   - `publishedDate`: JSON-LD `BlogPosting.datePublished`. It matched the blog feed's `firstPublishedDate` for all 75 posts.
   - `displayDate` (for example "Apr 2, 2019"): `[data-hook=time-ago]`.
   - `readingTime` (for example "8 min read"): `[data-hook=time-to-read]`.
   - `excerpt`: the blog feed's `excerpt` (Wix's truncated auto-excerpt, ending "...").
   - `ogDescription`: `og:description`.
   - `metaDescription`: `<meta name="description">`, which exists on only 5 posts and is `null` elsewhere.
   - `seoTitle`: `<title>`.
   - `hashtags`: from the feed.
   - `coverImage`: the feed's `media.wixMedia.image.id`. It was cross-checked against the JSON-LD/og image and there were no mismatches.
4. **Order and flags.**
   - `index` is the 1-based position across `/blog` pages 1–8, at 10 posts per page. That order agrees exactly with `publishedDate` descending; there were no conflicts.
   - `featured: true` is set for the 10 posts in the live "Featured Posts" widget. They match the inventory list exactly.
   - The 4 slugs without a date in the URL do have publish dates: `cleanse-and-nourish-your-liver-with-ayurveda` 2019-07-16, `the-myth-of-personal-destiny` 2019-06-18, `the-bliss-of-chocolate-an-ayurveda-perspective` 2019-06-04, `calming-your-mind-with-shirodhara` 2019-05-29.
   - The slug date often differs from the publish date (for example `2019/02/08/breath-awareness` was published 2019-04-02). Slugs are kept exactly as they are.
5. **Links.**
   - All 318 in-body links are Wix hashtag links (`https://www.theshalabali.com/blog/hashtags/<tag>`). Their original hrefs are kept, but these hashtag pages will not exist in the clone, so the app needs to decide how to handle them.
   - No body link pointed to `/single-post/…`, so no link was rewritten to `/blog/<slug>`.
6. **Images.**
   - Each image was downloaded from `https://static.wixstatic.com/media/<ID>/v1/fit/w_2560,h_2560,q_90/<ID>` with an `Accept` header that excludes webp. All 139 downloads succeeded on the first URL, so the original-file fallback was never used.
   - File format matches the file extension for every file (131 JPEG, 8 PNG).
   - In `body[].width/height` and `coverWidth/coverHeight`, width and height are the downloaded file's pixel size, read from the file header. The Wix source size is kept as `originalWidth/originalHeight`.
7. **Archive.** Parsed from the `/blog` sidebar `archive-widget-root` list. It has 32 entries, from July 2020 back to October 2016, and the counts add up to 75.

The scripts are in the session scratchpad (`…/scratchpad/blog/`): `fetch.py`, `parse.py` and `download.py`.

## Results

| Item | Count |
|---|---|
| Posts extracted, with non-empty bodies | **75 / 75** |
| Body blocks | 1635 p, 155 h4, 6 h3, 54 ul, 9 ol, 140 image, 1 video. There are no quotes or dividers on the live posts. |
| Unique images downloaded | **139** files, 85.45 MB in total (about 82 MiB on disk) |
| Image references in posts.json (covers + inline) | 212. All 212 were checked and exist with size > 0. |
| Excluded template images (`a9ff3b_` / `a3c153_`) | **0**: none occur in any post |
| External images (not downloaded) | 1: `https://img.youtube.com/vi/XHbMT0nfNQA/mqdefault.jpg`, which is the cover (`coverExternalUrl`) and video thumbnail (`externalUrl`) of the dragonfruit post |
| Archive entries | 32 |

**Verification.** For each post, the text of all extracted blocks (with whitespace and tags removed) was compared with the text of the live content-viewer markup. All 75 posts matched exactly, so no body text was lost.

## Caveats and gaps

- **Author.** The post pages do not show an author byline, so `author` is `null` for every post. The JSON-LD author is kept in `schemaAuthor`: "The Shala Bali" on 74 posts and "Jero Ari" on 1.
- **Covers.** 3 posts have no cover image: `2020/01/16/materialism-vs-spiritualism` and `2019/02/04/capricorn-solar-eclipse` have no image at all, and the dragonfruit sample post (`2013/05/01/this-is-the-title-of-your-first-image-post`) uses only the YouTube thumbnail. On 72 posts the cover image is also the first inline body image, which is how the live page shows it, so the renderer should avoid showing it twice.
- **Captions.** No image captions exist on the live posts, so `caption` is always `null`. 25 of the 140 inline images have alt text.
- **Headings.** Mapping h5/h6 to h4 loses the visual size difference. Use `sourceTag` if exact sizing matters. Inline bold inside headings was flattened to plain text (`text`).
- **RSS feed.** `/blog-feed.xml` currently has no items, so it was not used.
- **Template post.** The dragonfruit post is a leftover Wix sample post; its slug is from 2013, but it was published 2016-10-13. It is featured, and it is last in the index (#75).
