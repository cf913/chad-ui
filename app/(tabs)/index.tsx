import {Container, Content, Padder, Row, ThemedText} from '@/components/ui'

export default function HomeScreen() {
  return (
    <Container>
      <Content>
        <ThemedText style={{fontSize: 32, lineHeight: 34, fontWeight: 'bold'}}>
          Components
        </ThemedText>
        <Padder />
        <Row>
          <ThemedText>Left</ThemedText>
          <ThemedText>Mid</ThemedText>
          <ThemedText>Right</ThemedText>
        </Row>
      </Content>
    </Container>
  )
}
