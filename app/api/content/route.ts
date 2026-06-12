import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { prisma } from '../../../lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const content = await prisma.siteContent.findMany();
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
