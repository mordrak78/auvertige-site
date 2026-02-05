import * as React from 'react';
import Layout from '@/components/layout/layout/Layout';
import Seo from '@/components/shared/Seo';
import About from '@/components/shared/About';

const reviews = [
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
];

const APropos = () => {
  return (
    <Layout>
      <Seo
        title="À propos | au ver&apos;tige - Fleuriste Artisan à Nantes"
        description="Découvrez l'histoire d'au ver'tige, fleuriste artisan à Nantes Sud. Une passion pour les fleurs locales et la création unique depuis 10 ans."
        type="website"
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "À propos", url: "/a-propos" }
        ]}
        reviews={reviews}
        includePersonSchema={true}
      />
      <main className="min-h-screen bg-cream-50 pt-24">
        <About />
      </main>
    </Layout>
  );
};

export default APropos; 