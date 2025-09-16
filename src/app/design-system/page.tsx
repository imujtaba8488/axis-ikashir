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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

/**
 * Design System Showcase Page
 * Demonstrates all available UI components and design patterns
 */
export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Design System Showcase
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive collection of UI components built with shadcn/ui and
            Tailwind CSS. All components are responsive, accessible, and
            customizable.
          </p>
        </div>

        {/* Buttons Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Buttons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>
                  Different button styles for various use cases
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button variant="default">Default</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Button Sizes</CardTitle>
                <CardDescription>
                  Different button sizes for various contexts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">🚀</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Button States</CardTitle>
                <CardDescription>
                  Different button states and interactions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                    Gradient
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Form Components Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Form Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Input Fields</CardTitle>
                <CardDescription>
                  Various input field types and states
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="disabled">Disabled Input</Label>
                  <Input
                    id="disabled"
                    disabled
                    placeholder="This input is disabled"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Select & Textarea</CardTitle>
                <CardDescription>
                  Dropdown and multi-line text inputs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="select">Select Option</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apple">🍎 Apple</SelectItem>
                      <SelectItem value="banana">🍌 Banana</SelectItem>
                      <SelectItem value="orange">🍊 Orange</SelectItem>
                      <SelectItem value="grape">🍇 Grape</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="textarea">Message</Label>
                  <Textarea
                    id="textarea"
                    placeholder="Type your message here..."
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Display Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Data Display
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>Status indicators and labels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Error</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-500">Success</Badge>
                  <Badge className="bg-yellow-500">Warning</Badge>
                  <Badge className="bg-blue-500">Info</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Avatars</CardTitle>
                <CardDescription>
                  User profile images and fallbacks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="User"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">XS</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="text-lg">LG</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cards</CardTitle>
                <CardDescription>
                  Content containers and layouts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Simple Card</h4>
                  <Card className="p-4">
                    <p className="text-sm text-muted-foreground">
                      This is a simple card with content.
                    </p>
                  </Card>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Card with Header</h4>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Card Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Card content goes here.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Responsive Design Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Responsive Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Array.from({ length: 8 }, (_, i) => (
              <Card key={i} className="p-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Card {i + 1}</h4>
                  <p className="text-sm text-muted-foreground">
                    This card adapts to different screen sizes.
                  </p>
                  <Badge variant="outline" className="text-xs">
                    Responsive
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Typography</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold">Heading 1</h1>
                <h2 className="text-3xl font-semibold">Heading 2</h2>
                <h3 className="text-2xl font-semibold">Heading 3</h3>
                <h4 className="text-xl font-semibold">Heading 4</h4>
                <h5 className="text-lg font-semibold">Heading 5</h5>
                <h6 className="text-base font-semibold">Heading 6</h6>
              </div>
              <div className="space-y-2">
                <p className="text-base">
                  This is a paragraph with regular text. It demonstrates the
                  default typography styling and line height.
                </p>
                <p className="text-sm text-muted-foreground">
                  This is smaller text with muted foreground color, perfect for
                  descriptions and secondary information.
                </p>
                <p className="text-xs text-muted-foreground">
                  This is extra small text, often used for captions and fine
                  print.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Color Palette Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Color Palette
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Primary', class: 'bg-primary text-primary-foreground' },
              {
                name: 'Secondary',
                class: 'bg-secondary text-secondary-foreground',
              },
              {
                name: 'Destructive',
                class: 'bg-destructive text-destructive-foreground',
              },
              { name: 'Muted', class: 'bg-muted text-muted-foreground' },
              { name: 'Accent', class: 'bg-accent text-accent-foreground' },
              {
                name: 'Background',
                class: 'bg-background text-foreground border',
              },
            ].map(color => (
              <div key={color.name} className="space-y-2">
                <div
                  className={`h-16 rounded-md ${color.class} flex items-center justify-center text-sm font-medium`}
                >
                  {color.name}
                </div>
                <p className="text-xs text-center text-muted-foreground">
                  {color.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="text-center py-8 border-t">
          <p className="text-muted-foreground">
            This design system is built with{' '}
            <a
              href="https://ui.shadcn.com"
              className="text-primary hover:underline"
            >
              shadcn/ui
            </a>{' '}
            and{' '}
            <a
              href="https://tailwindcss.com"
              className="text-primary hover:underline"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
