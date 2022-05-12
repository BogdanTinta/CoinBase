import React from 'react'
import { View, Text, Image, FlatList, } from 'react-native'
import { PogressBar } from '@react-native-community/progress-bar-android'


import Quote from '../../../components/Quote/Quote'
import MyTextInput from '../../../components/MyTextInput/MyTextInput'
import StatBar from '../../../components/StatBar/StatBar'
import GradientButton from '../../../components/GradientButton/GradientButton'
import SocialAccounts from '../../../components/SocialAccounts/SocialAccounts'

import { signupStyle } from './styles'
import { metrics } from '../../../constants/metrics'
import { textInputs } from '../../../constants/arrays'

const SignupScreen = () => {
    return (
        <FlatList
            ListHeaderComponent={
                <View>
                    <StatBar />
                    <Image
                        style={signupStyle.image}
                        source={require('../../../../assets/images/profile.png')}
                    />
                    <Quote
                        text={'Innovation distinguishes between a leader and a\nfollower'}
                        fontSize={metrics.size11}
                    />
                </View>
            }
            data={textInputs}
            keyExtractor={(textInputs) => textInputs.placeholder}
            renderItem={({ item }) => {
                return (
                    <MyTextInput
                        placeholder={item.placeholder}
                        imageSource={item.icon}
                        addStyle={item.addStyle}
                    />
                )
            }}
            ListFooterComponent={
                <View>
                    {/* PROGRESS BAR */}
                    <GradientButton
                        buttonText={'SIGNUP'}
                        destination={'Newsletter'}
                    />
                    <Text style={signupStyle.orText}>OR</Text>
                    <SocialAccounts text={'Signup'} />
                </View>
            }
        />
        // I used ListHeader and ListFooter props because I needed the screen to be scrollable
        // and nesting a FlatList inside a ScrollView throws a warning
    )
}

export default SignupScreen