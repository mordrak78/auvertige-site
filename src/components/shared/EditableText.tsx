import * as React from 'react';
import { motion } from 'framer-motion';
import { usePageText } from '@/hooks/usePageText';

interface EditableTextProps {
  elementId: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'li';
  className?: string;
  children?: React.ReactNode; // Texte par défaut si pas d'ID
  animated?: boolean; // Utiliser framer-motion
  motionProps?: {
    initial?: any;
    animate?: any;
    transition?: any;
    whileInView?: any;
    viewport?: any;
  };
}

/**
 * Composant qui affiche un texte éditable depuis l'admin
 * Si elementId n'est pas fourni, affiche les children
 */
export const EditableText: React.FC<EditableTextProps> = ({
  elementId,
  as = 'p',
  className = '',
  children,
  animated = false,
  motionProps,
}) => {
  const { text } = usePageText(elementId);
  const content = text || children || '';
  
  if (animated) {
    const MotionComponent = motion[as as keyof typeof motion] as any;
    return (
      <MotionComponent
        className={className}
        {...(motionProps || {})}
      >
        {content}
      </MotionComponent>
    );
  }
  
  const Component = as;
  
  return (
    <Component className={className}>
      {content}
    </Component>
  );
};

