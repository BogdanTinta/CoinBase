import React from 'react'
import { Image } from 'react-native'
import { loginStyle } from '../screens/Authentication/Login/styles'

import { colors } from './colors'

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

export const bubbles = [
    {
        icon: require('../../assets/icons/bubble_icons/successful.png'),
        text: 'Successful',
        value: 8,
        iconSize: {
            height: 14,
            width: 20,
        }
    },
    {
        icon: require('../../assets/icons/bubble_icons/pending.png'),
        text: 'Pending',
        value: 2,
        iconSize: {
            height: 5,
            width: 21,
        }
    },
    {
        icon: require('../../assets/icons/bubble_icons/failed.png'),
        text: 'Failed',
        value: 3,
        iconSize: {
            height: 12,
            width: 12,
        }
    }
]

export const transactionHistory = [
    {
        gradient: [colors.orangeGradient1, colors.orangeGradient2],
        type: 'Amazon Card',
        status: ['Successful', colors.green],
        amount: '50,000.00',
        date: 'Mar 01, 2022',
        id: '#198719867'
    },
    {
        gradient: [colors.gradient1, colors.gradient2],
        type: 'Steam Card',
        status: ['Failed', colors.red],
        amount: '15,000.00',
        date: 'Mar 23, 2022',
        id: '#68769109'
    },
    {
        gradient: [colors.blueGradient1, colors.blueGradient2],
        type: 'iTunes Store Card',
        status: ['Pending', colors.neutral],
        amount: '9,000.00',
        date: 'May 20, 2022',
        id: '#89687561'
    },
    {
        gradient: [colors.orangeGradient1, colors.orangeGradient2],
        type: 'BitCoin Trade',
        status: ['Successful', colors.green],
        amount: '58,000.00',
        date: 'May 20, 2022',
        id: '#19871912314'
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