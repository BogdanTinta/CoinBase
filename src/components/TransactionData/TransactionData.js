import React from 'react'
import { View, Text, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { dataStyle } from './style'

const TransactionData = ({ gradient, type, status, amount, date }) => {
    return (
        <View style={dataStyle.container}>
            <LinearGradient
                style={dataStyle.gradient}
                colors={[gradient[0], gradient[1]]}
                locations={[0.05, 1]}
            >
                <Image
                    source={require('../../../assets/icons/bubble_icons/card.png')}
                    style={dataStyle.icon}
                />
            </LinearGradient>

            <View style={dataStyle.statusView}>
                <Text style={dataStyle.type}>{type}</Text>
                <Text style={[dataStyle.status, { color: status[1] }]}>{status[0]}</Text>
            </View>

            <View style={dataStyle.dateView}>
                <Text style={dataStyle.amount}>N {amount}</Text>
                <Text style={dataStyle.date}>{date}</Text>
            </View>
        </View>
    )
}

export default TransactionData