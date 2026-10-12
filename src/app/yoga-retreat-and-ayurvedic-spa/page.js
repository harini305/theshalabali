import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import { CardGrid, ContactPanel, ImageCard, SectionHead, Statement } from '@/components/sections/Blocks';
import BackgroundVideo from '@/components/media/BackgroundVideo';
import MagneticButton from '@/components/ui/MagneticButton';
import Img from '@/components/ui/Img';
import posts from '@/data/blog/posts.json';
import { mailto, site, socials } from '@/data/site';
import { LEGACY_VIDEOS } from '@/data/pages/legacy-home';
import styles from './legacy.module.css';

/*
  theshalabali.com/baliyogaretreat — the older long-form home page, reached from the header tagline.
  Fixes vs source: unlinked hero buttons and tiles pointing back to the home page now go to the matching
  real pages. The three Wix Video films are token-protected; their covers link to the original page.
*/
const p = (id) => `4c89f1_${id}`;

export const metadata = {
  title: { absolute: 'Yoga Retreat & Ayurvedic Spa | The Shala Bali' },
  description: 'Experience yoga while you are in Bali. The Shala Bali is the best yoga retreat located in Ubud, which provides full equipped yoga shala.',
  alternates: { canonical: '/yoga-retreat-and-ayurvedic-spa' },
};

