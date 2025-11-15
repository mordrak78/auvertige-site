/**
 * Schema Service pour les différents services proposés par Au Vertige
 */

export const bouquetServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://auvertige.fr/#service-bouquets",
  "name": "Bouquet Nantes - Créations sur-mesure",
  "description": "Bouquet Nantes : Au Vertige crée des bouquets sur-mesure et personnalisés pour toutes les occasions. Artisan fleuriste à Nantes Sud, quartier Saint-Jacques. Retrait en boutique.",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://auvertige.fr/#business",
    "name": "Au Vertige",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "38, boulevard Joliot Curie",
      "addressLocality": "Nantes",
      "postalCode": "44200",
      "addressCountry": "FR"
    }
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Nantes",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nantes",
        "postalCode": "44200",
        "addressRegion": "Loire-Atlantique",
        "addressCountry": "FR"
      }
    }
  ],
  "serviceType": "Bouquet de fleurs sur-mesure",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceType": "Retrait en boutique",
    "serviceLocation": {
      "@type": "LocalBusiness",
      "name": "Au Vertige",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "38, boulevard Joliot Curie",
        "addressLocality": "Nantes",
        "postalCode": "44200"
      }
    }
  }
};

export const mariageServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://auvertige.fr/#service-mariage",
  "name": "Fleuriste mariage Nantes - Bouquets et décorations",
  "description": "Fleuriste mariage Nantes : Au Vertige crée vos bouquets de mariée et décorations florales sur-mesure à Nantes Sud. Artisan fleuriste spécialisé mariage. Retrait en boutique.",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://auvertige.fr/#business",
    "name": "Au Vertige"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Nantes",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nantes",
        "postalCode": "44200",
        "addressRegion": "Loire-Atlantique",
        "addressCountry": "FR"
      }
    }
  ],
  "serviceType": "Décoration florale de mariage",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceType": "Retrait en boutique"
  }
};

export const plantesServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://auvertige.fr/#service-plantes",
  "name": "Plantes d'intérieur Nantes",
  "description": "Plantes d'intérieur Nantes : Au Vertige propose une sélection de plantes vertes, plantes fleuries, cactus et succulentes. Artisan fleuriste à Nantes Sud. Conseils personnalisés.",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://auvertige.fr/#business",
    "name": "Au Vertige"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Nantes",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nantes",
        "postalCode": "44200",
        "addressRegion": "Loire-Atlantique",
        "addressCountry": "FR"
      }
    }
  ],
  "serviceType": "Vente de plantes d'intérieur",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceType": "Retrait en boutique"
  }
};

export const fleurissementServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://auvertige.fr/#service-fleurissement",
  "name": "Fleurissement de tombes Nantes",
  "description": "Fleurissement de tombes Nantes : Au Vertige crée des compositions florales respectueuses pour honorer vos proches. Proximité du cimetière Saint-Jacques. Artisan fleuriste à Nantes Sud.",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://auvertige.fr/#business",
    "name": "Au Vertige"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Nantes",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nantes",
        "postalCode": "44200",
        "addressRegion": "Loire-Atlantique",
        "addressCountry": "FR"
      }
    }
  ],
  "serviceType": "Composition florale funéraire",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceType": "Retrait en boutique"
  }
};

export const bougiesServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://auvertige.fr/#service-bougies",
  "name": "Bougies parfumées Nantes",
  "description": "Bougies parfumées Nantes : Au Vertige propose une sélection de bougies artisanales et parfums d'ambiance Mathilde M. Artisan fleuriste à Nantes Sud. Idées cadeaux.",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://auvertige.fr/#business",
    "name": "Au Vertige"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Nantes",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nantes",
        "postalCode": "44200",
        "addressRegion": "Loire-Atlantique",
        "addressCountry": "FR"
      }
    }
  ],
  "serviceType": "Vente de bougies et parfums d'ambiance",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceType": "Retrait en boutique"
  }
};

export const decorationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://auvertige.fr/#service-decoration",
  "name": "Décoration florale Nantes",
  "description": "Décoration florale Nantes : Au Vertige propose fleurs séchées, cadres végétaux, vases et bougeoirs. Artisan fleuriste à Nantes Sud. Conseils sur-mesure pour sublimer votre intérieur.",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://auvertige.fr/#business",
    "name": "Au Vertige"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Nantes",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nantes",
        "postalCode": "44200",
        "addressRegion": "Loire-Atlantique",
        "addressCountry": "FR"
      }
    }
  ],
  "serviceType": "Décoration d'intérieur florale",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceType": "Retrait en boutique"
  }
};

export const professionnelsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://auvertige.fr/#service-professionnels",
  "name": "Services professionnels fleuriste Nantes",
  "description": "Services professionnels fleuriste Nantes : Au Vertige propose abonnements floraux pour entreprises, hôtels, restaurants. Décoration d'événements d'entreprise. Artisan fleuriste à Nantes Sud.",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://auvertige.fr/#business",
    "name": "Au Vertige"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Nantes",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nantes",
        "postalCode": "44200",
        "addressRegion": "Loire-Atlantique",
        "addressCountry": "FR"
      }
    }
  ],
  "serviceType": "Services floraux pour professionnels",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceType": "Retrait en boutique"
  }
};

