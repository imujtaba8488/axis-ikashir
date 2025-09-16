import { cn } from '@/lib/utils';
import { Footer } from './footer';
import { Header } from './header';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Main layout component that wraps all pages
 * Provides consistent header and footer across the application
 *
 * @param children - Page content to render
 * @param className - Additional CSS classes
 */
export function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={cn('flex-1', className)}>{children}</main>
      <Footer />
    </div>
  );
}
