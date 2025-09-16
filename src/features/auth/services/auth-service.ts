import { env } from '@/config/env';
import { UserRepository } from '@/repositories/user-repository';
import { BaseService } from '@/services/base-service';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AuthResult, CreateUserData, LoginData } from '../types/auth.types';

/**
 * Authentication service
 * Handles user authentication, registration, and JWT token management
 */
export class AuthService extends BaseService {
  private userRepository: UserRepository;

  constructor() {
    super();
    this.userRepository = new UserRepository();
  }

  /**
   * Register a new user
   */
  async register(data: CreateUserData): Promise<AuthResult> {
    try {
      // Validate required fields
      this.validateRequired(data, ['name', 'email', 'password']);

      // Check if user already exists
      const existingUser = await this.userRepository.findByEmail(data.email);
      if (existingUser) {
        throw new Error('User with this email already exists');
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(data.password, 12);

      // Create user
      const user = await this.userRepository.create({
        name: data.name,
        email: data.email,
        password: hashedPassword,
      });

      // Generate JWT token
      const token = this.generateToken(user);

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
        token,
      };
    } catch (error) {
      this.handleError(error, 'AuthService.register');
    }
  }

  /**
   * Login user
   */
  async login(data: LoginData): Promise<AuthResult> {
    try {
      // Validate required fields
      this.validateRequired(data, ['email', 'password']);

      // Find user by email
      const user = await this.userRepository.findByEmail(data.email);
      if (!user) {
        throw new Error('Invalid credentials');
      }

      // Verify password
      const isValidPassword = await bcrypt.compare(
        data.password,
        user.password
      );
      if (!isValidPassword) {
        throw new Error('Invalid credentials');
      }

      // Generate JWT token
      const token = this.generateToken(user);

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
        token,
      };
    } catch (error) {
      this.handleError(error, 'AuthService.login');
    }
  }

  /**
   * Verify JWT token
   */
  async verifyToken(
    token: string
  ): Promise<{ userId: string; email: string; name: string }> {
    try {
      const decoded = jwt.verify(token, env.NEXTAUTH_SECRET) as {
        userId: string;
        email: string;
        name: string;
      };
      return decoded;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  /**
   * Generate JWT token for user
   */
  private generateToken(user: {
    id: string;
    email: string;
    name: string;
  }): string {
    return jwt.sign(
      {
        userId: user.id,
        email: user.email,
        name: user.name,
      },
      env.NEXTAUTH_SECRET,
      { expiresIn: '7d' }
    );
  }
}
