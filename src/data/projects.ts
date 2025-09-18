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
    imageUrl:
      '/images/logo4.png',
  },
  {
    title: 'Task Management App (Personal Project)',
    description:
      'Project under development and not deployed yet. A personal productivity web application for managing daily tasks and to-dos. Features user authentication, task CRUD, due date reminders, and responsive UI. Built to practice modern React and TypeScript development.',
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