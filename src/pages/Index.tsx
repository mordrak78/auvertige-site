import * as React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/layout/Layout';
import Hero from '@/components/shared/Hero';
import EngagementCards from '@/components/shared/EngagementCards';
import CreationsShowcase from '@/components/features/shop/CreationsShowcase';
import ServicesPreview from '@/components/shared/ServicesPreview';
import ReassuranceBanner from '@/components/shared/ReassuranceBanner';
import OrderForm from '@/components/features/shop/OrderForm';
import ReviewsSection from '@/components/shared/ReviewsSection';
import Seo from '@/components/shared/Seo';
import AboutAndInfoSection from '@/components/shared/AboutAndInfoSection';
import ZonesDesserviesSection from '@/components/shared/ZonesDesserviesSection';
import { FeaturedBouquets } from '@/components/shared/FeaturedBouquets';
import { useEffect } from 'react';

const zonesDesservies = ["Pirmil", "Saint-Sébastien-sur-Loire", "Rezé"];

const Index = () => {
  const [showDetails, setShowDetails] = React.useState(false);

  useEffect(() => {
    if (window.location.hash === '#commandez-en-2-minutes') {
      const section = document.getElementById('commandez-en-2-minutes');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <Layout>
      <Seo
        title="Fleuriste Nantes | Au Vertige - Artisan fleuriste à Nantes Sud, quartier Saint-Jacques"
        description="Fleuriste Nantes : Au Vertige, votre artisan fleuriste à Nantes Sud (quartier Saint-Jacques). Bouquets sur-mesure, fleurs locales. Retrait en boutique. Ouvert 7j/7. 02 40 54 10 02"
        type="website"
        breadcrumbs={[{ name: "Accueil", url: "/" }]}
        reviews={[
          {
            author: "Fabrice Desquiens",
            rating: 5,
            date: "2024-06-30",
            content: "Bouquets magnifiques, pleins de charmes et de poésie. J'ai commandé pour un anniversaire et la personne a été ravie. Les fleurs sont fraîches et la composition très soignée. Je recommande vivement ce fleuriste."
          },
          {
            author: "Anne Thibault",
            rating: 5,
            date: "2024-06-29",
            content: "Magnifique bouquet de mariage aux teintes rosées qui a fait très plaisir à la mariée ! L'équipe a été à l'écoute et très professionnelle. Livraison rapide et service impeccable, merci encore !"
          },
          {
            author: "Chelsea Rouzineau",
            rating: 5,
            date: "2024-08-11",
            content: "Cela fait plus de 6 ans que je vais dans cette jolie boutique et je suis toujours autant ravie des magnifiques créations qu'ils font. L'accueil est chaleureux et les conseils sont toujours avisés. Je recommande à fond."
          },
          {
            author: "Nathalie Lorit",
            rating: 5,
            date: "2024-10-30",
            content: "Bouquets toujours réalisés avec goût et une originalité dans le choix des végétaux, qui sortent agréablement de l'ordinaire. La présentation est élégante et naturelle, c'est un vrai plaisir à chaque commande."
          }
        ]}
      />
      <Hero />
      <FeaturedBouquets />
      <CreationsShowcase />
      <ServicesPreview />
      <ZonesDesserviesSection />
      <ReassuranceBanner />
      <AboutAndInfoSection />
      <ReviewsSection />
      <section id="commander" className="bg-cream-100 py-16 md:py-24">
        <OrderForm />
      </section>
    </Layout>
  );
};

export default Index;
