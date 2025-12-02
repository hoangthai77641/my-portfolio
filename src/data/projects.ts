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
  {
    title: 'My Portfolio - Personal Website',
    description:
      'A modern, responsive portfolio website showcasing my journey as a Fresher Full-Stack Developer. Built with cutting-edge technologies including Next.js 15.5 App Router, TypeScript, Tailwind CSS v4, and Framer Motion. Features include: Dark/Light mode with localStorage persistence, Internationalization (English/Vietnamese), Smooth animations, Fully responsive mobile-first design, EmailJS contact form integration, CI/CD Pipeline with GitHub Actions, and comprehensive code quality tools (ESLint, Prettier, TypeScript).',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'React',
      'EmailJS',
      'GitHub Actions',
      'ESLint',
      'Prettier',
    ],
    githubUrl: 'https://github.com/hoangthai77641/my-portfolio',
    liveUrl: '#',
    imageUrl: '/images/logo4.png',
  },
  {
    title: 'Portfolio Hub - GitHub Profile',
    description:
      'Central hub for all GitHub work — from personal projects to collaborations and contributions to various organizations. This repository showcases connections to multiple organizations including AI Scientist Ecosystem (AI research and ethics), HannieJewelry (graduation team project), and Medical Platforms (healthcare technology solutions). Serves as a comprehensive overview of development activities and collaborative efforts.',
    technologies: ['GitHub', 'Markdown', 'Documentation'],
    githubUrl: 'https://github.com/hoangthai77641/Portfolio',
    liveUrl: '#',
    imageUrl: '/images/logo4.png',
  },
];

export default projects;
