import { VALIDATION } from '@/constants';
import { AuthService } from '@/features/auth/services/auth-service';
import {
  createErrorResponse,
  createSuccessResponse,
  createValidationErrorResponse,
} from '@/shared/utils/api-response';
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

    // Use auth service for business logic
    const authService = new AuthService();
    const result = await authService.register(validatedData);

    // Create response with token
    const response = NextResponse.json(
      createSuccessResponse(result.user, 'Registration successful')
    );

    // Set HTTP-only cookie
    response.cookies.set('auth-token', result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    console.error('Registration error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(createValidationErrorResponse(error.issues), {
        status: 400,
      });
    }

    if (error instanceof Error) {
      return NextResponse.json(createErrorResponse(error.message), {
        status: error.message.includes('already exists') ? 409 : 400,
      });
    }

    return NextResponse.json(createErrorResponse('Internal server error'), {
      status: 500,
    });
  }
}
