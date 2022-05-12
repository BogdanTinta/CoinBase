import React from 'react'
import { Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

import StatBar from '../../components/StatBar/StatBar'

import { splashStyle } from './styles'

const SplashScreen = () => {
    const navigation = useNavigation()

    setTimeout(() => {
        navigation.navigate('Login')
    }, 2000)


    return (

        <LinearGradient style={splashStyle.splash} colors={['#FD749B', '#281AC8']} locations={[0.13, 1]} >
            <StatBar color={'default'} />
            <Image style={splashStyle.logo} source={require('../../../assets/icons/splash.png')} />
        </LinearGradient>
    )
}


export default SplashScreen