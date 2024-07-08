import {
  Header,
  Content,
  ThemedText,
  Button,
  Spacer,
  Row,
  Padder,
  ThemedView,
  ScrollContainer,
} from '@/components/ui'
import React, { useRef, useState } from 'react'
import { Pressable, ScrollView, useWindowDimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const components_arr = [
  { id: 0, title: 'Component 1', description: 'Description 1', color: 'red' },
  { id: 1, title: 'Component 2', description: 'Description 2', color: 'blue' },
  { id: 2, title: 'Component 3', description: 'Description 3', color: 'green' },
]

const toCarouselItems = (components: any[], index: number) => {
  // check current index
  // add components[index] to start and end of array to create carousel
  // return array

  // TODO: generalize this to work with any number of components
  const items = [...components]
  console.log('index', index)
  if (index === 0) {
    items.unshift(components[2])
    items.unshift(components[1])
  } else if (index === 1) {
    items.unshift(components[2])
    items.push(components[0])
  } else if (index === 2) {
    items.push(components[0])
    items.push(components[1])
  }

  return items
}

const DEFAULT_INDEX = 1

export default function CircularHeaderScreen() {
  const scrollViewRef = useRef<ScrollView>(null)
  const [currentItem, setCurrentItem] = useState(DEFAULT_INDEX)
  const insets = useSafeAreaInsets()
  const { width } = useWindowDimensions()
  const [headerItems, setHeaderItems] = useState(() =>
    toCarouselItems(components_arr, DEFAULT_INDEX),
  )

  const ITEM_WIDTH = width / 3

  const onSelectItem = (item: any, itemIndex: number) => {
    console.log('=== on select item ===')
    scrollViewRef.current?.scrollTo({
      x: (itemIndex - 1) * ITEM_WIDTH,
      y: 0,
      animated: true,
    })

    setCurrentItem(item.id)
    console.log('item.id', item.id)
    const nextItems = toCarouselItems(components_arr, item.id)
    setTimeout(() => {
      setHeaderItems(nextItems)
      scrollViewRef.current?.scrollTo({
        x: ITEM_WIDTH,
        y: 0,
        animated: false,
      })
    }, 300)
  }

  return (
    <ScrollContainer withInsets={false}>
      <Content withInsets>
        <Header title="Circular Header" />
        <ThemedText>
          From:
          https://www.reddit.com/r/reactnative/comments/1dxkxzb/circular_carousal_slider/
        </ThemedText>
      </Content>
      <Padder />
      <Content>
        <ThemedText>Circular Header</ThemedText>
      </Content>
      <Padder />
      <Content>
        <ThemedText>Horizontal Header</ThemedText>
      </Content>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        scrollEnabled={false}
        pagingEnabled
        contentOffset={{ x: ITEM_WIDTH, y: 0 }}
        snapToInterval={width / 3}
        snapToAlignment={'center'}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 0, borderWidth: 1, flexGrow: 0 }}
        contentContainerStyle={{ flex: 0, flexGrow: 0 }}
      >
        {headerItems.map((component, i) => (
          <Pressable key={i} onPress={() => onSelectItem(component, i)}>
            <ThemedView
              style={{
                width: width / 3,
                height: 50,
                flex: 0,
                backgroundColor: component.color,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ThemedText>{component.title}</ThemedText>
              <ThemedText>{i}</ThemedText>
            </ThemedView>
          </Pressable>
        ))}
      </ScrollView>
      <Padder />
      <Content style={{ flex: 1, paddingBottom: insets.bottom }}>
        {components_arr.map((component, i) =>
          component.id === currentItem ? (
            <ThemedView
              key={i}
              style={{
                flex: 1,
                backgroundColor: component.color,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ThemedText>{component.title}</ThemedText>
              <ThemedText>{component.description}</ThemedText>
            </ThemedView>
          ) : null,
        )}
        <Padder />
      </Content>
    </ScrollContainer>
  )
}
