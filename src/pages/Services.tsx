import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/layout/Layout';
import Seo from '@/components/shared/Seo';
import { Helmet } from 'react-helmet-async';
import { Flower, Sprout, Heart, Flame, Home, Building, ExternalLink, ChevronRight, Gift, Baby, Sparkles, Leaf, Palette, Handshake, Calendar, MapPin, Truck, Store, Clock, Sparkles as SparklesIcon, Users, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import AnimatedModal from '@/components/shared/AnimatedModal';
import TrustedBy from '@/components/services/TrustedBy';
import FlipCard from '@/components/services/FlipCard';
import { images } from '@/data/images';
import { RelatedPages } from '@/components/shared/RelatedPages';
import FAQ, { FAQItem } from '@/components/shared/FAQ';
import { bouquetServiceSchema, mariageServiceSchema, plantesServiceSchema, fleurissementServiceSchema, bougiesServiceSchema, decorationServiceSchema, professionnelsServiceSchema } from '@/constants/serviceSchema';

const servicesFAQItems: FAQItem[] = [
  {
    question: "Quels services proposez-vous en tant que fleuriste à Nantes ?",
    answer:
      "Fleuriste Nantes : au ver'tige propose des bouquets sur-mesure, plantes d'intérieur, composition deuil fleurs, bougies Mathilde M, décoration d'intérieur et services professionnels. Toutes nos créations florales artisanales sont faites main à Nantes Sud, quartier Saint-Jacques. Retrait en boutique uniquement.",
  },
  {
    question: "Quels sont vos horaires et êtes-vous ouverts le dimanche ?",
    answer: (
      <>
        Nous sommes ouverts du mardi au samedi de 9h à 19h, le lundi de 9h à 19h et le
        dimanche de 9h à 13h. Retrouvez les horaires détaillés, conseils de retrait et
        périodes spéciales sur la page{' '}
        <Link
          to="/fleuriste-ouvert-dimanche-nantes"
          className="text-sage-600 underline font-medium"
        >
          Nos horaires complets
        </Link>
        .
      </>
    ),
  },
  {
    question: "Puis-je commander un bouquet personnalisé sur-mesure ?",
    answer: (
      <>
        Oui, chaque bouquet est créé sur-mesure selon vos couleurs et votre budget.
        Partagez votre brief via notre{' '}
        <Link to="/contact" className="text-sage-600 underline font-medium">
          formulaire de contact
        </Link>{' '}
        ou appelez-nous pour obtenir un devis personnalisé.
      </>
    ),
  },
  {
    question: "Utilisez-vous des fleurs locales pour vos créations ?",
    answer: "Oui, nous privilégions les fleurs locales et de saison issues du circuit court nantais (selon les stocks et dans la mesure du possible). Nos créations florales artisanales Nantes sont réalisées avec des fleurs fraîches et de qualité, sélectionnées avec soin pour créer des compositions uniques et durables.",
  },
  {
    question: "Organisez-vous des ateliers floraux ?",
    answer: (
      <>
        Nous n'organisons pas d'ateliers floraux programmés, mais nous sommes ravis
        d'échanger sur vos envies créatives. Passez en boutique ou{' '}
        <Link to="/contact" className="text-sage-600 underline font-medium">
          contactez-nous
        </Link>{' '}
        pour bénéficier de conseils personnalisés et imaginer un accompagnement adapté.
      </>
    ),
  },
];

// Logos entreprises (à remplir)
const logosEntreprises: string[] = [];

// Fonction pour obtenir les images d'un service
const getServiceImages = (serviceKey: keyof typeof images.services): string[] => {
  const serviceImages = images.services[serviceKey];
  if (!serviceImages) return [];
  return Object.values(serviceImages).filter((img): img is string => typeof img === 'string');
};

const Services = () => {
  const location = useLocation();
  const [showDevisModal, setShowDevisModal] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('bouquets');

  // Gérer l'activation de section depuis l'URL hash
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    const validSections = ['bouquets', 'plantes', 'fleurissement', 'bougies', 'decoration', 'professionnels'];

    if (hash && validSections.includes(hash)) {
      setActiveSection(hash);
    } else if (!hash) {
      // Si pas de hash, s'assurer qu'on est sur la première section et scroller en haut
      setActiveSection('bouquets');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [location]);

  // Scroll vers le titre de la section active après le changement
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && hash === activeSection) {
      // Délai pour laisser l'animation se terminer
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 250; // Hauteur du header fixe + navigation sticky + titre page + marge
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 600); // Délai pour attendre la fin de l'animation
    }
  }, [activeSection, location.hash]);

  const handleDevisSubmit = (e: React.FormEvent, serviceName: string) => {
    e.preventDefault();
    console.log(`Demande de devis pour: ${serviceName}`);
    alert(`Votre demande de devis pour ${serviceName} a été envoyée ! Nous vous recontactons rapidement.`);
    setShowDevisModal(null);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Fonction pour obtenir toujours 9 images (répéter si nécessaire)
  const getServiceImagesForDisplay = (serviceKey: keyof typeof images.services): string[] => {
    const images = getServiceImages(serviceKey);
    const targetCount = 9;

    if (images.length === 0) {
      // Si pas d'images, retourner un tableau de placeholders
      return Array(targetCount).fill('/placeholder.svg');
    }

    // Répéter les images pour avoir toujours 9 cartes
    const repeatedImages: string[] = [];
    for (let i = 0; i < targetCount; i++) {
      repeatedImages.push(images[i % images.length]);
    }

    return repeatedImages;
  };

  return (
    <>
      <Helmet>
        <title>Nos Services | au ver&apos;tige - Fleuriste à Nantes Sud</title>
        <meta name="description" content="Découvrez nos services de fleuriste à Nantes Sud : bouquets sur-mesure, plantes, fleurissement de tombes, bougies Mathilde M, décoration d'intérieur et services professionnels." />
      </Helmet>

      <Layout>
        <Seo
          title="Fleuriste Nantes | Services fleuriste à Nantes Sud Saint-Jacques | au ver'tige"
          description="Fleuriste Nantes : Découvrez tous les services d'au ver'tige à Nantes Sud (Saint-Jacques, Pirmil, Rezé, Saint-Sébastien-sur-Loire) : bouquets, plantes, composition deuil fleurs, bougies Mathilde M, décoration d'intérieur, services professionnels."
          type="website"
          breadcrumbs={[
            { name: "Accueil", url: "/" },
            { name: "Services", url: "/services" }
          ]}
          faq={servicesFAQItems}
        />

        <main className="bg-cream-50 min-h-screen">
          {/* Schema Service pour les bouquets */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(bouquetServiceSchema)
            }}
          />
          {/* Hero Section */}
          <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center">
            <div className="absolute inset-0 z-0">
              <img
                src="/images/hero/facade2.webp"
                alt="Services fleuriste Nantes - au ver'tige, artisan fleuriste à Nantes Sud"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
            </div>
            <div className="relative z-10 text-center text-white px-4">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-dancing mb-6"
              >
                Nos Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl max-w-2xl mx-auto"
              >
                Des créations florales uniques pour chaque occasion
              </motion.p>
            </div>
          </section>

          {/* Section introductive enrichie */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="py-12 bg-white"
          >
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-dancing text-sage-700 mb-4">
                  Votre fleuriste à Nantes Sud
                </h2>
                <p className="text-lg text-sage-600 leading-relaxed">
                  au ver&apos;tige, nous sommes spécialisés dans les <strong className="text-sage-700">créations florales artisanales</strong>{' '}
                  pour toutes vos occasions. Situés au <strong className="text-sage-700">38, boulevard Joliot Curie</strong> dans le quartier
                  Saint-Jacques, nous servons Nantes Sud, Pirmil, Rezé et Saint-Sébastien-sur-Loire.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center p-6 bg-cream-50 rounded-xl"
                >
                  <Leaf className="h-8 w-8 text-sage-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-sage-700 mb-2">Fleurs locales</h3>
                  <p className="text-sm text-sage-600">Circuit court et produits de saison (dans la limite des stocks)</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center p-6 bg-cream-50 rounded-xl"
                >
                  <Palette className="h-8 w-8 text-sage-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-sage-700 mb-2">Créations uniques</h3>
                  <p className="text-sm text-sage-600">Toutes nos compositions sont faites avec passion</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-center p-6 bg-cream-50 rounded-xl"
                >
                  <Handshake className="h-8 w-8 text-sage-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-sage-700 mb-2">Conseils personnalisés</h3>
                  <p className="text-sm text-sage-600">Accompagnement sur-mesure pour chaque projet</p>
                </motion.div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-sage-600 mb-4">
                  Découvrez nos créations par occasion : <Link to="/creations-florales" className="text-sage-600 hover:text-sage-700 font-medium underline">Mariage</Link>,
                  {' '}<Link to="/evenements#anniversaire" className="text-sage-600 hover:text-sage-700 font-medium underline">Anniversaire</Link>,
                  {' '}<Link to="/evenements#bapteme" className="text-sage-600 hover:text-sage-700 font-medium underline">Baptême</Link>,
                  {' '}<Link to="/deuil" className="text-sage-600 hover:text-sage-700 font-medium underline">Deuil</Link> et bien plus.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Navigation rapide (desktop) */}
          <div className="hidden lg:block sticky top-20 z-30 bg-cream-50/95 backdrop-blur-sm border-b border-sage-200 shadow-sm">
            <div className="container mx-auto px-4 py-4">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {[
                  { id: 'bouquets', label: 'Bouquets', icon: Flower },
                  { id: 'plantes', label: 'Plantes', icon: Sprout },
                  { id: 'fleurissement', label: 'Fleurissement', icon: Heart },
                  { id: 'bougies', label: 'Bougies', icon: Flame },
                  { id: 'decoration', label: 'Décoration', icon: Home },
                  { id: 'professionnels', label: 'Professionnels', icon: Building },
                ].map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        scale: isActive ? 1.05 : 1,
                        y: isActive ? -2 : 0
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25
                      }}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm text-sm font-medium whitespace-nowrap relative overflow-hidden ${isActive
                        ? 'bg-gradient-to-r from-sage-600 to-sage-700 text-white shadow-lg'
                        : 'bg-white text-sage-700 hover:bg-sage-50 hover:text-sage-600 hover:shadow-md'
                        }`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-sage-400 to-sage-500 opacity-0"
                        animate={{ opacity: isActive ? 0.1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        animate={{ rotate: isActive ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon size={16} className="relative z-10" />
                      </motion.div>
                      <span className="relative z-10">{item.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Layout en deux colonnes */}
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-8 lg:gap-12 max-w-7xl mx-auto">
              {/* Contenu principal à gauche */}
              <div>
                <AnimatePresence mode="wait">
                  {/* Section 1: Bouquets & fleurs fraîches */}
                  {activeSection === 'bouquets' && (
                    <motion.section
                      key="bouquets"
                      id="bouquets"
                      initial={{ opacity: 0, x: -50, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 50, scale: 0.95 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                        staggerChildren: 0.1
                      }}
                      className="mb-32"
                    >
                      <motion.div
                        className="flex items-center gap-4 mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-20 h-20 bg-gradient-to-br from-sage-100 to-sage-200 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                          <Flower className="text-sage-600" size={36} />
                        </motion.div>
                        <motion.h2
                          className="text-4xl md:text-5xl font-dancing text-sage-700"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15, duration: 0.4 }}
                        >
                          Bouquet Nantes : Créations sur-mesure et personnalisées
                        </motion.h2>
                      </motion.div>

                      <motion.div
                        className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 relative overflow-hidden hover:shadow-2xl transition-shadow duration-500"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        <motion.div
                          className="absolute top-0 right-0 w-64 h-64 bg-sage-100 rounded-full -mr-32 -mt-32 opacity-20"
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, 0]
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        ></motion.div>
                        <div className="relative z-10">
                          <p className="text-lg text-sage-700 leading-relaxed mb-6">
                            Chez au ver&apos;tige, artisan fleuriste à Nantes Sud, nous créons des <strong className="text-sage-600">bouquets sur-mesure</strong> pour toutes vos occasions :
                            anniversaires, naissances, déclarations d'amour, ou simplement pour faire plaisir. Nous prenons le temps d'échanger avec vous
                            pour comprendre vos envies et composer un bouquet qui vous ressemble vraiment.
                          </p>
                          <p className="text-lg text-sage-700 leading-relaxed mb-6">
                            Ce qui nous anime ? Travailler avec des <strong className="text-sage-600">fleurs de saison qui sortent de l'ordinaire</strong>. Nous aimons
                            les variétés originales, les associations de couleurs inattendues, les textures surprenantes. Chaque bouquet est unique,
                            composé avec soin et passion pour vous offrir quelque chose de vraiment spécial.
                          </p>
                          <p className="text-lg text-sage-700 leading-relaxed mb-6">
                            Retrait en boutique au <strong className="text-sage-600">38, boulevard Joliot Curie, Nantes Sud</strong> (quartier Saint-Jacques, près de Pirmil, Rezé, Saint-Sébastien-sur-Loire).
                            Pour les amoureux des fleurs, nous proposons aussi des <strong className="text-sage-600">abonnements floraux</strong> :
                            venez régulièrement récupérer de nouvelles créations fraîches en boutique, sans avoir à y penser.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            <div className="flex items-start gap-3">
                              <Flower className="w-6 h-6 text-sage-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">Bouquets sur-mesure</h4>
                                <p className="text-sage-600 text-sm">Pour toutes les occasions</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Store className="w-6 h-6 text-sage-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">Retrait en boutique</h4>
                                <p className="text-sage-600 text-sm">38, boulevard Joliot Curie, Nantes</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Calendar className="w-6 h-6 text-sage-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">Abonnements</h4>
                                <p className="text-sage-600 text-sm">Floraux personnalisés</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Palette className="w-6 h-6 text-sage-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">Créations uniques</h4>
                                <p className="text-sage-600 text-sm">Avec conseils personnalisés</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex justify-center mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            onClick={() => setShowDevisModal('bouquets')}
                            className="bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg group relative overflow-hidden"
                          >
                            <span className="relative z-10 flex items-center">
                              Demander un devis
                              <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                            </span>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-sage-700 to-sage-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              initial={false}
                            />
                          </Button>
                        </motion.div>
                      </motion.div>
                    </motion.section>
                  )}

                  {/* Section 2: Plantes */}
                  {activeSection === 'plantes' && (
                    <motion.section
                      key="plantes"
                      id="plantes"
                      initial={{ opacity: 0, x: -50, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 50, scale: 0.95 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                        staggerChildren: 0.1
                      }}
                      className="mb-32"
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          className="w-20 h-20 bg-gradient-to-br from-sage-100 to-sage-200 rounded-2xl flex items-center justify-center shadow-lg"
                        >
                          <Sprout className="text-sage-700" size={36} />
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-dancing text-sage-700">
                          Plantes
                        </h2>
                      </div>

                      <motion.div
                        className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 relative overflow-hidden hover:shadow-2xl transition-shadow duration-500"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        <motion.div
                          className="absolute top-0 left-0 w-64 h-64 bg-sage-100 rounded-full -ml-32 -mt-32 opacity-20"
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, -5, 0]
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        ></motion.div>
                        <div className="relative z-10">
                          <p className="text-lg text-sage-700 leading-relaxed mb-6">
                            Nous proposons une sélection de <strong className="text-sage-600">plantes d'intérieur et d'extérieur</strong>. Chez au ver&apos;tige, on aime particulièrement les <strong className="text-sage-600">plantes originales</strong> :
                            cactus aux formes graphiques, succulentes surprenantes, plantes fleuries qui sortent de l'ordinaire.
                            Venez découvrir en boutique.
                          </p>
                          <p className="text-lg text-sage-700 leading-relaxed mb-6">
                            Que vous ayez la main verte ou que vous débutiez, nous prenons le temps de vous conseiller sur l'entretien de chaque plante.
                            L'idée, c'est de trouver ensemble celle qui correspondra à votre intérieur et à votre rythme de vie. Une plante bien choisie,
                            c'est un compagnon qui grandit avec vous pendant des années.
                          </p>

                          {/* Partenaire Boul Ki Mouss */}
                          <div className="bg-gradient-to-br from-sage-50 to-cream-50 rounded-2xl p-6 mb-6 border border-sage-200">
                            <h3 className="text-xl font-semibold text-sage-700 mb-3 flex items-center gap-2">
                              <Handshake className="h-6 w-6 text-sage-600" />
                              Notre partenaire
                            </h3>
                            <p className="text-sage-600 mb-4">
                              Nous sommes fiers de travailler avec <strong className="text-sage-700">Boul Ki Mouss</strong>, spécialiste des plantes
                              originales et rares. Leur expertise complète parfaitement notre offre pour vous proposer
                              une sélection unique de végétaux.
                            </p>
                            <a
                              href="https://boulkimouss.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium transition-colors"
                            >
                              Découvrir Boul Ki Mouss
                              <ExternalLink size={16} />
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex justify-center mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            onClick={() => setShowDevisModal('plantes')}
                            className="bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white font-bold py-4 px-10 rounded-full shadow-xl transition text-lg group"
                          >
                            Demander un devis
                            <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                          </Button>
                        </motion.div>
                      </motion.div>
                    </motion.section>
                  )}

                  {/* Section 3: Fleurissement de tombes */}
                  {activeSection === 'fleurissement' && (
                    <motion.section
                      key="fleurissement"
                      id="fleurissement"
                      initial={{ opacity: 0, x: -50, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 50, scale: 0.95 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                        staggerChildren: 0.1
                      }}
                      className="mb-32"
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg"
                        >
                          <Heart className="text-sage-700" size={36} />
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-dancing text-sage-700">
                          Fleurissement de tombes
                        </h2>
                      </div>

                      <motion.div
                        className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 relative overflow-hidden hover:shadow-2xl transition-shadow duration-500"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        <motion.div
                          className="absolute bottom-0 right-0 w-64 h-64 bg-gray-100 rounded-full -mr-32 -mb-32 opacity-20"
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, 0]
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        ></motion.div>
                        <div className="relative z-10">
                          <p className="text-lg text-sage-700 leading-relaxed mb-6">
                            Depuis <strong className="text-sage-600">plus de 10 ans</strong>, nous accompagnons les familles dans les moments difficiles pour
                            <strong className="text-sage-600"> honorer leurs proches</strong> avec respect et dignité. Nous créons des compositions florales
                            sobres et élégantes, adaptées à chaque situation et à vos souhaits.
                          </p>
                          <p className="text-lg text-sage-700 leading-relaxed mb-6">
                            Notre <strong className="text-sage-600">proximité avec le cimetière Saint-Jacques</strong> nous permet de vous faciliter les choses :
                            nous créons vos compositions et vous pouvez les récupérer en boutique avant de vous rendre au cimetière. Nous sélectionnons des fleurs de qualité
                            qui résistent bien au temps et aux intempéries, dans les tons que vous préférez.
                          </p>
                          <p className="text-lg text-sage-700 leading-relaxed mb-6">
                            Dans ces moments-là, nous sommes à votre écoute. Nous prenons le temps d'échanger avec vous pour créer ensemble
                            une composition qui rend vraiment hommage à la personne disparue. Un service humain et bienveillant,
                            pour vous accompagner avec simplicité et empathie.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            <div className="flex items-start gap-3">
                              <Flower className="w-6 h-6 text-sage-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">Compositions respectueuses</h4>
                                <p className="text-sage-600 text-sm">Élégantes et sobres</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <MapPin className="w-6 h-6 text-sage-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">Proximité</h4>
                                <p className="text-sage-600 text-sm">Cimetière Saint-Jacques</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Clock className="w-6 h-6 text-sage-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">10 ans d'expérience</h4>
                                <p className="text-sage-600 text-sm">Service facilité</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Heart className="w-6 h-6 text-sage-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">Accompagnement</h4>
                                <p className="text-sage-600 text-sm">Dépôt ou retrait en boutique au choix</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <div className="flex justify-center mt-8">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            onClick={() => setShowDevisModal('fleurissement-tombes')}
                            className="bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white font-bold py-4 px-10 rounded-full shadow-xl transition text-lg group"
                          >
                            Demander un devis
                            <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                          </Button>
                        </motion.div>
                      </div>
                    </motion.section>
                  )}

                  {/* Section 4: Bougies & parfums d'ambiance */}
                  {activeSection === 'bougies' && (
                    <motion.section
                      key="bougies"
                      id="bougies"
                      initial={{ opacity: 0, x: -50, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 50, scale: 0.95 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                        staggerChildren: 0.1
                      }}
                      className="mb-32"
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          className="w-20 h-20 bg-gradient-to-br from-sage-100 to-sage-200 rounded-2xl flex items-center justify-center shadow-lg"
                        >
                          <Flame className="text-sage-600" size={36} />
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-dancing text-sage-700">
                          Bougies & parfums d'ambiance
                        </h2>
                      </div>

                      <motion.div
                        className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 relative overflow-hidden hover:shadow-2xl transition-shadow duration-500"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        <motion.div
                          className="absolute top-0 right-0 w-64 h-64 bg-sage-100 rounded-full -mr-32 -mt-32 opacity-20"
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, 0]
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        ></motion.div>
                        <div className="relative z-10">
                          <p className="text-lg text-sage-700 leading-relaxed mb-6">
                            Chez au ver&apos;tige, on aime trouver des <strong className="text-sage-600">cadeaux originaux</strong> qui sortent de l&apos;ordinaire.
                            C'est pour ça qu'on vous propose une sélection de <strong className="text-sage-600">bougies parfumées et diffuseurs d'ambiance de qualité</strong>.
                          </p>
                          <p className="text-lg text-sage-700 leading-relaxed mb-6">
                            Ces <strong className="text-sage-600">bougies artisanales</strong> sont parfaites pour se faire plaisir ou pour offrir.
                            Elles apportent une touche chaleureuse à votre intérieur et accompagnent vos moments de détente.
                            Une belle idée cadeau pour ceux qui apprécient les petites attentions.
                          </p>

                          {/* Partenaire Mathilde M */}
                          <div className="bg-gradient-to-br from-sage-50 to-cream-50 rounded-2xl p-6 mb-6 border border-sage-200">
                            <h3 className="text-xl font-semibold text-sage-700 mb-3 flex items-center gap-2">
                              <Handshake className="h-6 w-6 text-sage-600" />
                              Notre partenaire Mathilde M
                            </h3>
                            <p className="text-sage-600 mb-4">
                              Nous sommes fiers de vous proposer les créations de <strong className="text-sage-700">Mathilde M</strong>, marque française
                              spécialisée dans les parfums d'intérieur. Leurs bougies parfumées et diffuseurs sont créés en
                              France avec des ingrédients de haute qualité, en collaboration avec des <strong className="text-sage-700">Maîtres-Parfumeurs de Grasse</strong>.
                              Des créations poétiques qui apportent une nouvelle dimension sensorielle à votre intérieur.
                            </p>
                            <a
                              href="https://www.mathilde-m.com/fr/4-parfum-d-interieur"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium transition-colors"
                            >
                              Découvrir Mathilde M
                              <ExternalLink size={16} />
                            </a>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">🕯️</span>
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">Bougies parfumées</h4>
                                <p className="text-sage-600 text-sm">Artisanales et de qualité</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">🌸</span>
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">Diffuseurs</h4>
                                <p className="text-sage-600 text-sm">Parfum d'ambiance</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">🎁</span>
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">Idées cadeaux</h4>
                                <p className="text-sage-600 text-sm">Originales et uniques</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">🇫🇷</span>
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">Créations françaises</h4>
                                <p className="text-sage-600 text-sm">De haute qualité</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <div className="flex justify-center mt-8">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            onClick={() => setShowDevisModal('bougies')}
                            className="bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white font-bold py-4 px-10 rounded-full shadow-xl transition text-lg group"
                          >
                            Demander un devis
                            <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                          </Button>
                        </motion.div>
                      </div>
                    </motion.section>
                  )}

                  {/* Section 5: Décoration d'intérieur */}
                  {activeSection === 'decoration' && (
                    <motion.section
                      key="decoration"
                      id="decoration"
                      initial={{ opacity: 0, x: -50, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 50, scale: 0.95 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                        staggerChildren: 0.1
                      }}
                      className="mb-32"
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-20 h-20 bg-gradient-to-br from-sage-100 to-cream-100 rounded-2xl flex items-center justify-center shadow-lg"
                        >
                          <Home className="text-sage-700" size={36} />
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-dancing text-sage-700">
                          Décoration d'intérieur
                        </h2>
                      </div>

                      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cream-200 rounded-full -ml-32 -mb-32 opacity-20"></div>
                        <div className="relative z-10">
                          <p className="text-lg text-sage-700 leading-relaxed mb-6">
                            En tant que <strong className="text-sage-600">décorateurs d'intérieur spécialisés dans le végétal</strong>, nous vous accompagnons
                            pour créer des ambiances qui vous ressemblent. On prend le temps d'échanger avec vous pour comprendre vos goûts,
                            votre espace et vos envies, afin de créer quelque chose d'unique et de personnel.
                          </p>
                          <p className="text-lg text-sage-700 leading-relaxed mb-6">
                            Nous travaillons avec différents éléments : <strong className="text-sage-600">fleurs séchées</strong> pour des compositions durables,
                            <strong className="text-sage-600"> cadres végétaux</strong> pour habiller vos murs, <strong className="text-sage-600">vases sur-mesure</strong>{' '}
                            pour mettre en valeur vos fleurs, et <strong className="text-sage-600">bougeoirs personnalisés</strong> pour créer des ambiances chaleureuses.
                            Chaque élément est choisi avec soin pour s'harmoniser avec votre intérieur.
                          </p>
                          <p className="text-lg text-sage-700 leading-relaxed mb-6">
                            Notre approche est <strong className="text-sage-600">sur-mesure et humaine</strong>. Nous prenons le temps de vous écouter et de comprendre
                            votre univers. Ensemble, on crée une décoration végétale qui vous ressemble vraiment, pas juste quelque chose à la mode.
                            Un service personnalisé pour sublimer votre quotidien.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">🌿</span>
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">Fleurs séchées</h4>
                                <p className="text-sage-600 text-sm">Compositions durables</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">🖼️</span>
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">Cadres végétaux</h4>
                                <p className="text-sage-600 text-sm">Sur-mesure</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">🏺</span>
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">Vases</h4>
                                <p className="text-sage-600 text-sm">Personnalisés</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">🕯️</span>
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">Bougeoirs</h4>
                                <p className="text-sage-600 text-sm">Photophores</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">✨</span>
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">Conseils</h4>
                                <p className="text-sage-600 text-sm">Personnalisés</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">👥</span>
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">Service humain</h4>
                                <p className="text-sage-600 text-sm">Sur-mesure</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="flex justify-center mt-8">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            onClick={() => setShowDevisModal('decoration')}
                            className="bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white font-bold py-4 px-10 rounded-full shadow-xl transition text-lg group"
                          >
                            Demander un devis
                            <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                          </Button>
                        </motion.div>
                      </div>
                    </motion.section>
                  )}

                  {/* Section 6: Services pour professionnels */}
                  {activeSection === 'professionnels' && (
                    <motion.section
                      key="professionnels"
                      id="professionnels"
                      initial={{ opacity: 0, x: -50, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 50, scale: 0.95 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                        staggerChildren: 0.1
                      }}
                      className="mb-32"
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          className="w-20 h-20 bg-gradient-to-br from-sage-100 to-sage-200 rounded-2xl flex items-center justify-center shadow-lg"
                        >
                          <Building className="text-sage-700" size={36} />
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-dancing text-sage-700">
                          Services pour professionnels
                        </h2>
                      </div>

                      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-sage-100 rounded-full -ml-32 -mt-32 opacity-20"></div>
                        <div className="relative z-10">
                          <p className="text-lg text-sage-700 leading-relaxed mb-6">
                            Nous travaillons avec des <strong className="text-sage-600">entreprises (et bureaux pour créer des ambiances florales)</strong>.
                            Nous vous apportons fraîcheur et vie dans vos espaces, avec des créations adaptées à votre environnement et à votre activité.
                          </p>
                          <p className="text-lg text-sage-700 leading-relaxed mb-6">
                            Nos <strong className="text-sage-600">contrats floraux</strong> vous simplifient la vie : nous livrons vos compositions régulièrement.
                            Vous n'avez plus à y penser, et vos espaces restent toujours fleuris avec des compositions fraîches et de qualité.
                            Un service qui s'adapte à vos horaires et vos besoins.
                          </p>
                          <p className="text-lg text-sage-700 leading-relaxed mb-6">
                            Pour vos <strong className="text-sage-600">événements d'entreprise</strong> (séminaires, inaugurations, lancements de produits, conférences),
                            nous proposons la livraison et l'entretien de fleurs à la fréquence de votre choix. On établit ensemble un <strong className="text-sage-600">devis sur-mesure</strong>.
                            Des créations qui donnent du caractère à votre événement.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-8">
                            <div className="flex items-start gap-3">
                              <Calendar className="w-6 h-6 text-sage-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">Contrats floraux</h4>
                                <p className="text-sage-600 text-sm">Réguliers et personnalisés</p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <SparklesIcon className="w-6 h-6 text-sage-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">Événements</h4>
                                <p className="text-sage-600 text-sm">Devis sur-mesure</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <RefreshCw className="w-6 h-6 text-sage-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-sage-700 mb-1">Renouvellement</h4>
                                <p className="text-sage-600 text-sm">Régulier pour la fraîcheur</p>
                              </div>
                            </div>
                          </div>

                          {/* Logos entreprises */}
                          <TrustedBy logos={logosEntreprises} />
                        </div>
                      </div>


                      <div className="flex justify-center mt-8">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            onClick={() => setShowDevisModal('professionnels')}
                            className="bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white font-bold py-4 px-10 rounded-full shadow-xl transition text-lg group"
                          >
                            Demander un devis
                            <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                          </Button>
                        </motion.div>
                      </div>
                    </motion.section>
                  )}
                </AnimatePresence>
              </div>

              {/* Colonne d'images flip cards à droite */}
              <div className="hidden lg:block">
                <div className="sticky top-32">
                  <div className="grid grid-cols-3 gap-3">
                    {(() => {
                      // Déterminer quelle section est active et afficher ses images
                      const sectionMap: Record<string, keyof typeof images.services> = {
                        'bouquets': 'bouquets',
                        'plantes': 'plantes',
                        'fleurissement': 'fleurissementTombes',
                        'bougies': 'bougies',
                        'decoration': 'decoration',
                        'professionnels': 'professionnels',
                      };

                      const serviceKey = sectionMap[activeSection] || 'bouquets';
                      const serviceImages = getServiceImagesForDisplay(serviceKey);

                      return serviceImages.map((img, index) => (
                        <FlipCard
                          key={`${activeSection}-${index}-${img}`}
                          image={img}
                          index={index}
                          onImageClick={setSelectedImage}
                          autoFlip={true}
                        />
                      ));
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lightbox pour les images */}
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt="Vue agrandie"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-4xl hover:text-sage-400 transition-colors"
              >
                ×
              </button>
            </motion.div>
          )}
        </main>

        {/* FAQ Services */}
        <section id="faq" className="py-16 bg-white scroll-mt-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <FAQ items={servicesFAQItems} />
          </div>
        </section>

        {/* Section Pages similaires - Liens vers créations */}
        <RelatedPages
          currentPage="/services"
          title="Découvrez nos créations par occasion"
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
              description: "Bouquets pour faire plaisir à vos proches",
              icon: Sparkles
            },
            {
              title: "Se faire plaisir",
              url: "/evenements#se-faire-plaisir",
              description: "Créations florales pour vous faire plaisir",
              icon: Flower
            }
          ]}
        />

        {/* Modals de devis */}
        {['bouquets', 'plantes', 'fleurissement-tombes', 'bougies', 'decoration', 'professionnels'].map((service) => {
          const serviceNames: Record<string, string> = {
            'bouquets': 'Bouquets & fleurs fraîches',
            'plantes': 'Plantes',
            'fleurissement-tombes': 'Fleurissement de tombes',
            'bougies': 'Bougies & parfums d\'ambiance',
            'decoration': 'Décoration d\'intérieur',
            'professionnels': 'Services pour professionnels'
          };

          return (
            <AnimatedModal
              key={service}
              isOpen={showDevisModal === service}
              onClose={() => setShowDevisModal(null)}
              title={`Demander un devis - ${serviceNames[service]}`}
              size="md"
            >
              <form onSubmit={(e) => handleDevisSubmit(e, serviceNames[service])} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sage-700 mb-1 font-medium">Nom complet</label>
                  <input type="text" className="w-full border border-sage-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sage-500 focus:border-transparent" required />
                </div>
                <div>
                  <label className="block text-sage-700 mb-1 font-medium">Téléphone</label>
                  <input type="tel" className="w-full border border-sage-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sage-500 focus:border-transparent" required />
                </div>
                <div>
                  <label className="block text-sage-700 mb-1 font-medium">Email</label>
                  <input type="email" className="w-full border border-sage-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sage-500 focus:border-transparent" required />
                </div>
                <div>
                  <label className="block text-sage-700 mb-1 font-medium">Message / Détails de votre demande</label>
                  <textarea className="w-full border border-sage-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sage-500 focus:border-transparent" rows={4} required />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transition mt-2">
                    Envoyer la demande
                  </Button>
                </motion.div>
              </form>
            </AnimatedModal>
          );
        })}
      </Layout>
    </>
  );
};

export default Services;
