
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/contexts/LanguageContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="relative p-2 border-2 border-foreground bg-background hover:bg-foreground hover:text-background transition-colors"
      aria-label={t('theme.toggle')}
      aria-pressed={theme === 'dark'}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute inset-2 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
};

export default ThemeToggle;
