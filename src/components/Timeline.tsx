import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';
import { TIMELINE_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 md:py-32 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-shell">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono tracking-widest uppercase">
            <Calendar className="w-3.5 h-3.5" />
            <span>Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter">
            Experience & <span className="text-orange-500">Education.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-orange-500" />
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide">Work Experience</h3>
            </div>
            
            <div className="relative border-l border-white/10 ml-3 space-y-12">
              {TIMELINE_DATA.map((item, idx) => (
                <div key={idx} className="relative pl-8 group">
                  {/* Node */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-orange-500 group-hover:scale-150 group-hover:bg-orange-500 transition-all duration-300 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                  
                  <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors">
                    <div className="font-mono text-xs font-bold tracking-widest text-orange-400 mb-2">{item.year}</div>
                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                    <div className="text-sm font-medium text-stone-400 mb-4">{item.organization}</div>
                    <p className="text-sm text-stone-300 leading-relaxed mb-6">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.badges.map((badge) => (
                        <span key={badge} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-wider uppercase text-stone-300">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-16">
            
            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6 text-orange-500" />
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">Education</h3>
              </div>
              
              <div className="space-y-6">
                {EDUCATION_DATA.map((item, idx) => (
                  <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors bg-stone-900/40">
                    <div className="font-mono text-xs font-bold tracking-widest text-stone-500 mb-2">{item.year}</div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.degree}</h4>
                    <div className="text-sm font-medium text-orange-400 mb-3">{item.institution}</div>
                    <p className="text-sm text-stone-400 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6 text-orange-500" />
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">Certifications</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {CERTIFICATIONS_DATA.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Award className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight mb-1">{item.title}</h4>
                      <div className="text-xs text-stone-400 flex gap-2">
                        <span>{item.issuer}</span>
                        <span>&bull;</span>
                        <span className="text-orange-400">{item.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
