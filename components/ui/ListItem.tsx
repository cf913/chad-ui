import {Pressable, ViewProps} from 'react-native'
import {ThemedView} from './ThemedView'
import {Row} from './Row'
import {ThemedText} from './ThemedText'
import {CustomStyles} from './ThemeProvider/theme-reducer'
import {useMemo} from 'react'
import {useLocalTheme} from './ThemeProvider/UIThemeProvider'
import {Link} from 'expo-router'
import {Feather} from '@expo/vector-icons'
import {useThemeColor} from '@/hooks/useThemeColor'
import {TouchableOpacity} from 'react-native-gesture-handler'

export type ListItemData = {
  key?: string
  title: string
  subtitle?: string
  href?: string
  push?: boolean
}

type ListItemProps = {
  item: ListItemData
} & ViewProps

export function ListItem(props: ListItemProps) {
  const {item, children} = props
  const {layout} = useLocalTheme()
  const color = useThemeColor({}, 'text')

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

  if (item.href) {
    return (
      <Link href={item.href} asChild push={item.push}>
        <TouchableOpacity>
          <ThemedView style={styles.container}>
            <Row
              style={{justifyContent: 'space-between', alignItems: 'center'}}
            >
              <ThemedText>{item.title}</ThemedText>
              <Feather name="chevron-right" size={16} color={color} />
            </Row>
          </ThemedView>
        </TouchableOpacity>
      </Link>
    )
  }

  return (
    <ThemedView style={styles.container}>
      <Row>
        <ThemedText>{item.title}</ThemedText>
      </Row>
    </ThemedView>
  )
}
