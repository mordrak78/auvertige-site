import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Edit, Save, X, Image as ImageIcon, Type, Heading, Plus } from 'lucide-react';
import { OptimizedImage } from '@/components/shared/OptimizedImage';
import { ImageSelector } from './ImageSelector';
import { getPageStructure, type PageElement, type PageStructure } from '@/utils/pageStructureExtractor';
import { toast } from 'sonner';

// Fonction pour sauvegarder avec la structure complète
const savePageContentWithStructure = (pageId: string, content: {
  title: string;
  paragraphs: string[];
  images: { key: string; url: string; alt?: string }[];
  structure: PageElement[];
}): boolean => {
  try {
    const data = localStorage.getItem('auvertige_content_data');
    let contentData: any = { pages: {}, featuredBouquets: [], version: '1.0.0' };
    
    if (data) {
      contentData = JSON.parse(data);
    }

    contentData.pages[pageId] = {
      ...contentData.pages[pageId],
      ...content,
      structure: content.structure,
      metadata: {
        ...contentData.pages[pageId]?.metadata,
        lastModified: new Date().toISOString(),
      },
    };

    localStorage.setItem('auvertige_content_data', JSON.stringify(contentData));
    
    // Ajouter à l'historique
    if (typeof window !== 'undefined') {
      try {
        import('@/utils/contentHistory').then(({ addHistoryEntry }) => {
          addHistoryEntry({
            type: 'page',
            pageId,
            action: 'updated',
            field: 'structure',
            description: `Structure de la page "${pageId}" mise à jour`,
          });
        });
      } catch (error) {
        // Ignorer les erreurs d'import en mode SSR
      }
    }
    
    return true;
  } catch (error) {
    console.error('Erreur lors de la sauvegarde:', error);
    return false;
  }
};

interface PageStructureViewerProps {
  pageId: string;
  pageName: string;
}

