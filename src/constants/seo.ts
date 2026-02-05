/**
 * Configuration SEO par défaut pour l'application
 */
export const defaultSeo = {
  title: "au ver'tige - Fleuriste à Nantes",
  description: "Découvrez nos créations florales uniques pour tous vos événements. Fleuriste à Nantes, nous créons des compositions sur mesure pour vos moments spéciaux.",
  image: "/images/og-image.webp",
  type: "website" as const,
  additionalMeta: {
    "keywords": "fleuriste, nantes, compositions florales, événements, mariage, naissance, deuil",
    "author": "au ver'tige",
    "geo.region": "FR-44",
    "geo.placename": "Nantes",
  }
};

/**
 * Configuration SEO spécifique par page
 */
export const pageSeo = {
  home: {
    title: "au ver'tige - Fleuriste à Nantes",
    description: "Bienvenue chez au ver'tige, votre fleuriste à Nantes. Découvrez nos créations florales uniques pour tous vos événements.",
  },
  services: {
    title: "Nos Services - au ver'tige",
    description: "Découvrez nos services de fleuriste à Nantes : compositions pour mariage, naissance, deuil, et événements spéciaux.",
    type: "website" as const,
  },
  contact: {
    title: "Contact - au ver'tige",
    description: "Contactez votre fleuriste à Nantes. Nous sommes à votre écoute pour tous vos projets floraux.",
    type: "website" as const,
  },
  legal: {
    title: "Mentions Légales - au ver'tige",
    description: "Mentions légales et politique de confidentialité d'au ver'tige, fleuriste à Nantes.",
    type: "website" as const,
  }
}; 