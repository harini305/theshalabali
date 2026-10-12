import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/sections/PageHero';
import RoomProfile from '@/components/sections/RoomProfile';
import AccommodationOptions, { brochureMailto } from '@/components/sections/AccommodationOptions';
import MagneticButton from '@/components/ui/MagneticButton';
import { rooms, roomSlugs } from '@/data/pages/rooms';
import { brochureLine } from '@/data/accommodation-options';
import styles from './room.module.css';

export const dynamicParams = false;

export function generateStaticParams() {
  return roomSlugs.map((room) => ({ room }));
}

export async function generateMetadata({ params }) {
  const { room } = await params;
  const data = rooms[room];
  if (!data) return {};
  return { title: data.title, description: data.intro, alternates: { canonical: `/accommodation/${room}` } };
}

const SPLIT = { bungalows: ['', 'Bungalows'], 'deluxe-rooms': ['Deluxe', 'Rooms'], 'master-suites': ['Master', 'Suites'] };

export default async function RoomPage({ params }) {
  const { room } = await params;
  const data = rooms[room];
  if (!data) notFound();
  const [before, script] = SPLIT[room];
  return (
    <>
      <PageHero crumbs={[{ label: 'Accommodation' }, { label: data.title }]} eyebrow={`${data.profiles.length} room types`} title={{ before: before || undefined, script }} intro={data.intro} image={data.hero}>
        <MagneticButton href="#room-0">Explore the rooms</MagneticButton>
      </PageHero>

      <nav className={styles.jump} aria-label="Room types">
        <div className="container">
          <ul data-stagger>
            {data.profiles.map((p, i) => (
              <li key={p.name} data-stagger-item>
                <a href={`#room-${i}`}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {data.profiles.map((p, i) => (
        <RoomProfile key={p.name} room={p} index={i} />
      ))}

      {data.options ? (
        <AccommodationOptions options={data.options} heading="Accommodation options" id="other-rooms" />
      ) : (
        <section className={styles.brochure} aria-label="Brochure">
          <div className={`container ${styles.brochureInner}`} data-reveal="up">
            <p className="lead">{brochureLine}</p>
            <div className={styles.actions}>
              <MagneticButton href={brochureMailto} ariaLabel="Request brochure by email">
                Request brochure
              </MagneticButton>
              <Link href="/accommodation/deluxe-rooms" className={styles.link}>
                Deluxe Rooms →
              </Link>
              <Link href="/accommodation/bungalows" className={styles.link}>
                Bungalows →
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
