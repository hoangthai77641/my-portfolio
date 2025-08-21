'use client';

import { useTranslation } from '../hooks/useTranslation';

export default function EmailJSStatus() {
  const { t } = useTranslation();

  const isConfigured = !!(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  );

  if (isConfigured) {
    return null; // Không hiển thị gì nếu đã cấu hình
  }

  return (
    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
      <div className="flex">
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
            {t('emailjsNotConfigured')}
          </h3>
          <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
            <p>{t('emailjsInstructions')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
