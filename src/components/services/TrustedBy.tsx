import * as React from 'react';
import { motion } from 'framer-motion';

interface TrustedByProps {
  logos: string[];
}

const TrustedBy: React.FC<TrustedByProps> = ({ logos }) => {
  return (
    <section className="mb-12 mt-8">
      <h3 className="text-xl md:text-2xl font-dancing text-sage-700 mb-6 text-center">
        Ils nous ont fait confiance
      </h3>
      {logos && logos.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center h-32 border border-sage-100"
            >
              <img 
                src={logo} 
                alt={`Logo entreprise ${index + 1}`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-sage-50 rounded-2xl p-8 border-2 border-dashed border-sage-200">
          <p className="text-sage-600 text-center italic">
            Les logos de nos partenaires professionnels apparaîtront ici une fois ajoutés.
          </p>
        </div>
      )}
    </section>
  );
};

export default TrustedBy;

