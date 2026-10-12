import PageHero from '@/components/sections/PageHero';
import MagneticButton from '@/components/ui/MagneticButton';

/*
  theshalabali.com/about-3-2 is an unfinished page: only the title, tagline and one intro paragraph are owner
  copy (its four sections hold Wix placeholder text and stock photos, so they are not reproduced). The priced
  Ayurvedic Wellness Retreat package is on Retreat Packages, which this page links to.
*/
export const metadata = {
  title: 'Ayurvedic Wellness Retreat',
  description: 'The ancient healing wisdom gifted to the world from India.',
  alternates: { canonical: '/ayurvedic-wellness-retreat' },
};

export default function AyurvedicWellnessPage() {
  return (
    <PageHero
      crumbs={[{ label: 'Ayurvedic Wellness Retreat' }]}
      eyebrow="The ancient healing wisdom gifted to the world from India."
      title={{ before: 'Ayurvedic Wellness', script: 'Retreat' }}
      intro="Ayurveda is a way of life that seeks to harmonize and heal the whole body and mind. Deeply connected to the rhythms of nature and adapted to the uniqueness of each person's constitution."
    >
      <MagneticButton href="/retreat-packages#ayurvedic-wellness">Retreat Packages</MagneticButton>
      <MagneticButton href="/panchakarma-retreats" variant="outline">
        Panchakarma Retreats
      </MagneticButton>
    </PageHero>
  );
}
