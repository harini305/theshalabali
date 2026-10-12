import BlogListing from '@/components/blog/BlogListing';

export const metadata = {
  title: { absolute: 'BLOG | Ubud | The Shala Bali' },
  description:
    'We share news, information and any updates about The Shala Bali, as well as nourishing articles about Yoga, wellness and soul-feeding readings.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndex() {
  return <BlogListing page={1} />;
}
