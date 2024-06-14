import {
  Container,
  Content,
  List,
  Padder,
  ThemedText,
  Button,
  Header,
} from '@/components/ui'

export default function HomeScreen() {
  return (
    <Container withInsets>
      <Content>
        <Header title="Buttons" />
        <ThemedText>Default</ThemedText>
        <Padder />
        <Button onPress={() => alert('onPress default')} text="Default" />
        <Padder />
        <Button
          onPress={() => alert('onPress loading')}
          text="Loading"
          loading
        />
        <Padder />
        <Button
          onPress={() => alert('onPress disabled')}
          text="Disabled"
          disabled
        />
        <Padder />
        <Padder />
        <ThemedText>Outline</ThemedText>
        <Padder />
        <Button
          outline
          onPress={() => alert('onPress default')}
          text="Default"
        />
        <Padder />
        <Button
          outline
          onPress={() => alert('onPress loading')}
          text="Loading"
          loading
        />
        <Padder />
        <Button
          outline
          onPress={() => alert('onPress disabled')}
          text="Disabled"
          disabled
        />
      </Content>
    </Container>
  )
}
