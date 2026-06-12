import Link from 'next/link';
import type { CSSProperties } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import {
  buildServiceMessage,
  buildWhatsAppLink,
  packagesGrouped,
  services,
  servicePageHighlights,
} from '../data/site';
import PackageCard from './PackageCard';

type ServiceDetailProps = {
  slug: 'web' | 'aplikasi' | 'iot';
};

const groupMap = {
  web: 'web',
  aplikasi: 'app',
  iot: 'iot',
} as const;

const ServiceDetail = ({ slug }: ServiceDetailProps) => {
  const service = services.find((item) => item.slug === slug);
  const group = packagesGrouped.find((item) => item.id === groupMap[slug]);

  if (!service || !group) {
    return null;
  }

  const consultLink = buildWhatsAppLink(buildServiceMessage(service.title));

  return (
    <section className="section-animate py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Layanan {service.title}</p>
            <h1 className="mt-4 text-4xl font-semibold text-ink">{service.short}</h1>
            <p className="mt-4 text-base text-slate-600">{service.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <Check size={18} className="mt-0.5 text-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={consultLink}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30"
              >
                Konsultasi via WhatsApp
              </Link>
              <Link
                href="/#paket"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-ink"
              >
                Lihat Paket
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Highlight</p>
            <h2 className="mt-3 text-2xl font-semibold text-ink">Mengapa tim kami cocok</h2>
            <p className="mt-3 text-sm text-slate-600">
              Kolaborasi yang transparan, dokumentasi lengkap, dan hasil yang bisa diukur sejak awal.
            </p>
            <div className="mt-6 space-y-4">
              {servicePageHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-ink">{item.title}</p>
                  <p className="mt-2 text-xs text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Paket {group.label}</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink">Pilih paket yang paling pas</h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">{group.description}</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3 stagger">
          {group.packages.map((pkg, index) => (
            <PackageCard key={pkg.name} data={pkg} style={{ '--i': index } as CSSProperties} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
