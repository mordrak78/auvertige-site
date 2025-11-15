import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useSeasonalContent, SeasonalContentType } from '@/hooks/useSeasonalContent';
import { Calendar, Heart, Flower, Leaf, RotateCcw, Save } from 'lucide-react';
import { toast } from 'sonner';

interface SeasonalItem {
  id: SeasonalContentType;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  period: string;
  color: string;
}

const seasonalItems: SeasonalItem[] = [
  {
    id: 'saint-valentin',
    label: 'Saint-Valentin',
    description: 'Bouquets romantiques pour la Saint-Valentin (février)',
    icon: Heart,
    period: 'Février',
    color: 'pink',
  },
  {
    id: 'fete-des-meres',
    label: 'Fête des Mères',
    description: 'Créations florales pour honorer les mamans (mai)',
    icon: Heart,
    period: 'Mai',
    color: 'purple',
  },
  {
    id: 'fete-des-peres',
    label: 'Fête des Pères',
    description: 'Bouquets pour célébrer les papas (juin)',
    icon: Leaf,
    period: 'Juin',
    color: 'blue',
  },
  {
    id: 'toussaint',
    label: 'Toussaint',
    description: 'Fleurs et compositions pour la Toussaint (novembre)',
    icon: Flower,
    period: 'Novembre',
    color: 'sage',
  },
];

export const SeasonalContentManagement: React.FC = () => {
  const { seasonalContent, updateSeason, resetToDefaults } = useSeasonalContent();
  const [hasChanges, setHasChanges] = React.useState(false);

  const handleToggle = (season: SeasonalContentType, checked: boolean) => {
    updateSeason(season, checked);
    setHasChanges(true);
  };

  const handleSave = () => {
    // Les changements sont déjà sauvegardés automatiquement via le hook
    toast.success('Paramètres saisonniers sauvegardés avec succès');
    setHasChanges(false);
  };

  const handleReset = () => {
    resetToDefaults();
    setHasChanges(true);
    toast.info('Paramètres réinitialisés');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-sage-700 mb-2">
            Gestion du contenu saisonnier
          </h2>
          <p className="text-sage-600">
            Activez ou désactivez le contenu saisonnier sur la page Événements.
            Le contenu activé sera mis en avant, le contenu désactivé apparaîtra en bas avec un encart "à venir".
          </p>
        </div>
        <div className="flex gap-2">
          {hasChanges && (
            <Button onClick={handleSave} className="bg-poppy-500 hover:bg-poppy-600">
              <Save className="w-4 h-4 mr-2" />
              Enregistrer
            </Button>
          )}
          <Button onClick={handleReset} variant="outline">
            <RotateCcw className="w-4 h-4 mr-2" />
            Réinitialiser
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {seasonalItems.map((item) => {
          const Icon = item.icon;
          const isActive = seasonalContent[item.id];
          
          return (
            <Card key={item.id} className={`border-2 ${isActive ? 'border-poppy-300 bg-poppy-50' : 'border-sage-200'}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isActive 
                        ? `bg-${item.color}-100` 
                        : 'bg-sage-100'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        isActive 
                          ? `text-${item.color}-600` 
                          : 'text-sage-400'
                      }`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{item.label}</CardTitle>
                      <CardDescription className="mt-1">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {item.period}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={item.id}
                      checked={isActive}
                      onCheckedChange={(checked) => handleToggle(item.id, checked as boolean)}
                    />
                    <Label htmlFor={item.id} className="cursor-pointer">
                      {isActive ? 'Activé' : 'Désactivé'}
                    </Label>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sage-600 text-sm mb-4">{item.description}</p>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                  isActive
                    ? 'bg-poppy-100 text-poppy-700'
                    : 'bg-sage-100 text-sage-600'
                }`}>
                  {isActive ? (
                    <>
                      <span className="w-2 h-2 bg-poppy-500 rounded-full"></span>
                      Mis en avant sur la page Événements
                    </>
                  ) : (
                    <>
                      <span className="w-2 h-2 bg-sage-400 rounded-full"></span>
                      Encart "à venir" en bas de page
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-sage-50 border-sage-200">
        <CardHeader>
          <CardTitle className="text-lg">Comment ça fonctionne ?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-sage-600">
          <p>
            <strong>Contenu activé :</strong> Le contenu saisonnier apparaît dans la section principale 
            "Saisons & Fêtes" de la page Événements, mis en avant avec un design coloré.
          </p>
          <p>
            <strong>Contenu désactivé :</strong> Le contenu apparaît en bas de la page avec un encart 
            discret "Nos créations pour [Saison] (à venir)", permettant de garder le contenu visible 
            toute l'année sans casser le SEO.
          </p>
          <p className="text-xs text-sage-500 mt-4">
            💡 Astuce : Activez le contenu 1-2 mois avant la saison pour maximiser la visibilité.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

