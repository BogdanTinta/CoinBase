import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { LinearTextGradient } from 'react-native-text-gradient'
import { useNavigation } from '@react-navigation/native'

import Card from '../../../components/Card/Card'
import Quote from '../../../components/Quote/Quote'

import { cards } from '../../../constants/arrays'
import { dashboardStyle } from './styles'

const DashboardScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={dashboardStyle.container}>
            <LinearTextGradient
                colors={['#FD749B', '#281AC8']}
                locations={[0.13, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={dashboardStyle.greet}
            >
                <Text>Hi, Dodge</Text>
            </LinearTextGradient>

            <Text style={dashboardStyle.text}>{'Welcome Back!\nChoose your prefered card to continue'}</Text>

            <FlatList
                data={cards}
                keyExtractor={(cards) => cards.cardName}
                renderItem={({ item }) => {
                    console.log(item.image)
                    return (
                        <TouchableOpacity
                            style={dashboardStyle.cards}
                            onPress={() => navigation.navigate(
                                'DashboardDetail',
                                {
                                    image: item.image,
                                    colors: item.gradient,
                                    conversionRate: item.conversionRate,
                                    cardName: item.cardName,
                                    //screen: 'DashboardDetail',
                                })}
                        >
                            <Card image={item.image} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default DashboardScreen