'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useTranslation } from '../hooks/useTranslation';

export default function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Kiểm tra environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        'EmailJS chưa được cấu hình. Vui lòng kiểm tra file .env.local'
      );
      setStatus('error');
      return;
    }

    try {
      const res = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        publicKey
      );

      if (res.status === 200) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-card shadow-lg rounded-2xl p-6 flex flex-col gap-4 border border-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-card-foreground">
        {t('contactFormTitle')}
      </h3>

      <motion.input
        type="text"
        name="name"
        placeholder={t('nameLabel')}
        value={form.name}
        onChange={handleChange}
        required
        className="border border-border rounded-lg p-3 bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        whileFocus={{ scale: 1.02 }}
      />

      <motion.input
        type="email"
        name="email"
        placeholder={t('emailLabel')}
        value={form.email}
        onChange={handleChange}
        required
        className="border border-border rounded-lg p-3 bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        whileFocus={{ scale: 1.02 }}
      />

      <motion.textarea
        name="message"
        placeholder={t('messageLabel')}
        rows={5}
        value={form.message}
        onChange={handleChange}
        required
        className="border border-border rounded-lg p-3 bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
        whileFocus={{ scale: 1.02 }}
      />

      <motion.button
        type="submit"
        disabled={status === 'sending'}
        className="bg-primary text-primary-foreground rounded-lg py-3 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
        whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
      >
        {status === 'sending' ? t('sendingButton') : t('sendButton')}
      </motion.button>

      {status === 'success' && (
        <motion.p
          className="text-green-600 dark:text-green-400 text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t('successMessage')}
        </motion.p>
      )}
      {status === 'error' && (
        <motion.p
          className="text-red-600 dark:text-red-400 text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t('errorMessage')}
        </motion.p>
      )}
    </motion.form>
  );
}
