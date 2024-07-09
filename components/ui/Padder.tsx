import { useLocalTheme } from './ThemeProvider/UIThemeProvider'
import { ThemedView } from './ThemedView'

export function Padder({ h = 1, w = 0 }) {
  const { layout } = useLocalTheme()
  return (
    <ThemedView
      style={{
        height: h * layout.padding,
        width: w * layout.padding,
        backgroundColor: 'transparent',
      }}
    />
  )
}
