import { useCallback, useRef } from 'react';

/**
 * Hook pour optimiser les interactions et améliorer le FID
 * Utilise requestIdleCallback pour différer les tâches non critiques
 */
export const useOptimizedInteraction = () => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const debounce = useCallback((fn: Function, delay: number) => {
    return (...args: any[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => fn(...args), delay);
    };
  }, []);

  const throttle = useCallback((fn: Function, delay: number) => {
    let lastCall = 0;
    return (...args: any[]) => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        fn(...args);
      }
    };
  }, []);

  const scheduleIdleTask = useCallback((task: Function) => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => task());
    } else {
      setTimeout(() => task(), 0);
    }
  }, []);

  const scheduleTask = useCallback((task: Function, priority: 'high' | 'low' = 'low') => {
    if (priority === 'high') {
      requestAnimationFrame(() => task());
    } else {
      scheduleIdleTask(task);
    }
  }, [scheduleIdleTask]);

  return {
    debounce,
    throttle,
    scheduleIdleTask,
    scheduleTask,
  };
};
