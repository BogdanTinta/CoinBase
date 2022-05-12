import React from 'react'
import { Image, View } from 'react-native'

import { profileStyle } from './styles'

const ProfileImage = ({ size }) => {
    return (
        <View style={{ justifyContent: 'center' }}>
            <Image
                source={require('../../../assets/images/profile.jpg')}
                style={[profileStyle.profileImage, { height: size, width: size }]}
            />
            <Image
                source={require('../../../assets/images/elipse.png')}
                style={[profileStyle.elipse, { height: size + 0.5 * size, width: size + 0.5 * size }]}
            />
            <Image
                source={require('../../../assets/images/ellipse2.png')}
                style={[profileStyle.elipse, { height: size + 0.5 * size, width: size + 0.5 * size }]}
            />
        </View>
    )
}

export default ProfileImage