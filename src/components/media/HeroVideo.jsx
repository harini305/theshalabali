'use client';

import { useEffect, useRef, useState } from 'react';
import Img from '@/components/ui/Img';
import { posterId, videoSrc } from '@/lib/assets';
import styles from './HeroVideo.module.css';

/**
 * Full-bleed hero media: the poster renders immediately (server, preloaded); the muted loop is attached
 * only on tablet/desktop with motion allowed and no data-saver, so phones never download the film.
 */
export default function HeroVideo({ id, label, alt = '' }) {
  const ref = useRef(null);
  const [src, setSrc] = useState(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 768px)').matches;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const save = navigator.connection?.saveData;
    if (!wide || calm || save) return undefined;
    const t = setTimeout(() => setSrc(videoSrc(id)), 300);
    return () => clearTimeout(t);
  }, [id]);

  useEffect(() => {
    const el = ref.current;
    if (!src || !el) return;
    el.play().catch(() => {});
  }, [src]);

  return (
    <div className={styles.wrap}>
      <Img id={posterId(id, 'p')} alt={alt} fill priority sizes="100vw" className={styles.poster} />
      <video
        ref={ref}
        className={`${styles.video} ${playing ? styles.on : ''}`}
        muted
        playsInline
        loop
        autoPlay
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
        preload="none"
        aria-label={label}
        src={src || undefined}
        onPlaying={() => setPlaying(true)}
      />
    </div>
  );
}
