import * as React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface MonthlyCollectionProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const MonthlyCollection: React.FC<MonthlyCollectionProps> = ({
  title,
  description,
  image,
  link
}) => {
  return (
    <section className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-dancing text-sage-700 mb-4">
            Collection du mois
          </h2>
          <p className="text-sage-600 text-lg max-w-2xl mx-auto">
            Découvrez notre sélection exclusive du moment
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square md:aspect-auto">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-sage-700 mb-4">{title}</h3>
                <p className="text-sage-600 mb-6">{description}</p>
                <Link
                  to={link}
                  className="inline-flex items-center gap-2 bg-poppy-500 hover:bg-poppy-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md"
                >
                  Découvrir la collection
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonthlyCollection; 