import PageHero from '@/components/sections/PageHero';
import { FeatureSplit, FineList, MediaReveal, SectionHead, Statement } from '@/components/sections/Blocks';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import MagneticButton from '@/components/ui/MagneticButton';
import { mediaItems } from '@/lib/assets';
import { mailto } from '@/data/site';
import styles from './pilates.module.css';

/*
  theshalabali.com/about-3-4: a co-branded Pilates retreat with The Collective Club. The published date
  ("October 2-7") has no year and is likely past, so the page carries a note. Enquiries go to the partner's
  address exactly as on the source. Spelling corrected: "pictureque", "it's central location".
*/
const p = (id) => `4c89f1_${id}`;

export const metadata = {
  title: 'Pilates Retreat',
  description: 'La Vie en Rose Pilates Retreat: an inspired collaboration between The Collective Club and The Shala Bali Retreat & Spa.',
  alternates: { canonical: '/la-vie-en-rose-pilates-retreat' },
};

const join = mailto('thecollectiveclub.retreats@gmail.com', 'La Vie en Rose Retreat ');

const included = [
  '5 nights & 6 days in the beautiful accommodation of The Shala Bali, a tropical sanctuary hidden in the heart of Ubud, surrounded by rice paddies & coconut trees!',
  'Airport transfer; pick up + drop off',
  'Minibus transfer for classes and activities',
  'x5 Reformer Pilates classes at The Collective Club’s new studio in Ubud centre',
  'x4 Mat Pilates classes at The Shala Bali’s picturesque paddy view studio',
  'Guided sunrise rice paddy walk through the vibrant green fields, starting your day with some fresh air and getting those steps in.',
  'A water adventure to cool off from the day followed by a destination lunch in a scenic venue',
  'Daily wake up tea or coffee served to you in the comfort of your bed.',
  'Daily coconuts and smoothies after your Reformer classes',
  'x2 meals a day included: A delicious buffet breakfast will be awaiting you every morning after your class. The Shala Bali kitchen is vegetarian, vegan and gluten free friendly. Either lunch or dinner will be included (per day) depending on the day’s schedule, at the two different restaurants situated in the retreat centre.',
  'A healthy cooking class in house where you can learn the Balinese cuisine using only the freshest, organic ingredients!',
  'Indulge in a treatment at our nature spa, Darshana Veda 60 minute Balinese massage with a mini facial and finish it off with a relaxing flower bath',
  'Photos to capture the hard work, memories and friendships you will have created during retreat',
  'A beautiful pool amongst the palms to rejuvenate, relax and recover',
  'The chance to explore Ubud and enjoy all the sights it has to offer',
  'Extra surprises along the way!',
];

const gallery = ['affcfbce595248e2b6ee6cc914f417c8~mv2.jpg', 'd6bbd768da4348929dff4ad8b97595ac~mv2.jpg', 'b7065da1f13c43de9bed8e4e21ccd209~mv2.jpg', '9e74fe31b20543e08b9cf444eba4b250~mv2.jpg', '8f58a2ccc644432cb96941cf50f664cb.jpg', 'cb704625d56c446593c8b3675fe576f0~mv2.jpg'].map(p);
const galleryAlt = ['Fresh coconuts', 'Jungle landscape near Ubud', 'Balinese massage', 'A spread of vegetarian food', 'Bedroom at The Shala Bali', 'Pilates with a fit ball'];

