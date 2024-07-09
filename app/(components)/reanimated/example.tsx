import {
  Button,
  Col,
  Content,
  Divider as Div,
  Header,
  Padder,
  Row,
  ScrollContainer,
  ThemedText,
} from '@/components/ui'
import { Fragment } from 'react'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'

const Divider = () => {
  return (
    <Fragment>
      <Padder />
      <Div />
      <Padder />
    </Fragment>
  )
}

export default function ReanimatedScreen() {
  const width = useSharedValue(100)

  const handlePress = () => {
    width.value = withSpring(width.value + 50)
  }

  const handleReset = () => {
    width.value = withSpring(100)
  }

  return (
    <ScrollContainer withInsets={false}>
      <Content withInsets>
        <Header title="First Animation" />
        <Divider />
        <ThemedText>Tuto</ThemedText>
        <Col style={{ alignItems: 'center' }}>
          <Animated.View
            style={{
              width,
              height: 100,
              backgroundColor: 'violet',
            }}
          />
          <Padder />
          <Row>
            <Button onPress={handleReset} compact text="Reset" />
            <Padder w={1} />
            <Button onPress={handlePress} compact text="Click me" />
          </Row>
        </Col>
      </Content>
    </ScrollContainer>
  )
}
