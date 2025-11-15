/**
 * Configuration des optimisations Core Web Vitals
 * Ce fichier contient les paramètres et utilitaires pour optimiser les performances
 */

export const WEB_VITALS_CONFIG = {
  // Seuils de performance (en millisecondes)
  thresholds: {
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    fcp: { good: 1800, poor: 3000 },
    ttfb: { good: 800, poor: 1800 },
  },
  
  // Configuration des images
  imageOptimization: {
    lazyLoadOffset: 100, // pixels avant le viewport pour commencer le chargement
    placeholderBlur: true,
    webpSupport: true,
    avifSupport: false, // Pas encore largement supporté
  },
  
  // Configuration des animations
  animationConfig: {
    respectReducedMotion: true,
    defaultDuration: 300,
    easingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Configuration du code splitting
  codeSplitting: {
    vendorChunks: ['react', 'react-dom'],
    uiChunks: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
    iconChunks: ['lucide-react'],
  },
};

/**
 * Utilitaires pour les optimisations de performance
 */
export const performanceUtils = {
  /**
   * Détermine si une métrique est dans la plage "good"
   */
  isGoodScore: (metric: string, value: number): boolean => {
    const threshold = WEB_VITALS_CONFIG.thresholds[metric as keyof typeof WEB_VITALS_CONFIG.thresholds];
    return threshold ? value <= threshold.good : true;
  },

  /**
   * Détermine si une métrique est dans la plage "needs improvement"
   */
  needsImprovement: (metric: string, value: number): boolean => {
    const threshold = WEB_VITALS_CONFIG.thresholds[metric as keyof typeof WEB_VITALS_CONFIG.thresholds];
    return threshold ? value > threshold.good && value <= threshold.poor : false;
  },

  /**
   * Détermine si une métrique est dans la plage "poor"
   */
  isPoorScore: (metric: string, value: number): boolean => {
    const threshold = WEB_VITALS_CONFIG.thresholds[metric as keyof typeof WEB_VITALS_CONFIG.thresholds];
    return threshold ? value > threshold.poor : false;
  },

  /**
   * Génère un attribut style pour éviter le CLS
   */
  getAspectRatioStyle: (width: number, height: number): React.CSSProperties => ({
    aspectRatio: `${width}/${height}`,
    width: '100%',
    height: 'auto',
  }),

  /**
   * Génère des attributs optimisés pour les images
   */
  getOptimizedImageProps: (src: string, alt: string, width: number, height: number) => ({
    src,
    alt,
    width,
    height,
    loading: 'lazy' as const,
    decoding: 'async' as const,
    style: performanceUtils.getAspectRatioStyle(width, height),
  }),
};

/**
 * Configuration des preloads critiques
 */
export const CRITICAL_RESOURCES = [
  '/images/hero/facade1.jpg', // Image hero
  '/images/logo/logo9.png', // Logo principal
];

/**
 * Configuration des fonts critiques
 */
export const CRITICAL_FONTS = [
  'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap',
];

/**
 * Scripts de monitoring des performances
 */
export const PERFORMANCE_MONITORING = {
  // Configuration pour Google Analytics 4
  ga4Config: {
    measurementId: 'G-XXXXXXXXXX', // À remplacer par votre ID
    customMap: {
      lcp: 'custom_metric_1',
      fid: 'custom_metric_2',
      cls: 'custom_metric_3',
      fcp: 'custom_metric_4',
      ttfb: 'custom_metric_5',
    },
  },
  
  // Configuration pour Vercel Analytics
  vercelAnalytics: {
    enabled: true,
    debug: process.env.NODE_ENV === 'development',
  },
};
