import { MainLayout } from '@/components/layout/main-layout';
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
 */
export default function Home() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-primary">Axis Ikashir</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building the future of digital experiences with modern web
            technologies and best practices.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/auth/register">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Modern Stack</CardTitle>
                <CardDescription>
                  Built with Next.js, TypeScript, and Tailwind CSS
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Leveraging the latest web technologies for optimal performance
                  and developer experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Type Safety</CardTitle>
                <CardDescription>
                  Full TypeScript support throughout the application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Catch errors at compile time with comprehensive type checking
                  and IntelliSense support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Responsive Design</CardTitle>
                <CardDescription>
                  Mobile-first approach with Tailwind CSS
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Beautiful, responsive designs that work seamlessly across all
                  devices and screen sizes.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Ready to get started?</CardTitle>
              <CardDescription>
                Join thousands of developers building amazing applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" asChild>
                <Link href="/auth/register">Create Account</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </MainLayout>
  );
}
