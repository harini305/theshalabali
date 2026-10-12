import PageHero from '@/components/sections/PageHero';
import { ContactPanel, MediaReveal, SectionHead } from '@/components/sections/Blocks';
import BackgroundVideo from '@/components/media/BackgroundVideo';
import Slideshow from '@/components/gallery/Slideshow';
import MagneticButton from '@/components/ui/MagneticButton';
import { mediaItems } from '@/lib/assets';
import { spa } from '@/data/pages/spa';
import { site } from '@/data/site';
import styles from './spa.module.css';

export const metadata = {
  title: spa.meta.title,
  description: spa.meta.description,
  alternates: { canonical: '/darshana-veda-spa' },
};

function Book({ variant = 'dark' }) {
  return (
    <div className={styles.book} data-reveal="up">
      <MagneticButton href={site.spa.whatsapp} external variant={variant} ariaLabel="BOOK NOW on WhatsApp (opens in a new tab)">
        Book Now
      </MagneticButton>
      <a href={`tel:${site.spa.phoneTel}`} className={styles.phone}>
        {site.spa.phoneDisplay}
      </a>
    </div>
  );
}

export default function SpaPage() {
  const menu = mediaItems(spa.menu.map((m) => m.id), (i) => spa.menu[i].alt);
  const [motto1, motto2] = spa.motto.split(/\s{2,}/);
  return (
    <>
      <PageHero crumbs={[{ label: 'Darshana Veda Spa' }]} eyebrow={spa.hours} title={{ before: 'Darshana', script: 'Veda Spa' }} intro={spa.ethos[0]} image={spa.hero}>
        <MagneticButton href={site.spa.whatsapp} external>
          Book Now
        </MagneticButton>
      </PageHero>

      <section className={styles.ethosSection} aria-labelledby="spa-ethos">
        <div className={`container ${styles.ethosGrid}`}>
          <div className={styles.videoCol}>
            <div className={styles.video} data-img-reveal>
              <BackgroundVideo id={spa.video.id} label={spa.video.label} />
            </div>
          </div>
          <div className={styles.ethosText}>
            <SectionHead eyebrow="Darshana Veda Spa" title={spa.ethosTitle} id="spa-ethos" size="h3" />
            <div className={styles.ethos} data-stagger>
              {spa.ethos.slice(1).map((t, i) => (
                <p key={t.slice(0, 16)} className={i === 0 ? styles.ethosLead : undefined} data-stagger-item>
                  {t}
                </p>
              ))}
            </div>
            <Book />
          </div>
        </div>
      </section>

      <section className={styles.motto} aria-label="Darshana Veda">
        <div className="container">
          <p className={styles.mottoText} data-reveal="up">
            <span>{motto1}</span>
            <span className={styles.mottoRule} aria-hidden="true" />
            <span>{motto2}</span>
          </p>
        </div>
      </section>

      <section className={styles.menu} aria-labelledby="spa-menu">
        <div className="container">
          <div className={styles.menuHead}>
            <SectionHead eyebrow="Treatments" title={spa.menuTitle} id="spa-menu" />
            <p className={styles.hint} data-reveal="fade">
              Select a page to read it full screen.
            </p>
          </div>
          <div data-reveal="up">
            <Slideshow items={menu} label="Darshana Veda Spa menu" mode="strip" height={520} />
          </div>
        </div>
      </section>

      <section className={styles.pillars} aria-labelledby="spa-pillars">
        <div className="container">
          <h2 id="spa-pillars" className="visually-hidden">
            About our spa
          </h2>
          <div className={styles.pillarGrid} data-stagger>
            {spa.pillars.map((c, i) => (
              <article key={c.title} className={styles.pillar} data-stagger-item>
                <MediaReveal id={c.image.id} alt={c.image.alt} ratio="4 / 5" parallax={0.06} sizes="(min-width: 1200px) 23vw, (min-width: 768px) 45vw, 100vw" />
                <div className={styles.pillarBody}>
                  <span className={styles.pillarNum} aria-hidden="true">
                    {`0${i + 1}`}
                  </span>
                  <h3 className={`display ${styles.pillarTitle}`}>{c.title}</h3>
                  {c.body.map((t) => (
                    <p key={t.slice(0, 16)} className={styles.pillarText}>
                      {t}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <Book />
        </div>
      </section>

      <ContactPanel
        id="spa-contact"
        title={spa.contact.name}
        lines={spa.contact.lines}
        contacts={[
          { label: 'Phone', text: spa.contact.phone.label, href: spa.contact.phone.href },
          { label: 'Whatsapp', text: 'Book Now', href: site.spa.whatsapp, external: true },
          { label: 'Email', text: spa.contact.email.address, href: spa.contact.email.href },
          ...spa.contact.socialLinks.map((s) => ({ label: s.key === 'facebook' ? 'Facebook' : 'Instagram', text: s.href.replace('https://www.', '').replace(/\/(\?.*)?$/, ''), href: s.href, external: true })),
        ]}
      />
    </>
  );
}
