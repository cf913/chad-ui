import {StyleSheet, ViewProps} from 'react-native'
import {ThemedView} from './ThemedView'

export function Row(props: ViewProps) {
  const {children} = props
  return (
    <ThemedView {...props} style={[styles.container, props.style]}>
      {children}
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
})
