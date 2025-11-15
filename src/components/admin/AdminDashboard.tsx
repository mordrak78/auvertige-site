import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  FileText, 
  Image, 
  Calendar,
  Flower,
  Edit,
  Clock
} from 'lucide-react'
import { getRecentHistory } from '@/utils/contentHistory'
import { formatDistanceToNow } from 'date-fns'

const AdminDashboard: React.FC = () => {
  const [recentHistory, setRecentHistory] = React.useState(getRecentHistory(10))

  React.useEffect(() => {
    // Rafraîchir l'historique toutes les 2 secondes
    const interval = setInterval(() => {
      setRecentHistory(getRecentHistory(10))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const getIcon = (type: string) => {
    switch (type) {
      case 'page':
        return FileText
      case 'bouquet':
        return Flower
      case 'image':
        return Image
      default:
        return Edit
    }
  }

  const formatTime = (timestamp: string) => {
    try {
      return formatDistanceToNow(new Date(timestamp), { addSuffix: true })
    } catch {
      return 'Récemment'
    }
  }

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-600 mt-2">
          Vue d'ensemble de votre site Au Vertige
        </p>
      </div>

      {/* Dernières modifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Dernières modifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          {recentHistory.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p>Aucune modification récente</p>
            </div>
          ) : (
            <div className="space-y-4">
              {recentHistory.map((entry) => {
                const Icon = getIcon(entry.type)
                return (
                  <div key={entry.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="bg-sage-50 p-2 rounded-full flex-shrink-0">
                      <Icon className="h-4 w-4 text-sage-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        {entry.description}
                      </p>
                      {entry.pageId && (
                        <p className="text-xs text-gray-500 mt-1">
                          Page : {entry.pageId}
                        </p>
                      )}
                      <p className="text-xs text-gray-400 mt-1">
                        {formatTime(entry.timestamp)}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminDashboard
