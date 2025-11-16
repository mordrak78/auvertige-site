import * as React from 'react';
// import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import AnimatedModal from '@/components/shared/AnimatedModal';

const Contact = () => {
  const [showRdvModal, setShowRdvModal] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    requestType: '',
    message: ''
  });
  const [rdvFormData, setRdvFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    message: ''
  });

  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message de contact envoyé:', contactFormData);
    alert('Votre message a été envoyé ! Nous vous recontactons rapidement.');
    setContactFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      requestType: '',
      message: ''
    });
  };

  const handleRdvInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRdvFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRdvSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demande de rendez-vous envoyée:', rdvFormData);
    alert('Votre demande de rendez-vous a été envoyée ! Nous vous recontactons rapidement.');
    setShowRdvModal(false);
    setRdvFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-sage-50 to-cream-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-dancing text-sage-700 mb-6"
          >
            Nous Contacter
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="h-px bg-sage-300 w-16"></div>
            <div className="h-px bg-sage-300 w-16"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-sage-600 max-w-2xl mx-auto"
          >
            Une envie, un projet, une question ? N'hésitez pas à nous contacter. 
            Nous serons ravis de vous accompagner dans vos créations florales.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-dancing text-sage-700 mb-6">Informations Pratiques</h3>
                  
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center"
                      >
                        <MapPin className="text-sage-600" size={20} />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-sage-700 mb-1">Adresse</h4>
                        <p className="text-sage-600">
                          Au cœur de Nantes<br />
                          Loire-Atlantique, 44200
                        </p>
                        <a href="https://maps.google.com/?q=Au+Vertige+Fleuriste+Nantes" target="_blank" rel="noopener noreferrer" className="text-poppy-600 hover:underline text-sm mt-1 inline-block">Voir sur Google Maps</a>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="flex items-start space-x-4"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex-shrink-0 w-12 h-12 bg-poppy-100 rounded-full flex items-center justify-center"
                      >
                        <Phone className="text-poppy-600" size={22} />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-sage-700 mb-2">Téléphone</h4>
                        <a 
                          href="tel:0240541002"
                          className="text-poppy-600 hover:text-poppy-800 font-bold text-lg transition-colors underline"
                        >
                          02 40 54 10 02
                        </a>
                        <p className="text-sm text-sage-500 mt-1">Du mardi au samedi</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex items-start space-x-4"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center"
                      >
                        <Mail className="text-sage-600" size={20} />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-sage-700 mb-1">Email</h4>
                        <p className="text-sage-600">contact@auvertige-nantes.fr</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="flex items-start space-x-4"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center"
                      >
                        <Clock className="text-sage-600" size={20} />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-sage-700 mb-1">Horaires</h4>
                        <div className="text-sage-600 text-sm space-y-1">
                          <p>Mardi - Vendredi : 9h00 - 19h00</p>
                          <p>Samedi : 9h00 - 18h00</p>
                          <p>Dimanche - Lundi : Fermé</p>
                        </div>
                      </div>
                    </motion.div>
                </div>
              </CardContent>
            </Card>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-sage-700 mb-4">Commandes Spéciales</h3>
                  <p className="text-sage-600 mb-4">
                    Pour vos événements importants, nous recommandons de passer commande 
                    au moins 48h à l'avance pour garantir la disponibilité des fleurs.
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-sage-600 hover:bg-sage-700 text-white rounded-full" onClick={() => setShowRdvModal(true)}>
                      Prendre rendez-vous
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

            {/* Réseaux sociaux */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-8"
            >
              <p className="text-sage-700 font-medium mb-2">Suivez-nous sur les réseaux :</p>
              <div className="flex justify-center gap-4">
                <a href="https://www.instagram.com/auvertigefleuriste_nantes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-sage-700 rounded-full flex items-center justify-center hover:bg-sage-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75h9A3.75 3.75 0 0120.25 7.5v9a3.75 3.75 0 01-3.75 3.75h-9A3.75 3.75 0 013.75 16.5v-9A3.75 3.75 0 017.5 3.75zm0 0V3m9 0v.75m-9 16.5V21m9 0v-.75M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/auvertigenantes/?locale=fr_FR" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 bg-sage-700 rounded-full flex items-center justify-center hover:bg-sage-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75A4.5 4.5 0 0012.75 2.25h-1.5A4.5 4.5 0 006.75 6.75v10.5A4.5 4.5 0 0011.25 21.75h1.5A4.5 4.5 0 0017.25 17.25V6.75z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75h1.5v6h-1.5zM12.75 9.75h1.5v6h-1.5z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-dancing text-sage-700 mb-6">Envoyez-nous un message</h3>
              
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sage-700 font-medium mb-2">Prénom *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={contactFormData.firstName}
                      onChange={handleContactInputChange}
                      className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-colors"
                      placeholder="Votre prénom"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sage-700 font-medium mb-2">Nom *</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={contactFormData.lastName}
                      onChange={handleContactInputChange}
                      className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-colors"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sage-700 font-medium mb-2">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={contactFormData.email}
                    onChange={handleContactInputChange}
                    className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-colors"
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sage-700 font-medium mb-2">Téléphone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={contactFormData.phone}
                    onChange={handleContactInputChange}
                    className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-colors"
                    placeholder="06 XX XX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sage-700 font-medium mb-2">Type de demande</label>
                  <select 
                    name="requestType"
                    value={contactFormData.requestType}
                    onChange={handleContactInputChange}
                    className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-colors"
                  >
                    <option value="">Choisir une option</option>
                    <option value="Mariage">Mariage</option>
                    <option value="Événement">Événement</option>
                    <option value="Bouquet">Bouquet</option>
                    <option value="Composition">Composition</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sage-700 font-medium mb-2">Message *</label>
                  <textarea 
                    name="message"
                    value={contactFormData.message}
                    onChange={handleContactInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-colors resize-none"
                    placeholder="Décrivez-nous votre projet ou votre demande..."
                    required
                  ></textarea>
                </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full bg-sage-600 hover:bg-sage-700 text-white py-3 rounded-lg font-medium transition-all duration-300">
                      Envoyer le message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <AnimatedModal
        isOpen={showRdvModal}
        onClose={() => setShowRdvModal(false)}
        title="Prendre rendez-vous pour une commande spéciale"
        size="md"
      >
            <form onSubmit={handleRdvSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sage-700 mb-1">Nom complet</label>
                <input 
                  type="text" 
                  name="name"
                  value={rdvFormData.name}
                  onChange={handleRdvInputChange}
                  className="w-full border border-sage-200 rounded-lg px-3 py-2" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sage-700 mb-1">Téléphone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={rdvFormData.phone}
                  onChange={handleRdvInputChange}
                  className="w-full border border-sage-200 rounded-lg px-3 py-2" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sage-700 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={rdvFormData.email}
                  onChange={handleRdvInputChange}
                  className="w-full border border-sage-200 rounded-lg px-3 py-2" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sage-700 mb-1">Date souhaitée du rendez-vous</label>
                <input 
                  type="date" 
                  name="date"
                  value={rdvFormData.date}
                  onChange={handleRdvInputChange}
                  className="w-full border border-sage-200 rounded-lg px-3 py-2" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sage-700 mb-1">Heure souhaitée</label>
                <input 
                  type="time" 
                  name="time"
                  value={rdvFormData.time}
                  onChange={handleRdvInputChange}
                  className="w-full border border-sage-200 rounded-lg px-3 py-2" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sage-700 mb-1">Message</label>
                <textarea 
                  name="message"
                  value={rdvFormData.message}
                  onChange={handleRdvInputChange}
                  className="w-full border border-sage-200 rounded-lg px-3 py-2" 
                  rows={2} 
                  required 
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full bg-sage-600 hover:bg-sage-700 text-white font-bold py-3 px-6 rounded-full shadow transition mt-2">
                  Valider le rendez-vous
                </Button>
              </motion.div>
            </form>
      </AnimatedModal>
    </section>
  );
};

export default Contact;
