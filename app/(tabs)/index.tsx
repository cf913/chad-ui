import {Container, Content, List, Padder, ThemedText} from '@/components/ui'

export default function HomeScreen() {
  return (
    <Container>
      <Content>
        <ThemedText style={{fontSize: 32, lineHeight: 34, fontWeight: 'bold'}}>
          Components
        </ThemedText>
        <Padder />
        <List
          data={[
            {key: 'Button', title: 'Button'},
            {key: 'Layout', title: 'Layout'},
            {key: 'List', title: 'List'},
          ]}
        />
      </Content>
    </Container>
  )
}
