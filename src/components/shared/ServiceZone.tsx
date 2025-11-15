import * as React from 'react';
import { ChevronDown, MapPin } from 'lucide-react';

const ServiceZone = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white underline hover:text-white/80 transition-colors text-sm"
      >
        {isOpen ? 'Masquer la zone de service' : 'En savoir plus sur notre zone de service'}
      </button>
      
      {isOpen && (
        <div className="mt-4 animate-fade-in">
          <p className="text-white/90 text-sm leading-relaxed">
            Nous sommes à deux pas de Pirmil, Saint-Sébastien-sur-Loire, Rezé. 
            Venez choisir des compositions florales pensées pour vous, que ce soit pour une visite à l'hôpital 
            Saint-Jacques, un hommage au cimetière Saint-Jacques, ou simplement pour le plaisir d'offrir.
          </p>
        </div>
      )}
    </div>
  );
};

export default ServiceZone;