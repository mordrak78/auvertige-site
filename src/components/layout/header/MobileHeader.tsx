import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BrandName } from '@/components/shared/BrandName';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCall = () => {
    window.location.href = 'tel:0240541002';
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm fixed top-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo/logo9.webp"
              alt="Au Vertige - Fleuriste Nantes"
              className="h-16 w-16 object-contain"
            />
            <BrandName className="ml-2 text-lg text-sage-700 hidden sm:flex" />
          </div>

          {/* Navigation rapide desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#creations" className="text-sage-700 hover:text-sage-500 transition-all duration-300 text-sm font-medium relative group">
              Créations
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sage-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#commander" className="text-sage-700 hover:text-sage-500 transition-all duration-300 text-sm font-medium relative group">
              Commander
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sage-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#boutique" className="text-sage-700 hover:text-sage-500 transition-all duration-300 text-sm font-medium relative group">
              Boutique
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sage-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#avis" className="text-sage-700 hover:text-sage-500 transition-all duration-300 text-sm font-medium relative group">
              Avis
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sage-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Bouton Appeler */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCall}
              className="bg-sage-600 hover:bg-sage-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 font-medium transition-all duration-300"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">Appeler</span>
            </button>

            {/* Menu Mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-sage-700 hover:text-sage-500 transition-colors ml-2"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-sage-100 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <a href="#creations" className="text-sage-700 hover:text-sage-500 transition-colors font-medium px-4" onClick={toggleMenu}>
                Nos créations
              </a>
              <a href="/services" className="text-sage-700 hover:text-sage-500 transition-colors font-medium px-4" onClick={toggleMenu}>
                Nos services
              </a>
              <a href="#commander" className="text-sage-700 hover:text-sage-500 transition-colors font-medium px-4" onClick={toggleMenu}>
                Commander
              </a>
              <a href="#boutique" className="text-sage-700 hover:text-sage-500 transition-colors font-medium px-4" onClick={toggleMenu}>
                Infos boutique
              </a>
              <a href="#avis" className="text-sage-700 hover:text-sage-500 transition-colors font-medium px-4" onClick={toggleMenu}>
                Avis clients
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default MobileHeader;
