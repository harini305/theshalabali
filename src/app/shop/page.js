import PageHero from '@/components/sections/PageHero';
import MagneticButton from '@/components/ui/MagneticButton';

/*
  theshalabali.com/shop is an unedited Wix Stores demo (12 "I'm a product" items with stock photos and
  sample A$ prices). None of it is The Shala Bali's merchandise, so no products are shown and
  /product-page/* falls through to the 404 page. See docs/CONTENT_DECISIONS.md.
*/
export const metadata = {
  title: 'Shop',
  robots: { index: false },
  alternates: { canonical: '/shop' },
};

export default function ShopPage() {
  return (
    <PageHero crumbs={[{ label: 'Shop' }]} title={{ script: 'Shop' }} intro="There are no products available in the online shop at the moment.">
      <MagneticButton href="/">Home</MagneticButton>
    </PageHero>
  );
}
