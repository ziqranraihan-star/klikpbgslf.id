import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { prisma } from '../../../lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    let content = await prisma.siteContent.findMany();

    // Define the logical order of sections as they appear on the landing page
    const order = [
      'Header',
      'Hero',
      'ServicesSection',
      'ProcessSection',
      'PricingSection',
      'FAQSection',
      'Footer'
    ];

    content = content.sort((a, b) => {
      const indexA = order.indexOf(a.section);
      const indexB = order.indexOf(b.section);
      
      // If both are in the array, sort by their index
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      // If only a is in the array, a comes first
      if (indexA !== -1) return -1;
      // If only b is in the array, b comes first
      if (indexB !== -1) return 1;
      // If neither are in the array, sort alphabetically
      return a.section.localeCompare(b.section);
    });

    return NextResponse.json(content);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { section, data } = await req.json();

    const updated = await prisma.siteContent.upsert({
      where: { section },
      update: { data },
      create: { section, data },
    });

    revalidatePath('/');

    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
