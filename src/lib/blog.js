import posts from '@/data/blog/posts.json';
import archive from '@/data/blog/archive.json';

// 75 posts extracted verbatim from theshalabali.com (docs/BLOG_EXTRACTION_REPORT.md), newest first.
export const PER_PAGE = 10;
export const allPosts = posts;
export const archiveEntries = archive;
export const pageCount = Math.ceil(posts.length / PER_PAGE);

export function getPage(n) {
  return posts.slice((n - 1) * PER_PAGE, n * PER_PAGE);
}

export function getPost(slug) {
  return posts.find((p) => p.slug === slug) || null;
}

export function getNeighbours(slug) {
  const i = posts.findIndex((p) => p.slug === slug);
  return { newer: posts[i - 1] || null, older: posts[i + 1] || null };
}

export const featuredPosts = posts.filter((p) => p.featured);
export const recentPosts = posts.slice(0, 10);

export function postsInMonth(year, month) {
  return posts.filter((p) => {
    if (!p.publishedDate) return false;
    const d = new Date(p.publishedDate);
    return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === month;
  });
}

export function formatDate(iso) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

/**
 * Allow-list sanitiser for the scraped rich text: keeps <strong>, <em>, <u>, <br>; drops every other tag
 * and attribute. Links in the posts all point to the source's /blog/hashtags/* pages, which are not part of
 * this site, so anchors are unwrapped to plain text.
 */
export function cleanHtml(html = '') {
  return html
    .replace(/<a\b[^>]*>/gi, '')
    .replace(/<\/a>/gi, '')
    .replace(/<(\/?)(strong|em|u|b|i)\b[^>]*>/gi, '<$1$2>')
    .replace(/<br\s*\/?>/gi, '<br>')
    .replace(/<(?!\/?(strong|em|u|b|i)>|br>)[^>]*>/gi, '');
}
