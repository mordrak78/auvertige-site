import { useEffect, useState } from 'react';

/**
 * Hook pour optimiser le chargement des images et réduire le CLS
 */
export const useImagePreloader = () => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set());

  const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (loadedImages.has(src)) {
        resolve();
        return;
      }

      if (loadingImages.has(src)) {
        // Attendre que l'image en cours de chargement se termine
        const checkLoaded = () => {
          if (loadedImages.has(src)) {
            resolve();
          } else {
            setTimeout(checkLoaded, 50);
          }
        };
        checkLoaded();
        return;
      }

      setLoadingImages(prev => new Set(prev).add(src));

      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(src));
        setLoadingImages(prev => {
          const newSet = new Set(prev);
          newSet.delete(src);
          return newSet;
        });
        resolve();
      };
      img.onerror = () => {
        setLoadingImages(prev => {
          const newSet = new Set(prev);
          newSet.delete(src);
          return newSet;
        });
        reject(new Error(`Failed to load image: ${src}`));
      };
      img.src = src;
    });
  };

  const preloadImages = async (srcs: string[]): Promise<void[]> => {
    return Promise.allSettled(srcs.map(src => preloadImage(src)))
      .then(results => results.map(result => 
        result.status === 'fulfilled' ? Promise.resolve() : Promise.reject(result.reason)
      ));
  };

  const isImageLoaded = (src: string): boolean => {
    return loadedImages.has(src);
  };

  const isImageLoading = (src: string): boolean => {
    return loadingImages.has(src);
  };

  return {
    preloadImage,
    preloadImages,
    isImageLoaded,
    isImageLoading,
    loadedImages,
    loadingImages,
  };
};

/**
 * Hook pour optimiser les animations et réduire le CLS
 */
export const useOptimizedAnimation = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const getAnimationClass = (baseClass: string, reducedClass?: string) => {
    return isReducedMotion ? (reducedClass || '') : baseClass;
  };

  const shouldAnimate = !isReducedMotion;

  return {
    isReducedMotion,
    getAnimationClass,
    shouldAnimate,
  };
};
