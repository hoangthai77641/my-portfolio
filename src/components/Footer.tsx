'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import AdminPanel from './AdminPanel';

export default function Footer() {
  const { t } = useTranslation();
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount === 4) {
      // 5 clicks total to open admin
      setIsAdminOpen(true);
      setClickCount(0);
    }
    // Reset count after 3 seconds
    setTimeout(() => setClickCount(0), 3000);
  };

  return (
    <motion.footer
      className="bg-card border-t border-border py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="mb-4 text-muted-foreground">
            &copy; 2024
            <span
              onClick={handleLogoClick}
              className="cursor-pointer hover:text-blue-500 transition-colors ml-1"
              title={`Click ${5 - clickCount} more times for admin`}
            >
              Nguyen Hoang Thai
            </span>
            . {t('allRightsReserved')}
          </p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/hoangthai77641"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="mailto:your-email@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Email
            </motion.a>
          </div>
        </div>
      </div>

      {/* Admin Panel */}
      <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </motion.footer>
  );
}
