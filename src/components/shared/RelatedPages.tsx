import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface RelatedPage {
  title: string;
  url: string;
  description?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

interface RelatedPagesProps {
  currentPage: string;
  pages: RelatedPage[];
  title?: string;
}

export const RelatedPages: React.FC<RelatedPagesProps> = ({
  currentPage,
  pages,
  title = "Vous pourriez aussi aimer"
}) => {
  // Filtrer la page actuelle
  const filteredPages = pages.filter(page => page.url !== currentPage);

  if (filteredPages.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-cream-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-dancing text-sage-700 mb-4">
            {title}
          </h2>
          <p className="text-sage-600 max-w-2xl mx-auto">
            Découvrez nos autres créations et services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filteredPages.slice(0, 3).map((page, index) => {
            const IconComponent = page.icon;
            return (
              <motion.div
                key={page.url}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <Link
                  to={page.url}
                  className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-sage-100"
                >
                  <div className="p-6">
                    {IconComponent && (
                      <div className="mb-4">
                        <IconComponent
                          size={32}
                          className="text-poppy-500 group-hover:text-poppy-600 transition-colors"
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-dancing text-sage-700 mb-2 group-hover:text-poppy-600 transition-colors">
                      {page.title}
                    </h3>
                    {page.description && (
                      <p className="text-sm text-sage-600 mb-4 line-clamp-2">
                        {page.description}
                      </p>
                    )}
                    <div className="flex items-center text-poppy-600 font-medium group-hover:text-poppy-700 transition-colors">
                      Découvrir
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

