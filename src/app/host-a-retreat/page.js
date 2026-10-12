import PageHero from '@/components/sections/PageHero';
import AccommodationOptions from '@/components/sections/AccommodationOptions';
import { FeatureSplit, MediaReveal, SectionHead, Statement } from '@/components/sections/Blocks';
import BackgroundVideo from '@/components/media/BackgroundVideo';
import MagneticButton from '@/components/ui/MagneticButton';
import { host } from '@/data/pages/host';
import { accommodationOptions } from '@/data/accommodation-options';
import styles from './host.module.css';

export const metadata = {
  title: host.meta.title,
  description: host.intro[1],
  alternates: { canonical: '/host-a-retreat' },
};

export default function HostRetreatPage() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Host a retreat' }]} title={{ before: 'Bring your vision', script: 'to life' }} intro={host.intro[0]} image={host.hero}>
        <MagneticButton href={host.brochure.href}>{host.brochure.label}</MagneticButton>
      </PageHero>

      <Statement label="Created by Yoga teachers">{host.intro[1]}</Statement>

      <FeatureSplit
        labelledBy="host-voice"
        tone="sand"
        media={
          <div className={styles.video} data-img-reveal>
            <BackgroundVideo id={host.video.id} label={host.video.label} />
          </div>
        }
      >
        <SectionHead eyebrow="Testimonial" title={host.testimonial.heading} id="host-voice" size="h3" />
        <figure className={styles.quote} data-reveal="up">
          <span className={styles.mark} aria-hidden="true">
            “
          </span>
          <blockquote>
            <p>{host.testimonial.quote}</p>
          </blockquote>
          <figcaption>{host.testimonial.author}</figcaption>
        </figure>
      </FeatureSplit>

      <section className={styles.brochure} aria-labelledby="host-team">
        <div className={`container ${styles.brochureGrid}`}>
          <div className={styles.brochureMedia}>
            <MediaReveal id={host.brochure.image.id} alt={host.brochure.image.alt} ratio="443 / 353" sizes="(min-width: 1024px) 55vw, 100vw" />
          </div>
          <div className={styles.brochureText}>
            <SectionHead eyebrow="Your retreat" title={host.intro[2]} id="host-team" size="h3" />
            <div data-reveal="up">
              <MagneticButton href={host.brochure.href} variant="outline">
                {host.brochure.label}
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      <AccommodationOptions options={accommodationOptions.host} />
    </>
  );
}
