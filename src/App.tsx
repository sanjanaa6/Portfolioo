import { useEffect, useMemo, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, BrainCircuit, Code2, Cpu, Download, Github, Linkedin, Mail, Stars, Zap } from 'lucide-react'
import { FaDocker } from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiFastapi } from 'react-icons/si'

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

const heroStats = [
  { value: '130+', label: 'ML models delivered' },
  { value: '24/7', label: 'Reliable deployment uptime' },
  { value: '10x', label: 'AI productivity uplift' }
]

const experiences = [
  { role: 'AI Engineer', company: 'OpenAI Ecosystem Studio', period: '2024 - Present', description: 'Shipping LLM copilots and inference pipelines for strategic AI products.' },
  { role: 'ML Research Engineer', company: 'NVIDIA', period: '2022 - 2024', description: 'Built deep learning training systems and applied computer vision production solutions.' },
  { role: 'Backend & ML Developer', company: 'Microsoft', period: '2020 - 2022', description: 'Delivered data-driven forecasting services and robust APIs for intelligent products.' }
]

const certificates = ['TensorFlow Developer', 'AWS ML Specialty', 'DeepLearning.AI', 'LangChain Certified']

function AnimatedOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.3, scale: 1 }}
      transition={{ duration: 1.5, delay, ease: 'easeOut' }}
      className={`orb ${className}`}
    >
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-full h-full"
      />
    </motion.div>
  )
}

function MagneticButton({ children, className, href }: { children: React.ReactNode; className?: string; href?: string }) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()
    const x = clientX - left - width / 2
    const y = clientY - top - height / 2
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const Component = href ? 'a' : 'button'
  
  return (
    <Component
      ref={ref as any}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `translate(${position.x * 0.2}px, ${position.y * 0.2}px)`,
        transition: 'transform 0.3s ease-out',
      }}
    >
      {children}
    </Component>
  )
}

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''))
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = numericValue
      const duration = 2000
      const incrementTime = duration / end
      
      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= end) clearInterval(timer)
      }, incrementTime)
      
      return () => clearInterval(timer)
    }
  }, [isInView, numericValue])

  return (
    <div ref={ref} className="glass rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-center transition-shadow hover:shadow-lg">
      <motion.p 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold text-white"
      >
        {count}{suffix}
      </motion.p>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-2 text-sm text-[#B7B7B7]"
      >
        {label}
      </motion.p>
    </div>
  )
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.25 })
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 max-w-2xl"
    >
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-3 text-sm uppercase tracking-[0.3em] text-[#FF6B00]"
      >
        {eyebrow}
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-semibold text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-4 text-lg text-[#B7B7B7]"
      >
        {description}
      </motion.p>
    </motion.div>
  )
}


