import Link from 'next/link';
import Img from '@/components/ui/Img';
import { archiveEntries, featuredPosts } from '@/lib/blog';
import styles from './Blog.module.css';

export function Pagination({ current, total }) {
  const href = (n) => (n === 1 ? '/blog' : `/blog/page/${n}`);
  return (
    <nav className={styles.pager} aria-label="Blog pages">
      {current > 1 && (
        <Link href={href(current - 1)} rel="prev" aria-label="Previous page">
          ←
        </Link>
      )}
      {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
        <Link key={n} href={href(n)} aria-current={n === current ? 'page' : undefined} aria-label={`Page ${n}`}>
          {n}
        </Link>
      ))}
      {current < total && (
        <Link href={href(current + 1)} rel="next" aria-label="Next page">
          →
        </Link>
      )}
    </nav>
  );
}

/** Month archive as pill links (the source's sidebar "Archive"). */
export function ArchiveChips({ active }) {
  return (
    <section className={styles.archiveSection} aria-labelledby="archive-title">
      <div className="container">
        <p className="eyebrow" id="archive-title" data-reveal="fade">
          Archive
        </p>
        <ul className={styles.chips} data-stagger>
          {archiveEntries.map((a) => {
            const href = `/blog/archive/${a.year}/${String(a.month).padStart(2, '0')}`;
            return (
              <li key={a.label} data-stagger-item>
                <Link href={href} aria-current={active === href ? 'page' : undefined}>
                  {a.label} <span>{a.count}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/** The source's "Featured Posts" widget as a horizontally scrolling strip. */
export function FeaturedStrip() {
  return (
    <section className={styles.featuredSection} aria-labelledby="featured-title">
      <div className="container">
        <h2 id="featured-title" className={`display ${styles.featuredTitle}`} data-split>
          Featured <span className="script">Posts</span>
        </h2>
      </div>
      <ul className={styles.featured} data-stagger>
        {featuredPosts.map((p) => (
          <li key={p.slug} data-stagger-item>
            <Link href={`/blog/${p.slug}`} className={styles.featuredLink}>
              <span className={styles.featuredImg}>{p.coverImage && <Img id={p.coverImage} alt="" fill sizes="320px" />}</span>
              <span className={styles.featuredName}>{p.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
