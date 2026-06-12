import Hero from '../../components/Hero';
import ServicesSection from '../../components/ServicesSection';
import ProcessTimeline from '../../components/ProcessTimeline';
import WhyUsSection from '../../components/WhyUsSection';
import PackagesTabs from '../../components/PackagesTabs';
import LatestArticles from '../../components/LatestArticles';
import FAQAccordion from '../../components/FAQAccordion';
import ContactSection from '../../components/ContactSection';
import { prisma } from '../../lib/prisma';
import * as fallbackSite from '../../data/site';

export default async function HomePage() {
  const dbDataRaw = await prisma.siteContent.findMany();
  const dbData = dbDataRaw.reduce((acc: any, item: any) => {
    acc[item.section] = JSON.parse(item.data);
    return acc;
  }, {});

  const hero = dbData.hero || fallbackSite.hero;
  const servicesSection = dbData.servicesSection || fallbackSite.servicesSection;
  const services = dbData.services || fallbackSite.services;
  const processSection = dbData.processSection || fallbackSite.processSection;
  const processSteps = dbData.processSteps || fallbackSite.processSteps;
  const whyUsSection = dbData.whyUsSection || fallbackSite.whyUsSection;
  const whyUsItems = dbData.whyUsItems || fallbackSite.whyUsItems;
  const packagesGrouped = dbData.packagesGrouped || fallbackSite.packagesGrouped;
  const faqs = dbData.faqs || fallbackSite.faqs;
  const contact = dbData.contact || fallbackSite.contact;
  const contactSection = dbData.contactSection || fallbackSite.contactSection;

  return (
    <>
      <Hero hero={hero} />
      <ServicesSection servicesSection={servicesSection} services={services} />
      <ProcessTimeline processSection={processSection} processSteps={processSteps} />
      <WhyUsSection whyUsSection={whyUsSection} whyUsItems={whyUsItems} />
      <PackagesTabs packagesGrouped={packagesGrouped} />
      <LatestArticles />
      <FAQAccordion faqs={faqs} />
      <ContactSection contact={contact} contactSection={contactSection} />
    </>
  );
}
