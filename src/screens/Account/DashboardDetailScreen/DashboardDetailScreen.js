import React from 'react'
import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import SelectDropdown from 'react-native-select-dropdown'

import MyTextInput from '../../../components/MyTextInput/MyTextInput'
import GradientButton from '../../../components/GradientButton/GradientButton'
import ValueBox from '../../../components/ValueBox/ValueBox'

import { detailStyle } from './style'
import { dropdowns } from '../../../constants/arrays'

const cardCase = (cardName, conversionRate, detailStyle) => {
    switch (cardName) {
        case 'BTC' || 'ETH':
            return (
                <>
                    <View style={detailStyle.textView}>
                        <Text style={detailStyle.textContainer}>
                            <Text style={detailStyle.conversionRate}>{conversionRate} </Text>
                            <Text>is our convertion rate for every{'\n'}0.1 {cardName} on this platform.</Text>
                        </Text>
                    </View>
                    <Text style={detailStyle.info}>The total value you derived here will be the amount{'\n'}you'll be receiving during the total transaction process</Text>

                    <MyTextInput placeholder={`${cardName} value`} />

                    <ValueBox value={'N 0,000.00'} />

                    <GradientButton buttonText={'CONTINUE'} destination={'Dashboard'} />
                </>
            )
            break;

        case 'Others':
            return (
                <>
                    <View style={detailStyle.textView}>
                        <Text style={detailStyle.textContainer}>
                            <Text>Conversion rate for every card on this page{'\n'}varies on different types of card brands</Text>
                        </Text>
                    </View>
                    <Text style={detailStyle.info}>The total value you derived here will be the amount{'\n'}you'll be receiving during the total transaction process</Text>

                    {dropdowns.map((item) => {
                        return (
                            <SelectDropdown
                                key={item.placeholder}
                                data={item.data}
                                buttonStyle={detailStyle.dropdownArea}
                                defaultButtonText={item.placeholder}
                                buttonTextStyle={detailStyle.dropdownText}
                                renderDropdownIcon={() => {
                                    return <Image source={require('../../../../assets/icons/dropdown_arrow.png')} />
                                }}
                            />
                        )
                    })}

                    <ValueBox value={'N 0,000.00'} />

                    <GradientButton buttonText={'CONTINUE'} destination={'Dashboard'} />
                </>
            )

        default:
            return (
                <>
                    <View style={detailStyle.textView}>
                        <Text style={detailStyle.textContainer}>
                            <Text style={detailStyle.conversionRate}>{conversionRate} </Text>
                            <Text>is our convertion rate for every{'\n'}{cardName} card on this platform.</Text>
                        </Text>
                    </View>
                    <Text style={detailStyle.info}>The total value you derived here will be the amount{'\n'}you'll be receiving during the total transaction process</Text>

                    {dropdowns.map((item) => {
                        return (
                            <SelectDropdown
                                key={item.placeholder}
                                data={item.data}
                                buttonStyle={detailStyle.dropdownArea}
                                defaultButtonText={item.placeholder}
                                buttonTextStyle={detailStyle.dropdownText}
                                renderDropdownIcon={() => {
                                    return <Image source={require('../../../../assets/icons/dropdown_arrow.png')} />
                                }}
                            />
                        )
                    })}

                    <ValueBox value={'N 0,000.00'} />

                    <GradientButton buttonText={'CONTINUE'} destination={'Dashboard'} />
                </>
            )
            break;
    }
}




const DashboardDetailScreen = ({ route }) => {

    const colors = route.params.colors
    const image = route.params.image
    const conversionRate = route.params.conversionRate
    const cardName = route.params.cardName

    return (
        <ScrollView style={detailStyle.container}>

            <LinearGradient
                colors={[colors[0], colors[1]]}
                style={detailStyle.gradientView}
                locations={[0.13, 1]}
            ></LinearGradient>

            <View style={detailStyle.card}>
                <Image source={image} />
            </View>

            {cardCase(cardName, conversionRate, detailStyle)}
        </ScrollView>
    )
}

export default DashboardDetailScreen