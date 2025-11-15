/**
 * Système d'extraction de la structure des pages
 * Permet de récupérer tous les éléments éditable d'une page
 */

export interface PageElement {
  id: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'img' | 'hero';
  content: string;
  imageUrl?: string;
  order: number;
  metadata?: {
    className?: string;
    alt?: string;
  };
}

export interface PageStructure {
  pageId: string;
  heroImage?: string;
  elements: PageElement[];
}

/**
 * Structure par défaut pour chaque page (basée sur le code actuel)
 */
const DEFAULT_PAGE_STRUCTURES: Record<string, Partial<PageStructure>> = {
  'index': {
    heroImage: '/images/hero/facade1.jpg',
    elements: [
      { id: 'hero-title', type: 'h1', content: 'Votre artisan fleuriste à Nantes Sud', order: 1 },
      { id: 'hero-desc', type: 'p', content: 'Découvrez nos créations florales près de chez vous !\nDes émotions florales uniques avec des fleurs fraîches et un accueil chaleureux. Parce que l\'on a aussi le droit de se faire plaisir !', order: 2 },
    ],
  },
  'a-propos': {
    heroImage: '/images/hero/facade1.jpg',
    elements: [
      { id: 'title', type: 'h1', content: 'Notre Histoire', order: 1 },
      { id: 'intro', type: 'p', content: 'Au Vertige est né de la passion pour l\'art floral et du désir de créer des émotions à travers les fleurs. Installés au cœur de Nantes, nous sommes un atelier artisanal qui privilégie la qualité et l\'originalité.', order: 2 },
    ],
  },
  'contact': {
    heroImage: '/images/hero/facade1.jpg',
    elements: [
      { id: 'title', type: 'h1', content: 'Contactez votre fleuriste à Nantes Sud', order: 1 },
      { id: 'intro', type: 'p', content: 'Besoin d\'un bouquet, d\'une composition sur-mesure ou d\'un conseil ? Notre équipe vous accueille à Nantes Sud, quartier Saint-Jacques, à deux pas de Pirmil, Rezé et Saint-Sébastien-sur-Loire. Livraison rapide à l\'hôpital Saint-Jacques et dans toute la métropole nantaise.', order: 2 },
    ],
  },
  'mariage': {
    elements: [
      { id: 'title', type: 'h1', content: 'Bouquets de mariage à Nantes Sud Saint-Jacques', order: 1 },
      { id: 'intro', type: 'p', content: 'Faites de votre mariage un moment inoubliable avec nos bouquets et décorations florales sur-mesure, réalisés à Nantes Sud, quartier Saint-Jacques, et livrés à Pirmil, Rezé, Saint-Sébastien-sur-Loire. Accompagnement personnalisé, conseils, livraison sur le lieu de réception ou à la mairie.', order: 2 },
    ],
  },
  'anniversaire': {
    elements: [
      { id: 'title', type: 'h1', content: 'Bouquets pour anniversaire à Nantes Sud', order: 1 },
    ],
  },
  'deuil': {
    elements: [
      { id: 'title', type: 'h1', content: 'Bouquets de deuil à Nantes Sud Saint-Jacques', order: 1 },
      { id: 'intro', type: 'p', content: 'Exprimez votre soutien avec nos bouquets de deuil sobres et élégants, livrés rapidement au cimetière Saint-Jacques, à l\'hôpital ou à domicile à Nantes Sud, Pirmil, Rezé, Saint-Sébastien-sur-Loire.', order: 2 },
    ],
  },
  'bapteme': {
    elements: [
      { id: 'title', type: 'h1', content: 'Bouquets de baptême à Nantes Sud Saint-Jacques', order: 1 },
      { id: 'intro', type: 'p', content: 'Célébrez un baptême avec un bouquet unique, livré à Nantes Sud, quartier Saint-Jacques, Pirmil, Rezé ou Saint-Sébastien-sur-Loire. Créations personnalisées, conseils sur-mesure, livraison rapide à l\'église ou à domicile.', order: 2 },
    ],
  },
  'evenements': {
    elements: [
      { id: 'title', type: 'h1', content: 'Événements', order: 1 },
    ],
  },
  'creations-florales': {
    elements: [
      { id: 'title', type: 'h1', content: 'Nos créations florales', order: 1 },
    ],
  },
  'services': {
    elements: [
      { id: 'title', type: 'h1', content: 'Nos services', order: 1 },
    ],
  },
};

/**
 * Récupère la structure d'une page avec les données éditées en priorité
 */
export const getPageStructure = (pageId: string): PageStructure => {
  // Récupérer les données éditées depuis localStorage
  const editedContent = getPageContentFromStorage(pageId);
  
  // Structure par défaut
  const defaultStructure = DEFAULT_PAGE_STRUCTURES[pageId] || { elements: [] };
  
  // Récupérer les éléments sauvegardés (structure complète)
  let savedElements: PageElement[] = [];
  if (editedContent?.structure) {
    // Si une structure complète est sauvegardée, l'utiliser
    savedElements = editedContent.structure;
  } else {
    // Sinon, reconstruire depuis les données simples
    const elements: PageElement[] = [];
    
    // Ajouter le titre H1
    if (editedContent?.title) {
      elements.push({
        id: 'h1-title',
        type: 'h1',
        content: editedContent.title,
        order: 0,
      });
    } else if (defaultStructure.elements?.[0]?.type === 'h1') {
      elements.push(defaultStructure.elements[0]);
    }
    
    // Ajouter les paragraphes
    if (editedContent?.paragraphs) {
      editedContent.paragraphs.forEach((p, i) => {
        elements.push({
          id: `p-${i}`,
          type: 'p',
          content: p,
          order: 10 + i,
        });
      });
    } else if (defaultStructure.elements) {
      defaultStructure.elements
        .filter(e => e.type === 'p')
        .forEach((e, i) => {
          elements.push({ ...e, order: 10 + i });
        });
    }
    
    // Ajouter les images (sauf hero)
    if (editedContent?.images) {
      editedContent.images
        .filter(img => img.key !== 'hero')
        .forEach((img, i) => {
          elements.push({
            id: `img-${i}`,
            type: 'img',
            content: img.url,
            imageUrl: img.url,
            order: 100 + i,
            metadata: { alt: img.alt },
          });
        });
    }
    
    savedElements = elements;
  }
  
  // Déterminer l'image hero
  const heroImage = editedContent?.images?.find(img => img.key === 'hero')?.url || defaultStructure.heroImage;
  
  return {
    pageId,
    heroImage,
    elements: savedElements,
  };
};

/**
 * Récupère le contenu d'une page depuis le localStorage
 */
const getPageContentFromStorage = (pageId: string) => {
  try {
    const data = localStorage.getItem('auvertige_content_data');
    if (!data) return null;
    const contentData = JSON.parse(data);
    return contentData.pages?.[pageId] || null;
  } catch {
    return null;
  }
};

