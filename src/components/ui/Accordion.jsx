import styles from './Accordion.module.css';

/**
 * Question/answer list built on native <details>/<summary>: keyboard and screen-reader accessible
 * without JavaScript. (The source prints every answer open; long lists are easier to scan collapsed.)
 */
export default function Accordion({ items, openFirst = true, className = '' }) {
  return (
    <div className={`${styles.list} ${className}`} data-stagger>
      {items.map(([q, a], i) => (
        <details key={q} className={styles.item} open={openFirst && i === 0} data-stagger-item>
          <summary className={styles.q}>
            <span>{q}</span>
            <svg className={styles.icon} viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
              <path d="M2 8h12" stroke="currentColor" strokeWidth="1.4" fill="none" />
              <path className={styles.iconV} d="M8 2v12" stroke="currentColor" strokeWidth="1.4" fill="none" />
            </svg>
          </summary>
          <div className={styles.a}>{typeof a === 'string' ? <p>{a}</p> : a}</div>
        </details>
      ))}
    </div>
  );
}
