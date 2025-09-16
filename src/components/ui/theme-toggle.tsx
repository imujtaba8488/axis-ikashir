'use client';

import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/theme-context';
import { cn } from '@/lib/utils';
import { Monitor, Moon, Sun } from 'lucide-react';

/**
 * Theme toggle component
 * Provides a button to switch between light, dark, and system themes
 */
export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme, mounted } = useTheme();

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="h-9 w-9 p-0" disabled>
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    if (theme === 'system') {
      return <Monitor className="h-4 w-4" />;
    }
    return resolvedTheme === 'dark' ? (
      <Moon className="h-4 w-4" />
    ) : (
      <Sun className="h-4 w-4" />
    );
  };

  const getTooltip = () => {
    if (theme === 'light') return 'Switch to dark mode';
    if (theme === 'dark') return 'Switch to system theme';
    return 'Switch to light mode';
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={cycleTheme}
      className={cn(
        'relative h-9 w-9 p-0 transition-all duration-200',
        'hover:bg-accent hover:text-accent-foreground',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
      )}
      title={getTooltip()}
      aria-label={getTooltip()}
    >
      <div className="relative">
        {/* Current icon */}
        <div
          className={cn(
            'transition-all duration-300 ease-in-out',
            'transform-gpu'
          )}
        >
          {getIcon()}
        </div>

        {/* Theme indicator */}
        <div
          className={cn(
            'absolute -top-1 -right-1 h-2 w-2 rounded-full transition-colors duration-200',
            theme === 'system' && 'bg-blue-500',
            theme === 'light' && 'bg-yellow-500',
            theme === 'dark' && 'bg-purple-500'
          )}
        />
      </div>
    </Button>
  );
}

/**
 * Theme toggle with label
 * Alternative version that shows the current theme name
 */
export function ThemeToggleWithLabel() {
  const { theme, setTheme, resolvedTheme, mounted } = useTheme();

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="flex items-center gap-2 px-3 py-2 h-9"
        disabled
      >
        <Sun className="h-4 w-4" />
        <span className="text-sm font-medium">Light</span>
      </Button>
    );
  }

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    if (theme === 'system') {
      return <Monitor className="h-4 w-4" />;
    }
    return resolvedTheme === 'dark' ? (
      <Moon className="h-4 w-4" />
    ) : (
      <Sun className="h-4 w-4" />
    );
  };

  const getLabel = () => {
    if (theme === 'system') return 'System';
    return theme === 'light' ? 'Light' : 'Dark';
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={cycleTheme}
      className="flex items-center gap-2 px-3 py-2 h-9"
      title={`Current: ${getLabel()} mode`}
    >
      {getIcon()}
      <span className="text-sm font-medium">{getLabel()}</span>
    </Button>
  );
}
