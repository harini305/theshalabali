'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef } from 'react';
import styles from './Lightbox.module.css';

/**
 * Full-screen viewer (native <dialog>: focus is trapped and Esc closes). ‹ › buttons, arrow keys and swipe
 * move between items, as in the source's Wix lightbox.
 */
export default function Lightbox({ items, index, onClose, onIndex, label = 'Image viewer' }) {
  const ref = useRef(null);
  const touch = useRef(null);
  const open = index !== null && index !== undefined;
  const item = open ? items[index] : null;

  const go = useCallback((d) => onIndex((index + d + items.length) % items.length), [index, items.length, onIndex]);

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;
    if (open && !dlg.open) {
      dlg.showModal();
      document.documentElement.style.overflow = 'hidden';
    }
    if (!open && dlg.open) dlg.close();
    return () => {
      if (!open) document.documentElement.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, go]);

  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      aria-label={label}
      onClose={() => {
        document.documentElement.style.overflow = '';
        onClose();
      }}
      onClick={(e) => {
        if (e.target === ref.current) ref.current.close();
      }}
      onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touch.current === null) return;
        const dx = e.changedTouches[0].clientX - touch.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touch.current = null;
      }}
    >
      {item && (
        <figure className={styles.figure}>
          <div className={styles.imgWrap}>
            <Image key={item.src} src={item.src} alt={item.alt} width={item.w} height={item.h} sizes="92vw" className={styles.img} quality={85} />
          </div>
          <figcaption className={styles.caption}>
            {item.caption && <span>{item.caption} · </span>}
            {index + 1} / {items.length}
          </figcaption>
        </figure>
      )}
      <button type="button" className={`${styles.btn} ${styles.close}`} onClick={() => ref.current?.close()} aria-label="Close">
        <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
          <path d="M4 4l12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </button>
      {items.length > 1 && (
        <>
          <button type="button" className={`${styles.btn} ${styles.prev}`} onClick={() => go(-1)} aria-label="Previous image">
            <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
              <path d="M17 10H4M9 4.5 3.5 10 9 15.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </button>
          <button type="button" className={`${styles.btn} ${styles.next}`} onClick={() => go(1)} aria-label="Next image">
            <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
              <path d="M3 10h13M11 4.5l5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </button>
        </>
      )}
    </dialog>
  );
}
