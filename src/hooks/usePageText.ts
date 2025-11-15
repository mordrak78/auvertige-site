import { useMemo } from 'react';
import { getPageText, savePageText, getPageTexts, type PageTextElement } from '@/data/pageTexts';

/**
 * Hook pour récupérer et modifier un texte de page
 */
export const usePageText = (elementId: string) => {
  const text = useMemo(() => getPageText(elementId), [elementId]);
  
  const updateText = (newText: string) => {
    return savePageText(elementId, newText);
  };
  
  return {
    text,
    updateText,
  };
};

/**
 * Hook pour récupérer tous les textes d'une page
 */
export const usePageTexts = (pageId: string) => {
  const texts = useMemo(() => getPageTexts(pageId), [pageId]);
  
  return texts;
};

