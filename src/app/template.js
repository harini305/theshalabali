'use client';

import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useGSAP } from '@/lib/animations/gsap';
import { setupPageMotion } from '@/lib/animations/effects';

// Each page gets a fresh, scoped GSAP context that is reverted (tweens and ScrollTriggers killed) when the
// user leaves it. template.js only remounts when the top-level segment changes, so moving between sibling
// routes (e.g. /accommodation/deluxe-rooms → /accommodation/master-suites) re-runs the setup via the pathname.
export default function Template({ children }) {
  const ref = useRef(null);
  const pathname = usePathname();
  useGSAP(() => setupPageMotion(ref.current), { scope: ref, dependencies: [pathname], revertOnUpdate: true });
  return (
    <div ref={ref} className="page-root">
      {children}
    </div>
  );
}
