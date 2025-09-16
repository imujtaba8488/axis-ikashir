'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AuthResult, LoginData } from '../types/auth.types';

/**
 * Custom hook for handling login functionality
 * Manages login state and API calls
 */
export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const login = async (data: LoginData): Promise<AuthResult | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        router.push('/dashboard');
        return result;
      } else {
        setError(result.error || 'Login failed');
        return null;
      }
    } catch {
      setError('Network error. Please try again.');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login,
    isLoading,
    error,
    clearError: () => setError(null),
  };
}
