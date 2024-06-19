import {
  Button,
  Container,
  Content,
  Header,
  List,
  Padder,
  ThemedInput,
  ThemedText,
  ThemedView,
} from '@/components/ui'
import {useThemeColor} from '@/hooks/useThemeColor'
import {Stack} from 'expo-router'
import {StyleSheet} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'

export default function WithHeader() {
  const backgroundColor = useThemeColor({}, 'background')

  return (
    // <Container withInsets>
    <ThemedView>
      <Stack.Screen
        options={{
          headerShown: true,
          headerBlurEffect: 'regular',
          headerTransparent: true,
          headerLargeTitle: true,
          headerTitle: 'With Header',
          headerShadowVisible: true,
          headerLargeTitleShadowVisible: true,
          headerLargeStyle: {
            backgroundColor,
          },
        }}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Content>
          <ThemedText>Header</ThemedText>
          <ThemedText style={{fontSize: 32}}>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedView>
            <List
              data={[
                {title: 'Link 1'},
                {title: 'Pressable Item 2', href: '/dead-end'},
                {title: 'Pressable Link 3', href: '/dead-end'},
                {title: 'Link 4'},
              ]}
              keyExtractor={item => item.title}
            />
          </ThemedView>
          <Padder />
          <Padder />
          <Button text="Button" onPress={() => {}} />
          <Padder />
          <ThemedText>Header</ThemedText>
          <ThemedText style={{fontSize: 32}}>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <Padder />
          <Button text="Button" onPress={() => {}} outline />
          <Padder />
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText style={{fontSize: 32}}>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText style={{fontSize: 32}}>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
          <ThemedText>Header</ThemedText>
        </Content>
      </ScrollView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  input: {},
  outlined: {},
})
