import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import PrimaryFeatures from '@/components/PrimaryFeatures';
import SecondaryFeatures from '@/components/SecondaryFeatures';
import CallToAction from '@/components/CallToAction';

export const metadata = {
  title: 'Peppercorn | Meal planning made simple',
  description: 'Peppercorn is the meal planning tool that helps you organize your food for the week with the ease and flexibility you want.',
};

export default function Home() {
  return (<>
    {/* <Header /> */}
    <main>
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
    </main>
    {/* <Footer /> */}
  </>)
}
