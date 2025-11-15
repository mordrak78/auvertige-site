import * as React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Award, MapPin, Clock, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollToTopLink } from '@/components/shared/ScrollToTopLink';

const AboutAndInfoSection = () => {
  const handleCall = () => {
    window.location.href = 'tel:0240541002';
  };

  const [iframeError, setIframeError] = React.useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-cream-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >
          {/* À propos */}
          <motion.div variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="flex items-center mb-6"
            >
              <motion.img
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                src="/images/logo/logo4.png"
                alt="Logo Au Vertige - Artisan fleuriste Nantes"
                className="h-16 w-16 object-contain rounded-full shadow-lg mr-4"
              />
              <h2 className="text-3xl md:text-4xl font-dancing text-sage-700 mb-0">
                À propos d'Au Vertige
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="prose prose-lg text-sage-600 space-y-4"
            >
              <p className="leading-relaxed">
                Fleuriste Nantes : Au Vertige, artisan fleuriste passionné par l'art floral, nous créons des compositions uniques 
                pour toutes les occasions. Notre boutique est située au cœur de Nantes Sud, quartier Saint-Jacques, où nous accueillons 
                nos clients avec chaleur et professionnalisme.
              </p>
              <p className="leading-relaxed">
                Nous sélectionnons avec soin nos fleurs et plantes pour vous offrir des créations 
                fraîches et durables. Notre équipe d'artisans fleuristes met tout son savoir-faire 
                au service de vos projets.
              </p>
            </motion.div>

            {/* CTA vers créations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 space-y-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ScrollToTopLink
                  to="/creations-florales"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-poppy-500 to-poppy-600 hover:from-poppy-600 hover:to-poppy-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Découvrir nos créations
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </ScrollToTopLink>
              </motion.div>
              
              {/* Badge Artisans Fleuristes de France */}
              <motion.a
                href="https://www.artisansfleuristesdefrance.fr/au-vertige"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center space-x-3 bg-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-sage-100"
              >
                <motion.img
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                  src="/images/logo/logo1.jpg"
                  alt="Artisans Fleuristes de France"
                  className="h-12 w-auto"
                />
                <div>
                  <span className="text-sage-700 font-medium block">Membre Artisans Fleuristes de France</span>
                  <span className="text-sage-500 text-sm">Qualité et savoir-faire garantis</span>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact & Boutique avec carte */}
          <motion.div variants={itemVariants}>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-dancing text-sage-700 mb-6"
            >
              Contact & Boutique
            </motion.h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Informations pratiques */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-poppy-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-poppy-200 transition-colors"
                  >
                    <MapPin className="w-6 h-6 text-poppy-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-sage-700 mb-1">Adresse</h4>
                    <p className="text-sage-600 leading-relaxed">
                      38 Bd Joliot Curie<br />
                      44200 Nantes
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-poppy-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-poppy-200 transition-colors"
                  >
                    <Clock className="w-6 h-6 text-poppy-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-sage-700 mb-1">Horaires d'ouverture</h4>
                    <p className="text-sage-600 leading-relaxed">
                      Lundi - Vendredi : 9h - 19h<br />
                      Samedi : 9h - 18h<br />
                      Dimanche : 9h - 13h<br />
                      <span className="text-poppy-600 font-medium">Dimanche et jours fériés</span>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-poppy-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-poppy-200 transition-colors"
                  >
                    <Phone className="w-6 h-6 text-poppy-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-sage-700 mb-1">Téléphone</h4>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCall}
                      className="text-poppy-600 hover:text-poppy-800 transition-colors font-medium"
                    >
                      Nous appeler
                    </motion.button>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-poppy-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-poppy-200 transition-colors"
                  >
                    <Mail className="w-6 h-6 text-poppy-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-sage-700 mb-1">Email</h4>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="mailto:contact@auvertige-nantes.fr"
                      className="text-poppy-600 hover:text-poppy-800 transition-colors font-medium"
                    >
                      contact@auvertige-nantes.fr
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Carte Google Maps */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="rounded-2xl overflow-hidden shadow-xl h-[300px] border-2 border-sage-100"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.113295926258!2d-1.5366315236302184!3d47.194794971154955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805e93742d5ef73%3A0x4957ff7b35a3a1fe!2sAu%20Vertige!5e0!3m2!1sfr!2sfr!4v1749741740053!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onError={() => setIframeError(true)}
                />
                {iframeError && (
                  <div className="h-full w-full bg-gradient-to-br from-sage-100 to-cream-50 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-sage-400 mx-auto mb-2" />
                      <p className="text-sage-600">La carte n'a pas pu être chargée</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAndInfoSection;
