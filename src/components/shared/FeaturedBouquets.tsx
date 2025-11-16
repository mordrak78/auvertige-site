import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from './OptimizedImage';
import { getFeaturedBouquets } from '@/utils/contentStorage';
import { ArrowRight } from 'lucide-react';

export const FeaturedBouquets: React.FC = () => {
  const [bouquets, setBouquets] = React.useState(getFeaturedBouquets());

  React.useEffect(() => {
    // Recharger les bouquets si le localStorage change
    const handleStorageChange = () => {
      setBouquets(getFeaturedBouquets());
    };

    window.addEventListener('storage', handleStorageChange);
    // Vérifier périodiquement pour les changements dans le même onglet
    const interval = setInterval(() => {
      setBouquets(getFeaturedBouquets());
    }, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  if (!bouquets || bouquets.length === 0) {
    return null; // Ne rien afficher si aucun bouquet phare n'est configuré
  }

  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-dancing text-sage-700 mb-4">
            Nos créations phares
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Découvrez nos bouquets et compositions les plus appréciés
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bouquets.map((bouquet, index) => (
            <motion.div
              key={bouquet.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative aspect-square overflow-hidden">
                  <OptimizedImage
                    src={bouquet.image}
                    alt={bouquet.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={400}
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-dancing text-sage-700 mb-2">
                    {bouquet.title}
                  </h3>
                  {bouquet.description && (
                    <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
                      {bouquet.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-bold text-poppy-600">
                      {bouquet.price.toFixed(2)} €
                    </span>
                    <Button
                      asChild
                      className="bg-sage-600 hover:bg-sage-700 text-white"
                      size="sm"
                    >
                      <Link to="/contact">
                        Commander
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

