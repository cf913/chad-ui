import {ViewStyle} from 'react-native'
import {ThemedView} from './ThemedView'
import {useThemeColor} from '@/hooks/useThemeColor'

export function Divider() {
  const color = useThemeColor({}, 'text')

  const styles: ViewStyle = {height: 1, backgroundColor: color, width: '100%'}

  return <ThemedView style={styles} />
}
