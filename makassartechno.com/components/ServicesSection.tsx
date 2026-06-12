import Link from 'next/link';
import type { CSSProperties } from 'react';
import { Cpu, Globe, Gamepad2, Laptop, Smartphone } from 'lucide-react';
import { services, servicesSection, buildWhatsAppLink, buildServiceMessage } from '../data/site';

const iconMap = {
  web: Globe,
  aplikasi: Smartphone,
  desktop: Laptop,
  games: Gamepad2,
  iot: Cpu,
};

const gradientMap = {
  web: 'from-blue-500/10 to-sky-500/5',
  aplikasi: 'from-violet-500/10 to-purple-500/5',
  desktop: 'from-slate-500/10 to-gray-500/5',
  games: 'from-orange-500/10 to-amber-500/5',
  iot: 'from-emerald-500/10 to-teal-500/5',
};

const iconBgMap = {
  web: 'bg-blue-500/10 text-blue-600',
  aplikasi: 'bg-violet-500/10 text-violet-600',
  desktop: 'bg-slate-500/10 text-slate-700',
  games: 'bg-orange-500/10 text-orange-600',
  iot: 'bg-emerald-500/10 text-emerald-600',
};

const ServicesSection = () => {
  return (
    <section id="layanan" className="section-animate py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {servicesSection.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{servicesSection.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{servicesSection.description}</p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 stagger">
          {services.map((service, index) => {
            const Icon = iconMap[service.slug];
            const waLink = buildWhatsAppLink(buildServiceMessage(service.title));
            return (
              <div
                key={service.slug}
                style={{ '--i': index } as CSSProperties}
                className={`group relative flex flex-col rounded-2xl border border-slate-100 bg-gradient-to-br ${gradientMap[service.slug]} bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-slate-200`}
              >
                {/* Icon */}
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBgMap[service.slug]}`}>
                  <Icon size={22} />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-lg font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.short}</p>

                {/* Highlights */}
                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  {service.highlights.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100/80 pt-5">
                  <Link
                    href={`/#paket`}
                    className="text-sm font-semibold text-primary transition hover:underline"
                  >
                    {service.ctaLabel}
                  </Link>
                  <span className="text-slate-300">·</span>
                  <Link
                    href={waLink}
                    className="text-sm text-slate-500 transition hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tanya WA
                  </Link>
                </div>
              </div>
            );
          })}

          {/* CTA Card */}
          <div
            style={{ '--i': services.length } as CSSProperties}
            className="group flex flex-col items-start justify-between rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/8 via-sky-50 to-white p-6 shadow-sm"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Butuh custom?</p>
              <h3 className="mt-3 text-lg font-semibold text-ink">Belum nemuin yang cocok?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Setiap proyek bisa dikustomkan sepenuhnya. Ceritakan kebutuhan Anda dan kami akan bantu tentukan solusi terbaik.
              </p>
            </div>
            <Link
              href={buildWhatsAppLink('Halo Makassar Techno! Saya ingin konsultasi tentang proyek digital custom.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5"
            >
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
