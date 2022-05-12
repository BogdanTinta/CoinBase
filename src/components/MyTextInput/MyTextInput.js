import React from 'react'
import { Image, View, TextInput } from 'react-native'

import { textInputStyle } from './styles'

const MyTextInput = ({ placeholder, imageSource, addStyle }) => {
    return (
        <View style={textInputStyle.textInputArea}>
            <TextInput
                style={textInputStyle.textInput}
                placeholder={placeholder}
            />
            <Image
                style={[textInputStyle.icon, addStyle]}
                source={imageSource}
            />
        </View>
    )
}

export default MyTextInput