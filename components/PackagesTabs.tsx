'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';
import PackageCard from './PackageCard';
import { PackageGroup } from '../data/site';

const tabIcons: Record<string, string> = {
  pbg: '🏗️',
  slf: '📋',
};

const PackagesTabs = ({ packagesGrouped }: { packagesGrouped: PackageGroup[] }) => {
  const [active, setActive] = useState(packagesGrouped[0]?.id ?? 'pbg');
  const activeGroup = packagesGrouped.find((item) => item.id === active) ?? packagesGrouped[0];

  return (
    <section id="paket" className="section-animate py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Paket
          </p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Harga transparan, paket fleksibel</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Pilih paket yang sesuai kebutuhan. Semua paket bisa dikustomkan dan disesuaikan saat konsultasi.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {packagesGrouped.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setActive(group.id)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                active === group.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-primary/30 hover:text-primary'
              }`}
            >
              <span>{tabIcons[group.id]}</span>
              <span>{group.label}</span>
            </button>
          ))}
        </div>

        {/* Tab description */}
        <div className="mb-8 rounded-2xl border border-slate-100 bg-slate-50/60 px-6 py-4">
          <p className="text-sm text-slate-600">{activeGroup.description}</p>
        </div>

        {/* Package Cards */}
        <div className="stagger grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {activeGroup.packages.map((pkg, index) => (
            <PackageCard
              key={pkg.name}
              data={pkg}
              style={{ '--i': index } as CSSProperties}
            />
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Semua harga merupakan estimasi awal.{' '}
          <span className="font-semibold text-primary">Harga final disepakati setelah konsultasi.</span>
        </p>
      </div>
    </section>
  );
};

export default PackagesTabs;
