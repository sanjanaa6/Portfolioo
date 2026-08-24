import React from 'react';
import { Terminal, ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-[#03050c]/90 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copy */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-wide">
                Sanjana<span className="text-sky-400">.ai</span>
              </span>
              <span className="block text-[10px] font-mono text-slate-400">
                © {new Date().getFullYear()} Sanjana Singh. All rights reserved.
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-400">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-sky-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl glass-card text-slate-400 hover:text-white hover:border-sky-500/40 transition-all flex items-center gap-2 text-xs font-mono"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-sky-400" />
          </button>

        </div>
      </div>
    </footer>
  );
};
