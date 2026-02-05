import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/layout/Layout';
import Seo from '@/components/shared/Seo';
import { images } from '@/data/images';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import AnimatedModal from '@/components/shared/AnimatedModal';
import { RelatedPages } from '@/components/shared/RelatedPages';
import { Heart, Gift, Sparkles, Leaf, Palette, Star, Truck } from 'lucide-react';

const imagesSeFairePlaisir = [
  images.creations.seFairePlaisir.fleurs1,
  images.creations.seFairePlaisir.fleurs2,
  images.creations.seFairePlaisir.fleurs3,
  images.creations.seFairePlaisir.fleurs4,
  images.creations.seFairePlaisir.fleurs5,
  images.creations.seFairePlaisir.fleurs6,
  images.creations.seFairePlaisir.fleurs7,
];

const SeFairePlaisir = () => {
  useScrollToTop();
  const [showRdvModal, setShowRdvModal] = useState(false);

  return (
    <Layout>
      <Seo
        title="Se faire plaisir | au ver&apos;tige - Fleuriste Nantes"
        description="Envie de fleurs ? au ver'tige vous propose des bouquets et plantes pour vous faire plaisir au quotidien. Retrait en boutique à Nantes Sud."
        type="website"
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Créations florales", url: "/creations-florales" },
          { name: "Se faire plaisir", url: "/se-faire-plaisir" }
        ]}
      />
      <section className="min-h-screen bg-cream-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-dancing text-sage-700 mb-8 text-center">Se faire plaisir</h1>
          <p className="text-lg text-sage-600 mb-8 text-center max-w-2xl mx-auto">
            Parce que vous le valez bien ! Des créations florales pour vous faire plaisir et embellir votre quotidien, livrées à Nantes Sud, quartier Saint-Jacques, Pirmil, Rezé ou Saint-Sébastien-sur-Loire. Parfois, la plus belle occasion est de se gâter soi-même.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Link to="/contact" className="bg-poppy-500 hover:bg-poppy-600 text-white font-bold py-3 px-6 rounded-full shadow transition text-lg">Commander une création</Link>
            <Link to="/creations-florales" className="bg-sage-600 hover:bg-sage-700 text-white font-bold py-3 px-6 rounded-full shadow transition text-lg">Voir nos créations</Link>
            <Link to="/creations-florales" className="bg-white border border-sage-200 text-sage-700 font-bold py-3 px-6 rounded-full shadow transition text-lg hover:bg-sage-50">Retour aux créations</Link>
          </div>

          {/* Section Galerie Se Faire Plaisir */}
          <section className="mb-16">
            <h3 className="text-xl md:text-2xl font-dancing text-sage-700 mb-6 text-center">Découvrez nos réalisations</h3>
            <Carousel opts={{ align: 'start' }}>
              <CarouselContent>
                {Array.from({ length: Math.ceil(imagesSeFairePlaisir.length / 4) }).map((_, slideIdx) => (
                  <CarouselItem key={slideIdx}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {imagesSeFairePlaisir.slice(slideIdx * 4, slideIdx * 4 + 4).map((img, idx) => (
                        <div key={img} className="bg-white rounded-2xl shadow-md overflow-hidden">
                          <img src={img} alt={`Se faire plaisir ${slideIdx * 4 + idx + 1}`} className="w-full aspect-[9/16] object-cover object-center" loading="lazy" />
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

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-sage-700 mb-4">Nos prestations se faire plaisir</h2>
            <ul className="text-sage-600 text-lg space-y-2 mb-6">
              <li>🌸 Créations florales pour votre intérieur</li>
              <li>🌿 Plantes vertes et compositions durables</li>
              <li>🎨 Conseils pour choisir selon votre style</li>
              <li>🚚 Livraison rapide à Nantes Sud et alentours</li>
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
          </section>

          {/* Bloc EEAT */}
          <div className="mt-16 max-w-2xl mx-auto bg-sage-50 rounded-2xl p-8 shadow-lg text-center">
            <h2 className="text-2xl md:text-3xl font-dancing text-sage-700 mb-4">Pourquoi se faire plaisir avec au ver'tige ?</h2>
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
            <Link to="/a-propos" className="inline-block mt-4 bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg">En savoir plus sur notre engagement</Link>
          </div>
        </div>
      </section>

      {/* Section Pages similaires */}
      <RelatedPages
        currentPage="/se-faire-plaisir"
        pages={[
          {
            title: "Plaisirs d'offrir",
            url: "/plaisirs-offrir",
            description: "Bouquets pour faire plaisir à vos proches",
            icon: Sparkles
          },
          {
            title: "Anniversaire",
            url: "/anniversaire",
            description: "Bouquets joyeux pour célébrer un anniversaire",
            icon: Gift
          },
          {
            title: "Mariage",
            url: "/mariage",
            description: "Créations florales pour votre plus beau jour",
            icon: Heart
          }
        ]}
      />

      {/* Modal prise de rendez-vous */}
      <AnimatedModal
        isOpen={showRdvModal}
        onClose={() => setShowRdvModal(false)}
        title="Prendre rendez-vous pour un devis"
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

export default SeFairePlaisir;

