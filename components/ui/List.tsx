import {ThemedView} from './ThemedView'
import {useLocalTheme} from './ThemeProvider/UIThemeProvider'
import {CustomStyles} from './ThemeProvider/theme-reducer'
import {ViewProps} from 'react-native'
import {useMemo} from 'react'
import {useThemeColor} from '@/hooks/useThemeColor'
import {FlatList} from 'react-native-gesture-handler'
import {Divider} from './Divider'
import {ListItem, ListItemData} from './ListItem'

type ListProps = {
  data: ListItemData[]
  scrollEnable?: boolean
} & ViewProps

export function List(props: ListProps) {
  const {data, scrollEnable = false} = props
  const {layout} = useLocalTheme()
  const color = useThemeColor({}, 'text')

  const styles: CustomStyles = useMemo(
    () => ({
      shadow_container: {
        borderRadius: layout.borderRadius,
        borderWidth: 1,
        borderColor: color,
      },
      container: {
        borderRadius: layout.borderRadius,
        overflow: 'hidden',
      },
    }),
    [layout],
  )

  return (
    <ThemedView style={styles.shadow_container}>
      <ThemedView style={[styles.container]}>
        <FlatList
          scrollEnabled={scrollEnable}
          ItemSeparatorComponent={Divider}
          data={data}
          renderItem={({item}) => <ListItem item={item} />}
        />
      </ThemedView>
    </ThemedView>
  )
}
