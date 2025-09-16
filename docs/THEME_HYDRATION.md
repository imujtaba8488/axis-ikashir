# Theme Hydration Fix

## Problem

When refreshing the page in dark mode, users experienced a "flash of unstyled content" (FOUC) where the page would briefly show light mode before switching to dark mode. This also caused hydration errors in Next.js.

## Root Cause

The hydration error occurred because:

1. Server-side rendering (SSR) always rendered with default theme
2. Client-side hydration tried to read from localStorage
3. This created a mismatch between server and client rendering

## Solution

### 1. Theme Initialization Script

**File**: `src/lib/theme-script.ts`

- Runs **before** React hydration
- Reads theme from localStorage immediately
- Applies theme classes and background color instantly
- Prevents flash by setting background color before page renders

### 2. SSR-Safe Theme Context

**File**: `src/contexts/theme-context.tsx`

- Always starts with default theme for SSR consistency
- Uses `mounted` state to track when client has hydrated
- Only reads from localStorage after mounting
- Prevents hydration mismatches

### 3. Component-Level Protection

**File**: `src/components/ui/theme-toggle.tsx`

- Uses `mounted` state to prevent rendering until hydrated
- Shows fallback UI during SSR
- Prevents hydration mismatches in theme-dependent components

## How It Works

### 1. Page Load

```
1. HTML loads with default theme
2. Theme script runs immediately
3. Script reads localStorage and applies theme
4. Background color set instantly (no flash)
5. React hydrates with correct theme
```

### 2. Theme Changes

```
1. User clicks theme toggle
2. Theme context updates
3. localStorage updated
4. CSS classes applied
5. Cross-tab sync via storage events
```

## Key Features

- ✅ **No Flash**: Theme applied before page renders
- ✅ **SSR Safe**: Server and client render consistently
- ✅ **Hydration Safe**: No mismatches between server/client
- ✅ **Cross-tab Sync**: Theme changes sync across tabs
- ✅ **Error Handling**: Graceful fallbacks for localStorage errors
- ✅ **Mobile Support**: Meta theme-color updates

## Usage

### For Theme-Dependent Components

```tsx
import { useTheme } from '@/contexts/theme-context';

function MyComponent() {
  const { theme, resolvedTheme, mounted } = useTheme();

  // Don't render theme-dependent content until mounted
  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <div className={resolvedTheme === 'dark' ? 'dark' : 'light'}>Content</div>
  );
}
```

### For Simple Components

```tsx
import { useMounted } from '@/hooks/use-mounted';

function MyComponent() {
  const mounted = useMounted();

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return <div>Client-only content</div>;
}
```

## Testing

To test the fix:

1. Set theme to dark mode
2. Refresh the page
3. Verify no flash occurs
4. Check browser console for hydration errors
5. Test theme switching works smoothly

## Browser Support

- ✅ All modern browsers
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ SSR environments (Next.js, Vercel)
- ✅ Static generation (no JavaScript required for theme)
