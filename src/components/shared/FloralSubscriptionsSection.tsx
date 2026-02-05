import * as React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Check, ArrowRight, Flower } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FloralSubscriptionsSection = () => {
    const benefits = [
        "Fréquence sur-mesure (hebdomadaire, mensuelle)",
        "Choix des couleurs et du style",
        "Livraison ou retrait en boutique",
        "Sans engagement de durée",
        "Budget adapté à vos besoins"
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-white to-sage-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100 text-sage-800 rounded-full font-medium text-sm mb-6">
                            <Flower size={16} />
                            <span>Nouveau service</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-dancing text-sage-700 mb-6">
                            Abonnements Floraux Sur-Mesure
                        </h2>

                        <p className="text-lg text-sage-600 mb-8 leading-relaxed">
                            Profitez de fleurs fraîches toute l'année avec nos formules d'abonnement entièrement personnalisables.
                            Que ce soit pour embellir votre intérieur, votre bureau, ou pour faire plaisir régulièrement à un proche,
                            nous créons ensemble la formule qui vous ressemble.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {benefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    className="flex items-center gap-3 text-sage-700"
                                >
                                    <div className="w-6 h-6 rounded-full bg-poppy-100 flex items-center justify-center flex-shrink-0">
                                        <Check size={14} className="text-poppy-600" />
                                    </div>
                                    {benefit}
                                </motion.li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild className="bg-sage-600 hover:bg-sage-700 text-white rounded-full py-6 px-8 text-lg shadow-lg hover:shadow-xl transition-all">
                                <Link to="/contact">
                                    Créer mon abonnement
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Abonnement floral bouquet régulier"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Elements décoratifs */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-poppy-100 rounded-full -z-0 opacity-50 blur-2xl"></div>
                        <div className="absolute -top-6 -left-6 w-40 h-40 bg-sage-100 rounded-full -z-0 opacity-50 blur-2xl"></div>

                        <div className="absolute top-8 -right-4 bg-white p-4 rounded-xl shadow-lg z-20 max-w-[180px]">
                            <div className="flex items-center gap-2 mb-2 text-poppy-600 font-bold">
                                <Calendar size={20} />
                                <span>Flexibilité</span>
                            </div>
                            <p className="text-xs text-sage-600">Choisissez la fréquence qui vous convient le mieux</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FloralSubscriptionsSection;
