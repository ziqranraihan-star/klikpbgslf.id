import Link from 'next/link';
import { prisma } from '../../../lib/prisma';
import { Calendar, User } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Artikel & Berita - klikpbgslf.id',
  description: 'Informasi terbaru seputar perizinan bangunan, PBG, dan SLF di Indonesia.',
};

export default async function ArticlesPage() {
  const articles = await prisma.article.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <>
      <div className="bg-slate-50 pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl font-bold font-display text-ink mb-4">Artikel & Berita</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Temukan panduan lengkap dan berita terbaru seputar pengurusan Persetujuan Bangunan Gedung (PBG) dan Sertifikat Laik Fungsi (SLF).
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.length === 0 ? (
              <div className="col-span-full text-center py-12 text-slate-500">
                Belum ada artikel yang dipublikasikan.
              </div>
            ) : (
              articles.map((article) => (
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
                      <h2 className="text-xl font-bold text-ink mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-1">
                        {article.excerpt || 'Klik untuk membaca selengkapnya.'}
                      </p>
                      <div className="text-sm font-semibold text-primary mt-auto flex items-center gap-1">
                        Baca Selengkapnya <span className="transition-transform group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
