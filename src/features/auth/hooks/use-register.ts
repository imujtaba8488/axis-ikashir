'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AuthResult, CreateUserData } from '../types/auth.types';

/**
 * Custom hook for handling registration functionality
 * Manages registration state and API calls
 */
export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const register = async (data: CreateUserData): Promise<AuthResult | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/auth/register', {
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
        setError(result.error || 'Registration failed');
        return null;
      }
    } catch (err) {
      setError('Network error. Please try again.');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    isLoading,
    error,
    clearError: () => setError(null),
  };
}
