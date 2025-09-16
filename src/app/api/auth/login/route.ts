import { AuthService } from '@/features/auth/services/auth-service';
import {
  createErrorResponse,
  createSuccessResponse,
  createValidationErrorResponse,
} from '@/shared/utils/api-response';
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

    // Use auth service for business logic
    const authService = new AuthService();
    const result = await authService.login(validatedData);

    // Create response with token
    const response = NextResponse.json(
      createSuccessResponse(result.user, 'Login successful')
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
    console.error('Login error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(createValidationErrorResponse(error.issues), {
        status: 400,
      });
    }

    if (error instanceof Error) {
      return NextResponse.json(createErrorResponse(error.message), {
        status: 401,
      });
    }

    return NextResponse.json(createErrorResponse('Internal server error'), {
      status: 500,
    });
  }
}
