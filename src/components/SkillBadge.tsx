'use client';

import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  level: string;
  color: string;
}

export default function SkillBadge({ name, level, color }: SkillBadgeProps) {
  return (
    <motion.div
      className="bg-card p-4 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${color}`}
      >
        {name}
      </div>
      <div className="text-sm text-muted-foreground">{level}</div>
    </motion.div>
  );
}
