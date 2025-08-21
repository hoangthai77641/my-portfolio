'use client';

import { motion } from 'framer-motion';
import SkillBadge from '../components/SkillBadge';
import { useTranslation } from '../hooks/useTranslation';
import skillsData from '../data/skills';

export default function Skills() {
  const { t } = useTranslation();

  // Tạo skill items từ data với levels và colors
  const skillItems = [
    // Frontend
    ...skillsData.frontend.map(skill => ({
      name: skill,
      level:
        skill === 'ReactJS' || skill === 'JavaScript'
          ? t('advanced')
          : t('intermediate'),
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    })),
    // Backend
    ...skillsData.backend.map(skill => ({
      name: skill,
      level: skill === 'PHP & Laravel' ? t('advanced') : t('intermediate'),
      color:
        'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    })),
    // Database
    ...skillsData.database.map(skill => ({
      name: skill,
      level: t('intermediate'),
      color:
        'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
    })),
    // Mobile
    ...skillsData.mobile.map(skill => ({
      name: skill,
      level: t('intermediate'),
      color: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200',
    })),
    // Cloud
    ...skillsData.cloud.map(skill => ({
      name: skill,
      level: t('intermediate'),
      color:
        'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
    })),
    // Tools
    ...skillsData.tools.map(skill => ({
      name: skill,
      level: skill === 'Git' ? t('advanced') : t('intermediate'),
      color: 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200',
    })),
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-muted scroll-mt">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('skillsTitle')}
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {skillItems.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <SkillBadge
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
