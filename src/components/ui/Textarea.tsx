import React, { forwardRef } from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  containerClassName?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  error,
  helperText,
  fullWidth = false,
  containerClassName = '',
  className = '',
  id,
  ...props
}, ref) => {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${containerClassName}`}>
      {label && (
        <label htmlFor={textareaId} className="block text-sm font-medium text-gray-700 dark:text-textPrimary mb-1 text-start rtl:text-right">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        className={`
          block rounded-md border-gray-300 dark:border-gray-600 shadow-sm 
          focus:border-primary-500 focus:ring-primary-500 
          bg-white dark:bg-backgroundDark text-gray-900 dark:text-textPrimary
          placeholder-gray-400 dark:placeholder-gray-500
          text-start rtl:text-right
          resize-vertical
          ${error ? 'border-red-300 text-red-900 placeholder-red-300 dark:border-red-500 dark:text-red-400' : ''} 
          ${fullWidth ? 'w-full' : ''} 
          ${className}
        `}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400 text-start rtl:text-right" id={`${textareaId}-error`}>
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 text-start rtl:text-right" id={`${textareaId}-helper`}>
          {helperText}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea; 