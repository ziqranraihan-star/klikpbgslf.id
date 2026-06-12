import type { CSSProperties } from 'react';
import { GraduationCap, Zap, BadgeDollarSign, Building, FileCheck, Handshake } from 'lucide-react';
import { WhyUsItem } from '../data/site';

const whyUsIcons = [GraduationCap, Zap, BadgeDollarSign, Building, FileCheck, Handshake];

const WhyUsSection = ({ whyUsSection, whyUsItems }: { whyUsSection: any, whyUsItems: WhyUsItem[] }) => {
  return (
    <section id="keunggulan" className="section-animate py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {whyUsSection.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{whyUsSection.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            {whyUsSection.description}
          </p>
        </div>

        {/* Grid */}
        <div className="stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUsItems.map((item, index) => {
            const Icon = whyUsIcons[index];
            return (
              <div
                key={item.title}
                style={{ '--i': index } as CSSProperties}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-slate-200"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={22} />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
