import * as React from 'react';
// import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const EngagementCards = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Carte 1: Les instants complices */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="bg-cream-50 border-0 p-8 md:p-10 rounded-2xl shadow-lg flex flex-col items-center text-center h-full">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.3, stiffness: 200 }}
                  className="mb-6"
                >
                  <CalendarDays className="h-12 w-12 text-poppy-500" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl md:text-3xl font-dancing text-sage-700 mb-4"
                >
                  Les instants complices
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-sage-600 mb-8 max-w-sm mx-auto leading-relaxed font-inter"
                >
                  Notez toutes les dates importantes de votre vie et Au Vertige se charge de vous les rappeler.
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/contact">
                    <Button 
                      variant="outline"
                      className="border-poppy-500 text-poppy-500 hover:bg-poppy-500 hover:text-white rounded-full px-8 py-3 text-base font-medium transition-all duration-300 w-full sm:w-auto"
                    >
                      Créer mon calendrier fleuri
                    </Button>
                  </Link>
                </motion.div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Carte 2: N'oubliez plus une occasion */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="bg-sage-600 border-0 p-8 md:p-10 rounded-2xl shadow-lg flex flex-col items-center text-center text-white h-full">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.3, stiffness: 200 }}
                  className="mb-6"
                >
                  <Gift className="h-12 w-12 text-cream-50" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl md:text-3xl font-dancing text-cream-100 mb-2"
                >
                  N'oubliez plus une occasion de faire plaisir !
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-sage-100 mb-3 font-medium text-lg"
                >
                  Découvrez la
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-6"
                >
                  collection du mois
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/evenements#collection-du-mois">
                    <Button 
                      variant="outline"
                      className="border-sage-600 text-sage-700 shadow-lg hover:bg-cream-100 hover:text-sage-900 hover:border-sage-700 rounded-full px-8 py-3 text-base font-semibold transition-all duration-300 w-full sm:w-auto focus:ring-2 focus:ring-poppy-500"
                    >
                      Découvrir la Collection du Mois
                    </Button>
                  </Link>
                </motion.div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngagementCards; 