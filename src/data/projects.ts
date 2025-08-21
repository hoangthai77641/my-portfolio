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
    title: 'E-commerce Website with Laravel',
    description:
      'A full-stack e-commerce application built with Laravel backend and responsive frontend. Features user authentication, product management, shopping cart, and payment integration.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl:
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjZjFmNWY5Ii8+CjxyZWN0IHg9IjE3NSIgeT0iMTA1IiB3aWR0aD0iNTAiIGhlaWdodD0iNDAiIGZpbGw9IiM2MzY2ZjEiLz4KPHN2Zz4K',
  },
  {
    title: 'Flutter Mobile Application',
    description:
      'Cross-platform mobile application built with Flutter and Dart. Features responsive design, API integration, local storage, and smooth animations.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl:
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjZWZmNmZmIi8+CjxyZWN0IHg9IjE3NSIgeT0iMTA1IiB3aWR0aD0iNTAiIGhlaWdodD0iNDAiIGZpbGw9IiNlYzQ4OTkiLz4KPHN2Zz4K',
  },
  {
    title: 'React Dashboard with Node.js Backend',
    description:
      'Modern web dashboard built with ReactJS frontend and Node.js backend. Features real-time data visualization, user management, and analytics.',
    technologies: ['ReactJS', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl:
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjZjBmOWZmIi8+CjxyZWN0IHg9IjE3NSIgeT0iMTA1IiB3aWR0aD0iNTAiIGhlaWdodD0iNDAiIGZpbGw9IiMwZjE3MmEiLz4KPHN2Zz4K',
  },
];

export default projects;
