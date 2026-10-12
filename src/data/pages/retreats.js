import { mailto, site } from '@/data/site';

// Verbatim from theshalabali.com/retreat-packages (docs/PAGE_CONTENT_INVENTORY.md; page-text/retreat-packages.txt).
// Corrections applied (pure typos only, see docs/CONTENT_DECISIONS.md): "Whether your are" → "Whether you are",
// "Camphuan" → "Campuhan", "(1 hours per day)" → "(1 hour per day)". Facts are unchanged.

const BOOK = mailto(site.emails.marketing, 'In-house retreat inquiry');
const PRICE_LINK = mailto(site.emails.enquiry, 'In-house retreat inquiry');

const baseInclusions = (transfer = 'Airport or hotel transfers') => [
  transfer,
  'Accommodation of your choice',
  'Daily morning yoga 90mins',
];

export const retreats = {
  meta: {
    title: 'Yoga Retreat Packages at The Shala Bali',
    description:
      "Indulge yourself in a comprehensive yoga retreat program presented at The Shala Bali. The Yoga, the healthy foods, the spa treatments and comfortable stay at our accommodation. That's all you will only need to rejuvenate your wellbeing.",
  },
  hero: { id: '4c89f1_77fee1c3e92b4b8a82a5f6c9c550f1ac~mv2.jpg', alt: 'Woman practising yoga in the open-air shala' },
  title: 'Personalized Retreats',
  lead: ['Regain your balance, or take your first steps towards ', 'more peace and health', '.'],
  intro:
    'Whether you are wanting to turn over a new leaf or deepen your experience of healthful living, our retreats are designed to meet you where you are and inspire transformation. Gift yourself a personal wellness journey, a space for reflection and some much needed ',
  apart: {
    title: ['What sets our Bali', 'retreat packages apart?'],
    items: [
      'Authentic Balinese & Indian healing modalities',
      'Unparalleled location - secluded nature setting, within walking distance to the heart of Ubud',
      'Flexible dates invite you to come any time & stay as long as you wish',
      'Customizable inclusions for a personalized journey',
      'Around the clock support with arrival and onward travel assistance.',
      'Two restaurants to choose from! Serving deliciously nourishing chef crafted vegetarian cuisine at The Shala Cafe & specialized Ayurvedic meals from our Pure vegetarian Indian restaurant.',
      'Private workshops of your choice',
      'Our luxe turn down service for your evening comfort',
    ],
    video: { id: '4c89f1_64a7cfad49334ac697a72b10f2bc1ce0', label: 'Hand mudra and grass close-ups', loop: false },
  },
  journeyTitle: 'Choose your journey',
  footnote: ['Quoted price is for 6 nights in private bungalow room.', 'See below for room options. Click book now for further rates'],
  packages: [
    {
      slug: 'healthy-holiday',
      title: 'Healthy Holiday Retreat',
      image: { id: '4c89f1_a726b82932c24e3d87fbaa79b29e5ca5~mv2.jpg', alt: 'Guest relaxing by the salt water infinity pool' },
      inclusions: [
        ...baseInclusions(),
        'All rejuvenating vegetarian meals - breakfasts, lunches dinners, desserts & snacks.',
        { em: 'Unlimited', rest: ' drinks, herbal teas, smoothies & coconuts' },
        'Guided rice paddy walk',
        { link: true, before: 'In-house ', label: 'experiences (see menu)' },
      ],
      extras: ['1 spa treatment per day', '(1 hour per day)'],
      prices: [
        { nights: '3 nights', price: 'IDR 15.230.000' },
        { nights: '6 nights', price: 'IDR 28.550.000' },
        { nights: '12 nights', price: 'IDR 55.400.000' },
      ],
      book: BOOK,
      priceLink: PRICE_LINK,
    },
    {
      slug: 'spa-pamper',
      title: 'Spa Pamper Retreat',
      image: { id: '4c89f1_215bb21556714808a864ae73bc676527~mv2.jpg', alt: 'Flower bath with floating petals' },
      inclusions: [
        ...baseInclusions(),
        'All rejuvenating vegetarian meals - breakfasts, lunches dinners, desserts & snacks.',
        { em: 'Unlimited', rest: ' drinks, herbal teas, smoothies & coconuts' },
        'Guided rice paddy walk',
        { link: true, before: 'In-house ', label: 'experiences (see menu)' },
      ],
      extras: ['2 spa treatments per day -', '(1 hr + 1.5 hr = total 2.5hrs per day)', 'Luxurious Aromatherapy flower bath'],
      prices: [
        { nights: '3 nights', price: 'IDR 17.650.000' },
        { nights: '6 nights', price: 'IDR 33.400.000' },
        { nights: '12 nights', price: 'IDR 65.000.000' },
      ],
      book: BOOK,
      priceLink: PRICE_LINK,
    },
    {
      slug: 'ayurvedic-wellness',
      title: 'Ayurvedic Wellness Retreat',
      image: { id: '4c89f1_d67a0e095e76496c81bdfffda7ea207d~mv2.jpg', alt: 'Balinese blessing ceremony' },
      inclusions: [
        ...baseInclusions('Airport or hotel pickup'),
        'All ** dosha specific ** vegetarian breakfasts, lunches, dinners, desserts & snacks.',
        { em: 'Unlimited', rest: ' drinks, herbal teas, smoothies & coconuts' },
        'Guided rice paddy walk',
        { link: true, before: '', label: 'In-house experiences' },
      ],
      extras: [
        '2 spa treatments per day',
        '(1hr + 1.5hr = 2.5hr total per day)',
        'Ayurvedic Lifestyle Consultation 1hr',
        'Yogic talk',
        '( 1hr per 6 nights, 2hr per 12 nights)',
        'Check-ins with Ayurvedic consultant',
        'Relaxing flower bath',
      ],
      prices: [
        { nights: '6 nights', price: 'IDR 34.630.000' },
        { nights: '12 nights', price: 'IDR 66.600.000' },
      ],
      book: mailto(site.emails.marketing, 'In-house Retreat inquiry'),
      // Source subject reads "In-hiouse retreat inquiry" (typo); corrected so the subject matches the other cards.
      priceLink: PRICE_LINK,
    },
    {
      slug: 'yoga-for-you',
      title: 'Yoga For You Retreat',
      image: { id: '4c89f1_75c441ef91284bcf905c9fa9f5a72e6e~mv2.jpg', alt: 'Two guests in a seated yoga pose' },
      inclusions: [
        ...baseInclusions(),
        'All rejuvenating vegetarian meals - breakfasts, lunches dinners, desserts & snacks.',
        { em: 'Unlimited', rest: ' drinks, herbal teas, smoothies & coconuts' },
        'Guided rice paddy walk',
        { link: true, before: 'In-house ', label: 'experiences (see menu)' },
      ],
      extras: [
        'Therapeutic Yoga consultation 1hr',
        'Daily afternoon therapeutic Yoga session specific to your needs 1.5hr',
        '1 spa treatment per day',
        '(1hr per day)',
        'Yogic lecture',
        '(1hr per 6 days, 2hrs per 12 days)',
        'Relaxing flower bath',
      ],
      prices: [
        { nights: '6 nights', price: 'IDR 35.400.000' },
        // SOURCE CONFLICT: the live site labels this second price "6 nights" as well. It is almost certainly
        // the 12-night rate (the card's lecture line mentions 12 days), but the label is kept as published
        // until the owner confirms. See docs/CONTENT_DECISIONS.md.
        { nights: '6 nights', price: 'IDR 68.130.000', flag: 'As published on the original site; please confirm the duration when booking.' },
      ],
      book: mailto(site.emails.marketing, 'Yoga For You retreat booking '),
      priceLink: PRICE_LINK,
    },
    {
      slug: 'yoga-and-pilates',
      title: 'Yoga & Pilates Retreat',
      image: { id: '4c89f1_3f9c97e4ac8e4ed7b3237b6a75cac039~mv2.jpg', alt: 'Mat Pilates among tropical plants' },
      inclusions: [
        'Airport or hotel transfers',
        'Accommodation of your choice',
        'Morning yoga 90 minutes',
        'Afternoon Mat Pilates 60 minutes',
        'All rejuvenating vegetarian meals - breakfasts, lunches dinners, desserts & snacks.',
        { em: 'Unlimited', rest: ' drinks, herbal teas, smoothies & coconuts' },
        'Guided rice paddy walk',
        { link: true, before: 'In-house ', label: 'experiences (see menu)' },
        '1 spa treatment per day',
        '(1hr per day)',
      ],
      extras: [],
      prices: [
        { nights: '3 nights', price: 'IDR 16.900.000' },
        { nights: '6 nights', price: 'IDR 31.500.000' },
      ],
      // The source reuses the "Yoga For You retreat booking " subject on this card.
      book: mailto(site.emails.marketing, 'Yoga For You retreat booking '),
      priceLink: PRICE_LINK,
    },
  ],
  features: [
    {
      id: 'care',
      title: "We'll take care of you",
      image: { id: '4c89f1_0686a676aa8c4bedbf4e93dfb561a87f~mv2.jpg', alt: "Blessing: a priest placing rice on a guest's forehead" },
      items: [
        'Safe airport transfers in private air conditioned vehicle',
        'Butler to carry your luggage and guide you to your room',
        'Welcome to The Shala Bali family blessing and gift',
        'Sightseeing arrangements',
        'Beautiful modern Balinese style accommodation',
        'Intimate groups for individual attention and space for inner reflection',
        'Daily room servicing',
      ],
    },
    {
      id: 'nourish',
      title: '... nourish and relax you',
      reverse: true,
      image: { id: '4c89f1_e0e21b8b4ef14d1d848ba0455431e44b~mv2.jpg', alt: 'Colourful vegetarian lunch plates' },
      items: [
        'Gentle wake up herbal tea',
        'Daily Yoga sessions in our picturesque shala overlooking the rice paddies and jungle',
        'Delicious local and international cuisine made with love',
        'Tea station with a variety of fresh herbs & flavors',
        { spa: true },
        { experiences: true },
        'Evening turn down to set the ambiance for a peaceful sleep!',
      ],
    },
    {
      id: 'transport',
      title: '& transport you to another world',
      image: { id: '4c89f1_36a0937b937a4e649d1add201d5b5833~mv2.jpg', alt: 'Campuhan Ridge walk through green hills' },
      items: [
        'Surrounded by coconut trees and rice paddies',
        'Well appointed rooms each uniquely designed with attached ensuite bathrooms, all natural shampoo & body wash, tea making and purified water and air-conditioning',
        'A 20 meter salt water, infinity pool. Long enough to do laps!',
        'Sunning deck with comfy bale to relax',
        "You'll be on the doorstep of the stunning Campuhan Ridge walk and largest temple in Ubud.",
      ],
    },
  ],
};
