import * as React from 'react';
import { ScrollToTopLink } from '@/components/shared/ScrollToTopLink';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronDown, MapPin } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { images } from '@/data/images';
import { OptimizedImage } from './OptimizedImage';
import { usePageContentDisplay } from '@/hooks/usePageContentDisplay';

const zonesDesservies = ["Pirmil", "Saint-Sébastien-sur-Loire", "Rezé"];

const Hero = () => {
  const [showDetails, setShowDetails] = React.useState(false);
  const { shouldAnimate } = useReducedMotion();
  
  // Récupérer le contenu éditable depuis localStorage
  const pageContent = usePageContentDisplay('index', {
    title: 'Au Vertige - Votre artisan fleuriste à Nantes Sud',
    paragraphs: [
      'Découvrez nos créations florales près de chez vous !',
      'Des émotions florales uniques avec des fleurs fraîches et un accueil chaleureux. Parce que l\'on a aussi le droit de se faire plaisir !'
    ],
  });
  
  const heroTitle = pageContent?.title || 'Au Vertige - Votre artisan fleuriste à Nantes Sud';
  const heroDescription = pageContent?.paragraphs?.join('\n') || 'Découvrez nos créations florales près de chez vous !\nDes émotions florales uniques avec des fleurs fraîches et un accueil chaleureux. Parce que l\'on a aussi le droit de se faire plaisir !';

  const scrollToNextSection = () => {
    document.getElementById('featured-categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToOrder = () => {
    document.getElementById('commander')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative w-full min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center pt-32 md:pt-36 pb-8 md:pb-12 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('${images.pages.facade1}')`,
        animation: shouldAnimate ? 'zoomIn 20s ease-in-out infinite alternate' : 'none'
      }}
    >
      {/* Image de préchargement pour améliorer le LCP */}
      <OptimizedImage
        src={images.pages.facade1}
        alt="Fleuriste Nantes - Au Vertige, artisan fleuriste à Nantes Sud, quartier Saint-Jacques"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-0 pointer-events-none"
        priority
        width={1920}
        height={1080}
      />
      
      <div className="container mx-auto px-4 text-center relative z-10 flex flex-col items-center flex-grow">
        <div className="max-w-4xl mt-auto mb-8 md:mb-12">
          {/* Overlay sombre pour améliorer la lisibilité */}
          <Card className="bg-black/40 backdrop-blur-sm border-0 p-8 md:p-12 shadow-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-dancing text-white mb-6 shadow-text-lg">
              {heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-inter shadow-text-sm leading-relaxed">
              {heroDescription.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < heroDescription.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </Card>
          
          {/* CTA Buttons - Animations simplifiées */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              asChild
              className="bg-poppy-500 hover:bg-poppy-600 text-white px-8 py-6 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 min-h-[44px]"
            >
              <ScrollToTopLink to="/creations-florales">
                Voir nos créations
              </ScrollToTopLink>
            </Button>
            <Button
              onClick={scrollToOrder}
              variant="outline"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20 hover:border-white/40 px-8 py-6 rounded-full font-medium text-lg transition-all duration-300 min-h-[44px]"
            >
              Commander maintenant
            </Button>
          </div>

          {/* Zone de service - Version simplifiée */}
          <div className="mt-6">
            <Button
              variant="ghost"
              id="afficherPlusBtn"
              aria-expanded={showDetails}
              aria-controls="texteCache"
              className="text-white/80 hover:text-white underline text-base md:text-lg min-h-[44px] flex items-center gap-2 mx-auto"
              onClick={() => setShowDetails((v) => !v)}
            >
              <MapPin className="h-4 w-4" />
              <span>{showDetails ? "Masquer la zone de service" : "En savoir plus sur notre zone de service..."}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`} />
            </Button>

            {showDetails && (
              <div className="mt-4">
                <Card className="bg-white/10 backdrop-blur-sm border-0 p-6 rounded-lg">
                  <p className="text-white/90 text-base md:text-lg">
                    Nous sommes à deux pas de {zonesDesservies.map((lieu, idx) => (
                      <React.Fragment key={lieu}>
                        <span className="font-semibold">{lieu}</span>
                        {idx < zonesDesservies.length - 1 && ", "}
                      </React.Fragment>
                    ))}.
                    Venez choisir des compositions florales pensées pour vous, que ce soit pour une visite à l'hôpital 
                    Saint-Jacques, un hommage au cimetière Saint-Jacques, ou simplement pour le plaisir d'offrir.
                  </p>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Down Button - Simplifié */}
      {shouldAnimate && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={scrollToNextSection}
            className="flex flex-col items-center gap-2 group"
            aria-label="Aller à la section suivante"
          >
            <span className="text-white/60 text-xs uppercase tracking-wider font-medium">
              Découvrir
            </span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2 group-hover:border-white/60 transition-colors duration-300">
              <div className="w-1.5 h-1.5 bg-white/60 rounded-full group-hover:bg-white/80 animate-bounce" />
            </div>
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;
