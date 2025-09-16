# 🏗️ Project Architecture

This document outlines the scalable, feature-based architecture implemented in the Axis Ikashir project.

## 📁 Directory Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Route groups
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (dashboard)/              # Protected routes
│   │   └── dashboard/page.tsx
│   ├── api/                      # Backend API routes
│   │   ├── auth/
│   │   │   ├── login/route.ts
│   │   │   ├── register/route.ts
│   │   │   ├── logout/route.ts
│   │   │   └── me/route.ts
│   │   └── users/
│   └── globals.css
│
├── features/                     # Feature-based modules
│   ├── auth/
│   │   ├── components/
│   │   │   ├── login-form.tsx
│   │   │   └── register-form.tsx
│   │   ├── hooks/
│   │   │   ├── use-auth.ts
│   │   │   ├── use-login.ts
│   │   │   └── use-register.ts
│   │   ├── services/
│   │   │   └── auth-service.ts
│   │   ├── types/
│   │   │   └── auth.types.ts
│   │   └── contexts/
│   │       └── auth-context.tsx
│   └── dashboard/
│       ├── components/
│       ├── hooks/
│       └── services/
│
├── shared/                       # Shared resources
│   ├── components/
│   │   └── ui/
│   │       └── form.tsx
│   ├── hooks/
│   ├── utils/
│   │   └── api-response.ts
│   └── types/
│
├── lib/                          # Core utilities
│   ├── auth/
│   ├── database/
│   │   ├── prisma.ts
│   │   └── schema.prisma
│   └── validation/
│
├── repositories/                 # Data access layer
│   ├── base-repository.ts
│   └── user-repository.ts
│
├── services/                     # Business logic layer
│   └── base-service.ts
│
├── components/                   # Legacy UI components
│   ├── ui/
│   ├── layout/
│   └── forms/
│
├── hooks/                       # Legacy custom hooks
├── types/                       # Legacy type definitions
├── constants/                   # App constants
├── utils/                       # Legacy utility functions
└── middleware.ts                # Next.js middleware
```

## 🏛️ Architecture Layers

### 1. **Presentation Layer** (`app/`)

- **Pages**: Next.js App Router pages
- **API Routes**: Backend endpoints
- **Layouts**: Global and nested layouts

### 2. **Feature Layer** (`features/`)

- **Components**: Feature-specific UI components
- **Hooks**: Custom React hooks for feature logic
- **Services**: Business logic for each feature
- **Types**: TypeScript definitions for features
- **Contexts**: React context providers

### 3. **Data Access Layer** (`repositories/`)

- **Base Repository**: Common CRUD operations
- **Feature Repositories**: Specific data access patterns
- **Database Abstraction**: Prisma ORM integration

### 4. **Business Logic Layer** (`services/`)

- **Base Service**: Common business logic patterns
- **Feature Services**: Specific business rules
- **Validation**: Input validation and sanitization

### 5. **Shared Layer** (`shared/`)

- **Components**: Reusable UI components
- **Hooks**: Shared custom hooks
- **Utils**: Common utility functions
- **Types**: Shared type definitions

## 🔧 Key Patterns

### Repository Pattern

```typescript
// Base repository with common operations
export abstract class BaseRepository<T, CreateInput, UpdateInput> {
  abstract create(data: CreateInput): Promise<T>;
  abstract findById(id: string): Promise<T | null>;
  abstract findMany(options?: any): Promise<T[]>;
  abstract update(id: string, data: UpdateInput): Promise<T>;
  abstract delete(id: string): Promise<T>;
}

// Feature-specific repository
export class UserRepository extends BaseRepository<
  User,
  CreateUserInput,
  UpdateUserInput
> {
  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
```

### Service Layer Pattern

```typescript
// Base service with common patterns
export abstract class BaseService {
  protected handleError(error: unknown, context: string): never {
    // Consistent error handling
  }

  protected validateRequired<T>(data: T, requiredFields: (keyof T)[]): void {
    // Input validation
  }
}

// Feature-specific service
export class AuthService extends BaseService {
  async login(data: LoginData): Promise<AuthResult> {
    // Business logic for authentication
  }
}
```

### Custom Hooks Pattern

```typescript
// Feature-specific hooks
export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (data: LoginData) => {
    // Login logic with state management
  };

  return { login, isLoading, error };
}
```

### API Response Pattern

```typescript
// Standardized API responses
export function createSuccessResponse<T>(
  data: T,
  message?: string
): ApiResponse<T> {
  return { success: true, data, message };
}

export function createErrorResponse(error: string, details?: any): ApiError {
  return { success: false, error, details };
}
```

## 🚀 Benefits

### Scalability

- **Feature-based organization**: Easy to add new features
- **Separation of concerns**: Clear boundaries between layers
- **Reusable components**: Shared utilities and components

### Maintainability

- **Type safety**: Full TypeScript coverage
- **Consistent patterns**: Standardized code structure
- **Error handling**: Centralized error management

### Testability

- **Dependency injection**: Easy to mock dependencies
- **Isolated components**: Test features independently
- **Service layer**: Test business logic separately

### Developer Experience

- **Clear structure**: Easy to find and modify code
- **IntelliSense**: Full TypeScript support
- **Hot reload**: Fast development iteration

## 🔄 Data Flow

```
User Action → Component → Hook → Service → Repository → Database
     ↓
API Route → Service → Repository → Database
     ↓
Response → Hook → Component → UI Update
```

## 📋 Next Steps

1. **Add more features**: Dashboard, user management, etc.
2. **Implement testing**: Unit tests for services and components
3. **Add database**: Set up PostgreSQL with Prisma
4. **Deploy**: Configure production environment
5. **Monitor**: Add logging and error tracking

## 🎯 Best Practices

1. **Keep features isolated**: Don't import between features
2. **Use shared resources**: Import from `shared/` directory
3. **Follow naming conventions**: Consistent file and function names
4. **Document components**: Add JSDoc comments
5. **Handle errors gracefully**: Use error boundaries and try-catch
6. **Validate inputs**: Use Zod schemas for validation
7. **Type everything**: Avoid `any` types
8. **Test business logic**: Focus on service layer testing

This architecture provides a solid foundation for building scalable, maintainable applications with Next.js.
