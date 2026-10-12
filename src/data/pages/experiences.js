// Verbatim from theshalabali.com/copy-of-services, in the visual 3-column order.
// SOURCE DEFECT kept: the "Balinese Offering Making" description stops mid-sentence on the live site
// ("Learn the meaning and"); it is shown with an ellipsis rather than invented text.
const p = (id) => `4c89f1_${id}`;

export const experiences = {
  meta: { title: 'Experiences', description: 'The joy of life comes from our encounters with new experiences. Take a small piece of Bali home with you.' },
  hero: { id: p('9650f705e24349fdadf6872e0a9bfc1f~mv2.jpg'), alt: 'Hands shaping a wooden bowl in a workshop' },
  title: 'Experiences',
  intro: 'The joy of life comes from our encounters with new experiences. Take a small piece of Bali home with you.',
  items: [
    { title: 'Sacred Mala Making', image: p('261221bd80644ded94a28e2c82d14073~mv2.jpg'), alt: 'Guest threading beads for a mala necklace', text: 'Design a unique sacred Mala necklace to take home with you. Choose beads based on their healing attributes to inspire you on your journey.' },
    { title: 'Chocolate Making', image: p('b1fd44c070514357ae9fa4071a63d9f7~mv2.jpg'), alt: 'Tasting freshly made raw chocolate', text: 'Most of us crave a sweet treat. Learn to make guilt free, antioxidant packed, scrumptious chocolate' },
    { title: 'Vegetarian Balinese Cooking', image: p('68bc43fd07d94c8a81340a9793936b98~mv2.png'), alt: 'Balinese vegetarian dishes from the cooking class', text: "From garden to table, you'll learn how to turn fresh local produce into a delicious three course meal." },
    { title: 'Raw Dessert Making', image: p('97e9ade8bacb41188ff431a5aa972085~mv2.jpg'), alt: 'Raw cheesecake tart topped with raspberries', text: 'Live healthy desserts to sweeten your tooth and your spirit.' },
    { title: 'Balinese Offering Making', image: p('5e8bcc4967b1449a9f22f37254c87e80~mv2.jpeg'), alt: 'Colourful Balinese canang offerings', text: 'The beauty of Bali would not be the same without these little colorful baskets of devotion scattered throughout the temples, businesses and homes. Learn the meaning and…' },
    { title: 'Ayurvedic Cooking', image: p('06bdaa761d694173903af1ba66008ea0~mv2.jpg'), alt: 'Golden turmeric tea at Mumbai Station', text: 'Learn our favorite tridoshic recipes from our Vedic Kitchen, to balance and nourish your belly-mind!', badge: 'Coming soon' },
    { title: 'Natural skin care making', image: p('ccc062038f094942b8603c8925254213~mv2.jpg'), alt: 'Handmade natural skin care products', text: 'Wondering how we make our lush skin care? We will share the recipes for some of our favorite natural products you can encounter at our nature spa Darshana Veda.', badge: 'Coming soon' },
  ],
};
