import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-10 h-10 cursor-pointer rounded-full p-0 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-gray-300 hover:text-white transition-colors duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors duration-300" />
      )}
    </Button>
  );
}