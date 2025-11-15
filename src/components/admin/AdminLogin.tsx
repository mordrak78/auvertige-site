import React, { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/Label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Lock, LogIn } from 'lucide-react'

interface AdminLoginProps {
  onSuccess?: () => void
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { signIn } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const VALID_ID = 'Proximind44300-auvertige'
    const VALID_PWD = 'Proximind44300-auvertigeadmin'

    if (email.trim() === VALID_ID && password.trim() === VALID_PWD) {
      try { 
        await signIn(email, password)
        localStorage.setItem('auvertige_admin_flag', 'true')
        onSuccess?.()
      } catch (err) {
        setError('Erreur lors de la connexion')
      }
      setLoading(false)
      return
    }

    const { error } = await signIn(email, password)

    if (error) {
      setError('Email ou mot de passe incorrect')
    } else {
      // Sauvegarder le flag d'authentification
      if (typeof window !== 'undefined') {
        localStorage.setItem('auvertige_admin_flag', 'true')
      }
      onSuccess?.()
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-cream-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-sage-100 p-3 rounded-full">
              <Lock className="h-6 w-6 text-sage-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-dancing text-sage-700">
            Administration Au Vertige
          </CardTitle>
          <p className="text-sage-600">
            Connectez-vous pour accéder à l'interface d'administration
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email">Identifiant</Label>
              <Input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin"
                required
                className="border-sage-200 focus:border-sage-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="border-sage-200 focus:border-sage-400"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-sage-600 hover:bg-sage-700"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Connexion...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  Se connecter
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminLogin
