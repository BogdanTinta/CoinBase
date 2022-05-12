import React from 'react'
import { Image, View, Text } from 'react-native'

import { socialAccountsStyle } from './styles'

const SocialAccounts = ({ text }) => {
    return (
        <View>
            <Text style={socialAccountsStyle.logoText}>{text} with a social account</Text>
            <View style={socialAccountsStyle.socialAccounts}>
                <Image style={socialAccountsStyle.logo} source={require('../../../assets/icons/facebook.png')} />
                <Image style={socialAccountsStyle.logo} source={require('../../../assets/icons/twitter.png')} />
                <Image style={socialAccountsStyle.logo} source={require('../../../assets/icons/google+.png')} />
            </View>
        </View>
    )
}

export default SocialAccounts