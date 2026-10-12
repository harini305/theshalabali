'use client';

import { useState } from 'react';
import { site } from '@/data/site';
import styles from './MapEmbed.module.css';

/**
 * The source embeds an interactive Google Map. To avoid loading Google's scripts (and their cookies)
 * on every visit, the map loads only when the visitor asks for it; a direct link is always available.
 */
export default function MapEmbed({ title = site.map.label }) {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.map}>
      {show ? (
        <iframe
          className={styles.frame}
          src={site.map.embed}
          title={`Map: ${title}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className={styles.facade}>
          <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
            <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
          </svg>
          <p className={styles.place}>{title}</p>
          <p className={styles.addr}>{site.address.join(' ')}</p>
          <div className={styles.actions}>
            <button type="button" className={styles.btn} onClick={() => setShow(true)}>
              Show map
            </button>
            <a className={styles.link} href={site.map.link} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
