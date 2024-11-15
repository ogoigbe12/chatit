import { View, Text } from 'react-native'
import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react'
import { Session, User } from '@supabase/supabase-js'
import { supabase } from '../lib/supbase'

type AuthContextType = {
    session: Session | null
    user: User | null
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    session: null
})
export default function AuthProvider({children}: PropsWithChildren) {
    const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return (
    
    <AuthContext.Provider value={{session, user:session?.user}}>
    {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)