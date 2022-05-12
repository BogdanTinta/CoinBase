import React from 'react'
import { TouchableOpacity, Text, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

import { buttonStyle } from './styles'
import { colors } from '../../constants/colors'

const GradientButton = ({ buttonText, destination }) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={buttonStyle.buttonTouch} onPress={() => navigation.navigate(destination)}>
            <LinearGradient colors={[colors.gradient1, colors.gradient2]} style={buttonStyle.button} locations={[0.13, 1]}>
                <Text style={buttonStyle.buttonText}>
                    {buttonText}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default GradientButton