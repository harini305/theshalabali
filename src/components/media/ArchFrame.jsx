import styles from './ArchFrame.module.css';

/**
 * Framed media (videos and portraits): a rectangle with small radii and a limestone block offset behind
 * it for depth. (Component name kept from the earlier arch design.) The inner mask wipes up when it
 * scrolls into view and the media settles from a zoom (data-img-reveal); the offset block sits outside
 * the mask so the reveal never clips it.
 */
export default function ArchFrame({ children, className = '', size = 'md', anim = true }) {
  return (
    <div className={`${styles.arch} ${styles[size]} ${className}`}>
      <div className={styles.mask} {...(anim ? { 'data-img-reveal': '' } : {})}>
        <div className={styles.inner}>{children}</div>
      </div>
    </div>
  );
}
