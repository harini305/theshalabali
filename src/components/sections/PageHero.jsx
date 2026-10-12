import Link from 'next/link';
import Img from '@/components/ui/Img';
import styles from './PageHero.module.css';

/**
 * Editorial page hero: breadcrumb/eyebrow row, a large Fraunces title (the `script` part set in
 * terracotta italic), intro + actions on the right-hand columns and, optionally, a cinematic image band
 * that unmasks on load and drifts with scroll.
 *
 * title: string | { before, script, after }
 * image: { id, alt, position } — a media ID from the asset manifest
 */
export default function PageHero({ eyebrow, title, intro, children, crumbs, size = 'page', tone = 'ivory', index, image }) {
  const t = typeof title === 'string' ? { before: title } : title;
  return (
    <section className={`${styles.hero} ${styles[size]} ${styles[tone]} ${image ? styles.withImage : ''}`} data-hero aria-labelledby="page-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.meta} data-hero-fade>
          {crumbs ? (
            <nav aria-label="Breadcrumb" className={styles.crumbs}>
              <Link href="/">Home</Link>
              {crumbs.map((c) => (
                <span key={c.label}>
                  <span className={styles.sep} aria-hidden="true" />
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                </span>
              ))}
            </nav>
          ) : (
            <span />
          )}
          {(eyebrow || index) && <p className={`eyebrow ${styles.eyebrow}`}>{eyebrow || index}</p>}
        </div>
        <h1 id="page-title" className={`display ${styles.title}`}>
          {t.before && (
            <span className={styles.titleLine} data-hero-split>
              {t.before}
            </span>
          )}
          {t.script && (
            <span className={`script ${styles.titleLine} ${styles.scriptLine}`} data-hero-split>
              {t.script}
            </span>
          )}
          {t.after && (
            <span className={styles.titleLine} data-hero-split>
              {t.after}
            </span>
          )}
        </h1>
        {(intro || children) && (
          <div className={styles.bottom}>
            <span className={styles.rule} aria-hidden="true" data-hero-fade />
            {intro && (
              <div className={styles.intro} data-hero-fade>
                {Array.isArray(intro) ? intro.map((p) => <p key={p.slice(0, 24)}>{p}</p>) : <p>{intro}</p>}
              </div>
            )}
            {children && (
              <div className={styles.actions} data-hero-fade>
                {children}
              </div>
            )}
          </div>
        )}
      </div>
      {image && (
        <div className={`container ${styles.band}`}>
          <figure className={styles.media} data-hero-media data-parallax="0.12">
            <div className={styles.mediaInner} data-parallax-media>
              <Img id={image.id} alt={image.alt || ''} fill priority sizes="(min-width: 1360px) 1300px, 100vw" position={image.position} />
            </div>
          </figure>
        </div>
      )}
      <span id="content" className={styles.anchor} aria-hidden="true" />
    </section>
  );
}
