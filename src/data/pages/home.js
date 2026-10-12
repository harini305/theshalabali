import { mailto, site } from '@/data/site';

// Copy verbatim from theshalabali.com "/" (docs/source-audit/page-text/home.txt) and, for the explore rail
// and facts, short phrases quoted from the page each card links to. No new copy is introduced.
export const home = {
  title: { before: 'Home of', script: 'Wellness' },
  intro: [
    'Welcome to The Shala Bali, lovingly created as a sanctuary to reconnect with our essence and realign with nature.',
    'Cocooned among magnificent nature of Ubud, the space was founded on the ancient principles of Balinese and Indian philosophy.',
  ],
  harmony:
    'The idyllic natural environment, combined with our comprehensive programs are sure to inspire harmony between Body, Mind, Spirit and Earth, the fundamental ingredients to living a joyful, and healthful life.',
  pillars: ['Body', 'Mind', 'Spirit', 'Earth'],
  closing: 'It is our hope that no matter what you are seeking, after a stay at The Shala Bali, you will depart with a greater sense of peace.',
  video: { id: '4c89f1_bd392a7a09674ee2879505daaa4ce9be', label: 'Life at The Shala Bali' },
  collage: { id: '4c89f1_369ccd695482466dbd8787e5fd2fcd86~mv2.png', alt: 'Collage: fresh fruit, a baked tart, the pool beside the villas and a massage at the spa' },
  explore: [
    { title: 'Retreat Packages', href: '/retreat-packages', id: '4c89f1_77fee1c3e92b4b8a82a5f6c9c550f1ac~mv2.jpg', alt: 'Yoga in the open-air shala', text: 'Regain your balance, or take your first steps towards more peace and health.' },
    { title: 'Panchakarma Retreats', href: '/panchakarma-retreats', id: '4c89f1_4e7835023e624170b0eb8b1c4f470b2e~mv2.jpg', alt: 'An Ayurvedic head treatment', text: 'A Retreat to Cleanse, Restore & Reconnect' },
    { title: 'Host a retreat', href: '/host-a-retreat', id: '4c89f1_a8172b96ac6d49c8a543556eabe74f46~mv2.jpg', alt: 'The open-sided yoga shala', text: 'Bring your vision to life' },
    { title: 'Darshana Veda Spa', href: '/darshana-veda-spa', id: '4c89f1_c99f7f4b32994620be04ce96a38cbd57~mv2.jpg', alt: 'Massage beds in the spa pavilion', text: 'At Darshana Veda Spa, we honor mother nature and her ability to renew and restore.' },
    { title: 'Indian Cafe', href: '/indian-cafe', id: '4c89f1_6af07326a82b4e31b8f69b69059c0579~mv2.jpg', alt: 'A vegetarian Indian plate', text: 'Indian food spiced with wellness!' },
    { title: 'Accommodation', href: '/accommodation/deluxe-rooms', id: '4c89f1_a3a4cc47ae204b5e9256bb898fab244b~mv2.jpg', alt: 'A deluxe room with a carved wooden bed', text: 'Enjoy modern Balinese inspired beauty.' },
    { title: 'Experiences', href: '/experiences', id: '4c89f1_9650f705e24349fdadf6872e0a9bfc1f~mv2.jpg', alt: 'Hands at work in a workshop', text: 'Take a small piece of Bali home with you.' },
  ],
  // Facts quoted from the FAQs and Retreat Packages pages.
  facts: [
    { value: '70', unit: '+ yrs', label: 'combined experience of over 70 years in the wellness industry' },
    { value: '1.5', unit: 'hr', label: 'a straight forward 1.5 hour drive from the international airport of Bali' },
    { value: '20', unit: 'min', label: 'only a 20 minute walk away in Ubud town centre' },
    { value: '20', unit: 'm', label: 'A 20 meter salt water, infinity pool. Long enough to do laps!' },
  ],
  contact: {
    title: 'The Shala Bali',
    lines: site.address,
    contacts: [
      { label: 'Whatsapp', text: site.whatsapp.display, href: `https://wa.me/${site.whatsapp.number}`, external: true },
      { label: 'Email', text: site.emails.enquiry, href: mailto(site.emails.enquiry, 'Inquiry') },
    ],
  },
};
