import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import {
  auth,
  getAuthenticatedUser,
  UserType,
} from '../firebase/authentication'

export type AuthContextType = {
  ready?: boolean
  user?: UserType | null
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  refreshUser: async () => {},
})

export function useAuth() {
  return useContext(AuthContext)
}

export function useAuthenticatedUser() {
  const { user } = useAuth()
  if (!user) throw new Error('Not Authenticated')
}

export default function AuthProvider({ children }: { children: Children }) {
  const [ready, setReady] = useState(false)
  const [user, setUser] = useState<UserType | null | undefined>()

  useEffect(() => {
    return auth.onAuthStateChanged((u) => {
      setUser(u)
      setReady(true)
    })
  }, [])

  const refreshUser = useCallback(async () => {
    if (user) {
      const currentUser = getAuthenticatedUser()
      await currentUser.reload()
      setUser({ ...currentUser })
    }
  }, [user])

  return (
    <AuthContext.Provider value={{ user, ready, refreshUser }}>
      {children}
    </AuthContext.Provider>
  )
}
