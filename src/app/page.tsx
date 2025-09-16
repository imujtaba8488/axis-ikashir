import { MainLayout } from '@/components/layout/main-layout';
import { ResponsiveContainer } from '@/components/layout/responsive-container';
import { ResponsiveGrid } from '@/components/layout/responsive-grid';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

/**
 * Home page component
 * Landing page showcasing the application features and benefits
 * Now featuring the new shadcn/ui design system
 */
export default function Home() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-background dark:bg-black">
        <ResponsiveContainer size="xl" padding="lg">
          <div className="py-16 space-y-16">
            {/* Hero Section */}
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="text-sm border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                >
                  ✨ Now with shadcn/ui Design System
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  Welcome to{' '}
                  <span className="text-black dark:text-white font-black tracking-tight">
                    Axis Ikashir
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Building the future of digital experiences with modern web
                  technologies, scalable architecture, and a beautiful design
                  system.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/auth/register">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/design-system">View Design System</Link>
                </Button>
              </div>
            </div>

            {/* Features Section */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  Why Choose Axis Ikashir?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Built with modern best practices and designed for scalability
                </p>
              </div>

              <ResponsiveGrid cols={{ default: 1, md: 2, lg: 3 }} gap="lg">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <span className="text-2xl">⚡</span>
                      </div>
                      Fast Performance
                    </CardTitle>
                    <CardDescription>
                      Built with Next.js 14 and optimized for speed
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Experience lightning-fast page loads and smooth
                      interactions powered by the latest web technologies and
                      optimized architecture.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <span className="text-2xl">🎨</span>
                      </div>
                      Beautiful Design
                    </CardTitle>
                    <CardDescription>
                      Modern UI components with shadcn/ui and Tailwind CSS
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Clean, responsive design system that looks great on all
                      devices with consistent components and accessibility
                      built-in.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <span className="text-2xl">🏗️</span>
                      </div>
                      Scalable Architecture
                    </CardTitle>
                    <CardDescription>
                      Feature-based organization with repository pattern
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Built with enterprise-grade architecture patterns that
                      scale from small projects to large applications.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <span className="text-2xl">🔒</span>
                      </div>
                      Secure & Reliable
                    </CardTitle>
                    <CardDescription>
                      Enterprise-grade security and reliability
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Built with security in mind, featuring JWT authentication,
                      data validation, and industry best practices.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <span className="text-2xl">📱</span>
                      </div>
                      Responsive Design
                    </CardTitle>
                    <CardDescription>
                      Mobile-first approach with adaptive layouts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Every component is designed to work seamlessly across all
                      devices and screen sizes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <span className="text-2xl">♿</span>
                      </div>
                      Accessible
                    </CardTitle>
                    <CardDescription>
                      WCAG 2.1 AA compliant components
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Built on Radix UI primitives with accessibility features
                      and keyboard navigation support.
                    </p>
                  </CardContent>
                </Card>
              </ResponsiveGrid>
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Join the future of web development with our modern, scalable,
                  and beautiful platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/auth/register">Start Building</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/design-system">Explore Components</Link>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-gray-800">
                <span>Trusted by developers worldwide</span>
                <div className="flex -space-x-2">
                  <Avatar className="h-8 w-8 border-2 border-background">
                    <AvatarFallback className="text-xs">JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 border-2 border-background">
                    <AvatarFallback className="text-xs">AB</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 border-2 border-background">
                    <AvatarFallback className="text-xs">CD</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 border-2 border-background">
                    <AvatarFallback className="text-xs">EF</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </div>
    </MainLayout>
  );
}
