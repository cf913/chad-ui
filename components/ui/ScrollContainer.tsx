import {ViewProps} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {ScrollView} from 'react-native-gesture-handler'

type ContainerProps = {
  withInsets?: boolean
} & ViewProps

export function ScrollContainer(props: ContainerProps) {
  const {withInsets = true, children, style = {}} = props
  const insets = useSafeAreaInsets()
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      style={[
        {
          paddingTop: withInsets ? insets.top : 0,
        },
        style,
      ]}
    >
      {children}
    </ScrollView>
  )
}
