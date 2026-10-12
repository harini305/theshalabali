'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { useGSAP } from '@gsap/react';

// Register once for the whole app (safe to call repeatedly).
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, useGSAP);
  gsap.defaults({ ease: 'power3.out', duration: 1 });
  ScrollTrigger.config({ ignoreMobileResize: true });
  // Exposed for the QA harness (scripts/qa/check.mjs counts triggers to catch duplicates).
  window.ScrollTrigger = ScrollTrigger;
}

export { gsap, ScrollTrigger, SplitText, DrawSVGPlugin, useGSAP };
