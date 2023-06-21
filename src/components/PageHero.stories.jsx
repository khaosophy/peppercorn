import PageHero from './PageHero';

const meta = {
  title: 'Page Hero',
  component: PageHero,
};

export default meta;

export const Default = () => (
  <PageHero
    title="Page Title"
    subtitle="Page Subtitle"
    bgImage="/images/home-hero.jpg"
  />
);