export default function PilatesPage() {
  const items = mediaItems(gallery, (i) => galleryAlt[i]);
  const schedule = mediaItems([p('dbc8338404304f3e91a50ad01affeb98~mv2.png')], 'La Vie en Rose retreat schedule, day 1 to day 6');
  return (
    <>
      <PageHero
        crumbs={[{ label: 'La Vie en Rose' }]}
        eyebrow="La Vie en Rose · October 2-7"
        title={{ before: 'Pilates & Pamper', script: 'Retreat' }}
        intro="La Vie en Rose Pilates Retreat is an inspired collaboration between Ubud's hottest Pilates studio - The Collective Club and the stunning Shala Bali Retreat & Spa."
      >
        <MagneticButton href={join}>Join us!</MagneticButton>
      </PageHero>

      <div className={`container ${styles.noteWrap}`}>
        <p className={styles.note} role="note" data-reveal="up">
          <span className={styles.noteIcon} aria-hidden="true">
            <svg viewBox="0 0 20 20" width="20" height="20">
              <circle cx="10" cy="10" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
              <path d="M10 5.5v5.2l3.2 2" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </span>
          <span>Dates as originally published. For upcoming dates, please contact The Collective Club.</span>
        </p>
      </div>

      <Statement label="5 nights · 6 days">
        Immerse yourself for 5 nights and 6 days of invigorating reformer and mat Pilates classes, innovative, nourishing vegetarian cuisine, adventure and pampering — all set against the breathtaking backdrop of rice paddies, lush jungle and coconut trees.
      </Statement>

      <section className={styles.included} aria-labelledby="lver-incl">
        <div className={`container ${styles.includedGrid}`}>
          <div className={styles.includedAside}>
            <SectionHead eyebrow="Nestled in serene nature" title="What's" script="included" id="lver-incl" size="h3" />
            <p className={styles.text} data-reveal="up">
              Nestled in serene nature, The Shala Bali’s luxurious resort amenities combined with its central location, just a stone’s throw away from the heart of Ubud, make this the perfect playground for your week of wellness.
            </p>
          </div>
          <div className={styles.includedMedia}>
            <MediaReveal id={p('c63a6524aca847be8119f07a9e1add96~mv2.jpg')} alt="Jungle path to a thatched bungalow" ratio="16 / 9" parallax={0.06} sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div className={styles.includedList}>
            <FineList items={included} numbered columns={2} />
          </div>
        </div>
      </section>

      <FeatureSplit image={p('c723aae47aea49c3b8d78a85e5e96cfc~mv2.jpg')} alt="Reformer Pilates class" ratio="3 / 4" reverse labelledBy="lver-pilates">
        <SectionHead eyebrow="Mat & Reformer" title="The" script="Pilates" id="lver-pilates" size="h3" />
        <p className={styles.text} data-reveal="up">
          The Mat Pilates classes will be hosted in house in the beautiful outdoor studio space. The classes will involve using equipment such as the fit ball, weights, ankle weights and resistance bands. Each class will vary in different Pilates exercises ensuring you’re working all the muscles of the body in dynamic and challenging ways.
        </p>
        <p className={styles.text} data-reveal="up">
          The Reformer Pilates classes will be held at The Collective Club’s new larger studio in the centre of Ubud. You will be guided through 5 different reformer classes throughout your retreat, challenging your strength, flexibility and stability. After class you can enjoy a fresh coconut or protein smoothie whilst sitting amongst the palm trees and listen to the sound of streaming water.
        </p>
      </FeatureSplit>

      <section className={styles.schedule} aria-labelledby="lver-schedule">
        <div className="container">
          <SectionHead eyebrow="Select to enlarge" title="Schedule" id="lver-schedule" align="center" />
          <div className={styles.scheduleImg} data-reveal="up">
            <GalleryGrid items={schedule} label="Retreat schedule" columns={1} ratio="923 / 662" className={styles.single} />
          </div>
        </div>
      </section>

      <section className={styles.gallery} aria-label="Retreat photos">
        <div className="container">
          <GalleryGrid items={items} label="La Vie en Rose retreat photos" bento />
          <p className={styles.closing} data-reveal="up">
            La Vie en Rose Retreat is the transformative escape from every day life that you have been waiting for!
          </p>
          <div className={styles.cta} data-reveal="up">
            <MagneticButton href={join}>Join us!</MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
