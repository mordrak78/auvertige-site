import { useState, useEffect } from 'react';

export type SeasonalContentType = 
  | 'saint-valentin' 
  | 'fete-des-meres' 
  | 'fete-des-peres' 
  | 'toussaint';

export interface SeasonalContentState {
  'saint-valentin': boolean;
  'fete-des-meres': boolean;
  'fete-des-peres': boolean;
  'toussaint': boolean;
}

const STORAGE_KEY = 'auvertige_seasonal_content';

const defaultState: SeasonalContentState = {
  'saint-valentin': false,
  'fete-des-meres': false,
  'fete-des-peres': false,
  'toussaint': false,
};

/**
 * Hook pour gérer l'état du contenu saisonnier
 */
export const useSeasonalContent = () => {
  const [seasonalContent, setSeasonalContent] = useState<SeasonalContentState>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          return { ...defaultState, ...JSON.parse(stored) };
        } catch {
          return defaultState;
        }
      }
    }
    return defaultState;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seasonalContent));
    }
  }, [seasonalContent]);

  const toggleSeason = (season: SeasonalContentType) => {
    setSeasonalContent(prev => ({
      ...prev,
      [season]: !prev[season],
    }));
  };

  const updateSeason = (season: SeasonalContentType, enabled: boolean) => {
    setSeasonalContent(prev => ({
      ...prev,
      [season]: enabled,
    }));
  };

  const isSeasonActive = (season: SeasonalContentType): boolean => {
    return seasonalContent[season];
  };

  const resetToDefaults = () => {
    setSeasonalContent(defaultState);
  };

  return {
    seasonalContent,
    toggleSeason,
    updateSeason,
    isSeasonActive,
    resetToDefaults,
  };
};

