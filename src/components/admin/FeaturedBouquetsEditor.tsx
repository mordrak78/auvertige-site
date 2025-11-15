import * as React from 'react';
import { Plus, Trash2, GripVertical, Save, ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/Label';
import { useFeaturedBouquets } from '@/hooks/useFeaturedBouquets';
import { ImageSelector } from './ImageSelector';
import { toast } from 'sonner';
import { OptimizedImage } from '@/components/shared/OptimizedImage';
import { downloadContentData } from '@/utils/contentStorage';

export const FeaturedBouquetsEditor: React.FC = () => {
  const {
    bouquets,
    loading,
    saving,
    addBouquet,
    updateBouquet,
    removeBouquet,
    reorder,
  } = useFeaturedBouquets();

  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [newBouquet, setNewBouquet] = React.useState({
    title: '',
    description: '',
    image: '',
    price: 0,
  });

  const handleAddBouquet = async () => {
    if (!newBouquet.title || !newBouquet.image) {
      toast.error('Veuillez remplir au moins le titre et l\'image');
      return;
    }

    if (bouquets.length >= 4) {
      toast.error('Vous ne pouvez avoir que 4 bouquets phares maximum');
      return;
    }

    const result = await addBouquet(newBouquet);
    if (result) {
      toast.success('Bouquet ajouté avec succès');
      setNewBouquet({ title: '', description: '', image: '', price: 0 });
    } else {
      toast.error('Erreur lors de l\'ajout du bouquet');
    }
  };

  const handleUpdateBouquet = async (id: string, updates: Partial<typeof newBouquet>) => {
    const success = await updateBouquet(id, updates);
    if (success) {
      toast.success('Bouquet mis à jour');
      setEditingId(null);
    } else {
      toast.error('Erreur lors de la mise à jour');
    }
  };

  const handleRemoveBouquet = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce bouquet phare ?')) {
      return;
    }

    const success = await removeBouquet(id);
    if (success) {
      toast.success('Bouquet supprimé');
    } else {
      toast.error('Erreur lors de la suppression');
    }
  };

  const handleMoveUp = async (index: number) => {
    if (index === 0) return;
    const newOrder = [...bouquets.map(b => b.id)];
    [newOrder[index - 1], newOrder[index]] = [newOrder[index], newOrder[index - 1]];
    await reorder(newOrder);
  };

  const handleMoveDown = async (index: number) => {
    if (index === bouquets.length - 1) return;
    const newOrder = [...bouquets.map(b => b.id)];
    [newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]];
    await reorder(newOrder);
  };

  const handleExport = () => {
    downloadContentData();
    toast.success('Données exportées avec succès');
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
            <CardTitle>Gestion des 4 bouquets/compositions phares</CardTitle>
            <Button
              onClick={handleExport}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              Exporter les données
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Liste des bouquets existants */}
          <div className="space-y-4">
            <Label>Bouquets phares ({bouquets.length}/4)</Label>
            
            {bouquets.map((bouquet, index) => (
              <Card key={bouquet.id} className="border-2">
                <CardContent className="p-4">
                  {editingId === bouquet.id ? (
                    <BouquetEditForm
                      bouquet={bouquet}
                      onSave={(updates) => handleUpdateBouquet(bouquet.id, updates)}
                      onCancel={() => setEditingId(null)}
                    />
                  ) : (
                    <div className="flex items-start gap-4">
                      {/* Contrôles de réorganisation */}
                      <div className="flex flex-col gap-1 pt-2">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleMoveUp(index)}
                          disabled={index === 0}
                          className="h-6 w-6 p-0"
                        >
                          <ArrowUp className="h-3 w-3" />
                        </Button>
                        <div className="flex items-center justify-center h-6">
                          <GripVertical className="h-4 w-4 text-gray-400" />
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleMoveDown(index)}
                          disabled={index === bouquets.length - 1}
                          className="h-6 w-6 p-0"
                        >
                          <ArrowDown className="h-3 w-3" />
                        </Button>
                      </div>

                      {/* Image */}
                      <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-gray-200 flex-shrink-0">
                        <OptimizedImage
                          src={bouquet.image}
                          alt={bouquet.title}
                          className="w-full h-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>

                      {/* Informations */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-lg mb-1">{bouquet.title}</h4>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {bouquet.description}
                        </p>
                        <p className="text-lg font-bold text-sage-700">
                          {bouquet.price.toFixed(2)} €
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingId(bouquet.id)}
                        >
                          Modifier
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => handleRemoveBouquet(bouquet.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}

            {bouquets.length === 0 && (
              <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-500 mb-4">Aucun bouquet phare configuré</p>
                <p className="text-sm text-gray-400">
                  Ajoutez jusqu'à 4 bouquets qui seront mis en avant sur votre site
                </p>
              </div>
            )}
          </div>

          {/* Formulaire d'ajout */}
          {bouquets.length < 4 && (
            <Card className="border-2 border-dashed">
              <CardHeader>
                <CardTitle className="text-lg">Ajouter un nouveau bouquet phare</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="new-title">Titre *</Label>
                    <Input
                      id="new-title"
                      value={newBouquet.title}
                      onChange={(e) =>
                        setNewBouquet({ ...newBouquet, title: e.target.value })
                      }
                      placeholder="Ex: Bouquet Romantique"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new-price">Prix (€) *</Label>
                    <Input
                      id="new-price"
                      type="number"
                      step="0.01"
                      min="0"
                      value={newBouquet.price || ''}
                      onChange={(e) =>
                        setNewBouquet({
                          ...newBouquet,
                          price: parseFloat(e.target.value) || 0,
                        })
                      }
                      placeholder="45.00"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new-description">Description</Label>
                  <textarea
                    id="new-description"
                    value={newBouquet.description}
                    onChange={(e) =>
                      setNewBouquet({ ...newBouquet, description: e.target.value })
                    }
                    placeholder="Description du bouquet..."
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-500"
                  />
                </div>

                <div className="space-y-2">
                  <ImageSelector
                    currentImage={newBouquet.image}
                    onSelect={(url) => setNewBouquet({ ...newBouquet, image: url })}
                    label="Image vignette *"
                  />
                </div>

                <Button
                  onClick={handleAddBouquet}
                  disabled={saving || !newBouquet.title || !newBouquet.image}
                  className="w-full flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Ajouter le bouquet
                </Button>
              </CardContent>
            </Card>
          )}

          {bouquets.length >= 4 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Maximum atteint :</strong> Vous avez configuré 4 bouquets phares.
                Supprimez-en un pour en ajouter un nouveau.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

interface BouquetEditFormProps {
  bouquet: {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
  };
  onSave: (updates: Partial<{ title: string; description: string; image: string; price: number }>) => void;
  onCancel: () => void;
}

const BouquetEditForm: React.FC<BouquetEditFormProps> = ({
  bouquet,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = React.useState({
    title: bouquet.title,
    description: bouquet.description,
    image: bouquet.image,
    price: bouquet.price,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor={`edit-title-${bouquet.id}`}>Titre *</Label>
          <Input
            id={`edit-title-${bouquet.id}`}
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`edit-price-${bouquet.id}`}>Prix (€) *</Label>
          <Input
            id={`edit-price-${bouquet.id}`}
            type="number"
            step="0.01"
            min="0"
            value={formData.price || ''}
            onChange={(e) =>
              setFormData({
                ...formData,
                price: parseFloat(e.target.value) || 0,
              })
            }
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`edit-description-${bouquet.id}`}>Description</Label>
        <textarea
          id={`edit-description-${bouquet.id}`}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-500"
        />
      </div>

      <div className="space-y-2">
        <ImageSelector
          currentImage={formData.image}
          onSelect={(url) => setFormData({ ...formData, image: url })}
          label="Image vignette *"
        />
      </div>

      <div className="flex gap-2 justify-end">
        <Button type="button" variant="outline" onClick={onCancel}>
          Annuler
        </Button>
        <Button type="submit">Sauvegarder</Button>
      </div>
    </form>
  );
};

