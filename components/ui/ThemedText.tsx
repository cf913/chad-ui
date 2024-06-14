import {Text, type TextProps, StyleSheet, Animated} from 'react-native'

import {useThemeColor} from '@/hooks/useThemeColor'

export type ThemedTextProps = TextProps & {
  lightColor?: string
  darkColor?: string
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'small' | 'link'
}

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({light: lightColor, dark: darkColor}, 'text')

  return (
    <Text
      style={[
        {color},
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'small' ? styles.small : undefined,
        style,
      ]}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  small: {
    fontSize: 14,
    lineHeight: 24,
  },
  link: {
    lineHeight: 24,
    fontSize: 16,
    color: '#0a7ea4',
  },
})
