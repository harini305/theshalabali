// Verbatim from theshalabali.com/mumbaistationindiancafe (page-text/mumbaistationindiancafe.txt).
// Typos corrected: "our dishes our made" → "are made"; "guests personal taste" → "guests' personal taste".
const p = (id) => `4c89f1_${id}`;

export const indianCafe = {
  meta: { title: 'Indian Cafe', description: 'Indian food spiced with wellness! We serve pure vegetarian dishes made with the best quality ingredients and authentic flavors.' },
  hero: { id: p('6af07326a82b4e31b8f69b69059c0579~mv2.jpg'), alt: 'A vegetarian Indian plate on a rattan placemat with frangipani' },
  title: 'Mumbai Station',
  tagline: 'Indian food spiced with wellness!',
  intro: [
    'We serve pure vegetarian dishes made with the best quality ingredients and authentic flavors. Enjoy our favorite recipes from India and our special Ayurvedic menu.',
    "Our food is leaning into Sattvic style, light, fresh and perfect for daily consumption AND we always serve delicious condiments to add spice or flavor according to our guests' personal taste!",
  ],
  cards: [
    {
      title: 'Our specialty',
      image: { id: p('c756d8553c444ddfbec42e02be3c3938~mv2.png'), alt: 'Masala dosa with chutneys' },
      text: 'Initially Mumbai Station garden cafe served only Dosa and Masala Chai. Eight years on, we have grown into a welcoming home for locals and holiday makers from around the world who are seeking nourishing, feel good vegetarian food, reminiscent of a home cooked Indian meal. Our masala dosa is still our signature dish!',
    },
    {
      title: 'Ayurvedic Menu',
      image: { id: p('4aeb61f37eec4dbfb26be852491109ce~mv2.jpg'), alt: 'Mumbai Station garden cafe', position: '50% 60%' },
      text: 'Food packed with Prana, to increase our life force and create balance. Our specially designed Ayurvedic menu provides sattvic, soothing foods for the digestion and your individual doshic needs.',
    },
    {
      title: 'How we add extra',
      image: { id: p('f84ac578fc034a299102e287ec450abc~mv2.jpg'), alt: 'Freshly prepared Indian vegetarian dishes' },
      text: 'Mumbai Station produce is thoughtfully sourced and our dishes are made with care & quality, whole ingredients - no hidden additives. We choose the healthiest options where possible, while maintaining authentic taste. You can expect less heavy oils or refined sugars and more whole, vital ingredients.',
    },
  ],
  menuTitle: 'Menu',
  // 7-slide slideshow comp-lujakb75, in source order. Dishes and prices exist only inside these images.
  menu: [
    '67c139aaa38f4704b8855ab617692fe0~mv2.jpg',
    '9fa3b30857a54ee4931991e212371d4c~mv2.jpg',
    '8a41682319234fd5b02ae7d1a1d78648~mv2.jpg',
    '2f6162acb4a540ccabda7cc648f26e36~mv2.jpg',
    '37ca570da97a4acb82893a9f8c0c4a2d~mv2.jpg',
    '6ef071f28dab4b7ebe1d9fbac2d88f9e~mv2.jpg',
    '86a56ab206e64553b71cc7ffc771e1fd~mv2.jpg',
  ].map(p),
};
