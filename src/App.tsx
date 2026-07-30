import { useEffect, useMemo, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, BrainCircuit, Code2, Cpu, Download, Github, Linkedin, Mail, Sparkles, Stars, Zap } from 'lucide-react'
import { FaDocker } from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiFastapi } from 'react-icons/si'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import Lenis from 'lenis'
import gsap from 'gsap'

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certificates', 'Resume', 'Contact']

const skills = [
  { title: 'Programming', icon: <Code2 size={24} />, items: ['Python', 'SQL', 'TypeScript'] },
  { title: 'Machine Learning', icon: <Cpu size={24} />, items: ['Scikit-learn', 'XGBoost', 'Pipelines'] },
  { title: 'Deep Learning', icon: <BrainCircuit size={24} />, items: ['CNNs', 'Transformers', 'GANs'] },
  { title: 'TensorFlow', icon: <SiTensorflow size={24} />, items: ['Keras', 'TF Lite', 'Serving'] },
  { title: 'PyTorch', icon: <SiPytorch size={24} />, items: ['Lightning', 'Distributed', 'Inference'] },
  { title: 'LLMs', icon: <SiFastapi size={24} />, items: ['Prompting', 'RAG', 'Agents'] },
  { title: 'FastAPI', icon: <SiFastapi size={24} />, items: ['APIs', 'Async', 'Auth'] },
  { title: 'Cloud & DevOps', icon: <FaDocker size={24} />, items: ['Docker', 'AWS', 'CI/CD'] }
]

const projects = [
  {
    title: 'Neural Atlas',
    category: 'AI Platform',
    description: 'A multimodal RAG system with agent workflows, vector search, and enterprise-grade orchestration.',
    stack: ['Python', 'FastAPI', 'PyTorch', 'RAG'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Cortex Vision',
    category: 'Computer Vision',
    description: 'High-performance vision pipeline for defect detection and anomaly localization at scale.',
    stack: ['TensorFlow', 'OpenCV', 'Docker', 'AWS'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Prompt Forge',
    category: 'LLM Apps',
    description: 'A prompt evaluation and experimentation workspace for production LLM products.',
    stack: ['LangChain', 'LLMs', 'React', 'TypeScript'],
    github: '#',
    demo: '#'
  }
]

const experiences = [
  { role: 'AI Engineer', company: 'OpenAI Ecosystem Studio', period: '2024 - Present', description: 'Shipping LLM copilots and inference pipelines for strategic AI products.' },
  { role: 'ML Research Engineer', company: 'NVIDIA', period: '2022 - 2024', description: 'Built deep learning training systems and applied computer vision production solutions.' },
  { role: 'Backend & ML Developer', company: 'Microsoft', period: '2020 - 2022', description: 'Delivered data-driven forecasting services and robust APIs for intelligent products.' }
]

const certificates = ['TensorFlow Developer', 'AWS ML Specialty', 'DeepLearning.AI', 'LangChain Certified']

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#FF6B00]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg text-[#B7B7B7]">{description}</p>
    </motion.div>
  )
}

function FloatingOrb({ className }: { className: string }) {
  return <div className={`orb ${className}`} />
}

