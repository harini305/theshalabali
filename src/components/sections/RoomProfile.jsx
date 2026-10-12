import GalleryGrid from '@/components/gallery/GalleryGrid';
import MagneticButton from '@/components/ui/MagneticButton';
import { FineList } from './Blocks';
import { mediaItems } from '@/lib/assets';
import styles from './RoomProfile.module.css';

/** Editorial room profile: numbered title, description, booking, amenities and sizes, then a bento gallery. */
export default function RoomProfile({ room, index }) {
  const id = `room-${index}`;
  const items = mediaItems(room.gallery, (i) => `${room.name}, photo ${i + 1} of ${room.gallery.length}`);
  return (
    <section aria-labelledby={id} className={`${styles.room} ${index % 2 ? styles.alt : ''}`}>
      <div className={`container ${styles.top}`}>
        <div className={styles.lead}>
          <span className={styles.num} data-reveal="fade">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h2 id={id} className={`display ${styles.name}`} data-split>
            {room.name}
          </h2>
          <p className={styles.text} data-reveal="up">
            {room.text}
          </p>
          <div className={styles.sizes} data-stagger>
            {room.sizes.map((s) => (
              <span key={s} className={styles.size} data-stagger-item>
                {s}
              </span>
            ))}
          </div>
          <div data-reveal="up">
            <MagneticButton href={room.book} ariaLabel={`Book ${room.name} (email)`}>
              Book
            </MagneticButton>
          </div>
        </div>
        <div className={styles.amenities}>
          <h3 className="eyebrow">Amenities</h3>
          <FineList items={room.amenities} columns={2} />
        </div>
      </div>
      <div className={`container ${styles.gallery}`}>
        <GalleryGrid items={items} label={`${room.name} photo gallery`} bento />
      </div>
    </section>
  );
}
