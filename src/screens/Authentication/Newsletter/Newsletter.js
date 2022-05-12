import React from 'react'
import { View } from 'react-native'

import ThemeImage from '../../../components/ThemeImage/ThemeImage'
import Quote from '../../../components/Quote/Quote'
import MyTextInput from '../../../components/MyTextInput/MyTextInput'
import GradientButton from '../../../components/GradientButton/GradientButton'

import { newsletterStyle } from './style'

const Newsletter = () => {
    return (
        <View style={newsletterStyle.container}>
            <ThemeImage
                image={require('../../../../assets/images/theme_images/newsletter.png')}
                title={'Subscribe to our\nnewsletter to receive\nweekly updates'}
            />

            <MyTextInput
                placeholder={'Email'}
                imageSource={require('../../../../assets/icons/email.png')}
            />

            <Quote
                text={'We hate spam just as much as you do\nand we will not spam your email.'}
            />

            <GradientButton
                buttonText={'SUBSCRIBE'}
                destination={'Login'}
            />
        </View>
    )
}

export default Newsletter