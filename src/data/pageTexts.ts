/**
 * Mapping des textes réels de chaque page
 * Ces textes peuvent être édités via l'admin
 */

export interface PageTextElement {
  id: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'li';
  defaultContent: string;
  order: number;
  location?: string; // Description de l'emplacement
}

export interface PageTexts {
  pageId: string;
  elements: PageTextElement[];
}

/**
 * Textes par défaut extraits des pages réelles
 */
export const DEFAULT_PAGE_TEXTS: Record<string, PageTexts> = {
  'mariage': {
    pageId: 'mariage',
    elements: [
      {
        id: 'mariage-h1',
        type: 'h1',
        defaultContent: 'Bouquets de mariage à Nantes Sud Saint-Jacques',
        order: 1,
        location: 'Titre principal',
      },
      {
        id: 'mariage-intro',
        type: 'p',
        defaultContent: 'Faites de votre mariage un moment inoubliable avec nos bouquets et décorations florales sur-mesure, réalisés à Nantes Sud, quartier Saint-Jacques, et livrés à Pirmil, Rezé, Saint-Sébastien-sur-Loire. Accompagnement personnalisé, conseils, livraison sur le lieu de réception ou à la mairie.',
        order: 2,
        location: 'Paragraphe d\'introduction',
      },
      {
        id: 'mariage-btn-devis',
        type: 'span',
        defaultContent: 'Demander un devis mariage',
        order: 3,
        location: 'Bouton devis principal',
      },
      {
        id: 'mariage-btn-retour',
        type: 'span',
        defaultContent: 'Retour aux services',
        order: 4,
        location: 'Bouton retour',
      },
      {
        id: 'mariage-h2-creations',
        type: 'h2',
        defaultContent: 'Nos créations de mariage',
        order: 5,
        location: 'Titre section créations',
      },
      {
        id: 'mariage-h3-decouvrez',
        type: 'h3',
        defaultContent: 'Découvrez plus de nos réalisations',
        order: 6,
        location: 'Titre section galerie',
      },
      {
        id: 'mariage-btn-devis-carousel',
        type: 'span',
        defaultContent: 'Demander un devis',
        order: 7,
        location: 'Bouton devis carousel',
      },
      {
        id: 'mariage-h2-prestations',
        type: 'h2',
        defaultContent: 'Nos prestations mariage',
        order: 8,
        location: 'Titre section prestations',
      },
      {
        id: 'mariage-li-prestation1',
        type: 'li',
        defaultContent: '💐 Bouquets de mariée personnalisés',
        order: 9,
        location: 'Prestation 1',
      },
      {
        id: 'mariage-li-prestation2',
        type: 'li',
        defaultContent: '🌸 Décorations de cérémonie et de réception',
        order: 10,
        location: 'Prestation 2',
      },
      {
        id: 'mariage-li-prestation3',
        type: 'li',
        defaultContent: '🌿 Boutonnières, bracelets, accessoires fleuris',
        order: 11,
        location: 'Prestation 3',
      },
      {
        id: 'mariage-li-prestation4',
        type: 'li',
        defaultContent: '🚚 Livraison sur le lieu de votre choix à Nantes Sud et alentours',
        order: 12,
        location: 'Prestation 4',
      },
      {
        id: 'mariage-link-rdv',
        type: 'span',
        defaultContent: 'Prendre rendez-vous pour un accompagnement personnalisé',
        order: 13,
        location: 'Lien rendez-vous',
      },
      {
        id: 'mariage-h2-pourquoi',
        type: 'h2',
        defaultContent: 'Pourquoi choisir au ver\'tige pour votre mariage ?',
        order: 14,
        location: 'Titre section pourquoi',
      },
      {
        id: 'mariage-li-pourquoi1',
        type: 'li',
        defaultContent: '🌱 Fleurs locales et de saison, circuit court',
        order: 15,
        location: 'Raison 1',
      },
      {
        id: 'mariage-li-pourquoi2',
        type: 'li',
        defaultContent: '🎨 Créations artisanales et personnalisées',
        order: 16,
        location: 'Raison 2',
      },
      {
        id: 'mariage-li-pourquoi3',
        type: 'li',
        defaultContent: '🤝 Accompagnement sur-mesure et conseils',
        order: 17,
        location: 'Raison 3',
      },
      {
        id: 'mariage-li-pourquoi4',
        type: 'li',
        defaultContent: '⭐ Plus de 200 mariages fleuris avec succès',
        order: 18,
        location: 'Raison 4',
      },
      {
        id: 'mariage-link-expertise',
        type: 'span',
        defaultContent: 'En savoir plus sur notre expertise mariage',
        order: 19,
        location: 'Lien expertise',
      },
      {
        id: 'mariage-modal-rdv-title',
        type: 'span',
        defaultContent: 'Prendre rendez-vous pour un devis mariage',
        order: 20,
        location: 'Titre modal RDV',
      },
      {
        id: 'mariage-modal-commande-title',
        type: 'span',
        defaultContent: 'Commander : {bouquet.name}',
        order: 21,
        location: 'Titre modal commande',
      },
      {
        id: 'mariage-btn-valider-commande',
        type: 'span',
        defaultContent: 'Valider ma commande',
        order: 22,
        location: 'Bouton valider commande',
      },
      {
        id: 'mariage-btn-valider-rdv',
        type: 'span',
        defaultContent: 'Valider le rendez-vous',
        order: 23,
        location: 'Bouton valider RDV',
      },
      {
        id: 'mariage-modal-devis-title',
        type: 'span',
        defaultContent: 'Demander un devis',
        order: 24,
        location: 'Titre modal devis',
      },
      {
        id: 'mariage-btn-envoyer-devis',
        type: 'span',
        defaultContent: 'Envoyer la demande',
        order: 25,
        location: 'Bouton envoyer devis',
      },
    ],
  },
  'contact': {
    pageId: 'contact',
    elements: [
      {
        id: 'contact-h1',
        type: 'h1',
        defaultContent: 'Contactez votre fleuriste à Nantes Sud',
        order: 1,
        location: 'Titre principal',
      },
      {
        id: 'contact-intro',
        type: 'p',
        defaultContent: 'Besoin d\'un bouquet, d\'une composition sur-mesure ou d\'un conseil ? Notre équipe vous accueille à Nantes Sud, quartier Saint-Jacques, à deux pas de Pirmil, Rezé et Saint-Sébastien-sur-Loire. Livraison rapide à l\'hôpital Saint-Jacques et dans toute la métropole nantaise.',
        order: 2,
        location: 'Paragraphe d\'introduction',
      },
      {
        id: 'contact-btn-retour-accueil',
        type: 'span',
        defaultContent: 'Retour à l\'accueil',
        order: 3,
        location: 'Bouton retour accueil',
      },
      {
        id: 'contact-btn-galerie',
        type: 'span',
        defaultContent: 'Voir la galerie',
        order: 4,
        location: 'Bouton galerie',
      },
      {
        id: 'contact-btn-services',
        type: 'span',
        defaultContent: 'Nos services',
        order: 5,
        location: 'Bouton services',
      },
      {
        id: 'contact-h2-confiance',
        type: 'h2',
        defaultContent: 'Pourquoi nous faire confiance ?',
        order: 6,
        location: 'Titre section confiance',
      },
      {
        id: 'contact-li-localisation',
        type: 'li',
        defaultContent: '📍 Présence locale à Nantes Sud, quartier Saint-Jacques',
        order: 7,
        location: 'Point de confiance 1',
      },
      {
        id: 'contact-li-conseils',
        type: 'li',
        defaultContent: '🌸 Conseils personnalisés et écoute',
        order: 8,
        location: 'Point de confiance 2',
      },
      {
        id: 'contact-li-livraison',
        type: 'li',
        defaultContent: '🚚 Livraison rapide à Nantes, Rezé, Saint-Sébastien-sur-Loire',
        order: 9,
        location: 'Point de confiance 3',
      },
      {
        id: 'contact-li-clients',
        type: 'li',
        defaultContent: '⭐ Plus de 200 clients satisfaits',
        order: 10,
        location: 'Point de confiance 4',
      },
      {
        id: 'contact-link-engagement',
        type: 'span',
        defaultContent: 'En savoir plus sur notre engagement',
        order: 11,
        location: 'Lien engagement',
      },
    ],
  },
  'deuil': {
    pageId: 'deuil',
    elements: [
      {
        id: 'deuil-h1',
        type: 'h1',
        defaultContent: 'Bouquets de deuil à Nantes Sud Saint-Jacques',
        order: 1,
        location: 'Titre principal',
      },
      {
        id: 'deuil-intro',
        type: 'p',
        defaultContent: 'Exprimez votre soutien avec nos bouquets de deuil sobres et élégants, livrés rapidement au cimetière Saint-Jacques, à l\'hôpital ou à domicile à Nantes Sud, Pirmil, Rezé, Saint-Sébastien-sur-Loire.',
        order: 2,
        location: 'Paragraphe d\'introduction',
      },
    ],
  },
  'bapteme': {
    pageId: 'bapteme',
    elements: [
      {
        id: 'bapteme-h1',
        type: 'h1',
        defaultContent: 'Bouquets de baptême à Nantes Sud Saint-Jacques',
        order: 1,
        location: 'Titre principal',
      },
      {
        id: 'bapteme-intro',
        type: 'p',
        defaultContent: 'Célébrez un baptême avec un bouquet unique, livré à Nantes Sud, quartier Saint-Jacques, Pirmil, Rezé ou Saint-Sébastien-sur-Loire. Créations personnalisées, conseils sur-mesure, livraison rapide à l\'église ou à domicile.',
        order: 2,
        location: 'Paragraphe d\'introduction',
      },
    ],
  },
  'anniversaire': {
    pageId: 'anniversaire',
    elements: [
      {
        id: 'anniversaire-h1',
        type: 'h1',
        defaultContent: 'Bouquets d\'anniversaire à Nantes Sud Saint-Jacques',
        order: 1,
        location: 'Titre principal',
      },
      {
        id: 'anniversaire-intro',
        type: 'p',
        defaultContent: 'Offrez un bouquet d\'anniversaire unique et coloré, livré à Nantes Sud, quartier Saint-Jacques, Pirmil, Rezé ou Saint-Sébastien-sur-Loire. Créations personnalisées, conseils sur-mesure, livraison rapide à domicile ou sur le lieu de fête.',
        order: 2,
        location: 'Paragraphe d\'introduction',
      },
      {
        id: 'anniversaire-btn-commander',
        type: 'span',
        defaultContent: 'Commander un bouquet anniversaire',
        order: 3,
        location: 'Bouton commander',
      },
      {
        id: 'anniversaire-btn-galerie',
        type: 'span',
        defaultContent: 'Voir nos créations',
        order: 4,
        location: 'Bouton créations',
      },
      {
        id: 'anniversaire-btn-retour',
        type: 'span',
        defaultContent: 'Retour aux services',
        order: 5,
        location: 'Bouton retour',
      },
      {
        id: 'anniversaire-h2-prestations',
        type: 'h2',
        defaultContent: 'Nos prestations anniversaire',
        order: 6,
        location: 'Titre section prestations',
      },
      {
        id: 'anniversaire-li-prestation1',
        type: 'li',
        defaultContent: '🎉 Bouquets personnalisés pour tous les âges',
        order: 7,
        location: 'Prestation 1',
      },
      {
        id: 'anniversaire-li-prestation2',
        type: 'li',
        defaultContent: '🎈 Livraison à domicile ou sur le lieu de fête',
        order: 8,
        location: 'Prestation 2',
      },
      {
        id: 'anniversaire-li-prestation3',
        type: 'li',
        defaultContent: '🌸 Conseils pour choisir les fleurs selon la saison',
        order: 9,
        location: 'Prestation 3',
      },
      {
        id: 'anniversaire-li-prestation4',
        type: 'li',
        defaultContent: '🚚 Livraison rapide à Nantes Sud et alentours',
        order: 10,
        location: 'Prestation 4',
      },
      {
        id: 'anniversaire-link-personnalise',
        type: 'span',
        defaultContent: 'Demander un bouquet personnalisé',
        order: 11,
        location: 'Lien personnalisé',
      },
      {
        id: 'anniversaire-h2-pourquoi',
        type: 'h2',
        defaultContent: 'Pourquoi choisir au ver\'tige pour un anniversaire ?',
        order: 12,
        location: 'Titre section pourquoi',
      },
      {
        id: 'anniversaire-li-pourquoi1',
        type: 'li',
        defaultContent: '🌱 Fleurs locales et de saison, circuit court',
        order: 13,
        location: 'Raison 1',
      },
      {
        id: 'anniversaire-li-pourquoi2',
        type: 'li',
        defaultContent: '🎨 Créations artisanales et personnalisées',
        order: 14,
        location: 'Raison 2',
      },
      {
        id: 'anniversaire-li-pourquoi3',
        type: 'li',
        defaultContent: '⭐ Plus de 200 clients satisfaits',
        order: 15,
        location: 'Raison 3',
      },
      {
        id: 'anniversaire-li-pourquoi4',
        type: 'li',
        defaultContent: 'Livraison 7j/7 à Nantes et agglomération',
        order: 16,
        location: 'Raison 4',
      },
      {
        id: 'anniversaire-link-engagement',
        type: 'span',
        defaultContent: 'En savoir plus sur notre engagement',
        order: 17,
        location: 'Lien engagement',
      },
    ],
  },
  'index': {
    pageId: 'index',
    elements: [
      {
        id: 'index-hero-h1',
        type: 'h1',
        defaultContent: "au ver'tige, votre artisan fleuriste à Nantes Sud",
        order: 1,
        location: 'Titre principal Hero',
      },
      {
        id: 'index-hero-desc',
        type: 'p',
        defaultContent: 'Découvrez nos créations florales près de chez vous !\nDes émotions florales uniques avec des fleurs fraîches et un accueil chaleureux. Parce que l\'on a aussi le droit de se faire plaisir !',
        order: 2,
        location: 'Description Hero',
      },
      {
        id: 'index-hero-btn-creations',
        type: 'span',
        defaultContent: 'Voir nos créations',
        order: 3,
        location: 'Bouton Hero créations',
      },
      {
        id: 'index-hero-btn-commander',
        type: 'span',
        defaultContent: 'Commander maintenant',
        order: 4,
        location: 'Bouton Hero commander',
      },
      {
        id: 'index-hero-zone-service',
        type: 'span',
        defaultContent: 'En savoir plus sur notre zone de service...',
        order: 5,
        location: 'Lien zone de service',
      },
      {
        id: 'index-hero-zone-detail',
        type: 'p',
        defaultContent: 'Nous sommes à deux pas de Pirmil, Saint-Sébastien-sur-Loire, Rezé. Venez choisir des compositions florales pensées pour vous ou simplement pour le plaisir d\'offrir.',
        order: 6,
        location: 'Détail zone de service',
      },
      {
        id: 'index-hero-decouvrir',
        type: 'span',
        defaultContent: 'Découvrir',
        order: 7,
        location: 'Bouton scroll down',
      },
      {
        id: 'index-services-h2',
        type: 'h2',
        defaultContent: 'Nos Services',
        order: 8,
        location: 'Titre section services',
      },
      {
        id: 'index-services-intro',
        type: 'p',
        defaultContent: 'Découvrez nos prestations pour sublimer vos espaces et événements',
        order: 9,
        location: 'Intro section services',
      },
      {
        id: 'index-services-badge-nouveautes',
        type: 'span',
        defaultContent: '✨ Nouveautés',
        order: 10,
        location: 'Badge nouveautés',
      },
      {
        id: 'index-services-badge-pro',
        type: 'span',
        defaultContent: '🎯 Services Pro',
        order: 11,
        location: 'Badge services pro',
      },
      {
        id: 'index-services-btn-tous',
        type: 'span',
        defaultContent: 'Découvrir tous nos services',
        order: 12,
        location: 'Bouton tous services',
      },
      {
        id: 'index-services-btn-savoir',
        type: 'span',
        defaultContent: 'En savoir +',
        order: 13,
        location: 'Bouton en savoir plus',
      },
      {
        id: 'index-garanties-h3',
        type: 'h3',
        defaultContent: 'Nos Garanties',
        order: 14,
        location: 'Titre section garanties',
      },
      {
        id: 'index-garanties-intro',
        type: 'p',
        defaultContent: 'Qualité, fraîcheur et satisfaction garanties pour tous nos services',
        order: 15,
        location: 'Intro section garanties',
      },
      {
        id: 'index-garantie-conseil-title',
        type: 'span',
        defaultContent: 'Conseil personnalisé',
        order: 16,
        location: 'Garantie 1 titre',
      },
      {
        id: 'index-garantie-conseil-desc',
        type: 'span',
        defaultContent: 'À l\'écoute de vos envies',
        order: 17,
        location: 'Garantie 1 description',
      },
      {
        id: 'index-garantie-creations-title',
        type: 'span',
        defaultContent: 'Créations uniques',
        order: 18,
        location: 'Garantie 2 titre',
      },
      {
        id: 'index-garantie-creations-desc',
        type: 'span',
        defaultContent: 'Chaque bouquet est une pièce originale',
        order: 19,
        location: 'Garantie 2 description',
      },
      {
        id: 'index-garantie-savoir-title',
        type: 'span',
        defaultContent: 'Savoir-faire artisanal',
        order: 20,
        location: 'Garantie 3 titre',
      },
      {
        id: 'index-garantie-savoir-desc',
        type: 'span',
        defaultContent: 'Tradition et passion florale',
        order: 21,
        location: 'Garantie 3 description',
      },
      {
        id: 'index-garantie-fleurs-title',
        type: 'span',
        defaultContent: 'Fleurs locales',
        order: 22,
        location: 'Garantie 4 titre',
      },
      {
        id: 'index-garantie-fleurs-desc',
        type: 'span',
        defaultContent: 'Circuit court et qualité garantie',
        order: 23,
        location: 'Garantie 4 description',
      },
      {
        id: 'index-avis-h2',
        type: 'h2',
        defaultContent: 'Ce que nos clients disent de nous',
        order: 24,
        location: 'Titre section avis',
      },
      {
        id: 'index-avis-note',
        type: 'span',
        defaultContent: '4.9/5 sur Google (113 avis)',
        order: 25,
        location: 'Note Google',
      },
      {
        id: 'index-avis-intro',
        type: 'p',
        defaultContent: 'Plus de 100 avis clients nous font confiance',
        order: 26,
        location: 'Intro section avis',
      },
      {
        id: 'index-avis-btn-google',
        type: 'span',
        defaultContent: 'Voir tous nos avis Google',
        order: 27,
        location: 'Bouton avis Google',
      },
      {
        id: 'index-avis-btn-commander',
        type: 'span',
        defaultContent: 'Commander maintenant',
        order: 28,
        location: 'Bouton commander avis',
      },
      {
        id: 'index-about-h2',
        type: 'h2',
        defaultContent: 'À propos d\'au ver\'tige',
        order: 29,
        location: 'Titre section à propos',
      },
      {
        id: 'index-about-p1',
        type: 'p',
        defaultContent: 'au ver\'tige, nous sommes passionnés par l\'art floral et nous créons des compositions uniques pour toutes les occasions. Notre boutique est située au cœur de Nantes, où nous accueillons nos clients avec chaleur et professionnalisme.',
        order: 30,
        location: 'Paragraphe 1 à propos',
      },
      {
        id: 'index-about-p2',
        type: 'p',
        defaultContent: 'Nous sélectionnons avec soin nos fleurs et plantes pour vous offrir des créations fraîches et durables. Notre équipe d\'artisans fleuristes met tout son savoir-faire au service de vos projets.',
        order: 31,
        location: 'Paragraphe 2 à propos',
      },
      {
        id: 'index-about-btn-creations',
        type: 'span',
        defaultContent: 'Découvrir nos créations',
        order: 32,
        location: 'Bouton créations à propos',
      },
      {
        id: 'index-about-badge-text',
        type: 'span',
        defaultContent: 'Membre Artisans Fleuristes de France',
        order: 33,
        location: 'Badge AFF titre',
      },
      {
        id: 'index-about-badge-desc',
        type: 'span',
        defaultContent: 'Qualité et savoir-faire garantis',
        order: 34,
        location: 'Badge AFF description',
      },
      {
        id: 'index-contact-h3',
        type: 'h3',
        defaultContent: 'Contact & Boutique',
        order: 35,
        location: 'Titre section contact',
      },
      {
        id: 'index-commande-h2',
        type: 'h2',
        defaultContent: 'Commandez en 2 minutes',
        order: 36,
        location: 'Titre section commande',
      },
      {
        id: 'index-commande-intro',
        type: 'p',
        defaultContent: 'Remplissez le formulaire ci-dessous et nous vous recontactons rapidement pour finaliser votre commande',
        order: 37,
        location: 'Intro section commande',
      },
      {
        id: 'index-commande-tab-formulaire',
        type: 'span',
        defaultContent: 'Formulaire de commande',
        order: 38,
        location: 'Onglet formulaire',
      },
      {
        id: 'index-commande-tab-boutique',
        type: 'span',
        defaultContent: 'Boutique partenaire',
        order: 39,
        location: 'Onglet boutique',
      },
      {
        id: 'index-commande-tab-formulaire-label',
        type: 'span',
        defaultContent: 'Commande rapide',
        order: 40,
        location: 'Label onglet formulaire',
      },
      {
        id: 'index-commande-h2-alt',
        type: 'h2',
        defaultContent: 'Commandez facilement',
        order: 41,
        location: 'Titre alternatif section commande',
      },
      {
        id: 'index-commande-intro-alt',
        type: 'p',
        defaultContent: 'Choisissez votre méthode de commande : formulaire rapide ou boutique partenaire',
        order: 42,
        location: 'Intro alternative section commande',
      },
      {
        id: 'index-creations-h2',
        type: 'h2',
        defaultContent: 'À chaque fleur son occasion',
        order: 43,
        location: 'Titre section créations',
      },
      {
        id: 'index-creations-intro',
        type: 'p',
        defaultContent: 'Découvrez nos créations florales pensées pour chaque moment de vie',
        order: 44,
        location: 'Intro section créations',
      },
      {
        id: 'index-creations-cta-mariage',
        type: 'span',
        defaultContent: 'Voir nos créations Mariage',
        order: 45,
        location: 'CTA créations mariage',
      },
      {
        id: 'index-creations-cta-anniversaire',
        type: 'span',
        defaultContent: 'Voir nos créations Anniversaire',
        order: 46,
        location: 'CTA créations anniversaire',
      },
      {
        id: 'index-creations-cta-deuil',
        type: 'span',
        defaultContent: 'Voir nos créations Deuil',
        order: 47,
        location: 'CTA créations deuil',
      },
      {
        id: 'index-creations-cta-bapteme',
        type: 'span',
        defaultContent: 'Voir nos créations Baptême',
        order: 48,
        location: 'CTA créations baptême',
      },
      {
        id: 'index-creations-cta-plaisir',
        type: 'span',
        defaultContent: 'Voir nos créations Offrir',
        order: 49,
        location: 'CTA créations plaisir',
      },
      {
        id: 'index-creations-cta-se-faire-plaisir',
        type: 'span',
        defaultContent: 'Voir nos créations Plaisir',
        order: 50,
        location: 'CTA créations se faire plaisir',
      },
      {
        id: 'index-creations-btn-contact',
        type: 'span',
        defaultContent: 'Nous contacter',
        order: 51,
        location: 'Bouton contact créations',
      },
      {
        id: 'index-service-bouquets-title',
        type: 'span',
        defaultContent: 'Bouquets & fleurs fraîches',
        order: 52,
        location: 'Service bouquets titre',
      },
      {
        id: 'index-service-bouquets-desc',
        type: 'p',
        defaultContent: 'Bouquets sur-mesure, livraison à Nantes Sud (Saint-Jacques, Pirmil, Rezé, Saint-Sébastien-sur-Loire), abonnement floral, créations pour toutes les occasions.',
        order: 53,
        location: 'Service bouquets description',
      },
      {
        id: 'index-service-plantes-title',
        type: 'span',
        defaultContent: 'Plantes',
        order: 54,
        location: 'Service plantes titre',
      },
      {
        id: 'index-service-plantes-desc',
        type: 'p',
        defaultContent: 'Plantes vertes d\'intérieur, plantes fleuries, cactus et succulentes. Mention spéciale pour les \'Boul Ki Mous\' - nos plantes coup de cœur !',
        order: 55,
        location: 'Service plantes description',
      },
      {
        id: 'index-service-tombes-title',
        type: 'span',
        defaultContent: 'Fleurissement de tombes',
        order: 56,
        location: 'Service tombes titre',
      },
      {
        id: 'index-service-tombes-desc',
        type: 'p',
        defaultContent: 'Compositions florales respectueuses pour honorer vos proches. Proximité du cimetière Saint-Jacques pour un service facilité.',
        order: 57,
        location: 'Service tombes description',
      },
      {
        id: 'index-service-bougies-title',
        type: 'span',
        defaultContent: 'Bougies & parfums d\'ambiance',
        order: 58,
        location: 'Service bougies titre',
      },
      {
        id: 'index-service-bougies-desc',
        type: 'p',
        defaultContent: 'Sélection de bougies artisanales et parfums d\'ambiance de la marque Mathilde M. Idées cadeaux parfaites à Nantes Sud.',
        order: 59,
        location: 'Service bougies description',
      },
      {
        id: 'index-service-decoration-title',
        type: 'span',
        defaultContent: 'Décoration d\'intérieur',
        order: 60,
        location: 'Service décoration titre',
      },
      {
        id: 'index-service-decoration-desc',
        type: 'p',
        defaultContent: 'Fleurs séchées, cadres végétaux, vases, bougeoirs personnalisés. Conseils sur-mesure pour sublimer votre intérieur à Nantes Sud.',
        order: 61,
        location: 'Service décoration description',
      },
      {
        id: 'index-service-professionnels-title',
        type: 'span',
        defaultContent: 'Services pour professionnels',
        order: 62,
        location: 'Service professionnels titre',
      },
      {
        id: 'index-service-professionnels-desc',
        type: 'p',
        defaultContent: 'Abonnements floraux pour maisons de retraite, restaurants, hôtels, bureaux. Événements d\'entreprise avec devis sur-mesure à Nantes Sud.',
        order: 63,
        location: 'Service professionnels description',
      },
      {
        id: 'index-creations-mariage-desc',
        type: 'p',
        defaultContent: 'Créations florales romantiques et élégantes pour votre plus beau jour. Bouquets de mariée sur-mesure, décorations de salle et compositions raffinées qui subliment votre union.',
        order: 64,
        location: 'Description créations mariage',
      },
      {
        id: 'index-creations-anniversaire-desc',
        type: 'p',
        defaultContent: 'Bouquets joyeux et colorés pour célébrer les anniversaires. Des créations adaptées à tous les âges et toutes les personnalités, pour illuminer cette journée spéciale.',
        order: 65,
        location: 'Description créations anniversaire',
      },
      {
        id: 'index-creations-deuil-desc',
        type: 'p',
        defaultContent: 'Compositions florales respectueuses et apaisantes pour accompagner dans les moments difficiles. Des créations sobres et élégantes qui honorent la mémoire avec dignité.',
        order: 66,
        location: 'Description créations deuil',
      },
      {
        id: 'index-creations-bapteme-desc',
        type: 'p',
        defaultContent: 'Créations florales tendres et délicates pour célébrer un baptême. Des compositions qui apportent douceur et pureté à cet événement spirituel et familial.',
        order: 67,
        location: 'Description créations baptême',
      },
      {
        id: 'index-creations-plaisir-desc',
        type: 'p',
        defaultContent: 'Des bouquets et compositions pour toutes les occasions de faire plaisir à vos proches. Des créations qui expriment vos sentiments sans raison particulière.',
        order: 68,
        location: 'Description créations plaisir',
      },
      {
        id: 'index-creations-se-faire-plaisir-desc',
        type: 'p',
        defaultContent: 'Parce que vous le valez bien ! Des créations florales pour vous faire plaisir et embellir votre quotidien. Parfois, la plus belle occasion est de se gâter soi-même.',
        order: 69,
        location: 'Description créations se faire plaisir',
      },
      {
        id: 'index-about-section-h2',
        type: 'h2',
        defaultContent: 'Fleuriste engagé et artisanal',
        order: 46,
        location: 'Titre section about',
      },
      {
        id: 'index-about-section-p',
        type: 'p',
        defaultContent: 'Des créations florales uniques, locales et responsables, réalisées avec passion à Nantes. Notre équipe privilégie les circuits courts et l\'artisanat pour sublimer chaque moment de votre vie.',
        order: 47,
        location: 'Paragraphe section about',
      },
      {
        id: 'index-about-section-btn',
        type: 'span',
        defaultContent: 'En savoir plus sur notre engagement',
        order: 48,
        location: 'Bouton section about',
      },
    ],
  },
  'creations-florales': {
    pageId: 'creations-florales',
    elements: [
      {
        id: 'creations-florales-h1',
        type: 'h1',
        defaultContent: 'Créations Florales',
        order: 1,
        location: 'Titre principal Hero',
      },
      {
        id: 'creations-florales-hero-desc',
        type: 'p',
        defaultContent: 'Découvrez nos créations organisées par catégorie',
        order: 2,
        location: 'Description Hero',
      },
      {
        id: 'creations-florales-h2-categories',
        type: 'h2',
        defaultContent: 'Nos créations par catégorie',
        order: 3,
        location: 'Titre section catégories',
      },
      {
        id: 'creations-florales-intro-categories',
        type: 'p',
        defaultContent: 'Chaque occasion mérite une création unique et personnalisée',
        order: 4,
        location: 'Introduction section catégories',
      },
      {
        id: 'creations-florales-cat-deuil-title',
        type: 'span',
        defaultContent: 'Deuil',
        order: 5,
        location: 'Catégorie Deuil titre',
      },
      {
        id: 'creations-florales-cat-deuil-desc',
        type: 'p',
        defaultContent: 'Compositions respectueuses et élégantes pour honorer vos proches',
        order: 6,
        location: 'Catégorie Deuil description',
      },
      {
        id: 'creations-florales-cat-mariage-title',
        type: 'span',
        defaultContent: 'Mariage',
        order: 7,
        location: 'Catégorie Mariage titre',
      },
      {
        id: 'creations-florales-cat-mariage-desc',
        type: 'p',
        defaultContent: 'Créations florales pour votre plus beau jour',
        order: 8,
        location: 'Catégorie Mariage description',
      },
      {
        id: 'creations-florales-cat-anniversaire-title',
        type: 'span',
        defaultContent: 'Anniversaire',
        order: 9,
        location: 'Catégorie Anniversaire titre',
      },
      {
        id: 'creations-florales-cat-anniversaire-desc',
        type: 'p',
        defaultContent: 'Bouquets joyeux pour célébrer un anniversaire',
        order: 10,
        location: 'Catégorie Anniversaire description',
      },
      {
        id: 'creations-florales-cat-bapteme-title',
        type: 'span',
        defaultContent: 'Baptême',
        order: 11,
        location: 'Catégorie Baptême titre',
      },
      {
        id: 'creations-florales-cat-bapteme-desc',
        type: 'p',
        defaultContent: 'Créations tendres pour célébrer un baptême',
        order: 12,
        location: 'Catégorie Baptême description',
      },
      {
        id: 'creations-florales-cat-plaisirs-title',
        type: 'span',
        defaultContent: 'Plaisirs d\'offrir',
        order: 13,
        location: 'Catégorie Plaisirs d\'offrir titre',
      },
      {
        id: 'creations-florales-cat-plaisirs-desc',
        type: 'p',
        defaultContent: 'Bouquets pour faire plaisir à vos proches',
        order: 14,
        location: 'Catégorie Plaisirs d\'offrir description',
      },
      {
        id: 'creations-florales-cat-se-faire-plaisir-title',
        type: 'span',
        defaultContent: 'Se faire plaisir',
        order: 15,
        location: 'Catégorie Se faire plaisir titre',
      },
      {
        id: 'creations-florales-cat-se-faire-plaisir-desc',
        type: 'p',
        defaultContent: 'Créations florales pour vous faire plaisir',
        order: 16,
        location: 'Catégorie Se faire plaisir description',
      },
      {
        id: 'creations-florales-btn-decouvrir',
        type: 'span',
        defaultContent: 'Découvrir',
        order: 17,
        location: 'Bouton découvrir catégorie',
      },
      {
        id: 'creations-florales-h2-cta',
        type: 'h2',
        defaultContent: 'Une création sur-mesure ?',
        order: 18,
        location: 'Titre section CTA',
      },
      {
        id: 'creations-florales-cta-desc',
        type: 'p',
        defaultContent: 'Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé',
        order: 19,
        location: 'Description section CTA',
      },
      {
        id: 'creations-florales-btn-contact',
        type: 'span',
        defaultContent: 'Nous contacter',
        order: 20,
        location: 'Bouton contacter',
      },
      {
        id: 'creations-florales-btn-appeler',
        type: 'span',
        defaultContent: 'Appeler maintenant',
        order: 21,
        location: 'Bouton appeler',
      },
    ],
  },
  'services': {
    pageId: 'services',
    elements: [
      {
        id: 'services-h1',
        type: 'h1',
        defaultContent: 'Nos Services',
        order: 1,
        location: 'Titre principal Hero',
      },
      {
        id: 'services-hero-desc',
        type: 'p',
        defaultContent: 'Des créations florales uniques pour chaque occasion',
        order: 2,
        location: 'Description Hero',
      },
      {
        id: 'services-h2',
        type: 'h2',
        defaultContent: 'Découvrez nos services',
        order: 3,
        location: 'Titre section services',
      },
      {
        id: 'services-intro',
        type: 'p',
        defaultContent: 'Une gamme complète de services pour sublimer vos espaces et événements',
        order: 4,
        location: 'Introduction section services',
      },
      {
        id: 'services-bouquets-title',
        type: 'span',
        defaultContent: 'Bouquets & fleurs fraîches',
        order: 5,
        location: 'Service bouquets titre',
      },
      {
        id: 'services-bouquets-desc',
        type: 'p',
        defaultContent: 'Bouquets sur-mesure, livraison à Nantes Sud (Saint-Jacques, Pirmil, Rezé, Saint-Sébastien-sur-Loire), abonnement floral, créations pour toutes les occasions.',
        order: 6,
        location: 'Service bouquets description',
      },
      {
        id: 'services-plantes-title',
        type: 'span',
        defaultContent: 'Plantes',
        order: 7,
        location: 'Service plantes titre',
      },
      {
        id: 'services-plantes-desc',
        type: 'p',
        defaultContent: 'Plantes vertes d\'intérieur, plantes fleuries, cactus et succulentes. Mention spéciale pour les \'Boul Ki Mous\' - nos plantes coup de cœur !',
        order: 8,
        location: 'Service plantes description',
      },
      {
        id: 'services-tombes-title',
        type: 'span',
        defaultContent: 'Fleurissement de tombes',
        order: 9,
        location: 'Service tombes titre',
      },
      {
        id: 'services-tombes-desc',
        type: 'p',
        defaultContent: 'Compositions florales respectueuses pour honorer vos proches. Proximité du cimetière Saint-Jacques pour un service facilité.',
        order: 10,
        location: 'Service tombes description',
      },
      {
        id: 'services-bougies-title',
        type: 'span',
        defaultContent: 'Bougies & parfums d\'ambiance',
        order: 11,
        location: 'Service bougies titre',
      },
      {
        id: 'services-bougies-desc',
        type: 'p',
        defaultContent: 'Sélection de bougies artisanales et parfums d\'ambiance de la marque Mathilde M. Idées cadeaux parfaites à Nantes Sud.',
        order: 12,
        location: 'Service bougies description',
      },
      {
        id: 'services-decoration-title',
        type: 'span',
        defaultContent: 'Décoration d\'intérieur',
        order: 13,
        location: 'Service décoration titre',
      },
      {
        id: 'services-decoration-desc',
        type: 'p',
        defaultContent: 'Fleurs séchées, cadres végétaux, vases, bougeoirs personnalisés. Conseils sur-mesure pour sublimer votre intérieur à Nantes Sud.',
        order: 14,
        location: 'Service décoration description',
      },
      {
        id: 'services-professionnels-title',
        type: 'span',
        defaultContent: 'Services pour professionnels',
        order: 15,
        location: 'Service professionnels titre',
      },
      {
        id: 'services-professionnels-desc',
        type: 'p',
        defaultContent: 'Abonnements floraux pour maisons de retraite, restaurants, hôtels, bureaux. Événements d\'entreprise avec devis sur-mesure à Nantes Sud.',
        order: 16,
        location: 'Service professionnels description',
      },
      {
        id: 'services-cta-h2',
        type: 'h2',
        defaultContent: 'Besoin d\'une création sur-mesure ?',
        order: 17,
        location: 'Titre section CTA',
      },
      {
        id: 'services-cta-desc',
        type: 'p',
        defaultContent: 'Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé',
        order: 18,
        location: 'Description section CTA',
      },
      {
        id: 'services-btn-contact',
        type: 'span',
        defaultContent: 'Nous contacter',
        order: 19,
        location: 'Bouton contacter',
      },
    ],
  },
  'evenements': {
    pageId: 'evenements',
    elements: [
      {
        id: 'evenements-h1',
        type: 'h1',
        defaultContent: 'Événements & Actualités',
        order: 1,
        location: 'Titre principal Hero',
      },
      {
        id: 'evenements-hero-desc',
        type: 'p',
        defaultContent: 'Retrouvez-nous sur Instagram pour nos dernières créations !',
        order: 2,
        location: 'Description Hero',
      },
      {
        id: 'evenements-h2-instagram',
        type: 'h2',
        defaultContent: 'Suivez-nous sur Instagram',
        order: 3,
        location: 'Titre section Instagram',
      },
      {
        id: 'evenements-instagram-desc',
        type: 'p',
        defaultContent: 'Découvrez nos dernières créations florales, nos événements et nos coups de cœur du moment. Une source d\'inspiration quotidienne pour vos compositions florales.',
        order: 4,
        location: 'Description section Instagram',
      },
      {
        id: 'evenements-h4-actus',
        type: 'h4',
        defaultContent: 'Découvrez nos actus du mois',
        order: 5,
        location: 'Titre section actus',
      },
      {
        id: 'evenements-actus-desc',
        type: 'p',
        defaultContent: 'Nos dernières créations et actualités en temps réel',
        order: 6,
        location: 'Description section actus',
      },
      {
        id: 'evenements-cta-h2',
        type: 'h2',
        defaultContent: 'Une création sur-mesure ?',
        order: 7,
        location: 'Titre section CTA',
      },
      {
        id: 'evenements-cta-desc',
        type: 'p',
        defaultContent: 'Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé',
        order: 8,
        location: 'Description section CTA',
      },
      {
        id: 'evenements-btn-contact',
        type: 'span',
        defaultContent: 'Nous contacter',
        order: 9,
        location: 'Bouton contacter',
      },
      {
        id: 'evenements-btn-appeler',
        type: 'span',
        defaultContent: 'Appeler maintenant',
        order: 10,
        location: 'Bouton appeler',
      },
    ],
  },
  'a-propos': {
    pageId: 'a-propos',
    elements: [
      {
        id: 'a-propos-h1',
        type: 'h1',
        defaultContent: 'Notre Histoire',
        order: 1,
        location: 'Titre principal',
      },
      {
        id: 'a-propos-intro',
        type: 'p',
        defaultContent: '<strong className="text-sage-700">au ver\'tige</strong> est né de la passion pour l\'art floral et du désir de créer des émotions à travers les fleurs. Installés au cœur de Nantes, nous sommes un atelier artisanal qui privilégie la qualité et l\'originalité.',
        order: 2,
        location: 'Paragraphe d\'introduction',
      },
      {
        id: 'a-propos-sylvie-citation',
        type: 'p',
        defaultContent: 'Les fleurs qui sortent de l\'ordinaire, c\'est ma passion',
        order: 3,
        location: 'Citation Sylvie',
      },
      {
        id: 'a-propos-sylvie-h2',
        type: 'h2',
        defaultContent: 'Sylvie',
        order: 4,
        location: 'Titre section Sylvie',
      },
      {
        id: 'a-propos-sylvie-p1',
        type: 'p',
        defaultContent: '<strong className="text-sage-700">Sylvie ARCHAMBEAU</strong> a repris les rênes d\'au ver\'tige en 2010 après avoir obtenu son CAP et BP horticulture, puis son CAP et BP fleuriste. Cette passionnée des créations florales a su transformer cette opportunité en une belle aventure entrepreneuriale.',
        order: 5,
        location: 'Paragraphe 1 Sylvie',
      },
      {
        id: 'a-propos-sylvie-p2',
        type: 'p',
        defaultContent: 'Son parcours unique lui a permis d\'avoir une <strong className="text-sage-700">expérience des deux côtés du comptoir</strong> : en production horticole puis en vente. Cette double expertise lui donne une vision d\'ensemble du circuit de vente horticole, qu\'elle met au service de ses clients depuis maintenant <strong className="text-poppy-600">14 ans</strong>. Installée dans le quartier de <strong className="text-sage-700">Saint-Jacques</strong>, elle a développé un commerce de proximité éco-responsable, privilégiant les <strong className="text-poppy-600">produits locaux et le circuit court nantais</strong>.',
        order: 6,
        location: 'Paragraphe 2 Sylvie',
      },
      {
        id: 'a-propos-sylvie-p3',
        type: 'p',
        defaultContent: 'Sylvie apprécie particulièrement de <strong className="text-sage-700">retravailler l\'intérieur de son magasin</strong> en intégrant de belles décorations qu\'elle trouve chez ses partenaires privilégiés, comme <a href="https://www.mathildem.com" target="_blank" rel="noopener noreferrer" className="text-poppy-600 hover:text-poppy-700 font-medium inline-flex items-center gap-1">Mathilde M <ExternalLink size={14} /></a>.',
        order: 7,
        location: 'Paragraphe 3 Sylvie',
      },
      {
        id: 'a-propos-sylvie-badge',
        type: 'span',
        defaultContent: '15 ans d\'expérience',
        order: 8,
        location: 'Badge expérience Sylvie',
      },
      {
        id: 'a-propos-equipe-h3',
        type: 'h3',
        defaultContent: 'Notre Équipe',
        order: 9,
        location: 'Titre section équipe',
      },
      {
        id: 'a-propos-equipe-h4',
        type: 'h4',
        defaultContent: 'Des artisans passionnés',
        order: 10,
        location: 'Sous-titre équipe',
      },
      {
        id: 'a-propos-equipe-p1',
        type: 'p',
        defaultContent: 'Sylvie s\'entoure d\'une <strong className="text-sage-700">équipe d\'artisans fleuristes</strong> qui maîtrisent parfaitement leurs savoir-faire. Chaque membre de l\'équipe partage la même passion pour les créations florales et l\'excellence.',
        order: 11,
        location: 'Paragraphe 1 équipe',
      },
      {
        id: 'a-propos-equipe-p2',
        type: 'p',
        defaultContent: 'Leur particularité ? Ils ont le <strong className="text-poppy-600">goût de transmettre leurs passions</strong> aux jeunes générations. Régulièrement, la boutique accueille des <strong className="text-sage-700">apprentis</strong> qui viennent apprendre les techniques traditionnelles et découvrir le métier d\'artisan fleuriste.',
        order: 12,
        location: 'Paragraphe 2 équipe',
      },
      {
        id: 'a-propos-equipe-p3',
        type: 'p',
        defaultContent: 'Cette transmission de savoir-faire garantit la pérennité des techniques artisanales tout en apportant un regard neuf et créatif à l\'équipe.',
        order: 13,
        location: 'Paragraphe 3 équipe',
      },
      {
        id: 'a-propos-stat-annees',
        type: 'span',
        defaultContent: '15+',
        order: 14,
        location: 'Statistique années',
      },
      {
        id: 'a-propos-stat-annees-label',
        type: 'span',
        defaultContent: 'Années d\'expérience',
        order: 15,
        location: 'Label statistique années',
      },
      {
        id: 'a-propos-stat-artisans',
        type: 'span',
        defaultContent: '3+',
        order: 16,
        location: 'Statistique artisans',
      },
      {
        id: 'a-propos-stat-artisans-label',
        type: 'span',
        defaultContent: 'Artisans fleuristes',
        order: 17,
        location: 'Label statistique artisans',
      },
      {
        id: 'a-propos-engagement-h3',
        type: 'h3',
        defaultContent: 'Notre Engagement',
        order: 18,
        location: 'Titre section engagement',
      },
      {
        id: 'a-propos-engagement-qualite-title',
        type: 'h4',
        defaultContent: 'Qualité',
        order: 19,
        location: 'Engagement qualité titre',
      },
      {
        id: 'a-propos-engagement-qualite-desc',
        type: 'p',
        defaultContent: 'Sélection rigoureuse des plus belles fleurs de saison et des producteurs locaux',
        order: 20,
        location: 'Engagement qualité description',
      },
      {
        id: 'a-propos-engagement-creativite-title',
        type: 'h4',
        defaultContent: 'Créativité',
        order: 21,
        location: 'Engagement créativité titre',
      },
      {
        id: 'a-propos-engagement-creativite-desc',
        type: 'p',
        defaultContent: 'Compositions uniques et personnalisées qui sortent de l\'ordinaire',
        order: 22,
        location: 'Engagement créativité description',
      },
      {
        id: 'a-propos-engagement-transmission-title',
        type: 'h4',
        defaultContent: 'Transmission',
        order: 23,
        location: 'Engagement transmission titre',
      },
      {
        id: 'a-propos-engagement-transmission-desc',
        type: 'p',
        defaultContent: 'Formation des jeunes générations et préservation des savoir-faire artisanaux',
        order: 24,
        location: 'Engagement transmission description',
      },
    ],
  },
};

