import PageHero from '@/components/sections/PageHero';
import { FeatureSplit, FineList, SectionHead } from '@/components/sections/Blocks';
import MagneticButton from '@/components/ui/MagneticButton';
import { mailto, site } from '@/data/site';
import styles from './offer.module.css';

/*
  theshalabali.com/lead-collection-1. The offer window (October 1st–10th, 2026) has passed, so the page says so
  instead of presenting an expired offer as live. The run-together benefit line is split into its three items.
*/
const p = (id) => `4c89f1_${id}`;

export const metadata = {
  title: 'SPECIAL OFFER',
  description: 'Last Minute Availability for retreat hosts at The Shala Bali.',
  alternates: { canonical: '/special-offer' },
  robots: { index: false },
};

const offer = ['15% off our Best Available Rates', 'Host stays free!', 'Exclusive complimentary farewell dinner'];
const benefits = [
  'Retreat co-ordinators available 7 days',
  'Retreat host and their respective partner receive all meals complimentary.',
  'Retreat host receives one complimentary Bali Massage per week.',
  'Daily breakfast buffet included for all rooms.',
  'Welcome flower Mandala in Yoga Shala. Complimentary use of Yoga Shala.',
  'Use of yoga props including blankets, straps, bolsters, chairs, and white board.',
  'Daily morning clean of yoga room + more frequently as requested.',
  'Drinking water & herbal tea station',
  '24 hour security',
  'Landscaped grounds, pool, and lounging areas.',
  'Daily servicing of rooms.',
];

export default function SpecialOfferPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Special Offer' }]}
        eyebrow="Opening October 1st - 10th, 2026"
        title={{ before: 'Last Minute', script: 'Availability' }}
        intro="Reserve your retreat and enjoy a curated collection of exclusive benefits designed to enhance your hosting experience."
      >
        <MagneticButton href="/host-a-retreat">Host a retreat</MagneticButton>
      </PageHero>

      <div className={`container ${styles.expiredWrap}`}>
        <p className={styles.expired} role="note" data-reveal="up">
          <span className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 20 20" width="20" height="20">
              <circle cx="10" cy="10" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
              <path d="M10 5.5v5.2l3.2 2" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </span>
          <span>
            This offer was available from October 1st to 10th, 2026 and has now ended.{' '}
            <a href={mailto(site.emails.enquiry, 'Inquiry')}>Ask us about current availability for your retreat</a>.
          </span>
        </p>
      </div>

      <FeatureSplit image={p('a8172b96ac6d49c8a543556eabe74f46~mv2.jpg')} alt="The open-sided yoga shala with mats laid out" ratio="4 / 3" labelledBy="offer-list">
        <SectionHead eyebrow="Be the first to book and unlock this exclusive last minute offer." title="Secure your retreat dates and enjoy special offer" id="offer-list" size="h3" />
        <FineList items={offer} numbered />
      </FeatureSplit>

      <FeatureSplit image={p('df7354393bac44a4b879941644e5759e~mv2.jpg')} alt="Aerial view of the long salt water pool beside a thatched roof" ratio="3 / 4" reverse tone="sand" labelledBy="benefits-title">
        <SectionHead eyebrow="For retreat hosts" title="Exclusive Host" script="Benefits" id="benefits-title" size="h3" />
        <FineList items={benefits} />
      </FeatureSplit>
    </>
  );
}
