import {
  Container,
  Content,
  Header,
  List,
  Padder,
  ScrollContainer,
  ThemedText,
  ThemedView,
} from '@/components/ui'

export default function ListScreen() {
  return (
    <ScrollContainer withInsets={false}>
      <Content withInsets>
        <Header title="List" />
        <ThemedText>Default list</ThemedText>
        <List
          data={[
            {title: 'Item 1'},
            {title: 'Item 2'},
            {title: 'Link 3', href: '/dead-end'},
          ]}
          keyExtractor={item => item.title}
        />
        <Padder />
        <ThemedText>Scroll enabled</ThemedText>
        <ThemedView>
          <List
            data={[
              {title: 'Link 1'},
              {title: 'Pressable Item 2', href: '/dead-end'},
              {title: 'Pressable Link 3', href: '/dead-end'},
              {title: 'Link 4'},
              {title: 'Pressable Item 5', href: '/dead-end'},
              {title: 'Pressable Link 6', href: '/dead-end'},
              {title: 'Link 7'},
              {title: 'Link 8'},
              {title: 'Link 9'},
              {title: 'Link 10'},
              {title: 'Pressable Item 11', href: '/dead-end'},
              {title: 'Pressable Item 12', href: '/dead-end'},
              {title: 'Pressable Item 13', href: '/dead-end'},
            ]}
            keyExtractor={item => item.title}
          />
        </ThemedView>
        <Padder />
        <Padder />
        <Padder />
        <Padder />
        <Padder />
        <Padder />
      </Content>
    </ScrollContainer>
  )
}
