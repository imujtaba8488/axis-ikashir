/**
 * User type definition
 * This will be replaced with Prisma-generated types once the database schema is set up
 */
export interface User {
  id: string;
  email: string;
  name: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Extended user type with additional properties
 */
export interface ExtendedUser extends User {
  // Add any additional user properties here
}

/**
 * API Response wrapper type
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

/**
 * Form field error type
 */
export interface FormError {
  field: string;
  message: string;
}

/**
 * Component variant props
 */
export interface VariantProps {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

/**
 * Loading state type
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

/**
 * Theme type
 */
export type Theme = 'light' | 'dark' | 'system';

/**
 * Navigation item type
 */
export interface NavItem {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  disabled?: boolean;
  external?: boolean;
}

/**
 * Sidebar item type
 */
export interface SidebarItem extends NavItem {
  items?: SidebarItem[];
}

/**
 * Table column type
 */
export interface TableColumn<T> {
  key: keyof T;
  title: string;
  sortable?: boolean;
  render?: (value: any, record: T) => React.ReactNode;
}

/**
 * Search filters type
 */
export interface SearchFilters {
  query?: string;
  category?: string;
  dateFrom?: string;
  dateTo?: string;
  status?: string;
}
