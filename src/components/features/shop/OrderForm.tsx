import * as React from "react";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/Label';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Send, ShoppingBag, Sparkles } from 'lucide-react';

const produitsFleursDuMoment = [
  {
    nom: "L'ILOT SENTEUR Bouquet de saison camaïeu rose",
    prix: "À partir de 21,80 €",
    image: "https://www.artisansfleuristesdefrance.com/12345-large_default/ilot-senteur-bouquet.webp",
    url: "https://www.artisansfleuristesdefrance.com/produit/ilot-senteur-bouquet"
  },
  {
    nom: "L'évidence rose",
    prix: "À partir de 35,00 €",
    image: "https://www.artisansfleuristesdefrance.com/23456-large_default/evidence-rose.webp",
    url: "https://www.artisansfleuristesdefrance.com/produit/evidence-rose"
  },
  {
    nom: "UN ETE A LA CAMPAGNE 35300 L'évidence rose",
    prix: "À partir de 35,00 €",
    image: "https://www.artisansfleuristesdefrance.com/34567-large_default/ete-campagne-rose.webp",
    url: "https://www.artisansfleuristesdefrance.com/produit/ete-campagne-rose"
  },
  {
    nom: "FLEURETTE L'évidence rose",
    prix: "À partir de 39,00 €",
    image: "https://www.artisansfleuristesdefrance.com/45678-large_default/fleurette-rose.webp",
    url: "https://www.artisansfleuristesdefrance.com/produit/fleurette-rose"
  },
];

