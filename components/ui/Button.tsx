import {Pressable, PressableProps, TextStyle, ViewStyle} from 'react-native'
import {ThemedText} from './ThemedText'
import {useThemeColor} from '@/hooks/useThemeColor'
import {useLocalTheme} from './ThemeProvider/UIThemeProvider'

type ButtonProps = {
  text: string
} & PressableProps

export const LAYOUT = {
  content: {
    padding: 16,
  },
  button: {
    height: 48,
    borderRadius: 12,
  },
}

export default function Button(props: ButtonProps) {
  const {onPress, text} = props
  const {layout} = useLocalTheme()

  const borderColor = useThemeColor({}, 'text')

  const styles: {[key: string]: ViewStyle | TextStyle} = {
    container: {
      borderWidth: 1,
      borderColor,
      width: '100%',
      height: layout.button.height,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: layout.button.borderRadius,
    },
    text: {
      textAlign: 'center',
    },
  }

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <ThemedText style={styles.text}>{text}</ThemedText>
    </Pressable>
  )
}
