import { notFound, redirect } from 'next/navigation';
import BlogListing from '@/components/blog/BlogListing';
import { pageCount } from '@/lib/blog';

export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: pageCount - 1 }, (_, i) => ({ n: String(i + 2) }));
}

export async function generateMetadata({ params }) {
  const { n } = await params;
  return { title: { absolute: `BLOG – page ${n} | Ubud | The Shala Bali` }, alternates: { canonical: `/blog/page/${n}` } };
}

export default async function BlogPage({ params }) {
  const { n } = await params;
  const page = Number(n);
  if (page === 1) redirect('/blog');
  if (!Number.isInteger(page) || page < 1 || page > pageCount) notFound();
  return <BlogListing page={page} />;
}
