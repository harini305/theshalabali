import { DM_Sans, Fraunces } from 'next/font/google';
import Script from 'next/script';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import { siteUrl } from '@/data/site';
import './globals.css';

// Editorial pairing: Fraunces (variable serif with optical size + soft axes) for display and italic accents,
// DM Sans for text and UI. Self-hosted at build time by next/font.
const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz', 'SOFT'],
  variable: '--ff-fraunces',
  display: 'swap',
});
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--ff-dmsans',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Yoga Retreat in Bali | Ubud | The Shala Bali',
    template: '%s | The Shala Bali',
  },
  description:
    'Experience yoga while you are in Bali. The Shala Bali is the best yoga retreat located in Ubud, which provides full equipped yoga shala. As a holistic wellness sanctuary, The Shala Bali also operates pampering spa treatments and fresh homemade, pure vegetarian Indian food, voted as the best Indian restaurant in Ubud.',
  icons: { icon: '/assets/logo/4c89f1_bab7b4372309459aa58045ea700469c9~mv2.png' },
  openGraph: {
    siteName: 'The Shala Bali',
    images: ['/assets/images/shared/4c89f1_5d417439a7eb443cb602e639ca06f157~mv2.jpg'],
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f7f4ec',
};

// Runs before first paint: enables the pre-hidden hero state only when motion is allowed.
const motionBoot = `try{if(window.matchMedia('(prefers-reduced-motion: no-preference)').matches){document.documentElement.classList.add('motion-ok')}}catch(e){}`;

export default function RootLayout({ children }) {
  const fonts = [fraunces, dmSans].map((f) => f.variable).join(' ');
  return (
    <html lang="en" className={fonts} suppressHydrationWarning>
      <body>
        <Script id="motion-boot" strategy="beforeInteractive">
          {motionBoot}
        </Script>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
