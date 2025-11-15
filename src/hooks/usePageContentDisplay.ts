import { useState, useEffect } from 'react';
import { getPageContent, type PageContent } from '@/utils/contentStorage';

/**
 * Hook pour récupérer le contenu d'une page avec fallback sur les valeurs par défaut
 */
export const usePageContentDisplay = (
  pageId: string,
  defaultContent?: Partial<PageContent>
): PageContent | null => {
  const [content, setContent] = useState<PageContent | null>(null);

  useEffect(() => {
    // Récupérer le contenu depuis localStorage
    const storedContent = getPageContent(pageId);

    if (storedContent && (storedContent.title || storedContent.paragraphs?.length > 0)) {
      // Utiliser le contenu stocké s'il existe et n'est pas vide
      setContent(storedContent);
    } else if (defaultContent) {
      // Utiliser le contenu par défaut fourni
      setContent({
        pageId,
        title: defaultContent.title || '',
        paragraphs: defaultContent.paragraphs || [],
        images: defaultContent.images || [],
        metadata: defaultContent.metadata,
      });
    } else {
      setContent(null);
    }

    // Écouter les changements dans le localStorage
    const handleStorageChange = () => {
      const updated = getPageContent(pageId);
      if (updated) {
        setContent(updated);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    // Vérifier périodiquement pour les changements dans le même onglet
    const interval = setInterval(() => {
      const updated = getPageContent(pageId);
      if (updated && updated !== storedContent) {
        setContent(updated);
      }
    }, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [pageId]); // Retirer defaultContent des dépendances pour éviter les re-renders infinis

  return content;
};

