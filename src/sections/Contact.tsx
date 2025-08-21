'use client';

import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import EmailJSStatus from '../components/EmailJSStatus';
import { useTranslation } from '../hooks/useTranslation';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-16 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('contactTitle')}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <EmailJSStatus />
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
