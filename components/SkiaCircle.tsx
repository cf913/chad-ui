import { useThemeColor } from '@/hooks/useThemeColor'
import { Image, View } from 'react-native'
import Svg, { Circle, G, TSpan, Text, TextPath } from 'react-native-svg'
import { ScrollContainer } from './ui'

export default function SkiaCircle(props: any) {
  const textColor = useThemeColor({}, 'text')
  return (
    <ScrollContainer withInsets={false}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Svg height="100%" width="100%" viewBox="0 0 300 300" {...props}>
          <G id="circle">
            <Circle
              r={100}
              x={150}
              y={150}
              fill="none"
              stroke="none"
              strokeWidth={0}
              transform="rotate(-135)"
            />
          </G>
          <Image
            style={{
              width: 220,
              height: 220,
              borderRadius: 110,
              marginLeft: 68,
              marginTop: 175,
            }}
            source={require('../assets/images/react-logo.png')}
          />
          <Text fill={textColor} fontSize="14">
            <Text fill={textColor} fontSize="14">
              <TextPath href="#circle">
                <TSpan dy={0}>Text along a curved path...</TSpan>
              </TextPath>
            </Text>
          </Text>
        </Svg>
      </View>
    </ScrollContainer>
  )
}
