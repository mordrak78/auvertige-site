import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
}

export const NavLink = ({ 
  to, 
  children, 
  className = '', 
  activeClassName = '',
  onClick 
}: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        'text-sage-800 hover:text-sage-600 transition-all duration-300 font-medium relative group text-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2 rounded-md px-2 py-1',
        isActive && 'text-sage-600',
        isActive && activeClassName,
        className
      )}
    >
      {children}
      <span 
        className={cn(
          'absolute bottom-0 left-2 h-0.5 bg-sage-600 transition-all duration-300',
          isActive ? 'w-[calc(100%-1rem)]' : 'w-0 group-hover:w-[calc(100%-1rem)]'
        )}
      />
    </Link>
  );
};

