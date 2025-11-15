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
import FAQ, { FAQItem } from '@/components/shared/FAQ';
import { Heart, Leaf, Palette, Star, Truck } from 'lucide-react';

const deuilFAQItems: FAQItem[] = [
  {
    question: "Quels types de créations proposez-vous pour un enterrement ?",
    answer: "Nous créons des bouquets, couronnes, gerbes et compositions florales adaptées à chaque cérémonie. Chaque création est pensée selon vos besoins et vos préférences. Nous proposons également des compositions pour vos visites au cimetière Saint-Jacques, situé à proximité de notre boutique."
  },
  {
    question: "Comment commander des fleurs pour des obsèques ?",
    answer: "Contactez-nous par téléphone au 02 40 54 10 02 ou passez en boutique au 38, boulevard Joliot Curie. Nous vous conseillons avec bienveillance sur le choix des fleurs et créons vos compositions sur-mesure. Retrait en boutique uniquement."
  },
  {
    question: "Proposez-vous des couronnes funéraires ?",
    answer: "Oui, nous créons des couronnes en différentes formes : ronde, en forme de cœur, ou selon vos souhaits. Chaque couronne est réalisée avec des fleurs fraîches et de qualité, adaptée à votre budget et à vos préférences."
  },
  {
    question: "Quelle est la différence entre une gerbe et une couronne ?",
    answer: "La gerbe est généralement une composition verticale, idéale pour les cérémonies. La couronne est une composition circulaire, traditionnellement utilisée pour les obsèques. Nous vous conseillons sur le choix le plus adapté à votre situation."
  },
  {
    question: "Êtes-vous proche du cimetière Saint-Jacques ?",
    answer: "Oui, notre boutique est située au 38, boulevard Joliot Curie, à proximité du cimetière Saint-Jacques. Cela vous facilite la récupération de vos créations avant de vous rendre au cimetière. Nous sommes facilement accessibles depuis Nantes Sud, Pirmil et Rezé."
  },
  {
    question: "Quels délais pour une commande ?",
    answer: "Nous recommandons de nous contacter dès que possible, idéalement 24 à 48h avant la cérémonie. Pour les commandes urgentes, contactez-nous par téléphone et nous ferons notre maximum pour répondre à votre demande. Nous comprenons l'urgence de ces situations."
  }
];

const imagesDeuil = [
  images.creations.deuil.bouquetRond1,
  images.creations.deuil.bouquetRond2,
  images.creations.deuil.couronneCoeur1,
  images.creations.deuil.couronneCoeur2,
  images.creations.deuil.couronneCoeur3,
  images.creations.deuil.couronneCoeur4,
  images.creations.deuil.couronneRonde1,
  images.creations.deuil.couronneRonde2,
  images.creations.deuil.couronneRonde3,
  images.creations.deuil.couronneRonde4,
  images.creations.deuil.couronneRonde5,
  images.creations.deuil.gerbeHaute,
  images.creations.deuil.gerbeCarree,
  images.creations.deuil.gerbeCroix,
  images.creations.deuil.gerbeLongue1,
  images.creations.deuil.gerbeLongue2,
  images.creations.deuil.gerbeLongue3,
  images.creations.deuil.gerbeLongue4,
];

