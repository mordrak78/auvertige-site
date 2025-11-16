import * as React from 'react';
import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
import Layout from '@/components/layout/layout/Layout';
import Seo from '@/components/shared/Seo';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Heart, Calendar, Gift, Flower, Baby, Sparkles, Sprout, Home, Leaf, Palette } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { RelatedPages } from '@/components/shared/RelatedPages';
import { ScrollToTopLink } from '@/components/shared/ScrollToTopLink';

const categories = [
  {
    key: 'deuil',
    title: 'Deuil',
    image: '/images/creations/deuil/deuil-bouquet-rond-01.webp',
    description: 'Compositions respectueuses et élégantes pour honorer vos proches',
    icon: Heart,
    color: 'bg-gray-50 border-gray-200 text-gray-700'
  },
  {
    key: 'mariage',
    title: 'Mariage',
    image: '/images/creations/mariage/bouquet-de-mariage-1024x683.webp',
    description: 'Créations florales pour votre plus beau jour',
    icon: Heart,
    color: 'bg-pink-50 border-pink-200 text-pink-700'
  },
  {
    key: 'anniversaire',
    title: 'Anniversaire',
    image: '/images/creations/anniversaire/anniv1-bonbonne.webp',
    description: 'Bouquets joyeux pour célébrer un anniversaire',
    icon: Gift,
    color: 'bg-yellow-50 border-yellow-200 text-yellow-700'
  },
  {
    key: 'bapteme',
    title: 'Baptême',
    image: '/images/creations/bapteme/DSCN08111-e1518269397381.webp',
    description: 'Créations tendres pour célébrer un baptême',
    icon: Baby,
    color: 'bg-blue-50 border-blue-200 text-blue-700'
  },
  {
    key: 'plaisirs-offrir',
    title: 'Plaisirs d\'offrir',
    image: '/images/creations/offrir/roses-saint-valentin-03.webp',
    description: 'Bouquets pour faire plaisir à vos proches',
    icon: Sparkles,
    color: 'bg-purple-50 border-purple-200 text-purple-700'
  },
  {
    key: 'se-faire-plaisir',
    title: 'Se faire plaisir',
    image: '/images/creations/se-faire-plaisir/fleurs1.webp',
    description: 'Créations florales pour vous faire plaisir',
    icon: Flower,
    color: 'bg-green-50 border-green-200 text-green-700'
  }
];

