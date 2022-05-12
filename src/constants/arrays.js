import React from 'react'
import { Image } from 'react-native'
import { loginStyle } from '../screens/Authentication/Login/styles'

export const textInputs = [
    {
        placeholder: 'Name',
        icon: require('../../assets/icons/name.png'),
        addStyle: { height: 19 }
    },
    {
        placeholder: 'Email',
        icon: require('../../assets/icons/email.png')
    },
    {
        placeholder: 'Password',
        icon: require('../../assets/icons/password.png'),
        addStyle: loginStyle.iconPassword
    },
    {
        placeholder: 'Confirm password',
        icon: require('../../assets/icons/password.png'),
        addStyle: loginStyle.iconPassword
    }
]

export const navigationButtons = [
    {
        title: 'Dashboard',
        destination: 'Dashboard',
    },
    // {
    //     title: 'Profile',
    //     destination: 'Profile',
    // },
    {
        title: 'Chat',
        destination: 'Chat',
    },
    {
        title: 'Transaction History',
        destination: 'Transaction',
    },
    {
        title: 'Settings',
        destination: 'Settings',
    },
]

export const navigatorIcons = [
    <Image source={require('../../assets/icons/navigator_icons/dashboard.png')} />,
    <Image source={require('../../assets/icons/navigator_icons/dashboard_active.png')} />,
    <Image source={require('../../assets/icons/navigator_icons/chat.png')} />,
    <Image source={require('../../assets/icons/navigator_icons/chat_active.png')} />,
    <Image source={require('../../assets/icons/navigator_icons/transaction.png')} />,
    <Image source={require('../../assets/icons/navigator_icons/transaction_active.png')} />,
    <Image source={require('../../assets/icons/navigator_icons/settings.png')} />,
    <Image source={require('../../assets/icons/navigator_icons/settings_active.png')} />,
]

export const cards = [
    {
        image: require('../../assets/images/cards/amazon.png'),
        gradient: ['#FD749B', '#281AC8'],
        conversionRate: 'N360.00',
        cardName: 'Amazon',
    },
    {
        image: require('../../assets/images/cards/apple.png'),
        gradient: ['#00E0FF', '#0047FF'],
        conversionRate: 'N360.00',
        cardName: 'App Store & iTunes',
    },
    {
        image: require('../../assets/images/cards/bitcoin.png'),
        gradient: ['#FF8000', '#E34141'],
        conversionRate: 'N440.00',
        cardName: 'BTC',
    },
    {
        image: require('../../assets/images/cards/ethereum.png'),
        gradient: ['#00E0FF', '#0047FF'],
        conversionRate: 'N500.00',
        cardName: 'ETH',
    },
    {
        image: require('../../assets/images/cards/google.png'),
        gradient: ['#99FDD9', '#1E62A1'],
        conversionRate: 'N310.00',
        cardName: 'Google Play',
    },
    {
        image: require('../../assets/images/cards/steam.png'),
        gradient: ['#FD749B', '#281AC8'],
        conversionRate: 'N300.00',
        cardName: 'Steam',
    },
    {
        image: require('../../assets/images/cards/others.png'),
        gradient: ['#FD749B', '#281AC8'],
        conversionRate: '',
        cardName: 'Others',
    },
]

export const dropdowns = [
    {
        placeholder: 'Card type',
        data: ['Mastercard', 'Visa'],
    },
    {
        placeholder: 'Card currency',
        data: ['USD', 'EUR', 'RON', 'Pesos'],
    },
    {
        placeholder: 'Card value',
        data: ['Emotional', 'Material'],
    }
]

// FOR ONBOARDING PAGES
// export const onboardings = [
//     {
//         image: require('../../assets/images/theme_images/onboarding1.png'),
//         text: 'Exchange Bitcoin\n& Ethereum For Money',
//         quote: 'Provide us with the necessary\nrequired information and let us do\nthe conversion asap!!!'
//     },
//     {
//         image: require('../../../assets/images/theme_images/onboarding2.png'),
//         text: 'Got Giftcards you\nwant to redeem for\ncash?',
//         quote: 'Unlimited type cards on our platform\nranging from amazon, iTunes,\nGoogle Play Store and e.t.c'
//     },
//     {
//         image: require('../../../assets/images/theme_images/onboarding3.png'),
//         text: `You're One Step\nCloser to Cashing Out\nYour Exchange`,
//         quote: 'Our pay out process is the one of\nthe fatest and guaranteed trusted',
//     },
// ]