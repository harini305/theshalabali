'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from './Lightbox';
import styles from './GalleryGrid.module.css';

/**
 * Full-bleed 3×2 photo grid (room galleries: 470×269 tiles on the source). Each tile is a button that
 * opens the lightbox at that image. `items` are resolved on the server: { src, w, h, alt }.
 */
export default function GalleryGrid({ items, label, columns = 3, ratio = '470 / 269', className = '', bento = false }) {
  const [index, setIndex] = useState(null);
  return (
    <>
      <ul className={`${styles.grid} ${styles[`c${columns}`]} ${bento ? styles.bento : ''} ${className}`} aria-label={label} data-stagger>
        {items.map((item, i) => (
          <li key={item.src} className={styles.tile} style={{ aspectRatio: ratio }} data-stagger-item>
            <button type="button" className={styles.button} onClick={() => setIndex(i)} aria-label={`Enlarge: ${item.alt}`}>
              <Image src={item.src} alt={item.alt} fill sizes={`(min-width: 768px) ${Math.round(100 / columns)}vw, 50vw`} className={styles.img} />
              <span className={styles.zoom} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path d="M10.5 4a6.5 6.5 0 1 0 4.1 11.5l4.7 4.7 1.4-1.4-4.7-4.7A6.5 6.5 0 0 0 10.5 4zm0 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zM9.5 8v1.5H8v2h1.5V13h2v-1.5H13v-2h-1.5V8z" fill="currentColor" />
                </svg>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Lightbox items={items} index={index} onIndex={setIndex} onClose={() => setIndex(null)} label={label} />
    </>
  );
}
