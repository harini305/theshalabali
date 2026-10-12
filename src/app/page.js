import Link from 'next/link';
import { ContactPanel, MediaReveal, Stats } from '@/components/sections/Blocks';
import ScrollSwap from '@/components/sections/ScrollSwap';
import HeroVideo from '@/components/media/HeroVideo';
import Img from '@/components/ui/Img';
import MagneticButton from '@/components/ui/MagneticButton';
import { home } from '@/data/pages/home';
import { indianCafe } from '@/data/pages/indian-cafe';
import { rooms } from '@/data/pages/rooms';
import { testimonials } from '@/data/pages/testimonials';
import { site, socials } from '@/data/site';
import styles from './home.module.css';

export const metadata = {
  title: { absolute: 'Yoga Retreat in Bali | Ubud | The Shala Bali' },
  alternates: { canonical: '/' },
};

const IMG = {
  pool: '4c89f1_a73768bdc08646d896be8c2e09e4a404.jpg',
  statue: '4c89f1_bf154541a3f84853b0371c0d371e46ea.jpg',
  yogaPool: '4c89f1_5d417439a7eb443cb602e639ca06f157~mv2.jpg',
  sunset: '4c89f1_743b1153039c4a2686ba725d78bfc3e0.jpg',
  dosa: '4c89f1_c756d8553c444ddfbec42e02be3c3938~mv2.png',
  cafeGarden: '4c89f1_4aeb61f37eec4dbfb26be852491109ce~mv2.jpg',
};

const explore = Object.fromEntries(home.explore.map((e) => [e.href, e]));
const voices = testimonials.filter((t) => ['Peter Rob', 'Charlene McAuley', 'Rexx Samuel'].includes(t.name));
const stays = ['deluxe-rooms', 'bungalows', 'master-suites'].map((slug) => {
  const r = rooms[slug];
  const [tagline, ...rest] = r.intro.split('. ');
  return { slug, ...r, tagline: `${tagline}.`, body: `${rest.slice(0, 2).join('. ')}.` };
});

function Chapter({ n, children, dark = false }) {
  return (
    <p className={`${styles.chapter} ${dark ? styles.onDark : ''}`} data-reveal="fade">
      <span>{n}</span>
      {children}
    </p>
  );
}

