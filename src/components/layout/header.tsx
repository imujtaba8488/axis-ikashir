'use client';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface HeaderProps {
  className?: string;
}

/**
 * Header component for the application
 * Provides navigation and branding for the site
 *
 * @param className - Additional CSS classes
 */
export function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black',
        className
      )}
    >
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-gray-900 dark:text-white">
              Axis Ikashir
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/dashboard"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300"
            >
              Dashboard
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300"
            >
              Contact
            </Link>
            <Link
              href="/design-system"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300 flex items-center gap-1"
              title="Design System - Component showcase and documentation"
            >
              <span>🎨</span>
              <span>Design System</span>
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search can be added here */}
          </div>
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/auth/register">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
