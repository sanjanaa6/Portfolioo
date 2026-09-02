import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#090d12]/90 py-10">
      <div className="section-shell">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-black tracking-[0.18em] text-sky-300">
              YN
            </div>
            <div>
              <div className="text-base font-bold tracking-[0.12em] text-white uppercase">{PERSONAL_INFO.name.split(' ')[0]}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                © {new Date().getFullYear()} All rights reserved.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-slate-200 transition-colors hover:border-sky-400/40 hover:text-white"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4 text-sky-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};
