import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface BrandNameProps {
  className?: string;
  showPoppy?: boolean;
}

export const BrandName = ({ className, showPoppy = true }: BrandNameProps) => {
  return (
    <span className={cn("inline-flex items-center font-dancing tracking-wide", className)}>
      <span>au</span>
      <span className="mx-1 relative inline-flex items-center">
        <span>ver&apos;</span>
        {showPoppy && (
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-0.5 -mt-1"
          >
            {/* Coquelicot stylisé rouge comme demandé pour la marque */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-poppy-500 fill-current"
            >
              <path d="M12 2C9.5 2 7 4 7 7C7 9 9 11 12 11C15 11 17 9 17 7C17 4 14.5 2 12 2Z" fillOpacity="0.8" />
              <path d="M12 11C11.5 13 10 16 8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M12 2C13.5 2 15 3 15 5C15 6.5 13.5 8 12 8C10.5 8 9 6.5 9 5C9 3 10.5 2 12 2Z" fill="black" fillOpacity="0.2" />
            </svg>
          </motion.span>
        )}
        <span>tige</span>
      </span>
    </span>
  );
};
