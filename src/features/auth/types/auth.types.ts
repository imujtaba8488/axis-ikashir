/**
 * Authentication feature types
 * Defines all types related to user authentication
 */

export interface CreateUserData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthResult {
  success: boolean;
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
}

export interface AuthError {
  success: false;
  error: string;
  details?: any;
}

export interface AuthContextType {
  user: User | null;
  login: (data: LoginData) => Promise<AuthResult>;
  register: (data: CreateUserData) => Promise<AuthResult>;
  logout: () => void;
  isLoading: boolean;
}

export interface JwtPayload {
  userId: string;
  email: string;
  name: string;
  iat: number;
  exp: number;
}
