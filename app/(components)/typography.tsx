import {Container, Content, Header, ThemedText} from '@/components/ui'

const TYPES: {
  type: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'small' | 'link'
  size: number
}[] = [
  {type: 'title', size: 32},
  {type: 'subtitle', size: 20},
  {type: 'defaultSemiBold', size: 16},
  {type: 'default', size: 16},
  {type: 'link', size: 16},
  {type: 'small', size: 14},
]

export default function Typography() {
  return (
    <Container withInsets>
      <Content>
        <Header title="Typography" />
        {TYPES.map(typo => (
          <ThemedText key={typo.type} type={typo.type}>
            {typo.size} {typo.type}
          </ThemedText>
        ))}
      </Content>
    </Container>
  )
}
