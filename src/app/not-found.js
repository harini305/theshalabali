import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import MagneticButton from '@/components/ui/MagneticButton';
import { mainNav } from '@/data/site';
import styles from './not-found.module.css';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  const links = mainNav.flatMap((i) => i.children || [i]).filter((l) => l.href !== '/');
  return (
    <>
      <PageHero
        eyebrow="Error 404"
        title={{ before: 'This page could not be', script: 'found' }}
        intro="The page you are looking for does not exist on The Shala Bali website. It may have been an unfinished page or an old address."
      >
        <MagneticButton href="/">Home</MagneticButton>
      </PageHero>
      <nav aria-label="Pages" className={`container ${styles.nav}`}>
        <ul data-stagger>
          {links.map((l) => (
            <li key={l.href} data-stagger-item>
              <Link href={l.href}>
                {l.label}
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
