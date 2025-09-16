/**
 * Application constants
 * Centralized location for all constant values used throughout the application
 */

/**
 * API Routes
 */
export const API_ROUTES = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh',
    PROFILE: '/api/auth/profile',
  },
  USERS: {
    BASE: '/api/users',
    PROFILE: '/api/users/profile',
    UPDATE: '/api/users/update',
  },
} as const;

/**
 * Application Routes
 */
export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  ADMIN: {
    BASE: '/admin',
    USERS: '/admin/users',
    SETTINGS: '/admin/settings',
  },
} as const;

/**
 * Pagination defaults
 */
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

/**
 * Form validation limits
 */
export const VALIDATION = {
  PASSWORD: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 128,
  },
  USERNAME: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 30,
  },
  EMAIL: {
    MAX_LENGTH: 254,
  },
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 50,
  },
} as const;

/**
 * File upload limits
 */
export const FILE_UPLOAD = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
} as const;

/**
 * Cache keys
 */
export const CACHE_KEYS = {
  USER_PROFILE: 'user-profile',
  USER_SETTINGS: 'user-settings',
  NAVIGATION: 'navigation',
} as const;

/**
 * Error messages
 */
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  FORBIDDEN: 'Access denied.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
} as const;

/**
 * Success messages
 */
export const SUCCESS_MESSAGES = {
  PROFILE_UPDATED: 'Profile updated successfully.',
  PASSWORD_CHANGED: 'Password changed successfully.',
  ACCOUNT_CREATED: 'Account created successfully.',
  LOGIN_SUCCESS: 'Welcome back!',
  LOGOUT_SUCCESS: 'Logged out successfully.',
} as const;

/**
 * Theme colors
 */
export const THEME_COLORS = {
  PRIMARY: 'hsl(var(--primary))',
  SECONDARY: 'hsl(var(--secondary))',
  DESTRUCTIVE: 'hsl(var(--destructive))',
  MUTED: 'hsl(var(--muted))',
  ACCENT: 'hsl(var(--accent))',
  POPOVER: 'hsl(var(--popover))',
  CARD: 'hsl(var(--card))',
} as const;

/**
 * Breakpoints for responsive design
 */
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
} as const;
