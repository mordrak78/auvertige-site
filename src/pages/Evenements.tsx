import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/layout/Layout';
import Seo from '@/components/shared/Seo';
import FAQ, { FAQItem } from '@/components/shared/FAQ';
import { useSeasonalContent, SeasonalContentType } from '@/hooks/useSeasonalContent';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Instagram, ExternalLink, Heart, Gift, Baby, Flower, Calendar, Sparkles, Leaf } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { images } from '@/data/images';
import { useState, useEffect } from 'react';

// Lazy load des composants lourds
const InstagramFeed = lazy(() => import('@/components/shared/InstagramFeed'));

const evenementsFAQItems: FAQItem[] = [
  {
    question: "Comment commander un bouquet personnalisé sur-mesure à Nantes ?",
    answer: (
      <>
        Pour commander un bouquet personnalisé Nantes, contactez-nous au 02 40 54 10 02
        ou via notre{' '}
        <Link to="/contact" className="text-poppy-600 underline font-medium">
          formulaire de contact
        </Link>
        . Nous créons vos compositions artisanales sur-mesure selon la fête ou
        l'événement célébré.
      </>
    ),
  },
  {
    question: "Êtes-vous ouverts le dimanche pour récupérer vos créations événementielles ?",
    answer: (
      <>
        Oui, nous assurons le retrait le dimanche matin (10h-13h). Toutes les modalités
        sont détaillées sur la page{' '}
        <Link
          to="/fleuriste-ouvert-dimanche-nantes"
          className="text-poppy-600 underline font-medium"
        >
          Fleuriste ouvert dimanche Nantes
        </Link>
        .
      </>
    ),
  },
  {
    question: "Quelle est la différence entre une création florale artisanale et un bouquet classique ?",
    answer:
      "Une création florale artisanale Nantes est réalisée à la main par nos artisans fleuristes, avec des fleurs sélectionnées individuellement. Chaque fleur faites main Nantes est unique et la composition est personnalisée sur-mesure. Contrairement aux bouquets classiques, nos fleurs uniques Nantes sont créées spécialement pour vous.",
  },
  {
    question: "Proposez-vous des créations pour la Toussaint à Nantes ?",
    answer:
      "Oui, nous créons des fleurs Toussaint Nantes et compositions florales Toussaint pour honorer vos proches. Fleurs hommage défunt, compositions traditionnelles. Notre boutique est proche du cimetière Saint-Jacques, ce qui facilite le retrait de vos fleurs cimetière Nantes. Contactez-nous pour commander vos compositions.",
  },
  {
    question: "Où trouver toutes nos réponses pour les événements ?",
    answer: (
      <>
        Retrouvez davantage de questions-réponses sur notre{' '}
        <Link to="/services#faq" className="text-poppy-600 underline font-medium">
          FAQ complète
        </Link>{' '}
        ou écrivez-nous via la{' '}
        <Link to="/contact" className="text-poppy-600 underline font-medium">
          page contact
        </Link>
        .
      </>
    ),
  },
];

interface SeasonalCard {
  id: SeasonalContentType;
  title: string;
  description: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  bgColor: string;
  iconBg: string;
  iconColor: string;
}

