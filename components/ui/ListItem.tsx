import {ViewProps} from 'react-native'
import {ThemedView} from './ThemedView'
import {Row} from './Row'
import {ThemedText} from './ThemedText'
import {CustomStyles} from './ThemeProvider/theme-reducer'
import {useMemo} from 'react'
import {useLocalTheme} from './ThemeProvider/UIThemeProvider'

export type ListItemData = {
  key: string
  title: string
  subtitle?: string
}

type ListItemProps = {
  item: ListItemData
} & ViewProps

export function ListItem(props: ListItemProps) {
  const {item, children} = props
  const {layout} = useLocalTheme()

  const styles: CustomStyles = useMemo(
    () => ({
      container: {
        paddingHorizontal: layout.padding,
        height: layout.item_height,
        justifyContent: 'center',
      },
    }),
    [layout],
  )
  return (
    <ThemedView style={styles.container}>
      <Row>
        <ThemedText>{item.title}</ThemedText>
      </Row>
    </ThemedView>
  )
}
