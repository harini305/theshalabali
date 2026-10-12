// Business facts copied verbatim from theshalabali.com (docs/PAGE_CONTENT_INVENTORY.md, docs/SITEMAP.md §6).

export const siteUrl = 'https://www.theshalabali.com';

export const site = {
  name: 'The Shala Bali',
  tagline: 'Yoga Retreat & Ayurvedic Spa',
  address: ['Jalan Sanggingan No. 90,', 'Kedewatan, Ubud 80571', 'Bali - Indonesia'],
  whatsapp: { display: '+62 812 3849 6136', number: '6281238496136' },
  spa: {
    name: 'Darshana Veda Spa',
    hours: 'Open daily 9:30am - 8pm',
    phoneDisplay: '+62 8123 632 5617',
    phoneTel: '+6281236325617',
    whatsapp: 'https://wa.me/6281236325617',
  },
  emails: {
    enquiry: 'manager4retreat@gmail.com',
    reservations: 'theshalabali@gmail.com',
    marketing: 'marketing.theshalabali@gmail.com',
  },
  map: {
    label: 'The Shala Bali Yoga Retreat',
    // Search URLs for the pinned place shown in the source's Google Maps embed.
    link: 'https://www.google.com/maps/search/?api=1&query=The%20Shala%20Bali%20Yoga%20Retreat%2C%20Jalan%20Sanggingan%20No.%2090%2C%20Ubud',
    embed: 'https://maps.google.com/maps?q=The%20Shala%20Bali%20Yoga%20Retreat%2C%20Jalan%20Sanggingan%20No.%2090%2C%20Kedewatan%2C%20Ubud&z=16&output=embed',
  },
};

export const socials = {
  facebook: { label: 'Facebook', href: 'https://www.facebook.com/yogaretreatsandtrainingsubud/' },
  instagram: { label: 'Instagram', href: 'https://www.instagram.com/theshalabali/?hl=en' },
  pinterest: { label: 'Pinterest', href: 'https://www.pinterest.com/theshalabali/' },
  tripadvisor: {
    label: 'Tripadvisor',
    href: 'https://www.tripadvisor.com/Hotel_Review-g297701-d10542029-Reviews-The_Shala_Bali-Ubud_Bali.html',
  },
  vimeo: { label: 'Vimeo', href: 'https://vimeo.com/182361958' },
  spaFacebook: { label: 'Darshana Veda Spa on Facebook', href: 'https://www.facebook.com/darshanavedaspa/' },
  spaInstagram: { label: 'Darshana Veda Spa on Instagram', href: 'https://www.instagram.com/darshanavedaspa/?hl=en' },
};

// Desktop and mobile navigation exactly as rendered on the source, mapped to the clean routes.
// The mobile-only "Recipes" item is omitted: /recipes is an empty Wix template page.
export const mainNav = [
  { label: 'HOME', href: '/' },
  { label: 'Retreat Packages', href: '/retreat-packages' },
  { label: 'Host a retreat', href: '/host-a-retreat' },
  { label: 'Panchakarma Retreats', href: '/panchakarma-retreats' },
  { label: 'Darshana Veda Spa', href: '/darshana-veda-spa' },
  { label: 'Indian Cafe', href: '/indian-cafe' },
  {
    label: 'Accommodation',
    children: [
      // Preview images for the desktop mega-menu (paths verified against src/data/asset-manifest.json).
      { label: 'Bungalows', href: '/accommodation/bungalows', image: '/assets/images/shared/4c89f1_95fe79ffff084547b6bd690fc8cfda44~mv2.jpg' },
      { label: 'Deluxe Rooms', href: '/accommodation/deluxe-rooms', image: '/assets/images/shared/4c89f1_a3a4cc47ae204b5e9256bb898fab244b~mv2.jpg' },
      { label: 'Master Suites', href: '/accommodation/master-suites', image: '/assets/images/shared/4c89f1_d79480eaef6d4095800dbd11c00386b5~mv2.jpg' },
    ],
  },
  { label: 'Experiences', href: '/experiences' },
];

// Real pages that exist on the source but are not in its navigation (orphans); linked from the footer.
export const footerLinks = [
  { label: 'FAQs', href: '/faqs' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'Organic Vegetarian Cafe', href: '/organic-vegetarian-cafe' },
  { label: 'The Shala Cafe', href: '/the-shala-cafe' },
  { label: 'Causes we love', href: '/causes-we-love' },
];

export function mailto(address, subject) {
  // The source subjects are kept verbatim (including their typos and trailing spaces).
  return subject ? `mailto:${address}?subject=${encodeURIComponent(subject)}` : `mailto:${address}`;
}

export function whatsappLink(number = site.whatsapp.number) {
  return `https://wa.me/${number}`;
}
