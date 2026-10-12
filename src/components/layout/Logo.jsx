import Image from 'next/image';
import Link from 'next/link';
import { asset } from '@/lib/assets';
import styles from './Logo.module.css';

const WORDMARK = '4c89f1_732e2d9c5b074b8abdfc4f6be9041ef3~mv2.png';
const MARK = '4c89f1_beea449628054d7b8c303ccfa314816b~mv2.png';

/** The Home header lockup: teal "The Shala Bali" wordmark stacked over the leaf mark. */
export default function Logo({ className = '', priority = false, onClick }) {
  const w = asset(WORDMARK);
  const m = asset(MARK);
  return (
    <Link href="/" className={`${styles.logo} ${className}`} aria-label="The Shala Bali – home" onClick={onClick}>
      <Image src={w.src} width={w.w} height={w.h} alt="" className={styles.wordmark} preload={priority} unoptimized />
      <Image src={m.src} width={m.w} height={m.h} alt="" className={styles.mark} preload={priority} unoptimized />
    </Link>
  );
}
