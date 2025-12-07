#!/usr/bin/env node

/**
 * Transform Synced Data Script
 *
 * This script transforms the synced GitHub data (JSON) into TypeScript format
 * that can be used by the frontend components.
 *
 * Usage:
 *   node scripts/transform-to-typescript.js
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const SRC_DATA_DIR = path.join(__dirname, '..', 'src', 'data');

const PROJECTS_JSON = path.join(DATA_DIR, 'projects.json');
const ORGS_JSON = path.join(DATA_DIR, 'organizations.json');
const SKILLS_JSON = path.join(DATA_DIR, 'skills.json');

const PROJECTS_TS = path.join(SRC_DATA_DIR, 'synced-projects.ts');
const SKILLS_TS = path.join(SRC_DATA_DIR, 'synced-skills.ts');

// Configuration
const DEFAULT_PROJECT_IMAGE =
  process.env.DEFAULT_PROJECT_IMAGE || '/images/logo4.png';

/**
 * Read JSON file
 */
function readJson(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
  }
  return null;
}

/**
 * Convert languages object to technologies array
 */
function extractTechnologies(repo) {
  const techs = [];

  // Add primary language
  if (repo.language && repo.language !== 'Unknown') {
    techs.push(repo.language);
  }

  // Add topics
  if (repo.topics && repo.topics.length > 0) {
    techs.push(...repo.topics.map(t => t.charAt(0).toUpperCase() + t.slice(1)));
  }

  // Add other languages
  if (repo.languages) {
    Object.keys(repo.languages).forEach(lang => {
      if (lang !== repo.language && lang !== 'Unknown') {
        techs.push(lang);
      }
    });
  }

  return [...new Set(techs)]; // Remove duplicates
}

/**
 * Transform repository to Project format
 */
function transformRepo(repo, source = 'personal') {
  const description =
    repo.description || `A ${repo.language || 'software'} project`;
  const technologies = extractTechnologies(repo);

  // Add source indicator to title
  let title = repo.name.replace(/-/g, ' ').replace(/_/g, ' ');
  title = title
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  if (source !== 'personal') {
    title = `${title} (${source})`;
  }

  return {
    title: title,
    description: description,
    technologies: technologies,
    githubUrl: repo.url || repo.html_url || '#',
    liveUrl: repo.homepage || '#',
    imageUrl: DEFAULT_PROJECT_IMAGE,
    stars: repo.stars || 0,
    updatedAt: repo.updatedAt || repo.updated_at,
  };
}

/**
 * Generate TypeScript projects file
 */
function generateProjectsTS(projects, organizations) {
  const allProjects = [];

  // Add personal projects
  if (projects && Array.isArray(projects)) {
    projects.forEach(repo => {
      allProjects.push(transformRepo(repo, 'personal'));
    });
  }

  // Add organization projects
  if (organizations && Array.isArray(organizations)) {
    organizations.forEach(org => {
      if (org.repositories && Array.isArray(org.repositories)) {
        org.repositories.forEach(repo => {
          allProjects.push(transformRepo(repo, org.name));
        });
      }
    });
  }

  // Sort by stars and update date
  allProjects.sort((a, b) => {
    if (b.stars !== a.stars) {
      return b.stars - a.stars;
    }
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  });

  // Generate TypeScript content
  let tsContent = `// Auto-generated from synced GitHub data
// Last updated: ${new Date().toISOString()}
// DO NOT EDIT MANUALLY - This file is auto-generated

export interface SyncedProject {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  stars: number;
  updatedAt: string;
}

const syncedProjects: SyncedProject[] = [\n`;

  allProjects.forEach((project, index) => {
    tsContent += `  {\n`;
    tsContent += `    title: ${JSON.stringify(project.title)},\n`;
    tsContent += `    description: ${JSON.stringify(project.description)},\n`;
    tsContent += `    technologies: ${JSON.stringify(project.technologies)},\n`;
    tsContent += `    githubUrl: ${JSON.stringify(project.githubUrl)},\n`;
    tsContent += `    liveUrl: ${JSON.stringify(project.liveUrl)},\n`;
    tsContent += `    imageUrl: ${JSON.stringify(project.imageUrl)},\n`;
    tsContent += `    stars: ${project.stars},\n`;
    tsContent += `    updatedAt: ${JSON.stringify(project.updatedAt)},\n`;
    tsContent += `  }${index < allProjects.length - 1 ? ',' : ''}\n`;
  });

  tsContent += `];\n\nexport default syncedProjects;\n`;

  return tsContent;
}

