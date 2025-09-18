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
    title: 'Hannie Jewelry E-commerce Platform',
    description:
      'A full-stack e-commerce platform developed as a graduation project. The system includes customer management, promotion campaigns, product catalog, and order processing. Backend: Java Spring Boot, PostgreSQL, Redis, RESTful API, JWT authentication. Frontend: ReactJS (Admin), NextJS (Client), TailwindCSS, Redux. Mobile: Flutter, Dart (cross-platform app). DevOps: Docker, Docker Compose. Key features: Customer registration, login, profile & address management; Promotion code management and application; Admin dashboard for customer and promotion management; Responsive UI for web and mobile; Secure authentication and role-based access; Team size: 4 (Fullstack role: customer & promotion modules).',
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
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjY2VkYmZmIi8+CjxyZWN0IHg9IjE3NSIgeT0iMTA1IiB3aWR0aD0iNTAiIGhlaWdodD0iNDAiIGZpbGw9IiM2Y2Q2ZmYiLz4KPHN2Zz4K',
  },
];

export default projects;
