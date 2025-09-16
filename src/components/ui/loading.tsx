import { cn } from '@/lib/utils';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Loading spinner component
 * Provides consistent loading indicators throughout the application
 *
 * @param size - Size of the spinner (sm, md, lg)
 * @param className - Additional CSS classes
 */
export function Loading({ size = 'md', className }: LoadingProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  };

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-gray-300 border-t-primary',
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

/**
 * Loading skeleton component for placeholder content
 * Provides consistent skeleton loading states
 *
 * @param className - Additional CSS classes
 */
export function LoadingSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gray-200 dark:bg-gray-700',
        className
      )}
    />
  );
}

/**
 * Loading overlay component
 * Shows a loading state over existing content
 *
 * @param isLoading - Whether to show the loading state
 * @param children - Content to show when not loading
 */
export function LoadingOverlay({
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: React.ReactNode;
}) {
  if (!isLoading) return <>{children}</>;

  return (
    <div className="relative">
      <div className="pointer-events-none opacity-50">{children}</div>
      <div className="absolute inset-0 flex items-center justify-center bg-background/80">
        <Loading size="lg" />
      </div>
    </div>
  );
}
