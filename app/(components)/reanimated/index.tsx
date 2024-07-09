import { Container, Content, Header, List, Padder } from '@/components/ui'

export default function ReanimatedLandingScreen() {
  return (
    <Container>
      <Content>
        <Header title="Reanimated Things"></Header>
        <Padder />
        <List
          data={[
            {
              key: 'Example',
              title: 'First Animation',
              href: '/reanimated/example',
            },
            {
              key: 'Animating Stypes and Props',
              title: 'Animating Stypes and Props',
              href: '/reanimated/animating-stypes-and-props',
            },
            {
              key: 'Custom Animations',
              title: 'Custom Animations',
              href: '/reanimated/custom-animations',
            },
            {
              key: 'withSpring',
              title: 'withSpring',
              href: '/reanimated/with-spring',
            },
          ]}
          keyExtractor={item => item.key!}
        />
      </Content>
    </Container>
  )
}
