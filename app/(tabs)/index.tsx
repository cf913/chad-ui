import {Container, Content, Header, List, Padder} from '@/components/ui'

export default function HomeScreen() {
  return (
    <Container>
      <Content>
        <Header title="Components" back={false}></Header>
        <Padder />
        <List
          data={[
            {
              key: 'Button',
              title: 'Button',
              href: '/button',
              push: true,
            },
            {key: 'Typography', title: 'Typography', href: '/typography'},
            {key: 'Layout', title: 'Layout', href: '/layout'},
            {key: 'List', title: 'List', href: '/list'},
            {key: 'Input', title: 'Input', href: '/input'},
            {key: 'WithHeader', title: 'WithHeader', href: '/with-header'},
          ]}
          keyExtractor={item => item.key!}
        />
      </Content>
    </Container>
  )
}
