import Link from 'next/link';
import {
  ArrowUpRight,
  Building2,
  FileCheck,
  Ruler,
  Monitor,
  HardHat,
  MessageCircle,
} from 'lucide-react';
import { buildWhatsAppLink, generalConsultationMessage, HeroContent } from '../data/site';

const Hero = ({ hero }: { hero: HeroContent }) => {
  const consultLink = buildWhatsAppLink(generalConsultationMessage);

  return (
    <section className="section-animate relative overflow-hidden pb-20 pt-16 lg:pb-32 lg:pt-24">
      {/* Soft Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50/40 to-transparent" />
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
        {/* Left: Copy */}
        <div className="relative z-10">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm ring-1 ring-primary/10">
            {hero.badge}
          </p>

          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {hero.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200/60 transition hover:ring-primary/30"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={consultLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
            >
              <MessageCircle size={18} />
              {hero.primaryCta}
            </Link>
            <Link
              href="/#paket"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-ink shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:ring-primary/40 hover:text-primary"
            >
              {hero.secondaryCta}
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* Right: Network Animation — PBG/SLF Ecosystem */}
        <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto" aria-hidden="true">
          <div className="relative aspect-square w-full">
            {/* Background SVG connecting lines */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#D4620A" stopOpacity="0" />
                  <stop offset="50%" stopColor="#D4620A" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#D4620A" stopOpacity="0" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connecting Paths */}
              <path d="M250,250 L120,120" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M250,250 L380,120" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M250,250 L80,300" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M250,250 L420,300" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M250,250 L250,420" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="4 4" />

              {/* Animated particles along paths */}
              {[
                { path: 'M250,250 L120,120', delay: '0s' },
                { path: 'M250,250 L380,120', delay: '1s' },
                { path: 'M250,250 L80,300', delay: '2s' },
                { path: 'M250,250 L420,300', delay: '3s' },
                { path: 'M250,250 L250,420', delay: '0.5s' },
              ].map((p, i) => (
                <circle key={i} r="3" fill="#D4620A" filter="url(#glow)">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    path={p.path}
                    begin={p.delay}
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur="3s"
                    begin={p.delay}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </svg>

            {/* Nodes */}
            <div className="absolute inset-0">
              {/* PBG */}
              <div className="hero-float absolute left-[70px] top-[70px] flex flex-col items-center gap-2" style={{ animationDelay: '0s' }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
                  <Building2 size={20} className="text-orange-500" />
                </div>
                <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold text-slate-600 shadow-sm backdrop-blur">PBG</span>
              </div>

              {/* SLF */}
              <div className="hero-float absolute right-[70px] top-[70px] flex flex-col items-center gap-2" style={{ animationDelay: '0.5s' }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
                  <FileCheck size={20} className="text-emerald-500" />
                </div>
                <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold text-slate-600 shadow-sm backdrop-blur">SLF</span>
              </div>

              {/* Dokumen Teknis */}
              <div className="hero-float absolute left-[30px] top-[250px] flex flex-col items-center gap-2" style={{ animationDelay: '1s' }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
                  <Ruler size={20} className="text-amber-600" />
                </div>
                <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold text-slate-600 shadow-sm backdrop-blur">Dokumen Teknis</span>
              </div>

              {/* Building Inspection */}
              <div className="hero-float absolute right-[30px] top-[250px] flex flex-col items-center gap-2" style={{ animationDelay: '1.5s' }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
                  <HardHat size={20} className="text-sky-500" />
                </div>
                <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold text-slate-600 shadow-sm backdrop-blur">Building Inspection</span>
              </div>

              {/* Hitung Struktur */}
              <div className="hero-float absolute bottom-[30px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2" style={{ animationDelay: '2s' }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
                  <Monitor size={20} className="text-violet-500" />
                </div>
                <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold text-slate-600 shadow-sm backdrop-blur">Hitung Struktur</span>
              </div>

              {/* Center Hub — klikpbgslf.id Logo */}
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="hero-pulse absolute inset-0 rounded-3xl bg-primary/20 blur-xl" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-primary to-[#B34F00] shadow-2xl shadow-primary/30 ring-1 ring-white/20">
                  <svg viewBox="0 0 24 24" className="h-10 w-10 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M5 21V7l7-4 7 4v14" />
                    <path d="M9 21v-6h6v6" />
                    <path d="M9 9h1" />
                    <path d="M14 9h1" />
                    <path d="M9 13h1" />
                    <path d="M14 13h1" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
