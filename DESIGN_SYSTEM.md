# 🎨 Design System Documentation

This document outlines the comprehensive design system built with **shadcn/ui** and **Tailwind CSS** for the Axis Ikashir project.

## 🎯 **Design Principles**

### **1. Consistency**

- Unified visual language across all components
- Consistent spacing, typography, and color usage
- Standardized interaction patterns

### **2. Accessibility**

- Built on Radix UI primitives for accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader friendly

### **3. Responsiveness**

- Mobile-first approach
- Fluid typography and spacing
- Adaptive layouts for all screen sizes

### **4. Maintainability**

- Copy-paste components (no library dependencies)
- TypeScript for type safety
- Clear component APIs

## 🎨 **Color System**

### **Primary Colors**

```css
--primary: 222.2 47.4% 11.2% /* Dark blue */ --primary-foreground: 210 40% 98%
  /* White */;
```

### **Secondary Colors**

```css
--secondary: 210 40% 96% /* Light gray */ --secondary-foreground: 222.2 84% 4.9%
  /* Dark text */;
```

### **Accent Colors**

```css
--accent: 210 40% 96% /* Light accent */ --accent-foreground: 222.2 84% 4.9%
  /* Dark text */;
```

### **Destructive Colors**

```css
--destructive: 0 84.2% 60.2% /* Red */ --destructive-foreground: 210 40% 98%
  /* White */;
```

### **Neutral Colors**

```css
--background: 0 0% 100% /* White */ --foreground: 222.2 84% 4.9% /* Dark text */
  --muted: 210 40% 96% /* Light gray */ --muted-foreground: 215.4 16.3% 46.9%
  /* Medium gray */ --border: 214.3 31.8% 91.4% /* Light border */
  --input: 214.3 31.8% 91.4% /* Input border */ --ring: 222.2 84% 4.9%
  /* Focus ring */;
```

## 📝 **Typography**

### **Font Families**

- **Sans**: Geist Sans (primary)
- **Mono**: Geist Mono (code)

### **Font Sizes**

```css
text-xs     /* 12px */
text-sm     /* 14px */
text-base   /* 16px */
text-lg     /* 18px */
text-xl     /* 20px */
text-2xl    /* 24px */
text-3xl    /* 30px */
text-4xl    /* 36px */
text-5xl    /* 48px */
text-6xl    /* 60px */
```

### **Font Weights**

```css
font-thin     /* 100 */
font-light    /* 300 */
font-normal   /* 400 */
font-medium   /* 500 */
font-semibold /* 600 */
font-bold     /* 700 */
font-extrabold /* 800 */
font-black    /* 900 */
```

## 📏 **Spacing System**

### **Spacing Scale**

```css
space-0    /* 0px */
space-1    /* 4px */
space-2    /* 8px */
space-3    /* 12px */
space-4    /* 16px */
space-5    /* 20px */
space-6    /* 24px */
space-8    /* 32px */
space-10   /* 40px */
space-12   /* 48px */
space-16   /* 64px */
space-20   /* 80px */
space-24   /* 96px */
space-32   /* 128px */
```

### **Component Spacing**

- **Small**: `space-2` (8px)
- **Medium**: `space-4` (16px)
- **Large**: `space-6` (24px)
- **Extra Large**: `space-8` (32px)

## 🧩 **Component Library**

### **Button Component**

```tsx
import { Button } from "@/components/ui/button"

// Variants
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="default">Default</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>
```

### **Input Component**

```tsx
import { Input } from "@/components/ui/input"

<Input type="email" placeholder="Enter your email" />
<Input type="password" placeholder="Enter your password" />
<Input disabled placeholder="Disabled input" />
```

### **Card Component**

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>;
```

### **Form Components**

```tsx
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

<Form>
  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input placeholder="Enter your email" {...field} />
        </FormControl>
        <FormDescription>This is your public email address.</FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
  <Button type="submit">Submit</Button>
</Form>;
```

### **Badge Component**

```tsx
import { Badge } from "@/components/ui/badge"

<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

### **Avatar Component**

```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

<Avatar>
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>;
```

### **Select Component**

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>;
```

### **Textarea Component**

```tsx
import { Textarea } from "@/components/ui/textarea"

<Textarea placeholder="Type your message here." />
<Textarea disabled placeholder="Disabled textarea" />
```

## 📱 **Responsive Design**

### **Breakpoints**

```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### **Responsive Patterns**

```tsx
// Mobile-first approach
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card>Content 1</Card>
  <Card>Content 2</Card>
  <Card>Content 3</Card>
</div>

// Responsive typography
<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
  Responsive Heading
</h1>

// Responsive spacing
<div className="p-4 md:p-6 lg:p-8">
  <p>Responsive padding</p>
</div>
```

## 🎭 **Dark Mode Support**

### **CSS Variables**

The design system uses CSS variables that automatically adapt to light/dark mode:

```css
/* Light mode */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}

/* Dark mode */
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}
```

### **Usage**

```tsx
// Components automatically adapt to dark mode
<Button>This button adapts to dark mode</Button>
<Card>This card adapts to dark mode</Card>
```

## 🎨 **Component Variants**

### **Button Variants**

- **default**: Primary action button
- **destructive**: Delete/dangerous actions
- **outline**: Secondary actions
- **secondary**: Subtle actions
- **ghost**: Minimal actions
- **link**: Text-like actions

### **Badge Variants**

- **default**: Primary status
- **secondary**: Secondary status
- **destructive**: Error status
- **outline**: Subtle status

## 🔧 **Customization**

### **Adding New Variants**

```tsx
// Extend existing variants
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        // Add your custom variant
        custom: 'bg-custom text-custom-foreground hover:bg-custom/90',
      },
    },
  }
);
```

### **Custom Colors**

```css
/* Add to globals.css */
:root {
  --custom: 120 60% 50%;
  --custom-foreground: 0 0% 100%;
}
```

## 📋 **Best Practices**

### **1. Component Usage**

- Use semantic HTML elements
- Provide proper accessibility attributes
- Include loading states for interactive elements

### **2. Responsive Design**

- Start with mobile design
- Use fluid typography and spacing
- Test on multiple devices

### **3. Accessibility**

- Use proper ARIA labels
- Ensure keyboard navigation
- Provide alternative text for images

### **4. Performance**

- Use CSS variables for theming
- Minimize bundle size
- Optimize images and assets

## 🚀 **Getting Started**

### **1. Import Components**

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
```

### **2. Use Responsive Classes**

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Your content */}
</div>
```

### **3. Apply Consistent Spacing**

```tsx
<div className="space-y-4">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
</div>
```

This design system provides a solid foundation for building consistent, accessible, and responsive user interfaces.
