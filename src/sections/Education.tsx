'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import education from '../data/education';

export default function Education() {
  const { t } = useTranslation();

  const getEducationIcon = (type: string) => {
    switch (type) {
      case 'primary':
        return '🎓';
      case 'certificate':
        return '📜';
      case 'competition':
        return '🏆';
      default:
        return '📚';
    }
  };

  const getBorderColor = (type: string) => {
    switch (type) {
      case 'primary':
        return 'border-primary';
      case 'certificate':
        return 'border-green-500';
      case 'competition':
        return 'border-yellow-500';
      default:
        return 'border-primary';
    }
  };

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="education" className="py-10 bg-muted scroll-mt">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('educationTitle')}
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className={`bg-card p-6 rounded-lg shadow-sm border-l-4 ${getBorderColor(edu.type)} hover:shadow-md transition-shadow`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{getEducationIcon(edu.type)}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-primary mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3 font-medium">
                      {edu.period}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {edu.description}
                    </p>
                    {edu.certificateUrl && (
                      <motion.a
                        href={edu.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        📄 {t('viewCertificate')}
                        <svg
                          className="w-3 h-3 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
