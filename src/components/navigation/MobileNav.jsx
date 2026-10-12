'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { gsap, useGSAP } from '@/lib/animations/gsap';
import { footerLinks, mailto, mainNav, site, whatsappLink } from '@/data/site';
import styles from './MobileNav.module.css';

const noopSubscribe = () => () => {};
const LEGACY_HOME = '/yoga-retreat-and-ayurvedic-spa';

/** "Menu" button + full-screen overlay menu. Focus trap, Esc to close, page scroll locked while open. */
export default function MobileNav({ pathname }) {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const toggleRef = useRef(null);
  const overlayRef = useRef(null);
  const tl = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useGSAP(
    () => {
      const el = overlayRef.current;
      if (!el) return;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      tl.current = gsap
        .timeline({ paused: true, onReverseComplete: () => gsap.set(el, { visibility: 'hidden' }) })
        .set(el, { visibility: 'visible' })
        .fromTo(el, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: reduce ? 0.01 : 0.9, ease: 'expo.inOut' });
      if (!reduce) {
        tl.current
          .fromTo(el.querySelectorAll('[data-line]'), { yPercent: 110 }, { yPercent: 0, duration: 1, ease: 'expo.out', stagger: 0.045 }, 0.45)
          .fromTo(el.querySelectorAll('[data-fade]'), { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.06 }, 0.7);
      }
    },
    { dependencies: [mounted], scope: overlayRef },
  );

  useEffect(() => {
    if (!tl.current) return undefined;
    if (open) {
      tl.current.timeScale(1).play();
      document.documentElement.style.overflow = 'hidden';
      overlayRef.current.style.visibility = 'visible';
      overlayRef.current.querySelector('a, button')?.focus();
    } else {
      tl.current.timeScale(1.8).reverse();
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === 'Tab') {
        const nodes = [...overlayRef.current.querySelectorAll('a, button')];
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const links = mainNav.flatMap((i) => (i.children ? i.children.map((c) => ({ ...c, group: i.label })) : [i]));

  const overlay = (
    <div ref={overlayRef} className={styles.overlay} id="mobile-menu" role="dialog" aria-modal="true" aria-label="Site menu" aria-hidden={!open} inert={!open}>
      <div className={styles.top}>
        <span className={styles.brand} data-fade>
          {site.name}
        </span>
        <button type="button" className={styles.close} onClick={close} aria-label="Close menu">
          <span>Close</span>
          <span className={styles.x} aria-hidden="true" />
        </button>
      </div>
      <div className={styles.body}>
        <nav aria-label="Main" className={styles.nav}>
          <ol className={styles.list}>
            {links.map((l, i) => (
              <li key={l.href} className={styles.item}>
                <span className={styles.mask}>
                  <Link href={l.href} className={styles.link} data-line onClick={close} aria-current={pathname === l.href ? 'page' : undefined}>
                    <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                    {l.label === 'HOME' ? 'Home' : l.label}
                    {l.group && <span className={styles.group}>{l.group}</span>}
                  </Link>
                </span>
              </li>
            ))}
          </ol>
        </nav>
        <aside className={styles.aside}>
          <div data-fade>
            <p className={styles.label}>Visit</p>
            <address>
              {site.address.map((a) => (
                <span key={a}>{a}</span>
              ))}
            </address>
          </div>
          <div data-fade>
            <p className={styles.label}>Contact</p>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Whatsapp {site.whatsapp.display}
            </a>
            <a href={mailto(site.emails.enquiry, 'Inquiry')}>{site.emails.enquiry}</a>
          </div>
          <div data-fade>
            <p className={styles.label}>More</p>
            {footerLinks.slice(0, 3).map((l) => (
              <Link key={l.href} href={l.href} onClick={close}>
                {l.label}
              </Link>
            ))}
            <Link href={LEGACY_HOME} onClick={close}>
              {site.tagline}
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );

  return (
    <>
      <button ref={toggleRef} type="button" className={styles.toggle} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}>
        <span className={styles.toggleText}>Menu</span>
        <span className={styles.bars} aria-hidden="true">
          <span />
          <span />
        </span>
      </button>
      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
