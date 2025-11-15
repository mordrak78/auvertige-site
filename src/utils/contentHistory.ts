/**
 * Système de suivi de l'historique des modifications
 */

export interface ContentHistoryEntry {
  id: string;
  type: 'page' | 'bouquet' | 'image';
  pageId?: string;
  action: 'created' | 'updated' | 'deleted';
  field?: string;
  timestamp: string;
  description: string;
}

const STORAGE_KEY = 'auvertige_content_history';

/**
 * Ajoute une entrée à l'historique
 */
export const addHistoryEntry = (entry: Omit<ContentHistoryEntry, 'id' | 'timestamp'>): void => {
  try {
    const existing = getHistory();
    const newEntry: ContentHistoryEntry = {
      ...entry,
      id: `history-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
    };
    
    const updated = [newEntry, ...existing].slice(0, 50); // Garder seulement les 50 dernières
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Erreur lors de l\'ajout à l\'historique:', error);
  }
};

/**
 * Récupère l'historique complet
 */
export const getHistory = (limit?: number): ContentHistoryEntry[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    
    const history: ContentHistoryEntry[] = JSON.parse(data);
    return limit ? history.slice(0, limit) : history;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'historique:', error);
    return [];
  }
};

/**
 * Récupère les dernières modifications
 */
export const getRecentHistory = (limit: number = 10): ContentHistoryEntry[] => {
  return getHistory(limit);
};

/**
 * Efface l'historique
 */
export const clearHistory = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

