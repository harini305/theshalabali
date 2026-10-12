import { mailto, site } from '@/data/site';

// Verbatim from theshalabali.com/copy-of-retreat-packages (page-text/copy-of-retreat-packages.txt).
// Typo corrected: "Accomodation" → "Accommodation". Prices exactly as published.

const common = ['Accommodation', 'Airport Pick-up or Hotel Pick-up'];
const daily = ['Detox Herbs', 'Daily Morning Yoga – 1.5 hour', '3 x Vegetarian Meals per day', 'All drinks & Herbal Infusion Preparations', '2 x Treatments per Day', '1 x Herbal Flower Bath'];

export const panchakarma = {
  meta: {
    title: 'Panchakarma Retreats',
    description:
      'At The Shala Bali, our Panchakarma Retreats offer a deeply restorative Ayurvedic healing experience designed to help you cleanse, rebalance and reconnect with your natural state of wellbeing.',
  },
  hero: { id: '4c89f1_1a4f28c2509b4dbeaea8717fdc870bdc~mv2.jpeg', alt: 'A guest standing in a carved Balinese doorway in the garden' },
  title: 'Panchakarma Retreats',
  intro: [
    'At The Shala Bali, our Panchakarma Retreats offer a deeply restorative Ayurvedic healing experience designed to help you cleanse, rebalance and reconnect with your natural state of wellbeing.',
    'Rooted in the ancient wisdom of Ayurveda, Panchakarma is one of the most profound and transformative healing processes for restoring balance to the body, calming the mind and supporting long-term vitality. More than simply a detox, Panchakarma is a personalised therapeutic journey that works to gently remove accumulated toxins, strengthen digestion, reset the nervous system and support the body’s own healing intelligence.',
    'Held in the peaceful surroundings of The Shala Bali, our Panchakarma Retreats combine authentic Ayurvedic care, personalised treatment plans, nourishing food and the guidance of our experienced Ayurvedic doctor to create a truly supportive and high-quality healing experience.',
  ],
  benefits: {
    title: 'Benefits of a Panchakarma Retreat',
    lead: 'A professionally guided Pancha Karma programme can offer profound support for both physical and emotional wellbeing.',
    items: [
      'Deep detoxification and cleansing of the body',
      'Improved digestion, metabolism and elimination',
      'Reduced stress and nervous system overload',
      'Greater energy, clarity and emotional steadiness',
      'Better sleep and deeper relaxation',
      'Relief from heaviness, sluggishness and accumulated fatigue',
      'Support for immunity and overall vitality',
      'Rejuvenation of body tissues and a renewed sense of wellbeing',
      'Greater connection to healthy routines and self-care practices',
      'A deeper sense of balance, calm and inner clarity',
    ],
    closing:
      'Many guests describe feeling lighter, clearer, calmer and more grounded after a Panchakarma retreat, with a renewed sense of vitality and a deeper understanding of how to support their health moving forward.',
  },
  programTitle: 'What is included in our program?',
  book: mailto(site.emails.marketing, 'In-house retreat inquiry'),
  programs: [
    {
      duration: '7 Nights/ 8 Days',
      image: { id: '4c89f1_7d5ec65e7fc148acbb07baff321ae143~mv2.jpg', alt: 'Ayurvedic oil, brush and bowls prepared for treatment' },
      items: [...common, '3 x Ayurvedic Consultations', '1 x Deep Session Screening + Therapy Healing', ...daily, '1 x Ayurvedic Lecture 1 hour', '1 x Rice Paddy Walk', '1 x In-House Activity'],
      prices: [
        { room: 'Bungalow Room', idr: 'IDR 38.034.000++', usd: 'USD $2.113' },
        { room: 'Deluxe Room', idr: 'IDR 41.832.000++', usd: 'USD $2.324' },
      ],
    },
    {
      duration: '14 Nights/ 15 Days',
      image: { id: '4c89f1_e146a892637342c9b8236cf0a7d876da~mv2.jpg', alt: 'Herbal flower bath' },
      items: [...common, '6 x Ayurvedic Consultations', '2 x Deep Session Screening + Therapy Healing', ...daily, '2 x Ayurvedic Lecture 1 hour', '1 x Rice Paddy Walk', '2 x In-House Activity'],
      prices: [
        { room: 'Bungalow Room', idr: 'IDR 75.402.000++', usd: 'USD $4.189' },
        { room: 'Deluxe Room', idr: 'IDR 82.980.000++', usd: 'USD $4.610' },
      ],
    },
    {
      duration: '21 Nights/ 22 Days',
      image: { id: '4c89f1_a685b268fb144714970fb60d760a3ff5~mv2.jpg', alt: 'Brass vessel of warm Ayurvedic oil' },
      items: [...common, '9 x Ayurvedic Consultations', '3 x Deep Session Screening + Therapy Healing', ...daily, '3 x Ayurvedic Lecture 1 hour', '3 x Rice Paddy Walk', '3 x In-House Activity'],
      prices: [
        { room: 'Bungalow Room', idr: 'IDR 112.752.000++', usd: 'USD $6.264' },
        { room: 'Deluxe Room', idr: 'IDR 124.128.000++', usd: 'USD $6.896' },
      ],
    },
  ],
  setting:
    'Set in the peaceful natural beauty of Ubud, The Shala Bali provides a nurturing retreat space where guests can step away from the demands of everyday life and fully focus on healing. Surrounded by nature and supported by a dedicated team, you are given the time, space and professional guidance to rest deeply and allow the Ayurvedic process to unfold with care.',
  cleanse: {
    title: 'A Retreat to Cleanse, Restore & Reconnect',
    text: 'Whether you are seeking a deeper reset for body and mind, support for stress and fatigue, help restoring digestion and vitality, or simply the space to reconnect with yourself, our Panchakarma Retreats offer a meaningful opportunity for healing on every level.',
    image: { id: '4c89f1_4e7835023e624170b0eb8b1c4f470b2e~mv2.jpg', alt: 'A guest receiving an Ayurvedic head treatment' },
  },
  invite: {
    text: 'We invite you to experience the profound healing potential of Panchakarma in a beautiful retreat setting, supported by experienced hands and grounded in the timeless wisdom of Ayurveda.',
    image: { id: '4c89f1_9a94242c54634cfc88d96ae83289da6f~mv2.jpg', alt: 'Shirodhara: warm oil poured onto the forehead' },
  },
  personal: {
    title: 'A Personalised Healing Experience at The Shala Bali',
    paragraphs: [
      'At The Shala Bali, we believe Panchakarma should be both authentic and deeply supportive.',
      'Our retreats are designed as a high-quality healing journey, where each guest is cared for as an individual and guided with attention, sensitivity and professionalism. Your retreat begins with assessment and consultation from our experienced Ayurvedic doctor, who carefully evaluates your constitution, current imbalances and personal health goals. From there, your programme is tailored specifically for you.',
    ],
  },
  doctor: {
    title: 'About our Ayurvedic Doctor',
    image: { id: '4c89f1_905c666a7fe14b4299273301e9b1ff2e~mv2.jpg', alt: 'Dr. Komang Sudarmi, Ayurvedic doctor' },
    bio: 'Dr. Komang Sudarmi is the first local Indonesian to become an Ayurvedic doctor, completing her formal education in India, with years of experience working at Gujarat Ayurveda University & Hospital. She is committed to fulfilling her responsibility to educate, inspire and support others to understand and apply Ayurveda so they can experience health, happiness and longevity. Dr Komang’s expertise, sincerity, positive attitude and tireless energy provide our guests with an incredible experience and amazing results.',
  },
  faqTitle: 'Frequently Asked Questions',
  faqs: [
    ['How long should I stay for a Panchakarma Retreat?', 'The ideal length of a PanchaKarma Retreat is unique for everyone, we understand that everyone may not have a lot of time to take out from their daily life, so how long one should stay for a Panchakarma is personal, but durations of 7 days minimum is recommended and optimum up to 21 days. Other considerations are: current state of health and the level of cleansing or support needed. Some guests may benefit from a shorter introductory Ayurvedic cleanse, while others may choose a longer retreat for a deeper therapeutic process. We recommend speaking with us so we can help guide you toward the most suitable retreat length for your needs.'],
    ['Is Panchakarma suitable for everyone?', 'PanchaKarma is a traditional therapeutic process, and in essence a beautiful & simple approach to leading a healthy daily life, all guests are treated specifically to their personal constitution and present condition, for this reason PanchaKarma is suitable for most people, but if you have a serious disease or ailment, please consult with our Ayurvedic doctor first to assess your needs.'],
    ['What treatments are included in a Panchakarma Retreat?', 'Every retreat is personalized, so the type of treatments varies from guest to guest depending on your needs, your programme will include 2 body treatments per day, dietary and herbal support, cleansing therapies, rejuvenation therapies, activities & more'],
    ['Will I receive a consultation with the Ayurvedic doctor?', 'Yes. Your retreat includes guidance from our experienced Ayurvedic doctor, who will assess your needs and oversee your personalised programme.'],
    ['Is Panchakarma just a detox?', 'No. While Panchakarma does support cleansing and detoxification, it is much more than a detox. It is a traditional Ayurvedic healing process designed to remove toxins, restore balance, strengthen digestion, calm the nervous system and support deeper healing and rejuvenation.'],
    ['What kind of food is served during the retreat?', 'Meals are designed to support the Panchakarma process and your individual needs as much as possible. Food is nourishing, digestible and aligned with Ayurvedic principles to help support cleansing, balance and recovery.'],
    ['Can I do a Panchakarma Retreats if I am feeling stressed or burnt out?', 'Yes, many people choose Panchakarma because they are feeling depleted, overwhelmed, fatigued or out of balance. Ayurveda recognizes the close connection between stress, digestion, immunity and overall wellbeing, and a properly guided Pancha Karma retreat can be a powerful way to reset and restore.'],
    ['How do I know if a Panchakarma Retreat is right for me?', 'If you are feeling out of balance, run down, depleted, burdened by stress, struggling with digestion, or simply ready for a deeper reset, a Pancha Karma Retreat may be a valuable healing experience. We recommend reaching out to us so we can help you determine whether the retreat is a good fit for your current needs and goals.'],
  ],
};
