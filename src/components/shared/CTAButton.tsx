import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export const CTAButton = ({ 
  to, 
  children, 
  variant = 'primary',
  className,
  onClick 
}: CTAButtonProps) => {
  const baseClasses = 'font-bold py-3 px-6 rounded-full shadow transition text-lg min-h-[44px] flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-poppy-500 hover:bg-poppy-600 text-white',
    secondary: 'bg-sage-600 hover:bg-sage-700 text-white',
    outline: 'bg-white border border-sage-200 text-sage-700 hover:bg-sage-50',
  };

  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {children}
    </Link>
  );
};

