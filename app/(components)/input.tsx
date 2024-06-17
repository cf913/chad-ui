import {
  Container,
  Content,
  Header,
  Padder,
  ThemedInput,
  ThemedText,
} from '@/components/ui'
import {useState} from 'react'
import {StyleSheet} from 'react-native'

export default function Input() {
  const [value, setValue] = useState('')
  return (
    <Container withInsets>
      <Content>
        <Header title="Input" />
        <ThemedInput
          placeholder="Default"
          onChangeText={setValue}
          value={value}
        />
        <Padder />
        <ThemedInput
          placeholder="Outline"
          onChangeText={setValue}
          value={value}
          type="outline"
        />
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  input: {},
  outlined: {},
})
