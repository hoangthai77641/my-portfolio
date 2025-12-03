export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  websiteUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Hannie Jewelry E-commerce Platform (Project Team)',
    description:
      'There is no decision to convert from the business side yet, more time is needed to complete and test. A full-stack e-commerce platform developed as a graduation project. The system includes customer management, promotion campaigns, product catalog, and order processing. Backend: Java Spring Boot, PostgreSQL, Redis, RESTful API, JWT authentication. Frontend: ReactJS (Admin), NextJS (Client), TailwindCSS, Redux. Mobile: Flutter, Dart (cross-platform app). DevOps: Docker, Docker Compose. Key features: Customer registration, login, profile & address management; Promotion code management and application; Admin dashboard for customer and promotion management; Responsive UI for web and mobile; Secure authentication and role-based access; Team size: 4 (Fullstack role: customer & promotion modules).',
    technologies: [
      'Java Spring Boot',
      'PostgreSQL',
      'Redis',
      'RESTful API',
      'JWT',
      'ReactJS',
      'NextJS',
      'Redux',
      'TailwindCSS',
      'Flutter',
      'Dart',
      'Docker',
      'Docker Compose',
    ],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: '/images/logo4.png',
  },
  {
    title: 'Thợ HCM - Home Repair Service Platform (Personal Project)',
    websiteUrl: 'https://thohcm-frontend.web.app',
    description:
      'A comprehensive home repair service booking platform connecting customers with skilled technicians in Ho Chi Minh City. The system features real-time booking management, worker scheduling, VIP membership with discounts, notification system, and review management. Backend: Node.js (Express), MongoDB, Socket.IO for real-time features, JWT authentication, rate limiting, and security middleware. Frontend: ReactJS with real-time booking interface and service catalog. Mobile: Flutter app for workers with Wi-Fi debugging support and dynamic API configuration. Key features: Customer booking system, worker schedule management, VIP pricing engine, real-time notifications, review and rating system, banner management, secure file uploads, and comprehensive admin dashboard.',
    technologies: [
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.IO',
      'JWT',
      'ReactJS',
      'Flutter',
      'Dart',
      'Multer',
      'Mongoose',
      'Helmet',
      'CORS',
    ],
    githubUrl: 'https://github.com/hoangthai77641/ThoHCM-Personal-Project',
    liveUrl: '#',
    imageUrl: '/images/thohcm-logo.png',
  },
  // AI Scientist Ecosystem Organization Projects
  {
    title: 'AI Scientist Ecosystem - Frontend Dashboard',
    description:
      'Dashboard UI (Next.js + TypeScript) for the AI Scientist Ecosystem platform. A modern, responsive web interface for managing and visualizing scientific data, alerts, and AI agent interactions.',
    technologies: ['Next.js', 'TypeScript', 'React', 'TailwindCSS'],
    githubUrl: 'https://github.com/ai-scientist-ecosystem/frontend',
    liveUrl: '#',
    imageUrl: '/images/logo4.png',
  },
  {
    title: 'AI Scientist Ecosystem - Data Collector',
    description:
      'Spring Boot services for NASA/ESA/NOAA data ingestion. Microservice responsible for collecting, processing, and storing scientific data from multiple space and weather agencies.',
    technologies: ['Java', 'Spring Boot', 'Microservices', 'REST API'],
    githubUrl: 'https://github.com/ai-scientist-ecosystem/data-collector',
    liveUrl: '#',
    imageUrl: '/images/logo4.png',
  },
  {
    title: 'AI Scientist Ecosystem - Alert Engine',
    description:
      'Kafka-based alert engine with rule processing. Real-time event streaming and alert generation system for scientific data anomalies and emergency notifications.',
    technologies: ['Apache Kafka', 'Java', 'Stream Processing', 'Event-Driven'],
    githubUrl: 'https://github.com/ai-scientist-ecosystem/alert-engine',
    liveUrl: '#',
    imageUrl: '/images/logo4.png',
  },
  {
    title: 'AI Scientist Ecosystem - API Gateway',
    description:
      'Spring Boot API gateway for all microservices. Centralized entry point handling authentication, routing, rate limiting, and load balancing for the ecosystem.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Cloud Gateway',
      'Microservices',
    ],
    githubUrl: 'https://github.com/ai-scientist-ecosystem/api-gateway',
    liveUrl: '#',
    imageUrl: '/images/logo4.png',
  },
  {
    title: 'AI Scientist Ecosystem - Mobile App',
    description:
      'React Native mobile app for alerts, education, and social features. Cross-platform mobile application providing real-time notifications and access to scientific content.',
    technologies: [
      'React Native',
      'JavaScript',
      'Mobile Development',
      'Cross-Platform',
    ],
    githubUrl: 'https://github.com/ai-scientist-ecosystem/mobile-app',
    liveUrl: '#',
    imageUrl: '/images/logo4.png',
  },
  {
    title: 'AI Scientist Ecosystem - Infrastructure',
    description:
      'Infrastructure as Code and deployment. Terraform and Kubernetes configurations for deploying and managing the entire AI Scientist Ecosystem in cloud environments.',
    technologies: ['Terraform', 'HCL', 'Kubernetes', 'Docker', 'DevOps', 'IaC'],
    githubUrl: 'https://github.com/ai-scientist-ecosystem/infra',
    liveUrl: '#',
    imageUrl: '/images/logo4.png',
  },
  {
    title: 'AI Scientist Ecosystem - Social Hub',
    description:
      'Scientific social network for discussion and collaboration. Platform enabling researchers and enthusiasts to share discoveries, discuss findings, and collaborate on projects.',
    technologies: ['Node.js', 'Social Network', 'Real-time Communication'],
    githubUrl: 'https://github.com/ai-scientist-ecosystem/social-hub',
    liveUrl: '#',
    imageUrl: '/images/logo4.png',
  },
  {
    title: 'AI Scientist Ecosystem - Alert Publisher',
    description:
      'Cell Broadcast integration for offline emergency alerts. System for publishing critical scientific alerts through cellular broadcast networks for areas with limited connectivity.',
    technologies: [
      'Java',
      'Cell Broadcast',
      'Emergency Systems',
      'Telecommunications',
    ],
    githubUrl: 'https://github.com/ai-scientist-ecosystem/alert-publisher',
    liveUrl: '#',
    imageUrl: '/images/logo4.png',
  },
  {
    title: 'AI Scientist Ecosystem - AI Agents',
    description:
      'Autonomous AI Scientist Agents (Einstein, Tesla, Hawking, Geologist, Ethics). Specialized AI agents designed to analyze scientific data, generate hypotheses, and provide domain-specific insights.',
    technologies: [
      'Python',
      'AI/ML',
      'LLM',
      'Agent Framework',
      'Natural Language Processing',
    ],
    githubUrl: 'https://github.com/ai-scientist-ecosystem/ai-agents',
    liveUrl: '#',
    imageUrl: '/images/logo4.png',
  },
  {
    title: 'AI Scientist Ecosystem - Knowledge Service',
    description:
      'Knowledge ingestion and retrieval. Python-based service for building and querying the scientific knowledge base using vector databases and semantic search.',
    technologies: [
      'Python',
      'Vector Database',
      'Semantic Search',
      'NLP',
      'RAG',
    ],
    githubUrl: 'https://github.com/ai-scientist-ecosystem/knowledge',
    liveUrl: '#',
    imageUrl: '/images/logo4.png',
  },
  {
    title: 'AI Scientist Ecosystem - E-commerce',
    description:
      'Marketplace for scientific products and survival tools. E-commerce platform offering scientific equipment, educational materials, and emergency preparedness supplies.',
    technologies: ['E-commerce', 'Payment Integration', 'Inventory Management'],
    githubUrl: 'https://github.com/ai-scientist-ecosystem/ecommerce',
    liveUrl: '#',
    imageUrl: '/images/logo4.png',
  },
  {
    title: 'AI Scientist Ecosystem - Education Hub',
    description:
      'Learning Hub with AI Teacher Agents and gamification. Educational platform featuring AI-powered tutoring, interactive courses, and gamified learning experiences for scientific topics.',
    technologies: [
      'EdTech',
      'AI Tutoring',
      'Gamification',
      'Learning Management',
    ],
    githubUrl: 'https://github.com/ai-scientist-ecosystem/education',
    liveUrl: '#',
    imageUrl: '/images/logo4.png',
  },
  {
    title: 'AI Scientist Ecosystem - Meta Repository',
    description:
      'Meta repository coordinating all modules. Central coordination repository for managing dependencies, versioning, and orchestration across all AI Scientist Ecosystem services.',
    technologies: [
      'Java',
      'Monorepo',
      'Build Orchestration',
      'Project Management',
    ],
    githubUrl: 'https://github.com/ai-scientist-ecosystem/meta',
    liveUrl: '#',
    imageUrl: '/images/logo4.png',
  },
];

export default projects;
