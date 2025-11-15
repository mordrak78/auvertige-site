import { useState, useEffect, useCallback } from 'react';
import {
  getPageContent,
  savePageContent,
  type PageContent,
} from '@/utils/contentStorage';

export const usePageContent = (pageId: string) => {
  const [content, setContent] = useState<PageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadContent = () => {
      setLoading(true);
      const pageContent = getPageContent(pageId);
      setContent(pageContent);
      setLoading(false);
    };

    loadContent();
  }, [pageId]);

  const updateContent = useCallback(
    async (updates: Partial<PageContent>) => {
      setSaving(true);
      const success = savePageContent(pageId, updates);
      
      if (success) {
        const updated = getPageContent(pageId);
        setContent(updated);
      }
      
      setSaving(false);
      return success;
    },
    [pageId]
  );

  const updateTitle = useCallback(
    (title: string) => updateContent({ title }),
    [updateContent]
  );

  const updateParagraphs = useCallback(
    (paragraphs: string[]) => updateContent({ paragraphs }),
    [updateContent]
  );

  const updateImages = useCallback(
    (images: PageContent['images']) => updateContent({ images }),
    [updateContent]
  );

  const addParagraph = useCallback(() => {
    if (!content) return;
    const newParagraphs = [...content.paragraphs, ''];
    updateParagraphs(newParagraphs);
  }, [content, updateParagraphs]);

  const removeParagraph = useCallback(
    (index: number) => {
      if (!content) return;
      const newParagraphs = content.paragraphs.filter((_, i) => i !== index);
      updateParagraphs(newParagraphs);
    },
    [content, updateParagraphs]
  );

  const updateParagraph = useCallback(
    (index: number, text: string) => {
      if (!content) return;
      const newParagraphs = [...content.paragraphs];
      newParagraphs[index] = text;
      updateParagraphs(newParagraphs);
    },
    [content, updateParagraphs]
  );

  return {
    content,
    loading,
    saving,
    updateContent,
    updateTitle,
    updateParagraphs,
    updateImages,
    addParagraph,
    removeParagraph,
    updateParagraph,
  };
};

