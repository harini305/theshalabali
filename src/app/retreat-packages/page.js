import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import AccommodationOptions from '@/components/sections/AccommodationOptions';
import { FeatureSplit, FineList, SectionHead } from '@/components/sections/Blocks';
import PackageCard from '@/components/cards/PackageCard';
import ScrollSwap from '@/components/sections/ScrollSwap';
import MagneticButton from '@/components/ui/MagneticButton';
import { retreats as r } from '@/data/pages/retreats';
import { accommodationOptions } from '@/data/accommodation-options';
import styles from './retreats.module.css';

export const metadata = {
  title: { absolute: r.meta.title },
  description: r.meta.description,
  alternates: { canonical: '/retreat-packages' },
};

// One photo per reason (all from this page's own media), shown in the sticky stage as each reason scrolls by.
const APART_IMAGES = [
  { id: '4c89f1_215bb21556714808a864ae73bc676527~mv2.jpg', alt: 'Flower bath with floating petals' },
  { id: '4c89f1_36a0937b937a4e649d1add201d5b5833~mv2.jpg', alt: 'Campuhan Ridge walk through green hills' },
  { id: '4c89f1_a726b82932c24e3d87fbaa79b29e5ca5~mv2.jpg', alt: 'Guest relaxing by the salt water infinity pool' },
  { id: '4c89f1_75c441ef91284bcf905c9fa9f5a72e6e~mv2.jpg', alt: 'Two guests in a seated yoga pose' },
  { id: '4c89f1_d67a0e095e76496c81bdfffda7ea207d~mv2.jpg', alt: 'Balinese blessing ceremony' },
  { id: '4c89f1_e0e21b8b4ef14d1d848ba0455431e44b~mv2.jpg', alt: 'Colourful vegetarian lunch plates' },
  { id: '4c89f1_3f9c97e4ac8e4ed7b3237b6a75cac039~mv2.jpg', alt: 'Mat Pilates among tropical plants' },
  { id: '4c89f1_a3a4cc47ae204b5e9256bb898fab244b~mv2.jpg', alt: 'Deluxe room with a carved wooden bed' },
];

function FeatureItem({ item }) {
  if (typeof item === 'string') return item;
  if (item.spa)
    return (
      <>
        Luxurious spa treatments in our nature spa <Link href="/darshana-veda-spa">(see menu)</Link> with lush organic treatment products made in house.
      </>
    );
  if (item.experiences)
    return (
      <>
        Curated in house experiences from Balinese vegetarian cooking classes to natural beauty product making. <Link href="/experiences">Experiences Menu</Link>
      </>
    );
  return null;
}

export default function RetreatPackagesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Retreat Packages' }]}
        title={{ before: 'Personalized', script: 'Retreats' }}
        intro={[r.lead.join('').replace(/\s+\.$/, '.'), `${r.intro}you time.`]}
        image={r.hero}
      >
        <MagneticButton href="#journeys">Choose your journey</MagneticButton>
      </PageHero>

      <ScrollSwap
        compact
        labelledBy="apart-title"
        head={<SectionHead eyebrow="Why The Shala Bali" title={`${r.apart.title[0]} ${r.apart.title[1]}`} id="apart-title" size="h2" />}
        items={r.apart.items.map((text, i) => ({ text, image: APART_IMAGES[i % APART_IMAGES.length] }))}
      />

      <section id="journeys" className={styles.journeys} aria-labelledby="journey-title">
        <div className="container">
          <div className={styles.journeyHead}>
            <SectionHead eyebrow="Retreat Packages" title={r.journeyTitle} id="journey-title" />
          </div>
          <div className={styles.packages} data-stagger>
            {r.packages.map((p, i) => (
              <PackageCard key={p.slug} pkg={p} footnote={r.footnote} index={i} />
            ))}
          </div>
        </div>
      </section>

      {r.features.map((f, i) => (
        <FeatureSplit key={f.id} image={f.image.id} alt={f.image.alt} reverse={i % 2 === 1} ratio="4 / 5" tone={i % 2 ? 'sand' : 'ivory'} labelledBy={`feat-${f.id}`}>
          <SectionHead eyebrow={`0${i + 1}`} title={f.title} id={`feat-${f.id}`} size="h3" />
          <FineList items={f.items.map((it, k) => <FeatureItem key={k} item={it} />)} />
        </FeatureSplit>
      ))}

      <AccommodationOptions options={accommodationOptions.retreats} />
    </>
  );
}
