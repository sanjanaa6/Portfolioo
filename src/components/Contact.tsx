import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Copy, Check, MapPin, Sparkles, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-300 text-base">
            Have an exciting AI project, ML engineering opportunity, or research collaboration in mind?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-2xl border border-sky-500/20 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Contact Details</span>
                <Sparkles className="w-4 h-4 text-amber-300" />
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                I am actively seeking full-time AI Engineer roles, ML research partnerships, and open-source collaborations.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Direct Email</div>
                      <div className="text-xs font-semibold text-slate-200">{PERSONAL_INFO.email}</div>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Location</div>
                    <div className="text-xs font-semibold text-slate-200">{PERSONAL_INFO.location} (Remote / Onsite)</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl glass-card text-center text-xs font-semibold text-slate-200 hover:text-sky-400 hover:border-sky-500/40 flex items-center justify-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl glass-card text-center text-xs font-semibold text-slate-200 hover:text-sky-400 hover:border-sky-500/40 flex items-center justify-center gap-2 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-2xl border border-sky-500/20">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. Sanjana will reply to your message shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-900 border border-slate-800 focus:border-sky-400 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-slate-900 border border-slate-800 focus:border-sky-400 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="AI Engineering Project / Collaboration Inquiry"
                      className="w-full bg-slate-900 border border-slate-800 focus:border-sky-400 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Sanjana, I would love to discuss a project..."
                      className="w-full bg-slate-900 border border-slate-800 focus:border-sky-400 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
