import {ViewProps, ViewStyle} from 'react-native'
import {ThemedView} from './ThemedView'

type ContentProps = {} & ViewProps

export default function Content(props: ContentProps) {
  const {children} = props

  const styles: {[key: string]: ViewStyle} = {
    container: {
      paddingHorizontal: 16,
    },
  }
  return <ThemedView style={styles.container}>{children}</ThemedView>
}
