export interface Project {
  id: string;
  title: string;
  category: 'llm' | 'vision' | 'ml' | 'web';
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
  name: "Sanjana Singh",
  title: "Python AI Developer & Machine Learning Engineer",
  roles: [
    "Python AI Developer",
    "LLM & RAG Systems Specialist",
    "Machine Learning Engineer",
    "Deep Learning & Computer Vision"
  ],
  location: "India",
  email: "sanjanaasingh.05@gmail.com",
  github: "https://github.com/sanjanaa6",
  linkedin: "https://linkedin.com/in/sanjanaa6",
  status: "Available for AI Engineering Roles & Collaborations",
  summary: "Passionate Python AI Developer and Machine Learning Engineer specializing in building enterprise Retrieval-Augmented Generation (RAG) pipelines, Fine-Tuning LLMs, Computer Vision systems, and interactive AI applications. Experienced in PyTorch, TensorFlow, LangChain, LlamaIndex, and modern full-stack integrations.",
  stats: [
    { label: "AI Models Deployed", value: "15+" },
    { label: "Code Accuracy", value: "98.4%" },
    { label: "RAG Latency Reduction", value: "65%" },
    { label: "Open Source Projects", value: "10+" }
  ]
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    iconName: "BrainCircuit",
    skills: [
      { name: "Python", level: 95 },
      { name: "PyTorch & TensorFlow", level: 90 },
      { name: "Scikit-Learn", level: 92 },
      { name: "Deep Learning (CNN/RNN/Transformers)", level: 88 },
      { name: "Pandas & NumPy", level: 95 }
    ]
  },
  {
    title: "LLM & Generative AI",
    iconName: "Sparkles",
    skills: [
      { name: "LangChain & LlamaIndex", level: 92 },
      { name: "RAG Architectures & Vector DBs (Chroma/FAISS/Pinecone)", level: 90 },
      { name: "Prompt Engineering & Agentic Workflows", level: 94 },
      { name: "Ollama & Local Model Deployment", level: 88 },
      { name: "Hugging Face Transformers", level: 85 }
    ]
  },
  {
    title: "Backend & Cloud API",
    iconName: "Server",
    skills: [
      { name: "FastAPI & Flask", level: 90 },
      { name: "RESTful APIs & Async I/O", level: 92 },
      { name: "Docker & Containerization", level: 82 },
      { name: "Git / GitHub DevOps", level: 90 }
    ]
  },
  {
    title: "Frontend & Visualization",
    iconName: "Code",
    skills: [
      { name: "React 19 & TypeScript", level: 85 },
      { name: "Tailwind CSS & Glassmorphism UI", level: 90 },
      { name: "Streamlit & Gradio AI Dashboards", level: 95 },
      { name: "Three.js / HTML Canvas Visuals", level: 78 }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "rag-knowledge-engine",
    title: "Enterprise Multi-Doc RAG Knowledge Engine",
    category: "llm",
    description: "High-throughput Retrieval-Augmented Generation system using LlamaIndex, ChromaDB, and local Llama 3 via Ollama for real-time document search.",
    detailedOverview: "Engineered an enterprise-grade document intelligence system capable of parsing unstructured PDFs, markdown, and tabular data. Utilized hybrid semantic + keyword search with re-ranking to deliver grounded answers with zero hallucination.",
    tags: ["Python", "LangChain", "LlamaIndex", "ChromaDB", "Ollama", "FastAPI"],
    metrics: "Sub-400ms Query Latency | 96% Precision",
    githubUrl: "https://github.com/sanjanaa6/Portfolioo",
    liveUrl: "#",
    featured: true,
    architectureHighlights: [
      "Hybrid Vector + BM25 Sparse Search",
      "Cross-Encoder Re-Ranking Pipeline",
      "Strict Grounding Guardrails & Context Streaming"
    ]
  },
  {
    id: "vision-defect-detection",
    title: "YOLOv8 Real-Time Visual Inspection System",
    category: "vision",
    description: "Deep Learning computer vision model trained to detect manufacturing micro-defects at 60 FPS using custom PyTorch augmentation pipelines.",
    detailedOverview: "Built a computer vision inspection tool tailored for automated quality control. Uses fine-tuned YOLOv8 weights with TensorRT quantization for deployment on edge hardware.",
    tags: ["Python", "PyTorch", "OpenCV", "YOLOv8", "TensorRT", "Streamlit"],
    metrics: "60 FPS Edge Processing | 98.2% mAP@50",
    githubUrl: "https://github.com/sanjanaa6/Portfolioo",
    liveUrl: "#",
    featured: true,
    architectureHighlights: [
      "Custom Data Augmentation Pipeline",
      "TensorRT INT8 Model Quantization",
      "Real-time Video Stream Overlay Interface"
    ]
  },
  {
    id: "autonomous-ai-agent",
    title: "Multi-Agent Code Reviewer & Security Scanner",
    category: "llm",
    description: "Agentic AI pipeline using LangGraph that orchestrates sub-agents to scan code repositories for security bugs, lints, and test coverage.",
    detailedOverview: "Designed an autonomous multi-agent graph where specialized agents run static analysis, identify vulnerability vectors (OWASP Top 10), and draft pull request inline code recommendations.",
    tags: ["Python", "LangGraph", "OpenAI API", "FastAPI", "Docker"],
    metrics: "70% Faster PR Review Cycle",
    githubUrl: "https://github.com/sanjanaa6/Portfolioo",
    liveUrl: "#",
    featured: true,
    architectureHighlights: [
      "Stateful LangGraph Agent Workflow",
      "Self-Correction & Verification Loops",
      "Automated GitHub Webhook Integration"
    ]
  },
  {
    id: "predictive-analytics-suite",
    title: "Financial Time-Series Forecasting Engine",
    category: "ml",
    description: "Machine learning forecasting model utilizing XGBoost, LightGBM, and Prophet to predict market volatility and demand spikes.",
    detailedOverview: "Developed an end-to-end ML pipeline with feature engineering for rolling averages, seasonality decomposition, and real-time drift detection to maintain model accuracy over time.",
    tags: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "Plotly", "FastAPI"],
    metrics: "94.1% Accuracy | Automated Drift Detection",
    githubUrl: "https://github.com/sanjanaa6/Portfolioo",
    liveUrl: "#",
    featured: false,
    architectureHighlights: [
      "Automated Feature Engineering Pipeline",
      "Evidently AI Model Drift Monitoring",
      "Interactive Plotly Analytics Dashboard"
    ]
  },
  {
    id: "ai-portfolio-react",
    title: "Futuristic Glassmorphism AI Portfolio",
    category: "web",
    description: "Modern interactive developer portfolio built with React 19, TypeScript, Tailwind CSS, custom canvas graphics, and embedded AI Assistant.",
    detailedOverview: "Designed and built this full-stack portfolio experience featuring particle physics background, fast client-side chatbot, dark mode UI, and responsive modal interactions.",
    tags: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "Canvas API"],
    metrics: "100 Lighthouse Performance & A11y",
    githubUrl: "https://github.com/sanjanaa6/Portfolioo",
    liveUrl: "https://github.com/sanjanaa6/Portfolioo",
    featured: true,
    architectureHighlights: [
      "Custom HTML5 Canvas Particle Neural Engine",
      "Client-Side Knowledge Chatbot Widget",
      "Tailwind Glassmorphism UI Components"
    ]
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2024 - Present",
    title: "AI Developer & ML Engineer",
    organization: "Independent & Open Source AI Projects",
    description: "Architecting end-to-end LLM solutions, fine-tuning open-source models (Llama 3, Mistral), building multi-agent systems, and publishing computer vision tools.",
    type: "experience",
    badges: ["LangChain", "PyTorch", "RAG", "FastAPI", "React"]
  },
  {
    year: "2023 - 2024",
    title: "Machine Learning & Deep Learning Certification",
    organization: "Advanced AI Specialization",
    description: "Mastered Deep Neural Networks, Convolutional Networks, Transformer Architectures, NLP, and MLOps deployment best practices.",
    type: "certification",
    badges: ["TensorFlow", "PyTorch", "Computer Vision", "NLP"]
  },
  {
    year: "2020 - 2024",
    title: "Bachelor of Technology in Computer Science",
    organization: "University",
    description: "Specialized in Data Structures & Algorithms, Database Management Systems, Operating Systems, Artificial Intelligence, and Software Engineering.",
    type: "education",
    badges: ["B.Tech CS", "Python", "Data Structures", "DBMS"]
  }
];

