import React from 'react'
import { View, Text, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { colors } from '../../constants/colors'
import { bubbleStyle } from './style'

const TransactionBubble = ({ size, icon, text, value, iconSize }) => {
    return (
        <View>
            <LinearGradient
                colors={[colors.gradient1, colors.gradient2]}
                style={[bubbleStyle.container, { height: size, width: size }]}
                locations={[0.08, 1]}
            >
                <Image source={icon} style={[bubbleStyle.icon, { height: iconSize.height, width: iconSize.width }]} />
                <Text style={bubbleStyle.text}>{text}</Text>
                <Text style={bubbleStyle.value}>{value}</Text>
            </LinearGradient>
        </View>
    )
}

export default TransactionBubble