import {useThemeColor} from '@/hooks/useThemeColor'
import {TextInputProps, StyleSheet, ViewStyle} from 'react-native'
import {
  NativeViewGestureHandlerProps,
  TextInput,
} from 'react-native-gesture-handler'
import {useLocalTheme} from './ThemeProvider/UIThemeProvider'

type ThemedInputProps = NativeViewGestureHandlerProps &
  TextInputProps & {
    type?: 'default' | 'outline'
  }

export function ThemedInput(props: ThemedInputProps) {
  const {value, onChangeText, type, style} = props
  const {layout} = useLocalTheme()
  const color = useThemeColor({}, 'text')

  const stylesInput: ViewStyle = {
    borderColor: color,
    height: layout.itemHeight,
    paddingHorizontal: layout.padding,
    borderRadius: layout.borderRadius,
  }

  return (
    <TextInput
      {...props}
      value={value}
      onChangeText={onChangeText}
      style={[
        {color},
        styles.input,
        stylesInput,
        type === 'default' ? styles.default : undefined,
        type === 'outline' ? styles.outline : undefined,
        style,
      ]}
    />
  )
}

const styles = StyleSheet.create({
  input: {},
  default: {},
  outline: {
    borderWidth: 1,
  },
})
