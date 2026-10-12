'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import DesktopNav from '@/components/navigation/DesktopNav';
import MobileNav from '@/components/navigation/MobileNav';
import { mailto, site } from '@/data/site';
import styles from './SiteHeader.module.css';

/** Floating header: transparent at the top, frosted once scrolled, hides on scroll down and returns on scroll up. */
export default function SiteHeader() {
  const pathname = usePathname();
  const [state, setState] = useState({ scrolled: false, hidden: false });
  const last = useRef(0);
  // Pages that open on a full-bleed dark hero get a transparent, light header until scrolled.
  const overHero = pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const down = y > last.current && y > 240;
      last.current = y;
      setState((s) => (s.scrolled === y > 24 && s.hidden === down ? s : { scrolled: y > 24, hidden: down }));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${state.scrolled ? styles.scrolled : ''} ${state.hidden ? styles.hidden : ''} ${overHero && !state.scrolled ? `${styles.onHero} nav-on-hero` : ''}`}
      onFocusCapture={() => state.hidden && setState((s) => ({ ...s, hidden: false }))}
    >
      <div className={styles.inner}>
        <Logo className={styles.logo} priority />
        <DesktopNav pathname={pathname} className={styles.nav} />
        <div className={styles.actions}>
          <a className={styles.cta} href={mailto(site.emails.enquiry, 'Inquiry')}>
            <span>Enquire</span>
            <svg viewBox="0 0 14 14" width="12" height="12" aria-hidden="true">
              <path d="M1 7h11M7.5 2.5 12 7l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
          <MobileNav pathname={pathname} />
        </div>
      </div>
      <Link href="/yoga-retreat-and-ayurvedic-spa" className="visually-hidden">
        {site.tagline}
      </Link>
    </header>
  );
}
