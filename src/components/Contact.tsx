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
    <section id="contact" className="relative z-10 py-20 md:py-24">
      <div className="section-shell">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-500/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-pink-200">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Let’s connect</span>
          </div>
          <h2 className="mt-6 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">
            Start a <span className="text-gradient">conversation.</span>
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Whether you’re launching a product, refreshing a brand, or building a digital experience, I’d love to hear what you’re working on.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="glass-card space-y-6 rounded-[28px] border border-white/10 p-8">
              <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                <span>Contact details</span>
                <Sparkles className="h-4 w-4 text-amber-300" />
              </h3>
              <p className="text-sm leading-7 text-slate-300">
                Available for product design, brand refreshes, and frontend builds for founders, creative teams, and growing businesses.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-300">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Email</div>
                      <div className="mt-1 text-sm font-medium text-slate-200">{PERSONAL_INFO.email}</div>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors hover:text-white"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 text-violet-300">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Location</div>
                    <div className="mt-1 text-sm font-medium text-slate-200">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 transition-colors hover:border-sky-400/40 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 transition-colors hover:border-sky-400/40 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-card rounded-[28px] border border-white/10 p-8">
              {submitted ? (
                <div className="space-y-4 py-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message sent.</h3>
                  <p className="mx-auto max-w-md text-sm leading-7 text-slate-300">
                    Thanks for reaching out. I’ll get back to you soon with next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-slate-400">Your name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400/50 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-slate-400">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400/50 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-slate-400">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project inquiry"
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-slate-400">Message</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me a bit about your project and goals..."
                      className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400/50 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-500 px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-950 transition-transform hover:-translate-y-0.5"
                  >
                    <span>Send message</span>
                    <Send className="h-4 w-4" />
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
