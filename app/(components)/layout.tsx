import {
  Col,
  Container,
  Content,
  Divider,
  Header,
  Padder,
  Row,
  Spacer,
  ThemedText,
} from '@/components/ui'
import {useThemeColor} from '@/hooks/useThemeColor'

export default function Layout() {
  const color = useThemeColor({}, 'text')

  const border = {borderColor: color, borderWidth: 1}
  return (
    <Container>
      <Content>
        <Header title="Header with Back btn" />
      </Content>
      <Container style={border}>
        <ThemedText>Container with safe area insets top and bot</ThemedText>
        <Content style={[{flexGrow: 1}, border]}>
          <ThemedText>Content</ThemedText>
          <Divider />
          <Padder />
          <ThemedText>Row</ThemedText>
          <Row style={border}>
            <ThemedText>Left</ThemedText>
            <ThemedText>Mid</ThemedText>
            <ThemedText>Right</ThemedText>
          </Row>
          <Padder />
          <ThemedText>Col</ThemedText>
          <Col style={border}>
            <ThemedText>Left</ThemedText>
            <ThemedText>Mid</ThemedText>
            <ThemedText>Right</ThemedText>
          </Col>
          <Padder />
          <ThemedText>Divider</ThemedText>
          <Divider />
          <Padder />
          <Spacer />
          <ThemedText>Spacer</ThemedText>
          <ThemedText>(some text to show the spacer works)</ThemedText>
        </Content>
      </Container>
      <Padder />
    </Container>
  )
}
