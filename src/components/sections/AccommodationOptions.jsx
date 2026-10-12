import { CardGrid, ImageCard, SectionHead } from './Blocks';
import MagneticButton from '@/components/ui/MagneticButton';
import { brochureLine } from '@/data/accommodation-options';
import { mailto, site } from '@/data/site';
import styles from './AccommodationOptions.module.css';

// The source's dead "Coming soon"/"Brochure" buttons are replaced by the working brochure email that the
// source's Host a retreat page already uses (same address and subject).
export const brochureMailto = mailto(site.emails.reservations, 'Retreat borchure request ');

export default function AccommodationOptions({ options, heading = 'Accommodation options', id = 'accommodation-options', showBrochure = true, tone = 'sand' }) {
  return (
    <section className={`${styles.section} ${styles[tone]}`} aria-labelledby={id}>
      <div className="container">
        <SectionHead eyebrow="Stay" title={heading} id={id} />
        <CardGrid columns={3} className={styles.grid}>
          {options.map((o, i) => (
            <ImageCard key={o.href} id={o.id} alt={o.alt} title={o.title} text={o.text} href={o.href} eyebrow={`0${i + 1}`} ratio="4 / 5" />
          ))}
        </CardGrid>
        {showBrochure && (
          <div className={styles.brochure} data-reveal="up">
            <p className="lead">{brochureLine}</p>
            <MagneticButton href={brochureMailto} variant="outline" ariaLabel="Request brochure by email">
              Request brochure
            </MagneticButton>
          </div>
        )}
      </div>
    </section>
  );
}
