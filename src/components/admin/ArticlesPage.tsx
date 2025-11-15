import * as React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Image as ImageIcon } from 'lucide-react';
import { usePageContentDisplay } from '@/hooks/usePageContentDisplay';
import { OptimizedImage } from '@/components/shared/OptimizedImage';
import { PageContentEditor } from './PageContentEditor';
import { PageStructureViewer } from './PageStructureViewer';
import { PageTextsEditor } from './PageTextsEditor';
import { images } from '@/data/images';

const PAGES = [
  { id: 'index', name: 'Accueil', path: '/' },
  { id: 'a-propos', name: 'À propos', path: '/a-propos' },
  { id: 'contact', name: 'Contact', path: '/contact' },
  { id: 'creations-florales', name: 'Créations florales', path: '/creations-florales' },
  { id: 'services', name: 'Services', path: '/services' },
  { id: 'mariage', name: 'Mariage', path: '/mariage' },
  { id: 'anniversaire', name: 'Anniversaire', path: '/anniversaire' },
  { id: 'deuil', name: 'Deuil', path: '/deuil' },
  { id: 'bapteme', name: 'Baptême', path: '/bapteme' },
  { id: 'evenements', name: 'Événements', path: '/evenements' },
];

// Mapping des images hero par page
const HERO_IMAGES: Record<string, string> = {
  'index': images.pages.facade1,
  'a-propos': images.pages.facade1,
  'contact': images.pages.facade1,
};

export const ArticlesPage: React.FC = () => {
  const [selectedPageId, setSelectedPageId] = React.useState<string>('index');
  const [viewMode, setViewMode] = React.useState<'texts' | 'structure' | 'editor'>('texts');

  const selectedPage = PAGES.find(p => p.id === selectedPageId) || PAGES[0];
  const pageContent = usePageContentDisplay(selectedPageId);

  const heroImage = HERO_IMAGES[selectedPageId] || pageContent?.images?.[0]?.url;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Articles</h1>
        <p className="text-gray-600 mt-2">
          Gérez le contenu de vos pages
        </p>
      </div>

      {/* Sélecteur de page */}
      <Card className="border-2 border-sage-200">
        <CardHeader>
          <CardTitle className="text-lg">Sélectionner une page</CardTitle>
        </CardHeader>
        <CardContent>
            <Select 
              value={selectedPageId} 
              onValueChange={(value) => {
                setSelectedPageId(value);
                setViewMode('structure');
              }}
            >
            <SelectTrigger className="w-full max-w-md h-12 text-base">
              <SelectValue placeholder="Choisir une page dans la liste" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              {PAGES.map((page) => (
                <SelectItem key={page.id} value={page.id} className="text-base py-2">
                  {page.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm text-gray-500 mt-2">
            {PAGES.length} pages disponibles
          </p>
        </CardContent>
      </Card>

      {/* Mode d'affichage */}
      <div className="flex gap-2 flex-wrap">
        <Button
          variant={viewMode === 'texts' ? 'default' : 'outline'}
          onClick={() => setViewMode('texts')}
        >
          Textes de la page (CRUD)
        </Button>
        <Button
          variant={viewMode === 'structure' ? 'default' : 'outline'}
          onClick={() => setViewMode('structure')}
        >
          Vue structure complète
        </Button>
        <Button
          variant={viewMode === 'editor' ? 'default' : 'outline'}
          onClick={() => setViewMode('editor')}
        >
          Éditeur avancé
        </Button>
      </div>

      {viewMode === 'texts' ? (
        <PageTextsEditor pageId={selectedPageId} pageName={selectedPage.name} />
      ) : viewMode === 'structure' ? (
        <PageStructureViewer pageId={selectedPageId} pageName={selectedPage.name} />
      ) : (
        <PageContentEditor pageId={selectedPageId} pageName={selectedPage.name} />
      )}
    </div>
  );
};

