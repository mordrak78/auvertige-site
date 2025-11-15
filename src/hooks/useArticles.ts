import { useQuery } from '@tanstack/react-query';

// Types
export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

// Fonction pour récupérer tous les articles
const fetchArticles = async (): Promise<Article[]> => {
  // Pour le moment, on utilise des données statiques
  // À remplacer par un appel API ou une requête à une base de données
  return [
    {
      id: 1,
      slug: 'comment-choisir-ses-fleurs',
      title: 'Comment choisir ses fleurs selon la saison',
      excerpt: 'Découvrez nos conseils pour choisir les fleurs parfaites selon la saison.',
      content: 'Contenu de l\'article...',
      image: '/images/creations/se-faire-plaisir/fleurs2.webp',
      date: '2024-03-15',
      category: 'Conseils',
      author: 'Guillaume'
    },
    {
      id: 2,
      slug: 'entretien-bouquet',
      title: 'Comment entretenir son bouquet de fleurs',
      excerpt: 'Les meilleures pratiques pour conserver vos fleurs plus longtemps.',
      content: 'Contenu de l\'article...',
      image: '/images/creations/se-faire-plaisir/fleurs2.webp',
      date: '2024-03-10',
      category: 'Conseils',
      author: 'Guillaume'
    },
    {
      id: 3,
      slug: 'tendances-florales-2024',
      title: 'Les tendances florales de 2024',
      excerpt: 'Découvrez les nouvelles tendances en matière de compositions florales.',
      content: 'Contenu de l\'article...',
      image: '/images/creations/se-faire-plaisir/fleurs2.webp',
      date: '2024-03-05',
      category: 'Tendances',
      author: 'Guillaume'
    }
  ];
};

// Fonction pour récupérer un article spécifique
const fetchArticle = async (slug: string): Promise<Article | undefined> => {
  const articles = await fetchArticles();
  return articles.find(article => article.slug === slug);
};

// Hook pour récupérer tous les articles
export const useArticles = () => {
  return useQuery({
    queryKey: ['articles'],
    queryFn: fetchArticles
  });
};

// Hook pour récupérer un article spécifique
export const useArticle = (slug: string) => {
  return useQuery({
    queryKey: ['article', slug],
    queryFn: () => fetchArticle(slug)
  });
}; 