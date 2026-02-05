import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Leaf, Award } from 'lucide-react';
import { images } from '@/data/images';
import { OptimizedImage } from './OptimizedImage';

const AboutSection = () => {
  return (
    <section id="apropos" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image et valeurs */}
            <div className="space-y-8">
              <div className="relative rounded-3xl shadow-2xl overflow-hidden">
                <OptimizedImage
                  src={images.pages.facade1}
                  alt="Fleuriste Au Vertige - Artisan passionné à Nantes"
                  className="w-full h-80 object-cover object-center"
                  width={800}
                  height={320}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/40 to-transparent rounded-3xl"></div>
              </div>
              {/* Valeurs en icônes */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-14 h-14 bg-sage-100 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-md">
                    <Leaf className="text-sage-600" size={28} />
                  </div>
                  <p className="text-base text-sage-700 font-medium">Fleurs locales</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-sage-100 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-md">
                    <Heart className="text-sage-500" size={28} />
                  </div>
                  <p className="text-base text-sage-700 font-medium">Fait avec passion</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-sage-100 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-md">
                    <Award className="text-sage-600" size={28} />
                  </div>
                  <p className="text-base text-sage-700 font-medium">Artisanat d'art</p>
                </div>
              </div>
            </div>
            {/* Texte à propos */}
            <Card className="bg-white border-0 rounded-3xl shadow-2xl p-10 md:p-12">
              <h2 className="text-4xl md:text-5xl font-dancing text-sage-700 mb-8">
                Fleuriste engagé et artisanal
              </h2>
              <div className="prose prose-sage text-sage-700 space-y-5 max-w-none text-lg">
                <p>
                  Des créations florales uniques, locales et responsables, réalisées avec passion à Nantes. Notre équipe privilégie les circuits courts et l'artisanat pour sublimer chaque moment de votre vie.
                </p>
                <Button asChild className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 rounded-full font-medium shadow-lg mt-6">
                  <Link to="/a-propos">
                    En savoir plus sur notre engagement
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
