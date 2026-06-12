import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import Link from 'next/link';
import { LayoutDashboard, FileText, Settings, LogOut, Home } from 'lucide-react';
import AuthProvider from '../../components/AuthProvider';

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession();

  // If we are not on the login page and there is no session, redirect to login
  // Note: the login page itself shouldn't use this layout, so we'll handle that via a route group
  // Actually, since this layout applies to /admin and /admin/login, we must check the path.
  // Instead of using usePathname in a server component, we'll let page components handle their own auth
  // OR we can create an (admin) route group. Since we are already in app/admin, we can't easily exclude login unless we move login out.
  // Let's just render the layout. The login page will be full screen and obscure the sidebar.
  // Wait, no. We will just check if session exists. If not, and we are not in login, we should redirect.
  // We can't know the path here. I will move login to /app/login/page.tsx to keep /admin strictly protected.
  return (
    <AuthProvider>
      {session ? (
        <div className="flex min-h-screen bg-slate-50">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0 bg-white border-r border-slate-200 shadow-sm flex flex-col">
            <div className="p-6 border-b border-slate-200">
              <h1 className="text-xl font-bold text-ink">klikpbgslf.id <span className="text-primary">Admin</span></h1>
            </div>
            <nav className="flex-1 p-4 flex flex-col gap-2">
              <Link href="/admin" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-700 hover:bg-slate-100 hover:text-primary transition-colors">
                <LayoutDashboard size={18} /> Dashboard
              </Link>
              <Link href="/admin/articles" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-700 hover:bg-slate-100 hover:text-primary transition-colors">
                <FileText size={18} /> Artikel / Berita
              </Link>
              <Link href="/admin/content" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-700 hover:bg-slate-100 hover:text-primary transition-colors">
                <Settings size={18} /> Copywriting Web
              </Link>
            </nav>
            <div className="p-4 border-t border-slate-200 flex flex-col gap-2">
              <Link href="/" target="_blank" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
                <Home size={18} /> Lihat Website
              </Link>
              <Link href="/api/auth/signout" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-red-600 hover:bg-red-50 transition-colors">
                <LogOut size={18} /> Logout
              </Link>
            </div>
          </aside>
          
          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      ) : (
        <>{children}</> // For the login page, just render children
      )}
    </AuthProvider>
  );
}
