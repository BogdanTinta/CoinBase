import React from 'react'
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

import MyTextInput from '../../../components/MyTextInput/MyTextInput'
import SocialAccounts from '../../../components/SocialAccounts/SocialAccounts'
import GradientButton from '../../../components/GradientButton/GradientButton'
import Quote from '../../../components/Quote/Quote'
import StatBar from '../../../components/StatBar/StatBar'

import { loginStyle } from './styles'
import { colors } from '../../../constants/colors'
import { metrics } from '../../../constants/metrics'
import { textInputs } from '../../../constants/arrays'

const LoginScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={loginStyle.container}>
            <StatBar />

            <Image
                style={loginStyle.image}
                source={require('../../../../assets/images/profile.png')}
            />

            <Quote
                text={`Great things are not done by impulse, but a\nseries of small things brought together`}
                fontSize={metrics.size11}
            />

            <FlatList
                data={textInputs}
                keyExtractor={(textInputs) => textInputs.placeholder}
                renderItem={({ item }) => {
                    if (item.placeholder === 'Email' || item.placeholder === 'Password')
                        return (
                            <MyTextInput
                                placeholder={item.placeholder}
                                imageSource={item.icon}
                                addStyle={item.addStyle}
                            />
                        )
                }}
            />

            <TouchableOpacity style={loginStyle.passwordTextTouch} onPress={() => navigation.navigate('Recovery')}>
                <Text style={loginStyle.passwordText}>Forgot your password?</Text>
            </TouchableOpacity>

            <GradientButton buttonText={'LOGIN'} destination={'Navigation'} />

            <SocialAccounts text={'Login'} />

            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <LinearGradient colors={[colors.gradient1, colors.gradient2]} style={loginStyle.buttonCreate} locations={[0.13, 1]}>
                    <Text style={loginStyle.createAccountText}>
                        Don't have an account?
                    </Text>
                    <Text style={loginStyle.buttonText}> Create Account</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}



export default LoginScreen