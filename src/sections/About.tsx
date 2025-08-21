'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import Image from 'next/image';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-background scroll-mt">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('aboutTitle')}
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground mb-6">
                {t('aboutText1')}
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                {t('aboutText2')}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  {t('problemSolver')}
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                  {t('teamPlayer')}
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                  {t('quickLearner')}
                </span>
              </div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-64 h-64 bg-muted rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center">
                <Image
                  src="/profile.JPG"
                  alt="Profile Picture"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
