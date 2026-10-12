import PageHero from '@/components/sections/PageHero';
import { MediaReveal, SectionHead } from '@/components/sections/Blocks';
import styles from './causes.module.css';

/*
  theshalabali.com/projects-6. Only the Villa Kitty entry is owner content; the intro, "Mission Pawsible"
  description and "Project Name" entry are Wix placeholders and are not reproduced.
*/
export const metadata = {
  title: 'Causes we love',
  description: 'Villa Kitty: a nursery for mothers, a hospital for the unwell and a safe haven for all Bali cats.',
  alternates: { canonical: '/causes-we-love' },
};

export default function CausesPage() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Causes we love' }]} title={{ before: 'Causes', script: 'we love' }} size="compact" />
      <section className={styles.section} aria-labelledby="villa-kitty">
        <div className="container">
          <MediaReveal id="4c89f1_f629079f5ecc442a9cc5a123d0247917~mv2.png" alt="A rescued kitten looking at the camera" ratio="537 / 245" parallax={0.1} sizes="(min-width: 1360px) 1300px, 100vw" />
          <div className={styles.grid}>
            <SectionHead eyebrow="Bali animal welfare" title="Villa Kitty" id="villa-kitty" />
            <p className={styles.text} data-reveal="up">
              A nursery for mothers, a hospital for the unwell and a safe haven for all Bali cats who are in desperate need of love and care. Villa Kitty has worked tirelessly to provide a shelter for the many many cats who have been abandoned to live in scary and painful situations. They are the loving hand that takes in cats of all shapes, sizes and medical difficulties. The Shala Bali is ever grateful for their compassion and for making Bali a better place for our furry fellow beings.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
