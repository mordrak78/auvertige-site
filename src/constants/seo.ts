/**
 * Configuration SEO par défaut pour l'application
 */
export const defaultSeo = {
  title: "Au Vertige - Fleuriste à Nantes",
  description: "Découvrez nos créations florales uniques pour tous vos événements. Fleuriste à Nantes, nous créons des compositions sur mesure pour vos moments spéciaux.",
  image: "/images/og-image.webp",
  type: "website" as const,
  additionalMeta: {
    "keywords": "fleuriste, nantes, compositions florales, événements, mariage, naissance, deuil",
    "author": "Au Vertige",
    "geo.region": "FR-44",
    "geo.placename": "Nantes",
  }
};

/**
 * Configuration SEO spécifique par page
 */
export const pageSeo = {
  home: {
    title: "Au Vertige - Fleuriste à Nantes",
    description: "Bienvenue chez Au Vertige, votre fleuriste à Nantes. Découvrez nos créations florales uniques pour tous vos événements.",
  },
  services: {
    title: "Nos Services - Au Vertige",
    description: "Découvrez nos services de fleuriste à Nantes : compositions pour mariage, naissance, deuil, et événements spéciaux.",
    type: "website" as const,
  },
  contact: {
    title: "Contact - Au Vertige",
    description: "Contactez votre fleuriste à Nantes. Nous sommes à votre écoute pour tous vos projets floraux.",
    type: "website" as const,
  },
  legal: {
    title: "Mentions Légales - Au Vertige",
    description: "Mentions légales et politique de confidentialité d'Au Vertige, fleuriste à Nantes.",
    type: "website" as const,
  }
}; 