import {StyleSheet} from 'react-native'
import {ThemedView} from './ThemedView'

export function Spacer() {
  return <ThemedView style={styles.container}></ThemedView>
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
})