export default function App() {
  const [activeSection, setActiveSection] = useState('Home')
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 0.5], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 0.5], [0, 50])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
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
    }
  }, [])

  const heroWords = useMemo(() => ['Python Developer', 'AI Engineer', 'Machine Learning Enthusiast', 'Deep Learning Engineer', 'TensorFlow Developer', 'PyTorch Developer', 'LLM Developer', 'Prompt Engineer', 'Generative AI Developer'], [])
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  useEffect(() => {
    const currentWord = heroWords[wordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        } else {
          setIsDeleting(true)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % heroWords.length)
        }
      }
    }, isDeleting ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex, heroWords])

  return (
    <div className="min-h-screen text-white">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#FF6B00]/20"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, Math.random() * 0.5 + 0.8, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-4 z-[9999] mx-auto flex w-full justify-center px-4 sm:px-6"
      >
        <nav className="glass relative z-[9999] flex items-center gap-2 rounded-full px-3 py-2">
          {navItems.map((item, index) => (
            <motion.a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-3 py-2 text-sm transition ${activeSection.toLowerCase() === item.toLowerCase() ? 'text-white font-semibold' : 'text-[#B7B7B7] hover:text-white'}`}
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </motion.header>

      <main>
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-10 lg:px-20">
          <motion.div style={{ y: y1, opacity }} className="absolute inset-0">
            <AnimatedOrb className="left-[-8rem] top-20 h-56 w-56 bg-[#FF6B00]" delay={0.2} />
            <AnimatedOrb className="right-[-4rem] top-40 h-40 w-40 bg-[#ff8c3a]" delay={0.4} />
            <AnimatedOrb className="left-[20%] bottom-20 h-32 w-32 bg-[#FF6B00]/50" delay={0.6} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,107,0,0.06),_transparent_50%)]" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="relative z-10 w-full max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/30 bg-white/5 px-4 py-2 text-sm text-[#FF6B00]">
                <Zap size={16} /> AI Engineer Portfolio
              </p>
              <motion.h1 
                className="text-5xl font-semibold leading-[0.9] sm:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hello, I&apos;m <motion.span 
                  className="text-[#FF6B00] bg-gradient-to-r from-[#FF6B00] via-[#FF8C3A] to-[#FF6B00] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                  animate={{
                    backgroundPosition: ['0% center', '200% center', '0% center'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  Sanjana
                </motion.span>
              </motion.h1>
              <h2 className="mt-6 text-2xl font-medium text-[#B7B7B7] sm:text-3xl lg:text-4xl">
                <span className="text-white">{displayText}<span className="animate-pulse">|</span></span>
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#B7B7B7]">
                I design and ship intelligent systems at the intersection of Python, machine learning, deep learning, LLMs, and generative AI with a strong product mindset.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                {['Resume', 'GitHub', 'LinkedIn', 'Contact'].map((label, index) => (
                  <MagneticButton key={label} href={label === 'Contact' ? '#contact' : '#'} className={`inline-flex items-center gap-2 rounded-full px-5 py-3 font-medium transition ${index === 0 ? 'bg-[#FF6B00] text-white hover:bg-[#FF6B00]/90' : 'border border-white/10 bg-white/5 text-white hover:border-[#FF6B00]/50'}`}>
                    {label === 'Resume' ? <Download size={18} /> : label === 'GitHub' ? <Github size={18} /> : label === 'LinkedIn' ? <Linkedin size={18} /> : <Mail size={18} />}
                    {label}
                  </MagneticButton>
                ))}
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
                ))}
              </div>
              <motion.div 
                className="mt-12 flex items-center gap-4 text-sm text-[#B7B7B7]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.div 
                  className="h-px w-16 bg-[#FF6B00]"
                  animate={{
                    scaleX: [0, 1, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.span
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  Scroll to explore
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
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
              <motion.article 
                key={skill.title} 
                initial={{ opacity: 0, y: 24 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.2 }} 
                whileHover={{ y: -8, scale: 1.02 }} 
                transition={{ delay: index * 0.04 }} 
                className="glass rounded-[1.6rem] p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6B00]/10 group relative overflow-hidden"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/5 to-transparent opacity-0 transition-opacity duration-300"
                />
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-5 flex items-center gap-3 text-[#FF6B00]"
                  >
                    {skill.icon}<h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                  </motion.div>
                  <ul className="space-y-2 text-sm text-[#B7B7B7]">
                    {skill.items.map((item, i) => (
                      <motion.li 
                        key={item} 
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ x: 5, color: '#FF6B00' }}
                        transition={{ delay: i * 0.05 }}
                        className="transition-colors"
                      >
                        • {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="px-6 py-24 sm:px-10 lg:px-20">
          <SectionTitle eyebrow="Projects" title="Selected work that stands out" description="A mix of research-backed systems, product-grade tooling, and polished AI applications." />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article 
                key={project.title} 
                initial={{ opacity: 0, y: 32 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.2 }} 
                whileHover={{ y: -12, scale: 1.02 }} 
                transition={{ delay: index * 0.07 }} 
                className="glass overflow-hidden rounded-[1.8rem] transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6B00]/15 group"
              >
                <motion.div 
                  className="h-44 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,0,0.2),_transparent_60%)] p-6 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="relative z-10 flex h-full items-end justify-between rounded-[1.2rem] border border-white/10 bg-[#111111]/70 p-4">
                    <div>
                      <motion.p 
                        initial={{ y: 0 }}
                        whileHover={{ y: -2 }}
                        className="text-sm uppercase tracking-[0.3em] text-[#FF6B00]"
                      >
                        {project.category}
                      </motion.p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 180, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Stars className="text-[#FF6B00]" />
                    </motion.div>
                  </div>
                </motion.div>
                <div className="p-6">
                  <p className="text-[#B7B7B7]">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tag, i) => (
                      <motion.span 
                        key={tag} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,107,0,0.2)', borderColor: '#FF6B00' }}
                        transition={{ delay: i * 0.05 }}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[#E7E7E7] transition-all"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github} 
                      className="rounded-full border border-white/10 px-4 py-2 text-sm hover:border-[#FF6B00]/70 transition-all"
                    >
                      GitHub
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo} 
                      className="rounded-full bg-[#FF6B00] px-4 py-2 text-sm text-white hover:bg-[#FF6B00]/90 transition-all"
                    >
                      Live Demo
                    </motion.a>
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
              <motion.div 
                key={certificate} 
                initial={{ opacity: 0, y: 24 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.2 }} 
                whileHover={{ y: -8, scale: 1.05, borderColor: '#FF6B00' }} 
                transition={{ delay: index * 0.05 }} 
                className="glass flex min-h-48 items-center justify-center rounded-[1.6rem] border border-[#FF6B00]/20 p-8 text-center text-xl font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6B00]/20 relative overflow-hidden group"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/10 to-transparent"
                />
                <motion.span 
                  whileHover={{ scale: 1.1, textShadow: '0 0 20px rgba(255,107,0,0.5)' }}
                  className="relative z-10 transition-all"
                >
                  {certificate}
                </motion.span>
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
