import * as React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { images } from '@/data/images';
import { OptimizedImage } from '@/components/shared/OptimizedImage';

const Footer = () => {
  const handleCall = () => {
    window.location.href = 'tel:0240541002';
  };

  const scrollToOrder = () => {
    document.getElementById('commander')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-sage-800 text-white" role="contentinfo">
      {/* CTAs finaux */}
      <div className="bg-sage-700 py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-dancing mb-4">Prêt à commander votre bouquet ?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button
              onClick={handleCall}
              className="bg-poppy-500 hover:bg-poppy-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 min-h-[44px] min-w-[120px] focus:outline-none focus:ring-2 focus:ring-poppy-300 focus:ring-offset-2"
              aria-label="Appeler Au Vertige au 02 40 54 10 02"
            >
              <Phone size={18} className="mr-2" aria-hidden="true" />
              <span>Appeler</span>
            </Button>
          </div>
          <div className="mt-2">
            <button
              onClick={scrollToOrder}
              className="text-sage-100 underline hover:text-white text-sm transition-colors min-h-[44px] px-2 focus:outline-none focus:ring-2 focus:ring-poppy-300 focus:ring-offset-2 rounded"
              aria-label="Aller au formulaire de commande"
            >
              Accéder au formulaire de commande
            </button>
          </div>
        </div>
      </div>

      {/* Contenu principal du footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* Logo et description */}
            <div className="text-center md:text-left">
              <div className="flex flex-col items-center md:items-start mb-4 space-y-2">
                <div className="flex items-center justify-center md:justify-start">
                  <OptimizedImage
                    src={images.logos.logo9}
                    alt="Logo Au Vertige"
                    className="h-14 w-14 object-contain mr-3"
                    width={56}
                    height={56}
                  />
                  <span className="text-2xl font-dancing">Au Vertige</span>
                </div>
              </div>
              <p className="text-sage-200 text-sm leading-relaxed mb-4">
                Artisan fleuriste à Nantes, créations florales uniques pour sublimer vos moments précieux.
              </p>
              <p className="text-sage-300 text-xs">
                Fleurs de saison • Circuit court • Service personnalisé
              </p>
            </div>

            {/* Contact rapide */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4" id="contact-footer">Contact & Boutique</h3>
              <div className="space-y-3 text-sage-200 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin size={16} aria-hidden="true" />
                  <span>38, boulevard Joliot Curie, 44200 Nantes</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Phone size={16} aria-hidden="true" />
                  <button 
                    onClick={handleCall} 
                    className="hover:text-white transition-colors min-h-[44px] px-2 focus:outline-none focus:ring-2 focus:ring-poppy-300 focus:ring-offset-2 rounded"
                    aria-label="Appeler Au Vertige au 02 40 54 10 02"
                  >
                    02 40 54 10 02
                  </button>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail size={16} aria-hidden="true" />
                  <a href="mailto:contact@auvertige-nantes.fr" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-poppy-300 focus:ring-offset-2 rounded px-2 min-h-[44px] flex items-center">
                    contact@auvertige-nantes.fr
                  </a>
                </div>
                <p className="text-xs text-sage-300 mt-2">
                  Lun-Sam 9h-19h • Dim 9h-13h
                </p>
              </div>
            </div>

            {/* Nouvelle section : Notre boutique partenaire */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4" id="partenaire-footer">Notre boutique partenaire</h3>
              <a 
                href="https://www.artisansfleuristesdefrance.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 justify-center mb-4"
              >
                <OptimizedImage
                  src={images.logos.logo1}
                  alt="Artisans Fleuristes de France"
                  className="h-12 w-auto"
                  width={48}
                  height={48}
                />
                <div>
                  <span className="text-sage-700 font-medium block">Membre Artisans Fleuristes de France</span>
                </div>
              </a>
              <p className="text-xs text-sage-300 mb-4">
                Livraison de fleurs partout en France par des artisans locaux.
              </p>
              
              {/* Section Nos thématiques */}
              <div className="mt-4 pt-4 border-t border-sage-700">
                <h4 className="text-sm font-semibold mb-3 text-sage-200">Nos thématiques</h4>
                <nav className="grid grid-cols-2 gap-2 text-sm">
                  <Link to="/creations-florales" className="text-sage-300 hover:text-white transition-colors">
                    Créations florales
                  </Link>
                  <Link to="/mariage" className="text-sage-300 hover:text-white transition-colors">
                    Mariage
                  </Link>
                  <Link to="/evenements#anniversaire" className="text-sage-300 hover:text-white transition-colors">
                    Anniversaire
                  </Link>
                  <Link to="/evenements#bapteme" className="text-sage-300 hover:text-white transition-colors">
                    Baptême
                  </Link>
                  <Link to="/deuil" className="text-sage-300 hover:text-white transition-colors">
                    Deuil
                  </Link>
                  <Link to="/evenements#plaisir-offrir" className="text-sage-300 hover:text-white transition-colors">
                    Plaisirs d'offrir
                  </Link>
                  <Link to="/evenements#se-faire-plaisir" className="text-sage-300 hover:text-white transition-colors col-span-2">
                    Se faire plaisir
                  </Link>
                </nav>
              </div>
            </div>

            {/* Réseaux sociaux et navigation */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4" id="reseaux-footer">Suivez-nous</h3>
              <div className="flex justify-center space-x-4 mb-6">
                <a 
                  href="https://www.instagram.com/auvertigefleuriste_nantes/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-sage-700 rounded-full flex items-center justify-center hover:bg-sage-600 transition-colors"
                  aria-label="Instagram Au Vertige"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://www.facebook.com/auvertigenantes/?locale=fr_FR" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-sage-700 rounded-full flex items-center justify-center hover:bg-sage-600 transition-colors"
                  aria-label="Facebook Au Vertige"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="mailto:contact@auvertige-nantes.fr" 
                  className="w-10 h-10 bg-sage-700 rounded-full flex items-center justify-center hover:bg-sage-600 transition-colors"
                  aria-label="Email Au Vertige"
                >
                  <Mail size={18} />
                </a>
              </div>
              
              {/* Navigation rapide - Tous les liens pour le SEO */}
              <div className="space-y-4">
            <h4 className="text-sm font-semibold mb-3 text-sage-200" id="navigation-footer">Navigation</h4>
            <nav className="grid grid-cols-1 gap-2 text-sm" aria-labelledby="navigation-footer">
              <Link to="/services" className="block hover:text-white transition-colors">Nos services</Link>
              <Link to="/creations-florales" className="block hover:text-white transition-colors">Créations florales</Link>
              <Link to="/fleuriste-saint-jacques" className="block hover:text-white transition-colors">Fleuriste Saint-Jacques</Link>
              <Link to="/fleuriste-ouvert-dimanche-nantes" className="block hover:text-white transition-colors">Ouvert dimanche</Link>
              <Link to="/evenements" className="block hover:text-white transition-colors">Événements</Link>
              <Link to="/a-propos" className="block hover:text-white transition-colors">À propos</Link>
              <Link to="/contact" className="block hover:text-white transition-colors">Contact</Link>
            </nav>
              </div>
            </div>
          </div>

          {/* Ligne de séparation et mentions légales */}
          <Separator className="bg-sage-700" />
          <div className="pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sage-300 text-sm space-y-4 md:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <p>© 2024 Au Vertige. Tous droits réservés.</p>
                <div className="flex space-x-4">
                  <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-[#d9d9d9]">Propulsé par</span>
                <a 
                  href="https://proximind.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f9ca24] hover:underline ml-1"
                >
                  Proximind
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
