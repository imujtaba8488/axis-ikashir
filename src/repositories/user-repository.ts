import { prisma } from '@/lib/database/prisma';
import { BaseRepository } from './base-repository';

// Define types until Prisma client is generated
interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}

interface UpdateUserInput {
  name?: string;
  email?: string;
  password?: string;
}

interface UserWhereInput {
  id?: string;
  email?: string;
}

interface UserOrderByInput {
  createdAt?: 'asc' | 'desc';
  updatedAt?: 'asc' | 'desc';
  name?: 'asc' | 'desc';
}

/**
 * User repository for database operations
 * Implements the repository pattern for user-related data access
 */
export class UserRepository extends BaseRepository<
  User,
  CreateUserInput,
  UpdateUserInput
> {
  constructor() {
    super(prisma);
  }

  /**
   * Create a new user
   */
  async create(data: CreateUserInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  /**
   * Find user by ID
   */
  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  /**
   * Find user by email
   */
  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  /**
   * Find all users with pagination and filtering
   */
  async findMany(options?: {
    skip?: number;
    take?: number;
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
  }): Promise<User[]> {
    return this.prisma.user.findMany({
      skip: options?.skip,
      take: options?.take,
      where: options?.where,
      orderBy: options?.orderBy,
    });
  }

  /**
   * Update user by ID
   */
  async update(id: string, data: UpdateUserInput): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  /**
   * Delete user by ID
   */
  async delete(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  /**
   * Count total users
   */
  async count(options?: { where?: UserWhereInput }): Promise<number> {
    return this.prisma.user.count({
      where: options?.where,
    });
  }

  /**
   * Check if user exists by email
   */
  async existsByEmail(email: string): Promise<boolean> {
    const user = await this.findByEmail(email);
    return user !== null;
  }
}
