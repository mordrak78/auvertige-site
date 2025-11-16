import * as React from 'react';
// import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const reviews = [
  {
    name: "Montse Parlant",
    rating: 5,
    date: "mai 2024",
    text: "Très satisfaite ! Aimables lors de la commande par téléphone et livraison parfaite. Merci beaucoup.",
    occasion: "Commande"
  },
  {
    name: "Virginie Lelion",
    rating: 5,
    date: "octobre 2024",
    text: "Super gamme de fleurs, beaucoup de choix. Sylvie et son équipe savent accueillir leurs clients, toujours un plaisir de passer dans la boutique. Je recommande !",
    occasion: "Visite boutique"
  },
  {
    name: "Pascal PROVOST",
    rating: 5,
    date: "septembre 2023",
    text: "Excellent accueil et sens du service rendu. J'ai fait confiance par téléphone pour une commande urgente et qui plus est tardive et j'ai été totalement satisfait. La réalisation était parfaite.",
    occasion: "Commande urgente"
  },
  {
    name: "Valentin Pottier",
    rating: 5,
    date: "décembre 2024",
    text: "Superbe accueil, des fleurs de qualité et belles décorations de Noël.",
    occasion: "Décoration Noël"
  },
  {
    name: "Virginie Lambert",
    rating: 5,
    date: "août 2022",
    text: "Acceuil et conseil sont au RDV. Il y a du choix pour toutes les bourses.",
    occasion: "Achat fleurs"
  },
  {
    name: "Alyce KEROGUES",
    rating: 5,
    date: "janvier 2021",
    text: "Très professionnel, de très bon conseil si on hésite. Choix sur les fleurs, feuillages... Merci à l'équipe de leur professionnalisme et gentillesse.",
    occasion: "Conseil fleurs"
  },
  {
    name: "Stefy B",
    rating: 5,
    date: "février 2024",
    text: "Très jolies fleurs de qualité vendues avec enthousiasme et passion 🙂",
    occasion: "Achat fleurs"
  },
  {
    name: "JM B",
    rating: 5,
    date: "décembre 2023",
    text: "Tres bon accueil, tres beau magasin et des fleurs toujours tres fraiches. Je recommande.",
    occasion: "Achat fleurs"
  },
  {
    name: "MARIE CHRISTINE Bonnet",
    rating: 5,
    date: "juillet 2023",
    text: "Un ruban blanc imprimé sur mesure pour agrémenter une gerbe coeur roses blanches pour la sépulture de ma petite sœur. Merci pour votre accueil.",
    occasion: "Commande spéciale"
  },
  {
    name: "Stéphanie Md",
    rating: 5,
    date: "décembre 2021",
    text: "J'aime beaucoup cette boutique.. personnellement j'y vais spécialement pour y trouver la marque Mathilde M, laquelle je suis Fan, ils ont un rayon spécial de cette marque, et les vendeuses sont accueillantes.... donc je recommande 👍",
    occasion: "Achat boutique"
  },
  {
    name: "Pauline Vigouroux",
    rating: 5,
    date: "juin 2018",
    text: "Merci pour votre travail réalisé lors de notre mariage ! Mais aussi pour votre écoute de vos idées lors des rdv précédent le mariage afin de se mettre d'accord sur les compositions. Compositions très belles qui ont beaucoup plu aux invités.",
    occasion: "Mariage"
  },
  {
    name: "Sylvain Beuvain",
    rating: 5,
    date: "mars 2018",
    text: "Sylvie, la gérante est très sympathique ! Les compositions proposées ou les accessoires sont très charmants et à bon prix. Venu pour récupérer un colis, Sylvie s'est démenée pour le trouver (il venait juste d'arriver et n'était pas encore prêt).",
    occasion: "Point relais"
  },
  {
    name: "Alexandre HERVOUET",
    rating: 5,
    date: "septembre 2024",
    text: "J'ai pu être reçu par un jeune homme (qui se reconnaîtra! 😉) qui m'a très agréablement accueilli et a fait preuve d'un grand professionnalisme, ayant un réel sens de l'accueil qui est très important à mes yeux. Je lui ai fait totalement confiance pour la création d'un bouquet 💐 à l'occasion des 50 ans de mariage de mes parents : la composition était magnifique. Un grand merci 🙏 pour avoir rendu ce jour, un peu plus exceptionnel !",
    occasion: "Anniversaire de mariage"
  },
  {
    name: "Nightmarlsh",
    rating: 5,
    date: "juillet 2024",
    text: "Commerçant très agréable et souriant avec un magasin très bien décoré avec beaucoup de choix, je vous le recommande fortement",
    occasion: "Visite boutique"
  }
  // NOTE: Les avis ci-dessus sont les avis vérifiés depuis Google My Business.
  // Pour ajouter de nouveaux avis, veuillez les récupérer depuis Google My Business
  // et les vérifier avant de les ajouter ici.
];

