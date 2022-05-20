import React from 'react'
import { Text } from 'react-native'

import { titleStyle } from './style'

const Title = ({ text }) => {
    return <Text style={titleStyle}>{text}</Text>
}

export default Title