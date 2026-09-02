import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Zap, FolderGit2 } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'product' | 'brand' | 'mobile'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  return (
    <section id="projects" className="relative z-10 py-20 md:py-24">
      <div className="section-shell">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-sky-200">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>Selected work</span>
          </div>
          <h2 className="mt-6 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">
            Recent <span className="text-gradient">product and brand</span> work.
          </h2>
          <p className="mt-4 text-base text-slate-300">
            A snapshot of strategy, design, and frontend work built to help teams communicate clearly and grow faster.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {[
            { label: 'All', value: 'all' },
            { label: 'Web', value: 'web' },
            { label: 'Product', value: 'product' },
            { label: 'Brand', value: 'brand' },
            { label: 'Mobile', value: 'mobile' }
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value as 'all' | 'web' | 'product' | 'brand' | 'mobile')}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all ${
                filter === cat.value
                  ? 'bg-gradient-to-r from-sky-400 to-violet-500 text-slate-950'
                  : 'border border-white/10 bg-white/5 text-slate-300 hover:border-slate-600 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-card glass-card-hover group relative flex cursor-pointer flex-col justify-between rounded-[28px] border border-white/10 p-6"
            >
              <div>
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="rounded-full border border-sky-400/30 bg-sky-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-sky-200">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-amber-200">
                      <Sparkles className="h-3 w-3" />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="flex items-center justify-between gap-3 text-xl font-bold text-white">
                  <span>{project.title}</span>
                  <ArrowUpRight className="h-5 w-5 text-sky-300 opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
              </div>

              <div className="mt-6 space-y-4 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-amber-200">
                  <Zap className="h-3.5 w-3.5 text-amber-300" />
                  <span>{project.metrics}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
