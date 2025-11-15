import * as React from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * Composant Image optimisé pour les performances
 * Utilise lazy loading par défaut sauf si priority est true
 */
export const OptimizedImage = React.forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ src, alt, className, priority = false, sizes, ...props }, ref) => {
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn('object-cover object-center', className)}
        loading={priority ? 'eager' : 'lazy'}
        fetchpriority={priority ? 'high' : 'auto'}
        decoding="async"
        sizes={sizes}
        {...props}
      />
    );
  }
);
OptimizedImage.displayName = 'OptimizedImage';

