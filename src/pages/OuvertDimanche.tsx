import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/layout/Layout';
import Seo from '@/components/shared/Seo';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Phone, Calendar, Flower, Heart } from 'lucide-react';
import { ScrollToTopLink } from '@/components/shared/ScrollToTopLink';

const OuvertDimanche = () => {
  useScrollToTop();

  return (
    <Layout>
      <Seo
        title="Fleuriste Ouvert Dimanche Nantes | au ver'tige"
        description="au ver'tige, fleuriste à Nantes Sud (Saint-Jacques), est ouvert le dimanche matin de 9h à 13h. Profitez de fleurs fraîches tout le week-end. Bouquets frais, compositions sur-mesure. Ouvert également les jours fériés. 02 40 54 10 02"
        type="website"
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Fleuriste ouvert dimanche", url: "/fleuriste-ouvert-dimanche-nantes" }
        ]}
        faq={[
          {
            question: "Le fleuriste est-il ouvert le dimanche à Nantes ?",
            answer: "Oui, au ver'tige, artisan fleuriste Nantes, est ouvert le dimanche de 9h à 13h ainsi que les jours fériés de 9h à 13h. Notre boutique est située au 38, boulevard Joliot Curie, dans le quartier Saint-Jacques à Nantes Sud. Vous pouvez venir récupérer vos créations florales le dimanche matin. Nous sommes également ouverts du lundi au samedi de 9h à 19h."
          }
        ]}
      />
      {/* Schema LocalBusiness avec horaires dimanche */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "au ver'tige - Fleuriste ouvert dimanche Nantes",
            "description": "Fleuriste ouvert dimanche Nantes : au ver'tige vous accueille le dimanche de 10h à 13h",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "38, boulevard Joliot Curie",
              "addressLocality": "Nantes",
              "addressRegion": "Loire-Atlantique",
              "postalCode": "44200",
              "addressCountry": "FR"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "19:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Monday",
                "opens": "14:00",
                "closes": "19:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "10:00",
                "closes": "13:00"
              }
            ]
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
            Fleuriste ouvert dimanche Nantes : au ver'tige vous accueille le week-end
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-sage-600 mb-8 text-center max-w-2xl mx-auto"
          >
            Fleuriste ouvert dimanche Nantes : au ver'tige, votre artisan fleuriste à Nantes Sud, vous accueille le dimanche
            de 9h à 13h ainsi que les jours fériés. Situé au 38, boulevard Joliot Curie, dans le quartier Saint-Jacques,
            nous sommes là pour vous accompagner même le week-end.
          </motion.p>

          {/* Badge Ouvert Dimanche */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-poppy-500 to-poppy-600 text-white rounded-xl p-8 shadow-xl mb-12 text-center"
          >
            <Calendar className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">Ouvert le dimanche</h2>
            <p className="text-xl mb-4">Dimanche : 9h - 13h</p>
            <p className="text-lg opacity-90">Jours fériés : 9h - 13h</p>
          </motion.div>

          {/* Horaires complets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl p-8 shadow-lg mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-dancing text-sage-700 mb-6 text-center">
              Nos horaires d'ouverture
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-sage-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-poppy-600" />
                  <span className="font-semibold text-sage-700">Lundi - Samedi</span>
                </div>
                <span className="text-sage-600">9h - 19h</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-poppy-50 to-poppy-100 rounded-lg border-2 border-poppy-300">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-poppy-600" />
                  <span className="font-semibold text-poppy-700">Dimanche</span>
                </div>
                <span className="text-poppy-700 font-semibold">9h - 13h</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-poppy-50 to-poppy-100 rounded-lg border-2 border-poppy-300">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-poppy-600" />
                  <span className="font-semibold text-poppy-700">Jours fériés</span>
                </div>
                <span className="text-poppy-700 font-semibold">9h - 13h</span>
              </div>
            </div>
          </motion.div>

          {/* Pourquoi venir le dimanche */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-poppy-100 rounded-full flex items-center justify-center">
                  <Flower className="w-6 h-6 text-poppy-600" />
                </div>
                <h3 className="text-xl font-semibold text-sage-700">Bouquets frais du week-end</h3>
              </div>
              <p className="text-sage-600">
                Fleuriste ouvert dimanche Nantes : Profitez de nos créations fraîches pour vos événements du week-end,
                vos visites ou simplement pour vous faire plaisir.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-poppy-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-poppy-600" />
                </div>
                <h3 className="text-xl font-semibold text-sage-700">Service d'urgence</h3>
              </div>
              <p className="text-sage-600">
                Besoin d'un bouquet en urgence le dimanche ? Notre fleuriste ouvert dimanche Nantes vous accueille
                pour répondre à vos besoins immédiats.
              </p>
            </div>
          </motion.div>

          {/* Informations pratiques */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-sage-50 to-cream-50 rounded-xl p-8 shadow-lg mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-dancing text-sage-700 mb-6 text-center">
              Informations pratiques
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
                <Phone className="w-6 h-6 text-poppy-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sage-700 mb-2">Contact</h3>
                  <p className="text-sage-600">
                    <a href="tel:0240541002" className="text-poppy-600 hover:underline font-semibold">02 40 54 10 02</a>
                  </p>
                  <p className="text-sm text-sage-500 mt-1">Appelez-nous pour confirmer nos horaires</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-poppy-500 hover:bg-poppy-600 text-white font-bold py-3 px-6 rounded-full shadow transition text-lg">
                <a href="tel:0240541002">
                  Nous appeler
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" className="bg-white border border-sage-200 text-sage-700 font-bold py-3 px-6 rounded-full shadow transition text-lg">
                <ScrollToTopLink to="/contact">
                  Nous contacter
                </ScrollToTopLink>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default OuvertDimanche;

