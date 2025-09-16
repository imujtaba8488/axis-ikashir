import { PrismaClient } from '@prisma/client';

/**
 * Base repository class with common CRUD operations
 * Provides a foundation for all repository implementations
 */
export abstract class BaseRepository<T, CreateInput, UpdateInput> {
  constructor(protected prisma: PrismaClient) {}

  /**
   * Create a new record
   */
  abstract create(data: CreateInput): Promise<T>;

  /**
   * Find a record by ID
   */
  abstract findById(id: string): Promise<T | null>;

  /**
   * Find all records with optional filtering
   */
  abstract findMany(options?: any): Promise<T[]>;

  /**
   * Update a record by ID
   */
  abstract update(id: string, data: UpdateInput): Promise<T>;

  /**
   * Delete a record by ID
   */
  abstract delete(id: string): Promise<T>;

  /**
   * Count total records
   */
  abstract count(options?: any): Promise<number>;
}
