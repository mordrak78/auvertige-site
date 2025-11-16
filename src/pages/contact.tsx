import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
import { MapPin, Store, Star, Heart } from 'lucide-react';
import Layout from '@/components/layout/layout/Layout';
import Seo from '@/components/shared/Seo';
import Contact from '@/components/features/contact/Contact';
import FAQ, { defaultFAQItems } from '@/components/shared/FAQ';

const ContactPage = () => {
  const location = useLocation();

  React.useEffect(() => {
    // Toujours scroller vers le titre de contact avec offset pour le positionner plus haut
    setTimeout(() => {
      const element = document.getElementById('titre-contact') || document.getElementById('contact');
      if (element) {
        const headerOffset = 200; // Hauteur du header fixe + marge supplémentaire pour positionner plus haut
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 200);
  }, [location.pathname]);

  return (
    <Layout>
      <Seo
        title="Contact fleuriste Nantes Sud Saint-Jacques | Au Vertige"
        description="Contactez votre fleuriste Au Vertige à Nantes Sud (quartier Saint-Jacques, près de Pirmil, Rezé, Saint-Sébastien-sur-Loire). Adresse, horaires, téléphone, réseaux sociaux, plan d'accès et formulaire de contact. Questions fréquentes."
        type="website"
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Contact", url: "/contact" }
        ]}
        faq={defaultFAQItems}
        includePersonSchema={true}
      />
      <main className="min-h-screen bg-cream-50 pt-24">
        <section className="container mx-auto px-4 mb-10">
          <motion.h1
            id="titre-contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-dancing text-sage-700 mb-4 text-center scroll-mt-24"
          >
            Contactez votre fleuriste à Nantes Sud
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-sage-600 mb-6 text-center max-w-2xl mx-auto"
          >
            Besoin d'un bouquet, d'une composition sur-mesure ou d'un conseil ? Notre équipe vous accueille à Nantes Sud, quartier Saint-Jacques, au 38, boulevard Joliot Curie, à deux pas de Pirmil, Rezé et Saint-Sébastien-sur-Loire. Retrait en boutique uniquement.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/" className="bg-white border border-sage-200 text-sage-700 font-bold py-3 px-6 rounded-full shadow transition text-lg hover:bg-sage-50 block text-center">
                Retour à l'accueil
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/creations-florales" className="bg-sage-600 hover:bg-sage-700 text-white font-bold py-3 px-6 rounded-full shadow transition text-lg block text-center">
                Voir nos créations
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/services" className="bg-poppy-500 hover:bg-poppy-600 text-white font-bold py-3 px-6 rounded-full shadow transition text-lg block text-center">
                Nos services
              </Link>
            </motion.div>
          </motion.div>
        </section>
        <Contact />
        {/* Bloc EEAT */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 mb-16 max-w-3xl mx-auto bg-sage-50 rounded-2xl p-8 shadow-lg text-center flex flex-col justify-center min-h-[300px]"
        >
          <h2 className="text-2xl md:text-3xl font-dancing text-sage-700 mb-4">Pourquoi nous faire confiance ?</h2>
          <ul className="text-sage-700 text-lg space-y-3 mb-4">
            <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
              <span>Présence locale à Nantes Sud, quartier Saint-Jacques</span>
            </motion.li>
            <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex items-start gap-2">
              <Heart className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
              <span>Conseils personnalisés et écoute</span>
            </motion.li>
            <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex items-start gap-2">
              <Store className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
              <span>Retrait en boutique au 38, boulevard Joliot Curie</span>
            </motion.li>
            <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex items-start gap-2">
              <Star className="h-5 w-5 text-sage-600 mt-0.5 flex-shrink-0" />
              <span>Plus de 200 clients satisfaits</span>
            </motion.li>
          </ul>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/a-propos" className="inline-block mt-4 bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg">
              En savoir plus sur notre engagement
            </Link>
          </motion.div>
        </motion.section>
        {/* Lien vers FAQ dédiée */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 mb-16 max-w-3xl mx-auto text-center"
        >
          <p className="text-sage-600 mb-4 text-lg">
            Vous avez d'autres questions ?
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/services#faq"
              className="inline-block bg-poppy-500 hover:bg-poppy-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Consulter notre FAQ complète
            </Link>
          </motion.div>
        </motion.section>
      </main>
    </Layout>
  );
};

export default ContactPage; 