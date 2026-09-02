import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Sparkles, BriefcaseBusiness, Layers3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const fadeUpVariant = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as any }
  }
};

const springImage = {
  hidden: { scale: 0.8, opacity: 0, rotateY: 15 },
  show: {
    scale: 1,
    opacity: 1,
    rotateY: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }
  }
};

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background Watermark/Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-white/[0.02] tracking-tighter uppercase whitespace-nowrap pointer-events-none select-none z-0 hidden lg:block">
        {PERSONAL_INFO.name.split(' ')[0]}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen w-full">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center px-6 lg:px-16 xl:px-24 py-32 lg:py-0 z-10 order-2 lg:order-1 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="space-y-8 text-center lg:text-left z-10 pt-10 lg:pt-0"
          >
            <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400 shadow-lg shadow-orange-900/20">
              <span className="text-orange-500">▶</span>
              {PERSONAL_INFO.status}
            </motion.div>

            <motion.div variants={fadeUpVariant} className="space-y-4 relative overflow-hidden">
              <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
                <span className="block text-white drop-shadow-lg">{PERSONAL_INFO.name.split(' ')[0] || 'Your'}</span>
                <span className="block text-orange-500 drop-shadow-lg">{PERSONAL_INFO.name.split(' ').slice(1).join(' ') || 'Name'}</span>
              </h1>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex items-center justify-center lg:justify-start gap-3 mt-6">
              <span className="text-orange-500 animate-pulse">▶</span>
              <h2 className="text-lg sm:text-2xl font-medium text-white tracking-wide">
                {PERSONAL_INFO.title}
              </h2>
            </motion.div>

            <motion.p variants={fadeUpVariant} className="mx-auto max-w-xl text-sm sm:text-base leading-7 text-stone-400 lg:mx-0">
              {PERSONAL_INFO.summary}
            </motion.p>

            <motion.div variants={fadeUpVariant} className="flex flex-wrap items-center justify-center gap-4 pt-4 lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-stone-950 transition-all hover:bg-orange-400 hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.3)]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#timeline"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-stone-300 transition-all hover:border-white/20 hover:text-white"
              >
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span>View Resume</span>
              </a>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex items-center justify-center lg:justify-start gap-3 pt-8 border-t border-white/5">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-3 rounded-xl border border-white/10 bg-white/5 text-stone-400 hover:text-white hover:border-white/20 transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-xl border border-white/10 bg-white/5 text-stone-400 hover:text-white hover:border-white/20 transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 rounded-xl border border-white/10 bg-white/5 text-stone-400 hover:text-white hover:border-white/20 transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column - Full Bleed Transparent Video */}
        <div className="relative h-[60vh] lg:h-screen w-full z-0 order-1 lg:order-2 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
            className="w-full h-full"
          >
            <video
              src="/no-bg-1788356512925.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
