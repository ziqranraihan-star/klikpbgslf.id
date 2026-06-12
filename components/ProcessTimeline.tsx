import type { CSSProperties } from 'react';
import { MessageCircle, FolderSearch, PenTool, Monitor, Users, Award } from 'lucide-react';
import { ProcessStep } from '../data/site';

const stepIcons = [MessageCircle, FolderSearch, PenTool, Monitor, Users, Award];

const ProcessTimeline = ({ processSection, processSteps }: { processSection: any, processSteps: ProcessStep[] }) => {
  return (
    <section id="proses" className="section-animate py-20 lg:py-28 bg-slate-50/60">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {processSection.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{processSection.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            {processSection.description}
          </p>
        </div>

        {/* Desktop Timeline (lg+) */}
        <div className="hidden lg:block">
          <div className="stagger grid grid-cols-6 gap-0">
            {processSteps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <div
                  key={step.title}
                  style={{ '--i': index } as CSSProperties}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Connecting line (between circles) */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-[calc(50%+2rem)] right-[calc(-50%+2rem)] top-8 h-0.5 bg-gradient-to-r from-primary/40 to-primary/10" />
                  )}

                  {/* Step circle */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/25">
                    <Icon size={24} />
                    {/* Number badge */}
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-bold text-primary shadow-md ring-2 ring-primary/20">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mt-4 text-sm font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1.5 px-2 text-xs leading-relaxed text-slate-500">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline (< lg) */}
        <div className="lg:hidden">
          <div className="stagger relative ml-8">
            {/* Vertical connecting line */}
            <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/5" />

            {processSteps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <div
                  key={step.title}
                  style={{ '--i': index } as CSSProperties}
                  className={`relative flex items-start gap-5 ${index < processSteps.length - 1 ? 'pb-10' : ''}`}
                >
                  {/* Circle on the line */}
                  <div className="relative z-10 -ml-8 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/25">
                    <Icon size={20} />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-primary shadow-md ring-2 ring-primary/20">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
