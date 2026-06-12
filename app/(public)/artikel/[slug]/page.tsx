import { notFound } from 'next/navigation';
import { prisma } from '../../../../lib/prisma';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
  });

  if (!article) return { title: 'Artikel Tidak Ditemukan' };

  return {
    title: `${article.title} - klikpbgslf.id`,
    description: article.metaDesc || article.excerpt || '',
    keywords: article.keywords || '',
  };
}

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
  });

  if (!article) notFound();

  return (
    <article className="py-24">
      <div className="mx-auto max-w-3xl px-4">
        <Link href="/artikel" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary mb-8 transition-colors">
          <ArrowLeft size={16} /> Kembali ke semua artikel
        </Link>
        
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-500 mb-4">
            <span className="flex items-center gap-1.5 text-primary bg-primary/10 px-3 py-1 rounded-full">
              <Calendar size={14} />
              {new Date(article.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            {article.author && (
              <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-full">
                <User size={14} />
                {article.author}
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-ink leading-tight mb-6">
            {article.title}
          </h1>
          {article.imageUrl && (
            <img src={article.imageUrl} alt={article.title} className="w-full h-auto rounded-2xl mb-10 object-cover aspect-video" />
          )}
        </div>

        {/* Prose handles the rich text styling */}
        <div 
          className="prose prose-slate prose-lg max-w-none prose-a:text-primary hover:prose-a:text-primary-dark prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </article>
  );
}
