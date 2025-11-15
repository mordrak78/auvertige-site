import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Save, X } from 'lucide-react';
import { useFeaturedBouquets } from '@/hooks/useFeaturedBouquets';
import { ImageSelector } from './ImageSelector';
import { OptimizedImage } from '@/components/shared/OptimizedImage';
import { toast } from 'sonner';

export const BouquetsPage: React.FC = () => {
  const { bouquets, loading, saving, updateBouquet } = useFeaturedBouquets();
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [editData, setEditData] = React.useState<{
    title: string;
    image: string;
    price: number;
  } | null>(null);

  React.useEffect(() => {
    if (editingId && bouquets.length > 0) {
      const bouquet = bouquets.find(b => b.id === editingId);
      if (bouquet) {
        setEditData({
          title: bouquet.title,
          image: bouquet.image,
          price: bouquet.price,
        });
      }
    }
  }, [editingId, bouquets]);

  const handleSave = async () => {
    if (!editingId || !editData) return;

    const success = await updateBouquet(editingId, editData);
    if (success) {
      toast.success('Bouquet mis à jour');
      setEditingId(null);
      setEditData(null);
    } else {
      toast.error('Erreur lors de la mise à jour');
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditData(null);
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
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Bouquets phares</h1>
        <p className="text-gray-600 mt-2">
          Gérez les 4 bouquets mis en avant sur votre site
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bouquets.map((bouquet) => (
          <Card key={bouquet.id} className="overflow-hidden">
            {editingId === bouquet.id && editData ? (
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Titre</label>
                  <Input
                    value={editData.title}
                    onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Prix (€)</label>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    value={editData.price || ''}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        price: parseFloat(e.target.value) || 0,
                      })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <ImageSelector
                    currentImage={editData.image}
                    onSelect={(url) => setEditData({ ...editData, image: url })}
                    label="Image"
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex-1 flex items-center gap-2"
                  >
                    <Save className="h-4 w-4" />
                    Sauvegarder
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleCancel}
                    className="flex items-center gap-2"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            ) : (
              <>
                <div className="relative aspect-square">
                  <OptimizedImage
                    src={bouquet.image}
                    alt={bouquet.title}
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{bouquet.title}</h3>
                  <p className="text-2xl font-bold text-sage-700 mb-4">
                    {bouquet.price.toFixed(2)} €
                  </p>
                  <Button
                    onClick={() => setEditingId(bouquet.id)}
                    className="w-full"
                    variant="outline"
                  >
                    Modifier
                  </Button>
                </CardContent>
              </>
            )}
          </Card>
        ))}
      </div>

      {bouquets.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-gray-500 mb-4">Aucun bouquet phare configuré</p>
            <p className="text-sm text-gray-400">
              Utilisez l'interface d'édition pour ajouter des bouquets phares
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

