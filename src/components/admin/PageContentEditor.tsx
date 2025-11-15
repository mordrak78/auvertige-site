import * as React from 'react';
import { Save, Plus, Trash2, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/Label';
import { usePageContent } from '@/hooks/usePageContent';
import { ImageSelector } from './ImageSelector';
import { toast } from 'sonner';

interface PageContentEditorProps {
  pageId: string;
  pageName: string;
}

export const PageContentEditor: React.FC<PageContentEditorProps> = ({
  pageId,
  pageName,
}) => {
  const {
    content,
    loading,
    saving,
    updateTitle,
    updateParagraph,
    addParagraph,
    removeParagraph,
    updateImages,
  } = usePageContent(pageId);

  const [localTitle, setLocalTitle] = React.useState('');
  const [localParagraphs, setLocalParagraphs] = React.useState<string[]>([]);
  const [hasChanges, setHasChanges] = React.useState(false);

  React.useEffect(() => {
    if (content) {
      setLocalTitle(content.title || '');
      setLocalParagraphs(content.paragraphs || []);
      setHasChanges(false);
    }
  }, [content]);

  const handleTitleChange = (value: string) => {
    setLocalTitle(value);
    setHasChanges(true);
  };

  const handleParagraphChange = (index: number, value: string) => {
    const newParagraphs = [...localParagraphs];
    newParagraphs[index] = value;
    setLocalParagraphs(newParagraphs);
    setHasChanges(true);
  };

  const handleAddParagraph = () => {
    setLocalParagraphs([...localParagraphs, '']);
    setHasChanges(true);
  };

  const handleRemoveParagraph = (index: number) => {
    const newParagraphs = localParagraphs.filter((_, i) => i !== index);
    setLocalParagraphs(newParagraphs);
    setHasChanges(true);
  };

  const handleSave = async () => {
    try {
      await updateTitle(localTitle);
      await updateParagraphs(localParagraphs);
      setHasChanges(false);
      toast.success('Contenu sauvegardé avec succès');
      // L'historique est ajouté automatiquement dans savePageContent
    } catch (error) {
      toast.error('Erreur lors de la sauvegarde');
    }
  };

  const handleImageUpdate = async (imageKey: string, url: string) => {
    if (!content) return;
    const updatedImages = [...(content.images || [])];
    const index = updatedImages.findIndex(img => img.key === imageKey);
    
    if (index >= 0) {
      updatedImages[index] = { ...updatedImages[index], url };
    } else {
      updatedImages.push({ key: imageKey, url });
    }
    
    await updateImages(updatedImages);
    toast.success('Image mise à jour');
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center py-8">
            <div className="w-8 h-8 border-2 border-sage-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Chargement...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Édition de la page : {pageName}</CardTitle>
            <Button
              onClick={handleSave}
              disabled={!hasChanges || saving}
              className="flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              {saving ? 'Sauvegarde...' : 'Sauvegarder'}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Titre */}
          <div className="space-y-2">
            <Label htmlFor="page-title">Titre de la page</Label>
            <Input
              id="page-title"
              value={localTitle}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Entrez le titre de la page"
            />
          </div>

          {/* Paragraphes */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Paragraphes</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleAddParagraph}
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Ajouter un paragraphe
              </Button>
            </div>

            {localParagraphs.map((paragraph, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor={`paragraph-${index}`}>
                    Paragraphe {index + 1}
                  </Label>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveParagraph(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <Textarea
                  id={`paragraph-${index}`}
                  value={paragraph}
                  onChange={(e) => handleParagraphChange(index, e.target.value)}
                  placeholder={`Contenu du paragraphe ${index + 1}...`}
                  rows={4}
                />
              </div>
            ))}

            {localParagraphs.length === 0 && (
              <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-500 mb-4">Aucun paragraphe</p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleAddParagraph}
                  className="flex items-center gap-2 mx-auto"
                >
                  <Plus className="h-4 w-4" />
                  Ajouter le premier paragraphe
                </Button>
              </div>
            )}
          </div>

          {/* Images */}
          {content && (
            <div className="space-y-4">
              <Label>Images de la page</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.images && content.images.length > 0 ? (
                  content.images.map((img, index) => (
                    <div key={img.key || index} className="space-y-2">
                      <Label>{img.key || `Image ${index + 1}`}</Label>
                      <ImageSelector
                        currentImage={img.url}
                        onSelect={(url) => handleImageUpdate(img.key || `img-${index}`, url)}
                        label={`Image ${index + 1}`}
                      />
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Aucune image configurée</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