const quickLinks = [
  { label: 'Host a Retreat', href: '/host-a-retreat' },
  { label: 'Personal Retreat', href: '/retreat-packages' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Ayurvedic Spa', href: '/darshana-veda-spa' },
];

const tiles = [
  { label: 'Accommodation', id: p('ff87da036b41451c8c93fb57ce3630ac.jpg'), href: '/accommodation/deluxe-rooms' },
  { label: 'About us', id: p('bf154541a3f84853b0371c0d371e46ea.jpg'), href: '/' },
  { label: 'Stay with us', id: p('a73768bdc08646d896be8c2e09e4a404.jpg'), href: '/retreat-packages' },
  { label: 'Ayurvedic Spa', id: p('e905feb9e473492395092c7e7b51bf4b.jpg'), href: '/darshana-veda-spa' },
  { label: 'Retreats', id: p('b9584afb727c40058965f58a0cfcd3da.jpg'), href: '/panchakarma-retreats' },
  { label: 'Cuisine', id: p('7a86cc244eea484babe91603fe80b0e7~mv2.jpg'), href: '/indian-cafe' },
];

const teaserSlugs = [
  '2020/07/14/16-fruits-you-should-grill-this-weekend-4-tips-for-making-them-taste-great',
  '2020/06/30/5-reasons-to-consider-a-regular-meditation-practice-right-now-from-light-watkins',
  '2020/06/22/5-ways-to-have-a-healthier-relationship-with-social-media',
];

export default function LegacyHomePage() {
  const teaser = teaserSlugs.map((s) => posts.find((x) => x.slug === s)).filter(Boolean);
  return (
    <>
      <PageHero
        eyebrow={site.tagline}
        title={{ before: 'Home of', script: 'Wellness' }}
        intro={[
          'Welcome to The Shala Bali, lovingly created as a sanctuary to reconnect with our essence and realign with nature.',
          'Cocooned among magnificent nature of Ubud, the space was founded on the ancient principles of Balinese and Indian philosophy...',
        ]}
      >
        {quickLinks.slice(0, 2).map((q, i) => (
          <MagneticButton key={q.href} href={q.href} variant={i ? 'outline' : 'dark'}>
            {q.label}
          </MagneticButton>
        ))}
      </PageHero>

      <section className={styles.film} aria-label="Video">
        <div className={styles.filmFrame} data-expand>
          <BackgroundVideo id="4c89f1_0cc538aab7ea4548aadb0c7334d2bead" label="A guest with a cup of tea by the window" />
          <ul className={styles.quick}>
            {quickLinks.map((q) => (
              <li key={q.label}>
                <Link href={q.href} className={styles.quickLink}>
                  {q.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Statement label="Harmony">Harmony between Body, Mind, Spirit and Earth, the fundamental ingredients to living a joyful, and healthful life.</Statement>

      <section className={styles.films} aria-labelledby="films-title">
        <div className="container">
          <SectionHead eyebrow={site.name} title="A Day in" script="Paradise" id="films-title" />
          <ul className={styles.filmList} data-stagger>
            {LEGACY_VIDEOS.map((v) => (
              <li key={v.title} data-stagger-item>
                <a href={v.href} target="_blank" rel="noopener noreferrer" className={styles.filmCard}>
                  <span className={styles.filmImg}>
                    <Img id={v.poster} alt="" fill sizes="(min-width: 900px) 33vw, 90vw" />
                    <span className={styles.play} aria-hidden="true">
                      <svg viewBox="0 0 16 16" width="16" height="16">
                        <path d="M4 2.5v11l9.5-5.5z" fill="currentColor" />
                      </svg>
                    </span>
                  </span>
                  <span className={styles.filmName}>{v.title}</span>
                  <span className={styles.filmMeta}>
                    {v.duration} · Play Video on theshalabali.com<span className="visually-hidden"> (opens in a new tab)</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.blog} aria-labelledby="legacy-blog">
        <div className="container">
          <div className={styles.blogHead}>
            <SectionHead eyebrow="Journal" title="Blog" id="legacy-blog" />
            <Link href="/blog" className={styles.more} data-reveal="up">
              All posts →
            </Link>
          </div>
          <CardGrid columns={3}>
            {teaser.map((post) => (
              <ImageCard key={post.slug} id={post.coverImage} title={post.title} text={post.excerpt} href={`/blog/${post.slug}`} ratio="16 / 10" cursor="Read" as="h3" />
            ))}
          </CardGrid>
        </div>
      </section>

      <section className={styles.tiles} aria-labelledby="legacy-explore">
        <div className="container">
          <h2 id="legacy-explore" className="visually-hidden">
            Explore
          </h2>
          <CardGrid columns={3} className={styles.tileGrid}>
            {tiles.map((t, i) => (
              <ImageCard key={t.label} id={t.id} title={t.label} href={t.href} eyebrow={`0${i + 1}`} ratio="4 / 3" cursor="Explore" />
            ))}
          </CardGrid>
        </div>
      </section>

      <section className={styles.voice} aria-label="Guest testimonial">
        <div className={styles.voiceBg} aria-hidden="true" data-parallax="0.2">
          <div className={styles.voiceBgInner} data-parallax-media>
            <Img id={p('7b3813fb96fc4553821cdd69ec370fe5~mv2.jpg')} alt="" fill sizes="100vw" />
          </div>
        </div>
        <figure className={`container ${styles.voiceQuote}`}>
          <blockquote>
            <p className="display" data-split>
              “This place is AMAZING. One of the most unique and beautiful places I have stayed! Very tranquil and peaceful, very private. Has a delicious vegetarian restaurant and staff that were so friendly and welcoming (they even brought cake and sang happy birthday to my fiancé in our room!). This is truly a sanctuary hidden away in the jungle”
            </p>
          </blockquote>
          <figcaption data-reveal="up">
            <span className={styles.voiceName}>Jessica</span>
            <a href={socials.tripadvisor.href} target="_blank" rel="noopener noreferrer">
              Tripadvisor<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </figcaption>
        </figure>
      </section>

      <ContactPanel
        id="legacy-contact"
        title="Contact Us"
        eyebrow={site.name}
        lines={site.address}
        contacts={[
          { label: 'Email', text: site.emails.reservations, href: mailto(site.emails.reservations) },
          { label: 'Call Us', text: site.whatsapp.display, href: `tel:+${site.whatsapp.number}` },
          { label: 'Instagram', text: 'instagram.com/theshalabali', href: socials.instagram.href, external: true },
          { label: 'Pinterest', text: 'pinterest.com/theshalabali', href: socials.pinterest.href, external: true },
        ]}
      />
    </>
  );
}
