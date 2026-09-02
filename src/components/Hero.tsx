import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Sparkles, BriefcaseBusiness, Layers3 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-24">
      <div className="floating-orb h-64 w-64 bg-sky-400/20 left-8 top-20" />
      <div className="floating-orb h-72 w-72 bg-violet-500/15 right-12 top-8" />

      <div className="section-shell relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              {PERSONAL_INFO.status}
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-black leading-[0.96] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
                I design and build
                <span className="mt-3 block text-gradient">digital experiences</span>
                that feel premium.
              </h1>

              <div className="flex h-10 items-center justify-center lg:justify-start">
                <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 shadow-lg shadow-slate-900/30">
                  <span className="text-sky-300">{PERSONAL_INFO.roles[roleIndex]}</span>
                  <span className="animate-pulse text-sky-400">|</span>
                </span>
              </div>
            </div>

            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300 lg:mx-0 lg:text-lg">
              {PERSONAL_INFO.summary}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 px-6 py-3.5 text-sm font-semibold text-stone-950 shadow-[0_18px_40px_rgba(212,163,115,0.28)] transition-transform hover:-translate-y-0.5"
              >
                <span>View my work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Project Inquiry`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-sky-400/40 hover:bg-sky-500/10"
              >
                <Download className="w-4 h-4 text-sky-300" />
                <span>Download CV</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4">
              {PERSONAL_INFO.stats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-2xl p-4 text-left">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-card relative overflow-hidden rounded-[28px] border border-white/10 p-5 shadow-[0_25px_60px_rgba(26,18,14,0.7)]">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10" />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                    Portfolio
                  </span>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-slate-400">
                      <span>Selected focus</span>
                      <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
                        <div>
                          <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Brand</div>
                          <div className="mt-1 text-base font-semibold text-white">Positioning & identity</div>
                        </div>
                        <div className="rounded-xl bg-sky-500/10 p-2 text-sky-300">
                          <Layers3 className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
                        <div>
                          <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Product</div>
                          <div className="mt-1 text-base font-semibold text-white">UX systems & websites</div>
                        </div>
                        <div className="rounded-xl bg-violet-500/10 p-2 text-violet-300">
                          <BriefcaseBusiness className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Approach</div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-xl border border-white/10 bg-slate-950/60 p-3">
                        <div className="text-lg font-bold text-white">01</div>
                        <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">Research</div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-slate-950/60 p-3">
                        <div className="text-lg font-bold text-white">02</div>
                        <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">Design</div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-slate-950/60 p-3">
                        <div className="text-lg font-bold text-white">03</div>
                        <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">Build</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
