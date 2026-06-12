import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { prisma } from '../../../../lib/prisma';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: params.id },
    });
    
    if (!article) return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    return NextResponse.json(article);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { title, excerpt, content, imageUrl, author, keywords, metaDesc, published } = await req.json();

    const article = await prisma.article.update({
      where: { id: params.id },
      data: {
        title,
        excerpt,
        content,
        imageUrl,
        author,
        keywords,
        metaDesc,
        published,
      },
    });

    revalidatePath('/');
    revalidatePath('/artikel');
    revalidatePath(`/artikel/${article.slug}`);

    return NextResponse.json(article);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    await prisma.article.delete({
      where: { id: params.id },
    });

    revalidatePath('/');
    revalidatePath('/artikel');

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
