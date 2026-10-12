import Link from 'next/link';
import Img from '@/components/ui/Img';
import styles from './ScrollSwap.module.css';

/**
 * Sticky image stage beside a scrolling list: as each item crosses the middle of the viewport the
 * stage cross-fades to that item's photo (GSAP ScrollTrigger, desktop). On touch screens each item
 * shows its own photo inline.
 *
 * items: [{ title?, text, href?, linkLabel?, image: { id, alt, position } }]
 */
export default function ScrollSwap({ head, items, tone = 'ivory', numbered = true, labelledBy, compact = false }) {
  const images = [];
  const indexFor = items.map((it) => {
    let i = images.findIndex((im) => im.id === it.image.id);
    if (i === -1) i = images.push(it.image) - 1;
    return i;
  });
  return (
    <section className={`${styles.swap} ${styles[tone]} ${compact ? styles.compact : ''}`} data-swap aria-labelledby={labelledBy}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.list}>
          {head && <div className={styles.head}>{head}</div>}
          <ol className={styles.items}>
            {items.map((it, i) => {
              const body = (
                <>
                  {!compact && (
                    <span className={styles.inlineImg}>
                      <Img id={it.image.id} alt={it.image.alt || ''} fill sizes="(min-width: 1024px) 1px, 100vw" position={it.image.position} />
                    </span>
                  )}
                  {numbered && <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>}
                  <span className={styles.copy}>
                    {it.title && <span className={styles.title}>{it.title}</span>}
                    <span className={styles.text}>{it.text}</span>
                    {it.href && (
                      <span className={styles.more}>
                        {it.linkLabel || 'Discover'} <span aria-hidden="true">→</span>
                      </span>
                    )}
                  </span>
                </>
              );
              return (
                <li key={`${i}-${it.title || it.text.slice(0, 12)}`} className={styles.item} data-swap-item={indexFor[i]} data-active={i === 0 ? '' : undefined}>
                  {it.href ? (
                    <Link href={it.href} className={styles.link}>
                      {body}
                    </Link>
                  ) : (
                    <div className={styles.link}>{body}</div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
        <div className={styles.stageWrap} aria-hidden="true">
          <div className={styles.stage}>
            {images.map((im, i) => (
              <span key={im.id} className={`${styles.stageImg} ${i === 0 ? styles.stageFirst : ''}`} data-swap-img>
                <Img id={im.id} alt="" fill sizes={compact ? '(min-width: 1024px) 46vw, 100vw' : '(min-width: 1024px) 46vw, 1px'} position={im.position} />
              </span>
            ))}
            <span className={styles.counter}>
              <span data-swap-count>01</span> / {String(images.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
