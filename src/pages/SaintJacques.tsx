import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/layout/Layout';
import Seo from '@/components/shared/Seo';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Heart, Flower, Building, Phone } from 'lucide-react';
import { ScrollToTopLink } from '@/components/shared/ScrollToTopLink';

const SaintJacques = () => {
  useScrollToTop();

  return (
    <Layout>
      <Seo
        title="Fleuriste Nantes Saint-Jacques | au ver'tige"
        description="Votre artisan fleuriste au ver'tige vous accueille à Nantes Sud. Découvrez notre univers floral unique et créatif."
        type="website"
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Fleuriste Saint-Jacques", url: "/fleuriste-saint-jacques" }
        ]}
      />
      {/* Schema LocalBusiness pour Saint-Jacques */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "au ver'tige - Fleuriste Saint-Jacques",
            "description": "Fleuriste Saint-Jacques Nantes : Artisan fleuriste au cœur du quartier Saint-Jacques à Nantes Sud",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "38, boulevard Joliot Curie",
              "addressLocality": "Nantes",
              "addressRegion": "Loire-Atlantique",
              "postalCode": "44200",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 47.218371,
              "longitude": -1.553621
            },
            "areaServed": {
              "@type": "City",
              "name": "Saint-Jacques",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nantes",
                "addressRegion": "Loire-Atlantique",
                "postalCode": "44200"
              }
            }
          })
        }}
      />
      <section className="min-h-screen bg-cream-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-dancing text-sage-700 mb-8 text-center"
          >
            Fleuriste Saint-Jacques : Votre artisan fleuriste à Nantes Sud
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-sage-600 mb-8 text-center max-w-2xl mx-auto"
          >
            Fleuriste Saint-Jacques Nantes : au ver'tige est votre artisan fleuriste au cœur du quartier Saint-Jacques à Nantes Sud.
            Situé au 38, boulevard Joliot Curie, nous sommes à deux pas du cimetière Saint-Jacques et de l'hôpital,
            pour vous accompagner dans tous vos moments importants.
          </motion.p>

          {/* Avantages géographiques */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-poppy-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-poppy-600" />
                </div>
                <h2 className="text-xl font-semibold text-sage-700">Proche du cimetière Saint-Jacques</h2>
              </div>
              <p className="text-sage-600">
                Fleuriste Saint-Jacques : Notre proximité avec le cimetière Saint-Jacques nous permet de vous faciliter
                les choses pour vos compositions de deuil. Vous pouvez récupérer vos créations en boutique avant de vous rendre au cimetière.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-poppy-100 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-poppy-600" />
                </div>
                <h2 className="text-xl font-semibold text-sage-700">Près de l'hôpital Saint-Jacques</h2>
              </div>
              <p className="text-sage-600">
                Pour vos visites à l'hôpital Saint-Jacques, notre fleuriste Saint-Jacques vous propose des bouquets frais
                et élégants pour apporter du réconfort à vos proches.
              </p>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl p-8 shadow-lg mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-dancing text-sage-700 mb-6 text-center">
              Nos services de fleuriste Saint-Jacques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Flower className="w-6 h-6 text-poppy-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sage-700 mb-2">Bouquets sur-mesure</h3>
                  <p className="text-sage-600 text-sm">
                    Fleuriste Saint-Jacques : Créations personnalisées pour toutes les occasions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-poppy-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sage-700 mb-2">Compositions de deuil</h3>
                  <p className="text-sage-600 text-sm">
                    Gerbes, couronnes et bouquets pour honorer vos proches
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Flower className="w-6 h-6 text-poppy-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sage-700 mb-2">Décoration événements</h3>
                  <p className="text-sage-600 text-sm">
                    Mariages, anniversaires, baptêmes dans le quartier Saint-Jacques
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-poppy-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sage-700 mb-2">Plantes d'intérieur</h3>
                  <p className="text-sage-600 text-sm">
                    Sélection de plantes vertes et fleuries pour votre intérieur
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Informations pratiques */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-sage-50 to-cream-50 rounded-xl p-8 shadow-lg mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-dancing text-sage-700 mb-6 text-center">
              Informations pratiques - Fleuriste Saint-Jacques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-poppy-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sage-700 mb-2">Adresse</h3>
                  <p className="text-sage-600">
                    38, boulevard Joliot Curie<br />
                    44200 Nantes<br />
                    Quartier Saint-Jacques
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-poppy-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sage-700 mb-2">Horaires</h3>
                  <p className="text-sage-600">
                    Lundi - Samedi : 9h - 19h<br />
                    Dimanche : 9h - 13h
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-poppy-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sage-700 mb-2">Contact</h3>
                  <p className="text-sage-600">
                    <a href="tel:0240541002" className="text-poppy-600 hover:underline">02 40 54 10 02</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-poppy-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sage-700 mb-2">Retrait</h3>
                  <p className="text-sage-600">
                    Retrait en boutique uniquement<br />
                    Parking disponible à proximité
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-poppy-500 hover:bg-poppy-600 text-white font-bold py-3 px-6 rounded-full shadow transition text-lg">
                <ScrollToTopLink to="/contact">
                  Nous contacter
                </ScrollToTopLink>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" className="bg-white border border-sage-200 text-sage-700 font-bold py-3 px-6 rounded-full shadow transition text-lg">
                <ScrollToTopLink to="/services">
                  Voir nos services
                </ScrollToTopLink>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SaintJacques;

