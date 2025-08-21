import { useApp } from '../contexts/AppContext';
import { translations } from '../data/translations';

export function useTranslation() {
  const { language } = useApp();

  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || key;
  };

  return { t, language };
}