function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} color="#ff7a1a" />
      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={0.9}>
        <mesh>
          <icosahedronGeometry args={[1.25, 1]} />
          <meshStandardMaterial color="#FF6B00" emissive="#FF6B00" emissiveIntensity={0.85} wireframe />
        </mesh>
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2.2} />
    </Canvas>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('Home')
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })
  const progress = useTransform(scaleY, [0, 1], [0, 100])

  useEffect(() => {
    setMounted(true)
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.45 }
    )
    sections.forEach((section) => observer.observe(section))
    return () => {
      observer.disconnect()
      lenis.destroy()
    }
  }, [progress])

  const heroWords = useMemo(() => ['Python Developer', 'AI Engineer', 'Machine Learning Enthusiast', 'Deep Learning Engineer', 'TensorFlow Developer', 'PyTorch Developer', 'LLM Developer', 'Prompt Engineer', 'Generative AI Developer'], [])
  const [wordIndex, setWordIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => setWordIndex((prev) => (prev + 1) % heroWords.length), 1800)
    return () => clearInterval(interval)
  }, [heroWords.length])

  useEffect(() => {
    gsap.from('.hero-title', { y: 24, opacity: 0, duration: 1.1, ease: 'power3.out' })
  }, [])

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {!mounted ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-6">
            <div className="relative h-24 w-24 rounded-full border border-[#FF6B00]/40 p-2">
              <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#FF6B00]" />
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#111111]/80 text-[#FF6B00]">
                <Sparkles size={28} />
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-[#B7B7B7]">Initializing portfolio</p>
              <p className="mt-2 text-2xl font-semibold text-white">AI systems online</p>
            </div>
          </motion.div>
        </div>
      ) : null}

      <motion.div style={{ scaleY: progress, transformOrigin: 'top' }} className="fixed left-0 top-0 z-[60] h-1 w-full origin-top bg-[#FF6B00]" />
      <header className="fixed top-4 z-[9999] mx-auto flex w-full justify-center px-4 sm:px-6">
        <nav className="glass relative z-[9999] flex items-center gap-2 rounded-full px-3 py-2 shadow-glow">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`rounded-full px-3 py-2 text-sm transition ${activeSection.toLowerCase() === item.toLowerCase() ? 'bg-[#FF6B00] text-white' : 'text-[#B7B7B7] hover:bg-white/10 hover:text-white'}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-10 lg:px-20">
          <FloatingOrb className="left-[-8rem] top-20 h-56 w-56 bg-[#FF6B00]" />
          <FloatingOrb className="right-[-4rem] top-40 h-40 w-40 bg-[#ff8c3a]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,107,0,0.08),_transparent_50%)]" />
          <div className="relative z-10 grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/30 bg-white/5 px-4 py-2 text-sm text-[#FF6B00]">
                <Zap size={16} /> Premium AI Engineer Portfolio
              </p>
              <h1 className="hero-title text-5xl font-semibold leading-[0.9] sm:text-6xl lg:text-8xl">
                Hello, I&apos;m <span className="text-[#FF6B00]">Sanjana</span>
              </h1>
              <h2 className="mt-6 text-2xl font-medium text-[#B7B7B7] sm:text-3xl lg:text-4xl">
                <span className="text-white">{heroWords[wordIndex]}</span>
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#B7B7B7]">
                I design and ship intelligent systems at the intersection of Python, machine learning, deep learning, LLMs, and generative AI with a strong product mindset.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                {['Resume', 'GitHub', 'LinkedIn', 'Contact'].map((label, index) => (
                  <motion.a key={label} whileHover={{ y: -3, scale: 1.03 }} href={label === 'Contact' ? '#contact' : '#'} className={`inline-flex items-center gap-2 rounded-full px-5 py-3 font-medium transition ${index === 0 ? 'bg-[#FF6B00] text-white' : 'border border-white/10 bg-white/5 text-white hover:border-[#FF6B00]/70'}`}>
                    {label === 'Resume' ? <Download size={18} /> : label === 'GitHub' ? <Github size={18} /> : label === 'LinkedIn' ? <Linkedin size={18} /> : <Mail size={18} />}
                    {label}
                  </motion.a>
                ))}
              </div>
              <div className="mt-12 flex items-center gap-4 text-sm text-[#B7B7B7]">
                <div className="h-px w-16 bg-[#FF6B00]" />
                <span>Scroll to explore the full experience</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="relative h-[500px] rounded-[2rem] border border-white/10 bg-[#111111]/70 p-6 shadow-glow">
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle,_rgba(255,107,0,0.16),_transparent_55%)]" />
              <HeroScene />
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-6 py-24 sm:px-10 lg:px-20">
          <SectionTitle eyebrow="About" title="Crafting intelligence with product clarity" description="I merge rigorous AI engineering with calm, elegant product design to build systems that feel both powerful and intuitive." />
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} className="glass rounded-[2rem] p-8">
              <div className="mx-auto h-64 w-64 rounded-full border border-[#FF6B00]/40 bg-[radial-gradient(circle,_rgba(255,107,0,0.2),_transparent_70%)]" />
              <div className="mt-8 space-y-4 text-[#B7B7B7]">
                <p>Python-first developer with a strong background in ML, DL, LLMs, and FastAPI-based AI products.</p>
                <p>Built solutions across research, deployment, and product integration for teams that need reliable, high-impact AI experiences.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} className="glass rounded-[2rem] p-8">
              <div className="grid gap-6 md:grid-cols-2">
                {['Python', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'LLMs', 'FastAPI', 'LangChain', 'Vector Databases', 'Prompt Engineering', 'RAG', 'Problem Solving'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-[#E7E7E7]">{item}</div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="px-6 py-24 sm:px-10 lg:px-20">
          <SectionTitle eyebrow="Skills" title="Systems built for modern AI products" description="A focused toolkit for engineering, experimentation, deployment, and elegant user experiences." />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((skill, index) => (
              <motion.article key={skill.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} whileHover={{ y: -6, rotate: -1, scale: 1.02 }} transition={{ delay: index * 0.04 }} className="glass rounded-[1.6rem] p-7">
                <div className="mb-5 flex items-center gap-3 text-[#FF6B00]">{skill.icon}<h3 className="text-xl font-semibold text-white">{skill.title}</h3></div>
                <ul className="space-y-2 text-sm text-[#B7B7B7]">
                  {skill.items.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="px-6 py-24 sm:px-10 lg:px-20">
          <SectionTitle eyebrow="Projects" title="Selected work that stands out" description="A mix of research-backed systems, product-grade tooling, and polished AI applications." />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article key={project.title} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} whileHover={{ y: -8, scale: 1.01 }} transition={{ delay: index * 0.07 }} className="glass overflow-hidden rounded-[1.8rem]">
                <div className="h-44 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,0,0.2),_transparent_60%)] p-6">
                  <div className="flex h-full items-end justify-between rounded-[1.2rem] border border-white/10 bg-[#111111]/70 p-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-[#FF6B00]">{project.category}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <Stars className="text-[#FF6B00]" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#B7B7B7]">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[#E7E7E7]">{tag}</span>)}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a href={project.github} className="rounded-full border border-white/10 px-4 py-2 text-sm hover:border-[#FF6B00]/70">GitHub</a>
                    <a href={project.demo} className="rounded-full bg-[#FF6B00] px-4 py-2 text-sm text-white">Live Demo</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="px-6 py-24 sm:px-10 lg:px-20">
          <SectionTitle eyebrow="Experience" title="Building across ambitious teams" description="Focused on AI systems that are reliable, measurable, and meaningful in production." />
          <div className="space-y-6">
            {experiences.map((item, index) => (
              <motion.div key={item.role} initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} className="glass rounded-[1.5rem] p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#FF6B00]">{item.period}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-[#B7B7B7]">{item.company}</p>
                  </div>
                  <div className="h-2 w-24 rounded-full bg-white/10"><div className="h-2 w-3/4 rounded-full bg-[#FF6B00]" /></div>
                </div>
                <p className="mt-5 max-w-3xl text-[#B7B7B7]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="certificates" className="px-6 py-24 sm:px-10 lg:px-20">
          <SectionTitle eyebrow="Certificates" title="Recognized credentials and continued learning" description="A curated portfolio of certifications that reinforce my engineering depth and product understanding." />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {certificates.map((certificate, index) => (
              <motion.div key={certificate} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} whileHover={{ scale: 1.03, y: -4 }} transition={{ delay: index * 0.05 }} className="glass flex min-h-48 items-center justify-center rounded-[1.6rem] border border-[#FF6B00]/20 p-8 text-center text-xl font-semibold text-white">
                {certificate}
              </motion.div>
            ))}
          </div>
        </section>

        <section id="resume" className="px-6 py-24 sm:px-10 lg:px-20">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} className="glass rounded-[2rem] p-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#FF6B00]">Resume</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Ready for ambitious teams and high-impact products</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#B7B7B7]">Download my resume to review my experience, technical depth, and product collaboration approach.</p>
            <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF6B00] px-6 py-3 font-semibold text-white">Download Resume <ArrowRight size={18} /></a>
          </motion.div>
        </section>

        <section id="contact" className="px-6 py-24 sm:px-10 lg:px-20">
          <SectionTitle eyebrow="Contact" title="Let’s build the next generation of intelligent products" description="Open to full-time, consulting, and ambitious product partnerships." />
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} className="glass rounded-[1.8rem] p-8">
              <div className="space-y-4 text-[#B7B7B7]">
                <p><span className="text-white">Email:</span> sanjana@example.com</p>
                <p><span className="text-white">Location:</span> Bengaluru, India</p>
                <div className="flex gap-3 pt-4">
                  {[Github, Linkedin, Mail].map((Icon, index) => (
                    <a key={index} href="#" className="rounded-full border border-white/10 p-3 text-[#FF6B00] transition hover:border-[#FF6B00]/70 hover:bg-[#FF6B00]/10"><Icon size={18} /></a>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.form initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} className="glass rounded-[1.8rem] p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-[#B7B7B7]">Name</label>
                  <input className="w-full rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-white outline-none ring-0" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-[#B7B7B7]">Email</label>
                  <input className="w-full rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-white outline-none ring-0" />
                </div>
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-sm text-[#B7B7B7]">Message</label>
                <textarea rows={6} className="w-full rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-white outline-none ring-0" />
              </div>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FF6B00] px-5 py-3 font-semibold text-white">Send Message <ArrowRight size={18} /></button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-[#B7B7B7] sm:px-10 lg:px-20">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p>© 2026 Sanjana. Crafted for the future of AI.</p>
          <a href="#home" className="text-[#FF6B00]">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}
