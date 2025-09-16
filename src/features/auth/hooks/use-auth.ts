'use client';

import { useContext } from 'react';
import { AuthContext } from '../contexts/auth-context';
import { AuthContextType } from '../types/auth.types';

/**
 * Custom hook to access authentication context
 * Provides type-safe access to auth state and methods
 */
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
