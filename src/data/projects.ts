export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
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
    githubUrl: 'https://github.com/hoangthai77641/thohcm',
    liveUrl: '#',
    imageUrl: '/images/thohcm-logo.png',
  },
];

export default projects;