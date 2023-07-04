import Hero from '@/components/Hero';
import PrimaryFeatures from '@/components/PrimaryFeatures';
import SecondaryFeatures from '@/components/SecondaryFeatures';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <main>
      <Hero />
      {/* todo: update images */}
      <PrimaryFeatures />
      {/* todo: update icons */}
      {/* todo: update images */}
      <SecondaryFeatures />
      <CallToAction />
    </main>
  )
}
