import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../i18n/translations';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const languages: Language[] = ['KA', 'EN', 'RU'];

  return (
    <div className="flex items-center gap-1 bg-white/5 dark:bg-black/30 border border-white/10 rounded-full px-2 py-1 backdrop-blur-md">
      <Globe className="w-3.5 h-3.5 text-gold-400 ml-1" />
      <div className="flex items-center">
        {languages.map((lang, index) => (
          <React.Fragment key={lang}>
            <button
              onClick={() => setLanguage(lang)}
              className={`text-xs font-semibold px-2 py-0.5 rounded-full transition-all duration-300 ${
                language === lang
                  ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-black shadow-sm scale-105'
                  : 'text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white'
              }`}
            >
              {lang}
            </button>
            {index < languages.length - 1 && (
              <span className="text-white/20 text-xs select-none">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
