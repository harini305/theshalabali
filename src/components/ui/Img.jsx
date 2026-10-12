import Image from 'next/image';
import { asset } from '@/lib/assets';

/**
 * next/image for a downloaded Wix media file, looked up by its media ID.
 * - `fill` renders a cover image inside a positioned parent.
 * - Otherwise intrinsic width/height from the manifest prevent layout shift.
 */
export default function Img({ id, alt, sizes = '100vw', fill = false, priority = false, className, style, position, quality }) {
  const a = asset(id);
  const common = {
    src: a.src,
    sizes,
    // Next 16: `priority` is deprecated in favour of `preload` (docs: api-reference/components/image).
    preload: priority,
    className,
    quality,
    style: { ...(fill ? { objectFit: 'cover', objectPosition: position || '50% 50%' } : {}), ...style },
  };
  return fill ? <Image {...common} alt={alt ?? ''} fill /> : <Image {...common} alt={alt ?? ''} width={a.w} height={a.h} />;
}
