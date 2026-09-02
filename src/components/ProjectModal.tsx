import React from 'react';
import { X, ExternalLink, Github, Layers, CheckCircle2, Zap, Cpu } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="glass-card max-w-2xl w-full rounded-2xl border border-sky-500/30 overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between bg-slate-900/60">
          <div>
            <span className="inline-block px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-300 font-mono text-xs mb-2 uppercase tracking-wider">
              {project.category} Project
            </span>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Metrics Pill */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/60 to-orange-950/60 border border-amber-500/20 flex items-center gap-3">
            <Zap className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs font-mono text-slate-400">Benchmark Metrics</div>
              <div className="text-sm font-semibold text-sky-300">{project.metrics}</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Overview</h4>
            <p className="text-sm text-slate-200 leading-relaxed">{project.detailedOverview}</p>
          </div>

          {/* Key Architecture Highlights */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Architectural Highlights</h4>
            <div className="space-y-2">
              {project.architectureHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-sky-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-6 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold flex items-center gap-2 shadow-lg shadow-sky-500/20 transition-all"
            >
              <span>Live Demonstration</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
