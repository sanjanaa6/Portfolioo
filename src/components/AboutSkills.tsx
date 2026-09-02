import React, { useState } from 'react';
import { BrainCircuit, Sparkles, Server, Code, Layers, Cpu, Database, ShieldCheck, User } from 'lucide-react';
import { SKILLS_DATA, PERSONAL_INFO } from '../data/portfolioData';

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
    <section id="about" className="relative z-10 py-20 md:py-32">
      <div className="section-shell">
        
        {/* Intro Tag */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-violet-200">
            <User className="h-3.5 w-3.5" />
            <span>About Me & Skills</span>
          </div>
        </div>

        {/* About Me Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          
          {/* Left: Photo Placeholder */}
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-[2.5rem] overflow-hidden border border-white/10 glass-card">
            {/* Soft inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent mix-blend-overlay z-10"></div>
            
            {/* Content placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-20">
              <div className="w-20 h-20 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-6 shadow-2xl">
                <User className="w-8 h-8 text-stone-400" />
              </div>
              <p className="text-stone-400 text-sm font-mono tracking-widest uppercase mb-2">Portrait</p>
              <p className="text-stone-500 text-xs">Add your photo here</p>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-stone-900 opacity-50 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
          </div>

          {/* Right: Bio Text */}
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl uppercase">
              Beyond the <span className="text-orange-500">Pixels.</span>
            </h2>
            
            <div className="space-y-6 text-base sm:text-lg text-stone-300 leading-relaxed font-medium">
              {PERSONAL_INFO.fullBio?.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Skills Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h3 className="text-3xl font-black tracking-tighter text-white sm:text-4xl uppercase">
            Technical <span className="text-orange-500">Arsenal.</span>
          </h3>
          <p className="mt-4 text-base text-stone-400">
            A comprehensive overview of my capabilities across design and engineering.
          </p>
        </div>

        {/* Skills Widget */}
        <div className="glass-card rounded-[28px] border border-white/10 p-6 sm:p-8 bg-stone-900/50">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3 border-b border-white/10 pb-5">
            {SKILLS_DATA.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                  activeTab === idx
                    ? 'border border-orange-500/40 bg-orange-500/10 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.2)]'
                    : 'border border-white/10 bg-white/5 text-stone-400 hover:border-stone-600 hover:text-white'
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
                <div className="flex items-center justify-between text-sm font-bold text-white uppercase tracking-wider">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-orange-400" />
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-orange-400">{skill.level}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full border border-white/10 bg-stone-950">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 transition-all duration-700 ease-out"
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
