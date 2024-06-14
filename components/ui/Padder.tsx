import {useLocalTheme} from './ThemeProvider/UIThemeProvider'
import {ThemedView} from './ThemedView'

export function Padder({h = 1}) {
  const {layout} = useLocalTheme()
  return (
    <ThemedView
      style={{height: h * layout.padding, backgroundColor: 'transparent'}}
    />
  )
}
