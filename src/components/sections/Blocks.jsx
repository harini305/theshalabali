import Link from 'next/link';
import Img from '@/components/ui/Img';
import MapEmbed from './MapEmbed';
import styles from './Blocks.module.css';

/** Eyebrow + split-text display title + optional intro. */
export function SectionHead({ eyebrow, title, script, intro, align = 'left', id, as: Tag = 'h2', size = 'h2', className = '' }) {
  return (
    <div className={`${styles.head} ${styles[`head_${align}`]} ${className}`}>
      {eyebrow && (
        <p className="eyebrow" data-reveal="fade">
          {eyebrow}
        </p>
      )}
      <Tag id={id} className={`display ${styles[`t_${size}`]}`} data-split>
        {title}
        {script && (
          <>
            {' '}
            <span className="script">{script}</span>
          </>
        )}
      </Tag>
      {intro && (
        <div className={styles.headIntro} data-reveal="up">
          {Array.isArray(intro) ? intro.map((p) => <p key={p.slice(0, 24)}>{p}</p>) : <p>{intro}</p>}
        </div>
      )}
    </div>
  );
}

/** Large serif paragraph whose words brighten as it scrolls through the viewport. */
export function Statement({ label, children, tone = 'ivory', align = 'left' }) {
  return (
    <section className={`${styles.statement} ${styles[tone]}`}>
      <div className={`container ${styles.statementInner} ${styles[`st_${align}`]}`}>
        {label && (
          <p className="eyebrow" data-reveal="fade">
            {label}
          </p>
        )}
        <p className={`display ${styles.statementText}`} data-split>
          {children}
        </p>
      </div>
    </section>
  );
}

/** Infinite marquee of words; speeds up and reverses with scroll velocity. */
export function Marquee({ words, tone = 'ivory', speed = 34 }) {
  const row = (
    <span className={styles.marqueeRow}>
      {words.map((w) => (
        <span key={w} className={styles.marqueeItem}>
          {w}
          <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
            <path d="M10 1c1.5 5 3.5 7.5 9 9-5.5 1.5-7.5 4-9 9-1.5-5-3.5-7.5-9-9 5.5-1.5 7.5-4 9-9z" fill="currentColor" />
          </svg>
        </span>
      ))}
    </span>
  );
  return (
    <div className={`${styles.marquee} ${styles[tone]}`} data-marquee={speed} aria-hidden="true">
      <div className={styles.marqueeTrack} data-marquee-track>
        {row}
        {row}
      </div>
    </div>
  );
}

/** Image that wipes in from below and drifts with parallax; optional caption. */
export function MediaReveal({ id, alt = '', ratio = '4 / 5', sizes = '(min-width: 1024px) 50vw, 100vw', className = '', radius = true, parallax = 0.14, priority = false, position, cursor }) {
  return (
    <figure className={`${styles.media} ${radius ? styles.rounded : ''} ${className}`} style={{ aspectRatio: ratio }} data-img-reveal data-parallax={parallax}>
      <div className={styles.mediaInner} data-parallax-media>
        <Img id={id} alt={alt} fill sizes={sizes} priority={priority} position={position} />
      </div>
    </figure>
  );
}

/** Two-column feature: media on one side, editorial content on the other. */
export function FeatureSplit({ image, alt, reverse = false, ratio = '4 / 5', children, tone = 'ivory', labelledBy, media }) {
  return (
    <section className={`${styles.split} ${styles[tone]}`} aria-labelledby={labelledBy}>
      <div className={`container ${styles.splitInner} ${reverse ? styles.reverse : ''}`}>
        <div className={styles.splitMedia}>{media || <MediaReveal id={image} alt={alt} ratio={ratio} />}</div>
        <div className={styles.splitText}>{children}</div>
      </div>
    </section>
  );
}

