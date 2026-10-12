import { mailto, site, socials } from '@/data/site';

// Verbatim from theshalabali.com/darshanavedaspa (page-text/darshanavedaspa.txt). Text split across
// Wix elements on the source ("A" / "ll our…", "or t" / "reat yourself…", "OPEN DAILY 9" / ":30") is rejoined.

const p = (id) => `4c89f1_${id}`;
let page = 0;
const menuPage = (id) => ({ id: p(id), alt: `Darshana Veda Spa menu, page ${++page}` });

export const spa = {
  meta: { title: 'Darshana Veda Spa', description: 'At Darshana Veda Spa, we honor mother nature and her ability to renew and restore.' },
  hero: { id: p('c99f7f4b32994620be04ce96a38cbd57~mv2.jpg'), alt: 'Massage beds in the thatched spa pavilion' },
  title: 'Darshana Veda Spa',
  hours: site.spa.hours,
  ethosTitle: 'Our ethos',
  ethos: [
    'At Darshana Veda Spa, we honor mother nature and her ability to renew and restore.',
    'By harnessing the soothing energy of Bali, we aspire to transport all our guests into a state of harmony in the present moment.',
    'We operate on the principle that everything needed to heal the physical body can be found in our natural environment.',
    'Our authentic treatments and lovingly made natural products are testament to our commitment for preserving the ancient healing techniques of Indian Natural medicine and Balinese therapies.',
    'We invite you to find your peace amid verdant nature, flickering candles and the trickle of flowing water',
  ],
  video: { id: '4c89f1_0670203e92e144c3aced8ac62b587137', label: 'A guest walking through the spa garden' },
  motto: 'Darshan ; Vision of the Divine  Veda ; Sacred Knowledge',
  menuTitle: 'Spa Menu',
  // 25 panels in source order (19 menu pages + 6 photos). The treatments and prices exist only inside these images.
  menu: [
    menuPage('1eb0901338a440e997b122e0f65dde00~mv2.png'),
    { id: p('2dedc563b456415c8e759bda02cd44c2~mv2.jpg'), alt: 'Spa journey: candle and frangipani' },
    menuPage('05cb8091d392497fa3a6909cb41de63a~mv2.png'),
    { id: p('c3fa0e5369094fdeb212c570dd7b4c7b~mv2.jpg'), alt: 'Bowls of herbal scrub powders' },
    menuPage('28db924036c3480c9ef53f6eebbe9076~mv2.png'),
    { id: p('8a2b354ae514497ebba2ee1df37f3bc5~mv2.jpg'), alt: 'Spa treatment detail' },
    { id: p('74d1431e50e1407fa38a3edd83753d5a~mv2.jpg'), alt: 'Spa treatment detail' },
    menuPage('516be2daf3d540f690e955a031158292~mv2.png'),
    menuPage('7e5504818bbd48adb4c2b5e9847920b2~mv2.png'),
    { id: p('f857d5216908438f8f5ea7fa625a8a7c~mv2.jpg'), alt: 'Kati basti hot stone treatment' },
    menuPage('7fa8a9e928ec4931a70728b0f43f63c1~mv2.png'),
    { id: p('72b871b3835f4bd9b477d0490757050f~mv2.jpg'), alt: 'Spa treatment detail' },
    { id: p('868bd93e094c449f8085c55b6dc94f2e~mv2.jpg'), alt: 'Facial treatment close-up' },
    menuPage('1e5d65615ebb4bb3b96f5c83f65832f1~mv2.png'),
    menuPage('d69c989b6bf447a8882536bbaf866ca0~mv2.png'),
    { id: p('b7065da1f13c43de9bed8e4e21ccd209~mv2.jpg'), alt: 'Balinese massage' },
    menuPage('de4376139e81411faf4a886beebd9ed5~mv2.png'),
    menuPage('2fc23dbb15e841e68a0104a571114231~mv2.png'),
    menuPage('62b4426e12f4404a8087a3e670e49e19~mv2.png'),
    menuPage('bfd4c51805124a6986fa298ff1a9f0fd~mv2.png'),
    { id: p('215bb21556714808a864ae73bc676527~mv2.jpg'), alt: 'Aromatherapy flower bath' },
    menuPage('4e5311b5c11448b9b7610e1cc2ad68df~mv2.png'),
    menuPage('02c5734c96004065bb109fe46e3d4f8e~mv2.png'),
    menuPage('75f09adea41646e487acecb0324e5f49~mv2.png'),
    menuPage('d18a33af3cc14642b9ca2d0e3647d93f~mv2.png'),
  ],
  pillars: [
    {
      title: 'Earth & skin friendly ingredients',
      image: { id: p('94797e16a5424ceea27e30e2a1ffea6b~mv2.jpg'), alt: 'Bowls of natural spa powders' },
      body: [
        'All our ingredients are mother earth friendly superfoods for the skin! Carefully chosen for their robust healing capabilities.',
        'Luxurious homemade creams & gels to nourish and hydrate, cold pressed massage oils, deliciously fragrant scented powders and spritzes and vibrant plant based nail polish without any nasties. Your skin will feel the quality of our products.',
      ],
    },
    {
      title: 'Ayurveda',
      image: { id: p('f7193a855426487886e782417ce03c74~mv2.png'), alt: 'Copper shirodhara pot' },
      body: [
        'Experience the ancient art of Indian healing, balance and relaxation.',
        'Ayurvedic therapies are deeply rooted in Indian culture. The natural alternative to create harmony and prevent illness. The cornerstone of Ayurvedic medicine is - Balance and Harmony - both internally and in relationship to ones environment.',
      ],
    },
    {
      title: 'At one with nature',
      image: { id: p('23cb67e82a6e4537922eaa9188119304~mv2.jpg'), alt: 'Tea set on a stone table in the spa garden' },
      body: ['"Lose yourself in nature" - and find peace... Ralph Waldo Emerson. One of the most powerful healing elements of our holistic spa experience is being enveloped by nature.'],
    },
    {
      title: 'Signature Bali massage & beauty',
      image: { id: p('b7065da1f13c43de9bed8e4e21ccd209~mv2.jpg'), alt: 'Guest enjoying a Balinese massage' },
      body: ["Embody the peace and gentleness that is Bali with our signature Balinese massage or treat yourself to one of our facials, mani pedi's and body wraps to make your skin glow and spirit sparkle."],
    },
  ],
  contact: {
    name: 'Darshana Veda Spa',
    lines: ['OPEN DAILY 9:30am - 8pm', ...site.address],
    phone: { label: site.spa.phoneDisplay, href: `tel:${site.spa.phoneTel}` },
    email: { href: mailto(site.emails.enquiry, 'Inquiry'), address: site.emails.enquiry },
    socialLinks: [
      { key: 'facebook', ...socials.spaFacebook },
      { key: 'instagram', ...socials.spaInstagram },
    ],
  },
};
