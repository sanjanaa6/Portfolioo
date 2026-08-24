import React, { useState } from 'react';
import { NeuralBackground } from './components/NeuralBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSkills } from './components/AboutSkills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIChatBot } from './components/AIChatBot';
import { Bot, Sparkles } from 'lucide-react';

export function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#05070f] text-slate-100 relative font-sans antialiased bg-grid-pattern">
      {/* 60fps HTML5 Canvas Neural Background */}
      <NeuralBackground />

      {/* Navigation Bar */}
      <Navbar onOpenChat={() => setChatOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenChat={() => setChatOpen(true)} />
        <AboutSkills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sanjana AI Button Trigger (when chatbot closed) */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-4 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white shadow-xl shadow-sky-500/30 hover:scale-110 hover:shadow-sky-500/50 transition-all duration-300 group flex items-center gap-2"
          aria-label="Open Sanjana AI Assistant"
        >
          <div className="relative">
            <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-300"></span>
            </span>
          </div>
          <span className="hidden sm:inline text-xs font-bold font-mono tracking-wide">
            Sanjana AI
          </span>
        </button>
      )}

      {/* Interactive Sanjana AI Chatbot Widget */}
      <AIChatBot isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}

export default App;
