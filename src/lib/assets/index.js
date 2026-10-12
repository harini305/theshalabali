import manifest from '@/data/asset-manifest.json';

/**
 * Resolves a Wix media ID (the original stored filename, kept as the local filename) to its
 * downloaded file in /public/assets. Throws at build time if the file is missing, so a page can
 * never reference an asset that does not exist.
 */
export function asset(id) {
  const entry = manifest[id];
  if (!entry) throw new Error(`Missing local asset: ${id}`);
  return entry;
}

export function hasAsset(id) {
  return Boolean(manifest[id]);
}

export const videoSrc = (id) => `/assets/videos/${id}.mp4`;
export const posterId = (id, frame = 'f000') => `${id}${frame}.jpg`;

/** Resolve media IDs to serialisable props for client galleries. */
export function mediaItems(ids, altFor) {
  return ids.map((id, i) => {
    const a = asset(id);
    return { src: a.src, w: a.w, h: a.h, alt: typeof altFor === 'function' ? altFor(i, id) : altFor || '' };
  });
}
