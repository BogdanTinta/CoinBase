import { StyleSheet } from 'react-native'

import { metrics } from '../../constants/metrics'
import { colors } from '../../constants/colors'

export const buttonStyle = StyleSheet.create({
    buttonTouch: {
        width: metrics.size200,
        alignSelf: 'center',
    },
    button: {
        height: metrics.size40,
        width: metrics.size200,
        borderRadius: metrics.size5,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: metrics.size50,
        marginBottom: metrics.size30,
    },
    buttonText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        color: colors.white,
        fontSize: metrics.size15,
    },
})