export const PageStructureViewer: React.FC<PageStructureViewerProps> = ({
  pageId,
  pageName,
}) => {
  const [structure, setStructure] = React.useState<PageStructure | null>(null);
  const [editingElementId, setEditingElementId] = React.useState<string | null>(null);
  const [editContent, setEditContent] = React.useState<string>('');
  const [editImageUrl, setEditImageUrl] = React.useState<string>('');
  const [showAddElement, setShowAddElement] = React.useState(false);
  const [newElementType, setNewElementType] = React.useState<'h2' | 'h3' | 'p' | 'img'>('p');
  const [newElementContent, setNewElementContent] = React.useState('');

  React.useEffect(() => {
    loadStructure();
  }, [pageId]);

  const loadStructure = () => {
    const pageStructure = getPageStructure(pageId);
    setStructure(pageStructure);
  };

  const handleEditElement = (element: PageElement) => {
    setEditingElementId(element.id);
    setEditContent(element.content);
    setEditImageUrl(element.imageUrl || '');
  };

  const handleSaveElement = async () => {
    if (!structure || !editingElementId) return;

    const element = structure.elements.find(e => e.id === editingElementId);
    if (!element) return;

    // Mettre à jour la structure locale
    const updatedElements = structure.elements.map(e => {
      if (e.id === editingElementId) {
        return {
          ...e,
          content: editContent,
          imageUrl: (element.type === 'img' || element.type === 'hero') ? editImageUrl : e.imageUrl,
        };
      }
      return e;
    });

    // Sauvegarder dans localStorage avec la structure complète
    const title = updatedElements.find(e => e.type === 'h1')?.content || '';
    const paragraphs = updatedElements
      .filter(e => e.type === 'p')
      .map(e => e.content);
    const images = updatedElements
      .filter(e => e.type === 'img')
      .map((e, i) => ({
        key: `img-${i}`,
        url: e.imageUrl || e.content,
        alt: e.metadata?.alt,
      }));

    // Mettre à jour l'image hero si c'est un élément hero
    let heroImage = structure.heroImage;
    if (element.type === 'hero' && editImageUrl) {
      heroImage = editImageUrl;
    }

    // Sauvegarder avec la structure complète
    const success = savePageContentWithStructure(pageId, {
      title,
      paragraphs,
      images: heroImage ? [{ key: 'hero', url: heroImage }, ...images] : images,
      structure: updatedElements,
    });

    if (success) {
      toast.success('Élément sauvegardé');
      setEditingElementId(null);
      setEditContent('');
      setEditImageUrl('');
      loadStructure(); // Recharger la structure
    } else {
      toast.error('Erreur lors de la sauvegarde');
    }
  };

  const handleCancelEdit = () => {
    setEditingElementId(null);
    setEditContent('');
    setEditImageUrl('');
  };

  const handleAddElement = () => {
    if (!structure) return;

    const newId = `${newElementType}-${Date.now()}`;
    const newElement: PageElement = {
      id: newId,
      type: newElementType,
      content: newElementContent,
      imageUrl: newElementType === 'img' ? newElementContent : undefined,
      order: structure.elements.length > 0 
        ? Math.max(...structure.elements.map(e => e.order)) + 1 
        : 100,
    };

    const updatedElements = [...structure.elements, newElement];
    const title = updatedElements.find(e => e.type === 'h1')?.content || '';
    const paragraphs = updatedElements
      .filter(e => e.type === 'p')
      .map(e => e.content);
    const images = updatedElements
      .filter(e => e.type === 'img')
      .map((e, i) => ({
        key: `img-${i}`,
        url: e.imageUrl || e.content,
        alt: e.metadata?.alt,
      }));

    const success = savePageContentWithStructure(pageId, {
      title,
      paragraphs,
      images: structure.heroImage ? [{ key: 'hero', url: structure.heroImage }, ...images] : images,
      structure: updatedElements,
    });

    if (success) {
      toast.success('Nouvel élément ajouté');
      setShowAddElement(false);
      setNewElementContent('');
      loadStructure();
    } else {
      toast.error('Erreur lors de l\'ajout');
    }
  };

  const getElementIcon = (type: PageElement['type']) => {
    switch (type) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return <Heading className="h-4 w-4" />;
      case 'p':
        return <Type className="h-4 w-4" />;
      case 'img':
      case 'hero':
        return <ImageIcon className="h-4 w-4" />;
      default:
        return <Edit className="h-4 w-4" />;
    }
  };

  const renderElement = (element: PageElement) => {
    const isEditing = editingElementId === element.id;

    if (isEditing) {
      return (
        <Card key={element.id} className="border-2 border-sage-500">
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              {getElementIcon(element.type)}
              <span className="font-semibold text-sm text-gray-600">
                {element.type.toUpperCase()} - {element.id}
              </span>
            </div>

            {element.type === 'img' || element.type === 'hero' ? (
              <>
                <ImageSelector
                  currentImage={editImageUrl}
                  onSelect={setEditImageUrl}
                  label="Image"
                />
                {editImageUrl && (
                  <div className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-gray-200">
                    <OptimizedImage
                      src={editImageUrl}
                      alt="Aperçu"
                      className="w-full h-full object-cover"
                      width={400}
                      height={192}
                    />
                  </div>
                )}
              </>
            ) : (
              <Textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                rows={element.type.startsWith('h') ? 2 : 6}
                className="w-full"
                placeholder={`Contenu ${element.type}`}
              />
            )}

            <div className="flex gap-2">
              <Button onClick={handleSaveElement} size="sm" className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                Sauvegarder
              </Button>
              <Button onClick={handleCancelEdit} variant="outline" size="sm">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    return (
      <Card key={element.id} className="hover:border-sage-300 transition-colors">
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {getElementIcon(element.type)}
                <span className="text-xs font-medium text-gray-500">
                  {element.type.toUpperCase()}
                </span>
              </div>

              {element.type === 'img' || element.type === 'hero' ? (
                <div className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-gray-200">
                  <OptimizedImage
                    src={element.imageUrl || element.content}
                    alt={element.metadata?.alt || element.id}
                    className="w-full h-full object-cover"
                    width={400}
                    height={192}
                  />
                </div>
              ) : element.type.startsWith('h') ? (
                <div className={`font-dancing text-sage-700 ${
                  element.type === 'h1' ? 'text-3xl font-bold' :
                  element.type === 'h2' ? 'text-2xl font-semibold' :
                  element.type === 'h3' ? 'text-xl font-semibold' :
                  'text-lg'
                }`}>
                  {element.content}
                </div>
              ) : (
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {element.content}
                </p>
              )}
            </div>

            <Button
              onClick={() => handleEditElement(element)}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 flex-shrink-0"
            >
              <Edit className="h-4 w-4" />
              Modifier
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  if (!structure) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center py-8">
            <div className="w-8 h-8 border-2 border-sage-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Chargement de la structure...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Image Hero */}
      {structure.heroImage && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="h-5 w-5" />
              Image Hero
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-64 rounded-lg overflow-hidden border-2 border-gray-200">
              <OptimizedImage
                src={structure.heroImage}
                alt={`Hero ${pageName}`}
                className="w-full h-full object-cover"
                width={800}
                height={256}
              />
            </div>
            <Button
              onClick={() => {
                const heroElement: PageElement = {
                  id: 'hero-image',
                  type: 'hero',
                  content: structure.heroImage || '',
                  imageUrl: structure.heroImage,
                  order: -1,
                };
                handleEditElement(heroElement);
              }}
              variant="outline"
              className="mt-4"
            >
              <Edit className="h-4 w-4 mr-2" />
              Modifier l'image hero
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Structure de la page */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Structure de la page : {pageName}</CardTitle>
            <Button
              onClick={() => setShowAddElement(!showAddElement)}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Ajouter un élément
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {showAddElement && (
            <Card className="border-2 border-dashed border-sage-300">
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium text-gray-700">Type :</label>
                  <Select value={newElementType} onValueChange={(v: 'h2' | 'h3' | 'p' | 'img') => setNewElementType(v)}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="h2">Titre H2</SelectItem>
                      <SelectItem value="h3">Titre H3</SelectItem>
                      <SelectItem value="p">Paragraphe</SelectItem>
                      <SelectItem value="img">Image</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {newElementType === 'img' ? (
                  <ImageSelector
                    currentImage={newElementContent}
                    onSelect={setNewElementContent}
                    label="Image"
                  />
                ) : (
                  <Textarea
                    value={newElementContent}
                    onChange={(e) => setNewElementContent(e.target.value)}
                    rows={newElementType.startsWith('h') ? 2 : 4}
                    placeholder={`Contenu ${newElementType}`}
                  />
                )}

                <div className="flex gap-2">
                  <Button onClick={handleAddElement} size="sm" disabled={!newElementContent.trim()}>
                    <Plus className="h-4 w-4 mr-2" />
                    Ajouter
                  </Button>
                  <Button onClick={() => {
                    setShowAddElement(false);
                    setNewElementContent('');
                  }} variant="outline" size="sm">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {structure.elements.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p>Aucun élément trouvé dans cette page</p>
              <Button onClick={() => setShowAddElement(true)} className="mt-4">
                Ajouter le premier élément
              </Button>
            </div>
          ) : (
            structure.elements
              .sort((a, b) => a.order - b.order)
              .map(element => renderElement(element))
          )}
        </CardContent>
      </Card>
    </div>
  );
};

