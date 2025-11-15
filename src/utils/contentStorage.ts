/**
 * Système de gestion de contenu éditable sans serveur
 * Utilise localStorage pour l'édition et permet l'export/import JSON
 */

export interface PageContent {
  pageId: string;
  title: string;
  paragraphs: string[];
  images: { key: string; url: string; alt?: string }[];
  metadata?: {
    description?: string;
    lastModified?: string;
  };
}

export interface FeaturedBouquet {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  order: number;
}

export interface ContentData {
  pages: Record<string, PageContent>;
  featuredBouquets: FeaturedBouquet[];
  version: string;
  lastExport?: string;
}

const STORAGE_KEYS = {
  PAGE_CONTENT: 'auvertige_page_content',
  FEATURED_BOUQUETS: 'auvertige_featured_bouquets',
  CONTENT_DATA: 'auvertige_content_data',
} as const;

/**
 * Initialise le stockage avec des valeurs par défaut si vide
 */
export const initializeContentStorage = (): void => {
  const existing = localStorage.getItem(STORAGE_KEYS.CONTENT_DATA);
  if (!existing) {
    const defaultData: ContentData = {
      pages: {},
      featuredBouquets: [],
      version: '1.0.0',
    };
    localStorage.setItem(STORAGE_KEYS.CONTENT_DATA, JSON.stringify(defaultData));
  }
};

/**
 * Récupère le contenu d'une page
 */
export const getPageContent = (pageId: string): PageContent | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CONTENT_DATA);
    if (!data) {
      initializeContentStorage();
      return null;
    }
    const contentData: ContentData = JSON.parse(data);
    return contentData.pages[pageId] || null;
  } catch (error) {
    console.error('Erreur lors de la récupération du contenu:', error);
    return null;
  }
};

/**
 * Sauvegarde le contenu d'une page
 */
export const savePageContent = (pageId: string, content: Partial<PageContent>): boolean => {
  try {
    let contentData: ContentData;
    const existing = localStorage.getItem(STORAGE_KEYS.CONTENT_DATA);
    
    if (existing) {
      contentData = JSON.parse(existing);
    } else {
      contentData = {
        pages: {},
        featuredBouquets: [],
        version: '1.0.0',
      };
    }

    const existingPage = contentData.pages[pageId] || {
      pageId,
      title: '',
      paragraphs: [],
      images: [],
    };

    const wasNew = !existingPage.title && !existingPage.paragraphs?.length;
    
    contentData.pages[pageId] = {
      ...existingPage,
      ...content,
      metadata: {
        ...existingPage.metadata,
        ...content.metadata,
        lastModified: new Date().toISOString(),
      },
    };

    localStorage.setItem(STORAGE_KEYS.CONTENT_DATA, JSON.stringify(contentData));
    
    // Ajouter à l'historique
    if (typeof window !== 'undefined') {
      try {
        import('./contentHistory').then(({ addHistoryEntry }) => {
          const fieldsChanged = Object.keys(content).filter(key => key !== 'metadata');
          fieldsChanged.forEach(field => {
            addHistoryEntry({
              type: 'page',
              pageId,
              action: wasNew ? 'created' : 'updated',
              field,
              description: `Page "${pageId}" : ${field} ${wasNew ? 'créé' : 'modifié'}`,
            });
          });
        });
      } catch (error) {
        // Ignorer les erreurs d'import en mode SSR
      }
    }
    
    return true;
  } catch (error) {
    console.error('Erreur lors de la sauvegarde du contenu:', error);
    return false;
  }
};

/**
 * Récupère tous les bouquets phares
 */
export const getFeaturedBouquets = (): FeaturedBouquet[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CONTENT_DATA);
    if (!data) {
      initializeContentStorage();
      return [];
    }
    const contentData: ContentData = JSON.parse(data);
    return contentData.featuredBouquets.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Erreur lors de la récupération des bouquets phares:', error);
    return [];
  }
};

/**
 * Sauvegarde les bouquets phares
 */
