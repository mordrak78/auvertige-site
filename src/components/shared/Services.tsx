import * as React from 'react';
import { Heart, Crown, Gift, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Mariages",
      description: "Bouquets de mariée, centres de table et décorations florales pour votre jour J.",
      features: ["Bouquet de mariée", "Boutonnières", "Centres de table", "Décoration cérémonie"]
    },
    {
      icon: Crown,
      title: "Événements",
      description: "Compositions florales sur mesure pour vos événements d'entreprise et célébrations.",
      features: ["Événements d'entreprise", "Anniversaires", "Inaugurations", "Réceptions"]
    },
    {
      icon: Gift,
      title: "Occasions Spéciales",
      description: "Créations personnalisées pour marquer les moments importants de votre vie.",
      features: ["Saint-Valentin", "Fête des mères", "Anniversaires", "Félicitations"]
    },
    {
      icon: Sparkles,
      title: "Créations Quotidiennes",
      description: "Bouquets et compositions pour égayer votre quotidien ou faire plaisir.",
      features: ["Bouquets de saison", "Compositions modernes", "Plantes d'intérieur", "Conseils personnalisés"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-dancing text-sage-700 mb-6">
            Nos Services
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-sage-300 w-16"></div>
            <div className="h-px bg-sage-300 w-16"></div>
          </div>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            De la création de bouquets uniques à la décoration d'événements, 
            nous mettons notre passion et notre savoir-faire à votre service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-cream-50 group">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-6 group-hover:bg-sage-200 transition-colors duration-300">
                    <IconComponent className="text-sage-600 group-hover:text-sage-700" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-sage-700 mb-4 font-inter">
                    {service.title}
                  </h3>
                  <p className="text-sage-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="text-sm text-sage-500 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-poppy-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-sage-600 mb-6">
            Une question ? Un projet particulier ?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
          >
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
