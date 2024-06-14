import {ViewProps, ViewStyle} from 'react-native'
import {ThemedView} from './ThemedView'
import {useLocalTheme} from './ThemeProvider/UIThemeProvider'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

type ContentProps = {
  withInsets?: boolean
} & ViewProps

export function Content(props: ContentProps) {
  const {children, style = {}, withInsets = false} = props
  const {layout} = useLocalTheme()
  const insets = useSafeAreaInsets()

  const styles: {[key: string]: ViewStyle} = {
    container: {
      paddingTop: withInsets ? insets.top : 0,
      paddingHorizontal: layout.padding,
    },
  }
  return <ThemedView style={[styles.container, style]}>{children}</ThemedView>
}
