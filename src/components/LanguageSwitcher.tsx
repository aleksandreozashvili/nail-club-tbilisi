import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../i18n/translations';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const languages: Language[] = ['KA', 'EN', 'RU'];

  return (
    <div className="flex items-center gap-0.5 sm:gap-1 bg-white/5 dark:bg-black/30 border border-white/10 rounded-full px-1.5 sm:px-2 py-1 backdrop-blur-md shrink-0">
      <Globe className="w-3.5 h-3.5 text-gold-400 ml-0.5 hidden sm:block shrink-0" />
      <div className="flex items-center">
        {languages.map((lang, index) => (
          <React.Fragment key={lang}>
            <button
              onClick={() => setLanguage(lang)}
              className={`text-[11px] sm:text-xs font-semibold px-1.5 sm:px-2 py-0.5 rounded-full transition-all duration-300 ${
                language === lang
                  ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-black shadow-sm scale-105 font-bold'
                  : 'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white'
              }`}
            >
              {lang}
            </button>
            {index < languages.length - 1 && (
              <span className="text-gray-400 dark:text-white/20 text-[10px] select-none mx-0.5">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
