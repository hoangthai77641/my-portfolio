# Using Synced GitHub Data in Your Portfolio

This guide explains how to integrate the auto-synced GitHub data into your portfolio website.

## Overview

The auto-sync system generates TypeScript files that can be imported and used in your React components:

- `src/data/synced-projects.ts` - Projects from your GitHub repositories
- `src/data/synced-skills.ts` - Skills extracted from repository languages

## Option 1: Display Synced Projects Alongside Manual Projects

Combine both manually curated projects and auto-synced GitHub repositories:

```typescript
// src/sections/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import projects from '../data/projects'; // Manual projects
import syncedProjects from '../data/synced-projects'; // Auto-synced projects
import ProjectCard from '../components/ProjectCard';
import { useTranslation } from '../hooks/useTranslation';

export default function Projects() {
  const { t } = useTranslation();

  // Combine manual and synced projects
  const allProjects = [
    ...projects, // Featured/curated projects first
    ...syncedProjects.slice(0, 6), // Top 6 synced projects
  ];

  return (
    <section id="projects" className="py-20 bg-background scroll-mt">
      <div className="container mx-auto px-4">
        <motion.h2 className="text-3xl font-bold text-center mb-16">
          {t('projectsTitle')}
        </motion.h2>

        {/* Featured Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, index) => (
              <ProjectCard key={index} {...p} />
            ))}
          </div>
        </div>

        {/* Recent GitHub Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Recent GitHub Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {syncedProjects.slice(0, 6).map((p, index) => (
              <ProjectCard key={index} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

## Option 2: Replace Manual Projects with Synced Data

Use only auto-synced GitHub data:

```typescript
// src/sections/Projects.tsx
'use client';

import syncedProjects from '../data/synced-projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background scroll-mt">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {syncedProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

## Option 3: Filter and Display by Category

Show projects by organization or technology:

```typescript
// src/sections/Projects.tsx
'use client';

import syncedProjects from '../data/synced-projects';

export default function Projects() {
  // Filter personal projects
  const personalProjects = syncedProjects.filter(p =>
    !p.title.includes('(') // No org suffix
  );

  // Filter organization projects
  const orgProjects = syncedProjects.filter(p =>
    p.title.includes('(') // Has org suffix
  );

  // Filter by technology
  const reactProjects = syncedProjects.filter(p =>
    p.technologies.some(t =>
      t.toLowerCase().includes('react') ||
      t.toLowerCase().includes('nextjs')
    )
  );

  return (
    <section>
      <h3>Personal Projects ({personalProjects.length})</h3>
      {/* Render personal projects */}

      <h3>Organization Projects ({orgProjects.length})</h3>
      {/* Render org projects */}

      <h3>React Projects ({reactProjects.length})</h3>
      {/* Render React projects */}
    </section>
  );
}
```

## Using Synced Skills

Display auto-extracted skills from your repositories:

```typescript
// src/sections/Skills.tsx
'use client';

import { syncedSkillsData } from '../data/synced-skills';
import SkillBadge from '../components/SkillBadge';

export default function Skills() {
  // Combine all skills
  const allSkills = [
    ...syncedSkillsData.frontend,
    ...syncedSkillsData.backend,
    ...syncedSkillsData.database,
    ...syncedSkillsData.mobile,
    ...syncedSkillsData.cloud,
    ...syncedSkillsData.tools,
  ];

  // Sort by usage count
  const sortedSkills = allSkills.sort((a, b) => b.count - a.count);

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sortedSkills.map((skill, index) => (
          <SkillBadge
            key={index}
            name={skill.name}
            level={skill.level}
            count={skill.count}
            repositories={skill.repositories}
          />
        ))}
      </div>

      <p className="mt-4 text-sm text-gray-600">
        Skills extracted from {sortedSkills.length} technologies
        across {new Set(allSkills.flatMap(s => s.repositories)).size} repositories
      </p>
    </section>
  );
}
```

## Displaying Skill Statistics

Show detailed skill information:

```typescript
// src/components/SkillsChart.tsx
'use client';

import { syncedSkillsData } from '../data/synced-skills';

export default function SkillsChart() {
  const categories = Object.entries(syncedSkillsData);

  return (
    <div className="space-y-6">
      {categories.map(([category, skills]) => (
        <div key={category}>
          <h3 className="text-xl font-semibold capitalize mb-3">
            {category} ({skills.length})
          </h3>

          <div className="space-y-2">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="font-medium w-32">{skill.name}</span>

                {/* Visual bar */}
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${(skill.count / 10) * 100}%` }}
                  />
                </div>

                <span className="text-sm text-gray-600 w-20">
                  {skill.count} {skill.count === 1 ? 'repo' : 'repos'}
                </span>

                <span className={`text-xs px-2 py-1 rounded ${
                  skill.level === 'advanced'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
```

## Updating ProjectCard Component

Make sure your `ProjectCard` component supports the synced data format:

```typescript
// src/components/ProjectCard.tsx
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  stars?: number; // Add optional stars field
  updatedAt?: string; // Add optional updatedAt field
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      {/* Display stars if available */}
      {props.stars && props.stars > 0 && (
        <span>⭐ {props.stars}</span>
      )}

      {/* Display last update if available */}
      {props.updatedAt && (
        <span className="text-sm text-gray-500">
          Updated: {new Date(props.updatedAt).toLocaleDateString()}
        </span>
      )}

      <div className="technologies">
        {props.technologies.map((tech, i) => (
          <span key={i} className="badge">{tech}</span>
        ))}
      </div>

      <a href={props.githubUrl}>GitHub</a>
      {props.liveUrl !== '#' && <a href={props.liveUrl}>Live Demo</a>}
    </div>
  );
}
```

## Best Practices

1. **Keep Manual Curation**: Use manual `projects.ts` for featured/important projects
2. **Use Synced Data for Scale**: Let auto-sync handle the long tail of projects
3. **Filter Intelligently**: Show most relevant projects first (by stars, date, etc.)
4. **Update Regularly**: Let GitHub Actions keep your data fresh
5. **Combine Data Sources**: Merge manual and synced data for best results

## Troubleshooting

**Q: Synced files not found?**

- Run `npm run sync:all` to generate the files
- Check that `src/data/synced-projects.ts` and `src/data/synced-skills.ts` exist

**Q: Data seems outdated?**

- Trigger GitHub Actions workflow manually
- Or run `npm run sync:all` locally and commit changes

**Q: Too many projects showing?**

- Filter or slice the synced projects array
- Use `.slice(0, N)` to limit the number displayed

**Q: Some projects missing?**

- Check they are public and not forked
- Verify they have a language/topic assigned
- Check GitHub API rate limits

## Next Steps

1. Choose an integration approach that fits your needs
2. Update your components to use synced data
3. Test locally with `npm run dev`
4. Deploy to Vercel
5. Set up automated daily syncs via GitHub Actions
