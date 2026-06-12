import Link from 'next/link';
import { prisma } from '../lib/prisma';
import { Calendar, User } from 'lucide-react';

export default async function LatestArticles() {
  const articles = await prisma.article.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take: 3,
  });

  if (articles.length === 0) return null;

  return (
    <section className="section-animate py-20 lg:py-28 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Artikel & Berita
            </p>
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Insight Seputar PBG & SLF</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Temukan panduan, berita terbaru, dan edukasi penting seputar perizinan bangunan gedung.
            </p>
          </div>
          <Link
            href="/artikel"
            className="shrink-0 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-primary/30 hover:text-primary"
          >
            Lihat Semua Artikel
          </Link>
        </div>

        {/* Article Cards */}
        <div className="stagger grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => (
            <Link key={article.id} href={`/artikel/${article.slug}`} className="group block h-full">
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 overflow-hidden">
                <div className="h-48 bg-slate-100 flex items-center justify-center border-b border-slate-100 relative">
                  {article.imageUrl ? (
                    <div className="h-48 overflow-hidden">
                      <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  ) : (
                    <div className="h-48 bg-slate-100 flex items-center justify-center">
                      <span className="text-slate-400 font-medium">No Image</span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 mb-3">
                    <span className="flex items-center gap-1 text-primary">
                      <Calendar size={12} />
                      {new Date(article.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                    {article.author && (
                      <span className="flex items-center gap-1">
                        <User size={12} />
                        {article.author}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-1">
                    {article.excerpt || 'Klik untuk membaca selengkapnya.'}
                  </p>
                  <div className="text-sm font-semibold text-primary mt-auto flex items-center gap-1">
                    Baca Selengkapnya <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
