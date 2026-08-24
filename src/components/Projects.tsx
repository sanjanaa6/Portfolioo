import React, { useState } from 'react';
import { Sparkles, Github, ExternalLink, ArrowUpRight, Zap, FolderGit2 } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'llm' | 'vision' | 'ml' | 'web'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Featured <span className="text-gradient">AI & Machine Learning</span> Projects
          </h2>
          <p className="text-slate-300 text-base">
            Explore production-grade LLM applications, Computer Vision models, and full-stack software.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { label: 'All Projects', value: 'all' },
            { label: 'LLMs & RAG', value: 'llm' },
            { label: 'Computer Vision', value: 'vision' },
            { label: 'Machine Learning', value: 'ml' },
            { label: 'Full-Stack Web', value: 'web' },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                filter === cat.value
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20'
                  : 'glass-card text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between cursor-pointer border border-sky-500/15 group relative"
            >
              {/* Card Top Row */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-300 font-mono text-[11px] uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-sky-400" />
                </h3>

                <p className="text-xs text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Card Bottom Row: Metrics & Tech Tags */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-300 bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                  <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{project.metrics}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Modal Detail View */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
