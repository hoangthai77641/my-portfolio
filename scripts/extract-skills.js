#!/usr/bin/env node

/**
 * Extract Skills Script
 *
 * This script analyzes repository languages from projects.json and organizations.json
 * to generate a skills.json file with categorized skill levels.
 *
 * Skill levels are determined by usage frequency:
 * - Advanced: Used in 3+ repositories
 * - Intermediate: Used in 1-2 repositories
 *
 * Usage:
 *   node scripts/extract-skills.js
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const PROJECTS_FILE = path.join(DATA_DIR, 'projects.json');
const ORGS_FILE = path.join(DATA_DIR, 'organizations.json');
const SKILLS_FILE = path.join(DATA_DIR, 'skills.json');

// Language to skill category mapping
const LANGUAGE_CATEGORIES = {
  // Frontend
  JavaScript: { category: 'frontend', name: 'JavaScript' },
  TypeScript: { category: 'frontend', name: 'TypeScript' },
  HTML: { category: 'frontend', name: 'HTML5' },
  CSS: { category: 'frontend', name: 'CSS3' },
  Vue: { category: 'frontend', name: 'Vue.js' },
  Svelte: { category: 'frontend', name: 'Svelte' },

  // Backend
  Java: { category: 'backend', name: 'Java' },
  Python: { category: 'backend', name: 'Python' },
  PHP: { category: 'backend', name: 'PHP' },
  'C#': { category: 'backend', name: 'C#' },
  Ruby: { category: 'backend', name: 'Ruby' },
  Go: { category: 'backend', name: 'Go' },
  Rust: { category: 'backend', name: 'Rust' },
  Kotlin: { category: 'backend', name: 'Kotlin' },
  'C++': { category: 'backend', name: 'C++' },
  C: { category: 'backend', name: 'C' },

  // Mobile
  Swift: { category: 'mobile', name: 'Swift' },
  Dart: { category: 'mobile', name: 'Dart & Flutter' },

  // Database & Data
  SQL: { category: 'database', name: 'SQL' },
  PLpgSQL: { category: 'database', name: 'PostgreSQL' },

  // DevOps & Tools
  Shell: { category: 'tools', name: 'Shell Scripting' },
  Dockerfile: { category: 'tools', name: 'Docker' },
  HCL: { category: 'cloud', name: 'Terraform' },
  Makefile: { category: 'tools', name: 'Make' },
};

/**
 * Read and parse JSON file
 */
function readJsonFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
  }
  return null;
}

/**
 * Extract languages from repositories
 */
function extractLanguages(repositories) {
  const languageCounts = {};
  const languageRepos = {};

  repositories.forEach(repo => {
    // Count primary language
    if (repo.language && repo.language !== 'Unknown') {
      languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;

      if (!languageRepos[repo.language]) {
        languageRepos[repo.language] = [];
      }
      languageRepos[repo.language].push(repo.name);
    }

    // Count detailed languages if available
    if (repo.languages && typeof repo.languages === 'object') {
      Object.keys(repo.languages).forEach(lang => {
        if (lang !== 'Unknown') {
          // Don't double count if already counted as primary language
          if (lang !== repo.language) {
            languageCounts[lang] = (languageCounts[lang] || 0) + 1;

            if (!languageRepos[lang]) {
              languageRepos[lang] = [];
            }
            if (!languageRepos[lang].includes(repo.name)) {
              languageRepos[lang].push(repo.name);
            }
          }
        }
      });
    }
  });

  return { languageCounts, languageRepos };
}

/**
 * Determine skill level based on usage count
 */
function getSkillLevel(count) {
  if (count >= 3) return 'advanced';
  return 'intermediate';
}

/**
 * Generate skills data
 */
function generateSkills(languageCounts, languageRepos) {
  const skills = {
    frontend: [],
    backend: [],
    database: [],
    mobile: [],
    cloud: [],
    tools: [],
  };

  // Process each language
  Object.entries(languageCounts).forEach(([language, count]) => {
    const mapping = LANGUAGE_CATEGORIES[language];

    if (mapping) {
      const category = mapping.category;
      const skillName = mapping.name;
      const level = getSkillLevel(count);
      const repos = languageRepos[language] || [];

      // Check if skill already exists in category
      const existingSkill = skills[category].find(s => s.name === skillName);

      if (!existingSkill) {
        skills[category].push({
          name: skillName,
          level: level,
          count: count,
          repositories: repos,
        });
      } else {
        // Update existing skill
        existingSkill.count += count;
        existingSkill.repositories = [
          ...new Set([...existingSkill.repositories, ...repos]),
        ];
        existingSkill.level = getSkillLevel(existingSkill.count);
      }
    }
  });

  // Sort each category by count (descending)
  Object.keys(skills).forEach(category => {
    skills[category].sort((a, b) => b.count - a.count);
  });

  return skills;
}

/**
 * Main function
 */
function main() {
  console.log('='.repeat(50));
  console.log('Extract Skills Script');
  console.log('='.repeat(50));

  // Read projects data
  const projects = readJsonFile(PROJECTS_FILE);
  if (!projects) {
    console.error(
      '❌ Could not read projects.json. Run sync-github-data.js first.'
    );
    process.exit(1);
  }

  console.log(`✓ Loaded ${projects.length} projects`);

  // Read organizations data
  const organizations = readJsonFile(ORGS_FILE);
  const orgRepos = [];

  if (organizations && Array.isArray(organizations)) {
    organizations.forEach(org => {
      if (org.repositories && Array.isArray(org.repositories)) {
        orgRepos.push(...org.repositories);
      }
    });
    console.log(
      `✓ Loaded ${organizations.length} organizations with ${orgRepos.length} repositories`
    );
  }

  // Combine all repositories
  const allRepos = [...projects, ...orgRepos];
  console.log(`\nAnalyzing ${allRepos.length} total repositories...`);

  // Extract languages
  const { languageCounts, languageRepos } = extractLanguages(allRepos);

  console.log(
    `\n✓ Found ${Object.keys(languageCounts).length} unique languages:`
  );
  Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([lang, count]) => {
      console.log(`  - ${lang}: ${count} repositories`);
    });

  // Generate skills
  const skills = generateSkills(languageCounts, languageRepos);

  // Calculate statistics
  const totalSkills = Object.values(skills).reduce(
    (sum, cat) => sum + cat.length,
    0
  );
  const advancedSkills = Object.values(skills)
    .flat()
    .filter(s => s.level === 'advanced').length;

  console.log(
    `\n✓ Generated ${totalSkills} skills (${advancedSkills} advanced, ${totalSkills - advancedSkills} intermediate)`
  );
  console.log('\nSkills breakdown:');
  Object.entries(skills).forEach(([category, categorySkills]) => {
    if (categorySkills.length > 0) {
      console.log(`  ${category}: ${categorySkills.length} skills`);
      categorySkills.forEach(skill => {
        console.log(
          `    - ${skill.name} (${skill.level}) - ${skill.count} repos`
        );
      });
    }
  });

  // Add metadata
  const output = {
    generatedAt: new Date().toISOString(),
    totalRepositories: allRepos.length,
    skills: skills,
  };

  // Save to file
  fs.writeFileSync(SKILLS_FILE, JSON.stringify(output, null, 2));
  console.log(`\n✓ Saved skills data to ${SKILLS_FILE}`);

  console.log('\n' + '='.repeat(50));
  console.log('Skills extraction completed successfully!');
  console.log('='.repeat(50));
}

// Run the script
main();
