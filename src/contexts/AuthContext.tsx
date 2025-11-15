import React, { createContext, useContext, useState } from 'react'

interface User {
  id: string
  email: string
  user_metadata?: {
    role?: string
  }
}

interface AuthContextType {
  user: User | null
  isAdmin: boolean
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAdmin: false,
  loading: true,
  signIn: async () => ({ error: null }),
  signOut: async () => {},
})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth doit être utilisé dans un AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  // Vérifier si l'utilisateur est admin
  const isAdmin = user?.email === 'admin' || user?.user_metadata?.role === 'admin'

  const signIn = async (email: string, password: string) => {
    // Simulation d'authentification simple
    if (email === 'admin' && password === 'admin') {
      const mockUser: User = {
        id: '1',
        email: 'admin',
        user_metadata: { role: 'admin' }
      }
      setUser(mockUser)
      return { error: null }
    }
    return { error: { message: 'Identifiants incorrects' } }
  }

  const signOut = async () => {
    setUser(null)
    // Nettoyer le flag d'authentification admin
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auvertige_admin_flag')
    }
  }

  const value = {
    user,
    isAdmin,
    loading,
    signIn,
    signOut,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
