import PageHero from '@/components/sections/PageHero';
import PostCard from './PostCard';
import { ArchiveChips, FeaturedStrip, Pagination } from './BlogLayout';
import { allPosts, getPage, pageCount } from '@/lib/blog';
import styles from './Blog.module.css';

export default function BlogListing({ page }) {
  const posts = getPage(page);
  const [first, ...rest] = posts;
  return (
    <>
      <PageHero
        crumbs={page === 1 ? [{ label: 'Blog' }] : [{ label: 'Blog', href: '/blog' }, { label: `Page ${page}` }]}
        eyebrow={`${allPosts.length} articles · Page ${page} of ${pageCount}`}
        title={{ before: 'The Shala Bali', script: 'Blog' }}
        intro="We share news, information and any updates about The Shala Bali, as well as nourishing articles about Yoga, wellness and soul-feeding readings."
        size="compact"
      />
      <section className={styles.listSection} aria-label={page === 1 ? 'Latest posts' : `Posts, page ${page}`}>
        <div className="container">
          <div className={styles.list} data-stagger>
            <PostCard post={first} priority lead />
            {rest.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
          <Pagination current={page} total={pageCount} />
        </div>
      </section>
      {page === 1 && <FeaturedStrip />}
      <ArchiveChips />
    </>
  );
}
