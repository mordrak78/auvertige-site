import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface Redirect301Props {
  to: string;
}

/**
 * Composant de redirection 301 (permanente)
 * Utilise Navigate avec replace pour simuler une redirection permanente
 * En production, configurez également les redirections côté serveur (.htaccess, nginx, etc.)
 * Gère les ancres (#) dans les URLs de destination
 */
export const Redirect301: React.FC<Redirect301Props> = ({ to }) => {
  const location = useLocation();

  useEffect(() => {
    // Log pour le tracking
    console.log(`301 Redirect: ${location.pathname} → ${to}`);
    
    // Si possible, envoyer un événement analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_redirect', {
        from: location.pathname,
        to: to,
        type: '301'
      });
    }

    // Si l'URL de destination contient une ancre, scroll vers l'ancre après navigation
    if (to.includes('#')) {
      const [path, anchor] = to.split('#');
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.pathname, to]);

  // Utilise Navigate avec replace pour simuler une redirection permanente
  return <Navigate to={to} replace />;
};

