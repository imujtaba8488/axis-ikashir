'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle, ThemeToggleWithLabel } from '@/components/ui/theme-toggle';
import { useTheme } from '@/contexts/theme-context';

/**
 * Theme demo component
 * Showcases theme functionality and components
 */
export function ThemeDemo() {
  const { theme, resolvedTheme } = useTheme();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Theme System Demo
            <Badge variant="outline">
              {theme === 'system' ? 'System' : theme === 'light' ? 'Light' : 'Dark'}
            </Badge>
          </CardTitle>
          <CardDescription>
            Current theme: <strong>{theme}</strong> 
            {theme === 'system' && (
              <span> (resolved to: <strong>{resolvedTheme}</strong>)</span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <span className="text-sm text-muted-foreground">Icon-only toggle</span>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggleWithLabel />
            <span className="text-sm text-muted-foreground">Toggle with label</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Primary Button</CardTitle>
              </CardHeader>
              <CardContent>
                <Button size="sm">Click me</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Secondary Button</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" size="sm">Click me</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Outline Button</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">Click me</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Color Palette</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div className="space-y-1">
                <div className="h-8 bg-primary rounded text-primary-foreground flex items-center justify-center text-xs">
                  Primary
                </div>
              </div>
              <div className="space-y-1">
                <div className="h-8 bg-secondary rounded text-secondary-foreground flex items-center justify-center text-xs">
                  Secondary
                </div>
              </div>
              <div className="space-y-1">
                <div className="h-8 bg-muted rounded text-muted-foreground flex items-center justify-center text-xs">
                  Muted
                </div>
              </div>
              <div className="space-y-1">
                <div className="h-8 bg-accent rounded text-accent-foreground flex items-center justify-center text-xs">
                  Accent
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
