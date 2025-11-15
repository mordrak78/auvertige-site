import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Edit, Save, X, Plus, Trash2, Type, Heading } from 'lucide-react';
import { DEFAULT_PAGE_TEXTS, getPageTexts, savePageText, type PageTextElement } from '@/data/pageTexts';
import { toast } from 'sonner';

interface PageTextsEditorProps {
  pageId: string;
  pageName: string;
}

export const PageTextsEditor: React.FC<PageTextsEditorProps> = ({
  pageId,
  pageName,
}) => {
  const [texts, setTexts] = React.useState<Array<PageTextElement & { currentContent?: string }>>([]);
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [editContent, setEditContent] = React.useState('');
  const [showAddForm, setShowAddForm] = React.useState(false);
  const [newElement, setNewElement] = React.useState({
    type: 'p' as PageTextElement['type'],
    content: '',
    location: '',
  });

  React.useEffect(() => {
    loadTexts();
  }, [pageId]);

  const loadTexts = () => {
    const pageTexts = getPageTexts(pageId);
    setTexts(pageTexts);
  };

  const handleEdit = (element: PageTextElement & { currentContent?: string }) => {
    setEditingId(element.id);
    setEditContent(element.currentContent || element.defaultContent);
  };

  const handleSave = () => {
    if (!editingId) return;
    
    const success = savePageText(editingId, editContent);
    if (success) {
      toast.success('Texte sauvegardé');
      setEditingId(null);
      setEditContent('');
      loadTexts();
    } else {
      toast.error('Erreur lors de la sauvegarde');
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditContent('');
  };

  const handleAdd = () => {
    if (!newElement.content.trim()) {
      toast.error('Veuillez saisir un contenu');
      return;
    }

    const newId = `${pageId}-${newElement.type}-${Date.now()}`;
    const success = savePageText(newId, newElement.content);
    
    if (success) {
      toast.success('Nouveau texte ajouté');
      setShowAddForm(false);
      setNewElement({ type: 'p', content: '', location: '' });
      loadTexts();
    } else {
      toast.error('Erreur lors de l\'ajout');
    }
  };

  const handleDelete = (elementId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce texte ?')) return;
    
    // Supprimer le texte édité (retour au défaut)
    try {
      const data = localStorage.getItem('auvertige_content_data');
      if (data) {
        const contentData = JSON.parse(data);
        if (contentData.pageTexts && contentData.pageTexts[elementId]) {
          delete contentData.pageTexts[elementId];
          localStorage.setItem('auvertige_content_data', JSON.stringify(contentData));
          toast.success('Texte supprimé (retour au défaut)');
          loadTexts();
        }
      }
    } catch (error) {
      toast.error('Erreur lors de la suppression');
    }
  };

  const getIcon = (type: PageTextElement['type']) => {
    if (type.startsWith('h')) return <Heading className="h-4 w-4" />;
    return <Type className="h-4 w-4" />;
  };

  const pageTextsConfig = DEFAULT_PAGE_TEXTS[pageId];
  const hasDefaultTexts = pageTextsConfig && pageTextsConfig.elements.length > 0;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Textes de la page : {pageName}</CardTitle>
            <Button
              onClick={() => setShowAddForm(!showAddForm)}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Ajouter un texte
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {showAddForm && (
            <Card className="border-2 border-dashed border-sage-300">
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium text-gray-700">Type :</label>
                  <select
                    value={newElement.type}
                    onChange={(e) => setNewElement({ ...newElement, type: e.target.value as PageTextElement['type'] })}
                    className="px-3 py-2 border rounded-md"
                  >
                    <option value="h1">Titre H1</option>
                    <option value="h2">Titre H2</option>
                    <option value="h3">Titre H3</option>
                    <option value="p">Paragraphe</option>
                    <option value="li">Liste</option>
                    <option value="span">Texte</option>
                  </select>
                </div>
                <Input
                  value={newElement.location}
                  onChange={(e) => setNewElement({ ...newElement, location: e.target.value })}
                  placeholder="Emplacement (optionnel)"
                />
                <Textarea
                  value={newElement.content}
                  onChange={(e) => setNewElement({ ...newElement, content: e.target.value })}
                  rows={newElement.type.startsWith('h') ? 2 : 4}
                  placeholder="Contenu"
                />
                <div className="flex gap-2">
                  <Button onClick={handleAdd} size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Ajouter
                  </Button>
                  <Button onClick={() => setShowAddForm(false)} variant="outline" size="sm">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {texts.length === 0 && !hasDefaultTexts ? (
            <div className="text-center py-8 text-gray-500">
              <p>Aucun texte configuré pour cette page</p>
              <p className="text-sm mt-2">Utilisez "Ajouter un texte" pour créer des éléments éditable</p>
            </div>
          ) : (
            texts
              .sort((a, b) => a.order - b.order)
              .map((element) => {
                const isEditing = editingId === element.id;
                const currentContent = element.currentContent || element.defaultContent;
                const isEdited = element.currentContent !== undefined && element.currentContent !== element.defaultContent;

                return (
                  <Card key={element.id} className={isEdited ? 'border-sage-500' : ''}>
                    <CardContent className="p-4">
                      {isEditing ? (
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 mb-2">
                            {getIcon(element.type)}
                            <span className="text-xs font-medium text-gray-500">
                              {element.type.toUpperCase()} - {element.location || element.id}
                            </span>
                          </div>
                          <Textarea
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                            rows={element.type.startsWith('h') ? 2 : 6}
                            className="w-full"
                          />
                          <div className="flex gap-2">
                            <Button onClick={handleSave} size="sm" className="flex items-center gap-2">
                              <Save className="h-4 w-4" />
                              Sauvegarder
                            </Button>
                            <Button onClick={handleCancel} variant="outline" size="sm">
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {getIcon(element.type)}
                              <span className="text-xs font-medium text-gray-500">
                                {element.type.toUpperCase()}
                              </span>
                              {element.location && (
                                <span className="text-xs text-gray-400">({element.location})</span>
                              )}
                              {isEdited && (
                                <span className="text-xs bg-sage-100 text-sage-700 px-2 py-1 rounded">
                                  Modifié
                                </span>
                              )}
                            </div>
                            <div className={`${
                              element.type === 'h1' ? 'text-2xl font-bold' :
                              element.type === 'h2' ? 'text-xl font-semibold' :
                              element.type === 'h3' ? 'text-lg font-semibold' :
                              'text-base'
                            } text-gray-700 whitespace-pre-line`}>
                              {currentContent}
                            </div>
                            {element.defaultContent !== currentContent && (
                              <div className="mt-2 text-xs text-gray-400">
                                <strong>Par défaut :</strong> {element.defaultContent.substring(0, 100)}...
                              </div>
                            )}
                          </div>
                          <div className="flex gap-2 flex-shrink-0">
                            <Button
                              onClick={() => handleEdit(element)}
                              variant="outline"
                              size="sm"
                              className="flex items-center gap-2"
                            >
                              <Edit className="h-4 w-4" />
                              Modifier
                            </Button>
                            {isEdited && (
                              <Button
                                onClick={() => handleDelete(element.id)}
                                variant="outline"
                                size="sm"
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })
          )}
        </CardContent>
      </Card>
    </div>
  );
};

