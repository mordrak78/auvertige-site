import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/layout/Layout';
import Seo from '@/components/shared/Seo';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import AnimatedModal from '@/components/shared/AnimatedModal';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { RelatedPages } from '@/components/shared/RelatedPages';
import FAQ, { FAQItem } from '@/components/shared/FAQ';
import { Gift, Baby, Leaf, Palette, Handshake, Star } from 'lucide-react';

const mariageFAQItems: FAQItem[] = [
  {
    question: "Quand commander mon bouquet de mariée à Nantes ?",
    answer:
      "Fleuriste mariage Nantes : Nous recommandons de nous contacter au moins 2 à 3 mois avant votre mariage pour réserver vos créations florales. Cela nous permet d'organiser un rendez-vous de conseil, de sélectionner les fleurs de saison et de créer vos bouquets de mariée et décorations sur-mesure.",
  },
  {
    question: "Comment réserver un rendez-vous découverte ?",
    answer: (
      <>
        Choisissez votre créneau directement via notre{' '}
        <Link to="/contact" className="text-poppy-600 underline font-medium">
          formulaire de contact
        </Link>{' '}
        ou par téléphone. Nous préparons un moodboard et un devis personnalisé pour
        valider vos choix couleurs, budget et ambiance.
      </>
    ),
  },
  {
    question: "Proposez-vous des bouquets de mariée personnalisés sur-mesure ?",
    answer:
      "Oui, tous nos bouquets de mariée sont créés sur-mesure et personnalisés selon vos préférences, le thème de votre mariage et vos couleurs. Fleuriste mariage Nantes : nous créons des compositions florales artisanales uniques, faites main à Nantes. Chaque création est unique et adaptée à votre style.",
  },
  {
    question: "Quels types de décorations florales proposez-vous pour un mariage ?",
    answer:
      "Fleuriste mariage Nantes : Nous créons des bouquets de mariée, bouquets de demoiselles d'honneur, boutonnières, centres de table, décoration de cérémonie et arc de fleurs. Toutes nos créations florales artisanales sont sur-mesure et personnalisées pour votre mariage à Nantes Sud.",
  },
  {
    question: "Organisez-vous des ateliers floraux pour EVJF ou team bride ?",
    answer: (
      <>
        Nous n'organisons pas d'ateliers floraux collectifs, mais nous vous accueillons en
        boutique pour vous conseiller et imaginer une animation DIY adaptée. Parlons-en en
        boutique ou via notre{' '}
        <Link to="/contact" className="text-poppy-600 underline font-medium">
          page contact
        </Link>
        .
      </>
    ),
  },
];

const imagesMariage = [
  "bouquet-de-mariage-1024x683.webp",
  "mariage-bouquet-01.webp", "mariage-bouquet-02.webp", "mariage-bouquet-03.webp", "mariage-bouquet-04.webp", "mariage-bouquet-05.webp",
  "mariage-bouquet-06.webp", "mariage-bouquet-07.webp", "mariage-bouquet-08.webp", "mariage-bouquet-09.webp", "mariage-bouquet-10.webp",
  "mariage-bouquet-11.webp", "mariage-bouquet-12.webp", "mariage-bouquet-13.webp", "mariage-bouquet-14.webp", "mariage-bouquet-15.webp",
  "mariage-bouquet-16.webp", "mariage-bouquet-17.webp", "mariage-bouquet-18.webp", "mariage-bouquet-19.webp", "mariage-bouquet-20.webp"
].map(img => `/images/creations/mariage/${img}`);

