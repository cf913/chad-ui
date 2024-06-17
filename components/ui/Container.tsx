import { ViewProps } from 'react-native'
import { ThemedView } from './ThemedView'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type ContainerProps = {
  withInsets?: boolean
} & ViewProps

export function Container(props: ContainerProps) {
  const { withInsets = true, children, style = {} } = props
  const insets = useSafeAreaInsets()
  return (
    <ThemedView
      style={[
        {
          paddingTop: withInsets ? insets.top : 0,
          // paddingBottom: withInsets ? insets.bottom : 0,
          flexGrow: 1,
        },
        style,
      ]}
    >
      {children}
    </ThemedView>
  )
}
