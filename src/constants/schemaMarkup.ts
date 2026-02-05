import { Review } from '@/types/review';

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Florist",
  "@id": "https://auvertige-nantes.fr/#business",
  "name": "au ver'tige",
  "alternateName": "au ver'tige Fleuriste",
  "description": "Artisan fleuriste à Nantes spécialisé dans les créations florales personnalisées et les fleurs locales",
  "url": "https://auvertige-nantes.fr",
  "telephone": "+33240541002",
  "priceRange": "€€",
  "image": [
    "https://auvertige-nantes.fr/images/facade.webp",
    "https://auvertige-nantes.fr/images/boutique.webp",
    "https://auvertige-nantes.fr/images/atelier.webp"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "38, boulevard Joliot Curie",
    "addressLocality": "Nantes",
    "postalCode": "44200",
    "addressRegion": "Loire-Atlantique",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.218371,
    "longitude": -1.553621
  },
  "geoRadius": "https://schema.org/GeoCircle",
  "areaServed": [
    {
      "@type": "City",
      "name": "Nantes",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nantes",
        "postalCode": "44000",
        "addressRegion": "Loire-Atlantique",
        "addressCountry": "FR"
      }
    },
    {
      "@type": "City",
      "name": "Rezé",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rezé",
        "postalCode": "44400",
        "addressRegion": "Loire-Atlantique",
        "addressCountry": "FR"
      }
    },
    {
      "@type": "City",
      "name": "Saint-Sébastien-sur-Loire",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Saint-Sébastien-sur-Loire",
        "postalCode": "44230",
        "addressRegion": "Loire-Atlantique",
        "addressCountry": "FR"
      }
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Monday",
      "opens": "14:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "10:00",
      "closes": "13:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/auvertige_nantes",
    "https://www.facebook.com/auvertige.nantes"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Catalogue de services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bouquets de mariage",
          "description": "Création de bouquets de mariée et décorations florales pour mariage"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Compositions événementielles",
          "description": "Décoration florale pour événements d'entreprise et célébrations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ateliers floraux",
          "description": "Cours et ateliers de création florale"
        }
      }
    ]
  }
};

export const productSchema = (product: {
  name: string;
  description: string;
  image: string;
  price: number;
  sku: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image,
  "sku": product.sku,
  "offers": {
    "@type": "Offer",
    "price": product.price,
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "au ver'tige"
    }
  }
});

export const reviewSchema = (reviews: Review[]) => ({
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": reviews.length,
  "bestRating": "5",
  "worstRating": "1",
  "review": reviews.map(review => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "datePublished": review.date,
    "reviewBody": review.content
  }))
});

export const eventSchema = (event: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  image: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": event.name,
  "description": event.description,
  "startDate": event.startDate,
  "endDate": event.endDate,
  "location": {
    "@type": "Place",
    "name": "au ver'tige",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "38, boulevard Joliot Curie",
      "addressLocality": "Nantes",
      "postalCode": "44200",
      "addressRegion": "Loire-Atlantique",
      "addressCountry": "FR"
    }
  },
  "image": event.image,
  "organizer": {
    "@type": "Organization",
    "name": "au ver'tige",
    "url": "https://auvertige-nantes.fr"
  }
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
}); 