export const saveFeaturedBouquets = (bouquets: FeaturedBouquet[]): boolean => {
  try {
    let contentData: ContentData;
    const existing = localStorage.getItem(STORAGE_KEYS.CONTENT_DATA);
    
    if (existing) {
      contentData = JSON.parse(existing);
    } else {
      contentData = {
        pages: {},
        featuredBouquets: [],
        version: '1.0.0',
      };
    }

    contentData.featuredBouquets = bouquets;
    localStorage.setItem(STORAGE_KEYS.CONTENT_DATA, JSON.stringify(contentData));
    
    // Ajouter à l'historique
    if (typeof window !== 'undefined') {
      try {
        import('./contentHistory').then(({ addHistoryEntry }) => {
          addHistoryEntry({
            type: 'bouquet',
            action: 'updated',
            description: `${bouquets.length} bouquet(s) phare(s) mis à jour`,
          });
        });
      } catch (error) {
        // Ignorer les erreurs d'import en mode SSR
      }
    }
    
    return true;
  } catch (error) {
    console.error('Erreur lors de la sauvegarde des bouquets phares:', error);
    return false;
  }
};

/**
 * Ajoute un nouveau bouquet phare
 */
export const addFeaturedBouquet = (bouquet: Omit<FeaturedBouquet, 'id' | 'order'>): FeaturedBouquet | null => {
  try {
    const existing = getFeaturedBouquets();
    const newBouquet: FeaturedBouquet = {
      ...bouquet,
      id: `bouquet-${Date.now()}`,
      order: existing.length,
    };
    
    const updated = [...existing, newBouquet];
    if (saveFeaturedBouquets(updated)) {
      return newBouquet;
    }
    return null;
  } catch (error) {
    console.error('Erreur lors de l\'ajout du bouquet:', error);
    return null;
  }
};

/**
 * Met à jour un bouquet phare existant
 */
export const updateFeaturedBouquet = (id: string, updates: Partial<FeaturedBouquet>): boolean => {
  try {
    const existing = getFeaturedBouquets();
    const index = existing.findIndex(b => b.id === id);
    
    if (index === -1) return false;
    
    existing[index] = { ...existing[index], ...updates };
    return saveFeaturedBouquets(existing);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du bouquet:', error);
    return false;
  }
};

/**
 * Supprime un bouquet phare
 */
export const deleteFeaturedBouquet = (id: string): boolean => {
  try {
    const existing = getFeaturedBouquets();
    const filtered = existing.filter(b => b.id !== id);
    return saveFeaturedBouquets(filtered);
  } catch (error) {
    console.error('Erreur lors de la suppression du bouquet:', error);
    return false;
  }
};

/**
 * Réorganise l'ordre des bouquets phares
 */
export const reorderFeaturedBouquets = (newOrder: string[]): boolean => {
  try {
    const existing = getFeaturedBouquets();
    const reordered = newOrder.map((id, index) => {
      const bouquet = existing.find(b => b.id === id);
      if (!bouquet) throw new Error(`Bouquet ${id} introuvable`);
      return { ...bouquet, order: index };
    });
    
    return saveFeaturedBouquets(reordered);
  } catch (error) {
    console.error('Erreur lors de la réorganisation:', error);
    return false;
  }
};

/**
 * Exporte toutes les données en JSON
 */
export const exportContentData = (): string | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CONTENT_DATA);
    if (!data) {
      initializeContentStorage();
      return null;
    }
    
    const contentData: ContentData = JSON.parse(data);
    const exportData: ContentData = {
      ...contentData,
      lastExport: new Date().toISOString(),
    };
    
    return JSON.stringify(exportData, null, 2);
  } catch (error) {
    console.error('Erreur lors de l\'export:', error);
    return null;
  }
};

/**
 * Télécharge les données en fichier JSON
 */
export const downloadContentData = (): void => {
  const jsonData = exportContentData();
  if (!jsonData) {
    if (typeof window !== 'undefined') {
      alert('Aucune donnée à exporter');
    }
    return;
  }
  
  const blob = new Blob([jsonData], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `auvertige-content-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Importe des données depuis un fichier JSON
 */
export const importContentData = (jsonData: string): boolean => {
  try {
    const imported: ContentData = JSON.parse(jsonData);
    
    // Validation basique
    if (!imported.pages || !imported.featuredBouquets) {
      throw new Error('Format de données invalide');
    }
    
    localStorage.setItem(STORAGE_KEYS.CONTENT_DATA, JSON.stringify(imported));
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'import:', error);
    return false;
  }
};

/**
 * Réinitialise toutes les données (avec confirmation)
 */
export const resetContentData = (): boolean => {
  try {
    localStorage.removeItem(STORAGE_KEYS.CONTENT_DATA);
    initializeContentStorage();
    return true;
  } catch (error) {
    console.error('Erreur lors de la réinitialisation:', error);
    return false;
  }
};

// Initialisation au chargement du module
if (typeof window !== 'undefined') {
  initializeContentStorage();
}

