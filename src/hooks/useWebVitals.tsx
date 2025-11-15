import { useEffect, useState } from 'react';

interface WebVitalsMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

/**
 * Hook pour mesurer et surveiller les Core Web Vitals
 */
export const useWebVitals = () => {
  const [metrics, setMetrics] = useState<WebVitalsMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
  });

  useEffect(() => {
    // Fonction pour envoyer les métriques à un service d'analytics
    const sendToAnalytics = (metric: any) => {
      // Ici vous pouvez envoyer vers Google Analytics, Vercel Analytics, etc.
      console.log('Web Vital:', metric.name, metric.value);
      
      // Mise à jour locale des métriques
      setMetrics(prev => ({
        ...prev,
        [metric.name.toLowerCase()]: metric.value,
      }));
    };

    // Import dynamique de web-vitals pour éviter de bloquer le chargement initial
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(sendToAnalytics);
      getFID(sendToAnalytics);
      getFCP(sendToAnalytics);
      getLCP(sendToAnalytics);
      getTTFB(sendToAnalytics);
    }).catch(() => {
      // Fallback si web-vitals n'est pas disponible
      console.warn('web-vitals library not available');
    });

    // Mesure manuelle du TTFB si possible
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart;
        setMetrics(prev => ({ ...prev, ttfb }));
      }
    }
  }, []);

  const getScore = (metric: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
    const thresholds: Record<string, { good: number; poor: number }> = {
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      fcp: { good: 1800, poor: 3000 },
      ttfb: { good: 800, poor: 1800 },
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'good';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  };

  const getOverallScore = (): 'good' | 'needs-improvement' | 'poor' => {
    const scores = Object.entries(metrics)
      .filter(([_, value]) => value !== null)
      .map(([metric, value]) => getScore(metric, value!));

    if (scores.some(score => score === 'poor')) return 'poor';
    if (scores.some(score => score === 'needs-improvement')) return 'needs-improvement';
    return 'good';
  };

  return {
    metrics,
    getScore,
    getOverallScore,
    isLoaded: Object.values(metrics).some(value => value !== null),
  };
};

/**
 * Composant pour afficher les métriques de performance (développement uniquement)
 */
export const WebVitalsDisplay = () => {
  const { metrics, getScore, getOverallScore, isLoaded } = useWebVitals();

  // Ne s'affiche qu'en développement
  if (process.env.NODE_ENV !== 'development' || !isLoaded) {
    return null;
  }

  const overallScore = getOverallScore();
  const scoreColor = {
    good: 'text-green-600',
    'needs-improvement': 'text-yellow-600',
    poor: 'text-red-600',
  }[overallScore];

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg p-4 shadow-lg z-50 max-w-xs">
      <h3 className="font-semibold text-sm mb-2">Core Web Vitals</h3>
      <div className="space-y-1 text-xs">
        {Object.entries(metrics).map(([metric, value]) => {
          if (value === null) return null;
          const score = getScore(metric, value);
          const color = {
            good: 'text-green-600',
            'needs-improvement': 'text-yellow-600',
            poor: 'text-red-600',
          }[score];

          return (
            <div key={metric} className="flex justify-between">
              <span className="font-medium">{metric.toUpperCase()}:</span>
              <span className={color}>
                {metric === 'cls' ? value.toFixed(3) : `${Math.round(value)}ms`}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-2 pt-2 border-t border-gray-200">
        <div className="flex justify-between text-xs font-semibold">
          <span>Overall:</span>
          <span className={scoreColor}>{overallScore}</span>
        </div>
      </div>
    </div>
  );
};
