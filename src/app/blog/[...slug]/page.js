import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MediaReveal } from '@/components/sections/Blocks';
import LeafLine from '@/components/ui/LeafLine';
import Img from '@/components/ui/Img';
import { allPosts, cleanHtml, formatDate, getNeighbours, getPost } from '@/lib/blog';
import styles from '@/components/blog/Blog.module.css';

export const dynamicParams = false;

// Segments can arrive percent-encoded (e.g. the "tārā" post), so decode before matching the stored slug.
const slugKey = (segments) => segments.map((s) => decodeURIComponent(s)).join('/');

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug.split('/') }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slugKey(slug));
  if (!post) return {};
  const description = post.metaDescription || post.ogDescription?.slice(0, 200) || post.excerpt;
  return {
    title: { absolute: `${post.seoTitle || post.title} | The Shala Bali` },
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description,
      publishedTime: post.publishedDate || undefined,
      ...(post.coverImage ? { images: [`/assets/images/blog/${post.coverImage}`] } : {}),
    },
  };
}

function Block({ block, index, cover }) {
  switch (block.type) {
    case 'p':
      return <p dangerouslySetInnerHTML={{ __html: cleanHtml(block.html) }} />;
    case 'h2':
    case 'h3':
      return <h2>{block.text}</h2>;
    case 'h4':
      return <h3>{block.text}</h3>;
    case 'ul':
    case 'ol': {
      const List = block.type;
      return (
        <List>
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: cleanHtml(item) }} />
          ))}
        </List>
      );
    }
    case 'image':
      // The cover is shown above the body; skip it when it is repeated as the first image.
      if (!block.id || (index === 0 && block.id === cover)) return null;
      return (
        <figure className={styles.figure} data-reveal="up">
          <Img id={block.id} alt={block.alt || ''} sizes="(min-width: 1024px) 760px, 100vw" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    case 'video':
      return (
        <p>
          <a className={styles.video} href={block.url} target="_blank" rel="noopener noreferrer">
            ▶ Watch the video on YouTube<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </p>
      );
    case 'quote':
      return <blockquote dangerouslySetInnerHTML={{ __html: cleanHtml(block.html) }} />;
    case 'divider':
      return <hr />;
    default:
      return null;
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slugKey(slug));
  if (!post) notFound();
  const { newer, older } = getNeighbours(post.slug);
  const meta = [formatDate(post.publishedDate), post.readingTime].filter(Boolean).join(' · ');

  return (
    <article aria-labelledby="post-title">
      <header className={styles.postHero} data-hero>
        <LeafLine className={styles.postLeaf} hero />
        <div className="narrow">
          <nav aria-label="Breadcrumb" className={styles.crumbs} data-hero-fade>
            <Link href="/">Home</Link> / <Link href="/blog">Blog</Link>
          </nav>
          {meta && (
            <p className="eyebrow" data-hero-fade>
              {meta}
            </p>
          )}
          <h1 id="post-title" className={`display ${styles.postTitle}`} data-hero-split>
            {post.title}
          </h1>
        </div>
      </header>
      {post.coverImage && (
        <div className={`container ${styles.cover}`}>
          <MediaReveal id={post.coverImage} alt="" ratio={`${post.coverWidth || 16} / ${post.coverHeight || 10}`} sizes="(min-width: 1280px) 1100px, 100vw" parallax={0.1} />
        </div>
      )}
      <div className={`narrow ${styles.body}`}>
        {post.body.map((b, i) => (
          <Block key={i} block={b} index={i} cover={post.coverImage} />
        ))}
        {post.hashtags?.length > 0 && (
          <ul className={styles.tags} aria-label="Tags">
            {post.hashtags.map((t) => (
              <li key={t}>#{t}</li>
            ))}
          </ul>
        )}
      </div>
      <nav className={styles.neighbours} aria-label="More posts">
        <div className={`container ${styles.neighboursGrid}`}>
          {older ? (
            <Link href={`/blog/${older.slug}`} rel="prev" className={styles.neighbour}>
              <small>← Previous post</small>
              <span>{older.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {newer && (
            <Link href={`/blog/${newer.slug}`} rel="next" className={`${styles.neighbour} ${styles.next}`}>
              <small>Next post →</small>
              <span>{newer.title}</span>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
