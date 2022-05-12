import React from 'react'
import { View, Text, Image } from 'react-native'
import { LinearTextGradient } from 'react-native-text-gradient'

import { themeStyle } from './style'

const ThemeImage = ({ image, title, addStyle }) => {
    return (
        <View style={themeStyle.container}>
            <Image source={image} style={[themeStyle.image, addStyle]} />
            <LinearTextGradient
                colors={['#FD749B', '#281AC8']}
                locations={[0.13, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={themeStyle.title}
            >
                <Text>{title}</Text>
            </LinearTextGradient>
        </View>
    )
}

export default ThemeImage