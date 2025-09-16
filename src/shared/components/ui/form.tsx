import { cn } from '@/lib/utils';
import * as React from 'react';

/**
 * Form component with consistent styling
 * Provides a wrapper for form elements
 */
export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, ...props }, ref) => {
    return <form ref={ref} className={cn('space-y-4', className)} {...props} />;
  }
);
Form.displayName = 'Form';

/**
 * Form field wrapper component
 * Provides consistent spacing and layout for form fields
 */
export interface FormFieldProps {
  children: React.ReactNode;
  className?: string;
}

export function FormField({ children, className }: FormFieldProps) {
  return <div className={cn('space-y-2', className)}>{children}</div>;
}

/**
 * Form label component
 * Provides consistent styling for form labels
 */
export interface FormLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn('block text-sm font-medium text-gray-700', className)}
        {...props}
      />
    );
  }
);
FormLabel.displayName = 'FormLabel';

/**
 * Form error message component
 * Displays validation errors
 */
export interface FormErrorMessageProps {
  message?: string;
  className?: string;
}

export function FormErrorMessage({
  message,
  className,
}: FormErrorMessageProps) {
  if (!message) return null;

  return <p className={cn('text-sm text-red-600', className)}>{message}</p>;
}

export { Form };
