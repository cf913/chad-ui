import {Image, StyleSheet, Platform} from 'react-native'

import {HelloWave} from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import {ThemedText} from '@/components/ui/ThemedText'
import {ThemedView} from '@/components/ui/ThemedView'
import {Button, Container} from '@/components/ui'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

export default function HomeScreen() {
  const insets = useSafeAreaInsets()
  return (
    <Container>
      <ThemedText>
        TODO: a list of components from the components/ui folder
      </ThemedText>
      <Button onPress={() => alert('button pressed')} text="Press me" />
    </Container>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
})
