import React, { useState, useEffect } from 'react';
import { Bot, ArrowRight, Download, Terminal, Sparkles, Check, Copy, Code2, Cpu, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenChat }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const samplePythonCode = `# Enterprise RAG Pipeline Architecture
from langchain_community.vectorstores import Chroma
from llama_index.core import VectorStoreIndex

class SanjanaAIRAG:
    def __init__(self, model="llama3:latest"):
        self.engine = VectorStoreIndex.from_documents(...)
        self.latency_ms = 380
        
    def query(self, prompt: str) -> str:
        return self.engine.query(prompt).response

# Status: Operational (Precision: 96.4%)`;

  const copyCode = () => {
    navigator.clipboard.writeText(samplePythonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-sky-500/30 text-xs font-mono text-sky-300 backdrop-blur-md shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Dynamic Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Architecting <br className="hidden sm:inline" />
                <span className="text-gradient">Intelligent AI Solutions</span>
              </h1>

              <div className="h-8 sm:h-10 flex items-center justify-center lg:justify-start">
                <span className="text-lg sm:text-xl font-mono text-sky-300 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-purple-400" />
                  <span className="font-semibold">{PERSONAL_INFO.roles[roleIndex]}</span>
                  <span className="animate-pulse text-sky-400">|</span>
                </span>
              </div>
            </div>

            {/* Subtitle summary */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenChat}
                className="px-6 py-3.5 rounded-xl glass-card text-sky-300 font-semibold text-sm hover:text-white hover:border-sky-400/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
              >
                <Bot className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform" />
                <span>Ask Sanjana AI</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Resume Request`}
                className="px-5 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium text-sm transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>

            {/* Key Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="glass-card p-3.5 rounded-xl text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-gradient-cyan">{stat.value}</div>
                  <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Code Window Graphic */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl overflow-hidden border border-sky-500/20 shadow-2xl shadow-purple-900/20 group hover:border-sky-400/40 transition-colors">
              {/* Terminal Window Header */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-sky-400" />
                    Sanjana_RAG_Pipeline.py
                  </span>
                </div>
                <button
                  onClick={copyCode}
                  className="text-slate-400 hover:text-white p-1 rounded transition-colors"
                  title="Copy Python Code"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Code Snippet Body */}
              <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto bg-[#080c19]/90">
                <pre className="text-sky-300/90">
                  <code>{samplePythonCode}</code>
                </pre>
              </div>

              {/* Terminal Bottom Status Bar */}
              <div className="bg-slate-900/80 px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Cpu className="w-3.5 h-3.5 animate-pulse" />
                  GPU: RTX 4090 Active
                </span>
                <span className="flex items-center gap-1 text-sky-400">
                  <Zap className="w-3.5 h-3.5" />
                  Latency: 380ms
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
