import { Link, LinkProps } from 'react-router-dom';

/**
 * Composant Link qui scroll automatiquement vers le haut de la page lors de la navigation
 */
export const ScrollToTopLink: React.FC<LinkProps> = ({ to, children, ...props }) => {
  const handleClick = () => {
    // Scroll vers le haut après un court délai pour laisser le temps à la navigation de se faire
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

