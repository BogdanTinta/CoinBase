import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

import { metrics } from '../../constants/metrics'

export const bubbleStyle = StyleSheet.create({
    container: {
        borderRadius: metrics.size180,
        justifyContent: 'flex-end',
        marginBottom: metrics.size20,
        alignSelf: 'center'
    },
    icon: {
        alignSelf: 'center',
    },
    text: {
        fontSize: metrics.size12,
        color: colors.white,
        textAlign: 'center',
        marginTop: metrics.size5,
        fontWeight: '400'
    },
    value: {
        fontSize: metrics.size18,
        fontWeight: '500',
        textAlign: 'center',
        color: colors.white,
        marginBottom: '15%',
    },
})