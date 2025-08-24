import { useApp } from '../contexts/AppContext';
import { translations } from '../data/translations';

export function useTranslation() {
  const { language } = useApp();

  const t = (key: keyof typeof translations.en): string => {
    const currentTranslations =
      (translations as any)[language] || translations.en;
    return currentTranslations[key] || translations.en[key] || key;
  };

  return { t, language };
}
