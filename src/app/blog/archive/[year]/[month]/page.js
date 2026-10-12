import { notFound } from 'next/navigation';
import PageHero from '@/components/sections/PageHero';
import PostCard from '@/components/blog/PostCard';
import { ArchiveChips } from '@/components/blog/BlogLayout';
import { archiveEntries, postsInMonth } from '@/lib/blog';
import styles from '@/components/blog/Blog.module.css';

export const dynamicParams = false;

export function generateStaticParams() {
  return archiveEntries.map((a) => ({ year: String(a.year), month: String(a.month).padStart(2, '0') }));
}

function entryFor(year, month) {
  return archiveEntries.find((a) => a.year === Number(year) && a.month === Number(month));
}

export async function generateMetadata({ params }) {
  const { year, month } = await params;
  const e = entryFor(year, month);
  return e ? { title: { absolute: `Blog – ${e.label} | The Shala Bali` }, robots: { index: false } } : {};
}

export default async function ArchivePage({ params }) {
  const { year, month } = await params;
  const entry = entryFor(year, month);
  if (!entry) notFound();
  const posts = postsInMonth(Number(year), Number(month));
  return (
    <>
      <PageHero crumbs={[{ label: 'Blog', href: '/blog' }, { label: 'Archive' }]} eyebrow={`${entry.count} ${entry.count === 1 ? 'post' : 'posts'}`} title={{ script: entry.label }} size="compact" />
      <section className={styles.listSection} aria-label={`Posts from ${entry.label}`}>
        <div className="container">
          <div className={styles.list} data-stagger>
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
      <ArchiveChips active={`/blog/archive/${year}/${month}`} />
    </>
  );
}
