import { View, TouchableOpacity, ImageSourcePropType, GestureResponderEvent } from 'react-native'
import React from 'react'
import { metrics } from '../Styles/metrics'
import { Images } from '../Images/Images'
import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';

type Props = {
    image?: ImageSourcePropType
    onPress?: ((event: GestureResponderEvent) => void)
}

const CustomToolBar = (props: Props) => {
    return (
        <View style={{ height: metrics.hp7, alignItems: 'center', flexDirection: 'row' }} >
            <TouchableOpacity style={{ marginLeft: metrics.hp2 }} onPress={props.onPress}>
                <Svg width="45" height="45" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Rect x="54.5" y="54.5" width="54" height="54" rx="27" transform="rotate(-180 54.5 54.5)" stroke="#EBEAEC" />
                    <Path d="M36.8491 28.5L21.573 28.5L27.9842 35.0889L26.6088 36.5L18.3781 28.0667C18.0749 27.7556 18.0749 27.2556 18.3781 26.9444L26.6088 18.5L27.9842 19.9111L21.573 26.5L36.8491 26.5L36.8491 27.5L36.8491 28.5Z" fill="#3F414E" />
                </Svg>
            </TouchableOpacity>
        </View>
    )
}

export default CustomToolBar