'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../data/site';

const FAQAccordion = ({ faqs }: { faqs: FaqItem[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-animate py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Pertanyaan yang sering diajukan</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Info singkat seputar PBG, SLF, proses pengurusan, dan persyaratan dokumen.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-primary/20 bg-white shadow-sm shadow-primary/5'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <h3 className="text-sm font-semibold text-ink sm:text-base">{faq.question}</h3>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                      isOpen ? 'rotate-180 bg-primary/10 text-primary' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown size={15} />
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-6 pb-5 pt-4">
                    <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
