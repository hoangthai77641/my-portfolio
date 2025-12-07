'use client';

import { motion } from 'framer-motion';
import { Project } from '../data/projects';
import Image from 'next/image';

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
  websiteUrl,
}: Project) {
  return (
    <motion.div
      className="rounded-2xl shadow-lg overflow-hidden bg-card border border-border hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48 w-full bg-muted">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain p-4 bg-black" // Dark background for logo contrast
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 text-card-foreground">{title}</h3>
        <a href={websiteUrl} className="text-sm text-muted-foreground mb-3">
          {websiteUrl}
        </a>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 my-2">
          {technologies.map(tech => (
            <span
              key={tech}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 text-sm mt-3">
          {githubUrl && githubUrl !== '#' && (
            <motion.a
              href={githubUrl}
              className="text-primary hover:text-primary/80 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
            >
              GitHub
            </motion.a>
          )}
          {liveUrl && liveUrl !== '#' && (
            <motion.a
              href={liveUrl}
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
            >
              Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
