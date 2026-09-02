export interface Project {
  id: string;
  title: string;
  category: 'web' | 'product' | 'brand' | 'mobile';
  description: string;
  detailedOverview: string;
  tags: string[];
  metrics: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  architectureHighlights: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; icon?: string }[];
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'experience' | 'certification';
  badges: string[];
}

export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Product Designer & Full-Stack Developer',
  roles: [
    'Product Designer',
    'Full-Stack Developer',
    'Brand Storyteller',
    'UI Systems Specialist'
  ],
  location: 'Remote / Worldwide',
  email: 'hello@yourportfolio.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  status: 'Available for product and digital design work',
  summary: 'I design thoughtful digital experiences and build polished products that combine strategy, usability, and clean engineering. My work sits at the intersection of brand, product design, and frontend craftsmanship.',
  stats: [
    { label: 'Projects launched', value: '42+' },
    { label: 'Client satisfaction', value: '96%' },
    { label: 'Avg. delivery speed', value: '2-4 wks' },
    { label: 'Years building', value: '6+' }
  ]
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Design Strategy',
    iconName: 'BrainCircuit',
    skills: [
      { name: 'UX Research', level: 92 },
      { name: 'Wireframing & IA', level: 90 },
      { name: 'Design Systems', level: 94 },
      { name: 'Brand Direction', level: 88 },
      { name: 'Prototyping', level: 96 }
    ]
  },
  {
    title: 'Frontend Engineering',
    iconName: 'Code',
    skills: [
      { name: 'React & TypeScript', level: 94 },
      { name: 'Next.js', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Performance Optimization', level: 88 },
      { name: 'Accessibility', level: 91 }
    ]
  },
  {
    title: 'Product Building',
    iconName: 'Server',
    skills: [
      { name: 'Product Thinking', level: 92 },
      { name: 'Roadmapping', level: 86 },
      { name: 'API Integration', level: 90 },
      { name: 'Testing & QA', level: 84 },
      { name: 'Agile Delivery', level: 89 }
    ]
  },
  {
    title: 'Creative Execution',
    iconName: 'Sparkles',
    skills: [
      { name: 'Landing Pages', level: 96 },
      { name: 'Brand Experience', level: 90 },
      { name: 'Content Systems', level: 82 },
      { name: 'Visual Storytelling', level: 92 },
      { name: 'Motion Direction', level: 79 }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'atlas-portal',
    title: 'Atlas Platform Redesign',
    category: 'web',
    description: 'A premium SaaS dashboard and knowledge portal for modern teams, built to simplify reporting and collaboration.',
    detailedOverview: 'I redesigned the customer experience and product UI to improve clarity, trust, and adoption across a complex SaaS platform. The new system combined cleaner information architecture with a more confident visual language.',
    tags: ['UX Strategy', 'React', 'Design System', 'Dashboard'],
    metrics: '31% increase in activation',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    featured: true,
    architectureHighlights: [
      'Information architecture overhaul',
      'Reusable component design system',
      'Conversion-focused onboarding flow'
    ]
  },
  {
    id: 'mira-brand',
    title: 'Mira Studio Branding',
    category: 'brand',
    description: 'A strategic rebrand and digital identity system for a creative studio entering a new growth phase.',
    detailedOverview: 'This engagement included brand positioning, message clarity, visual system updates, and a launch-ready website that translated the studio’s personality into a premium digital experience.',
    tags: ['Brand Identity', 'Web Design', 'Storytelling', 'Strategy'],
    metrics: '3x increase in inquiries',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    featured: true,
    architectureHighlights: [
      'Positioning and audience refinement',
      'High-converting portfolio design',
      'Tone and visual identity system'
    ]
  },
  {
    id: 'northstar-mobile',
    title: 'Northstar Mobile App',
    category: 'mobile',
    description: 'A focused mobile product that helps professionals manage tasks, notes, and priorities without overwhelm.',
    detailedOverview: 'The product was designed around clarity and habit building. We simplified the interface, made navigation more intuitive, and rebuilt key flows to reduce friction in daily use.',
    tags: ['Mobile UX', 'Product Design', 'Research', 'Prototyping'],
    metrics: '42% better task completion',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    featured: true,
    architectureHighlights: [
      'Usability-focused mobile flow design',
      'Lean onboarding and retention loop',
      'High-clarity data hierarchy'
    ]
  },
  {
    id: 'solace-product',
    title: 'Solace Product Suite',
    category: 'product',
    description: 'A set of product experiences built to unify customer operations, analytics, and client communication.',
    detailedOverview: 'The project focused on reducing complexity in a fragmented customer experience. I mapped the journey, refined the information hierarchy, and developed a consistent product interface that scaled across multiple surfaces.',
    tags: ['UX Design', 'Frontend', 'Systems', 'Product'],
    metrics: '2.1x faster weekly reporting',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    featured: false,
    architectureHighlights: [
      'Cross-functional product discovery',
      'Scalable UI patterns and templates',
      'Clear reporting and delivery flow'
    ]
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: '2022 - Present',
    title: 'Senior Product Designer & Frontend Engineer',
    organization: 'Independent Consulting & Product Work',
    description: 'Leading product strategy, interface design, and front-end execution for startups and service businesses focused on better digital experiences.',
    type: 'experience',
    badges: ['UX', 'React', 'Strategy', 'Design Systems']
  },
  {
    year: '2019 - 2022',
    title: 'Digital Product Designer',
    organization: 'Creative & SaaS Teams',
    description: 'Built clean, conversion-friendly digital products across marketing, product, and content experiences while collaborating tightly with engineering and growth teams.',
    type: 'experience',
    badges: ['Figma', 'Research', 'Product', 'Growth']
  },
  {
    year: '2015 - 2019',
    title: 'B.A. in Visual Communication & Interaction Design',
    organization: 'Design University',
    description: 'Focused on visual design, human-centered systems, and digital storytelling with a strong emphasis on interface clarity and audience experience.',
    type: 'education',
    badges: ['UI Design', 'UX', 'Branding', 'Interaction']
  }
];

export const AI_KNOWLEDGE_BASE = [
  {
    keywords: ['who', 'about', 'name', 'bio'],
    answer: 'This portfolio is built around a modern product-focused creative professional who blends design thinking with polished frontend engineering.'
  },
  {
    keywords: ['services', 'skills', 'stack', 'expertise'],
    answer: 'Core skill areas include product design, UX strategy, frontend development, responsive design systems, branding, and digital experience design.'
  },
  {
    keywords: ['projects', 'portfolio', 'work', 'case study'],
    answer: 'Recent work spans SaaS redesigns, brand refreshes, mobile product experiences, and conversion-focused digital launches across multiple product categories.'
  },
  {
    keywords: ['contact', 'hire', 'email', 'reach'],
    answer: 'You can reach the studio by email at hello@yourportfolio.com and connect through the portfolio contact form.'
  }
];
