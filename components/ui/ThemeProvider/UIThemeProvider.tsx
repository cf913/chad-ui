import {ReactNode, createContext, useContext, useReducer} from 'react'
import themeReducer, {
  INIT_THEME,
  ThemeAction,
  ThemeState,
} from './theme-reducer'

export const UIThemeContext = createContext<ThemeState>(INIT_THEME)

export const UIThemeDispatchContext =
  createContext<React.Dispatch<ThemeAction> | null>(null)

export const UIThemeProvider = ({children}: {children: ReactNode}) => {
  const [theme, dispatch] = useReducer(themeReducer, INIT_THEME)

  return (
    <UIThemeContext.Provider value={theme}>
      <UIThemeDispatchContext.Provider value={dispatch}>
        {children}
      </UIThemeDispatchContext.Provider>
    </UIThemeContext.Provider>
  )
}

export function useLocalTheme() {
  const value = useContext(UIThemeContext)
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error(
        'useLocalSettings must be wrapped in a <UIThemeProvider />',
      )
    }
  }
  return value
}
