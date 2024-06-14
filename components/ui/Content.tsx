import {ViewProps, ViewStyle} from 'react-native'
import {ThemedView} from './ThemedView'
import {useLocalTheme} from './ThemeProvider/UIThemeProvider'

type ContentProps = {} & ViewProps

export function Content(props: ContentProps) {
  const {children, style = {}} = props
  const {layout} = useLocalTheme()

  const styles: {[key: string]: ViewStyle} = {
    container: {
      paddingHorizontal: layout.padding,
    },
  }
  return <ThemedView style={[styles.container, style]}>{children}</ThemedView>
}
