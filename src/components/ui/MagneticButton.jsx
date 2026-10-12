import Link from 'next/link';
import styles from './MagneticButton.module.css';

/**
 * Site button: rounded pill with a circular arrow badge that slides on hover.
 * (File name kept from an earlier iteration; there is no magnetic effect.)
 * variant: 'dark' | 'accent' | 'light' | 'outline' | 'ghostLight' | 'text'
 */
export default function MagneticButton({ href, children, variant = 'dark', external = false, ariaLabel, className = '', arrow = true }) {
  const inner = (
    <>
      <span className={styles.label}>{children}</span>
      {arrow && (
        <span className={styles.arrow} aria-hidden="true">
          <svg viewBox="0 0 14 14" width="14" height="14">
            <path d="M1 7h11M7.5 2.5 12 7l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          <svg viewBox="0 0 14 14" width="14" height="14">
            <path d="M1 7h11M7.5 2.5 12 7l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </span>
      )}
    </>
  );
  const cls = `${styles.btn} ${styles[variant]} ${arrow ? '' : styles.noArrow} ${className}`;
  if (href?.startsWith('/') && !href.startsWith('//')) {
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} aria-label={ariaLabel} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {inner}
    </a>
  );
}
