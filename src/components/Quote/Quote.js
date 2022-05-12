import React from 'react'
import { Text } from 'react-native'

const Quote = ({ text, fontSize }) => {
    return <Text style={{ fontSize: fontSize, textAlign: 'center', fontWeight: '500' }}>{text}</Text>
}

export default Quote