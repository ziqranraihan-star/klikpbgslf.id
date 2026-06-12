import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { portfolio, portfolioBlurDataURL } from '../data/site';
import { ArrowUpRight } from 'lucide-react';

type PortfolioGridProps = {
  limit?: number;
  hideCta?: boolean;
};

const PortfolioGrid = ({ limit, hideCta = false }: PortfolioGridProps) => {
  const items = limit ? portfolio.slice(0, limit) : portfolio;

  return (
    <section id="portofolio" className="section-animate py-20 lg:py-28 bg-slate-50/50">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Portofolio
            </p>
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Karya & Solusi Digital</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Beberapa project pilihan yang telah kami deliver. Dari website e-commerce hingga purwarupa sistem IoT untuk klien kami.
            </p>
          </div>
          {!hideCta && (
            <Link
              href="/portofolio"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition-all duration-200 hover:border-primary/30 hover:text-primary"
            >
              Lihat Semua Portofolio
            </Link>
          )}
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 stagger">
          {items.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              style={{ '--i': index } as CSSProperties}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  placeholder="blur"
                  blurDataURL={portfolioBlurDataURL}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 right-4 translate-y-4 rounded-full bg-white/90 p-2 text-ink opacity-0 shadow-sm backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                    {item.category}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-ink group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
