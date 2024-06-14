import {ViewStyle} from 'react-native'
import {ThemedView} from './ThemedView'
import {useThemeColor} from '@/hooks/useThemeColor'

export function Separator() {
  const color = useThemeColor({}, 'text')

  const styles: ViewStyle = {
    height: 0.4,
    backgroundColor: color,
    width: '100%',
    opacity: 0.5,
  }

  return <ThemedView style={styles} />
}
