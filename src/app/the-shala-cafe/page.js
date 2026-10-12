import PageHero from '@/components/sections/PageHero';
import { MediaReveal, SectionHead, Statement } from '@/components/sections/Blocks';
import styles from './shala-cafe.module.css';

/*
  theshalabali.com/general-6-1 ("Eat"), an unfinished draft. Only its real owner copy and photos are shown:
  the Wix placeholder paragraphs and the dead "Download menu" button are not reproduced, and two card texts
  that stop mid-sentence on the source end with an ellipsis. Heading typo corrected.
*/
const p = (id) => `4c89f1_${id}`;

const cards = [
  { id: p('b5432b5f49364d85be38bb41b73cf82b~mv2.jpg'), alt: 'Guests sharing a meal at a long table', title: 'Food tastes sweeter when shared' },
  {
    id: p('314ca5256b784846b9a4399b043a92fa~mv2.jpg'),
    alt: 'Plates of food on the cafe table',
    title: "What's on the menu?",
    text: 'A mixture of international and local signature cuisine. Belly friendly soups, hearty salads, lean tasty pastas, freshly baked breads, colorful smoothies, raw sweets We welcome different dietary requirements and…',
  },
  { id: p('a4b63e9d46224f1a9a705cba2ce94f13~mv2.jpg'), alt: 'A platter of fresh tropical fruit', title: 'Whole ingredients are our friends.', text: 'Less processed = more value. What do we value? Abundant energy, balanced mood…' },
];

const extras = [
  { id: 'eat-more', image: p('e8a033b3386745c3b856f4cf5eca0c70~mv2.jpg'), alt: 'Two guests in aprons at a cooking class', title: 'Cooking / chocolate making' },
  { id: 'eat-float', image: p('03aa35902b284b0f8536073bac223c0d~mv2.jpg'), alt: 'Floating breakfast tray in the pool', title: 'Floating breakfast', script: 'fun' },
];

export const metadata = {
  title: 'The Shala Cafe',
  description: 'The Shala Cafe is a food haven where you can feel safe to indulge.',
  alternates: { canonical: '/the-shala-cafe' },
};

export default function ShalaCafePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'The Shala Cafe' }]}
        eyebrow="Food made with love"
        title={{ script: 'Eat' }}
        intro={[
          'The Shala Cafe is a food haven where you can feel safe to indulge. Everything we bring to the table is flavorful, nutritionally dense and made with whole ingredients. Even the sweets are healthful and packed with goodies.',
          'We delight in creating dishes that are nourishing for the body and the spirit, as well as supportive of the environment and our fellow inhabitants.',
        ]}
      />

      <Statement label="The Shala Cafe">Let food be thy medicine and medicine be thy food!</Statement>

      <section className={styles.cards} aria-labelledby="eat-cards">
        <div className="container">
          <h2 id="eat-cards" className="visually-hidden">
            At the cafe
          </h2>
          <div className={styles.cardGrid} data-stagger>
            {cards.map((card, i) => (
              <article key={card.title} className={styles.card} data-stagger-item>
                <MediaReveal id={card.id} alt={card.alt} ratio="4 / 5" parallax={0.06} sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw" />
                <div className={styles.cardBody}>
                  <span className={styles.cardNum} aria-hidden="true">{`0${i + 1}`}</span>
                  <h3 className={`display ${styles.cardTitle}`}>{card.title}</h3>
                  {card.text && <p className={styles.cardText}>{card.text}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.more} aria-label="What else can we serve you?">
        <div className={`container ${styles.moreGrid}`}>
          {extras.map((x) => (
            <article key={x.id} className={styles.extra} aria-labelledby={x.id}>
              <MediaReveal id={x.image} alt={x.alt} ratio="3 / 2" parallax={0.08} sizes="(min-width: 1024px) 45vw, 100vw" />
              <SectionHead eyebrow="What else can we serve you?" title={x.title} script={x.script} id={x.id} size="h3" />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
