import { useState, useEffect, useCallback } from 'react';
import {
  getFeaturedBouquets,
  saveFeaturedBouquets,
  addFeaturedBouquet,
  updateFeaturedBouquet,
  deleteFeaturedBouquet,
  reorderFeaturedBouquets,
  type FeaturedBouquet,
} from '@/utils/contentStorage';

export const useFeaturedBouquets = () => {
  const [bouquets, setBouquets] = useState<FeaturedBouquet[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadBouquets = () => {
      setLoading(true);
      const data = getFeaturedBouquets();
      setBouquets(data);
      setLoading(false);
    };

    loadBouquets();
  }, []);

  const addBouquet = useCallback(
    async (bouquet: Omit<FeaturedBouquet, 'id' | 'order'>) => {
      setSaving(true);
      const newBouquet = addFeaturedBouquet(bouquet);
      if (newBouquet) {
        setBouquets(getFeaturedBouquets());
      }
      setSaving(false);
      return newBouquet;
    },
    []
  );

  const updateBouquet = useCallback(
    async (id: string, updates: Partial<FeaturedBouquet>) => {
      setSaving(true);
      const success = updateFeaturedBouquet(id, updates);
      if (success) {
        setBouquets(getFeaturedBouquets());
      }
      setSaving(false);
      return success;
    },
    []
  );

  const removeBouquet = useCallback(async (id: string) => {
    setSaving(true);
    const success = deleteFeaturedBouquet(id);
    if (success) {
      setBouquets(getFeaturedBouquets());
    }
    setSaving(false);
    return success;
  }, []);

  const reorder = useCallback(
    async (newOrder: string[]) => {
      setSaving(true);
      const success = reorderFeaturedBouquets(newOrder);
      if (success) {
        setBouquets(getFeaturedBouquets());
      }
      setSaving(false);
      return success;
    },
    []
  );

  return {
    bouquets,
    loading,
    saving,
    addBouquet,
    updateBouquet,
    removeBouquet,
    reorder,
    refresh: () => setBouquets(getFeaturedBouquets()),
  };
};

