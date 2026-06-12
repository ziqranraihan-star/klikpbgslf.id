import type { ReactNode } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppFloatingButton from '../../components/WhatsAppFloatingButton';
import BackToTop from '../../components/BackToTop';
import { prisma } from '../../lib/prisma';
import { contact as fallbackContact, navMenu, services as fallbackServices } from '../../data/site';

export default async function PublicLayout({ children }: { children: ReactNode }) {
  let contact = fallbackContact;
  let services = fallbackServices;
  try {
    const dbDataContact = await prisma.siteContent.findUnique({ where: { section: 'contact' } });
    if (dbDataContact) contact = JSON.parse(dbDataContact.data);
    
    const dbDataServices = await prisma.siteContent.findUnique({ where: { section: 'services' } });
    if (dbDataServices) services = JSON.parse(dbDataServices.data);
  } catch (e) {}

  return (
    <>
      <Navbar navMenu={navMenu} />
      <main className="relative overflow-hidden">{children}</main>
      <Footer contact={contact} navMenu={navMenu} services={services} />
      <WhatsAppFloatingButton />
      <BackToTop />
    </>
  );
}
