import { accommodationOptions } from '@/data/accommodation-options';
import { mailto, site } from '@/data/site';

/*
  Verbatim from theshalabali.com/copy-of-villa-rooms, /copy-of-general and /copy-of-villa-rooms-1.
  SOURCE CONFLICTS kept as published (owner to confirm; see docs/CONTENT_DECISIONS.md):
  - Bungalows intro says "four bungalows"; the room text and other pages say three.
  - "Darshana Deluxe Bungalow" repeats the Darshana Bungalows description, amenities and booking subject.
  - The three Master Suites descriptions are copied from the Deluxe Rooms page (Kasih ← Ganesh & Jivana, etc.).
  Typo corrected: "teak would luggage chests" → "teak wooden luggage chests"; "Suite 26sqm" → "Suite 26 sqm".
*/

const amenities = (bed = 'King or twin bed set up', extra = []) => [
  'Free WiFi', bed, 'High-end mattresses with toppers', 'Rain shower', ...extra, 'Air-conditioning', 'Cotton mosquito nets',
  'Ceiling fan', 'Safe for valuables', 'Ensuite bathroom', 'Mini fridge', 'Natural bath amenities', 'Tea making facility',
];

const book = (subject) => mailto(site.emails.reservations, subject);
const g = (ids) => ids.map((id) => `4c89f1_${id}`);

const ganeshText = 'North facing double bedrooms with expansive rice paddy views and beautifully hand carved wooden doors. Jivana room has a semi open bathroom and traditional peaked ceiling while Ganesh room has an enclosed bathroom for more privacy and a cosy corner lounge.';
const rahasiaText = 'Elegant rooms with lush jungle outlook or pool view. Boasting colorful interiors and Balinese touches. Decorated with stone carvings, lovely teak wooden luggage chests and elegant bathrooms.';
const ganapatiText = 'Spacious triple rooms with west facing balconies overlooking the paddy fields. Equipped with a work desk and sofa bed sleeping an extra person. Semi open bathrooms with open air shower in the upper room.';
const darshanaText = 'Our three traditional Darshana Bungalows are each enclosed in their own lush and fully private garden. With natural wood interior and semi open bathrooms.';

