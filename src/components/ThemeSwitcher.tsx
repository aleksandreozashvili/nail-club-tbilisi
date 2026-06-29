import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="p-2 rounded-full bg-white/5 dark:bg-black/30 border border-white/10 text-gold-400 hover:text-gold-300 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110 active:scale-95"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 animate-spin-slow" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  );
};
