'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { mainNav } from '@/data/site';
import styles from './DesktopNav.module.css';

function isActive(pathname, href) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
}

const label = (l) => (l === 'HOME' ? 'Home' : l);

/** Desktop navigation with rolling-text hover links and an Accommodation mega-menu (hover, click or keyboard). */
export default function DesktopNav({ pathname, className = '' }) {
  return (
    <nav className={`${styles.nav} ${className}`} aria-label="Main">
      <ul className={styles.list}>
        {mainNav.map((item) =>
          item.children ? (
            <Mega key={item.label} item={item} pathname={pathname} />
          ) : (
            <li key={item.href}>
              <Link href={item.href} className={styles.link} aria-current={isActive(pathname, item.href) ? 'page' : undefined}>
                <span className={styles.roll}>
                  <span className={styles.rollInner} data-text={label(item.label)}>
                    {label(item.label)}
                  </span>
                </span>
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}

function Mega({ item, pathname }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const btnRef = useRef(null);
  const timer = useRef(null);
  const active = item.children.some((c) => isActive(pathname, c.href));

  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return undefined;
    const onDoc = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const enter = () => {
    clearTimeout(timer.current);
    setOpen(true);
  };
  const leave = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 180);
  };

  return (
    <li
      ref={ref}
      className={styles.dropdown}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={btnRef}
        type="button"
        className={`${styles.link} ${active ? styles.activeParent : ''}`}
        aria-expanded={open}
        aria-controls="accommodation-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.roll}>
          <span className={styles.rollInner} data-text={item.label}>
            {item.label}
          </span>
        </span>
        <svg className={styles.caret} width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      </button>
      <div id="accommodation-menu" className={`${styles.mega} ${open ? styles.open : ''}`}>
        <ul className={styles.megaList}>
          {item.children.map((c, i) => (
            <li key={c.href} style={{ '--i': i }}>
              <Link href={c.href} className={styles.megaCard} aria-current={isActive(pathname, c.href) ? 'page' : undefined} tabIndex={open ? 0 : -1}>
                <span className={styles.megaImg}>
                  <Image src={c.image} alt="" fill sizes="240px" />
                </span>
                <span className={styles.megaLabel}>
                  <span className={styles.megaNum}>0{i + 1}</span>
                  {c.label}
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
