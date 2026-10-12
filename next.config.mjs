// Permanent redirects from the original Wix slugs to the clean routes of this rebuild.
// Template-only Wix pages (about-1, about-3, about-3-1, about-3-3, lead-collection, recipes,
// product pages) intentionally have no route and fall through to the branded 404.
const wixRedirects = [
  ['/baliyogaretreat', '/yoga-retreat-and-ayurvedic-spa'],
  ['/copy-of-retreat-packages', '/panchakarma-retreats'],
  ['/copy-of-darshana-veda-spa', '/host-a-retreat'],
  ['/darshanavedaspa', '/darshana-veda-spa'],
  ['/mumbaistationindiancafe', '/indian-cafe'],
  ['/copy-of-villa-rooms', '/accommodation/bungalows'],
  ['/copy-of-general', '/accommodation/deluxe-rooms'],
  ['/copy-of-villa-rooms-1', '/accommodation/master-suites'],
  ['/copy-of-services', '/experiences'],
  ['/testamonials', '/testimonials'],
  ['/copy-of-organic-vegetarian-cafe', '/organic-vegetarian-cafe'],
  ['/general-6-1', '/the-shala-cafe'],
  // Duplicated drafts of the Shala Cafe page (same copy, different hero photo)
  ['/copy-of-the-shala-cafe', '/the-shala-cafe'],
  ['/copy-of-the-shala-cafe-1', '/the-shala-cafe'],
  ['/lead-collection-1', '/special-offer'],
  ['/about-3-4', '/la-vie-en-rose-pilates-retreat'],
  ['/about-3-2', '/ayurvedic-wellness-retreat'],
  ['/projects-6', '/causes-we-love'],
  // /contact (and /contact-us) 404 on the source; the real contact block lives on the home page.
  ['/contact', '/#contact'],
  ['/contact-us', '/#contact'],
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  agentRules: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 768, 1024, 1280, 1440, 1920],
    qualities: [75, 85],
  },
  async redirects() {
    return [
      ...wixRedirects.map(([source, destination]) => ({ source, destination, permanent: true })),
      { source: '/single-post/:path*', destination: '/blog/:path*', permanent: true },
    ];
  },
};

export default nextConfig;
