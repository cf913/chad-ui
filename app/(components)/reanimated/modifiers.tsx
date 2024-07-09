import {
  Col,
  Content,
  Divider,
  Header,
  Padder,
  ScrollContainer,
  ThemedText,
  ThemedView,
  Button,
} from '@/components/ui'
import { StyleSheet } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'

export default function ModifersScreen() {
  const offset = useSharedValue<number>(0)

  const OFFSET = 40
  const TIME = 250
  const DELAY = 400

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }))

  const onPress = () => {
    offset.value = withDelay(
      DELAY,
      withSequence(
        // start from -OFFSET
        withTiming(-OFFSET, { duration: TIME / 2 }),
        // shake between -OFFSET and OFFSET 5 times
        withRepeat(withTiming(OFFSET, { duration: TIME }), 5, true),
        // go back to 0 at the end
        withTiming(0, { duration: TIME }),
      ),
    )
  }

  const onReset = () => {
    offset.value = withTiming(0)
  }

  return (
    <ScrollContainer withInsets={false}>
      <Content withInsets style={{ flex: 1 }}>
        <Header title="Modifiers" />
        <Col style={{ alignItems: 'stretch' }}>
          <ThemedView style={{ alignItems: 'flex-start' }}>
            <ThemedText>withDelay</ThemedText>
            <ThemedText>withSequence</ThemedText>
            <ThemedText>withRepeat</ThemedText>
          </ThemedView>
          <Padder />
          <Divider />
          <Padder />
          <Animated.View style={[styles.box, animatedStyle]} />
          <Padder />
          <Button onPress={onPress} text="Press me"></Button>
          <Button onPress={onReset} text="Reset"></Button>
        </Col>
      </Content>
    </ScrollContainer>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 10,
    alignSelf: 'center',
  },
})
