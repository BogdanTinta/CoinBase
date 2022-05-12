import { StyleSheet } from 'react-native'

import { colors } from '../../../constants/colors'
import { metrics } from '../../../constants/metrics'

export const navigationStyle = StyleSheet.create({
    container: {
        flex: metrics.size1,
        justifyContent: 'center',
        marginTop: metrics.size120,
    },
    text: {
        alignSelf: 'center',
        fontSize: metrics.size22,
        fontWeight: 'bold',
        marginTop: metrics.size30,
    },
    currencyContainer: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: metrics.size10,
    },
    currencyImage: {
        width: metrics.size18,
        height: metrics.size18,
    },
    currencyText: {
        fontSize: metrics.size14,
        fontWeight: '500',
        marginLeft: metrics.size5,
    },
    hr: {
        borderWidth: 0.5,
        marginTop: metrics.size30,
        borderColor: 'grey',
    },
    button: {
        alignSelf: 'center',
        marginBottom: metrics.size40,
    },
    buttonText: {
        fontSize: metrics.size16,
        fontWeight: '500',
    },
    logoutIcon: {
        alignSelf: 'center',
        marginBottom: metrics.size50,
        height: metrics.size31,
        width: metrics.size30,
    },
    buttonTouch: {
        width: metrics.size50,
        alignSelf: 'center',
    }
})