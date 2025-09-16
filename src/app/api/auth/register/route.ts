import { env } from '@/config/env';
import { VALIDATION } from '@/constants';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

/**
 * Registration request validation schema
 */
const registerSchema = z
  .object({
    name: z
      .string()
      .min(
        VALIDATION.NAME.MIN_LENGTH,
        `Name must be at least ${VALIDATION.NAME.MIN_LENGTH} characters`
      )
      .max(
        VALIDATION.NAME.MAX_LENGTH,
        `Name must be no more than ${VALIDATION.NAME.MAX_LENGTH} characters`
      ),
    email: z
      .string()
      .email('Invalid email address')
      .max(
        VALIDATION.EMAIL.MAX_LENGTH,
        `Email must be no more than ${VALIDATION.EMAIL.MAX_LENGTH} characters`
      ),
    password: z
      .string()
      .min(
        VALIDATION.PASSWORD.MIN_LENGTH,
        `Password must be at least ${VALIDATION.PASSWORD.MIN_LENGTH} characters`
      )
      .max(
        VALIDATION.PASSWORD.MAX_LENGTH,
        `Password must be no more than ${VALIDATION.PASSWORD.MAX_LENGTH} characters`
      ),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

/**
 * POST /api/auth/register
 * Registers a new user and returns a JWT token
 *
 * @param request - The incoming request with registration data
 * @returns Response with JWT token or error message
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = registerSchema.parse(body);
    const { name, email, password } = validatedData;

    // TODO: Replace with actual database operations
    // Check if user already exists
    const existingUser = null; // await getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // TODO: Create user in database
    const newUser = {
      id: '2', // This would come from the database
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    };

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: newUser.id,
        email: newUser.email,
        name: newUser.name,
      },
      env.NEXTAUTH_SECRET,
      { expiresIn: '7d' }
    );

    // Create response with token
    const response = NextResponse.json({
      success: true,
      message: 'Registration successful',
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
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
    console.error('Registration error:', error);

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
