import React, { useState, useEffect } from 'react';
import { Bot, Menu, X, Terminal, Sparkles, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChat }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About & Skills', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-pink-500 p-[2px] shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#05070f] rounded-[10px] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-sky-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="text-lg font-bold tracking-wider text-white flex items-center gap-1.5">
                Sanjana<span className="text-sky-400">.ai</span>
              </span>
              <span className="block text-[10px] font-mono text-slate-400 tracking-widest uppercase">
                Python ML Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-sky-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Sanjana AI Button */}
            <button
              onClick={onOpenChat}
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-sky-500/40 hover:scale-105 transition-all duration-300 group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-300"></span>
              </span>
              <Bot className="w-4 h-4 text-sky-200 group-hover:rotate-12 transition-transform" />
              <span>Sanjana AI Chat</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={onOpenChat}
              className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400"
              aria-label="Open AI Assistant"
            >
              <Bot className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card mt-2 border-b border-sky-500/20 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-sky-400 py-2 border-b border-slate-800/60"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex items-center justify-around text-slate-400">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
              <Github className="w-5 h-5" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-sky-400">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
