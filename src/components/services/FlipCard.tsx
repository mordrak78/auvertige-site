import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';

interface FlipCardProps {
  image: string;
  index: number;
  onImageClick?: (image: string) => void;
  autoFlip?: boolean;
}

const FlipCard: React.FC<FlipCardProps> = ({ image, index, onImageClick, autoFlip = false }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [previousImage, setPreviousImage] = useState<string | null>(null);
  const prevImageRef = useRef<string>(image);

  // Détecter le changement d'image et déclencher le flip
  useEffect(() => {
    if (autoFlip && prevImageRef.current !== image) {
      // Sauvegarder l'ancienne image
      setPreviousImage(prevImageRef.current);
      // Retourner la carte pour révéler la nouvelle image
      setIsFlipped(true);
      
      // Après l'animation, réinitialiser avec la nouvelle image visible
      const timer = setTimeout(() => {
        setIsFlipped(false);
        setPreviousImage(null);
        prevImageRef.current = image;
      }, 600); // Durée de l'animation de flip
      
      return () => clearTimeout(timer);
    } else if (autoFlip) {
      // Première fois : garder l'image visible
      setIsFlipped(false);
      prevImageRef.current = image;
    }
  }, [image, autoFlip]);

  const handleClick = () => {
    // Clic : ouvrir la lightbox directement
    if (onImageClick) {
      onImageClick(image);
    }
  };

  return (
    <motion.div
      className="relative w-full aspect-[9/16] cursor-pointer"
      style={{ perspective: '1200px' }}
      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08,
        ease: [0.34, 1.56, 0.64, 1]
      }}
      whileHover={{ scale: 1.02, z: 10 }}
      onClick={handleClick}
    >
      <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
        <motion.div
          className="relative w-full h-full"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.4, 0, 0.2, 1],
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Face avant - Image actuelle ou précédente */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{ 
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(0deg)'
            }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full group hover:shadow-2xl transition-all duration-500 border border-sage-100">
              <motion.img
                src={isFlipped && previousImage ? previousImage : image}
                alt={`Création ${index + 1}`}
                className="w-full h-full object-cover object-center"
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Face arrière - Nouvelle image */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{ 
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full group hover:shadow-2xl transition-all duration-500 border border-sage-100">
              <motion.img
                src={image}
                alt={`Création ${index + 1}`}
                className="w-full h-full object-cover object-center"
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FlipCard;

