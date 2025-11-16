import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ConditionalMotionProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * Composant qui applique les animations Framer Motion seulement si l'utilisateur
 * ne préfère pas les animations réduites et n'est pas sur mobile
 */
export const ConditionalMotion: React.FC<ConditionalMotionProps> = ({
  children,
  fallback,
  initial,
  animate,
  transition,
  ...props
}) => {
  const { shouldAnimate } = useReducedMotion();

  if (!shouldAnimate) {
    return <div {...(props as any)}>{fallback || children}</div>;
  }

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

