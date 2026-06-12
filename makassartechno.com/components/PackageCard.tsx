import Link from 'next/link';
import { Check, Star } from 'lucide-react';
import type { CSSProperties } from 'react';
import { buildPackageMessage, buildWhatsAppLink, PackageItem } from '../data/site';

const PackageCard = ({
  data,
  className = '',
  style,
}: {
  data: PackageItem;
  className?: string;
  style?: CSSProperties;
}) => {
  const message = buildPackageMessage(data.serviceLabel, data.name);
  const orderLink = buildWhatsAppLink(message);

  return (
    <div
      style={style}
      className={`relative flex h-full flex-col rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        data.highlight
          ? 'border-primary/30 bg-gradient-to-br from-primary/5 via-sky-50/50 to-white shadow-lg shadow-primary/10'
          : 'border-slate-200 bg-white shadow-sm hover:border-slate-300'
      } ${className}`}
    >
      {/* Popular badge */}
      {data.highlight && (
        <div className="absolute -top-3 left-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md shadow-primary/30">
            <Star size={10} fill="currentColor" />
            Paling Populer
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        {/* Header */}
        <div>
          <h3 className="text-lg font-semibold text-ink">{data.name}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{data.subtitle}</p>
        </div>

        {/* Price */}
        <div className={`mt-5 rounded-xl px-4 py-3.5 ${data.highlight ? 'bg-primary/8' : 'bg-slate-50'}`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Mulai dari</p>
          <p className={`mt-1 text-2xl font-semibold ${data.highlight ? 'text-primary' : 'text-ink'}`}>
            {data.priceFrom}
          </p>
        </div>

        {/* Features */}
        <ul className="mt-5 flex-1 space-y-2.5">
          {data.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
              <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${data.highlight ? 'bg-primary/15 text-primary' : 'bg-slate-100 text-slate-500'}`}>
                <Check size={11} strokeWidth={3} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={orderLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 ${
            data.highlight
              ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:-translate-y-0.5'
              : 'border border-slate-200 bg-white text-ink hover:border-primary/30 hover:text-primary'
          }`}
        >
          {data.ctaLabel}
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
