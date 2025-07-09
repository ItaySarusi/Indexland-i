import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
}

export default function PageContainer({ children, className = '', glass = false }: PageContainerProps) {
  return (
    <main className={`min-h-screen bg-backgroundLight dark:bg-backgroundDark transition-colors duration-200 overflow-x-hidden ${className} ${glass ? 'relative' : ''}`}>
      {glass && (
        <>
          {/* Glassmorphic, animated, layered background */}
          <div className="pointer-events-none absolute inset-0 z-0">
            {/* Blurred gradient layers */}
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-3xl opacity-60 animate-float-slow" />
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-secondary/30 to-primary/10 rounded-full blur-2xl opacity-40 animate-float-medium" />
            {/* Floating glass shapes */}
            <div className="absolute bottom-0 left-1/3 w-96 h-40 bg-white/20 dark:bg-backgroundDark/30 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 dark:border-white/10 opacity-60 animate-float-fast" />
          </div>
        </>
      )}
      <div className="container relative z-10">
        {children}
      </div>
    </main>
  );
} 