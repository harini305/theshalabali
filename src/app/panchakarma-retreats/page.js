import PageHero from '@/components/sections/PageHero';
import { FeatureSplit, FineList, MediaReveal, SectionHead, Statement } from '@/components/sections/Blocks';
import Accordion from '@/components/ui/Accordion';
import MagneticButton from '@/components/ui/MagneticButton';
import Img from '@/components/ui/Img';
import { panchakarma as p } from '@/data/pages/panchakarma';
import styles from './panchakarma.module.css';

export const metadata = {
  title: p.meta.title,
  description: p.meta.description,
  alternates: { canonical: '/panchakarma-retreats' },
};

export default function PanchakarmaPage() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Panchakarma Retreats' }]} title={{ before: 'Panchakarma', script: 'Retreats' }} intro={p.intro[0]} image={p.hero}>
        <MagneticButton href="#programmes">The programmes</MagneticButton>
      </PageHero>

      <section className={styles.introBlock} aria-label="About Panchakarma">
        <div className={`container ${styles.introGrid}`}>
          <div className={styles.introMedia}>
            <MediaReveal id={p.cleanse.image.id} alt={p.cleanse.image.alt} ratio="4 / 5" sizes="(min-width: 1024px) 34vw, 100vw" />
          </div>
          <div className={styles.introText}>
            <p className="eyebrow" data-reveal="fade">
              Ayurveda
            </p>
            {p.intro.slice(1).map((t) => (
              <p key={t.slice(0, 20)} className={styles.introPara} data-reveal="up">
                {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.benefits} aria-labelledby="pk-benefits">
        <div className={`container ${styles.benefitsGrid}`}>
          <SectionHead eyebrow="Benefits" title={p.benefits.title} intro={p.benefits.lead} id="pk-benefits" align="split" className={styles.benefitsHead} />
          <FineList items={p.benefits.items} numbered columns={2} tone="dark" />
        </div>
      </section>

      <Statement label="Many guests describe">{p.benefits.closing}</Statement>

      <section id="programmes" className={styles.programmes} aria-labelledby="pk-program">
        <div className="container">
          <div className={styles.programHead}>
            <SectionHead eyebrow="Programmes" title={p.programTitle} id="pk-program" />
            <p className={`lead ${styles.setting}`} data-reveal="up">
              {p.setting}
            </p>
          </div>
          <div className={styles.cards} data-stagger>
            {p.programs.map((prog, i) => (
              <article key={prog.duration} className={styles.card} data-stagger-item aria-labelledby={`pk-${i}`}>
                <div className={styles.cardMedia}>
                  <Img id={prog.image.id} alt={prog.image.alt} fill sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw" />
                </div>
                <div className={styles.cardBody}>
                  <h3 id={`pk-${i}`} className={`display ${styles.duration}`}>
                    {prog.duration}
                  </h3>
                  <ul className={styles.list}>
                    {prog.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                  <p className={styles.priceLabel}>The Price :</p>
                  <dl className={styles.prices}>
                    {prog.prices.map((pr) => (
                      <div key={pr.room} className={styles.row}>
                        <dt>{pr.room}</dt>
                        <dd>
                          <span className={styles.idr}>{pr.idr}</span>
                          <span className={styles.usd}>{pr.usd}</span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <MagneticButton href={p.book} ariaLabel={`Book Now: Panchakarma ${prog.duration} (email)`}>
                    Book Now
                  </MagneticButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FeatureSplit image={p.invite.image.id} alt={p.invite.image.alt} ratio="3 / 4" reverse labelledBy="pk-cleanse">
        <SectionHead eyebrow="Healing" title={p.cleanse.title} id="pk-cleanse" size="h3" />
        <p className={styles.para} data-reveal="up">
          {p.cleanse.text}
        </p>
        <p className={styles.para} data-reveal="up">
          {p.invite.text}
        </p>
      </FeatureSplit>

      <section className={styles.doctor} aria-labelledby="pk-personal">
        <div className={`container ${styles.doctorGrid}`}>
          <div className={styles.doctorText}>
            <SectionHead eyebrow="Your care" title={p.personal.title} id="pk-personal" size="h3" />
            {p.personal.paragraphs.map((t) => (
              <p key={t.slice(0, 20)} className={styles.para} data-reveal="up">
                {t}
              </p>
            ))}
            <div className={styles.bio} data-reveal="up">
              <h3 className={`display ${styles.bioTitle}`}>{p.doctor.title}</h3>
              <p>{p.doctor.bio}</p>
            </div>
          </div>
          <div className={styles.portrait} data-img-reveal>
            <Img id={p.doctor.image.id} alt={p.doctor.image.alt} fill sizes="(min-width: 1024px) 460px, 90vw" position="50% 25%" />
          </div>
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="pk-faq">
        <div className={`container ${styles.faqGrid}`}>
          <SectionHead eyebrow="FAQ" title={p.faqTitle} id="pk-faq" size="h3" />
          <Accordion items={p.faqs} />
        </div>
      </section>
    </>
  );
}
