import React, { useState } from 'react';
import { BrainCircuit, Sparkles, Server, Code, Layers, Cpu, Database, ShieldCheck } from 'lucide-react';
import { SKILLS_DATA, PERSONAL_INFO } from '../data/portfolioData';

export const AboutSkills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-sky-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Code': return <Code className="w-5 h-5 text-pink-400" />;
      default: return <Layers className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES & STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Engineering <span className="text-gradient">Artificial Intelligence</span>
          </h2>
          <p className="text-slate-300 text-base">
            Bridging complex machine learning research with robust, scalable software products.
          </p>
        </div>

        {/* Highlight Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-card glass-card-hover p-6 rounded-2xl border border-sky-500/20">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center mb-4">
              <BrainCircuit className="w-6 h-6 text-sky-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">RAG & Local LLM Systems</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Designing context-grounded retrieval architectures using LlamaIndex, LangChain, ChromaDB, and local models (Ollama/Llama 3) for zero-hallucination document intelligence.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-6 rounded-2xl border border-purple-500/20">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Deep Learning & Vision</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Training and fine-tuning PyTorch/TensorFlow models for computer vision, object detection (YOLOv8), image classification, and custom feature extraction pipelines.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-6 rounded-2xl border border-emerald-500/20">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Python API & Web Integration</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Developing high-throughput REST API backend services with FastAPI/Flask and pairing them with sleek React, TypeScript, and interactive Tailwind CSS frontends.
            </p>
          </div>
        </div>

        {/* Interactive Skills Breakdown Container */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
          
          {/* Category Tabs Header */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 border-b border-slate-800 pb-4">
            {SKILLS_DATA.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === idx
                    ? 'bg-sky-500/20 border border-sky-400 text-sky-300 shadow-lg shadow-sky-500/10'
                    : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {getIcon(cat.iconName)}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Active Skills List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS_DATA[activeTab].skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center text-sm font-medium text-slate-200">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-sky-400 font-bold">{skill.level}%</span>
                </div>
                {/* Meter Bar */}
                <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
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
