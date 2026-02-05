import * as React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollToTopLink } from './ScrollToTopLink';

const zones = [
  { name: 'Saint-Jacques', description: 'Quartier Saint-Jacques, notre cœur de métier', link: '/fleuriste-saint-jacques' },
  { name: 'Nantes Sud', description: 'Tout Nantes Sud, notre zone principale', link: '/services' },
  { name: 'Pirmil', description: 'À deux pas de Pirmil, facilement accessible', link: '/services' },
  { name: 'Rezé', description: 'Rezé et ses environs, à proximité', link: '/services' },
  { name: 'Saint-Sébastien-sur-Loire', description: 'Saint-Sébastien-sur-Loire, zone desservie', link: '/services' },
  { name: 'Nantes centre', description: 'Nantes centre, accessible depuis Saint-Jacques', link: '/services' }
];

const ZonesDesserviesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-sage-50 to-cream-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Navigation className="w-8 h-8 text-sage-600" />
              <h2 className="text-3xl md:text-4xl font-dancing text-sage-700">
                Nos zones desservies
              </h2>
            </div>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              Fleuriste Nantes : au ver'tige est votre artisan fleuriste à Nantes Sud, quartier Saint-Jacques.
              Nous accueillons les clients de Nantes centre, Pirmil, Rezé, Saint-Sébastien-sur-Loire et toute la région nantaise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {zones.map((zone, index) => (
              <motion.div
                key={zone.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-sage-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-sage-700 mb-2">
                      {zone.name}
                    </h3>
                    <p className="text-sage-600 text-sm mb-3">
                      {zone.description}
                    </p>
                    {zone.link === '/fleuriste-saint-jacques' && (
                      <Link
                        to={zone.link}
                        className="text-sage-600 hover:text-sage-700 font-medium text-sm inline-flex items-center gap-1"
                      >
                        En savoir plus →
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-lg text-center"
          >
            <Heart className="w-12 h-12 text-sage-600 mx-auto mb-4" />
            <h3 className="text-2xl font-dancing text-sage-700 mb-4">
              Retrait en boutique uniquement
            </h3>
            <p className="text-sage-600 mb-4">
              Toutes nos créations sont à retirer directement en boutique au <strong className="text-sage-700">38, boulevard Joliot Curie, 44200 Nantes</strong>,
              dans le quartier Saint-Jacques. Cela nous permet de garantir la fraîcheur et la qualité de nos compositions,
              et de vous conseiller personnellement.
            </p>
            <p className="text-sage-600">
              <strong className="text-sage-700">Fleuriste Nantes</strong> : Parking disponible à proximité,
              facilement accessible depuis toutes les zones mentionnées.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ZonesDesserviesSection;

