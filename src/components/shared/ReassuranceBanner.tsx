import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Shield, Heart, Sparkles, User, Leaf } from 'lucide-react';

const guarantees = [
  {
    icon: User,
    title: "Conseil personnalisé",
    description: "À l'écoute de vos envies",
    color: "sage",
    delay: 0.1
  },
  {
    icon: Sparkles,
    title: "Créations uniques",
    description: "Chaque bouquet est une pièce originale",
    color: "poppy",
    delay: 0.2
  },
  {
    icon: Shield,
    title: "Savoir-faire artisanal",
    description: "Tradition et passion florale",
    color: "sage",
    delay: 0.3
  },
  {
    icon: Leaf,
    title: "Fleurs locales",
    description: "Circuit court et qualité garantie",
    color: "sage",
    delay: 0.4
  }
];

const ReassuranceBanner = () => {
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-cream-100 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-sage-700 via-sage-600 to-sage-700 rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Effet de fond animé */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-10"
            >
              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-block mb-4"
              >
                <Heart className="h-10 w-10 text-poppy-300" fill="currentColor" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-dancing text-white mb-3">
                Nos Garanties
              </h3>
              <p className="text-sage-100 text-lg max-w-2xl mx-auto">
                Qualité, fraîcheur et satisfaction garanties pour tous nos services
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {guarantees.map((guarantee, index) => {
                const Icon = guarantee.icon;
                const isPoppy = guarantee.color === "poppy";
                
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {guarantee.link ? (
                      <Link to={guarantee.link}>
                        <Card className="bg-white border-0 rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col items-center group">
                          <motion.div
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                            className={`w-16 h-16 ${isPoppy ? 'bg-poppy-100' : 'bg-sage-100'} rounded-full flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-shadow`}
                          >
                            <Icon className={isPoppy ? "text-poppy-600" : "text-sage-700"} size={32} />
                          </motion.div>
                          <h4 className="text-sage-900 font-semibold text-base mb-2 group-hover:text-poppy-600 transition-colors">
                            {guarantee.title}
                          </h4>
                          <p className="text-sage-700 text-xs flex-grow">
                            {guarantee.description}
                          </p>
                          <motion.span
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="text-poppy-600 text-xs font-medium mt-2"
                          >
                            En savoir plus →
                          </motion.span>
                        </Card>
                      </Link>
                    ) : (
                      <Card className="bg-white border-0 rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center">
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                          className={`w-16 h-16 ${isPoppy ? 'bg-poppy-100' : 'bg-sage-100'} rounded-full flex items-center justify-center mb-4 shadow-md`}
                        >
                          <Icon className={isPoppy ? "text-poppy-600" : "text-sage-700"} size={32} />
                        </motion.div>
                        <h4 className="text-sage-900 font-semibold text-base mb-2">
                          {guarantee.title}
                        </h4>
                        <p className="text-sage-700 text-xs flex-grow">
                          {guarantee.description}
                        </p>
                      </Card>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReassuranceBanner;
