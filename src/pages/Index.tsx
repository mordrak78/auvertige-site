import * as React from 'react';
import { Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from '@/components/layout/layout/Layout';
import Hero from '@/components/shared/Hero';
import Seo from '@/components/shared/Seo';
import { useEffect } from 'react';

// Lazy load des composants non critiques (below the fold)
const EngagementCards = lazy(() => import('@/components/shared/EngagementCards'));
const CreationsShowcase = lazy(() => import('@/components/features/shop/CreationsShowcase'));
const ServicesPreview = lazy(() => import('@/components/shared/ServicesPreview'));
const ReassuranceBanner = lazy(() => import('@/components/shared/ReassuranceBanner'));
const OrderForm = lazy(() => import('@/components/features/shop/OrderForm'));
const ReviewsSection = lazy(() => import('@/components/shared/ReviewsSection'));
const AboutAndInfoSection = lazy(() => import('@/components/shared/AboutAndInfoSection'));
const ZonesDesserviesSection = lazy(() => import('@/components/shared/ZonesDesserviesSection'));
const FeaturedBouquets = lazy(() => import('@/components/shared/FeaturedBouquets').then(m => ({ default: m.FeaturedBouquets })));

// Composant de chargement minimal
const LoadingFallback = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-pulse text-sage-600">Chargement...</div>
  </div>
);

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
      <Suspense fallback={<LoadingFallback />}>
        <FeaturedBouquets />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <CreationsShowcase />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ServicesPreview />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ZonesDesserviesSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ReassuranceBanner />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <AboutAndInfoSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ReviewsSection />
      </Suspense>
      <section id="commander" className="bg-cream-100 py-16 md:py-24">
        <Suspense fallback={<LoadingFallback />}>
          <OrderForm />
        </Suspense>
      </section>
    </Layout>
  );
};

export default Index;
