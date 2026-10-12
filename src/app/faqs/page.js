import PageHero from '@/components/sections/PageHero';
import { SectionHead } from '@/components/sections/Blocks';
import Accordion from '@/components/ui/Accordion';
import MagneticButton from '@/components/ui/MagneticButton';
import { faqs } from '@/data/pages/faqs';
import { mailto, site } from '@/data/site';
import styles from './faqs.module.css';

export const metadata = {
  title: 'FAQs',
  description: 'Practical information for guests of The Shala Bali in Ubud: location, food, airport transfers, visas, money, health and safety.',
  alternates: { canonical: '/faqs' },
};

export default function FaqsPage() {
  return (
    <>
      <PageHero crumbs={[{ label: 'FAQs' }]} eyebrow={faqs[0][0]} title={{ script: 'FAQs' }} intro={faqs[0][1]} size="compact" />
      <section className={styles.section} aria-label="Frequently asked questions">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.aside}>
              <SectionHead eyebrow={`${faqs.length} questions`} title={faqs[1][0]} size="h3" />
              <p className={styles.asideText} data-reveal="up">
                {faqs[1][1]}
              </p>
              <div data-reveal="up">
                <MagneticButton href={mailto(site.emails.enquiry, 'Inquiry')} variant="outline">
                  Email
                </MagneticButton>
              </div>
            </div>
            <Accordion items={faqs.slice(2)} />
          </div>
        </div>
      </section>
    </>
  );
}
