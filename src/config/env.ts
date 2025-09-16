import { z } from 'zod';

/**
 * Environment configuration validation using Zod
 * This ensures all required environment variables are present and valid
 */
const envSchema = z.object({
  // Database (optional for development)
  DATABASE_URL: z.string().url('Invalid database URL').optional(),

  // NextAuth.js
  NEXTAUTH_URL: z
    .string()
    .url('Invalid NextAuth URL')
    .default('http://localhost:3000'),
  NEXTAUTH_SECRET: z
    .string()
    .min(32, 'NextAuth secret must be at least 32 characters')
    .default('your-secret-key-here-change-in-production'),

  // OAuth Providers (optional)
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  GITHUB_CLIENT_ID: z.string().optional(),
  GITHUB_CLIENT_SECRET: z.string().optional(),

  // App Configuration
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  NEXT_PUBLIC_APP_URL: z
    .string()
    .url('Invalid app URL')
    .default('http://localhost:3000'),
  NEXT_PUBLIC_APP_NAME: z.string().default('Axis Ikashir'),

  // Email Configuration (optional)
  EMAIL_SERVER_HOST: z.string().optional(),
  EMAIL_SERVER_PORT: z.string().optional(),
  EMAIL_SERVER_USER: z.string().optional(),
  EMAIL_SERVER_PASSWORD: z.string().optional(),
  EMAIL_FROM: z.string().email().optional(),
});

/**
 * Validated environment variables
 * Throws an error if any required environment variables are missing or invalid
 */
export const env = envSchema.parse(process.env);

/**
 * Type-safe environment variables
 */
export type Env = z.infer<typeof envSchema>;
