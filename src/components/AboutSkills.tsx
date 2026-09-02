import React, { useState } from 'react';
import { BrainCircuit, Sparkles, Server, Code, Layers, Cpu, Database, ShieldCheck } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const AboutSkills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-sky-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-violet-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Code': return <Code className="w-5 h-5 text-pink-400" />;
      default: return <Layers className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="about" className="relative z-10 py-20 md:py-24">
      <div className="section-shell">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-violet-200">
            <Cpu className="h-3.5 w-3.5" />
            <span>About & capabilities</span>
          </div>
          <h2 className="mt-6 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">
            Thoughtful design meets <span className="text-gradient">strong product execution.</span>
          </h2>
          <p className="mt-4 text-base text-slate-300">
            I work across strategy, interface design, and frontend implementation to turn messy ideas into premium digital experiences.
          </p>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          <div className="glass-card glass-card-hover rounded-3xl border border-sky-500/15 p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-500/10">
              <BrainCircuit className="h-6 w-6 text-sky-300" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">UX strategy</h3>
            <p className="text-sm leading-7 text-slate-300">
              Research-led decisions, clear flows, and product thinking that prioritizes user trust and outcomes.
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-3xl border border-violet-500/15 p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10">
              <Layers className="h-6 w-6 text-violet-300" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">Design systems</h3>
            <p className="text-sm leading-7 text-slate-300">
              Consistent components and scalable patterns that keep experiences cohesive as products grow.
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-3xl border border-emerald-500/15 p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-500/10">
              <Database className="h-6 w-6 text-emerald-300" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">Frontend craft</h3>
            <p className="text-sm leading-7 text-slate-300">
              Responsive, accessible interfaces built with care — polished enough for launch and flexible enough to evolve.
            </p>
          </div>
        </div>

        <div className="glass-card rounded-[28px] border border-white/10 p-6 sm:p-8">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3 border-b border-white/10 pb-5">
            {SKILLS_DATA.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                  activeTab === idx
                    ? 'border border-sky-400/40 bg-sky-500/10 text-sky-200'
                    : 'border border-white/10 bg-white/5 text-slate-300 hover:border-slate-600 hover:text-white'
                }`}
              >
                {getIcon(cat.iconName)}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {SKILLS_DATA[activeTab].skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm font-medium text-slate-200">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-sky-300" />
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-sky-300">{skill.level}%</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full border border-white/10 bg-slate-950/80">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-500 transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
