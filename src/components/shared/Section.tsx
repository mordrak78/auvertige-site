import { cn } from '@/lib/utils';
import * as React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'default' | 'light' | 'dark' | 'gradient';
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, variant = 'default', ...props }, ref) => {
    const variantClasses = {
      default: 'bg-white',
      light: 'bg-cream-50',
      dark: 'bg-sage-800 text-white',
      gradient: 'bg-gradient-to-br from-cream-50 to-white',
    };

    return (
      <section
        ref={ref}
        className={cn('py-16 md:py-24', variantClasses[variant], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = 'Section';

