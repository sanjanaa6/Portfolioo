import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

export const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ 
        y: '-100%', 
        transition: { 
          duration: 0.8, 
          ease: [0.76, 0, 0.24, 1],
          delay: 1.5 
        } 
      }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-16 h-16 rounded-2xl bg-orange-500 text-stone-950 flex items-center justify-center font-bold shadow-lg shadow-orange-900/20"
        >
          <span className="text-3xl">⚡</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <motion.div
            animate={{ 
              backgroundPosition: ['200% 0', '-200% 0'] 
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear"
            }}
            className="text-2xl font-black tracking-[0.3em] uppercase bg-gradient-to-r from-stone-600 via-orange-500 to-stone-600 bg-[length:200%_auto] bg-clip-text text-transparent"
          >
            {PERSONAL_INFO.name}
          </motion.div>
        </motion.div>

        {/* Loading Bar */}
        <motion.div 
          className="w-32 h-[1px] bg-stone-800 mt-4 overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 1, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-orange-500"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
