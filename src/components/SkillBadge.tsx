'use client';

import { motion } from 'framer-motion';
import { SkillDetail } from '../data/skills';

interface SkillBadgeProps {
  name: string;
  level: string;
  color: string;
  skillDetail?: SkillDetail;
  onClick?: () => void;
}

export default function SkillBadge({
  name,
  level,
  color,
  onClick,
}: SkillBadgeProps) {
  return (
    <motion.div
      className="bg-card p-4 rounded-lg shadow-sm border border-border hover:shadow-md transition-all cursor-pointer group"
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      <div
        className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${color} group-hover:shadow-sm transition-shadow`}
      >
        {name}
      </div>
      <div className="text-sm text-muted-foreground flex items-center justify-between">
        <span>{level}</span>
        {onClick && (
          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <svg
              className="w-4 h-4 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
