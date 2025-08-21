'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

export default function Footer() {
  const { t } = useTranslation();

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
            &copy; 2024 Your Name. {t('allRightsReserved')}
          </p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Email
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
