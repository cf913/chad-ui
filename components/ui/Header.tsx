import {Pressable, ViewProps} from 'react-native'
import {Row} from './Row'
import {AnimatedView, ThemedView} from './ThemedView'
import {Padder} from './Padder'
import {ThemedText} from './ThemedText'
import {router} from 'expo-router'
import {Feather} from '@expo/vector-icons'
import {useThemeColor} from '@/hooks/useThemeColor'
import {
  FadeIn,
  FadeInLeft,
  FadeInRight,
  FadeOut,
  FadeOutRight,
  RollInRight,
  RollOutRight,
  SlideInRight,
  SlideOutRight,
} from 'react-native-reanimated'

type HeaderProps = {
  title?: string
  back?: boolean
} & ViewProps

export function Header(props: HeaderProps) {
  const {title, back = true} = props
  const color = useThemeColor({}, 'text')
  return (
    <ThemedView>
      <Padder />
      <Row>
        {back && (
          <AnimatedView
            entering={FadeInLeft.duration(500)}
            exiting={FadeOut.duration(100)}
          >
            <Pressable onPress={router.back} hitSlop={30} style={{zIndex: 2}}>
              <Feather
                name="chevron-left"
                size={28}
                color={color}
                style={{marginLeft: -10}}
              />
            </Pressable>
          </AnimatedView>
        )}
        <AnimatedView
          entering={FadeInRight.duration(500)}
          exiting={FadeOutRight}
        >
          <ThemedText type="title">{title}</ThemedText>
        </AnimatedView>
      </Row>
      <Padder />
    </ThemedView>
  )
}
