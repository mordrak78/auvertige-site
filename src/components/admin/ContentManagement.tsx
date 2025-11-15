import * as React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PageContentEditor } from './PageContentEditor';
import { FeaturedBouquetsEditor } from './FeaturedBouquetsEditor';
import {
  FileText,
  Flower,
  Download,
  Upload,
  RotateCcw,
} from 'lucide-react';
import { downloadContentData } from '@/utils/contentStorage';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  exportContentData,
  importContentData,
  resetContentData,
} from '@/utils/contentStorage';
import { toast } from 'sonner';

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

export const ContentManagement: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('bouquets');

  const handleExport = () => {
    try {
      downloadContentData();
      toast.success('Données exportées avec succès');
    } catch (error) {
      toast.error('Erreur lors de l\'export');
    }
  };

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const jsonData = event.target?.result as string;
          if (importContentData(jsonData)) {
            toast.success('Données importées avec succès');
            window.location.reload(); // Recharger pour appliquer les changements
          } else {
            toast.error('Erreur lors de l\'import');
          }
        } catch (error) {
          toast.error('Format de fichier invalide');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const handleReset = () => {
    if (
      confirm(
        'Êtes-vous sûr de vouloir réinitialiser toutes les données ? Cette action est irréversible.'
      )
    ) {
      if (resetContentData()) {
        toast.success('Données réinitialisées');
        window.location.reload();
      } else {
        toast.error('Erreur lors de la réinitialisation');
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* En-tête avec actions */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Gestion du contenu
              </h2>
              <p className="text-gray-600 mt-1">
                Modifiez le contenu de votre site sans serveur
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={handleExport}
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Exporter
              </Button>
              <Button
                variant="outline"
                onClick={handleImport}
                className="flex items-center gap-2"
              >
                <Upload className="h-4 w-4" />
                Importer
              </Button>
              <Button
                variant="outline"
                onClick={handleReset}
                className="flex items-center gap-2 text-red-600 hover:text-red-700"
              >
                <RotateCcw className="h-4 w-4" />
                Réinitialiser
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Onglets */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-6">
          <TabsTrigger value="bouquets" className="flex items-center gap-2">
            <Flower className="h-4 w-4" />
            Bouquets phares
          </TabsTrigger>
          <TabsTrigger value="pages" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Pages
          </TabsTrigger>
        </TabsList>

        <TabsContent value="bouquets" className="space-y-4">
          <FeaturedBouquetsEditor />
        </TabsContent>

        <TabsContent value="pages" className="space-y-4">
          <Tabs defaultValue={PAGES[0].id} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-6 max-h-96 overflow-y-auto">
              {PAGES.map((page) => (
                <TabsTrigger key={page.id} value={page.id}>
                  {page.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {PAGES.map((page) => (
              <TabsContent key={page.id} value={page.id}>
                <PageContentEditor pageId={page.id} pageName={page.name} />
              </TabsContent>
            ))}
          </Tabs>
        </TabsContent>
      </Tabs>
    </div>
  );
};

