import {ViewProps} from 'react-native'
import {ThemedView} from './ThemedView'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

type ContainerProps = {} & ViewProps

export default function Container(props: ContainerProps) {
  const {children} = props
  const insets = useSafeAreaInsets()
  return <ThemedView style={{paddingTop: insets.top}}>{children}</ThemedView>
}