const seasonalCards: SeasonalCard[] = [
  {
    id: 'saint-valentin',
    title: 'Fleuriste Saint-Valentin Nantes',
    description: 'Bouquet personnalisé Saint-Valentin Nantes : Créations florales artisanales romantiques sur-mesure. Fleurs faites main Nantes, compositions uniques pour déclarer votre amour.',
    link: '/plaisirs-offrir',
    icon: Heart,
    gradient: 'from-pink-50 to-red-50',
    bgColor: 'bg-pink-100',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
  {
    id: 'fete-des-meres',
    title: 'Fleuriste Fête des Mères Nantes',
    description: 'Bouquet sur-mesure Fête des Mères Nantes : Créations florales artisanales uniques pour honorer les mamans. Fleurs faites main Nantes, compositions personnalisées sur-mesure.',
    link: '/plaisirs-offrir',
    icon: Heart,
    gradient: 'from-purple-50 to-pink-50',
    bgColor: 'bg-purple-100',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    id: 'toussaint',
    title: 'Fleurs Toussaint Nantes',
    description: 'Fleurs Toussaint Nantes : À la Toussaint, exprimez votre hommage avec nos compositions florales traditionnelles. Composition florale Toussaint, fleurs hommage défunt. Fleuriste proche du cimetière Saint-Jacques.',
    link: '/deuil',
    icon: Flower,
    gradient: 'from-sage-50 to-cream-50',
    bgColor: 'bg-sage-100',
    iconBg: 'bg-sage-100',
    iconColor: 'text-sage-600',
  },
  {
    id: 'fete-des-peres',
    title: 'Fleuriste Fête des Pères Nantes',
    description: 'Bouquet personnalisé Fête des Pères Nantes : Créations florales artisanales sur-mesure pour honorer les papas. Fleurs uniques Nantes, compositions faites main personnalisées.',
    link: '/plaisirs-offrir',
    icon: Leaf,
    gradient: 'from-blue-50 to-sage-50',
    bgColor: 'bg-blue-100',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
];

const Evenements = () => {
  const { isSeasonActive } = useSeasonalContent();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>('mariage');
  const { shouldAnimate } = useReducedMotion();
  
  // Séparer les saisons actives et inactives
  const activeSeasons = seasonalCards.filter(card => isSeasonActive(card.id));
  const inactiveSeasons = seasonalCards.filter(card => !isSeasonActive(card.id));

  // Gérer l'activation de section depuis l'URL hash
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    const validSections = ['mariage', 'anniversaire', 'bapteme', 'naissance', 'deuil', 'saint-valentin', 'fete-des-meres', 'toussaint', 'noel', 'fete-des-peres'];
    
    if (hash && validSections.includes(hash)) {
      setActiveSection(hash);
    } else if (!hash) {
      setActiveSection('mariage');
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
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 250;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 600);
    }
  }, [activeSection, location.hash]);

  return (
    <Layout>
      <Seo
        title="Fleurs pour tous vos événements à Nantes | Au Vertige"
        description="Mariage, anniversaire, baptême, naissance... Nous créons des bouquets personnalisés qui racontent votre histoire. Chaque composition est unique, entièrement faite main dans notre atelier à Nantes. 02 40 54 10 02"
        faq={evenementsFAQItems}
      />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/creations/mariage/bouquet-de-mariage-1024x683.webp"
            alt="Événements floraux"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-dancing mb-6">Vos événements méritent des fleurs uniques</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Chaque moment important de votre vie mérite une création florale qui vous ressemble. Nous créons pour vous des bouquets personnalisés, entièrement faits main à Nantes.
          </p>
        </div>
      </section>

      {/* Navigation rapide (onglets) */}
      <div className="sticky top-20 z-30 bg-cream-50/95 backdrop-blur-sm border-b border-sage-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide justify-center">
            {[
              { id: 'mariage', label: 'Mariage', icon: Heart },
              { id: 'anniversaire', label: 'Anniversaire', icon: Gift },
              { id: 'bapteme', label: 'Baptême', icon: Baby },
              { id: 'naissance', label: 'Naissance', icon: Sparkles },
              { id: 'deuil', label: 'Deuil', icon: Flower },
            ].map((item) => {
              const isActive = activeSection === item.id;
              const ButtonComponent = shouldAnimate ? motion.button : 'button';
              const buttonProps = shouldAnimate ? {
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                transition: { duration: 0.2 }
              } : {};
              
              return (
                <ButtonComponent
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  {...buttonProps}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm text-sm font-medium whitespace-nowrap relative overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-r from-poppy-500 to-poppy-600 text-white shadow-lg'
                      : 'bg-white text-sage-700 hover:bg-poppy-50 hover:text-poppy-600 hover:shadow-md'
                  }`}
                >
                  <item.icon size={16} className="relative z-10" />
                  <span className="relative z-10">{item.label}</span>
                </ButtonComponent>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section Événements avec onglets */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 id="fleurs-moment-vie" className="text-4xl md:text-5xl font-dancing text-sage-700 mb-6">
              Des fleurs pour chaque moment de votre vie
            </h2>
            <p className="text-sage-600 text-lg max-w-3xl mx-auto">
              Mariage, anniversaire, baptême ou naissance : nous créons des bouquets personnalisés qui racontent votre histoire. 
              Chaque composition est unique, entièrement faite main dans notre atelier à Nantes, avec des fleurs soigneusement sélectionnées.
            </p>
          </motion.div>

          {/* Contenu avec AnimatePresence - Une seule section visible */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {/* Section Mariage */}
              {activeSection === 'mariage' && (
                <motion.section
                  key="mariage"
                  id="mariage"
                  initial={{ opacity: 0, x: -50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="mb-16"
                >
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-poppy-100 to-poppy-200 rounded-2xl flex items-center justify-center shadow-lg">
                      <Heart className="text-poppy-600" size={36} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-dancing text-sage-700">Mariage</h2>
                  </div>
                  <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    <p className="text-lg text-sage-700 leading-relaxed mb-6">
                      Votre plus beau jour mérite des fleurs exceptionnelles. Nous créons votre bouquet de mariée et toutes les décorations florales qui accompagneront ce moment unique, en parfaite harmonie avec vos envies.
                    </p>
                    <p className="text-lg text-sage-700 leading-relaxed mb-6">
                      Chaque création est pensée avec vous, pour refléter votre personnalité et créer une ambiance magique. Bouquets de mariée, bouquets de demoiselles d'honneur, boutonnières, centres de table... Nous vous accompagnons dans chaque détail.
                    </p>
                    <Link to="/contact" className="inline-block bg-poppy-500 hover:bg-poppy-600 text-white px-8 py-3 rounded-full font-medium transition-all">
                      Demander un devis pour votre mariage
                    </Link>
                  </div>
                </motion.section>
              )}

              {/* Section Anniversaire */}
              {activeSection === 'anniversaire' && (
                <motion.section
                  key="anniversaire"
                  id="anniversaire"
                  initial={{ opacity: 0, x: -50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="mb-16"
                >
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-poppy-100 to-poppy-200 rounded-2xl flex items-center justify-center shadow-lg">
                      <Gift className="text-poppy-600" size={36} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-dancing text-sage-700">Anniversaire</h2>
                  </div>
                  <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    <p className="text-lg text-sage-700 leading-relaxed mb-6">
                      Un anniversaire à célébrer ? Offrez un bouquet qui dit tout : votre affection, votre joie, votre présence. Nous composons pour vous un arrangement floral qui fera briller les yeux de la personne que vous aimez.
                    </p>
                    <ul className="text-sage-600 text-lg space-y-2 mb-6">
                      <li>Bouquets personnalisés pour tous les âges</li>
                      <li>Conseils pour choisir les fleurs selon la saison</li>
                      <li>Créations florales artisanales faites main</li>
                    </ul>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 items-center">
                      {[images.creations.anniversaire.bonbonne, images.creations.anniversaire.rhipsalis, 
                        images.creations.anniversaire.orchidee, images.creations.anniversaire.beaucarnea].map((img, idx) => (
                        <img key={idx} src={img} alt={`Anniversaire ${idx + 1}`} className="w-full h-48 object-cover rounded-lg" />
                      ))}
                    </div>
                    <Link to="/contact" className="inline-block bg-poppy-500 hover:bg-poppy-600 text-white px-8 py-3 rounded-full font-medium transition-all">
                      Demander un devis pour un bouquet anniversaire
                    </Link>
                  </div>
                </motion.section>
              )}

              {/* Section Baptême */}
              {activeSection === 'bapteme' && (
                <motion.section
                  key="bapteme"
                  id="bapteme"
                  initial={{ opacity: 0, x: -50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="mb-16"
                >
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-poppy-100 to-poppy-200 rounded-2xl flex items-center justify-center shadow-lg">
                      <Baby className="text-poppy-600" size={36} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-dancing text-sage-700">Baptême</h2>
                  </div>
                  <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    <p className="text-lg text-sage-700 leading-relaxed mb-6">
                      Pour célébrer l'arrivée d'un petit être dans la communauté, nous créons des compositions douces et délicates, avec des fleurs fraîches et des couleurs tendres qui reflètent toute la pureté de ce moment.
                    </p>
                    <ul className="text-sage-600 text-lg space-y-2 mb-6">
                      <li>Bouquets personnalisés pour le baptême</li>
                      <li>Compositions douces et délicates</li>
                      <li>Conseils pour choisir les fleurs selon la saison</li>
                    </ul>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 items-center">
                      {[images.creations.bapteme.lys1, images.creations.bapteme.lys2, 
                        images.creations.bapteme.lys3, images.creations.bapteme.lys4].map((img, idx) => (
                        <img key={idx} src={img} alt={`Baptême ${idx + 1}`} className="w-full h-48 object-cover rounded-lg" />
                      ))}
                    </div>
                    <Link to="/contact" className="inline-block bg-poppy-500 hover:bg-poppy-600 text-white px-8 py-3 rounded-full font-medium transition-all">
                      Demander un devis pour un bouquet de baptême
                    </Link>
                  </div>
                </motion.section>
              )}

              {/* Section Naissance */}
              {activeSection === 'naissance' && (
                <motion.section
                  key="naissance"
                  id="naissance"
                  initial={{ opacity: 0, x: -50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="mb-16"
                >
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-poppy-100 to-poppy-200 rounded-2xl flex items-center justify-center shadow-lg">
                      <Sparkles className="text-poppy-600" size={36} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-dancing text-sage-700">Naissance</h2>
                  </div>
                  <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    <p className="text-lg text-sage-700 leading-relaxed mb-6">
                      Un bébé vient de naître ? C'est une explosion de joie ! Nous créons des bouquets joyeux et colorés pour célébrer cette merveilleuse nouvelle et apporter un sourire aux jeunes parents.
                    </p>
                    <ul className="text-sage-600 text-lg space-y-2 mb-6">
                      <li>Bouquets tendres pour célébrer une naissance</li>
                      <li>Compositions douces et délicates</li>
                      <li>Créations florales artisanales uniques</li>
                    </ul>
                    <Link to="/contact" className="inline-block bg-poppy-500 hover:bg-poppy-600 text-white px-8 py-3 rounded-full font-medium transition-all">
                      Demander un devis pour un bouquet naissance
                    </Link>
                  </div>
                </motion.section>
              )}

              {/* Section Deuil */}
              {activeSection === 'deuil' && (
                <motion.section
                  key="deuil"
                  id="deuil"
                  initial={{ opacity: 0, x: -50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="mb-16"
                >
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-sage-100 to-sage-200 rounded-2xl flex items-center justify-center shadow-lg">
                      <Flower className="text-sage-600" size={36} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-dancing text-sage-700">Deuil</h2>
                  </div>
                  <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    <p className="text-lg text-sage-700 leading-relaxed mb-6">
                      Dans les moments difficiles, les fleurs apportent du réconfort et expriment ce que les mots ne peuvent pas dire. Nous créons avec respect et délicatesse des compositions pour rendre hommage à la personne disparue.
                    </p>
                    <Link to="/contact" className="inline-block bg-poppy-500 hover:bg-poppy-600 text-white px-8 py-3 rounded-full font-medium transition-all">
                      Demander un devis pour une composition deuil
                    </Link>
                  </div>
                </motion.section>
              )}

              {/* Section Saint-Valentin */}
              {activeSection === 'saint-valentin' && (
                <motion.section
                  key="saint-valentin"
                  id="saint-valentin"
                  initial={{ opacity: 0, x: -50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="mb-16"
                >
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center shadow-lg">
                      <Heart className="text-pink-600" size={36} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-dancing text-sage-700">Saint-Valentin</h2>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-3xl shadow-xl p-8 md:p-12">
                    <p className="text-lg text-sage-700 leading-relaxed mb-6">
                      Bouquet personnalisé Saint-Valentin Nantes : Créations florales artisanales romantiques sur-mesure. Fleurs faites main Nantes, compositions uniques pour déclarer votre amour.
                    </p>
                    <Link to="/contact" className="inline-block bg-poppy-500 hover:bg-poppy-600 text-white px-8 py-3 rounded-full font-medium transition-all">
                      Demander un devis pour un bouquet Saint-Valentin
                    </Link>
                  </div>
                </motion.section>
              )}

              {/* Section Fête des Mères */}
              {activeSection === 'fete-des-meres' && (
                <motion.section
                  key="fete-des-meres"
                  id="fete-des-meres"
                  initial={{ opacity: 0, x: -50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="mb-16"
                >
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center shadow-lg">
                      <Heart className="text-purple-600" size={36} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-dancing text-sage-700">Fête des Mères</h2>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-xl p-8 md:p-12">
                    <p className="text-lg text-sage-700 leading-relaxed mb-6">
                      Bouquet sur-mesure Fête des Mères Nantes : Créations florales artisanales uniques pour honorer les mamans. Fleurs faites main Nantes, compositions personnalisées sur-mesure.
                    </p>
                    <Link to="/contact" className="inline-block bg-poppy-500 hover:bg-poppy-600 text-white px-8 py-3 rounded-full font-medium transition-all">
                      Demander un devis pour un bouquet Fête des Mères
                    </Link>
                  </div>
                </motion.section>
              )}

              {/* Section Toussaint */}
              {activeSection === 'toussaint' && (
                <motion.section
                  key="toussaint"
                  id="toussaint"
                  initial={{ opacity: 0, x: -50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="mb-16"
                >
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-sage-100 to-sage-200 rounded-2xl flex items-center justify-center shadow-lg">
                      <Flower className="text-sage-600" size={36} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-dancing text-sage-700">Toussaint</h2>
                  </div>
                  <div className="bg-gradient-to-br from-sage-50 to-cream-50 rounded-3xl shadow-xl p-8 md:p-12">
                    <p className="text-lg text-sage-700 leading-relaxed mb-6">
                      Fleurs Toussaint Nantes : À la Toussaint, exprimez votre hommage avec nos compositions florales traditionnelles. Composition florale Toussaint, fleurs hommage défunt. Fleuriste proche du cimetière Saint-Jacques.
                    </p>
                    <Link to="/contact" className="inline-block bg-poppy-500 hover:bg-poppy-600 text-white px-8 py-3 rounded-full font-medium transition-all">
                      Demander un devis pour une composition Toussaint
                    </Link>
                  </div>
                </motion.section>
              )}

              {/* Section Noël */}
              {activeSection === 'noel' && (
                <motion.section
                  key="noel"
                  id="noel"
                  initial={{ opacity: 0, x: -50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="mb-16"
                >
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center shadow-lg">
                      <Sparkles className="text-green-600" size={36} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-dancing text-sage-700">Noël</h2>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-red-50 rounded-3xl shadow-xl p-8 md:p-12">
                    <p className="text-lg text-sage-700 leading-relaxed mb-6">
                      Créations florales de Noël Nantes : Compositions festives et chaleureuses pour décorer votre intérieur et offrir à vos proches. Bouquets de Noël personnalisés sur-mesure.
                    </p>
                    <Link to="/contact" className="inline-block bg-poppy-500 hover:bg-poppy-600 text-white px-8 py-3 rounded-full font-medium transition-all">
                      Demander un devis pour une création de Noël
                    </Link>
                  </div>
                </motion.section>
              )}

              {/* Section Fête des Pères */}
              {activeSection === 'fete-des-peres' && (
                <motion.section
                  key="fete-des-peres"
                  id="fete-des-peres"
                  initial={{ opacity: 0, x: -50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="mb-16"
                >
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-lg">
                      <Leaf className="text-blue-600" size={36} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-dancing text-sage-700">Fête des Pères</h2>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-sage-50 rounded-3xl shadow-xl p-8 md:p-12">
                    <p className="text-lg text-sage-700 leading-relaxed mb-6">
                      Un papa à honorer ? Offrez-lui un bouquet qui lui ressemble. Nous créons des compositions florales personnalisées pour célébrer les papas avec élégance et originalité. Chaque création est pensée pour refléter sa personnalité et lui apporter une touche de fraîcheur.
                    </p>
                    <p className="text-lg text-sage-700 leading-relaxed mb-6">
                      Bouquets sur-mesure, compositions originales, plantes d'intérieur... Nous vous accompagnons pour trouver la création parfaite qui fera plaisir à votre papa. Des fleurs fraîches, sélectionnées avec soin, pour un cadeau qui marque les esprits.
                    </p>
                    <Link to="/contact" className="inline-block bg-poppy-500 hover:bg-poppy-600 text-white px-8 py-3 rounded-full font-medium transition-all">
                      Demander un devis pour un bouquet Fête des Pères
                    </Link>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Section Saisons & Fêtes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-dancing text-sage-700 mb-6">
              Au rythme des saisons et des fêtes
            </h2>
            <p className="text-sage-600 text-lg max-w-3xl mx-auto">
              Chaque saison apporte son lot de couleurs et d'émotions. Nous suivons le calendrier des fêtes pour vous proposer 
              des créations qui célèbrent ces moments spéciaux : Saint-Valentin, Fête des Mères, Toussaint, Noël...
            </p>
          </motion.div>

          {/* Saisons actives - Mis en avant */}
          {activeSeasons.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {activeSeasons.map((season, index) => {
                const Icon = season.icon;
                return (
                  <motion.div
                    key={season.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${season.gradient} rounded-xl p-6 shadow-lg`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 ${season.iconBg} rounded-full flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${season.iconColor}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-sage-700">{season.title}</h3>
                    </div>
                    <p className="text-sage-600 mb-4">{season.description}</p>
                    <Link to="/contact" className="text-poppy-600 hover:text-poppy-700 font-medium inline-flex items-center gap-1">
                      Demander un devis →
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Saisons inactives - Encart "à venir" */}
          {inactiveSeasons.length > 0 && (
            <div className="mt-8 pt-8 border-t border-sage-200">
              <h3 className="text-xl font-semibold text-sage-600 mb-4">Nos créations saisonnières (à venir)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {inactiveSeasons.map((season) => {
                  const Icon = season.icon;
                  return (
                    <motion.div
                      key={season.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="bg-white rounded-lg p-4 border border-sage-200 hover:border-sage-300 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 ${season.iconBg} rounded-full flex items-center justify-center opacity-60`}>
                          <Icon className={`w-4 h-4 ${season.iconColor}`} />
                        </div>
                        <h4 className="text-sm font-medium text-sage-700">
                          {season.title.replace('Fleuriste ', '').replace(' Nantes', '')}
                        </h4>
                      </div>
                      <p className="text-xs text-sage-500 mb-2">{season.description.substring(0, 80)}...</p>
                      <Link 
                        to={`/evenements#${season.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSection(season.id);
                          window.history.pushState(null, '', `/evenements#${season.id}`);
                          setTimeout(() => {
                            // Cibler le titre "Des fleurs pour chaque moment de votre vie"
                            const titleElement = document.getElementById('fleurs-moment-vie');
                            if (titleElement) {
                              const headerOffset = 180;
                              const elementPosition = titleElement.getBoundingClientRect().top;
                              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                              window.scrollTo({
                                top: offsetPosition,
                                behavior: 'smooth'
                              });
                            }
                          }, 300);
                        }}
                        className="text-xs text-poppy-600 hover:text-poppy-700 font-medium inline-flex items-center gap-1"
                      >
                        En savoir plus →
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>


      {/* Section Notre savoir-faire */}
      <section className="py-20 bg-gradient-to-br from-sage-50 to-cream-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-dancing text-sage-700 mb-6 text-center">
              Création florale artisanale Nantes : Fleurs faites main et uniques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Sparkles className="w-12 h-12 text-poppy-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-sage-700 mb-2">Fleurs uniques Nantes</h3>
                <p className="text-sage-600">
                  Chaque création florale artisanale est unique, faite main à Nantes. Aucune composition n'est identique.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Leaf className="w-12 h-12 text-poppy-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-sage-700 mb-2">Fleurs faites main Nantes</h3>
                <p className="text-sage-600">
                  Toutes nos créations florales artisanales sont réalisées à la main par nos artisans fleuristes à Nantes.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Heart className="w-12 h-12 text-poppy-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-sage-700 mb-2">Bouquet personnalisé sur-mesure</h3>
                <p className="text-sage-600">
                  Bouquet sur-mesure Nantes personnalisé selon vos goûts et l'occasion. Création florale artisanale unique.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Instagram */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-dancing text-sage-700 mb-6">
              Suivez-nous sur Instagram
            </h2>
            <p className="text-sage-600 text-lg max-w-2xl mx-auto mb-8">
              Découvrez nos dernières créations florales, nos événements et nos coups de cœur du moment. 
              Une source d'inspiration quotidienne pour vos compositions florales.
            </p>
            
            {/* Bouton Instagram */}
            <a
              href="https://www.instagram.com/auvertigefleuriste_nantes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Instagram size={24} />
              @auvertigefleuriste_nantes
              <ExternalLink size={20} />
            </a>
          </div>

        {/* Actus du mois */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h4 className="text-3xl font-dancing text-sage-700 mb-4">
              Découvrez nos actus du mois
            </h4>
            <p className="text-sage-600 text-lg">
              Nos dernières créations et actualités en temps réel
            </p>
          </div>

          {/* Composant Instagram Feed */}
          <Suspense fallback={
            <div className="flex justify-center items-center h-64">
              <div className="animate-pulse text-sage-600">Chargement Instagram...</div>
            </div>
          }>
            <InstagramFeed />
          </Suspense>
        </div>
        </div>
      </section>

      {/* FAQ Événements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FAQ items={evenementsFAQItems} />
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-dancing text-sage-700 mb-6">
            Une création sur-mesure ?
          </h2>
          <p className="text-sage-600 text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-poppy-500 hover:bg-poppy-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md"
            >
              Nous contacter
            </Link>
            <a
              href="tel:0240541002"
              className="inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Evenements;