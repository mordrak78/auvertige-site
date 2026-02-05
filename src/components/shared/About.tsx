import * as React from 'react';
import { Sparkles, Heart, Award, Users, ExternalLink, Flower2, Crown } from 'lucide-react';
import { EditableTitle, EditableParagraphs } from './EditableContent';

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <EditableTitle
            pageId="a-propos"
            defaultTitle="Artisan fleuriste Nantes : L'histoire d'Au Vertige"
            className="text-5xl lg:text-6xl font-dancing text-sage-700 mb-6"
            as="h1"
          />
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-sage-300 w-16"></div>
            <div className="h-px bg-sage-300 w-16"></div>
          </div>
          <EditableParagraphs
            pageId="a-propos"
            defaultParagraphs={[
              '<strong className="text-sage-700">Au Vertige</strong> est né de la passion pour l\'art floral et du désir de créer des émotions à travers les fleurs. Installés au cœur de Nantes, nous sommes un atelier artisanal qui privilégie la qualité et l\'originalité.'
            ]}
            className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed"
            renderParagraph={(text, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
            )}
          />
        </div>

        {/* Section Dirigeante - Sylvie */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo de Sylvie - Ovale */}
            <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96">
                <img
                  src="/images/hero/facade1.webp"
                  alt="Sylvie ARCHAMBEAU, artisan fleuriste Nantes - Au Vertige, fleuriste à Nantes Sud"
                  className="w-full h-full object-cover object-center rounded-full shadow-2xl border-4 border-white"
                />
              </div>
              {/* Éléments décoratifs */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-sage-200 rounded-full opacity-60 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sage-200 rounded-full opacity-40 -z-10"></div>
            </div>

            {/* Texte sur Sylvie */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Crown className="text-sage-500" size={28} />
                <h2 className="text-4xl font-dancing text-sage-700">
                  Sylvie
                </h2>
              </div>

              <div className="space-y-6 text-sage-600 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-sage-700">Artisan fleuriste Nantes</strong> : <strong className="text-sage-700">Sylvie ARCHAMBEAU</strong> a repris les rênes d'Au Vertige en 2010 après avoir obtenu son CAP et BP horticulture, puis son CAP et BP fleuriste.
                  Cette passionnée des créations florales a su transformer cette opportunité en une belle aventure entrepreneuriale.
                </p>

                <p>
                  Son parcours unique lui a permis d'avoir une <strong className="text-sage-700">expérience des deux côtés du comptoir</strong> : en production horticole puis en vente.
                  Cette double expertise lui donne une vision d'ensemble du circuit de vente horticole, qu'elle met au service de ses clients depuis maintenant <strong className="text-sage-600">14 ans</strong> en tant qu'<strong className="text-sage-700">artisan fleuriste Nantes</strong>.
                </p>

                <p>
                  Installée dans le quartier de <strong className="text-sage-700">Saint-Jacques</strong> à Nantes Sud, qu'elle décrit comme "un peu comme une micro-ville", Sylvie a développé un commerce de proximité éco-responsable,
                  privilégiant les <strong className="text-sage-600">produits locaux et le circuit court nantais</strong>. Son approche unique ? Privilégier les fleurs qui sortent de l'ordinaire et créer des ambiances exceptionnelles.
                </p>

                <p>
                  Toutes les compositions sont <strong className="text-sage-700">faites à la main</strong> par cet <strong className="text-sage-700">artisan fleuriste Nantes</strong>, rien n'est calibré au millimètre près. Chaque création est donc unique et personnalisable.
                  Sylvie apprécie particulièrement de retravailler l'intérieur de son magasin en intégrant de belles décorations qu'elle trouve chez ses partenaires privilégiés,
                  comme <a href="https://www.mathildem.com" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-700 font-medium inline-flex items-center gap-1">
                    Mathilde M <ExternalLink size={14} />
                  </a>.
                </p>

                {/* Lien vers l'article UNACOD */}
                <div className="mt-6 p-4 bg-sage-50 rounded-lg border border-sage-200">
                  <p className="text-sm text-sage-600 mb-2">
                    <strong className="text-sage-700">Membre de l'UNACOD</strong> (Union Nantaise du Commerce de Détail)
                  </p>
                  <a
                    href="https://www.unacod.fr/portrait/sylvie-achambeau-artisan-fleuriste-au-vertige/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage-600 hover:text-sage-700 font-medium inline-flex items-center gap-1 text-sm"
                  >
                    Découvrir son portrait <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Badge d'expérience */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-3 bg-sage-50 px-6 py-3 rounded-full">
                  <Award className="text-sage-600" size={20} />
                  <span className="text-sage-700 font-medium">14 ans d'expérience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Équipe */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-dancing text-sage-700 mb-4">Notre Équipe</h3>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-sage-300 w-12"></div>
              <Users className="mx-4 text-sage-500" size={20} />
              <div className="h-px bg-sage-300 w-12"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte équipe */}
            <div>
              <h4 className="text-2xl font-semibold text-sage-700 mb-6">
                Des artisans passionnés
              </h4>

              <div className="space-y-4 text-sage-600 leading-relaxed">
                <p>
                  Sylvie s'entoure d'une <strong className="text-sage-700">équipe d'artisans fleuristes</strong> qui maîtrisent parfaitement leurs savoir-faire.
                  Chaque membre de l'équipe partage la même passion pour les créations florales et l'excellence.
                </p>

                <p>
                  Leur particularité ? Ils ont le <strong className="text-sage-600">goût de transmettre leurs passions</strong> aux jeunes générations.
                  Régulièrement, la boutique accueille des <strong className="text-sage-700">apprentis</strong> qui viennent apprendre les techniques traditionnelles
                  et découvrir le métier d'artisan fleuriste.
                </p>

                <p>
                  Cette transmission de savoir-faire garantit la pérennité des techniques artisanales tout en apportant
                  un regard neuf et créatif à l'équipe.
                </p>
              </div>

              {/* Statistiques équipe */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-sage-50 rounded-lg">
                  <div className="text-2xl font-bold text-sage-700 mb-1">14+</div>
                  <div className="text-sm text-sage-500">Années d'expérience</div>
                </div>
                <div className="text-center p-4 bg-sage-50 rounded-lg">
                  <div className="text-2xl font-bold text-sage-700 mb-1">3+</div>
                  <div className="text-sm text-sage-500">Artisans fleuristes</div>
                </div>
              </div>
            </div>

            {/* Image équipe */}
            <div className="relative">
              <img
                src="/images/creations/se-faire-plaisir/fleurs2.webp"
                alt="Équipe d'artisans fleuristes Au Vertige"
                className="w-full h-80 object-cover object-center rounded-2xl shadow-lg"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-sage-200 rounded-full opacity-60 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-sage-200 rounded-full opacity-40 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Notre engagement */}
        <div className="text-center">
          <h3 className="text-3xl font-dancing text-sage-700 mb-8">Notre Engagement</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-sage-500" size={24} />
              </div>
              <h4 className="font-semibold text-sage-700 mb-3 text-lg">Qualité</h4>
              <p className="text-sage-600 text-sm leading-relaxed">Sélection rigoureuse des plus belles fleurs de saison et des producteurs locaux</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flower2 className="text-sage-500" size={24} />
              </div>
              <h4 className="font-semibold text-sage-700 mb-3 text-lg">Créativité</h4>
              <p className="text-sage-600 text-sm leading-relaxed">Compositions uniques et personnalisées qui sortent de l'ordinaire</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-sage-500" size={24} />
              </div>
              <h4 className="font-semibold text-sage-700 mb-3 text-lg">Transmission</h4>
              <p className="text-sage-600 text-sm leading-relaxed">Formation des jeunes générations et préservation des savoir-faire artisanaux</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;