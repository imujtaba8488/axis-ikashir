import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

/**
 * Middleware for handling authentication and route protection
 * Runs before every request to check authentication status
 *
 * @param request - The incoming request
 * @returns Response with potential redirects or continues to the route
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public routes that don't require authentication
  // const publicRoutes = [
  //   '/',
  //   '/auth/login',
  //   '/auth/register',
  //   '/auth/forgot-password',
  //   '/auth/reset-password',
  //   '/about',
  //   '/contact',
  // ];

  // Protected routes that require authentication
  const protectedRoutes = ['/dashboard', '/admin', '/profile', '/settings'];

  // API routes that require authentication
  const protectedApiRoutes = ['/api/users', '/api/profile', '/api/admin'];

  // Check if the current path is public
  // const isPublicRoute = publicRoutes.some(
  //   route => pathname === route || pathname.startsWith(route + '/')
  // );

  // Check if the current path is protected
  const isProtectedRoute = protectedRoutes.some(route =>
    pathname.startsWith(route)
  );

  // Check if the current path is a protected API route
  const isProtectedApiRoute = protectedApiRoutes.some(route =>
    pathname.startsWith(route)
  );

  // Get the token from cookies (you can also check headers or other sources)
  const token = request.cookies.get('auth-token')?.value;

  // If accessing a protected route without authentication, redirect to login
  if ((isProtectedRoute || isProtectedApiRoute) && !token) {
    if (isProtectedApiRoute) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const loginUrl = new URL('/auth/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If accessing auth pages while authenticated, redirect to dashboard
  if (pathname.startsWith('/auth/') && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Continue to the requested route
  return NextResponse.next();
}

/**
 * Configuration for which routes the middleware should run on
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
