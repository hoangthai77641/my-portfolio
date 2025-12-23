// Auto-generated from synced GitHub data
// Last updated: 2025-12-23T00:36:14.512Z
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
      repositories: ['ThoHCM', 'my-portfolio'],
    },
    {
      name: 'CSS3',
      level: 'intermediate',
      count: 2,
      repositories: ['ThoHCM', 'my-portfolio'],
    },
    {
      name: 'HTML5',
      level: 'beginner',
      count: 1,
      repositories: ['ThoHCM'],
    },
    {
      name: 'TypeScript',
      level: 'beginner',
      count: 1,
      repositories: ['my-portfolio'],
    },
  ],
  backend: [
    {
      name: 'Kotlin',
      level: 'beginner',
      count: 1,
      repositories: ['ThoHCM'],
    },
  ],
  database: [],
  mobile: [
    {
      name: 'Dart & Flutter',
      level: 'beginner',
      count: 1,
      repositories: ['ThoHCM'],
    },
  ],
  cloud: [],
  tools: [
    {
      name: 'Docker',
      level: 'intermediate',
      count: 2,
      repositories: ['ThoHCM', 'my-portfolio'],
    },
    {
      name: 'Shell Scripting',
      level: 'beginner',
      count: 1,
      repositories: ['ThoHCM'],
    },
  ],
};

// Simple skill names for backward compatibility
const syncedSkills = {
  frontend: ['JavaScript', 'CSS3', 'HTML5', 'TypeScript'],
  backend: ['Kotlin'],
  database: [],
  mobile: ['Dart & Flutter'],
  cloud: [],
  tools: ['Docker', 'Shell Scripting'],
};

export { syncedSkillsData };
export default syncedSkills;
