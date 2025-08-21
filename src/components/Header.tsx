'use client';

import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';
import { useTranslation } from '../hooks/useTranslation';

export default function Header() {
  const { theme, language, toggleTheme, toggleLanguage } = useApp();
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className="sticky top-0 bg-background/80 backdrop-blur-md shadow border-b border-border z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto flex justify-between items-center p-4">
        <motion.span
          className="font-bold text-xl text-foreground"
          whileHover={{ scale: 1.05 }}
        >
          Portfolio
        </motion.span>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            <li>
              <button
                onClick={() => scrollToSection('hero')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('home')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('about')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('skills')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('projects')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('education')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('education')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('contact')}
              </button>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="px-2 py-1 text-sm bg-secondary text-secondary-foreground rounded hover:bg-accent transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language.toUpperCase()}
            </motion.button>

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 bg-secondary text-secondary-foreground rounded hover:bg-accent transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </motion.button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
