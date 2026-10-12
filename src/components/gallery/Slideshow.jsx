'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import Lightbox from './Lightbox';
import styles from './Slideshow.module.css';

/**
 * Menu slideshows (Spa: a horizontal strip of mixed-width panels; Indian Cafe: one portrait page at a time
 * with a "1/7" counter). Native scroll-snap gives swipe on touch; arrow buttons and keys step through;
 * clicking a panel opens it full-screen so the menu text can be read ("press to zoom" on the source).
 */
export default function Slideshow({ items, label, mode = 'strip', height = 443 }) {
  const track = useRef(null);
  const [current, setCurrent] = useState(0);
  const [zoom, setZoom] = useState(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    const slides = [...el.children];
    const mid = el.scrollLeft + 8;
    let idx = 0;
    slides.forEach((s, i) => {
      if (s.offsetLeft - el.offsetLeft <= mid) idx = i;
    });
    setCurrent(idx);
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return undefined;
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const step = (dir) => {
    const el = track.current;
    if (!el) return;
    const slides = [...el.children];
    const target = slides[Math.min(slides.length - 1, Math.max(0, current + dir))];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollTo({ left: target.offsetLeft - el.offsetLeft, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <div
      className={`${styles.slideshow} ${styles[mode]}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
      }}
      style={{ '--slide-h': `${height}px` }}
    >
      <ul ref={track} className={styles.track}>
        {items.map((item, i) => (
          <li key={item.src} className={styles.slide} aria-roledescription="slide" aria-label={`${i + 1} of ${items.length}`} style={{ aspectRatio: `${item.w} / ${item.h}` }}>
            <button type="button" className={styles.zoomBtn} onClick={() => setZoom(i)} aria-label={`Enlarge: ${item.alt}`}>
              <Image src={item.src} alt={item.alt} fill sizes={mode === 'single' ? '(min-width: 768px) 564px, 90vw' : '(min-width: 768px) 600px, 80vw'} className={styles.img} />
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className={`${styles.arrow} ${styles.prev}`} onClick={() => step(-1)} disabled={atStart} aria-label="Previous slide">
        <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
          <path d="M17 10H4M9 4.5 3.5 10 9 15.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </button>
      <button type="button" className={`${styles.arrow} ${styles.next}`} onClick={() => step(1)} disabled={atEnd} aria-label="Next slide">
        <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
          <path d="M3 10h13M11 4.5l5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </button>
      <p className={styles.counter} aria-live="polite">
        {current + 1}/{items.length}
      </p>
      <Lightbox items={items} index={zoom} onIndex={setZoom} onClose={() => setZoom(null)} label={label} />
    </div>
  );
}
