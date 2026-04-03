import { createContext, useContext, useReducer, type ReactNode } from 'react'
import type { AppState, AppAction } from '../types'
import { appReducer, initialState } from './AppReducer'

interface AppContextValue {
  state: AppState
  dispatch: React.Dispatch<AppAction>
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useAppContext must be used within AppProvider')
  return ctx
}
