import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { prisma } from '../../lib/prisma';
import Link from 'next/link';

export default async function AdminDashboard() {
  const session = await getServerSession();
  
  if (!session) {
    redirect('/admin/login');
  }

  const articlesCount = await prisma.article.count();
  const publishedCount = await prisma.article.count({ where: { published: true } });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-ink">Dashboard</h1>
      <p className="mt-2 text-slate-500">Selamat datang di panel admin klikpbgslf.id.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500">Total Artikel</h3>
          <p className="mt-2 text-3xl font-bold text-ink">{articlesCount}</p>
          <div className="mt-4">
            <Link href="/admin/articles" className="text-sm font-medium text-primary hover:underline">Kelola Artikel →</Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500">Artikel Terpublikasi</h3>
          <p className="mt-2 text-3xl font-bold text-emerald-600">{publishedCount}</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500">Copywriting</h3>
          <p className="mt-2 text-sm text-slate-600">Semua teks web (Hero, Layanan, Paket, FAQ) dapat diedit di sini.</p>
          <div className="mt-4">
            <Link href="/admin/content" className="text-sm font-medium text-primary hover:underline">Edit Copywriting →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
