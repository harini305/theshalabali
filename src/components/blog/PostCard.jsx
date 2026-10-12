import Link from 'next/link';
import Img from '@/components/ui/Img';
import { formatDate } from '@/lib/blog';
import styles from './Blog.module.css';

export default function PostCard({ post, priority = false, lead = false }) {
  const href = `/blog/${post.slug}`;
  const meta = [formatDate(post.publishedDate), post.readingTime].filter(Boolean).join(' · ');
  return (
    <article className={`${styles.card} ${lead ? styles.lead : ''}`} data-stagger-item>
      <Link href={href} className={styles.cardLink}>
        <span className={styles.cardMedia}>
          {post.coverImage ? <Img id={post.coverImage} alt="" fill sizes={lead ? '(min-width: 1024px) 60vw, 100vw' : '(min-width: 1024px) 40vw, 100vw'} priority={priority} /> : <span className={styles.noImg} aria-hidden="true" />}
        </span>
        <span className={styles.cardBody}>
          {meta && <span className={styles.meta}>{meta}</span>}
          <h2 className={`display ${styles.cardTitle}`}>{post.title}</h2>
          {post.excerpt && <span className={styles.excerpt}>{post.excerpt}</span>}
          <span className={styles.more}>
            <span className={styles.moreLabel}>Read more</span> <span className={styles.moreArrow} aria-hidden="true">→</span>
          </span>
        </span>
      </Link>
    </article>
  );
}
