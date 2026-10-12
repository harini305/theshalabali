import PageHero from '@/components/sections/PageHero';
import { MediaReveal, SectionHead, Statement } from '@/components/sections/Blocks';
import Slideshow from '@/components/gallery/Slideshow';
import MagneticButton from '@/components/ui/MagneticButton';
import { mediaItems } from '@/lib/assets';
import { indianCafe as c } from '@/data/pages/indian-cafe';
import styles from './cafe.module.css';

export const metadata = {
  title: c.meta.title,
  description: c.meta.description,
  alternates: { canonical: '/indian-cafe' },
};

export default function IndianCafePage() {
  const menu = mediaItems(c.menu, (i) => (i === 0 ? 'Mumbai Station menu cover' : `Mumbai Station menu, page ${i + 1}`));
  return (
    <>
      <PageHero crumbs={[{ label: 'Indian Cafe' }]} eyebrow={c.tagline} title={{ before: 'Mumbai', script: 'Station' }} intro={c.intro[0]} image={c.hero}>
        <MagneticButton href="#menu">Menu</MagneticButton>
      </PageHero>

      <Statement label="Sattvic style">{c.intro[1]}</Statement>

      <section className={styles.cards} aria-labelledby="cafe-cards">
        <div className="container">
          <h2 id="cafe-cards" className="visually-hidden">
            About Mumbai Station
          </h2>
          <div className={styles.cardGrid} data-stagger>
            {c.cards.map((card, i) => (
              <article key={card.title} className={styles.card} data-stagger-item>
                <MediaReveal id={card.image.id} alt={card.image.alt} position={card.image.position} ratio="4 / 5" parallax={0.06} sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw" />
                <div className={styles.cardBody}>
                  <span className={styles.cardNum} aria-hidden="true">{`0${i + 1}`}</span>
                  <h3 className={`display ${styles.cardTitle}`}>{card.title}</h3>
                  <p className={styles.cardText}>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className={styles.menu} aria-labelledby="cafe-menu">
        <div className="container">
          <div className={styles.menuHead}>
            <SectionHead eyebrow={c.tagline} title={c.menuTitle} id="cafe-menu" />
            <p className={styles.hint} data-reveal="fade">
              Select a page to read it full screen.
            </p>
          </div>
          <div data-reveal="up">
            <Slideshow items={menu} label="Mumbai Station menu" mode="strip" height={560} />
          </div>
        </div>
      </section>
    </>
  );
}
