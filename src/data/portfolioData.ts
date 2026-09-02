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
  name: 'Sanjana S R',
  title: 'Software Development Engineer & AI Enthusiast',
  roles: [
    'Software Engineer',
    'Full-Stack Developer',
    'AI / ML Developer',
    'Backend Specialist'
  ],
  location: 'Bangalore / Remote',
  email: 'sanjnaasingh.05@gmail.com',
  github: 'https://github.com/sanjanaa6',
  linkedin: 'https://www.linkedin.com/in/sanjana-singh-645a7a35b/',
  status: 'Seeking entry-level Software Development Engineer role',
  summary: 'MCA student skilled in Python, SQL, and full-stack web development with experience in scalable applications and AI projects. Seeking to contribute technical expertise and grow in a collaborative environment.',
  fullBio: [
    "I am an MCA student specializing in GenAI at Alliance University, deeply passionate about software engineering, full-stack development, and artificial intelligence.",
    "My expertise lies in backend development, API design, and database management using MySQL and MongoDB. I have a strong foundation in data structures, algorithms, and software engineering principles.",
    "I love building scalable applications, from AI-powered hiring platforms to machine learning models for classification. I am constantly exploring new technologies like Langchain, FastAPI, and React to turn complex problems into efficient digital solutions."
  ],
  stats: [
    { label: 'Projects Built', value: '10+' },
    { label: 'DSA & CS Fundas', value: 'Strong' },
    { label: 'Hackerrank/Leetcode', value: 'Active' },
    { label: 'Focus Area', value: 'AI & Web' }
  ]
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Languages & Web',
    iconName: 'Code',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript & React.js', level: 90 },
      { name: 'Java & PHP', level: 80 },
      { name: 'HTML & CSS', level: 95 },
      { name: 'Node.js & MERN', level: 85 }
    ]
  },
  {
    title: 'Backend & Data',
    iconName: 'Server',
    skills: [
      { name: 'MySQL & PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 88 },
      { name: 'FastAPI & API Design', level: 92 },
      { name: 'Backend Development', level: 90 },
      { name: 'System Design Basics', level: 80 }
    ]
  },
  {
    title: 'AI & Machine Learning',
    iconName: 'BrainCircuit',
    skills: [
      { name: 'Machine Learning', level: 85 },
      { name: 'Scikit-learn', level: 88 },
      { name: 'Langchain & OpenRouter', level: 82 },
      { name: 'Hugging Face', level: 80 },
      { name: 'Data Preprocessing', level: 85 }
    ]
  },
  {
    title: 'Tools & Core CS',
    iconName: 'Layers',
    skills: [
      { name: 'Data Structures & Algos', level: 92 },
      { name: 'OOP Principles', level: 90 },
      { name: 'GitHub & Docker', level: 85 },
      { name: 'Jupyter & Colab', level: 90 },
      { name: 'Debugging & QA', level: 88 }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ai-hiring-assistant',
    title: 'AI Hiring Assistant',
    category: 'web',
    description: 'An AI-powered hiring platform for resume screening and candidate evaluation.',
    detailedOverview: 'Built an intelligent platform utilizing the MERN stack and FastAPI. The system integrates OpenAI models to accurately match candidate skills with job requirements, presented through a responsive React.js interface with secure authentication.',
    tags: ['MERN Stack', 'FastAPI', 'OpenAI API', 'React.js'],
    metrics: 'Automated AI resume screening',
    githubUrl: 'https://github.com/sanjanaa6',
    liveUrl: 'https://aihiring.eval8.ai/',
    featured: true,
    architectureHighlights: [
      'FastAPI backend APIs for fast inference',
      'OpenAI model integration for skill matching',
      'Secure authentication and candidate management'
    ]
  },
  {
    id: 'banknote-auth',
    title: 'Bank Note Authentication',
    category: 'product',
    description: 'A machine learning system to classify genuine vs counterfeit banknotes.',
    detailedOverview: 'Engineered a robust machine learning model applying data preprocessing, feature engineering, and model training using Python and Scikit-learn. The final product includes a real-time prediction pipeline for accurate banknote authentication.',
    tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Data Science'],
    metrics: 'Real-time ML classification',
    githubUrl: 'https://github.com/sanjanaa6/Bank_note_classify',
    liveUrl: '#',
    featured: true,
    architectureHighlights: [
      'Data preprocessing and feature engineering',
      'Model training with Scikit-learn',
      'Real-time prediction pipeline'
    ]
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: 'Recent',
    title: 'Software Development-AI Intern',
    organization: 'Hysteresis',
    description: 'Developed web application features using modern frameworks. Collaborated with teams to build and debug software modules. Worked with databases and APIs to design scalable backend logic.',
    type: 'experience',
    badges: ['Web Dev', 'APIs', 'Databases', 'Debugging']
  }
];

export const EDUCATION_DATA = [
  {
    year: 'Oct 2025 - May 2027',
    degree: 'Master of Computer Applications (GenAI)',
    institution: 'Alliance University, Bangalore',
    description: 'Pursuing advanced studies with a specialization in Generative AI and modern software development.'
  },
  {
    year: 'Sep 2022 - Apr 2025',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Sahyadri Degree College, Karnataka',
    description: 'Core foundation in computer science, software engineering, and application development.'
  },
  {
    year: 'Jun 2020 - Apr 2022',
    degree: 'Intermediate (10+2)',
    institution: 'Narayan PU College, Kolar, Karnataka',
    description: 'Pre-university education focusing on science and mathematics.'
  },
  {
    year: 'Jun 2019 - Apr 2020',
    degree: 'Secondary School Leaving Certificate (SSLC / 10th)',
    institution: 'New Jyothi Vidhya Samaste, Kolar, Karnataka',
    description: 'Primary and secondary education foundations.'
  }
];

export const CERTIFICATIONS_DATA = [
  {
    year: 'Recent',
    title: 'MERN STACK - AI',
    issuer: 'Hysteresis Pvt Ltd',
    badge: 'MERN & AI'
  },
  {
    year: 'Recent',
    title: 'Advanced Data Structures and Algorithms',
    issuer: 'Packt',
    badge: 'DSA'
  },
  {
    year: 'Recent',
    title: 'Python for Data Science & AI',
    issuer: 'Coursera (IBM)',
    badge: 'Python/AI'
  },
  {
    year: 'Recent',
    title: 'Applied Statistics for Data Analysis',
    issuer: 'Coursera',
    badge: 'Data Science'
  },
  {
    year: 'Recent',
    title: 'User Interface (UI) Design with Figma',
    issuer: 'Coursera',
    badge: 'UI Design'
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
