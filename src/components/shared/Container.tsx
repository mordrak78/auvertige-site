import { cn } from '@/lib/utils';
import * as React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, size = 'full', ...props }, ref) => {
    const sizeClasses = {
      sm: 'max-w-3xl',
      md: 'max-w-5xl',
      lg: 'max-w-7xl',
      xl: 'max-w-[1400px]',
      full: 'max-w-full',
    };

    return (
      <div
        ref={ref}
        className={cn('container mx-auto px-4', sizeClasses[size], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = 'Container';

