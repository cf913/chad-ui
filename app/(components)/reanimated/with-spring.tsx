import { Content, Header, ScrollContainer } from '@/components/ui'
import React from 'react'
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
} from 'react-native-reanimated'

export default function App() {
  const { width } = useWindowDimensions()
  const defaultAnim = useSharedValue<number>(width / 2 - 40)
  const changedAnim = useSharedValue<number>(width / 2 - 40)

  const animatedLinear = useAnimatedStyle(() => ({
    transform: [{ translateX: defaultAnim.value }],
  }))
  const animatedChanged = useAnimatedStyle(() => ({
    transform: [{ translateX: changedAnim.value }],
  }))

  React.useEffect(() => {
    defaultAnim.value = withRepeat(withSpring(-defaultAnim.value), -1, true)
    changedAnim.value = withRepeat(
      withSpring(-changedAnim.value, {
        mass: 10,
        damping: 40,
      }),
      -1,
      true,
    )
  }, [])

  return (
    <ScrollContainer withInsets={false}>
      <Content withInsets>
        <Header title="withSpring" />
        <View style={styles.container}>
          <Animated.View style={[styles.box, animatedLinear]}>
            <Text style={styles.text}>Default</Text>
          </Animated.View>
          <Animated.View style={[styles.box, animatedChanged]}>
            <Text style={styles.text}>Heavy</Text>
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
