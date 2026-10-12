'use client';

import { useEffect, useRef, useState } from 'react';
import { asset, posterId, videoSrc } from '@/lib/assets';
import styles from './BackgroundVideo.module.css';

/**
 * Muted decorative video as on the source:
 * - no autoplay under prefers-reduced-motion (the poster stays)
 * - the file is only requested when the video nears the viewport, and it pauses off-screen
 */
export default function BackgroundVideo({ id, poster = 'p', loop = true, label, className = '' }) {
  const ref = useRef(null);
  const [src, setSrc] = useState(null);
  const posterSrc = asset(posterId(id, poster)).src;

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSrc((s) => s || videoSrc(id));
          el.play?.().catch(() => {});
        } else if (!el.paused) {
          el.pause();
        }
      },
      { rootMargin: '200px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [id]);

  useEffect(() => {
    const el = ref.current;
    if (!src || !el) return;
    el.load();
    el.play().catch(() => {});
  }, [src]);

  return (
    <div className={`${styles.wrap} ${className}`}>
      <video ref={ref} className={styles.video} poster={posterSrc} muted playsInline disablePictureInPicture disableRemotePlayback controlsList="nodownload nofullscreen noremoteplayback noplaybackrate" loop={loop} preload="none" aria-label={label} src={src || undefined} />
    </div>
  );
}