/**
 * Map skill level to display format
 */
function mapSkillLevel(level) {
  const levelMap = {
    advanced: 'advanced',
    intermediate: 'intermediate',
    beginner: 'beginner',
  };
  return levelMap[level] || 'intermediate';
}

/**
 * Generate TypeScript skills file
 */
function generateSkillsTS(skillsData) {
  if (!skillsData || !skillsData.skills) {
    return null;
  }

  const skills = skillsData.skills;

  let tsContent = `// Auto-generated from synced GitHub data
// Last updated: ${new Date().toISOString()}
// Generated from ${skillsData.totalRepositories} repositories
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

const syncedSkillsData: SyncedSkillCategory = {\n`;

  // Generate each category
  ['frontend', 'backend', 'database', 'mobile', 'cloud', 'tools'].forEach(
    category => {
      const categorySkills = skills[category] || [];
      tsContent += `  ${category}: [\n`;

      categorySkills.forEach((skill, index) => {
        tsContent += `    {\n`;
        tsContent += `      name: ${JSON.stringify(skill.name)},\n`;
        tsContent += `      level: ${JSON.stringify(mapSkillLevel(skill.level))},\n`;
        tsContent += `      count: ${skill.count},\n`;
        tsContent += `      repositories: ${JSON.stringify(skill.repositories)},\n`;
        tsContent += `    }${index < categorySkills.length - 1 ? ',' : ''}\n`;
      });

      tsContent += `  ],\n`;
    }
  );

  tsContent += `};\n\n`;

  // Generate simple skill names export for backward compatibility
  tsContent += `// Simple skill names for backward compatibility\n`;
  tsContent += `const syncedSkills = {\n`;

  ['frontend', 'backend', 'database', 'mobile', 'cloud', 'tools'].forEach(
    category => {
      const categorySkills = skills[category] || [];
      const names = categorySkills.map(s => s.name);
      tsContent += `  ${category}: ${JSON.stringify(names)},\n`;
    }
  );

  tsContent += `};\n\n`;
  tsContent += `export { syncedSkillsData };\n`;
  tsContent += `export default syncedSkills;\n`;

  return tsContent;
}

/**
 * Main function
 */
function main() {
  console.log('='.repeat(50));
  console.log('Transform Synced Data to TypeScript');
  console.log('='.repeat(50));

  // Read JSON files
  const projects = readJson(PROJECTS_JSON);
  const organizations = readJson(ORGS_JSON);
  const skillsData = readJson(SKILLS_JSON);

  if (!projects && !organizations && !skillsData) {
    console.error('❌ No synced data found. Run sync scripts first.');
    process.exit(1);
  }

  let filesGenerated = 0;

  // Generate projects TypeScript file
  if (projects || organizations) {
    const projectsTS = generateProjectsTS(projects || [], organizations || []);
    fs.writeFileSync(PROJECTS_TS, projectsTS);
    console.log(`✓ Generated ${PROJECTS_TS}`);

    const totalProjects =
      (projects?.length || 0) +
      (organizations?.reduce(
        (sum, org) => sum + (org.repositories?.length || 0),
        0
      ) || 0);
    console.log(`  - ${totalProjects} projects included`);
    filesGenerated++;
  }

  // Generate skills TypeScript file
  if (skillsData) {
    const skillsTS = generateSkillsTS(skillsData);
    if (skillsTS) {
      fs.writeFileSync(SKILLS_TS, skillsTS);
      console.log(`✓ Generated ${SKILLS_TS}`);

      const totalSkills = Object.values(skillsData.skills).reduce(
        (sum, cat) => sum + cat.length,
        0
      );
      console.log(
        `  - ${totalSkills} skills from ${skillsData.totalRepositories} repositories`
      );
      filesGenerated++;
    }
  }

  if (filesGenerated === 0) {
    console.warn('⚠ No TypeScript files generated');
  } else {
    console.log('\n' + '='.repeat(50));
    console.log(
      `✓ Successfully generated ${filesGenerated} TypeScript file(s)`
    );
    console.log('='.repeat(50));
    console.log('\nNext steps:');
    console.log('1. Review the generated files');
    console.log('2. Import them in your components:');
    console.log('   import syncedProjects from "@/data/synced-projects";');
    console.log('   import { syncedSkillsData } from "@/data/synced-skills";');
    console.log('3. Use them alongside or instead of manually maintained data');
  }
}

// Run the script
main();
