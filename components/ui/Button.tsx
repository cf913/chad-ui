import {Pressable, PressableProps, TextStyle, ViewStyle} from 'react-native'
import {ThemedText} from './ThemedText'
import {useThemeColor} from '@/hooks/useThemeColor'
import {useLocalTheme} from './ThemeProvider/UIThemeProvider'
import {Loader} from './Loader'
import {useMemo} from 'react'

type ButtonProps = {
  text: string
  loading?: boolean
  disabled?: boolean
  outline?: boolean
} & PressableProps

export function Button(props: ButtonProps) {
  const {
    onPress,
    text,
    loading = false,
    disabled = false,
    outline = false,
  } = props
  const {layout} = useLocalTheme()

  const colorTheme = useThemeColor({}, 'tint')
  const backgroundColorTheme = useThemeColor({}, 'background')

  const borderColor = outline ? colorTheme : backgroundColorTheme
  const color = borderColor
  const backgroundColor = outline ? backgroundColorTheme : colorTheme

  const styles: {[key: string]: ViewStyle | TextStyle} = useMemo(
    () => ({
      container: {
        borderWidth: 1,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        width: '100%',
        height: layout.button.height,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: layout.button.borderRadius,
        opacity: disabled && !loading ? 0.2 : 1,
      },
      text: {
        textAlign: 'center',
        color: color,
      },
    }),
    [loading, layout],
  )

  return (
    <Pressable
      onPress={onPress}
      style={styles.container}
      disabled={disabled || loading}
    >
      {loading ? (
        <Loader />
      ) : (
        <ThemedText style={styles.text}>{text}</ThemedText>
      )}
    </Pressable>
  )
}
