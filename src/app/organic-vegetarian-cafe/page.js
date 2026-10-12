import PageHero from '@/components/sections/PageHero';
import { CardGrid, FeatureSplit, FineList, ImageCard, MediaReveal, SectionHead, Statement } from '@/components/sections/Blocks';
import MagneticButton from '@/components/ui/MagneticButton';
import { mailto, site } from '@/data/site';
import styles from './organic.module.css';

// Verbatim from theshalabali.com/copy-of-organic-vegetarian-cafe (older, orphaned cafe page). The dead
// "Organic Cafe Menu" button is not reproduced. Spelling corrected: "flare" → "flair".
const p = (id) => `4c89f1_${id}`;
const words = ['Vegan friendly', 'Gluten free options', 'RAW delights', 'Fresh baked breads', 'Organic', 'Cooking Lessons', 'Made with LOVE', 'Yummy'];
const meals = [
  { label: 'BREAKFAST', id: p('8d1736e33cc643d1a3c6e1a2b437b096~mv2.jpg') },
  { label: 'LUNCH', id: p('e315c109962345c48088e963891e7344.jpg') },
  { label: 'DINNER', id: p('ec53e408d2c94f65bcb4ad9d031267ae.jpg') },
  { label: 'DESSERT', id: p('7a86cc244eea484babe91603fe80b0e7~mv2.jpg') },
];

export const metadata = {
  title: 'Organic Vegetarian Cafe',
  description: 'At The Shala Bali eating well does not mean deprivation. We believe in putting the joy and taste into healthy food.',
  alternates: { canonical: '/organic-vegetarian-cafe' },
};

export default function OrganicCafePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Organic Vegetarian Cafe' }]}
        eyebrow="delicious · healing · kind to the earth"
        title={{ before: 'Food with flair,', script: 'made with care' }}
        intro="It is one of the main ingredients in any amazing holiday and at The Shala Bali eating well does not mean deprivation. We believe in putting the joy and taste into healthy food. Every dish on our menu has been created with flair & care to NOURISH & SATISFY."
      />

      <FeatureSplit image={p('97e9ade8bacb41188ff431a5aa972085~mv2.jpg')} alt="Raw cheesecake tart with raspberries" labelledBy="oc-food">
        <SectionHead eyebrow="FOOD!" title="Your retreat your menu!" id="oc-food" size="h3" />
        <FineList
          items={[
            <>
              <strong>Imagine</strong> - Organic spelt, sourdough &amp; gluten free breads BAKED IN HOUSE with home made condiments - think Pineapple Vanilla Bean Jam! &amp; creamy nut butters.
            </>,
            <>
              <strong>Fermented products for a healthy tummy?? YES!</strong> We make our own Kombucha in different fruity flavours and our own natural yogurt or vegan coconut yogurt.
            </>,
            'Choose from our eclectic menu of sweet and savory dishes from around the world and enjoy the foods you like the most during your week with us.',
          ]}
        />
      </FeatureSplit>

      <section className={styles.words} aria-label="At the cafe">
        <ul className={`container ${styles.wordList}`} data-stagger>
          {words.map((w) => (
            <li key={w} data-stagger-item>
              {w}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.journey} aria-labelledby="oc-journey">
        <div className="container">
          <SectionHead
            eyebrow="Breakfast · Lunch · Dinner · Dessert"
            title="Come on a food"
            script="journey"
            id="oc-journey"
            intro="As a place of Yoga and healing, we serve food that not only supports your body to thrive but is also supportive to the earth. We pride ourselves on creating plant based dishes that are as good if not better than their original! Good for the body, the environment and the animals - good for the soul."
          />
          <CardGrid columns={4} className={styles.meals}>
            {meals.map((m) => (
              <ImageCard key={m.label} id={m.id} title={m.label.charAt(0) + m.label.slice(1).toLowerCase()} ratio="235 / 365" sizes="(min-width: 1024px) 25vw, 50vw" />
            ))}
          </CardGrid>
        </div>
      </section>

      <FeatureSplit image={p('b780f298831f46a7b217d8b46a444004~mv2.png')} alt="Smiling cook in The Shala Bali kitchen" reverse tone="ivory" labelledBy="oc-cook">
        <SectionHead eyebrow="We are waiting to share our secrets with you" title="Cook with" script="us" id="oc-cook" size="h3" />
        <p className={styles.text} data-reveal="up">
          Come and learn some of the most loved recipes of The Shala Bali kitchen. We offer both traditional Indonesian cooking lessons and vegan | raw dishes. Get your apron on and join us for a hands on class followed by a special meal together to enjoy the fruits of your labour.
        </p>
        <div data-reveal="up">
          <MagneticButton href={mailto(site.emails.enquiry, 'Cooking Class Booking')}>Book a place</MagneticButton>
        </div>
      </FeatureSplit>

      <section className={styles.spices} aria-label="Spices">
        <div className="container">
          <MediaReveal id={p('3d63b57558004addbe2aa2519e37e963~mv2.jpg')} alt="Spices and chillies" ratio="21 / 9" sizes="(min-width: 1360px) 1300px, 100vw" className={styles.spicesMedia} />
        </div>
      </section>

      <Statement tone="forest" align="center">
        Food with flair, made with care
      </Statement>
    </>
  );
}
