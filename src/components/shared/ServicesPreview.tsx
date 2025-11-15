import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const services = [
  {
    key: 'bouquets',
    title: "Bouquets & fleurs fraîches",
    image: "/images/creations/offrir/roses-saint-valentin-03.jpg",
    description: "Bouquets sur-mesure, livraison à Nantes Sud (Saint-Jacques, Pirmil, Rezé, Saint-Sébastien-sur-Loire), abonnement floral, créations pour toutes les occasions.",
    tag: 'Populaire',
    isNew: false,
    link: '/services#bouquets'
  },
  {
    key: 'plantes',
    title: "Plantes",
    image: "/images/creations/anniversaire/anniv4-beaucarnea.jpg",
    description: "Plantes vertes d'intérieur, plantes fleuries, cactus et succulentes. Mention spéciale pour les 'Boul Ki Mous' - nos plantes coup de cœur !",
    tag: 'Tendance',
    isNew: false,
    link: '/services#plantes'
  },
  {
    key: 'fleurissement-tombes',
    title: "Fleurissement de tombes",
    image: "/images/creations/deuil/deuil-bouquet-rond-01.jpg",
    description: "Compositions florales respectueuses pour honorer vos proches. Proximité du cimetière Saint-Jacques pour un service facilité.",
    tag: 'Service',
    isNew: false,
    link: '/services#fleurissement'
  },
  {
    key: 'bougies',
    title: "Bougies & parfums d'ambiance",
    image: "/images/creations/se-faire-plaisir/fleurs2.webp",
    description: "Sélection de bougies artisanales et parfums d'ambiance de la marque Mathilde M. Idées cadeaux parfaites à Nantes Sud.",
    tag: 'Cadeau',
    isNew: true,
    link: '/services#bougies'
  },
  {
    key: 'decoration',
    title: "Décoration d'intérieur",
    image: "/images/creations/se-faire-plaisir/fleurs3.webp",
    description: "Fleurs séchées, cadres végétaux, vases, bougeoirs personnalisés. Conseils sur-mesure pour sublimer votre intérieur à Nantes Sud.",
    tag: 'Décoration',
    isNew: false,
    link: '/services#decoration'
  },
  {
    key: 'professionnels',
    title: "Services pour professionnels",
    image: "/images/creations/se-faire-plaisir/fleurs4.webp",
    description: "Abonnements floraux pour maisons de retraite, restaurants, hôtels, bureaux. Événements d'entreprise avec devis sur-mesure à Nantes Sud.",
    tag: 'Pro',
    isNew: false,
    link: '/services#professionnels'
  }
];

const ServicesPreview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-dancing text-sage-700 mb-4">
            Nos Services
          </h2>
          <p className="text-sage-600 text-lg max-w-2xl mx-auto mb-6">
            Découvrez nos prestations pour sublimer vos espaces et événements
          </p>
        </motion.div>

        {/* Grille des services avec animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link to={service.link}>
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-sage-100 h-full flex flex-col relative overflow-hidden group cursor-pointer">
                  {/* Pastille "Nouveau" animée */}
                  {service.isNew && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="absolute top-4 right-4 bg-gradient-to-r from-poppy-500 to-poppy-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10"
                    >
                      <Sparkles className="inline-block h-3 w-3" />
                      {' '}Nouveau
                    </motion.div>
                  )}
                  
                  {/* Tag de catégorie */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-sage-700 px-3 py-1 rounded-full text-xs font-medium shadow-md z-10"
                  >
                    {service.tag}
                  </motion.div>
                  
                  {/* Image avec effet de zoom */}
                  <div className="w-full h-64 overflow-hidden rounded-t-3xl relative">
                    <motion.img
                      src={service.image}
                      alt={`${service.title} - Fleuriste Nantes, Au Vertige à Nantes Sud`}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Contenu */}
                  <div className="p-6 text-center flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-sage-700 font-inter mb-3 group-hover:text-poppy-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sage-600 text-sm font-inter line-clamp-3 mb-6 flex-grow leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Bouton CTA avec animation */}
                    <div className="mt-auto">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full"
                      >
                        <div className="w-full bg-gradient-to-r from-sage-500 to-sage-600 group-hover:from-sage-600 group-hover:to-sage-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm shadow-lg group-hover:shadow-xl flex items-center justify-center gap-2">
                          En savoir +
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight size={16} />
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA principal avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
            >
              Découvrir tous nos services
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
