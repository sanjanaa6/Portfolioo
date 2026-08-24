import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, CheckCircle } from 'lucide-react';
import { TIMELINE_DATA } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  const getItemIcon = (type: string) => {
    switch (type) {
      case 'experience': return <Briefcase className="w-4 h-4 text-sky-400" />;
      case 'certification': return <Award className="w-4 h-4 text-purple-400" />;
      case 'education': return <GraduationCap className="w-4 h-4 text-emerald-400" />;
      default: return <CheckCircle className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <section id="timeline" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
            <Calendar className="w-3.5 h-3.5" />
            <span>MILESTONES & JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Experience & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            A chronological timeline of academic foundations, technical milestones, and specialized certifications.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
          {TIMELINE_DATA.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Year Indicator (Desktop Side Label) */}
              <div className="hidden sm:block absolute -left-32 top-1 w-24 text-right font-mono text-xs font-semibold text-sky-400">
                {item.year}
              </div>

              {/* Glowing Dot Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#05070f] border-2 border-sky-400 flex items-center justify-center shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform">
                {getItemIcon(item.type)}
              </div>

              {/* Timeline Item Card */}
              <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800">
                <div className="sm:hidden font-mono text-xs text-sky-400 mb-2">{item.year}</div>
                
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>{item.title}</span>
                </h3>
                
                <div className="text-xs font-medium text-slate-400 mt-1 mb-3">
                  {item.organization}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tech & Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {item.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-sky-300"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
