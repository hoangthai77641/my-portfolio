'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

export default function Hero() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <motion.div
        className="container mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-foreground mb-4"
          variants={itemVariants}
        >
          {t('heroTitle')} <span className="text-primary">{t('heroName')}</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8"
          variants={itemVariants}
        >
          {t('heroSubtitle')}
        </motion.p>

        <motion.p
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {t('heroDescription')}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('getInTouch')}
          </motion.a>
          <motion.a
            href="#projects"
            className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('viewMyWork')}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
