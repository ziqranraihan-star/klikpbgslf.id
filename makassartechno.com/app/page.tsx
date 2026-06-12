import Hero from '../components/Hero';
import PackagesTabs from '../components/PackagesTabs';
import PortfolioGrid from '../components/PortfolioGrid';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PortfolioGrid limit={9} hideCta />
      <PackagesTabs />
      <ContactSection />
    </>
  );
}
