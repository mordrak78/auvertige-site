import * as React from 'react';
import { ArrowRight, Heart, Cake, Sprout, Baby, Sparkles, Gift, ChevronLeft, ChevronRight, ChevronUp, ChevronDown, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import { images } from '@/data/images';
import { OptimizedImage } from '@/components/shared/OptimizedImage';
import { Button } from '@/components/ui/button';
import { ScrollToTopLink } from '@/components/shared/ScrollToTopLink';

const eventThemes = [
  {
    key: 'mariage',
    title: 'Mariage',
    icon: Heart,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    description: 'Créations florales romantiques et élégantes pour votre plus beau jour. Bouquets de mariée sur-mesure, décorations de salle et compositions raffinées qui subliment votre union.',
    cta: 'Voir nos créations Mariage',
    ctaLink: '/mariage',
    mainImage: images.creations.mariage.bouquetLarge,
    gallery: [
      images.creations.mariage.bouquet1,
      images.creations.mariage.bouquet2,
      images.creations.mariage.bouquet3,
      images.creations.mariage.bouquet4,
      images.creations.mariage.bouquet5,
      images.creations.mariage.bouquet6,
      images.creations.mariage.bouquet7,
      images.creations.mariage.bouquet8,
    ]
  },
  {
    key: 'anniversaire',
    title: 'Anniversaire',
    icon: Cake,
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    description: 'Bouquets joyeux et colorés pour célébrer les anniversaires. Des créations adaptées à tous les âges et toutes les personnalités, pour illuminer cette journée spéciale.',
    cta: 'Voir nos créations Anniversaire',
    ctaLink: '/anniversaire',
    mainImage: images.creations.anniversaire.bouquet,
    gallery: [
      images.creations.anniversaire.bonbonne,
      images.creations.anniversaire.rhipsalis,
      images.creations.anniversaire.orchidee,
      images.creations.anniversaire.beaucarnea,
      images.creations.anniversaire.bouquet,
    ]
  },
  {
    key: 'deuil',
    title: 'Deuil',
    icon: Sprout,
    color: 'text-gray-500',
    bgColor: 'bg-gray-50',
    description: 'Compositions florales respectueuses et apaisantes pour accompagner dans les moments difficiles. Des créations sobres et élégantes qui honorent la mémoire avec dignité.',
    cta: 'Voir nos créations Deuil',
    ctaLink: '/deuil',
    mainImage: images.creations.deuil.bouquetRond1,
    gallery: [
      images.creations.deuil.bouquetRond1,
      images.creations.deuil.couronneCoeur1,
      images.creations.deuil.gerbeHaute,
      images.creations.deuil.gerbeCarree,
      images.creations.deuil.gerbeCroix,
      images.creations.deuil.couronneRonde1,
    ]
  },
  {
    key: 'bapteme',
    title: 'Baptême',
    icon: Baby,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    description: 'Créations florales tendres et délicates pour célébrer un baptême. Des compositions qui apportent douceur et pureté à cet événement spirituel et familial.',
    cta: 'Voir nos créations Baptême',
    ctaLink: '/bapteme',
    mainImage: images.creations.bapteme.lys1,
    gallery: [
      images.creations.bapteme.lys1,
      images.creations.bapteme.lys2,
      images.creations.bapteme.lys3,
      images.creations.bapteme.lys4,
      images.creations.bapteme.lysSmall,
    ]
  },
  {
    key: 'plaisir-offrir',
    title: 'Plaisir d\'offrir',
    icon: Gift,
    color: 'text-gold-600',
    bgColor: 'bg-gold-50',
    description: 'Des bouquets et compositions pour toutes les occasions de faire plaisir à vos proches. Des créations qui expriment vos sentiments sans raison particulière.',
    cta: 'Voir nos créations Offrir',
    ctaLink: '/plaisirs-offrir',
    mainImage: images.creations.plaisirOffrir.coeurValentin,
    gallery: [
      images.creations.plaisirOffrir.carreRose,
      images.creations.plaisirOffrir.coeurValentin,
      images.creations.plaisirOffrir.roses1,
      images.creations.plaisirOffrir.roses2,
      images.creations.plaisirOffrir.bouquet1,
      images.creations.plaisirOffrir.bouquet2,
    ]
  },
  {
    key: 'se-faire-plaisir',
    title: 'Se faire plaisir',
    icon: Sparkles,
    color: 'text-poppy-500',
    bgColor: 'bg-poppy-50',
    description: 'Parce que vous le valez bien ! Des créations florales pour vous faire plaisir et embellir votre quotidien. Parfois, la plus belle occasion est de se gâter soi-même.',
    cta: 'Voir nos créations Plaisir',
    ctaLink: '/se-faire-plaisir',
    mainImage: images.creations.seFairePlaisir.fleurs6,
    gallery: [
      images.creations.seFairePlaisir.fleurs6,
      images.creations.seFairePlaisir.fleurs7,
      images.creations.seFairePlaisir.fleurs1,
      images.creations.seFairePlaisir.fleurs2,
      images.creations.seFairePlaisir.fleurs3,
      images.creations.seFairePlaisir.fleurs4,
      images.creations.seFairePlaisir.fleurs5,
    ]
  }
];

const CreationsShowcase = () => {
  const [activeTheme, setActiveTheme] = useState('mariage');
  const [mainImage, setMainImage] = useState('');
  const [showRdvModal, setShowRdvModal] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(110); // Zoom par défaut à 110%
  const thumbnailScrollRef = useRef<HTMLDivElement>(null);
  const [rdvFormData, setRdvFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    message: ''
  });
  const currentTheme = eventThemes.find(theme => theme.key === activeTheme) || eventThemes[0];

  const handleRdvInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRdvFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRdvSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demande de rendez-vous envoyée:', rdvFormData);
    alert('Votre demande de rendez-vous a été envoyée ! Nous vous recontactons rapidement.');
    setShowRdvModal(false);
    setRdvFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      message: ''
    });
  };
  
  // Réinitialiser l'image principale et le zoom quand on change de thème
  React.useEffect(() => {
    // Utiliser la première image de la galerie par défaut
    const theme = eventThemes.find(t => t.key === activeTheme) || eventThemes[0];
    if (theme.gallery && theme.gallery.length > 0) {
      setMainImage(theme.gallery[0]);
    } else {
      setMainImage(theme.mainImage);
    }
    setZoomLevel(110); // Réinitialiser le zoom lors du changement de thème
  }, [activeTheme]);

  const selectImage = (imageSrc: string) => {
    setMainImage(imageSrc);
    setZoomLevel(110); // Réinitialiser le zoom lors du changement d'image
    
    // Auto-scroll vers la miniature sélectionnée
    setTimeout(() => {
      if (thumbnailScrollRef.current) {
        const theme = eventThemes.find(t => t.key === activeTheme) || eventThemes[0];
        const selectedIndex = theme.gallery?.findIndex(img => img === imageSrc) ?? -1;
        if (selectedIndex !== -1 && thumbnailScrollRef.current.children[selectedIndex]) {
          const thumbnailElement = thumbnailScrollRef.current.children[selectedIndex] as HTMLElement;
          thumbnailElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
        }
      }
    }, 100);
  };

  const scrollThumbnails = (direction: 'up' | 'down') => {
    if (thumbnailScrollRef.current) {
      const scrollAmount = 120; // Hauteur/largeur d'une miniature + gap
      const isMobile = window.innerWidth < 768; // md breakpoint
      
      if (isMobile) {
        // Scroll horizontal sur mobile
        const currentScroll = thumbnailScrollRef.current.scrollLeft;
        const newScroll = direction === 'up' 
          ? currentScroll - scrollAmount 
          : currentScroll + scrollAmount;
        thumbnailScrollRef.current.scrollTo({
          left: newScroll,
          behavior: 'smooth'
        });
      } else {
        // Scroll vertical sur desktop
        const currentScroll = thumbnailScrollRef.current.scrollTop;
        const newScroll = direction === 'up' 
          ? currentScroll - scrollAmount 
          : currentScroll + scrollAmount;
        thumbnailScrollRef.current.scrollTo({
          top: newScroll,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleZoom = (action: 'in' | 'out' | 'reset') => {
    if (action === 'in') {
      setZoomLevel(prev => Math.min(prev + 20, 200)); // Max 200%
    } else if (action === 'out') {
      setZoomLevel(prev => Math.max(prev - 20, 50)); // Min 50% pour voir l'image complète
    } else {
      setZoomLevel(110); // Reset à la valeur par défaut
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cream-50 to-white">
      <div className="container mx-auto px-4">
        {/* Intro élégante avec animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-dancing text-sage-700 mb-6"
          >
            À chaque fleur son occasion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sage-600 text-xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            Découvrez nos créations florales pensées pour chaque moment de vie
          </motion.p>
        </motion.div>

        {/* Navigation par vignettes centrées avec animations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {eventThemes.map((theme, index) => {
              const isActive = activeTheme === theme.key;
              return (
                <motion.button
                  key={theme.key}
                  onClick={() => setActiveTheme(theme.key)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex flex-col items-center p-3"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      borderColor: isActive ? '#5f6e56' : '#e5e7eb',
                      boxShadow: isActive ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 rounded-full mb-2 border flex items-center justify-center ${theme.bgColor}`}
                  >
                    {React.createElement(theme.icon, {
                      className: theme.color,
                      size: 32,
                      strokeWidth: 1.5,
                    })}
                  </motion.div>
                  <motion.span
                    animate={{ color: isActive ? '#5f6e56' : '#374151' }}
                    transition={{ duration: 0.3 }}
                    className="font-medium text-sm text-center"
                  >
                    {theme.title}
                  </motion.span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Focus détaillé de la thématique sélectionnée avec animations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Contenu texte - Gauche */}
          <motion.div
            key={`text-${activeTheme}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="max-w-lg mx-auto lg:mx-0">
              <motion.h3
                key={`title-${activeTheme}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-4xl md:text-5xl font-dancing text-sage-700 mb-6"
              >
                {currentTheme.title}
              </motion.h3>
              <motion.p
                key={`desc-${activeTheme}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-sage-600 text-lg leading-relaxed mb-8 font-light"
              >
                {currentTheme.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <ScrollToTopLink
                    to={currentTheme.ctaLink}
                    className="inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
                  >
                    {currentTheme.cta}
                    <ArrowRight size={20} />
                  </ScrollToTopLink>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-sage-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg border-2 border-sage-200 hover:border-sage-300 shadow-lg hover:shadow-xl"
                  >
                    <Link to="/contact#titre-contact">
                      Nous contacter
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contenu visuel - Droite */}
          <motion.div
            key={`visual-${activeTheme}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start justify-center md:justify-start">
              {/* Image principale avec format Instagram (réduite) */}
              <div className="flex-1 relative w-full order-1 md:order-1 max-w-md mx-auto md:mx-0">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group bg-gradient-to-br from-gray-50 to-gray-100 p-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={mainImage || (currentTheme.gallery && currentTheme.gallery[0]) || currentTheme.mainImage}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="relative rounded-2xl overflow-hidden"
                    >
                      <motion.div
                        className="w-full aspect-[9/16] overflow-hidden relative bg-gray-100 rounded-2xl max-h-[600px] md:max-h-[700px]"
                        whileHover={{ scale: 1.005 }}
                        transition={{ duration: 0.4 }}
                      >
                        <OptimizedImage
                          src={mainImage || (currentTheme.gallery && currentTheme.gallery[0]) || currentTheme.mainImage}
                          alt={currentTheme.title}
                          className={`w-full h-full transition-transform duration-500 ease-out ${
                            zoomLevel < 100 ? 'object-contain' : 'object-cover'
                          } object-center`}
                          style={{ transform: `scale(${zoomLevel / 100})` }}
                          width={400}
                          height={711}
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
                      
                      {/* Contrôles de zoom améliorés */}
                      <div className="absolute bottom-5 right-5 flex flex-col gap-2 z-10">
                        <motion.button
                          whileHover={{ scale: 1.15, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleZoom('out')}
                          disabled={zoomLevel <= 50}
                          className="bg-white backdrop-blur-md rounded-full p-2.5 shadow-xl hover:shadow-2xl hover:bg-sage-50 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed border border-sage-200 group"
                          aria-label="Dézoomer"
                          title={`Dézoomer (min: 50%)`}
                        >
                          <ZoomOut className={`w-5 h-5 transition-colors ${zoomLevel <= 50 ? 'text-gray-400' : 'text-sage-700 group-hover:text-poppy-600'}`} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleZoom('reset')}
                          className="bg-white backdrop-blur-md rounded-full p-2.5 shadow-xl hover:shadow-2xl hover:bg-sage-50 transition-all duration-300 border border-sage-200 group"
                          aria-label="Réinitialiser le zoom"
                          title={`Réinitialiser (actuel: ${zoomLevel}%)`}
                        >
                          <RotateCcw className="w-5 h-5 text-sage-700 group-hover:text-poppy-600 transition-colors" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.15, y: 2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleZoom('in')}
                          disabled={zoomLevel >= 200}
                          className="bg-white backdrop-blur-md rounded-full p-2.5 shadow-xl hover:shadow-2xl hover:bg-sage-50 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed border border-sage-200 group"
                          aria-label="Zoomer"
                          title={`Zoomer (max: 200%)`}
                        >
                          <ZoomIn className={`w-5 h-5 transition-colors ${zoomLevel >= 200 ? 'text-gray-400' : 'text-sage-700 group-hover:text-poppy-600'}`} />
                        </motion.button>
                      </div>
                      
                      {/* Indicateur de zoom amélioré */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: zoomLevel !== 110 ? 1 : 0, scale: zoomLevel !== 110 ? 1 : 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-5 right-5 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-xl z-10 border border-sage-200"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-poppy-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-bold text-sage-700">{zoomLevel}%</span>
                        </div>
                      </motion.div>
                      
                      {/* Compteur d'images */}
                      <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-xl z-10 border border-sage-200">
                        <span className="text-sm font-medium text-sage-700">
                          {currentTheme.gallery.findIndex(img => img === (mainImage || currentTheme.gallery[0])) + 1} / {currentTheme.gallery.length}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Miniatures verticales sur le côté (desktop) / horizontales en haut (mobile) */}
              {currentTheme.gallery.length > 0 && (
                <div className="relative flex-shrink-0 w-full md:w-auto order-2 md:order-2">
                  {/* Bouton navigation haut (desktop) / gauche (mobile) */}
                  {currentTheme.gallery.length > 4 && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.15, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollThumbnails('up')}
                        className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-white backdrop-blur-md rounded-full p-2.5 shadow-xl hover:shadow-2xl hover:bg-sage-50 transition-all duration-300 -translate-y-3 border border-sage-200"
                        aria-label="Défiler vers le haut"
                        title="Défiler vers le haut"
                      >
                        <ChevronUp className="w-5 h-5 text-sage-700" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.15, x: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollThumbnails('up')}
                        className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white backdrop-blur-md rounded-full p-2.5 shadow-xl hover:shadow-2xl hover:bg-sage-50 transition-all duration-300 -translate-x-3 border border-sage-200"
                        aria-label="Défiler vers la gauche"
                        title="Défiler vers la gauche"
                      >
                        <ChevronLeft className="w-5 h-5 text-sage-700" />
                      </motion.button>
                    </>
                  )}
                  
                  {/* Carrousel de miniatures vertical (desktop) / horizontal (mobile) */}
                  <div 
                    ref={thumbnailScrollRef}
                    className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-y-auto overflow-y-visible scrollbar-hide scroll-smooth max-h-none md:max-h-[650px] pb-3 md:pb-0 px-1 md:px-0"
                    style={{ scrollPadding: '0 50px', scrollPaddingTop: '50px', scrollPaddingBottom: '50px' }}
                  >
                    {currentTheme.gallery.map((image, index) => {
                      const isSelected = image === (mainImage || (currentTheme.gallery && currentTheme.gallery[0]) || currentTheme.mainImage);
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ 
                            opacity: 1, 
                            scale: isSelected ? 1.05 : 1,
                            y: isSelected ? -4 : 0
                          }}
                          transition={{ duration: 0.3, delay: index * 0.03 }}
                          whileHover={{ scale: isSelected ? 1.08 : 1.05, y: isSelected ? -6 : -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden cursor-pointer relative group transition-all duration-300 ${
                            isSelected 
                              ? 'shadow-2xl ring-3 ring-poppy-500 ring-offset-4 ring-offset-white' 
                              : 'shadow-md hover:shadow-xl border-2 border-transparent hover:border-sage-200'
                          }`}
                          onClick={() => selectImage(image)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              selectImage(image);
                            }
                          }}
                          aria-label={`Voir l'image ${index + 1} de ${currentTheme.title}`}
                          aria-pressed={isSelected}
                        >
                          <motion.div
                            className="w-full h-full relative"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <OptimizedImage
                              src={image}
                              alt={`${currentTheme.title} ${index + 1}`}
                              className="w-full h-full object-cover object-center aspect-square"
                              width={96}
                              height={96}
                            />
                            {/* Overlay au survol pour les non-sélectionnées */}
                            {!isSelected && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                className="absolute inset-0 bg-black/10 transition-opacity duration-300"
                              />
                            )}
                          </motion.div>
                          <AnimatePresence>
                            {isSelected && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-poppy-500/15 flex items-center justify-center pointer-events-none"
                              >
                                <motion.div
                                  initial={{ scale: 0, rotate: -180 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  exit={{ scale: 0, rotate: 180 }}
                                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                  className="w-6 h-6 bg-gradient-to-br from-poppy-500 to-poppy-600 rounded-full flex items-center justify-center shadow-lg"
                                >
                                  <Sparkles className="text-white" size={12} />
                                </motion.div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                          {/* Indicateur de numéro sur les miniatures */}
                          <div className="absolute top-1 right-1 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {index + 1}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  {/* Bouton navigation bas (desktop) / droite (mobile) */}
                  {currentTheme.gallery.length > 4 && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.15, y: 2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollThumbnails('down')}
                        className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 z-20 bg-white backdrop-blur-md rounded-full p-2.5 shadow-xl hover:shadow-2xl hover:bg-sage-50 transition-all duration-300 translate-y-3 border border-sage-200"
                        aria-label="Défiler vers le bas"
                        title="Défiler vers le bas"
                      >
                        <ChevronDown className="w-5 h-5 text-sage-700" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.15, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollThumbnails('down')}
                        className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white backdrop-blur-md rounded-full p-2.5 shadow-xl hover:shadow-2xl hover:bg-sage-50 transition-all duration-300 translate-x-3 border border-sage-200"
                        aria-label="Défiler vers la droite"
                        title="Défiler vers la droite"
                      >
                        <ChevronRight className="w-5 h-5 text-sage-700" />
                      </motion.button>
                    </>
                  )}
                </div>
              )}

            </div>
          </motion.div>
        </div>

        {/* CTA global avec animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-poppy-50 to-sage-50 rounded-3xl p-8 border border-poppy-200">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-2xl font-dancing text-sage-700 mb-4"
            >
              Prêt à créer votre moment parfait ?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sage-600 mb-6 max-w-2xl mx-auto"
            >
              Contactez-nous pour une consultation personnalisée et découvrez comment nous pouvons sublimer votre événement
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setShowRdvModal(true)}
                  className="bg-poppy-500 hover:bg-poppy-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
                >
                  Prendre rendez-vous
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  className="bg-white hover:bg-gray-50 text-sage-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg border-2 border-sage-200 hover:border-sage-300 shadow-lg hover:shadow-xl"
                >
                  <Link to="/contact#titre-contact">
                    Nous contacter
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Modal de rendez-vous avec animations */}
      <AnimatePresence>
        {showRdvModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowRdvModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative max-h-[90vh] overflow-y-auto"
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowRdvModal(false)} 
                className="absolute top-4 right-4 text-sage-500 hover:text-poppy-500 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Fermer"
              >
                &times;
              </motion.button>
            <h2 className="text-2xl font-bold text-sage-700 mb-2 text-center">Prendre rendez-vous</h2>
            <p className="text-sage-600 text-sm mb-6 text-center">
              Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement pour convenir d'un rendez-vous.
            </p>
            <form onSubmit={handleRdvSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sage-700 mb-1 text-sm font-medium">Nom complet *</label>
                <input 
                  type="text" 
                  name="name"
                  value={rdvFormData.name}
                  onChange={handleRdvInputChange}
                  className="w-full border border-sage-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sage-300 focus:border-transparent" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sage-700 mb-1 text-sm font-medium">Téléphone *</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={rdvFormData.phone}
                  onChange={handleRdvInputChange}
                  className="w-full border border-sage-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sage-300 focus:border-transparent" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sage-700 mb-1 text-sm font-medium">Email *</label>
                <input 
                  type="email" 
                  name="email"
                  value={rdvFormData.email}
                  onChange={handleRdvInputChange}
                  className="w-full border border-sage-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sage-300 focus:border-transparent" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sage-700 mb-1 text-sm font-medium">Date souhaitée *</label>
                <input 
                  type="date" 
                  name="date"
                  value={rdvFormData.date}
                  onChange={handleRdvInputChange}
                  className="w-full border border-sage-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sage-300 focus:border-transparent" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sage-700 mb-1 text-sm font-medium">Heure souhaitée *</label>
                <input 
                  type="time" 
                  name="time"
                  value={rdvFormData.time}
                  onChange={handleRdvInputChange}
                  className="w-full border border-sage-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sage-300 focus:border-transparent" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sage-700 mb-1 text-sm font-medium">Message</label>
                <textarea 
                  name="message"
                  value={rdvFormData.message}
                  onChange={handleRdvInputChange}
                  className="w-full border border-sage-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sage-300 focus:border-transparent resize-none" 
                  rows={3}
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>
              <div className="flex gap-3 mt-2">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => setShowRdvModal(false)}
                  className="flex-1 border-sage-300 text-sage-700 hover:bg-sage-50"
                >
                  Annuler
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 bg-poppy-500 hover:bg-poppy-600 text-white"
                >
                  Envoyer
                </Button>
              </div>
            </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CreationsShowcase;