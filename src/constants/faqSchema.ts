import { FAQItem } from '@/components/shared/FAQ';
import React from 'react';

/**
 * Convertit un React.ReactNode en texte brut pour le Schema.org
 * @param node - Le nœud React à convertir
 * @returns Le texte brut extrait
 */
const reactNodeToText = (node: React.ReactNode): string => {
  if (typeof node === 'string') {
    return node;
  }
  if (typeof node === 'number' || typeof node === 'boolean') {
    return String(node);
  }
  if (React.isValidElement(node)) {
    // Si c'est un élément React, extraire le texte des enfants
    if (typeof node.props.children === 'string') {
      return node.props.children;
    }
    if (Array.isArray(node.props.children)) {
      return node.props.children
        .map((child: React.ReactNode) => reactNodeToText(child))
        .join(' ');
    }
    if (node.props.children) {
      return reactNodeToText(node.props.children);
    }
    return '';
  }
  if (Array.isArray(node)) {
    return node.map((item) => reactNodeToText(item)).join(' ');
  }
  return '';
};

/**
 * Génère le Schema FAQPage pour les questions fréquentes
 * @param items - Liste des questions/réponses FAQ
 * @param url - URL de la page contenant la FAQ
 */
export const faqPageSchema = (items: FAQItem[], url: string = "https://auvertige.fr/contact") => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": items.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": reactNodeToText(item.answer)
    }
  }))
});

