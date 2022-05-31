import React from 'react'
import { View, Image, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { boxStyle } from './style'
import { colors } from '../../constants/colors'

const ValueBox = ({ value, showGradient }) => {
    return (
        <View style={boxStyle.container}>
            {showGradient ?
                <LinearGradient
                    colors={[colors.gradient1, colors.gradient2]}
                    locations={[0.08, 1]}
                    style={boxStyle.gradient}
                >
                    <Text style={boxStyle.gradientText}>Total Amount</Text>
                </LinearGradient>
                : null
            }
            <Image source={require('../../../assets/icons/rectangle.png')} style={boxStyle.box} />

            <Text style={boxStyle.value}>{value}</Text>
        </View>
    )
}

export default ValueBox