import * as React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { images } from '@/data/images';
import { OptimizedImage } from '@/components/shared/OptimizedImage';

const ShopInfo = () => {
  const handleCall = () => {
    window.location.href = 'tel:0240541002';
  };

  const openMaps = () => {
    window.open('https://maps.google.com/?q=Au+Vertige+Fleuriste+Nantes', '_blank');
  };

  // Ajout du hook useState pour le fallback de la carte
  const [iframeError, setIframeError] = React.useState(false);

  return (
    <section id="boutique" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-dancing text-sage-700 mb-4">
              Votre fleuriste Au Vertige à Nantes Sud
            </h2>
            <p className="text-sage-600 text-lg">
              Retrouvez-nous à Nantes Sud, quartier Saint-Jacques, à deux pas de Pirmil, Rezé et Saint-Sébastien-sur-Loire. Conseils personnalisés et accueil chaleureux en boutique.
            </p>
            <Link to="/contact" className="inline-block mt-2 text-sage-600 underline hover:text-poppy-600 text-sm transition-colors">
              Voir la page de contact complète
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Informations pratiques */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 h-full flex flex-col shadow-2xl border border-sage-100">
                <h3 className="text-xl font-semibold text-sage-700 mb-4">Informations pratiques</h3>
                <div className="space-y-5">
                  {/* Adresse */}
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-poppy-500 mt-1 flex-shrink-0" size={22} />
                    <div>
                      <p className="font-medium text-sage-700">Adresse</p>
                      <p className="text-sage-600 text-base">
                        38 Bd Joliot Curie<br />
                        44200 Nantes
                      </p>
                    </div>
                  </div>
                  {/* Horaires */}
                  <div className="flex items-start space-x-3">
                    <Clock className="text-poppy-500 mt-1 flex-shrink-0" size={22} />
                    <div>
                      <p className="font-medium text-sage-700">Horaires d'ouverture</p>
                      <div className="text-sage-600 text-base">
                        <p>Lundi - Vendredi : 9h - 19h</p>
                        <p>Samedi : 9h - 18h</p>
                        <p>Dimanche : 9h - 13h</p>
                        <p className="text-poppy-500 font-medium mt-1">Fermé le lundi matin</p>
                      </div>
                    </div>
                  </div>
                  {/* Téléphone */}
                  <div className="flex items-start space-x-3">
                    <Phone className="text-poppy-500 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold text-sage-700 mb-1">Téléphone</p>
                      <a
                        href="tel:0240541002"
                        onClick={handleCall}
                        className="text-poppy-600 hover:text-poppy-800 transition-colors font-bold text-lg underline"
                      >
                        02 40 54 10 02
                      </a>
                      <p className="text-sm text-sage-500 mt-1">Cliquez pour appeler</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte ou image boutique (Localisation) */}
            <div className="bg-white rounded-3xl p-8 h-full flex flex-col shadow-2xl border border-sage-100">
              <h3 className="text-xl font-semibold text-sage-700 mb-4">Localisation</h3>
              <div className="aspect-video bg-sage-100 rounded-2xl overflow-hidden shadow-md flex items-center justify-center">
                {iframeError ? (
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <p className="mb-2 text-sage-600">La carte ne s'affiche pas&nbsp;?</p>
                    <a
                      href="https://goo.gl/maps/Czd3SZ4VJ2xc9F9A8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 text-center shadow-md"
                    >
                      Ouvrir dans Google Maps
                    </a>
                  </div>
                ) : (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.113295926258!2d-1.5366315236302184!3d47.194794971154955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805e93742d5ef73%3A0x4957ff7b35a3a1fe!2sAu%20Vertige!5e0!3m2!1sfr!2sfr!4v1749741740053!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation Au Vertige - Fleuriste Nantes"
                    onError={() => setIframeError(true)}
                  ></iframe>
                )}
              </div>
              <p className="text-base text-sage-600 mt-4">
                📍 En plein centre-ville, proche des transports en commun
              </p>
            </div>

            {/* Nouvelle carte : Notre boutique partenaire */}
            <div className="bg-white rounded-3xl p-8 h-full flex flex-col items-center shadow-2xl border border-sage-100">
              <h3 className="text-xl font-semibold text-sage-700 mb-4 text-center">Notre boutique partenaire</h3>
              <div className="flex-grow flex flex-col items-center justify-center">
                <OptimizedImage
                  src={images.logos.logo1}
                  alt="Logo Artisans Fleuristes de France"
                  className="max-h-20 w-auto object-contain object-center mx-auto mb-4"
                  width={80}
                  height={80}
                />
                <p className="text-base text-sage-600 text-center mb-4">
                  Découvrez une plus large sélection et faites livrer vos fleurs partout en France grâce à notre réseau partenaire.
                </p>
                <a 
                  href="https://www.artisansfleuristesdefrance.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 text-center shadow-md"
                >
                  Visiter Artisans Fleuristes de France
                </a>
              </div>
               <p className="text-xs text-sage-500 mt-4 pt-4 border-t border-sage-200 w-full text-center">
                Artisans sélectionnés • Qualité garantie • Service national
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopInfo;
