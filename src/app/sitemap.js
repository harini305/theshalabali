import { allPosts, archiveEntries, pageCount } from '@/lib/blog';
import { roomSlugs } from '@/data/pages/rooms';
import { siteUrl } from '@/data/site';

const pages = [
  '', '/retreat-packages', '/host-a-retreat', '/panchakarma-retreats', '/darshana-veda-spa', '/indian-cafe',
  ...roomSlugs.map((r) => `/accommodation/${r}`), '/experiences', '/faqs', '/testimonials', '/yoga-retreat-and-ayurvedic-spa',
  '/organic-vegetarian-cafe', '/the-shala-cafe', '/la-vie-en-rose-pilates-retreat', '/ayurvedic-wellness-retreat', '/causes-we-love', '/blog',
];

export default function sitemap() {
  return [
    ...pages.map((p) => ({ url: `${siteUrl}${p}`, changeFrequency: 'monthly', priority: p === '' ? 1 : 0.7 })),
    ...Array.from({ length: pageCount - 1 }, (_, i) => ({ url: `${siteUrl}/blog/page/${i + 2}`, priority: 0.3 })),
    ...allPosts.map((p) => ({ url: `${siteUrl}/blog/${p.slug}`, lastModified: p.publishedDate || undefined, priority: 0.5 })),
    ...archiveEntries.map((a) => ({ url: `${siteUrl}/blog/archive/${a.year}/${String(a.month).padStart(2, '0')}`, priority: 0.2 })),
  ];
}
