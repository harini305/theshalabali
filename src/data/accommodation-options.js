// The "Accommodation options" block repeats on Retreat Packages, Host a retreat, Bungalows and Deluxe Rooms
// with small wording differences per page, kept verbatim here.
const deluxeText = (word) =>
  `Enjoy modern Balinese inspired beauty. Our six ${word} each have a unique design and outlook, some with peaceful jungle views, others overlooking the endless green rice paddies. Located close to the Yoga Shala and Shala Cafe. All villa rooms can be set up as twin or king.`;
const bungalowText =
  'Relax in rustic elegance. Our three Darshana Bungalows built from 100% recycled Javanese wood are a perfect hideaway. Each have a private garden lined with lush greenery and wild flowers. Sitting a stones throw from our beautiful Ayurvedic spa and Indian Cafe. All Darshana Bungalows can be set up as king or twin';
const suiteText =
  'Experience a little extra. Our three suites each with attached living area and kitchen are only available during limited dates. The luxurious master rooms of the Kasih Villa, Ganapati Villa and Rahasia Villa. Two of the three master suites can be set up as twin or king.';

const IMG = {
  deluxe: { id: '4c89f1_a3a4cc47ae204b5e9256bb898fab244b~mv2.jpg', alt: 'Deluxe room with a carved wooden bed and a view over the gardens' },
  bungalow: { id: '4c89f1_95fe79ffff084547b6bd690fc8cfda44~mv2.jpg', alt: 'Interior of a wooden Darshana Bungalow' },
  suite: { id: '4c89f1_d79480eaef6d4095800dbd11c00386b5~mv2.jpg', alt: 'Master suite at The Shala Bali villas' },
};

const make = ([d, b, s]) => [
  { ...IMG.deluxe, title: d.title, text: deluxeText(d.word), href: '/accommodation/deluxe-rooms' },
  { ...IMG.bungalow, title: b, text: bungalowText, href: '/accommodation/bungalows' },
  { ...IMG.suite, title: s, text: suiteText, href: '/accommodation/master-suites' },
];

export const accommodationOptions = {
  retreats: make([{ title: 'Deluxe Rooms', word: 'Deluxe Rooms' }, 'Wooden Bungalows', 'Master Suites (limited availability)']),
  host: make([{ title: 'Villa rooms', word: 'Villa Rooms' }, 'Wooden Bungalows', 'Suite rooms (limited availability)']),
  bungalows: make([{ title: 'Deluxe Rooms', word: 'Villa Rooms' }, 'Wooden Bungalows', 'Master suite (limited availability)']),
  deluxe: make([{ title: 'Deluxe Rooms', word: 'Villa Rooms' }, 'Wooden Bungalows', 'Master suites (limited availability)']),
};

export const brochureLine = 'For a comprehensive room list with layout, we invite you to download our brochure below';
