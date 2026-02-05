import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQProps {
  items?: FAQItem[];
}

const defaultFAQItems: FAQItem[] = [
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer: (
      <>
        Nous sommes ouverts du mardi au samedi de 9h à 19h, le lundi de 14h à 19h, et le
        dimanche de 10h à 13h. Nous sommes également ouverts les jours fériés de 10h à 13h.
        Consultez nos horaires détaillés et les périodes spéciales directement sur la page{' '}
        <Link
          to="/fleuriste-ouvert-dimanche-nantes"
          className="text-poppy-600 underline font-medium"
        >
          Nos horaires complets
        </Link>
        .
      </>
    ),
  },
  {
    question: "Où se trouve votre boutique ?",
    answer: "Notre boutique est située au 38, boulevard Joliot Curie, 44200 Nantes, dans le quartier de Saint-Jacques. Nous sommes facilement accessibles depuis Pirmil, Rezé et Saint-Sébastien-sur-Loire. Un parking est disponible à proximité."
  },
  {
    question: "Livrez-vous à domicile ?",
    answer: "Non, nous ne proposons pas de service de livraison à domicile. Toutes nos créations sont à retirer directement en boutique. Cela nous permet de garantir la fraîcheur et la qualité de nos compositions, et de vous conseiller personnellement lors de la remise de votre commande."
  },
  {
    question: "Puis-je commander un bouquet personnalisé ?",
    answer: (
      <>
        Absolument ! Nous réalisons toutes nos compositions sur-mesure, adaptées à vos goûts et à
        l'occasion. Passez nous voir en boutique ou utilisez notre{' '}
        <Link to="/contact" className="text-poppy-600 underline font-medium">
          formulaire de contact
        </Link>{' '}
        pour nous parler de votre projet : nous vous répondons rapidement.
      </>
    ),
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: "Nous acceptons les paiements par carte bancaire, espèces et chèque. Pour les commandes importantes (mariages, événements), un acompte peut être demandé lors de la réservation."
  },
  {
    question: "Quel est le délai pour une commande ?",
    answer: "Pour les bouquets simples, nous pouvons généralement les réaliser le jour même ou le lendemain selon la disponibilité des fleurs. Pour les commandes importantes (mariages, événements), nous recommandons de nous contacter au moins 2 à 3 semaines à l'avance pour garantir la disponibilité et organiser un rendez-vous de conseil."
  },
  {
    question: "Utilisez-vous des fleurs locales ?",
    answer: "Oui, nous privilégions les fleurs locales et de saison issues du circuit court nantais. Nous travaillons avec des producteurs locaux lorsque c'est possible, ce qui nous permet de vous proposer des fleurs fraîches et de qualité tout en limitant l'impact environnemental. Nous sélectionnons également des fleurs qui sortent de l'ordinaire pour créer des compositions uniques."
  },
  {
    question: "Proposez-vous des plantes d'intérieur ?",
    answer: "Oui, nous proposons une sélection de plantes vertes d'intérieur, plantes fleuries, cactus et succulentes. Nous avons notamment une mention spéciale pour nos 'Boul Ki Mous' - nos plantes coup de cœur ! Chaque plante est soigneusement sélectionnée et nous vous conseillons sur l'entretien adapté à chaque variété."
  },
  {
    question: "Organisez-vous des ateliers floraux ?",
    answer: (
      <>
        Nous n'organisons pas d'ateliers floraux programmés pour le moment, mais nous sommes ravis
        d'échanger sur vos envies créatives. Passez en boutique ou{' '}
        <Link to="/contact" className="text-poppy-600 underline font-medium">
          contactez-nous
        </Link>{' '}
        pour bénéficier de nos conseils personnalisés et imaginer un accompagnement sur-mesure.
      </>
    ),
  },
  {
    question: "Puis-je réserver une composition pour un événement ?",
    answer: "Oui, nous réalisons des compositions pour tous types d'événements : mariages, baptêmes, anniversaires, événements d'entreprise, etc. Nous vous proposons un accompagnement sur-mesure avec des rendez-vous de conseil pour définir vos besoins et créer des compositions adaptées à votre événement. Contactez-nous pour discuter de votre projet."
  },
  {
    question: "Que faire si je ne suis pas satisfait de ma commande ?",
    answer: "Votre satisfaction est notre priorité. Si vous n'êtes pas satisfait de votre commande, n'hésitez pas à nous contacter dans les 24 heures suivant l'achat. Nous ferons notre possible pour trouver une solution qui vous convienne. Toutes nos créations sont garanties fraîches et de qualité."
  },
  {
    question: "Acceptez-vous les commandes par téléphone ?",
    answer: "Oui, vous pouvez nous appeler au 02 40 54 10 02 pour passer une commande ou obtenir des conseils. Nous vous conseillons de passer en boutique pour voir les fleurs disponibles et discuter de vos préférences, mais nous pouvons également prendre votre commande par téléphone si vous connaissez déjà ce que vous souhaitez."
  },
  {
    question: "Proposez-vous des abonnements floraux ?",
    answer: "Oui, nous proposons des abonnements floraux pour recevoir régulièrement des bouquets frais. Ces abonnements peuvent être personnalisés selon vos préférences et la fréquence souhaitée (hebdomadaire, bi-mensuelle, mensuelle). Contactez-nous pour connaître nos formules et tarifs."
  },
  {
    question: "Travaillez-vous avec des entreprises pour la décoration ?",
    answer: "Oui, nous proposons des services professionnels pour les entreprises : décoration de bureaux, compositions pour événements d'entreprise, fleurissement régulier, etc. Nous avons déjà accompagné de nombreuses entreprises dans leurs projets de décoration florale. Contactez-nous pour discuter de vos besoins professionnels."
  },
  {
    question: "Comment puis-je prendre soin de mes fleurs pour qu'elles durent plus longtemps ?",
    answer: "Pour prolonger la durée de vie de vos fleurs, nous vous conseillons de : couper les tiges en biseau avant de les mettre dans l'eau, changer l'eau tous les 2-3 jours, retirer les feuilles qui trempent dans l'eau, éviter de placer le bouquet près d'une source de chaleur ou en plein soleil, et ajouter un conservateur floral si disponible. Nous vous donnons également des conseils personnalisés lors de l'achat selon le type de fleurs choisies."
  },
  {
    question: "Le fleuriste est-il ouvert le dimanche à Nantes ?",
    answer: (
      <>
        Oui, au ver'tige est ouvert le dimanche de 10h à 13h ainsi que les jours fériés de 10h à
        13h. Retrouvez toutes les informations pratiques et conseils de retrait sur notre page{' '}
        <Link
          to="/fleuriste-ouvert-dimanche-nantes"
          className="text-poppy-600 underline font-medium"
        >
          Fleuriste ouvert dimanche Nantes
        </Link>
        .
      </>
    ),
  },
];

const FAQ: React.FC<FAQProps> = ({ items = defaultFAQItems }) => {
  return (
    <section id="faq" className="py-16 md:py-20 bg-gradient-to-b from-white to-cream-50">
      <div className="container mx-auto px-4 max-w-4xl">
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
            <HelpCircle className="h-12 w-12 text-poppy-500" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-dancing text-sage-700 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-sage-600 text-lg max-w-2xl mx-auto">
            Vous avez une question ? Trouvez la réponse ci-dessous ou contactez-nous directement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-md border border-sage-100 px-6"
              >
                <AccordionTrigger className="text-left text-sage-700 font-semibold hover:text-poppy-600 transition-colors py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sage-600 leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sage-600 mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-poppy-500 hover:bg-poppy-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contactez-nous
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
export { defaultFAQItems };

