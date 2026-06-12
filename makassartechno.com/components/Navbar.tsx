'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { buildWhatsAppLink, generalConsultationMessage, navMenu } from '../data/site';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const consultLink = buildWhatsAppLink(generalConsultationMessage);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? 'bg-white/90 shadow-sm backdrop-blur' : 'bg-white/70 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-makassartechno.png"
            alt="Makassar Techno"
            width={80}
            height={80}
            className="h-9 w-auto object-contain sm:h-11"
            priority
            quality={100}
            unoptimized
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-ink md:flex">
          {navMenu.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link
            href={consultLink}
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5"
          >
            Konsultasi WA
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-slate-200 p-2 text-ink md:hidden"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`border-t border-slate-200 bg-white shadow-lg md:hidden ${
          open ? 'block' : 'hidden'
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm font-medium text-ink">
          {navMenu.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link
            href={consultLink}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30"
          >
            Konsultasi WA
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
