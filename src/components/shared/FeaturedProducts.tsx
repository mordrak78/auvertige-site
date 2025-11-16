import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from './OptimizedImage';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FeaturedProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

const featuredProducts: FeaturedProduct[] = [
  {
    id: 'produit-1',
    title: 'Bougies Mathilde M',
    description: 'Bougies artisanales parfumées pour créer une ambiance chaleureuse et élégante dans votre intérieur.',
    image: '/images/creations/se-faire-plaisir/bougie/fleurs1.webp',
    link: '/services#bougies',
    category: 'Décoration'
  },
  {
    id: 'produit-2',
    title: 'Plantes "Boul Ki Mous"',
    description: 'Nos plantes coup de cœur, sélectionnées avec soin pour leur beauté et leur facilité d\'entretien.',
    image: '/images/creations/se-faire-plaisir/plante/anniv4-beaucarnea.webp',
    link: '/services#plantes',
    category: 'Plantes'
  },
  {
    id: 'produit-3',
    title: 'Compositions Déco',
    description: 'Créations florales pour embellir votre intérieur et apporter une touche de nature à votre quotidien.',
    image: '/images/creations/se-faire-plaisir/decoration/fleurs3.webp',
    link: '/services#decoration',
    category: 'Décoration'
  }
];

export const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-dancing text-sage-700 mb-4">
            Nos produits phares
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Découvrez nos sélections spéciales pour embellir votre quotidien
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full flex flex-col border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <OptimizedImage
                    src={product.image}
                    alt={`${product.title} - Fleuriste Nantes, Au Vertige - ${product.description}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-poppy-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                      {product.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-dancing text-sage-700 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-sm text-sage-600 mb-6 flex-grow leading-relaxed">
                    {product.description}
                  </p>
                  <Button
                    asChild
                    className="bg-sage-600 hover:bg-sage-700 text-white w-full"
                    size="sm"
                  >
                    <Link to={product.link}>
                      Découvrir
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