const Deuil = () => {
  useScrollToTop();
  const [showRdvModal, setShowRdvModal] = useState(false);
  const bouquets = [
    {
      name: "Bouquet Deuil - Souvenir",
      description: "Un bouquet sobre et élégant pour rendre hommage.",
      image: "/images/creations/deuil/deuil-bouquet-rond-01.jpg",
      price: 70,
      sku: "DEUIL-001"
    },
    {
      name: "Bouquet Deuil - Paix",
      description: "Des fleurs blanches pour transmettre un message de paix.",
      image: "/images/creations/deuil/deuil-bouquet-rond-02.jpg",
      price: 80,
      sku: "DEUIL-002"
    },
    {
      name: "Bouquet Deuil - Espérance",
      description: "Une composition florale pour accompagner le souvenir.",
      image: "/images/creations/deuil/deuil-gerbe-longue-01.jpg",
      price: 75,
      sku: "DEUIL-003"
    }
  ];

  return (
    <Layout>
      <Seo
        title="Fleuriste enterrement Nantes | Bouquet deuil, fleurs obsèques, couronne funéraire | Au Vertige"
        description="Fleuriste enterrement Nantes : Au Vertige crée vos bouquets deuil, fleurs obsèques, couronnes funéraires et gerbes funéraires à Nantes Sud. Fleuriste funérailles proche du cimetière Saint-Jacques. Composition décès, fleurs hommage défunt. Retrait en boutique. 02 40 54 10 02"
        type="website"
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Deuil", url: "/Deuil" }
        ]}
        faq={deuilFAQItems}
      />
      {/* Schema Service pour le deuil */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Fleuriste enterrement Nantes - Bouquets deuil, fleurs obsèques, couronnes funéraires",
            "description": "Fleuriste enterrement Nantes : Au Vertige crée vos bouquets deuil, fleurs obsèques, couronnes funéraires, gerbes funéraires et compositions décès à Nantes Sud. Fleuriste funérailles proche du cimetière Saint-Jacques. Retrait en boutique.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Au Vertige",
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
            Fleuriste enterrement Nantes : Bouquets deuil, fleurs obsèques et couronnes funéraires
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-sage-600 mb-8 text-center max-w-2xl mx-auto"
          >
            À Nantes Sud, nous accompagnons les familles dans ces moments difficiles avec respect et délicatesse. Nous créons des bouquets, couronnes et gerbes pour honorer vos proches, en privilégiant des compositions sobres et élégantes. Situés à proximité du cimetière Saint-Jacques, nous facilitons le retrait de vos créations. Toutes nos compositions sont réalisées sur-mesure selon vos souhaits et les préférences du défunt. Retrait en boutique au 38, boulevard Joliot Curie.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="block bg-poppy-500 hover:bg-poppy-600 text-white font-bold py-3 px-6 rounded-full shadow transition text-lg text-center">Commander fleurs enterrement</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/creations-florales" className="block bg-sage-600 hover:bg-sage-700 text-white font-bold py-3 px-6 rounded-full shadow transition text-lg text-center">Voir nos créations</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/services" className="block bg-white border border-sage-200 text-sage-700 font-bold py-3 px-6 rounded-full shadow transition text-lg hover:bg-sage-50 text-center">Retour aux services</Link>
            </motion.div>
          </motion.div>

          {/* Section Galerie Deuil */}
          <section className="mb-16">
            <h3 className="text-xl md:text-2xl font-dancing text-sage-700 mb-6 text-center">Nos créations pour accompagner vos moments de recueillement</h3>
            <Carousel opts={{ align: 'start' }}>
              <CarouselContent>
                {Array.from({ length: Math.ceil(imagesDeuil.length / 4) }).map((_, slideIdx) => (
                  <CarouselItem key={slideIdx}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {imagesDeuil.slice(slideIdx * 4, slideIdx * 4 + 4).map((img, idx) => (
                        <div key={img} className="bg-white rounded-2xl shadow-md overflow-hidden">
                          <img src={img} alt={`Composition florale pour deuil - Création ${slideIdx * 4 + idx + 1} - Au Vertige Nantes`} className="w-full aspect-[9/16] object-cover object-center" loading="lazy" />
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
            <h2 className="text-2xl md:text-3xl font-semibold text-sage-700 mb-4">Nos prestations pour vous accompagner</h2>
            <ul className="text-sage-600 text-lg space-y-2 mb-6">
              {['🌹 Bouquets personnalisés pour rendre hommage', '🕊️ Couronnes et gerbes traditionnelles', '💐 Compositions florales adaptées aux obsèques', '🏛️ Créations pour le cimetière - Proche de Saint-Jacques', '🕯️ Compositions discrètes et respectueuses', '🤝 Accompagnement personnalisé et bienveillant'].map((item, idx) => (
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
            <h2 className="text-2xl md:text-3xl font-dancing text-sage-700 mb-4">Pourquoi choisir Au Vertige ?</h2>
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
                <span>Plus de 200 familles accompagnées</span>
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

          {/* Section Types de créations */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-16 mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-sage-700 mb-6 text-center">
              Nos créations pour vous accompagner
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-sage-700 mb-3">Bouquets</h3>
                <p className="text-sage-600">
                  Des compositions sobres et élégantes, créées avec des fleurs sélectionnées pour leur délicatesse. 
                  Chaque bouquet est personnalisé selon vos souhaits et les préférences de la personne disparue.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-sage-700 mb-3">Compositions pour obsèques</h3>
                <p className="text-sage-600">
                  Nous créons des compositions florales adaptées aux cérémonies, avec des fleurs blanches traditionnelles ou 
                  des tons plus discrets selon vos préférences. Chaque création est pensée pour accompagner ce moment avec respect.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-sage-700 mb-3">Couronnes</h3>
                <p className="text-sage-600">
                  Couronnes rondes ou en forme de cœur, réalisées avec soin et attention. 
                  Nous adaptons chaque création à vos besoins pour honorer la mémoire de vos proches.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-sage-700 mb-3">Gerbes</h3>
                <p className="text-sage-600">
                  Disponibles en différentes tailles et formes selon vos besoins. 
                  Chaque gerbe est créée sur-mesure pour votre cérémonie, avec des fleurs fraîches et de qualité.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-sage-700 mb-3">Compositions pour hommage</h3>
                <p className="text-sage-600">
                  Des fleurs sélectionnées avec délicatesse pour transmettre vos émotions. 
                  Réalisées avec des fleurs locales et de saison, créées avec respect et attention aux détails.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-sage-700 mb-3">Créations pour le cimetière</h3>
                <p className="text-sage-600">
                  Situés à proximité du cimetière Saint-Jacques, nous créons des compositions résistantes et adaptées aux conditions extérieures, 
                  pour honorer durablement vos proches lors de vos visites.
                </p>
              </div>
            </div>
          </motion.section>

          {/* FAQ Spécifique Deuil */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-16 mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-sage-700 mb-6 text-center">
              Questions fréquentes
            </h2>
            <FAQ items={deuilFAQItems} />
          </motion.section>
        </div>
      </section>

      {/* Section Pages similaires */}
      <RelatedPages
        currentPage="/deuil"
        pages={[
          {
            title: "Mariage",
            url: "/mariage",
            description: "Créations florales pour votre plus beau jour",
            icon: Heart
          },
          {
            title: "Anniversaire",
            url: "/evenements#anniversaire",
            description: "Bouquets joyeux pour célébrer un anniversaire"
          },
          {
            title: "Baptême",
            url: "/evenements#bapteme",
            description: "Créations tendres pour célébrer un baptême"
          }
        ]}
      />

      {/* Modal prise de rendez-vous */}
      <AnimatedModal
        isOpen={showRdvModal}
        onClose={() => setShowRdvModal(false)}
        title="Prendre rendez-vous pour un devis deuil"
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

export default Deuil; 