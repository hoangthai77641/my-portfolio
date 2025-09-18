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
    title: 'Task Management App (Personal Project)',
    description:
      'A personal productivity web application for managing daily tasks and life goals, powered by AI. Key features: AI Coach System (personalized motivation, procrastination detection, smart recommendations, progress insights), Goal Management (life goals, milestones, SMART validation), Habit Tracking (streaks, micro-habits, analytics), Behavioral Psychology Engine (reward system, accountability partners, gamification), Focus & Productivity Tools (AI Pomodoro, deep work, mindfulness). Tech: React, TypeScript, Node.js, Express, MongoDB, JWT, TailwindCSS. Designed as a next-gen anti-procrastination platform with AI integration and behavioral science.',
    technologies: [
      'ReactJS',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'TailwindCSS',
    ],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: '/images/task-app.png',
  },
];

export default projects;