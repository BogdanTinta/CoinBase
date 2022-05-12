import React from 'react'
import { View } from 'react-native'

import ThemeImage from '../../../components/ThemeImage/ThemeImage'
import MyTextInput from '../../../components/MyTextInput/MyTextInput'
import Quote from '../../../components/Quote/Quote'
import GradientButton from '../../../components/GradientButton/GradientButton'

import { recoveryStyle } from './style'

const PassRecovery = () => {
    return (
        <View style={recoveryStyle.container}>
            <ThemeImage
                image={require('../../../../assets/images/theme_images/password_recovery.png')}
                title='Recover Password'
            />

            <MyTextInput
                imageSource={require('../../../../assets/icons/email.png')}
                placeholder='Email'
            />

            <Quote
                style={recoveryStyle.quote}
                text={'How well we communicate is\n determined not by how well we say\n things, but how well we are\n understood.'}
            />

            <GradientButton
                buttonText={'SUBMIT'}
                destination={'Login'}
            />
        </View>
    )
}

export default PassRecovery