export const AI_KNOWLEDGE_BASE = [
  {
    keywords: ["who", "about", "sanjana", "bio", "experience"],
    answer: "Sanjana Singh is a Python AI Developer and Machine Learning Engineer specializing in LLMs, RAG systems, PyTorch/TensorFlow deep learning, and computer vision. She builds enterprise-grade AI solutions and scalable web integrations!"
  },
  {
    keywords: ["skills", "tech", "stack", "python", "frameworks", "tools"],
    answer: "Sanjana's main core stack includes:\n• Languages: Python (Expert), TypeScript, SQL, C++\n• AI/ML: PyTorch, TensorFlow, Scikit-Learn, OpenCV, Hugging Face\n• GenAI: LangChain, LlamaIndex, ChromaDB, FAISS, Ollama, Prompt Engineering\n• Backend & Web: FastAPI, Flask, React 19, Tailwind CSS, Docker, Git"
  },
  {
    keywords: ["projects", "rag", "vision", "agent", "portfolio"],
    answer: "Sanjana has built several impressive AI systems:\n1. Enterprise Multi-Doc RAG Knowledge Engine (Sub-400ms latency)\n2. Real-Time YOLOv8 Visual Defect Detection System (60 FPS Edge)\n3. Autonomous Multi-Agent Code Reviewer (LangGraph)\n4. Futuristic Glassmorphism Portfolio (React 19 + TypeScript)"
  },
  {
    keywords: ["contact", "hire", "email", "reach", "social"],
    answer: "You can reach Sanjana directly via:\n📧 Email: sanjanaasingh.05@gmail.com\n💻 GitHub: github.com/sanjanaa6\n💼 LinkedIn: linkedin.com/in/sanjanaa6\nShe is available for AI engineering roles, freelance contracts, and research collaborations!"
  },
  {
    keywords: ["rag", "llm", "llama", "langchain", "ollama"],
    answer: "Sanjana specializes in Retrieval-Augmented Generation (RAG)! She builds hybrid vector search + sparse keyword retrieval systems with cross-encoder re-ranking using LlamaIndex, LangChain, ChromaDB, and local models like Llama 3 via Ollama."
  }
];
