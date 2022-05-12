import React from 'react'
import { StatusBar } from 'react-native'

const StatBar = ({ color }) => {
    return <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={color ? color : 'dark-content'} />
}

export default StatBar