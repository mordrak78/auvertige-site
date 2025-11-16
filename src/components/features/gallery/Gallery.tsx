import * as React from 'react';
import { Sparkles } from 'lucide-react';

const Gallery = () => {
  // Images de placeholder pour la galerie
  const galleryImages = [
    { src: "/images/creations/offrir/roses-saint-valentin-03.webp", alt: "Bouquet de roses", category: "Bouquets" },
    { src: "/images/creations/deuil/deuil-bouquet-rond-01.webp", alt: "Bouquet de deuil", category: "Bouquets" },
    { src: "/images/creations/anniversaire/anniv1-bonbonne.webp", alt: "Bouquet anniversaire", category: "Bouquets" },
    { src: "/images/creations/se-faire-plaisir/fleurs2.webp", alt: "Plante verte d'intérieur", category: "Plantes" },
    { src: "/images/creations/mariage/bouquet-de-mariage-1024x683.webp", alt: "Composition mariage", category: "Compositions" }
  ];

  return (
    <section id="galerie" className="py-20 bg-gradient-to-br from-sage-50 to-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-dancing text-sage-700 mb-6">
            Notre Galerie
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-sage-300 w-16"></div>
            <div className="h-px bg-sage-300 w-16"></div>
          </div>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Découvrez quelques-unes de nos créations récentes. 
            Chaque arrangement est unique et conçu avec passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="inline-block bg-sage-600 text-xs px-3 py-1 rounded-full mb-2">
                    {image.category}
                  </span>
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-sage-600 mb-6">
            Envie de voir plus de nos créations ?
          </p>
          <button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
            Suivez-nous sur Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
