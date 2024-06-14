import {ThemedView} from './ThemedView'
import {useLocalTheme} from './ThemeProvider/UIThemeProvider'
import {CustomStyles} from './ThemeProvider/theme-reducer'
import {FlatListProps, ViewProps} from 'react-native'
import {useMemo} from 'react'
import {useThemeColor} from '@/hooks/useThemeColor'
import {FlatList} from 'react-native-gesture-handler'
import {ListItem, ListItemData} from './ListItem'
import {Separator} from './Separator'

type ListProps = {
  data: ListItemData[]
  keyExtractor: FlatListProps<ListItemData>['keyExtractor']
  scrollEnabled?: boolean
} & ViewProps

export function List(props: ListProps) {
  const {data, scrollEnabled = false, keyExtractor} = props
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
          scrollEnabled={scrollEnabled}
          ItemSeparatorComponent={Separator}
          data={data}
          keyExtractor={keyExtractor}
          renderItem={({item}) => <ListItem item={item} />}
        />
      </ThemedView>
    </ThemedView>
  )
}
