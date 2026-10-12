import Link from 'next/link';
import Img from '@/components/ui/Img';
import MagneticButton from '@/components/ui/MagneticButton';
import styles from './PackageCard.module.css';

function Inclusion({ item }) {
  if (typeof item === 'string') return item;
  if (item.em) return (<><em>{item.em}</em>{item.rest}</>);
  if (item.link) return (<>{item.before}<Link href="/experiences">{item.label}</Link></>);
  return null;
}

/**
 * Retreat package card. Prices sit on dotted leader rows (a <dl>) next to their night count, so the
 * duration ↔ price pairing is unambiguous at every width.
 */
export default function PackageCard({ pkg, footnote, index }) {
  const headingId = `pkg-${pkg.slug}`;
  return (
    <article className={styles.card} aria-labelledby={headingId} data-stagger-item id={pkg.slug}>
      <div className={styles.media}>
        <Img id={pkg.image.id} alt={pkg.image.alt} fill sizes="(min-width: 1280px) 400px, (min-width: 700px) 45vw, 100vw" />
        <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className={styles.body}>
        <h3 id={headingId} className={styles.title}>
          {pkg.title}
        </h3>
        <ul className={styles.list}>
          {pkg.inclusions.map((item, i) => (
            <li key={i}>
              <Inclusion item={item} />
            </li>
          ))}
        </ul>
        {pkg.extras.length > 0 && (
          <ul className={`${styles.list} ${styles.extras}`}>
            {pkg.extras.map((x) => (
              <li key={x} className={x.startsWith('(') ? styles.note : undefined}>
                {x}
              </li>
            ))}
          </ul>
        )}
        <dl className={styles.prices}>
          {pkg.prices.map((p, i) => (
            <div key={p.price} className={styles.row}>
              <dt>{p.nights}</dt>
              <span className={styles.leader} aria-hidden="true" />
              <dd>
                {i === 0 ? (
                  <a href={pkg.priceLink} aria-label={`${p.price} for ${p.nights} – enquire by email`}>
                    {p.price}
                  </a>
                ) : (
                  p.price
                )}
              </dd>
              {p.flag && <p className={styles.flag}>{p.flag}</p>}
            </div>
          ))}
        </dl>
        <p className={styles.footnote}>
          {footnote[0]} {footnote[1]}
        </p>
        <MagneticButton href={pkg.book} ariaLabel={`Book Now: ${pkg.title} (email)`} className={styles.book}>
          Book Now
        </MagneticButton>
      </div>
    </article>
  );
}
