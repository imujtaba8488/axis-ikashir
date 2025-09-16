/**
 * Standardized API response utilities
 * Provides consistent response formatting across the application
 */

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
  };
}

export interface ApiError {
  success: false;
  error: string;
  details?: any;
  code?: string;
}

/**
 * Create a successful API response
 */
export function createSuccessResponse<T>(
  data: T,
  message?: string,
  meta?: ApiResponse<T>['meta']
): ApiResponse<T> {
  return {
    success: true,
    data,
    message,
    meta,
  };
}

/**
 * Create an error API response
 */
export function createErrorResponse(
  error: string,
  details?: any,
  code?: string
): ApiError {
  return {
    success: false,
    error,
    details,
    code,
  };
}

/**
 * Create a validation error response
 */
export function createValidationErrorResponse(details: any): ApiError {
  return {
    success: false,
    error: 'Validation error',
    details,
    code: 'VALIDATION_ERROR',
  };
}

/**
 * Create a not found error response
 */
export function createNotFoundResponse(
  resource: string = 'Resource'
): ApiError {
  return {
    success: false,
    error: `${resource} not found`,
    code: 'NOT_FOUND',
  };
}

/**
 * Create an unauthorized error response
 */
export function createUnauthorizedResponse(): ApiError {
  return {
    success: false,
    error: 'Unauthorized',
    code: 'UNAUTHORIZED',
  };
}

/**
 * Create a forbidden error response
 */
export function createForbiddenResponse(): ApiError {
  return {
    success: false,
    error: 'Forbidden',
    code: 'FORBIDDEN',
  };
}