export const rooms = {
  bungalows: {
    title: 'Bungalows',
    hero: { id: '4c89f1_49daee6abfe346aeb35f3dcb964730e9~mv2_d_4096_2304_s_2.jpg', alt: 'Thatched roof of a Darshana Bungalow' },
    intro: 'Relax in rustic elegance. Our four bungalows are built from 100% recycled Javanese wood are a perfect hideaway. Each have a private garden lined with lush greenery and wild flowers. Sitting a stones throw from our beautiful Ayurvedic spa and Indian Cafe. All Darshana Bungalows can be set up as king or twin',
    profiles: [
      {
        name: 'Darshana Bungalows',
        text: darshanaText,
        amenities: amenities(),
        sizes: ['Suite 24 sqm', 'Terrace 16 sqm', 'Max. capacity: 2'],
        book: book('Reservation Darshana Bungalow'),
        gallery: g(['59c52e3eb3e0498e8f2562f3f33d1d89~mv2.jpg', '22c6848b2ec0494893eeda5709963ced.jpg', '49daee6abfe346aeb35f3dcb964730e9~mv2_d_4096_2304_s_2.jpg', '743d6147719641509f0600dcbe7b525d~mv2.jpg', '073222969ba747ada9126b4dd8e4c8b7~mv2.jpg', '40f1bd1d9c624982a266363f233fcdbc~mv2.jpg']),
      },
      {
        name: 'Darshana Deluxe Bungalow',
        text: darshanaText,
        amenities: amenities(),
        sizes: ['Suite 24 sqm', 'Terrace 16 sqm', 'Max. capacity: 2'],
        book: book('Reservation Darshana Bungalow'),
        gallery: g(['66395c376efa45698cd927afb99c6fd6~mv2.jpg', 'ca8ef460bfc04007aba649ff0aee3892~mv2.jpg', '0d89eed1e6b94e7b904bee0f0e96def5~mv2.jpg', '78ce044c2338421a80eab87d034929d4~mv2.jpg', '2029cf89e73d4af4bccaba47ef09dbbc~mv2.jpg', '74d25827c9194245a08431334f2f64c9~mv2.jpg']),
      },
      {
        name: 'Kasih bungalow',
        text: 'This pretty Balinese hut is a favorite for solo guests or couples. Made with antique wood from Java it has a cozy interior with glass doors opening to a beautiful open air bathtub.',
        amenities: amenities('King bed set up only', ['Bathtub']),
        sizes: ['Suite 24 sqm', 'Terrace 16 sqm', 'Max. capacity: 2'],
        book: book('Reservation Pretty Balinese Hut'),
        gallery: g(['180a84ecfb52451d95a8b3cc257d6879~mv2.jpg', '109f708d20f9490f90c7b109cff7283c.jpg', 'dbbf38bb1ae04d0d8ef8efee52272097.jpg', '8d8d59dbaec7478f986c0b3dc531c6a5.jpg', 'aba8bbf7c9554bfb94dabb09cf6b8e0e~mv2.jpg', 'c032243ab5614a1a8833a4220756e7a2~mv2.jpg']),
      },
    ],
    options: accommodationOptions.bungalows,
  },
  'deluxe-rooms': {
    title: 'Deluxe Rooms',
    hero: { id: '4c89f1_9c2225d3173d4119bbc92d79e9774029~mv2.jpg', alt: 'Deluxe room interior with carved wooden details' },
    intro: 'Enjoy modern Balinese inspired beauty. Our six Deluxe Rooms each have a unique design and outlook, some with peaceful jungle views, others overlooking the endless green rice paddies. Located close to the Yoga Shala and Shala Cafe. All villa rooms can be set up as twin or king.',
    profiles: [
      {
        name: 'Ganesh & Jivana Rooms',
        text: ganeshText,
        amenities: amenities(),
        sizes: ['Room 20 sqm', 'Balcony', 'Bathroom', 'Max. capacity: 2'],
        book: book('Reservation Ganesh / Jivana room'),
        gallery: g(['ff87da036b41451c8c93fb57ce3630ac.jpg', '72c0f6c3e9704b9fb70fbdb562ce99c3~mv2.jpg', '69f08cd68fea4cb2b387577168b1eb0a~mv2.jpg', '6d1344f1ba074a8f8450441cd54a60ff~mv2.jpg', '6e1017848e2047269a434de06cf60a36~mv2.jpg', 'ac3f7d7f6fcf4fd69233efe2255726c7.jpg']),
      },
      {
        name: 'Rahasia Rooms',
        text: rahasiaText,
        amenities: amenities(),
        sizes: ['Room 19 sqm', 'Balcony', 'Bathroom', 'Max. capacity: 2'],
        book: book('Reservation Rahasia Green / Purple'),
        gallery: g(['f508874f9fcd4dd7ba3850290380473a~mv2.jpg', 'aba371cd481d4a318bb9fef4fc26bf9d~mv2.jpg', 'f5e54442131b45a38f0b26ebf4ce840a.jpg', '46c4a60f100e4a15834e098cacd1f019.jpg', 'd5cc086629484924b7f4f54ceb619435.jpg', '1858e1671f114e5e808e6281141c78dd~mv2.jpg']),
      },
      {
        name: 'Ganapati Rooms',
        text: ganapatiText,
        amenities: amenities(),
        sizes: ['Suite 24 sqm', 'Terrace 16 sqm', 'Max. capacity: 3'],
        book: book('Reservation Ganapati room'),
        gallery: g(['bb9be0ec230d4745b84d85d49c45653d~mv2.jpg', 'fc69eb7dcd7745eca900096616c06e6d.jpg', '1efe5d1cae4d44e084c6fc829f06a877~mv2_d_3744_5616_s_4_2.jpg', 'daabaf95b1894ff0b60a8c8cf82369ee~mv2.jpg', 'c9ceba1608204ca88141b2e42ec598f4~mv2.jpg', '43edb8f1fa14485b930c5bdef9113146~mv2.jpg']),
      },
    ],
    options: accommodationOptions.deluxe,
  },
  'master-suites': {
    title: 'Master Suites',
    hero: { id: '4c89f1_d79480eaef6d4095800dbd11c00386b5~mv2.jpg', alt: 'Master suite at The Shala Bali villas' },
    intro: 'Experience a little extra. Our three master suites each with attached living area and kitchen are only available during limited dates. The luxurious master rooms of the Kasih Villa, Ganapati Villa and Rahasia Villa. Two of the three master suites can be set up as twin or king.',
    profiles: [
      {
        name: 'Kasih suite',
        text: ganeshText,
        amenities: amenities(),
        sizes: ['Suite 26 sqm', 'Balcony', 'Bathroom', 'Max. capacity: 2'],
        book: book('Reservation Kasih master Suite'),
        gallery: g(['a216b4d6f25144fa959f622adbd482b6.jpg', '397f40aa8a8b494b8d46e24579baee82.jpg', '2ab5c2458fa04e248231f757317656e2.jpg', 'b30edd834aa243e59c8aa7c816726d59.jpg', 'ea888e482d7e477f850469e41f9d82c0~mv2.jpg', 'd8fae7c51c3341d68ff9bf6cc7f96130~mv2.jpg']),
      },
      {
        name: 'Ganapati suite',
        text: rahasiaText,
        amenities: amenities(),
        sizes: ['Suite 24 sqm', 'Terrace 16 sqm', 'Max. capacity: 2'],
        book: book('Reservation Ganapati Master suite'),
        gallery: g(['ea4ca4c27eca49df8112cb250223578e~mv2.jpg', 'd827976d4a334e8ab8854c1d07f4f8ee~mv2.jpg', '08b3fb59dbad480aaf1b580ccc5a592e.jpg', 'e6f902a87d3141fd97483c5b83828c3b.jpg', 'f686443228aa4ee9a3b621797b6c0ddd.jpg', 'da68aaa8fc884b5ba3af8b96ffce446d~mv2_d_1772_2655_s_2.jpg']),
      },
      {
        name: 'Rahasia suite',
        text: ganapatiText,
        amenities: amenities(),
        sizes: ['Suite 24 sqm', 'Terrace 16 sqm', 'Max. capacity: 2'],
        book: book('Reservation Rahasia Master suite'),
        gallery: g(['948969eacdb04744be2de620ba854ec8~mv2.jpg', '97450f3af49d43a48d65f2b70f7e64f6.jpg', 'b01fcb1de3c649f086a26c8a2e2ad513~mv2.jpg', '4904809897fb48f5a1dbf71bd5af338f~mv2.jpg', '617590030e4b4c8eb4960512d18cac93~mv2.jpg', 'd1f090c8ff304b3db8d4c8fdfa3a2a08~mv2.jpeg']),
      },
    ],
    options: null, // The Master Suites page has no cross-link cards, only the brochure line.
  },
};

export const roomSlugs = Object.keys(rooms);
