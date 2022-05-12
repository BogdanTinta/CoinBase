import { StyleSheet } from 'react-native'

import { metrics } from '../../constants/metrics'

export const backStyle = StyleSheet.create({
    buttonTouch: {
        marginLeft: metrics.size40,
    },
    buttonText: {
        fontSize: metrics.size18,
        fontWeight: 'bold'
    }
})