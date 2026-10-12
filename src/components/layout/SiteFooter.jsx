import Link from 'next/link';
import MagneticButton from '@/components/ui/MagneticButton';
import { footerLinks, mailto, mainNav, site, socials, whatsappLink } from '@/data/site';
import styles from './SiteFooter.module.css';

const explore = mainNav.flatMap((i) => i.children || [i]);
const follow = [socials.instagram, socials.facebook, socials.tripadvisor, socials.pinterest];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.cta}`}>
        <p className={`eyebrow ${styles.eyebrow}`} data-reveal="fade">
          {site.tagline}
        </p>
        <h2 className={`display ${styles.ctaTitle}`} data-split>
          Regain your balance, or take your first steps towards <em className="script">more peace and health</em>
        </h2>
        <div className={styles.ctaActions} data-reveal="up">
          <MagneticButton href="/retreat-packages" variant="accent">
            Retreat Packages
          </MagneticButton>
          <MagneticButton href={mailto(site.emails.enquiry, 'Inquiry')} variant="ghostLight">
            Email us
          </MagneticButton>
        </div>
      </div>

      <div className={`container ${styles.grid}`} data-stagger>
        <div data-stagger-item>
          <p className={styles.label}>Visit</p>
          <address className={styles.address}>
            {site.address.map((a) => (
              <span key={a}>{a}</span>
            ))}
          </address>
          <a className={styles.link} href={site.map.link} target="_blank" rel="noopener noreferrer">
            Open in Google Maps
          </a>
        </div>
        <div data-stagger-item>
          <p className={styles.label}>Contact</p>
          <a className={styles.link} href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            Whatsapp {site.whatsapp.display}
          </a>
          <a className={styles.link} href={mailto(site.emails.enquiry, 'Inquiry')}>
            {site.emails.enquiry}
          </a>
          <p className={styles.sub}>{site.spa.name}</p>
          <a className={styles.link} href={`tel:${site.spa.phoneTel}`}>
            {site.spa.phoneDisplay}
          </a>
          <span className={styles.note}>{site.spa.hours}</span>
        </div>
        <nav aria-label="Explore" data-stagger-item>
          <p className={styles.label}>Explore</p>
          {explore.map((l) => (
            <Link key={l.href} className={styles.link} href={l.href}>
              {l.label === 'HOME' ? 'Home' : l.label}
            </Link>
          ))}
        </nav>
        <nav aria-label="More pages" data-stagger-item>
          <p className={styles.label}>More</p>
          {footerLinks.map((l) => (
            <Link key={l.href} className={styles.link} href={l.href}>
              {l.label}
            </Link>
          ))}
          <p className={`${styles.label} ${styles.follow}`}>Follow</p>
          {follow.map((s) => (
            <a key={s.href} className={styles.link} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          ))}
        </nav>
      </div>

      <div className={styles.word} aria-hidden="true">
        <span data-split="chars">The Shala <em>Bali</em></span>
      </div>
      <div className={`container ${styles.bottom}`}>
        <span>© {site.name}</span>
        <Link href="/yoga-retreat-and-ayurvedic-spa">{site.tagline}</Link>
      </div>
    </footer>
  );
}
