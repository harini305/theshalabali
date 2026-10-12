import PageHero from '@/components/sections/PageHero';
import { MediaReveal } from '@/components/sections/Blocks';
import { experiences as e } from '@/data/pages/experiences';
import styles from './experiences.module.css';

export const metadata = {
  title: e.meta.title,
  description: e.meta.description,
  alternates: { canonical: '/experiences' },
};

export default function ExperiencesPage() {
  // A final item left alone on the 3-column row is set wide (image across two columns, text in the third).
  const last = e.items.length - 1;
  const orphan = e.items.length % 3 === 1;
  return (
    <>
      <PageHero crumbs={[{ label: 'Experiences' }]} eyebrow={`${e.items.length} workshops`} title={{ script: 'Experiences' }} intro={e.intro} image={e.hero} />

      <section className={styles.section} aria-label="Workshops">
        <ol className={`container ${styles.grid}`} data-stagger>
          {e.items.map((x, i) => {
            const wide = orphan && i === last;
            return (
              <li key={x.title} className={`${styles.item} ${wide ? styles.wide : ''}`} data-stagger-item>
                <div className={styles.media}>
                  <MediaReveal id={x.image} alt={x.alt} ratio={wide ? '8 / 3' : '4 / 3'} parallax={0.06} sizes={wide ? '(min-width: 1024px) 62vw, 100vw' : '(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw'} />
                  {x.badge && <span className={styles.badge}>{x.badge}</span>}
                </div>
                <div className={styles.body}>
                  <span className={styles.num} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className={`display ${styles.title}`}>{x.title}</h2>
                  <p className={styles.text}>{x.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}
