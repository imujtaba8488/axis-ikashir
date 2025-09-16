import { env } from '@/config/env';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

/**
 * Login request validation schema
 */
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

/**
 * POST /api/auth/login
 * Authenticates a user and returns a JWT token
 *
 * @param request - The incoming request with login credentials
 * @returns Response with JWT token or error message
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = loginSchema.parse(body);
    const { email, password } = validatedData;

    // TODO: Replace with actual database query
    // For now, we'll use a mock user
    const mockUser = {
      id: '1',
      email: 'user@example.com',
      password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
      name: 'John Doe',
    };

    // Check if user exists
    if (email !== mockUser.email) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, mockUser.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: mockUser.id,
        email: mockUser.email,
        name: mockUser.name,
      },
      env.NEXTAUTH_SECRET,
      { expiresIn: '7d' }
    );

    // Create response with token
    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      user: {
        id: mockUser.id,
        email: mockUser.email,
        name: mockUser.name,
      },
    });

    // Set HTTP-only cookie
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