const CreationsFlorales = () => {
  useScrollToTop();
  
  return (
    <>
      <Helmet>
        <title>Créations Florales | Au Vertige - Fleuriste à Nantes</title>
        <meta name="description" content="Découvrez nos créations florales par catégorie : deuil, mariage, anniversaire, baptême, plaisirs d'offrir et se faire plaisir. Fleuriste Au Vertige à Nantes." />
      </Helmet>

      <Layout>
        <Seo
          title="Créations Florales par Catégorie | Au Vertige - Fleuriste à Nantes"
          description="Explorez nos créations florales organisées par catégorie : deuil, mariage, anniversaire, baptême, plaisirs d'offrir et se faire plaisir. Chaque création est unique et réalisée avec passion."
          type="website"
          breadcrumbs={[
            { name: "Accueil", url: "/" },
            { name: "Créations florales", url: "/creations-florales" }
          ]}
        />
        
        <main>
          {/* Hero Section */}
          <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 z-0">
              <img
                src="/images/creations/mariage/bouquet-de-mariage-1024x683.webp"
                alt="Créations florales"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="relative z-10 text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-dancing mb-6">Créations Florales</h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-4">
                Découvrez nos créations organisées par catégorie
              </p>
              <p className="text-lg max-w-2xl mx-auto opacity-90">
                Chaque occasion mérite une création unique, faite à la main avec des fleurs locales et de saison
              </p>
            </div>
          </section>

          {/* Section introductive enrichie */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-dancing text-sage-700 mb-4">
                  Des créations artisanales pour chaque moment de vie
                </h2>
                <p className="text-lg text-sage-600 leading-relaxed">
                  Chez Au Vertige, nous créons des <strong className="text-sage-700">compositions florales uniques</strong> pour toutes vos occasions. 
                  Que ce soit pour un <Link to="/mariage" className="text-poppy-600 hover:text-poppy-700 font-medium underline">mariage</Link>, 
                  {' '}<Link to="/evenements#anniversaire" className="text-poppy-600 hover:text-poppy-700 font-medium underline">anniversaire</Link>, 
                  {' '}<Link to="/evenements#bapteme" className="text-poppy-600 hover:text-poppy-700 font-medium underline">baptême</Link> ou 
                  {' '}<Link to="/deuil" className="text-poppy-600 hover:text-poppy-700 font-medium underline">hommage</Link>, 
                  chaque création est <strong className="text-poppy-600">faite à la main</strong> avec passion et attention aux détails.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-cream-50 rounded-xl">
                  <Leaf className="h-8 w-8 text-sage-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-sage-700 mb-2">Fleurs locales</h3>
                  <p className="text-sm text-sage-600">Circuit court nantais et produits de saison</p>
                </div>
                <div className="text-center p-6 bg-cream-50 rounded-xl">
                  <Palette className="h-8 w-8 text-sage-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-sage-700 mb-2">Fait main</h3>
                  <p className="text-sm text-sage-600">Toutes nos compositions sont artisanales</p>
                </div>
                <div className="text-center p-6 bg-cream-50 rounded-xl">
                  <Sparkles className="h-8 w-8 text-sage-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-sage-700 mb-2">Créations uniques</h3>
                  <p className="text-sm text-sage-600">Chaque bouquet est personnalisé</p>
                </div>
              </div>
            </div>
          </section>

          {/* Categories Grid */}
          <section className="py-20 bg-cream-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-dancing text-sage-700 mb-4">
                  Nos créations par catégorie
                </h2>
                <p className="text-sage-600 text-lg max-w-2xl mx-auto">
                  Chaque occasion mérite une création unique et personnalisée
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Link 
                      key={category.key} 
                      to={`/${category.key}`}
                      className="group block"
                    >
                      <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={category.image}
                            alt={category.title}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-6">
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium mb-3 ${category.color}`}>
                            <IconComponent size={16} />
                            {category.title}
                          </div>
                          <h3 className="text-xl font-semibold text-sage-700 mb-2 font-inter">
                            {category.title}
                          </h3>
                          <p className="text-sage-600 text-base mb-4 font-inter">
                            {category.description}
                          </p>
                          <div className="flex items-center text-poppy-600 font-medium group-hover:text-poppy-700 transition-colors">
                            Découvrir
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-sage-50">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-dancing text-sage-700 mb-6">
                Une création sur-mesure ?
              </h2>
              <p className="text-sage-600 text-lg mb-8 max-w-2xl mx-auto">
                Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ScrollToTopLink
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-poppy-500 hover:bg-poppy-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md"
                >
                  Nous contacter
                  <ArrowRight size={20} />
                </ScrollToTopLink>
                <a
                  href="tel:0240541002"
                  className="inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md"
                >
                  Appeler maintenant
                </a>
              </div>
            </div>
          </section>

          {/* Section Pages similaires - Liens vers services */}
          <RelatedPages
            currentPage="/creations-florales"
            title="Découvrez aussi nos services"
            pages={[
              {
                title: "Bouquets sur-mesure",
                url: "/services#bouquets",
                description: "Bouquets personnalisés pour toutes les occasions",
                icon: Flower
              },
              {
                title: "Plantes d'intérieur",
                url: "/services#plantes",
                description: "Plantes vertes et fleuries pour votre intérieur",
                icon: Sprout
              },
              {
                title: "Décoration",
                url: "/services#decoration",
                description: "Compositions pour embellir votre intérieur",
                icon: Home
              }
            ]}
          />
        </main>
      </Layout>
    </>
  );
};

export default CreationsFlorales;