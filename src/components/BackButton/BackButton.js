import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LinearTextGradient } from 'react-native-text-gradient'

import { backStyle } from './styles'
import { colors } from '../../constants/colors'

const BackButton = ({ destination }) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate(destination)}>
            <LinearTextGradient
                colors={[colors.gradient1, colors.gradient2]}
                locations={[0.13, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
                <Text style={backStyle.buttonText}>{'<Back'}</Text>
            </LinearTextGradient>
        </TouchableOpacity>
    )
}

export default BackButton