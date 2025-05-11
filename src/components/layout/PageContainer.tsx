import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <main className={`min-h-screen pt-24 pb-16 bg-backgroundLight dark:bg-backgroundDark transition-colors duration-200 ${className}`}>
      <div className="container">
        {children}
      </div>
    </main>
  );
} 