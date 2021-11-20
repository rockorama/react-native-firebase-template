import React, { createContext, useContext, useEffect, useState } from 'react'

import { auth, UserType } from '../../firebase/authentication'

export type AuthContextType = {
  ready?: boolean
  user?: UserType | null
}

const AuthContext = createContext<AuthContextType>({})

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

  return (
    <AuthContext.Provider value={{ user, ready }}>
      {children}
    </AuthContext.Provider>
  )
}
