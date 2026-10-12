import { mailto, site } from '@/data/site';

// Verbatim from theshalabali.com/copy-of-darshana-veda-spa (page-text/copy-of-darshana-veda-spa.txt).
export const host = {
  meta: { title: 'Host a retreat' },
  hero: { id: '4c89f1_a8172b96ac6d49c8a543556eabe74f46~mv2.jpg', alt: 'The open-sided yoga shala with its thatched roof and woven chandelier' },
  title: 'Bring your vision to life',
  intro: [
    'The Shala Bali is a home for people from around the world to learn, share and preserve the ancient practices of Yoga and to experience the benefits of integrated wellness.',
    'The Shala Bali was created by Yoga teachers for Yoga teachers and their groups. The serene and secluded nature environment is ideal for complete immersion and well equipped for trainings and courses.',
    'Our experienced team will work with you to create a memorable and transformational experience for your guests.',
  ],
  testimonial: {
    heading: 'What other hosts are saying',
    quote:
      "Hosting my week long retreat at The Shala Bali exceeded all expectations. The food was phenomenal. The design and architecture of the whole place was just so, so beautiful. Myself and my group of yogis were grateful to have a very relaxing time lazing by the salt water pool, and having long lazy swims in the sunshine. The staff were incredibly generous and helpful too. I'm so appreciative of the amount of support I received from you all in the lead up to and during the retreat itself. I'm already dreaming of the next one!",
    author: 'Amy Landry Yoga & Ayurveda',
  },
  video: { id: '4c89f1_fa23ed753a9a4012afc12475d06e5c7c', label: 'A guest walking out through a carved Balinese doorway' },
  brochure: {
    image: { id: '4c89f1_2f4e52209f9f44409749669e78e50127~mv2.jpg', alt: 'The Shala Bali brochure cover: aerial view of the pool and bale' },
    // Subject kept exactly as on the source, including its typo and trailing space.
    href: mailto(site.emails.reservations, 'Retreat borchure request '),
    label: 'Request brochure',
  },
};
