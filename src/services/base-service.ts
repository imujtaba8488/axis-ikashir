/**
 * Base service class for business logic
 * Provides common patterns for service implementations
 */
export abstract class BaseService {
  /**
   * Handle service errors with consistent formatting
   */
  protected handleError(error: unknown, context: string): never {
    console.error(`[${context}] Error:`, error);

    if (error instanceof Error) {
      throw new Error(`${context}: ${error.message}`);
    }

    throw new Error(`${context}: Unknown error occurred`);
  }

  /**
   * Validate required fields
   */
  protected validateRequired<T extends Record<string, any>>(
    data: T,
    requiredFields: (keyof T)[]
  ): void {
    for (const field of requiredFields) {
      if (
        data[field] === undefined ||
        data[field] === null ||
        data[field] === ''
      ) {
        throw new Error(`Field '${String(field)}' is required`);
      }
    }
  }
}
