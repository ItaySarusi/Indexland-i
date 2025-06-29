import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  isLoading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:opacity-90 focus:ring-primary dark:bg-primary dark:text-textPrimary',
  secondary: 'bg-secondary text-white hover:opacity-90 focus:ring-secondary dark:bg-secondary dark:text-textPrimary',
  outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 dark:border-textSecondary dark:text-textPrimary dark:hover:bg-backgroundDark dark:hover:bg-opacity-50',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-gray-500 dark:text-textPrimary dark:hover:bg-backgroundDark dark:hover:bg-opacity-50'
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-xs px-2.5 py-1.5',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-6 py-3'
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  href,
  onClick,
  type = 'button',
  fullWidth = false,
  isLoading = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all cursor-pointer';
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  const content = (
    <>
      {isLoading && (
        <svg className="animate-spin -mr-1 rtl:-ml-1 rtl:mr-3 ml-3 rtl:ml-0 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </>
  );

  if (href && !disabled) {
    return (
      <Link 
        href={href} 
        className={styles} 
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {content}
    </button>
  );
} 