/** Numbered list with fine dividers (used for inclusions, amenities and benefits). */
export function FineList({ items, columns = 1, numbered = false, tone }) {
  return (
    <ul className={`${styles.fine} ${columns > 1 ? styles.fineCols : ''} ${tone === 'dark' ? styles.fineDark : ''}`} data-stagger>
      {items.map((it, i) => (
        <li key={i} data-stagger-item>
          {numbered ? <span className={styles.fineNum}>{String(i + 1).padStart(2, '0')}</span> : <span className={styles.fineDot} aria-hidden="true" />}
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/** Image card with zoom-and-tilt hover; whole card is a link when href is given. */
export function ImageCard({ id, alt = '', title, text, href, eyebrow, ratio = '4 / 5', sizes = '(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw', cursor = 'View', badge, as: T = 'h3', children }) {
  const body = (
    <>
      <div className={styles.cardMedia} style={{ aspectRatio: ratio }}>
        <Img id={id} alt={alt} fill sizes={sizes} />
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>
      <div className={styles.cardBody}>
        {eyebrow && <p className={styles.cardEyebrow}>{eyebrow}</p>}
        <T className={styles.cardTitle}>
          {title}
          {href && (
            <span className={styles.cardArrow} aria-hidden="true">
              →
            </span>
          )}
        </T>
        {text && <p className={styles.cardText}>{text}</p>}
        {children}
      </div>
    </>
  );
  return (
    <article className={styles.card} data-stagger-item>
      {href ? (
        <Link href={href} className={styles.cardLink}>
          {body}
        </Link>
      ) : (
        body
      )}
    </article>
  );
}

export function CardGrid({ children, columns = 3, className = '' }) {
  return (
    <div className={`${styles.grid} ${styles[`g${columns}`]} ${className}`} data-stagger>
      {children}
    </div>
  );
}

/** Pinned horizontal rail on desktop; native swipe/scroll-snap on touch screens. */
export function HorizontalRail({ head, children, tone = 'forest', labelledBy }) {
  return (
    <section className={`${styles.rail} ${styles[tone]}`} data-horizontal aria-labelledby={labelledBy}>
      <div className={styles.railTrack} data-horizontal-track>
        <div className={styles.railHead}>{head}</div>
        {children}
      </div>
    </section>
  );
}

export function RailCard({ id, alt = '', index, title, text, href }) {
  return (
    <Link href={href} className={styles.railCard}>
      <span className={styles.railMedia}>
        <Img id={id} alt={alt} fill sizes="(min-width: 1024px) 34vw, 80vw" />
      </span>
      <span className={styles.railMeta}>
        <span className={styles.railIndex}>{index}</span>
        <span className={styles.railTitle}>{title}</span>
        {text && <span className={styles.railText}>{text}</span>}
      </span>
    </Link>
  );
}

/** Figures that count up when they enter the viewport. */
export function Stats({ items, tone = 'ivory' }) {
  return (
    <section className={`${styles.stats} ${styles[tone]}`} aria-label="Key facts">
      <dl className={`container ${styles.statsGrid}`} data-stagger>
        {items.map((s) => (
          <div key={s.label} className={styles.stat} data-stagger-item>
            <dt className={styles.statLabel}>{s.label}</dt>
            <dd className={`display ${styles.statValue}`}>
              {s.prefix}
              <span data-counter>{s.value}</span>
              <span className={styles.statUnit}>{s.unit}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/** Forest contact panel with address, contact lines, actions and the click-to-load map. */
export function ContactPanel({ id = 'contact', eyebrow = 'Contact Us', title, lines = [], contacts = [], actions, map = true }) {
  return (
    <section id={id} className={`${styles.contact}`} aria-labelledby={`${id}-title`}>
      <div className={`container ${styles.contactInner}`}>
        <div className={styles.contactText}>
          <p className="eyebrow" data-reveal="fade">
            {eyebrow}
          </p>
          <h2 id={`${id}-title`} className={`display ${styles.contactTitle}`} data-split>
            {title}
          </h2>
          <address className={styles.contactLines} data-reveal="up">
            {lines.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </address>
          <ul className={styles.contactList} data-stagger>
            {contacts.map((c) => (
              <li key={c.label} data-stagger-item>
                <span className={styles.contactLabel}>{c.label}</span>
                <a href={c.href} {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  {c.text}
                </a>
              </li>
            ))}
          </ul>
          {actions && (
            <div className={styles.contactActions} data-reveal="up">
              {actions}
            </div>
          )}
        </div>
        {map && (
          <div className={styles.contactMap} data-reveal="scale">
            <MapEmbed />
          </div>
        )}
      </div>
    </section>
  );
}
