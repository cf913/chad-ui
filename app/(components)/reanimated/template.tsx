import {
  Col,
  Content,
  Header,
  ScrollContainer,
  ThemedText,
} from '@/components/ui'

export default function TemplateScreen() {
  return (
    <ScrollContainer withInsets={false}>
      <Content withInsets style={{ flex: 1 }}>
        <Header title="Template" />
        <Col style={{ alignItems: 'center' }}>
          <ThemedText>Add content here</ThemedText>
        </Col>
      </Content>
    </ScrollContainer>
  )
}
