import { AuthService } from '@/features/auth/services/auth-service';
import {
  createSuccessResponse,
  createUnauthorizedResponse,
} from '@/shared/utils/api-response';
import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/auth/me
 * Get current user information from JWT token
 *
 * @param request - The incoming request
 * @returns Response with user data or error
 */
export async function GET(request: NextRequest) {
  try {
    // Get token from cookies
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      return NextResponse.json(createUnauthorizedResponse(), { status: 401 });
    }

    // Verify token and get user info
    const authService = new AuthService();
    const userInfo = await authService.verifyToken(token);

    return NextResponse.json(
      createSuccessResponse({ user: userInfo }, 'User authenticated')
    );
  } catch (error) {
    console.error('Auth check error:', error);

    return NextResponse.json(createUnauthorizedResponse(), { status: 401 });
  }
}
