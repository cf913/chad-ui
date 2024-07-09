import {
  Col,
  Content,
  Divider,
  Header,
  Padder,
  ScrollContainer,
  ThemedText,
} from '@/components/ui'
import { StyleSheet, useWindowDimensions } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

const BOUNDARY_OFFSET = 20
const SIZE = 120

export default function HandlingGesturesScreen() {
  const { width } = useWindowDimensions()
  const pressed = useSharedValue<boolean>(false)
  const offset = useSharedValue<number>(0)
  const offsetY = useSharedValue<number>(0)

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true
    })
    .onChange(event => {
      offset.value += event.changeX
      offsetY.value += event.changeY
    })
    .onFinalize(event => {
      offsetY.value = withDecay({
        velocity: event.velocityY,
        rubberBandEffect: true,
        clamp: [
          -(width / 2) + SIZE / 2 + BOUNDARY_OFFSET,
          width / 2 - SIZE / 2 - BOUNDARY_OFFSET,
        ],
      })
      offset.value = withDecay({
        velocity: event.velocityX,
        rubberBandEffect: true,
        clamp: [
          -(width / 2) + SIZE / 2 + BOUNDARY_OFFSET,
          width / 2 - SIZE / 2 - BOUNDARY_OFFSET,
        ],
      })
      pressed.value = false
    })

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: pressed.value ? '#FFE04B' : '#B58DF1',
    transform: [
      { translateX: offset.value },
      { translateY: offsetY.value },
      { scale: withTiming(pressed.value ? 1.2 : 1) },
    ],
  }))

  return (
    <ScrollContainer withInsets={false}>
      <Content withInsets style={{ flex: 1 }}>
        <Header title="Handling Gestures" />
        <Col style={{ alignItems: 'center' }}>
          <ThemedText style={{ alignSelf: 'flex-start' }}>Tap and Pan</ThemedText>
          <ThemedText style={{ alignSelf: 'flex-start' }}>withDecay</ThemedText>
        </Col>
        <Padder />
        <Divider />
        <Padder />
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.circle, animatedStyles]} />
        </GestureDetector>
      </Content>
    </ScrollContainer>
  )
}

const styles = StyleSheet.create({
  circle: {
    height: 120,
    width: 120,
    borderRadius: 500,
  },
})
