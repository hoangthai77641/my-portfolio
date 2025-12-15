// Auto-generated from synced GitHub data
// Last updated: 2025-12-15T00:38:28.866Z
// Generated from 4 repositories
// DO NOT EDIT MANUALLY - This file is auto-generated

export interface SyncedSkillDetail {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  count: number;
  repositories: string[];
}

export interface SyncedSkillCategory {
  [key: string]: SyncedSkillDetail[];
}

const syncedSkillsData: SyncedSkillCategory = {
  frontend: [
    {
      name: 'JavaScript',
      level: 'intermediate',
      count: 2,
      repositories: ['my-portfolio', 'ThoHCM-Personal-Project'],
    },
    {
      name: 'CSS3',
      level: 'intermediate',
      count: 2,
      repositories: ['my-portfolio', 'ThoHCM-Personal-Project'],
    },
    {
      name: 'TypeScript',
      level: 'beginner',
      count: 1,
      repositories: ['my-portfolio'],
    },
    {
      name: 'HTML5',
      level: 'beginner',
      count: 1,
      repositories: ['ThoHCM-Personal-Project'],
    },
  ],
  backend: [
    {
      name: 'Kotlin',
      level: 'beginner',
      count: 1,
      repositories: ['ThoHCM-Personal-Project'],
    },
  ],
  database: [],
  mobile: [
    {
      name: 'Dart & Flutter',
      level: 'beginner',
      count: 1,
      repositories: ['ThoHCM-Personal-Project'],
    },
  ],
  cloud: [],
  tools: [
    {
      name: 'Docker',
      level: 'intermediate',
      count: 2,
      repositories: ['my-portfolio', 'ThoHCM-Personal-Project'],
    },
    {
      name: 'Shell Scripting',
      level: 'beginner',
      count: 1,
      repositories: ['ThoHCM-Personal-Project'],
    },
  ],
};

// Simple skill names for backward compatibility
const syncedSkills = {
  frontend: ['JavaScript', 'CSS3', 'TypeScript', 'HTML5'],
  backend: ['Kotlin'],
  database: [],
  mobile: ['Dart & Flutter'],
  cloud: [],
  tools: ['Docker', 'Shell Scripting'],
};

export { syncedSkillsData };
export default syncedSkills;
