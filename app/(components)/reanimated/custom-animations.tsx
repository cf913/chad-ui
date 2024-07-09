import { Content, Header, ScrollContainer, ThemedText } from '@/components/ui'
import React from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withRepeat,
} from 'react-native-reanimated'

const duration = 2000

export default function CustomAnimationsScreen() {
  const { width } = useWindowDimensions()
  const defaultAnim = useSharedValue<number>(width / 2 - 40)
  const linear = useSharedValue<number>(width / 2 - 40)

  const animatedDefault = useAnimatedStyle(() => ({
    transform: [{ translateX: defaultAnim.value }],
  }))
  const animatedChanged = useAnimatedStyle(() => ({
    transform: [{ translateX: linear.value }],
  }))

  React.useEffect(() => {
    linear.value = withRepeat(
      withTiming(-linear.value, {
        duration,
        easing: Easing.linear,
      }),
      -1,
      true,
    )
    defaultAnim.value = withRepeat(
      withTiming(-defaultAnim.value, {
        duration,
      }),
      -1,
      true,
    )
  }, [])

  return (
    <ScrollContainer withInsets={false}>
      <Content withInsets>
        <Header title="withTiming" />
        <View style={styles.container}>
          <Animated.View style={[styles.box, animatedDefault]}>
            <ThemedText style={styles.text}>inout</ThemedText>
          </Animated.View>
          <Animated.View style={[styles.box, animatedChanged]}>
            <ThemedText style={styles.text}>linear</ThemedText>
          </Animated.View>
        </View>
      </Content>
    </ScrollContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  box: {
    height: 80,
    width: 80,
    margin: 20,
    borderWidth: 1,
    borderColor: '#b58df1',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#b58df1',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})