function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const renderStars = (rating: number) => (
  <div className="flex space-x-1">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1 }}
      >
        <Star
          size={18}
          className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
        />
      </motion.div>
    ))}
  </div>
);

const ReviewsSection = () => {
  const filteredReviews = reviews.filter(r => r.rating >= 4 && r.text.split(' ').length > 4);
  const reviewChunks = chunkArray(filteredReviews, 4);

  return (
    <section id="avis" className="py-20 bg-gradient-to-b from-cream-50 to-white relative overflow-hidden">
      {/* Effet de fond décoratif */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-poppy-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block mb-4"
          >
            <Quote className="h-10 w-10 text-poppy-500" fill="currentColor" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-dancing text-sage-700 mb-6">
            Ce que nos clients disent de nous
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center space-x-3 mb-4"
          >
            {renderStars(5)}
            <span className="text-sage-700 font-semibold text-lg">4.9/5</span>
            <span className="text-sage-600">sur Google (113 avis)</span>
          </motion.div>
          <p className="text-sage-600 text-lg mb-8">
            Plus de 100 avis clients nous font confiance
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.google.com/search?hl=fr-FR&rlz=1C1FHFK_enFR1150FR1150&sca_esv=673d304d98189f99&cs=0&output=search&tbm=lcl&kgmid=%2Fg%2F1xcbn_np&q=Au%20Vertige&shndl=30&source=sh%2Fx%2Fkp%2Flocal%2Fm1%2F1&kgs=7065d658e3ac1ac1', '_blank')}
              className="bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Voir tous nos avis Google
            </motion.button>
            <motion.a
              href="#commander"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-poppy-500 to-poppy-600 hover:from-poppy-600 hover:to-poppy-700 text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Commander maintenant
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Carrousel pour tous les avis par groupes de 4 */}
        {reviewChunks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Carousel opts={{ align: 'start', loop: true }}>
              <CarouselContent>
                {reviewChunks.map((group, idx) => (
                  <CarouselItem key={idx}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                      {group.map((review, index) => (
                        <motion.div
                          key={`${idx}-${index}`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ y: -4, scale: 1.02 }}
                          className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-sage-100 relative overflow-hidden group"
                        >
                          {/* Icône de citation décorative */}
                          <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Quote className="h-16 w-16 text-sage-400" fill="currentColor" />
                          </div>
                          
                          <div className="relative z-10">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <h4 className="font-bold text-sage-800 text-lg">{review.name}</h4>
                                  <motion.span
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                    className="text-xs bg-gradient-to-r from-poppy-100 to-poppy-50 text-poppy-700 px-3 py-1 rounded-full font-medium border border-poppy-200"
                                  >
                                    {review.occasion}
                                  </motion.span>
                                </div>
                                <p className="text-sm text-sage-500">{review.date}</p>
                              </div>
                              <div className="ml-2">
                                {renderStars(review.rating)}
                              </div>
                            </div>
                            <motion.p
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + 0.3 }}
                              className="text-sage-700 leading-relaxed text-base italic relative z-10"
                            >
                              "{review.text}"
                            </motion.p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-4">
                <CarouselPrevious className="bg-white hover:bg-sage-50 border-sage-200" />
                <CarouselNext className="bg-white hover:bg-sage-50 border-sage-200" />
              </div>
            </Carousel>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