/**
 * Récupère le texte édité ou le texte par défaut
 */
export const getPageText = (elementId: string): string => {
  try {
    const data = localStorage.getItem('auvertige_content_data');
    if (!data) {
      // Retourner le texte par défaut
      for (const pageTexts of Object.values(DEFAULT_PAGE_TEXTS)) {
        const element = pageTexts.elements.find(e => e.id === elementId);
        if (element) return element.defaultContent;
      }
      return '';
    }

    const contentData = JSON.parse(data);
    const editedTexts = contentData.pageTexts || {};

    if (editedTexts[elementId]) {
      return editedTexts[elementId];
    }

    // Retourner le texte par défaut
    for (const pageTexts of Object.values(DEFAULT_PAGE_TEXTS)) {
      const element = pageTexts.elements.find(e => e.id === elementId);
      if (element) return element.defaultContent;
    }

    return '';
  } catch {
    return '';
  }
};

/**
 * Sauvegarde un texte édité
 */
export const savePageText = (elementId: string, content: string): boolean => {
  try {
    const data = localStorage.getItem('auvertige_content_data');
    let contentData: any = { pages: {}, featuredBouquets: [], pageTexts: {}, version: '1.0.0' };

    if (data) {
      contentData = JSON.parse(data);
      if (!contentData.pageTexts) {
        contentData.pageTexts = {};
      }
    }

    contentData.pageTexts[elementId] = content;
    localStorage.setItem('auvertige_content_data', JSON.stringify(contentData));

    // Ajouter à l'historique
    if (typeof window !== 'undefined') {
      try {
        import('@/utils/contentHistory').then(({ addHistoryEntry }) => {
          addHistoryEntry({
            type: 'page',
            action: 'updated',
            field: 'text',
            description: `Texte "${elementId}" modifié`,
          });
        });
      } catch (error) {
        // Ignorer les erreurs d'import en mode SSR
      }
    }

    return true;
  } catch (error) {
    console.error('Erreur lors de la sauvegarde du texte:', error);
    return false;
  }
};

/**
 * Récupère tous les textes d'une page
 */
export const getPageTexts = (pageId: string): PageTextElement[] => {
  const pageTexts = DEFAULT_PAGE_TEXTS[pageId];
  if (!pageTexts) return [];

  // Récupérer les textes édités
  try {
    const data = localStorage.getItem('auvertige_content_data');
    const editedTexts: Record<string, string> = data ? JSON.parse(data).pageTexts || {} : {};

    return pageTexts.elements.map(element => ({
      ...element,
      currentContent: editedTexts[element.id] || element.defaultContent,
    }));
  } catch {
    return pageTexts.elements;
  }
};

