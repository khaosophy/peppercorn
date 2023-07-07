import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import PrimaryFeatures from '@/components/PrimaryFeatures';
import SecondaryFeatures from '@/components/SecondaryFeatures';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (<>
    <Header />
    <main>
      <Hero />
      {/* todo: update images */}
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
    </main>
    <Footer />
  </>)
}
