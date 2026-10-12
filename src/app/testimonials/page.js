import PageHero from '@/components/sections/PageHero';
import { testimonials, testimonialsIntro } from '@/data/pages/testimonials';
import styles from './testimonials.module.css';

export const metadata = {
  title: 'Testimonials',
  description: testimonialsIntro,
  alternates: { canonical: '/testimonials' },
};

function Cite({ t }) {
  return (
    <figcaption className={styles.cite}>
      <span className={styles.name}>{t.name}</span>
      <span className={styles.place}>{t.place}</span>
    </figcaption>
  );
}

export default function TestimonialsPage() {
  const [first, ...rest] = testimonials;
  return (
    <>
      <PageHero crumbs={[{ label: 'Testimonials' }]} eyebrow={`${testimonials.length} voices`} title={{ before: 'Guest', script: 'testimonials' }} intro={testimonialsIntro} size="compact" />

      <section className={styles.section} aria-label="Testimonials">
        <div className="container">
          <figure className={styles.feature} data-reveal="up">
            <span className={styles.mark} aria-hidden="true">
              “
            </span>
            <blockquote className={styles.featureQuote}>
              <p className="display">{first.quote}</p>
            </blockquote>
            <Cite t={first} />
          </figure>

          <div className={styles.wall} data-stagger>
            {rest.map((t) => (
              <figure key={t.name} className={styles.item} data-stagger-item>
                <blockquote className={styles.quote}>
                  <p>{t.quote}</p>
                </blockquote>
                <Cite t={t} />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