const Mariage = () => {
  const [showDevisModal, setShowDevisModal] = useState(false);
  const [selectedRealisation, setSelectedRealisation] = useState(null);
  const [showRdvModal, setShowRdvModal] = useState(false);
  
  useScrollToTop();

  return (
    <Layout>
      <Seo
        title="Fleuriste mariage Nantes | Bouquets mariée & Décoration sur-mesure | Au Vertige"
        description="Fleuriste mariage Nantes : Au Vertige crée vos bouquets de mariée et décorations florales sur-mesure à Nantes Sud. Devis gratuit, retrait en boutique. 02 40 54 10 02"
        type="website"
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Mariage", url: "/Mariage" }
        ]}
        faq={mariageFAQItems}
      />
      {/* Schema Service pour le mariage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Bouquets et décorations florales de mariage",
            "description": "Création de bouquets de mariée, décorations florales, accompagnement personnalisé à Nantes Sud, Saint-Jacques, Pirmil, Rezé, Saint-Sébastien-sur-Loire.",
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-dancing text-sage-700 mb-8 text-center"
          >
            Fleuriste mariage Nantes | Bouquets et décorations sur-mesure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-sage-600 mb-8 text-center max-w-2xl mx-auto"
          >
            Fleuriste mariage Nantes : Au Vertige crée vos bouquets de mariée et décorations florales sur-mesure à Nantes Sud, quartier Saint-Jacques. Accompagnement personnalisé, conseils, retrait en boutique au 38, boulevard Joliot Curie.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={() => setShowRdvModal(true)} className="bg-poppy-500 hover:bg-poppy-600 text-white font-bold py-3 px-6 rounded-full shadow transition text-lg w-full sm:w-auto">
                Demander un devis mariage
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/services" className="bg-white border border-sage-200 text-sage-700 font-bold py-3 px-6 rounded-full shadow transition text-lg hover:bg-sage-50 w-full sm:w-auto text-center block">
                Retour aux services
              </Link>
            </motion.div>
          </motion.div>

          {/* Section Galerie Mariage Unifiée */}
          <section className="mb-16">
            <h3 className="text-xl md:text-2xl font-dancing text-sage-700 mb-6 text-center">Découvrez nos réalisations</h3>
            <Carousel opts={{ align: 'start' }}>
              <CarouselContent>
                {Array.from({ length: Math.ceil(imagesMariage.length / 4) }).map((_, slideIdx) => (
                  <CarouselItem key={slideIdx}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {imagesMariage.slice(slideIdx * 4, slideIdx * 4 + 4).map((img, idx) => (
                        <div key={img} className="bg-white rounded-2xl shadow-md overflow-hidden">
                          <img src={img} alt={`Mariage ${slideIdx * 4 + idx + 1}`} className="w-full aspect-[9/16] object-cover object-center" loading="lazy" />
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

          {/* Section bouquets mariage */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-sage-700 mb-4">Nos prestations mariage</h2>
            <ul className="text-sage-600 text-lg space-y-2 mb-6">
              <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>💐 Bouquets de mariée personnalisés</motion.li>
              <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>🌸 Décorations de cérémonie et de réception</motion.li>
              <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>🌿 Boutonnières, bracelets, accessoires fleuris</motion.li>
              <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>🏪 Retrait en boutique au 38, boulevard Joliot Curie</motion.li>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 max-w-2xl mx-auto bg-sage-50 rounded-2xl p-8 shadow-lg text-center"
          >
            <h2 className="text-2xl md:text-3xl font-dancing text-sage-700 mb-4">Pourquoi choisir Au Vertige pour votre mariage ?</h2>
            <ul className="text-sage-700 text-lg space-y-3 mb-4">
              <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex items-start gap-2">
                <Leaf className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
                <span>Fleurs locales et de saison, circuit court</span>
              </motion.li>
              <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex items-start gap-2">
                <Palette className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
                <span>Créations artisanales et personnalisées</span>
              </motion.li>
              <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex items-start gap-2">
                <Handshake className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
                <span>Accompagnement sur-mesure et conseils</span>
              </motion.li>
              <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex items-start gap-2">
                <Star className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
                <span>Plus de 200 mariages fleuris avec succès</span>
              </motion.li>
            </ul>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/a-propos" className="inline-block mt-4 bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg">
                En savoir plus sur notre expertise mariage
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Liens contextuels vers pages similaires */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 bg-white"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl font-dancing text-sage-700 mb-6 text-center">
            Découvrez aussi nos autres créations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to="/evenements#anniversaire"
              className="flex items-center gap-3 p-4 bg-cream-50 rounded-lg hover:bg-cream-100 transition-colors group"
            >
              <Gift className="text-poppy-500 group-hover:text-poppy-600 transition-colors" size={24} />
              <div>
                <h4 className="font-semibold text-sage-700 group-hover:text-poppy-600 transition-colors">
                  Bouquets d'anniversaire
                </h4>
                <p className="text-sm text-sage-600">Créations joyeuses pour célébrer</p>
              </div>
            </Link>
            <Link
              to="/evenements#bapteme"
              className="flex items-center gap-3 p-4 bg-cream-50 rounded-lg hover:bg-cream-100 transition-colors group"
            >
              <Baby className="text-poppy-500 group-hover:text-poppy-600 transition-colors" size={24} />
              <div>
                <h4 className="font-semibold text-sage-700 group-hover:text-poppy-600 transition-colors">
                  Bouquets de baptême
                </h4>
                <p className="text-sm text-sage-600">Créations tendres pour un baptême</p>
              </div>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* FAQ Mariage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FAQ items={mariageFAQItems} />
        </div>
      </section>

      {/* Section Pages similaires */}
      <RelatedPages
        currentPage="/mariage"
        pages={[
          {
            title: "Anniversaire",
            url: "/evenements#anniversaire",
            description: "Bouquets joyeux pour célébrer un anniversaire",
            icon: Gift
          },
          {
            title: "Baptême",
            url: "/evenements#bapteme",
            description: "Créations tendres pour célébrer un baptême",
            icon: Baby
          },
          {
            title: "Plaisirs d'offrir",
            url: "/evenements#plaisir-offrir",
            description: "Bouquets pour faire plaisir à vos proches"
          }
        ]}
      />

      {/* Modal prise de rendez-vous (agenda) */}
      <AnimatedModal
        isOpen={showRdvModal}
        onClose={() => setShowRdvModal(false)}
        title="Prendre rendez-vous pour un devis mariage"
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

      {/* Modal micro-formulaire devis pour le carrousel */}
      <AnimatedModal
        isOpen={showDevisModal && !!selectedRealisation}
        onClose={() => setShowDevisModal(false)}
        title="Demander un devis"
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
                <label className="block text-sage-700 mb-1">Date souhaitée</label>
                <input type="date" className="w-full border border-sage-200 rounded-lg px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sage-700 mb-1">Message</label>
                <textarea className="w-full border border-sage-200 rounded-lg px-3 py-2" rows={2} required />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full bg-poppy-500 hover:bg-poppy-600 text-white font-bold py-3 px-6 rounded-full shadow transition mt-2">
                  Envoyer la demande
                </Button>
              </motion.div>
            </form>
      </AnimatedModal>
    </Layout>
  );
};

export default Mariage; 