export default function HomePage() {
  const retreat = explore['/retreat-packages'];
  const panchakarma = explore['/panchakarma-retreats'];
  const host = explore['/host-a-retreat'];
  const spa = explore['/darshana-veda-spa'];
  const cafe = explore['/indian-cafe'];
  const retreatTiles = [
    { ...retreat, image: IMG.yogaPool, alt: 'A yoga pose beside the infinity pool, palms behind', main: true },
    { ...panchakarma, image: panchakarma.id },
    { ...host, image: host.id },
  ];

  return (
    <>
      {/* ---------- Cinematic hero ---------- */}
      <section className={styles.hero} data-hero aria-labelledby="page-title">
        <div className={styles.heroMedia} data-hero-media>
          <div className={styles.heroMediaInner} data-hero-zoom>
            <HeroVideo id={home.video.id} label={home.video.label} alt="Aerial view over the jungle and rice terraces around The Shala Bali in Ubud" />
          </div>
          <div className={styles.heroShade} aria-hidden="true" />
        </div>
        <div className={`container ${styles.heroInner}`} data-scroll-fade>
          <p className={styles.heroKicker} data-hero-fade>
            <span>Ubud · Bali</span>
            <span className={styles.heroKickerRule} aria-hidden="true" />
            <span>{site.tagline}</span>
          </p>
          <h1 id="page-title" className={`display ${styles.heroTitle}`}>
            <span className={styles.heroLine} data-hero-split>
              {home.title.before}
            </span>
            <span className={`${styles.heroLine} ${styles.heroScript}`} data-hero-split>
              {home.title.script}
            </span>
          </h1>
          <div className={styles.heroAside}>
            <p className={styles.heroIntro} data-hero-fade>
              {home.intro[0]}
            </p>
            <div className={styles.heroActions} data-hero-fade>
              <MagneticButton href="/retreat-packages" variant="accent">
                Retreat Packages
              </MagneticButton>
              <MagneticButton href="#contact" variant="ghostLight">
                Contact Us
              </MagneticButton>
            </div>
          </div>
        </div>
        <a href="#welcome" className={styles.scrollCue} data-hero-fade>
          <span className={styles.scrollTrack} aria-hidden="true">
            <span />
          </span>
          Scroll to discover
        </a>
      </section>

      {/* ---------- Welcome: image left, story right, bottoms aligned ---------- */}
      <section id="welcome" className={styles.intro} aria-labelledby="welcome-title">
        <div className={`container ${styles.introGrid}`}>
          <div className={styles.introMedia}>
            <MediaReveal id={IMG.pool} alt="The salt water infinity pool between the villas" ratio="auto" className={styles.fillMedia} sizes="(min-width: 1024px) 56vw, 100vw" parallax={0.1} />
            <p className={styles.introCaption}>{home.facts[3].label}</p>
          </div>
          <div className={styles.introText}>
            <div className={styles.introTop}>
              <Chapter n="01">Welcome</Chapter>
              <h2 id="welcome-title" className={`display ${styles.introTitle}`} data-split>
                Cocooned among magnificent nature of <em>Ubud</em>
              </h2>
              <div className={styles.introCopy} data-reveal="up">
                {home.intro.map((p) => (
                  <p key={p.slice(0, 20)}>{p}</p>
                ))}
              </div>
              <div data-reveal="up">
                <MagneticButton href="/yoga-retreat-and-ayurvedic-spa" variant="outline">
                  {site.tagline}
                </MagneticButton>
              </div>
            </div>
            <MediaReveal id={IMG.statue} alt="A carved stone figure in prayer set into a garden wall" ratio="16 / 10" sizes="(min-width: 1024px) 36vw, 100vw" parallax={0.12} position="50% 35%" />
          </div>
        </div>
      </section>

      {/* ---------- Philosophy: photograph with an ivory panel ---------- */}
      <section className={styles.harmony} aria-labelledby="harmony-title">
        <div className={`container ${styles.harmonyFrame}`}>
          <div className={styles.harmonyMedia} data-img-reveal data-parallax="0.12">
            <div className={styles.harmonyMediaInner} data-parallax-media>
              <Img id={host.id} alt="The open-sided yoga shala looking out to the palms" fill sizes="(min-width: 1360px) 1300px, 100vw" />
            </div>
          </div>
          <div className={styles.harmonyPanel} data-reveal="up">
            <Chapter n="02">Our philosophy</Chapter>
            <h2 id="harmony-title" className={`display ${styles.harmonyText}`}>
              {home.harmony}
            </h2>
            <ul className={styles.pillars}>
              {home.pillars.map((p, i) => (
                <li key={p}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Yoga & retreats: aligned bento ---------- */}
      <section className={styles.retreats} aria-labelledby="retreats-title">
        <div className="container">
          <div className={styles.splitHead}>
            <div>
              <Chapter n="03">Yoga &amp; retreats</Chapter>
              <h2 id="retreats-title" className={`display ${styles.sectionTitle}`} data-split>
                Retreats for body, <em>mind &amp; spirit</em>
              </h2>
            </div>
            <p className={styles.splitLead} data-reveal="up">
              {retreat.text}
            </p>
          </div>
          <div className={styles.bento} data-stagger>
            {retreatTiles.map((t) => (
              <Link key={t.href} href={t.href} className={`${styles.tile} ${t.main ? styles.tileMain : ''}`} data-stagger-item>
                <span className={styles.tileImg}>
                  <Img id={t.image} alt={t.alt} fill sizes={t.main ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 40vw, 100vw'} />
                </span>
                <span className={styles.tileBody}>
                  <span className={styles.tileTitle}>{t.title}</span>
                  <span className={styles.tileText}>{t.text}</span>
                </span>
                <span className={styles.tileArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Spa ---------- */}
      <section className={styles.spa} aria-labelledby="spa-title">
        <div className={`container ${styles.spaGrid}`}>
          <div className={styles.spaMedia}>
            <MediaReveal id={spa.id} alt={spa.alt} ratio="4 / 5" sizes="(min-width: 1024px) 45vw, 100vw" parallax={0.14} position="40% 50%" />
          </div>
          <div className={styles.spaText}>
            <Chapter n="04" dark>
              {site.spa.name}
            </Chapter>
            <h2 id="spa-title" className={`display ${styles.spaTitle}`} data-split>
              We honor mother nature and her ability to <em>renew and restore</em>
            </h2>
            <p className={styles.spaQuote} data-reveal="up">
              {spa.text}
            </p>
            <dl className={styles.spaFacts} data-reveal="up">
              <div>
                <dt>Hours</dt>
                <dd>{site.spa.hours}</dd>
              </div>
              <div>
                <dt>Bookings</dt>
                <dd>
                  <a href={`tel:${site.spa.phoneTel}`}>{site.spa.phoneDisplay}</a>
                </dd>
              </div>
            </dl>
            <div className={styles.actions} data-reveal="up">
              <MagneticButton href={site.spa.whatsapp} external variant="accent" ariaLabel="Book the spa on WhatsApp (opens in a new tab)">
                Book Now
              </MagneticButton>
              <MagneticButton href="/darshana-veda-spa" variant="ghostLight">
                Spa menu
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Dining ---------- */}
      <section className={styles.dining} aria-labelledby="dining-title">
        <div className={`container ${styles.diningGrid}`}>
          <div className={styles.diningMain}>
            <MediaReveal id={cafe.id} alt={cafe.alt} ratio="auto" className={styles.fillMedia} sizes="(min-width: 1024px) 56vw, 100vw" parallax={0.1} />
          </div>
          <div className={styles.diningText}>
            <Chapter n="05">{cafe.title}</Chapter>
            <h2 id="dining-title" className={`display ${styles.sectionTitle}`} data-split>
              Indian food <em>spiced with wellness!</em>
            </h2>
            <p className={styles.diningCopy} data-reveal="up">
              {indianCafe.intro[0]}
            </p>
            <div className={styles.diningPair}>
              <MediaReveal id={IMG.dosa} alt="Masala dosa with chutneys" ratio="1 / 1" sizes="(min-width: 1024px) 18vw, 50vw" parallax={0.06} />
              <MediaReveal id={IMG.cafeGarden} alt="The garden cafe seating under the trees" ratio="1 / 1" sizes="(min-width: 1024px) 18vw, 50vw" parallax={0.06} position="50% 60%" />
            </div>
            <ul className={styles.diningLinks} data-reveal="up">
              <li>
                <Link href="/indian-cafe">Indian Cafe</Link>
              </li>
              <li>
                <Link href="/the-shala-cafe">The Shala Cafe</Link>
              </li>
              <li>
                <Link href="/organic-vegetarian-cafe">Organic Vegetarian Cafe</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Accommodation: expanding panels ---------- */}
      <section className={styles.stay} aria-labelledby="stay-title">
        <div className="container">
          <div className={styles.splitHead}>
            <div>
              <Chapter n="06">Accommodation</Chapter>
              <h2 id="stay-title" className={`display ${styles.sectionTitle}`} data-split>
                Rooms, bungalows <em>&amp; suites</em>
              </h2>
            </div>
            <MagneticButton href="/accommodation/deluxe-rooms" variant="outline">
              All accommodation
            </MagneticButton>
          </div>
          <ul className={styles.panels} data-stagger>
            {stays.map((s, i) => (
              <li key={s.slug} className={styles.panel} data-stagger-item>
                <Link href={`/accommodation/${s.slug}`} className={styles.panelLink}>
                  <span className={styles.panelImg}>
                    <Img id={s.hero.id} alt={s.hero.alt} fill sizes="(min-width: 1024px) 60vw, 100vw" />
                  </span>
                  <span className={styles.panelShade} aria-hidden="true" />
                  <span className={styles.panelBody}>
                    <span className={styles.panelNum}>{String(i + 1).padStart(2, '0')}</span>
                    <span className={styles.panelName}>{s.title}</span>
                    <span className={styles.panelTag}>{s.tagline}</span>
                    <span className={styles.panelText}>{s.body}</span>
                    <span className={styles.panelMore}>
                      View {s.title.toLowerCase()} <span aria-hidden="true">→</span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Explore: sticky photo that changes while scrolling ---------- */}
      <ScrollSwap
        tone="forest"
        labelledBy="explore-title"
        head={
          <>
            <Chapter n="07" dark>
              Explore
            </Chapter>
            <h2 id="explore-title" className={`display ${styles.sectionTitle}`} data-split>
              A sanctuary to <em>reconnect</em>
            </h2>
          </>
        }
        items={home.explore.map((e) => ({ title: e.title, text: e.text, href: e.href, linkLabel: `Explore ${e.title}`, image: { id: e.id, alt: e.alt } }))}
      />

      <Stats items={home.facts} />

      {/* ---------- Testimonials ---------- */}
      <section className={styles.voices} aria-labelledby="voices-title">
        <div className="container">
          <div className={styles.splitHead}>
            <div>
              <Chapter n="08">Guest testimonials</Chapter>
              <h2 id="voices-title" className={`display ${styles.sectionTitle}`} data-split>
                What our <em>visitors</em> shared
              </h2>
            </div>
            <MagneticButton href="/testimonials" variant="outline">
              Read all testimonials
            </MagneticButton>
          </div>
          <div className={styles.quotes} data-stagger>
            {voices.map((v) => (
              <figure key={v.name} className={styles.quote} data-stagger-item>
                <span className={styles.mark} aria-hidden="true">
                  “
                </span>
                <blockquote>
                  <p>{v.quote}</p>
                </blockquote>
                <figcaption>
                  <span className={styles.name}>{v.name}</span>
                  <span className={styles.place}>{v.place}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Closing ---------- */}
      <section className={styles.closing} aria-labelledby="closing-title">
        <div className={styles.closingMedia} data-parallax="0.2">
          <div className={styles.closingMediaInner} data-parallax-media>
            <Img id={IMG.sunset} alt="Sunset over the yoga shala roofs and the rice paddies" fill sizes="100vw" position="60% 40%" />
          </div>
        </div>
        <div className={`container ${styles.closingInner}`}>
          <h2 id="closing-title" className={`display ${styles.closingTitle}`} data-split>
            {home.closing}
          </h2>
          <div className={styles.actions} data-reveal="up">
            <MagneticButton href="/retreat-packages" variant="light">
              Discover the retreat
            </MagneticButton>
            <MagneticButton href="/accommodation/deluxe-rooms" variant="ghostLight">
              Explore accommodation
            </MagneticButton>
          </div>
        </div>
      </section>

      <ContactPanel
        title={home.contact.title}
        lines={home.contact.lines}
        contacts={home.contact.contacts}
        actions={
          <>
            <MagneticButton href={socials.instagram.href} external variant="outline">
              Instagram
            </MagneticButton>
            <MagneticButton href={socials.facebook.href} external variant="outline">
              Facebook
            </MagneticButton>
          </>
        }
      />
    </>
  );
}
