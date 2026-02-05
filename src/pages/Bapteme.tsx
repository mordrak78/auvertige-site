import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/layout/Layout';
import Seo from '@/components/shared/Seo';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import AnimatedModal from '@/components/shared/AnimatedModal';
import { images } from '@/data/images';
import { RelatedPages } from '@/components/shared/RelatedPages';
import { Heart, Gift, Leaf, Palette, Star, Truck } from 'lucide-react';

const imagesBapteme = [
  images.creations.bapteme.lys1,
  images.creations.bapteme.lys2,
  images.creations.bapteme.lys3,
  images.creations.bapteme.lys4,
];

const Bapteme = () => {
  useScrollToTop();
  const [showRdvModal, setShowRdvModal] = useState(false);
  const bouquets = [
    {
      name: "Bouquet Baptême - Pureté",
      description: "Un bouquet blanc immaculé pour célébrer la pureté",
      image: "/images/creations/bapteme/DSCN08111-e1518269397381.webp",
      price: 65,
      sku: "BAP-001"
    },
    {
      name: "Bouquet Baptême - Douceur",
      description: "Des fleurs délicates pour un moment empreint de douceur",
      image: "/images/creations/bapteme/DSCN12371.webp",
      price: 75,
      sku: "BAP-002"
    },
    {
      name: "Bouquet Baptême - Harmonie",
      description: "Une composition harmonieuse pour célébrer l'événement",
      image: "/images/creations/bapteme/DSCN12401.webp",
      price: 85,
      sku: "BAP-003"
    }
  ];

  return (
    <Layout>
      <Seo
        title="Fleuriste Baptême Nantes | Décoration florale | au ver'tige"
        description="Décoration florale pour baptême à Nantes avec au ver'tige. Centres de table, décor église et réception. Créations douces et élégantes."
        type="website"
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Baptême", url: "/Bapteme" }
        ]}
      />
      {/* Schema Service pour le baptême */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Bouquets de baptême",
            "description": "Création de bouquets de baptême personnalisés, livraison à Nantes Sud, Saint-Jacques, Pirmil, Rezé, Saint-Sébastien-sur-Loire.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "au ver'tige",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "38, boulevard Joliot Curie",
                "addressLocality": "Nantes",
                "postalCode": "44200",
                "addressCountry": "FR"
              }
            },
            "areaServed": [
              "Nantes Sud", "Saint-Jacques", "Pirmil", "Rezé", "Saint-Sébastien-sur-Loire"
            ]
          })
        }}
      />
      <section className="min-h-screen bg-cream-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-dancing text-sage-700 mb-8 text-center"
          >
            Bouquets de baptême à Nantes Sud Saint-Jacques
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-sage-600 mb-8 text-center max-w-2xl mx-auto"
          >
            Célébrez un baptême avec un bouquet unique, livré à Nantes Sud, quartier Saint-Jacques, Pirmil, Rezé ou Saint-Sébastien-sur-Loire. Créations personnalisées, conseils sur-mesure, livraison rapide à l'église ou à domicile.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="block bg-poppy-500 hover:bg-poppy-600 text-white font-bold py-3 px-6 rounded-full shadow transition text-lg text-center">Commander un bouquet de baptême</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/creations-florales" className="block bg-sage-600 hover:bg-sage-700 text-white font-bold py-3 px-6 rounded-full shadow transition text-lg text-center">Voir nos créations</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/services" className="block bg-white border border-sage-200 text-sage-700 font-bold py-3 px-6 rounded-full shadow transition text-lg hover:bg-sage-50 text-center">Retour aux services</Link>
            </motion.div>
          </motion.div>

          {/* Section Galerie Baptême */}
          <section className="mb-16">
            <h3 className="text-xl md:text-2xl font-dancing text-sage-700 mb-6 text-center">Découvrez nos réalisations</h3>
            <Carousel opts={{ align: 'start' }}>
              <CarouselContent>
                {Array.from({ length: Math.ceil(imagesBapteme.length / 4) }).map((_, slideIdx) => (
                  <CarouselItem key={slideIdx}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {imagesBapteme.slice(slideIdx * 4, slideIdx * 4 + 4).map((img, idx) => (
                        <div key={img} className="bg-white rounded-2xl shadow-md overflow-hidden">
                          <img src={img} alt={`Baptême ${slideIdx * 4 + idx + 1}`} className="w-full aspect-[9/16] object-cover object-center" loading="lazy" />
                        </div>
                      ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6 gap-4">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-sage-700 mb-4">Nos prestations baptême</h2>
            <ul className="text-sage-600 text-lg space-y-2 mb-6">
              {['👶 Bouquets personnalisés pour le baptême', '🎀 Livraison à l\'église ou à domicile', '🌸 Conseils pour choisir les fleurs selon la saison', '🚚 Livraison rapide à Nantes Sud et alentours'].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="text-poppy-600 hover:underline font-medium">Prendre rendez-vous pour un accompagnement personnalisé</Link>
            </motion.div>
            <div className="flex justify-center mt-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setShowRdvModal(true)}
                  className="bg-poppy-500 hover:bg-poppy-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition text-lg"
                >
                  Demander un devis
                </Button>
              </motion.div>
            </div>
          </motion.section>

          {/* Bloc EEAT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16 max-w-2xl mx-auto bg-sage-50 rounded-2xl p-8 shadow-lg text-center"
          >
            <h2 className="text-2xl md:text-3xl font-dancing text-sage-700 mb-4">Pourquoi choisir au ver'tige pour un baptême ?</h2>
            <ul className="text-sage-700 text-lg space-y-3 mb-4">
              <li className="flex items-start gap-2">
                <Leaf className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
                <span>Fleurs locales et de saison, circuit court</span>
              </li>
              <li className="flex items-start gap-2">
                <Palette className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
                <span>Créations artisanales et personnalisées</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
                <span>Plus de 200 clients satisfaits</span>
              </li>
              <li className="flex items-start gap-2">
                <Truck className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
                <span>Retrait en boutique au 38, boulevard Joliot Curie</span>
              </li>
            </ul>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/a-propos" className="inline-block mt-4 bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg">En savoir plus sur notre engagement</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Pages similaires */}
      <RelatedPages
        currentPage="/bapteme"
        pages={[
          {
            title: "Mariage",
            url: "/mariage",
            description: "Créations florales pour votre plus beau jour",
            icon: Heart
          },
          {
            title: "Anniversaire",
            url: "/anniversaire",
            description: "Bouquets joyeux pour célébrer un anniversaire",
            icon: Gift
          },
          {
            title: "Plaisirs d'offrir",
            url: "/plaisirs-offrir",
            description: "Bouquets pour faire plaisir à vos proches"
          }
        ]}
      />

      {/* Modal prise de rendez-vous */}
      <AnimatedModal
        isOpen={showRdvModal}
        onClose={() => setShowRdvModal(false)}
        title="Prendre rendez-vous pour un devis baptême"
        size="md"
      >
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sage-700 mb-1">Nom complet</label>
            <input type="text" className="w-full border border-sage-200 rounded-lg px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sage-700 mb-1">Téléphone</label>
            <input type="tel" className="w-full border border-sage-200 rounded-lg px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sage-700 mb-1">Email</label>
            <input type="email" className="w-full border border-sage-200 rounded-lg px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sage-700 mb-1">Date souhaitée du rendez-vous</label>
            <input type="date" className="w-full border border-sage-200 rounded-lg px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sage-700 mb-1">Heure souhaitée</label>
            <input type="time" className="w-full border border-sage-200 rounded-lg px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sage-700 mb-1">Message</label>
            <textarea className="w-full border border-sage-200 rounded-lg px-3 py-2" rows={2} required />
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button type="submit" className="w-full bg-poppy-500 hover:bg-poppy-600 text-white font-bold py-3 px-6 rounded-full shadow transition mt-2">
              Valider le rendez-vous
            </Button>
          </motion.div>
        </form>
      </AnimatedModal>
    </Layout>
  );
};

export default Bapteme; 