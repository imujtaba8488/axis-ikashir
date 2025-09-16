import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import {
  AlertTriangle,
  CheckCircle,
  Code,
  Info,
  Menu,
  Palette,
  XCircle,
  Zap,
} from 'lucide-react';

/**
 * Modern Design System Showcase
 * Professional showcase of shadcn/ui components with contemporary design
 */
export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* Hero Section */}
        <div className="text-center space-y-8 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700 backdrop-blur-sm shadow-lg">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Modern Design System
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white font-black tracking-tight leading-tight">
              Design System
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              A comprehensive collection of beautifully crafted components,
              built with modern design principles and accessibility in mind.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <ThemeToggle />
            <span className="text-sm text-muted-foreground">
              Toggle theme to see components adapt
            </span>
          </div>
        </div>

        {/* Status Alerts */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Status & Feedback
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clear communication through status indicators and alerts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-800 dark:text-green-200">
                Success!
              </AlertTitle>
              <AlertDescription className="text-green-700 dark:text-green-300">
                Your action was completed successfully.
              </AlertDescription>
            </Alert>

            <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
              <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-800 dark:text-blue-200">
                Information
              </AlertTitle>
              <AlertDescription className="text-blue-700 dark:text-blue-300">
                Here's some helpful information for you.
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
              <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
              <AlertTitle className="text-yellow-800 dark:text-yellow-200">
                Warning
              </AlertTitle>
              <AlertDescription className="text-yellow-700 dark:text-yellow-300">
                Please review this before proceeding.
              </AlertDescription>
            </Alert>

            <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
              <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
              <AlertTitle className="text-red-800 dark:text-red-200">
                Error
              </AlertTitle>
              <AlertDescription className="text-red-700 dark:text-red-300">
                Something went wrong. Please try again.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Interactive Components */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Interactive Components
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Engaging user interactions with modern components.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Buttons */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  Buttons
                </CardTitle>
                <CardDescription>
                  Interactive elements with consistent styling and states
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-3">
                  <Button className="h-10">Primary</Button>
                  <Button variant="secondary" className="h-10">
                    Secondary
                  </Button>
                  <Button variant="outline" className="h-10">
                    Outline
                  </Button>
                  <Button variant="ghost" className="h-10">
                    Ghost
                  </Button>
                  <Button variant="link" className="h-10">
                    Link
                  </Button>
                  <Button variant="destructive" className="h-10">
                    Destructive
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm" className="h-8 px-3 text-xs">
                    Small
                  </Button>
                  <Button size="default" className="h-10 px-4">
                    Default
                  </Button>
                  <Button size="lg" className="h-12 px-6 text-base">
                    Large
                  </Button>
                  <Button size="icon" className="h-10 w-10">
                    <span className="text-sm">⚙️</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Dialog & Sheet */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                    <Menu className="w-4 h-4 text-primary" />
                  </div>
                  Modals & Sheets
                </CardTitle>
                <CardDescription>
                  Overlay components for focused interactions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Dialog Example</DialogTitle>
                        <DialogDescription>
                          This is a modal dialog example using shadcn/ui
                          components.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <p className="text-sm text-muted-foreground">
                          Dialog content goes here. You can add any components
                          inside.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline">Open Sheet</Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Sheet Example</SheetTitle>
                        <SheetDescription>
                          This is a side sheet example.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="py-4">
                        <p className="text-sm text-muted-foreground">
                          Sheet content goes here. Perfect for mobile navigation
                          or forms.
                        </p>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Form Components */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Form Components
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive form controls with validation states.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                    <Code className="w-4 h-4 text-primary" />
                  </div>
                  Input Fields
                </CardTitle>
                <CardDescription>
                  Text inputs with various states and validation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="h-10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="h-10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="disabled"
                      className="text-sm font-medium text-muted-foreground"
                    >
                      Disabled Field
                    </Label>
                    <Input
                      id="disabled"
                      disabled
                      placeholder="This field is disabled"
                      className="h-10"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                    <Palette className="w-4 h-4 text-primary" />
                  </div>
                  Select & Textarea
                </CardTitle>
                <CardDescription>
                  Dropdown selections and multi-line text inputs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="select" className="text-sm font-medium">
                      Choose Option
                    </Label>
                    <Select>
                      <SelectTrigger className="h-10">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                        <SelectItem value="option3">Option 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="textarea" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="textarea"
                      placeholder="Enter your message here..."
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Display */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Data Display
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Components for presenting information in an organized and visually
              appealing way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Badges</CardTitle>
                <CardDescription>Status indicators and labels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Error</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Avatars</CardTitle>
                <CardDescription>
                  User profile images and initials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback className="text-sm">SC</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="text-sm">AB</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="text-sm">CD</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Cards</CardTitle>
                <CardDescription>
                  Content containers with elevation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 border rounded-lg bg-muted/30">
                  <p className="text-sm font-medium">Card Example</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Demonstrates card styling and content structure.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Typography
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A harmonious type scale designed for optimal readability and
              visual hierarchy.
            </p>
          </div>

          <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <span className="text-sm">✍️</span>
                </div>
                Headings & Body
              </CardTitle>
              <CardDescription>
                Explore the various text styles and their applications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Heading 1
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Page titles and hero headings
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Heading 2
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Section headings
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    Heading 3
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Subsection headings
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-medium tracking-tight">
                    Heading 4
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Component titles
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="text-lg font-medium tracking-tight">
                    Heading 5
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Small headings
                  </p>
                </div>
                <div className="space-y-2">
                  <h6 className="text-base font-medium tracking-tight">
                    Heading 6
                  </h6>
                  <p className="text-sm text-muted-foreground">
                    Smallest headings
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-lg leading-relaxed">
                    This is a large paragraph with comfortable line height for
                    better readability. It's perfect for introductory text and
                    important content blocks.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Large body text
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-base leading-relaxed">
                    This is regular body text with optimal line spacing. It
                    provides excellent readability for most content while
                    maintaining visual balance.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Regular body text
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    This is smaller text used for descriptions, captions, and
                    secondary information. It maintains readability while being
                    visually subordinate.
                  </p>
                  <p className="text-sm text-muted-foreground">Small text</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Color Palette */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Color Palette
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A carefully curated color system that adapts beautifully to both
              light and dark themes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {
                name: 'Primary',
                class: 'bg-primary text-primary-foreground',
                description: 'Brand color',
              },
              {
                name: 'Secondary',
                class: 'bg-secondary text-secondary-foreground',
                description: 'Supporting color',
              },
              {
                name: 'Accent',
                class: 'bg-accent text-accent-foreground',
                description: 'Highlight color',
              },
              {
                name: 'Muted',
                class: 'bg-muted text-muted-foreground',
                description: 'Subtle background',
              },
              {
                name: 'Destructive',
                class: 'bg-destructive text-destructive-foreground',
                description: 'Error states',
              },
              {
                name: 'Background',
                class: 'bg-background text-foreground border',
                description: 'Base background',
              },
            ].map(color => (
              <div key={color.name} className="group">
                <div
                  className={`h-16 w-full rounded-lg ${color.class} flex items-center justify-center text-sm font-medium transition-transform group-hover:scale-105 shadow-lg`}
                >
                  {color.name}
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-medium">{color.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {color.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="text-center space-y-4 pt-16 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg p-8">
          <p className="text-muted-foreground">
            Built with ❤️ using Next.js, TypeScript, and shadcn/ui
          </p>
          <p className="text-sm text-muted-foreground">
            All components are accessible, responsive, and production-ready
          </p>
        </div>
      </div>
    </div>
  );
}