const OrderForm = () => {
  const [formData, setFormData] = useState({
    bouquetType: '',
    deliveryDate: '',
    deliveryTime: '',
    message: '',
    name: '',
    email: '',
    phone: '',
    deliveryType: 'retrait'
  });
  const [activeTab, setActiveTab] = useState<'formulaire' | 'boutique'>('formulaire');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Commande envoyée:', formData);
    alert('Votre commande a été envoyée ! Nous vous recontactons rapidement.');

    setIsSubmitting(false);
    // Reset form
    setFormData({
      bouquetType: '',
      deliveryDate: '',
      deliveryTime: '',
      message: '',
      name: '',
      email: '',
      phone: '',
      deliveryType: 'retrait'
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="commandez-en-2-minutes" className="py-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-dancing text-sage-700 mb-4">
              Commandez facilement
            </h2>
            <p className="text-sage-600 text-lg">
              Choisissez votre méthode de commande : formulaire rapide ou boutique partenaire
            </p>
          </motion.div>

          {/* Onglets modernisés */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-8 gap-4 bg-white p-2 rounded-full shadow-lg border border-sage-100"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'formulaire'
                  ? 'bg-gradient-to-r from-sage-600 to-sage-700 text-white shadow-md'
                  : 'text-sage-700 hover:bg-sage-50'
                }`}
              onClick={() => setActiveTab('formulaire')}
            >
              {activeTab === 'formulaire' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-sage-600 to-sage-700 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Send size={18} />
                Commande rapide
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'boutique'
                  ? 'bg-gradient-to-r from-sage-600 to-sage-700 text-white shadow-md'
                  : 'text-sage-700 hover:bg-sage-50'
                }`}
              onClick={() => setActiveTab('boutique')}
            >
              {activeTab === 'boutique' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-sage-600 to-sage-700 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <ShoppingBag size={18} />
                Boutique partenaire
              </span>
            </motion.button>
          </motion.div>

          {/* Contenu des onglets avec animations */}
          <AnimatePresence mode="wait">
            {activeTab === 'formulaire' && (
              <motion.form
                key="formulaire"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 space-y-6 border border-sage-100"
              >
                {/* Type de bouquet */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Label htmlFor="bouquetType" className="text-sage-700 font-semibold mb-2 block">
                    Type de bouquet *
                  </Label>
                  <select
                    id="bouquetType"
                    name="bouquetType"
                    value={formData.bouquetType}
                    onChange={handleInputChange}
                    required
                    className="w-full mt-2 p-3 border-2 border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-sage-500 bg-cream-50 transition-all duration-200"
                  >
                    <option value="">Choisissez votre bouquet</option>
                    <option value="anniversaire">Bouquet d'anniversaire</option>
                    <option value="mariage">Bouquet de mariage</option>
                    <option value="deuil">Composition funéraire</option>
                    <option value="amour">Bouquet romantique</option>
                    <option value="personnalise">Création personnalisée</option>
                  </select>
                </motion.div>

                {/* Type de service */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Label className="text-sage-700 font-semibold mb-2 block">
                    Service souhaité *
                  </Label>
                  <div className="flex gap-4 mt-2">
                    <motion.label
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center bg-cream-100 rounded-full px-4 py-3 cursor-pointer border-2 transition-all duration-200 ${formData.deliveryType === 'retrait'
                          ? 'border-sage-500 bg-sage-50'
                          : 'border-sage-200 hover:border-sage-300'
                        }`}
                    >
                      <input
                        type="radio"
                        name="deliveryType"
                        value="retrait"
                        checked={formData.deliveryType === 'retrait'}
                        onChange={handleInputChange}
                        className="mr-2 accent-sage-600"
                      />
                      <span className="text-sage-700 font-medium">Retrait en boutique (gratuit)</span>
                    </motion.label>
                  </div>
                </motion.div>

                {/* Date et heure */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div>
                    <Label htmlFor="deliveryDate" className="text-sage-700 font-semibold mb-2 block">
                      Date souhaitée *
                    </Label>
                    <Input
                      type="date"
                      id="deliveryDate"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleInputChange}
                      required
                      className="mt-2 bg-cream-50 rounded-xl border-2 border-sage-200 focus:border-sage-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="deliveryTime" className="text-sage-700 font-semibold mb-2 block">
                      Heure souhaitée
                    </Label>
                    <Input
                      type="time"
                      id="deliveryTime"
                      name="deliveryTime"
                      value={formData.deliveryTime}
                      onChange={handleInputChange}
                      className="mt-2 bg-cream-50 rounded-xl border-2 border-sage-200 focus:border-sage-500"
                    />
                  </div>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Label htmlFor="message" className="text-sage-700 font-semibold mb-2 block">
                    Message personnalisé (optionnel)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Précisez vos souhaits, couleurs préférées, style..."
                    className="mt-2 bg-cream-50 rounded-xl border-2 border-sage-200 focus:border-sage-500"
                    rows={3}
                  />
                </motion.div>

                {/* Coordonnées */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div>
                    <Label htmlFor="name" className="text-sage-700 font-semibold mb-2 block">
                      Nom complet *
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 bg-cream-50 rounded-xl border-2 border-sage-200 focus:border-sage-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sage-700 font-semibold mb-2 block">
                      Téléphone *
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-2 bg-cream-50 rounded-xl border-2 border-sage-200 focus:border-sage-500"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Label htmlFor="email" className="text-sage-700 font-semibold mb-2 block">
                    Email *
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 bg-cream-50 rounded-xl border-2 border-sage-200 focus:border-sage-500"
                  />
                </motion.div>

                {/* Bouton de validation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="inline-block"
                        >
                          ⏳
                        </motion.span>
                      ) : (
                        <>
                          <Send className="inline mr-2" size={20} />
                          Valider ma commande
                        </>
                      )}
                    </Button>
                  </motion.div>
                  <p className="text-sm text-sage-500 text-center mt-4">
                    Nous vous recontactons sous 2h pour confirmer votre commande et le prix
                  </p>
                </motion.div>
              </motion.form>
            )}

            {activeTab === 'boutique' && (
              <motion.div
                key="boutique"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-sage-100 flex flex-col items-center"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-sage-700 text-lg mb-6 text-center"
                >
                  Découvrez une large sélection de bouquets et créations florales, livrables partout en France par des artisans locaux.
                </motion.p>
                <motion.a
                  href="https://www.artisansfleuristesdefrance.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 bg-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mb-6 border-2 border-sage-100 hover:border-sage-200"
                >
                  <motion.img
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                    src="/images/logo/logo1.webp"
                    alt="Artisans Fleuristes de France"
                    className="h-12 w-auto"
                  />
                  <div>
                    <span className="text-sage-700 font-medium block">Membre Artisans Fleuristes de France</span>
                    <span className="text-sage-500 text-sm">Voir la boutique partenaire</span>
                  </div>
                </motion.a>
                <div className="w-full max-w-2xl mb-8">
                  <Carousel>
                    <CarouselContent>
                      {produitsFleursDuMoment.map((produit, idx) => (
                        <CarouselItem key={idx}>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="flex flex-col items-center bg-gradient-to-br from-cream-50 to-white rounded-2xl shadow-md p-6 h-full border border-sage-100"
                          >
                            <motion.img
                              whileHover={{ scale: 1.05 }}
                              src={produit.image}
                              alt={produit.nom}
                              className="h-48 w-auto object-contain object-center mx-auto mb-4 rounded-xl"
                              loading="lazy"
                            />
                            <h4 className="text-lg font-semibold text-sage-700 mb-2 text-center">{produit.nom}</h4>
                            <p className="text-sage-600 font-bold mb-4">{produit.prix}</p>
                            <motion.a
                              href="https://www.artisansfleuristesdefrance.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md"
                            >
                              Voir sur la boutique
                            </motion.a>
                          </motion.div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-white hover:bg-sage-50 border-sage-200" />
                    <CarouselNext className="bg-white hover:bg-sage-50 border-sage-200" />
                  </Carousel>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
