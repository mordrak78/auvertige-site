import * as React from 'react';

/**
 * Composant Skip Link pour l'accessibilité WCAG 2.1 AA
 * Permet aux utilisateurs de clavier d'aller directement au contenu principal
 */
export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-poppy-500 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-poppy-600 focus:ring-offset-2"
    >
      Aller au contenu principal
    </a>
  );
};

