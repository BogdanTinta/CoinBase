import React from 'react'
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native'
import { LinearTextGradient } from 'react-native-text-gradient'
import { useNavigation } from '@react-navigation/native'

import ProfileImage from '../../../components/ProfileImage/ProfileImage'
import StatBar from '../../../components/StatBar/StatBar'

import { navigationStyle } from './styles'
import { colors } from '../../../constants/colors'
import { navigationButtons } from '../../../constants/arrays'

const NavigationScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={navigationStyle.container}>
            <StatBar color={'dark-content'} />
            <ProfileImage size={80} />

            <LinearTextGradient
                colors={[colors.gradient1, colors.gradient2]}
                locations={[0.13, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={navigationStyle.text}
            >
                <Text >Dodge Dodge</Text>
            </LinearTextGradient>

            <View style={navigationStyle.currencyContainer}>
                <Image source={require('../../../../assets/icons/currency.png')} style={navigationStyle.currencyImage} />
                <Text style={navigationStyle.currencyText}> # 102,999.52</Text>
            </View>

            <View style={navigationStyle.hr}></View>

            <FlatList
                contentContainerStyle={{ marginTop: 60 }}
                data={navigationButtons}
                keyExtractor={(navigationButtons) => navigationButtons.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={navigationStyle.button}
                            onPress={() => navigation.navigate('Account', { screen: item.destination })}>
                            <Text style={navigationStyle.buttonText}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                }}
            />

            <TouchableOpacity style={navigationStyle.buttonTouch} onPress={() => navigation.navigate('Login')}>
                <Image source={require('../../../../assets/icons/logout.png')} style={navigationStyle.logoutIcon} />
            </TouchableOpacity>
        </View>
    )
}

export default NavigationScreen