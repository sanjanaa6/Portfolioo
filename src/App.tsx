import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSkills } from './components/AboutSkills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Allow scroll when splash screen is gone
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showSplash]);

  return (
    <div className="min-h-screen bg-[#0a0d12] text-slate-100 relative antialiased selection:bg-rose-400/30">
      <div className="bg-aurora" />

      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <main>
        <Hero />
        <AboutSkills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
