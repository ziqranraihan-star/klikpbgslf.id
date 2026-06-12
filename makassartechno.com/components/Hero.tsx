import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Gamepad2,
  Globe2,
  Laptop,
  MessageCircle,
  Smartphone,
} from 'lucide-react';
import { buildWhatsAppLink, generalConsultationMessage, hero } from '../data/site';

const serviceNodes = [
  {
    label: 'Website',
    icon: Globe2,
    color: 'text-blue-500 bg-blue-50',
    delay: '0s',
    pathId: 'path-web',
  },
  {
    label: 'Mobile App',
    icon: Smartphone,
    color: 'text-violet-500 bg-violet-50',
    delay: '1.2s',
    pathId: 'path-app',
  },
  {
    label: 'Desktop',
    icon: Laptop,
    color: 'text-slate-600 bg-slate-50',
    delay: '2.4s',
    pathId: 'path-desktop',
  },
  {
    label: 'Games',
    icon: Gamepad2,
    color: 'text-orange-500 bg-orange-50',
    delay: '3.6s',
    pathId: 'path-games',
  },
  {
    label: 'IoT',
    icon: Cpu,
    color: 'text-emerald-500 bg-emerald-50',
    delay: '4.8s',
    pathId: 'path-iot',
  },
];

const Hero = () => {
  const consultLink = buildWhatsAppLink(generalConsultationMessage);

  return (
    <section className="section-animate relative overflow-hidden pb-20 pt-16 lg:pb-32 lg:pt-24">
      {/* Soft Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/40 to-transparent" />
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

        {/* Right: Minimalist Network Animation */}
        <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto" aria-hidden="true">
          <div className="relative aspect-square w-full">
            {/* Background SVG connecting lines */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Center coordinates: 250, 250 */}
              <defs>
                <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0060F0" stopOpacity="0" />
                  <stop offset="50%" stopColor="#0060F0" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0060F0" stopOpacity="0" />
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
              <path id="path-web" d="M250,250 L120,120" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="4 4" />
              <path id="path-app" d="M250,250 L380,120" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="4 4" />
              <path id="path-desktop" d="M250,250 L80,300" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="4 4" />
              <path id="path-games" d="M250,250 L420,300" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="4 4" />
              <path id="path-iot" d="M250,250 L250,420" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="4 4" />

              {/* Animated particles along paths */}
              {[
                { id: 'path-web', delay: '0s' },
                { id: 'path-app', delay: '1s' },
                { id: 'path-desktop', delay: '2s' },
                { id: 'path-games', delay: '3s' },
                { id: 'path-iot', delay: '0.5s' },
              ].map((p, i) => (
                <circle key={i} r="3" fill="#0060F0" filter="url(#glow)">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    path={
                      p.id === 'path-web' ? 'M250,250 L120,120' :
                      p.id === 'path-app' ? 'M250,250 L380,120' :
                      p.id === 'path-desktop' ? 'M250,250 L80,300' :
                      p.id === 'path-games' ? 'M250,250 L420,300' :
                      'M250,250 L250,420'
                    }
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
              {/* Web */}
              <div className="hero-float absolute left-[70px] top-[70px] flex flex-col items-center gap-2" style={{ animationDelay: '0s' }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
                  <Globe2 size={20} className="text-blue-500" />
                </div>
                <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold text-slate-600 shadow-sm backdrop-blur">Website</span>
              </div>

              {/* App */}
              <div className="hero-float absolute right-[70px] top-[70px] flex flex-col items-center gap-2" style={{ animationDelay: '0.5s' }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
                  <Smartphone size={20} className="text-violet-500" />
                </div>
                <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold text-slate-600 shadow-sm backdrop-blur">Mobile App</span>
              </div>

              {/* Desktop */}
              <div className="hero-float absolute left-[30px] top-[250px] flex flex-col items-center gap-2" style={{ animationDelay: '1s' }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
                  <Laptop size={20} className="text-slate-600" />
                </div>
                <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold text-slate-600 shadow-sm backdrop-blur">Desktop</span>
              </div>

              {/* Games */}
              <div className="hero-float absolute right-[30px] top-[250px] flex flex-col items-center gap-2" style={{ animationDelay: '1.5s' }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
                  <Gamepad2 size={20} className="text-orange-500" />
                </div>
                <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold text-slate-600 shadow-sm backdrop-blur">Games</span>
              </div>

              {/* IoT */}
              <div className="hero-float absolute bottom-[30px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2" style={{ animationDelay: '2s' }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
                  <Cpu size={20} className="text-emerald-500" />
                </div>
                <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold text-slate-600 shadow-sm backdrop-blur">IoT</span>
              </div>

              {/* Center "M" Hub */}
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="hero-pulse absolute inset-0 rounded-3xl bg-primary/20 blur-xl" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-primary to-blue-600 shadow-2xl shadow-primary/30 ring-1 ring-white/20">
                  <svg viewBox="0 0 24 24" className="h-10 w-10 text-white" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" className="hidden" />
                    {/* Minimalist 'M' */}
                    <path d="M4 19V5a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .8.4L12 11l4.7-6.6a1 1 0 0 1 .8-.4H19a1 1 0 0 1 1 1v14h-3V8.5l-4.2 5.9a1 1 0 0 1-1.6 0L7 8.5V19H4z" />
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
