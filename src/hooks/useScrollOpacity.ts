import { useState, useEffect } from 'react';

const useScrollOpacity = (threshold = 100) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const newOpacity = Math.min(currentScrollY / threshold, 1);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return opacity;
};

export default useScrollOpacity; 