import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import {
  hero,
  servicesSection,
  services,
  processSection,
  processSteps,
  whyUsSection,
  whyUsItems,
  faqs,
  contact,
  contactSection,
  packagesGrouped
} from '../../../data/site';

export async function GET() {
  try {
    const contentToSeed = [
      { section: 'hero', data: JSON.stringify(hero) },
      { section: 'servicesSection', data: JSON.stringify(servicesSection) },
      { section: 'services', data: JSON.stringify(services) },
      { section: 'processSection', data: JSON.stringify(processSection) },
      { section: 'processSteps', data: JSON.stringify(processSteps) },
      { section: 'whyUsSection', data: JSON.stringify(whyUsSection) },
      { section: 'whyUsItems', data: JSON.stringify(whyUsItems) },
      { section: 'packagesGrouped', data: JSON.stringify(packagesGrouped) },
      { section: 'faqs', data: JSON.stringify(faqs) },
      { section: 'contact', data: JSON.stringify(contact) },
      { section: 'contactSection', data: JSON.stringify(contactSection) },
    ];

    for (const item of contentToSeed) {
      // Don't overwrite if it already exists, just in case user edited
      const existing = await prisma.siteContent.findUnique({ where: { section: item.section } });
      if (!existing) {
        await prisma.siteContent.create({ data: item });
      }
    }

    return NextResponse.json({ message: 'Full database seeded successfully!' });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
