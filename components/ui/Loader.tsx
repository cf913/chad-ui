import {ActivityIndicator, ViewStyle} from 'react-native'
import {AnimatedView} from './ThemedView'
import {FadeIn, FadeOut} from 'react-native-reanimated'

export function Loader({size = 'small'}: {size?: number | 'large' | 'small'}) {
  const styles: ViewStyle = {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }

  return (
    <AnimatedView style={styles} entering={FadeIn} exiting={FadeOut}>
      <ActivityIndicator size={size} />
    </AnimatedView>
  )
}
