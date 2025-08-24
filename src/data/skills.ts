export interface SkillDetail {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  experience: string;
  projects: string[];
  description: string;
  certificate?: string;
}

export interface SkillCategory {
  [key: string]: SkillDetail[];
}

const skillsData: SkillCategory = {
  frontend: [
    {
      name: 'HTML5',
      level: 'intermediate',
      experience: '2 years through academic projects',
      projects: [
        'E-commerce Website',
        'Portfolio Website',
        'Task Management App',
      ],
      description:
        'Semantic HTML, accessibility standards, modern HTML5 features including canvas, video, and form validation.',
      certificate: undefined,
    },
    {
      name: 'CSS3',
      level: 'intermediate',
      experience: '2 years including responsive design',
      projects: ['Portfolio Website', 'E-commerce UI', 'Mobile-first designs'],
      description:
        'Advanced CSS including Flexbox, Grid, animations, transitions, and responsive design principles.',
      certificate: undefined,
    },
    {
      name: 'JavaScript',
      level: 'advanced',
      experience: '2 years intensive study and practice',
      projects: ['Interactive Web Apps', 'SPA Applications', 'API Integration'],
      description:
        'ES6+, DOM manipulation, async/await, promises, event handling, and modern JavaScript patterns.',
      certificate: undefined,
    },
    {
      name: 'ReactJS',
      level: 'advanced',
      experience: '1.5 years building component-based apps',
      projects: [
        'Portfolio Website',
        'Task Management SPA',
        'E-commerce Frontend',
      ],
      description:
        'Hooks, Context API, component lifecycle, state management, and modern React patterns.',
      certificate: undefined,
    },
    {
      name: 'Figma (UI/UX design)',
      level: 'intermediate',
      experience: '1 year designing user interfaces',
      projects: [
        'Portfolio Design',
        'Mobile App Prototypes',
        'Web App Mockups',
      ],
      description:
        'User interface design, prototyping, design systems, and responsive layouts.',
      certificate: undefined,
    },
    {
      name: 'Responsive Design',
      level: 'intermediate',
      experience: '2 years mobile-first development',
      projects: ['All web projects', 'Cross-platform compatibility'],
      description:
        'Mobile-first approach, breakpoints, flexible layouts, and cross-device compatibility.',
      certificate: undefined,
    },
  ],
  backend: [
    {
      name: 'PHP & Laravel',
      level: 'advanced',
      experience: '1.5 years building web applications',
      projects: ['E-commerce Backend', 'RESTful APIs', 'Database-driven apps'],
      description:
        'MVC architecture, Eloquent ORM, middleware, authentication, and API development.',
      certificate: undefined,
    },
    {
      name: 'Node.JS',
      level: 'intermediate',
      experience: '1 year server-side development',
      projects: ['API Server', 'Real-time applications', 'Express.js apps'],
      description:
        'Express.js, middleware, RESTful APIs, database integration, and server-side logic.',
      certificate: undefined,
    },
    {
      name: 'Java SE/JavaFX',
      level: 'intermediate',
      experience: '1.5 years academic projects',
      projects: [
        'Desktop Applications',
        'GUI Applications',
        'Object-oriented projects',
      ],
      description:
        'Object-oriented programming, GUI development, event handling, and desktop application architecture.',
      certificate: undefined,
    },
    {
      name: 'C#',
      level: 'intermediate',
      experience: '1 year .NET development',
      projects: ['Console Applications', 'Windows Forms', 'Basic web apps'],
      description:
        'Object-oriented programming, .NET framework, basic web development, and Windows applications.',
      certificate: undefined,
    },
    {
      name: 'ASP.NET Core MVC',
      level: 'intermediate',
      experience: '8 months web development',
      projects: [
        'MVC Web Applications',
        'CRUD Operations',
        'Database integration',
      ],
      description:
        'MVC pattern, Entity Framework, Razor views, controllers, and web application architecture.',
      certificate: undefined,
    },
  ],
  database: [
    {
      name: 'SQL Server',
      level: 'intermediate',
      experience: '1.5 years database design and queries',
      projects: [
        'E-commerce Database',
        'User Management Systems',
        'Data analysis projects',
      ],
      description:
        'Database design, complex queries, stored procedures, indexing, and performance optimization.',
      certificate: undefined,
    },
    {
      name: 'MongoDB',
      level: 'intermediate',
      experience: '1 year NoSQL database experience',
      projects: [
        'Node.js applications',
        'Document-based data storage',
        'API backends',
      ],
      description:
        'Document-based database, aggregation pipelines, indexing, and integration with Node.js applications.',
      certificate: undefined,
    },
  ],
  mobile: [
    {
      name: 'Dart & Flutter',
      level: 'intermediate',
      experience: '1 year cross-platform development',
      projects: [
        'Mobile App Prototypes',
        'Cross-platform applications',
        'UI/UX implementations',
      ],
      description:
        'Cross-platform mobile development, widget-based UI, state management, and mobile app architecture.',
      certificate: undefined,
    },
  ],
  cloud: [
    {
      name: 'Microsoft Azure',
      level: 'intermediate',
      experience: '8 months cloud services learning',
      projects: [
        'Web app deployment',
        'Cloud database hosting',
        'Basic DevOps',
      ],
      description:
        'Cloud computing fundamentals, web app deployment, database services, and basic cloud architecture.',
      certificate: undefined,
    },
    {
      name: 'Jakarta EE',
      level: 'intermediate',
      experience: '6 months enterprise Java',
      projects: [
        'Enterprise applications',
        'Web services',
        'Java web development',
      ],
      description:
        'Enterprise Java development, web services, application servers, and enterprise patterns.',
      certificate: undefined,
    },
    {
      name: 'Spring Framework',
      level: 'intermediate',
      experience: '8 months Java framework',
      projects: [
        'Spring Boot applications',
        'RESTful services',
        'Dependency injection',
      ],
      description:
        'Dependency injection, Spring Boot, RESTful web services, and Java enterprise development.',
      certificate: undefined,
    },
  ],
  tools: [
    {
      name: 'Git',
      level: 'advanced',
      experience: '2 years version control',
      projects: [
        'All development projects',
        'Team collaboration',
        'Code versioning',
      ],
      description:
        'Version control, branching strategies, collaboration workflows, and distributed development.',
      certificate: undefined,
    },
    {
      name: 'Python',
      level: 'intermediate',
      experience: '1 year scripting and automation',
      projects: [
        'Data analysis scripts',
        'Automation tools',
        'Machine learning basics',
      ],
      description:
        'Scripting, data analysis, basic machine learning with libraries like pandas and numpy.',
      certificate: 'Machine Learning and Deep Learning Projects Certificate',
    },
    {
      name: 'XML/JSON',
      level: 'intermediate',
      experience: '2 years data formats and APIs',
      projects: ['API integration', 'Data exchange', 'Configuration files'],
      description:
        'Data serialization, API communication, configuration management, and data exchange formats.',
      certificate: undefined,
    },
    {
      name: 'Multi-threaded Programming',
      level: 'intermediate',
      experience: '1 year concurrent programming',
      projects: [
        'Performance optimization',
        'Concurrent applications',
        'Thread-safe code',
      ],
      description:
        'Concurrent programming, thread safety, performance optimization, and parallel processing concepts.',
      certificate: undefined,
    },
  ],
};

// Legacy export for backward compatibility
const skills = {
  frontend: skillsData.frontend.map(skill => skill.name),
  backend: skillsData.backend.map(skill => skill.name),
  database: skillsData.database.map(skill => skill.name),
  mobile: skillsData.mobile.map(skill => skill.name),
  cloud: skillsData.cloud.map(skill => skill.name),
  tools: skillsData.tools.map(skill => skill.name),
};

export { skillsData };
export default skills;
