import React from 'react';
import { Helmet } from 'react-helmet-async';
import { localBusinessSchema, productSchema, reviewSchema, eventSchema, breadcrumbSchema } from '@/constants/schemaMarkup';
import { faqPageSchema } from '@/constants/faqSchema';
import { sylviePersonSchema } from '@/constants/personSchema';
import { FAQItem } from './FAQ';

/**
 * Interface définissant les propriétés du composant SEO
 * @interface SeoProps
 * @property {string} title - Le titre de la page
 * @property {string} description - La description meta de la page
 * @property {string} [canonical] - L'URL canonique de la page
 * @property {string} [image] - L'URL de l'image pour les partages sociaux
 * @property {string} [type] - Le type de contenu (article, website, etc.)
 * @property {Record<string, string>} [additionalMeta] - Métadonnées additionnelles
 * @property {Object} [product] - Informations sur le produit
 * @property {Array<Object>} [reviews] - Évaluations du produit
 * @property {Object} [event] - Informations sur l'événement
 * @property {Array<Object>} [breadcrumbs] - Fil d'ariane
 */
interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  additionalMeta?: Record<string, string>;
  product?: {
    name: string;
    description: string;
    image: string;
    price: number;
    sku: string;
  };
  reviews?: Array<{
    author: string;
    rating: number;
    content: string;
    date: string;
    image?: string;
  }>;
  event?: {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    image: string;
  };
  breadcrumbs?: Array<{ name: string; url: string }>;
  faq?: FAQItem[];
  includePersonSchema?: boolean;
}

/**
 * Composant SEO pour gérer les métadonnées de la page
 * 
 * @component
 * @example
 * ```tsx
 * <Seo
 *   title="Au Vertige - Fleuriste à Nantes"
 *   description="Découvrez nos créations florales uniques pour tous vos événements"
 *   canonical="https://auvertige.fr"
 *   image="https://auvertige.fr/og-image.webp"
 * />
 * ```
 */
const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  image = '/images/default-og.webp',
  type = 'website',
  additionalMeta = {},
  product,
  reviews,
  event,
  breadcrumbs,
  faq,
  includePersonSchema = false,
}) => {
  // Construction du titre complet
  // Si le titre contient déjà "Au Vertige", on ne l'ajoute pas pour éviter la duplication
  const fullTitle = title.includes('Au Vertige') 
    ? title 
    : `${title} | Au Vertige - Fleuriste à Nantes`;

  // Construction de l'URL canonique
  const canonicalUrl = canonical || typeof window !== 'undefined' ? window.location.href : '';

  // Préparation des Schema Markup
  const schemas = [
    localBusinessSchema,
    ...(product ? [productSchema(product)] : []),
    ...(reviews ? [reviewSchema(reviews)] : []),
    ...(event ? [eventSchema(event)] : []),
    ...(breadcrumbs ? [breadcrumbSchema(breadcrumbs)] : []),
    ...(faq && faq.length > 0 ? [faqPageSchema(faq, canonicalUrl)] : []),
    ...(includePersonSchema ? [sylviePersonSchema] : []),
  ];

  return (
    <Helmet>
      {/* Balises de base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Au Vertige" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Métadonnées additionnelles */}
      {Object.entries(additionalMeta).map(([name, content]) => (
        <meta key={name} name={name} content={content} />
      ))}

      {/* Schema.org JSON-LD */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Balises de sécurité */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; frame-src 'self' https://www.google.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.gpteng.co; img-src 'self' data: https:; connect-src 'self' https:;" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default Seo; 