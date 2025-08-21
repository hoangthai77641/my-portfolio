'use client';

import { motion } from 'framer-motion';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { useTranslation } from '../hooks/useTranslation';

export default function Projects() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-background scroll-mt">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('projectsTitle')}
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {projects.map((p, index) => (
            <motion.div key={p.title} variants={itemVariants}>
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
