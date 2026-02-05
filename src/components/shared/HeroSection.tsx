import * as React from 'react';
import { Phone, Flower } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleCall = () => {
    window.location.href = 'tel:0240541002';
  };

  const scrollToOrder = () => {
    document.getElementById('commander')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream-50 to-sage-50 pt-16 overflow-hidden">
      {/* Image de fond optimisée mobile */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="/images/hero/facade1.webp"
          alt="Fleuriste au ver'tige - Nantes"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center min-h-screen justify-center py-8">

          {/* H1 SEO optimisé */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-dancing text-sage-700 mb-4 leading-tight">
            Fleuriste à Nantes
          </h1>

          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-sage-300 w-8"></div>
            <Flower className="mx-3 text-poppy-500" size={20} />
            <div className="h-px bg-sage-300 w-8"></div>
          </div>

          <h2 className="text-lg md:text-xl text-sage-600 mb-6 font-inter max-w-2xl">
            Bouquets personnalisés & Livraison rapide
          </h2>

          <p className="text-base md:text-lg text-sage-500 mb-8 max-w-lg leading-relaxed">
            Créations florales pour tous vos moments de vie
          </p>

          {/* CTAs principaux */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Button
              onClick={handleCall}
              className="bg-poppy-500 hover:bg-poppy-600 text-white px-6 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2 text-base"
            >
              <Phone size={18} />
              <span>📞 Appeler</span>
            </Button>

            <button
              onClick={scrollToOrder}
              className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Demander un devis
            </button>
          </div>

          {/* Infos rapides */}
          <div className="mt-8 text-sm text-sage-600 space-y-1">
            <p>✓ Livraison Nantes et agglo</p>
            <p>✓ Retrait en boutique gratuit</p>
            <p>✓ Créations artisanales</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
