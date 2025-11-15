import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook qui scroll automatiquement vers le haut de la page lors d'un changement de route
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
};

