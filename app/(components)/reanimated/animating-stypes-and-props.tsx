import {
  Button,
  Content,
  Divider,
  Header,
  ScrollContainer,
} from '@/components/ui'
import React from 'react'
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import Svg, { Circle } from 'react-native-svg'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

export default function AnimatingStypesAndProps() {
  const translateX = useSharedValue(0)
  const r = useSharedValue(20)

  const handlePress = () => {
    translateX.value += 50
  }

  const handleReset = () => {
    translateX.value = 0
  }

  const handlePressCircle = () => {
    r.value += 10
  }

  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(r.value),
  }))

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value * 2) }],
  }))

  return (
    <ScrollContainer withInsets={false}>
      <Content withInsets>
        <Header title="Animating Stypes and Props" />
        <Divider />
        <Animated.View
          style={[
            { width: 50, height: 50, backgroundColor: 'red' },
            animatedStyles,
          ]}
        />
        <Button onPress={handlePress} text="Click me" />
        <Button onPress={handleReset} text="Reset" />
        <Divider />
        <Svg
          style={{
            height: 250,
            width: '100%',
          }}
        >
          <AnimatedCircle
            cx="50"
            cy="50"
            fill="blue"
            animatedProps={animatedProps}
          />
        </Svg>
        <Button onPress={handlePressCircle} text="Click me" />
        <Button onPress={() => (r.value = 20)} text="Reset" />
        <Divider />
      </Content>
    </ScrollContainer>
  )
}
