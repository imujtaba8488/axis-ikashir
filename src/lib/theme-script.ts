/**
 * Theme initialization script
 * Runs before React hydration to prevent flash of unstyled content (FOUC)
 */

export function getThemeScript(storageKey: string = 'axis-ikashir-theme') {
  return `
    (function() {
      try {
        // Get theme from localStorage
        const storedTheme = localStorage.getItem('${storageKey}');
        
        // Get system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const systemTheme = systemPrefersDark ? 'dark' : 'light';
        
        // Determine resolved theme
        let resolvedTheme = 'light'; // default fallback
        if (storedTheme === 'dark' || storedTheme === 'light') {
          resolvedTheme = storedTheme;
        } else if (storedTheme === 'system') {
          resolvedTheme = systemTheme;
        }
        
        // Apply theme immediately
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(resolvedTheme);
        
        // Set background color immediately to prevent flash
        root.style.backgroundColor = resolvedTheme === 'dark' ? '#000000' : '#ffffff';
        
        // Update meta theme-color for mobile browsers
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
          metaThemeColor.setAttribute('content', resolvedTheme === 'dark' ? '#000000' : '#ffffff');
        }
        
        // Store resolved theme for React to pick up
        root.setAttribute('data-theme', resolvedTheme);
        
        // Mark that theme has been applied
        root.setAttribute('data-theme-applied', 'true');
      } catch (e) {
        // Fallback to light theme if there's an error
        const root = document.documentElement;
        root.classList.add('light');
        root.style.backgroundColor = '#ffffff';
        root.setAttribute('data-theme', 'light');
        root.setAttribute('data-theme-applied', 'true');
      }
    })();
  `;
}
