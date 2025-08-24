'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { SkillDetail } from '../data/skills';

interface SkillModalProps {
  skill: SkillDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SkillModal({
  skill,
  isOpen,
  onClose,
}: SkillModalProps) {
  const { t } = useTranslation();

  if (!skill) return null;

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'advanced':
        return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20';
      case 'intermediate':
        return 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20';
      case 'beginner':
        return 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20';
      default:
        return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'advanced':
        return t('advanced');
      case 'intermediate':
        return t('intermediate');
      case 'beginner':
        return t('beginner');
      default:
        return level;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {skill.name}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(skill.level)}`}
                  >
                    {getLevelText(skill.level)}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {t('skillDescription')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {t('experience')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {skill.experience}
                </p>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {t('projectsUsed')}
                </h3>
                <div className="grid gap-2">
                  {skill.projects.map((project, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {project}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificate */}
              {skill.certificate && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t('certificate')}
                  </h3>
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-6 h-6 text-green-600 dark:text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-green-800 dark:text-green-200 font-medium">
                        {skill.certificate}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  {t('close')}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
