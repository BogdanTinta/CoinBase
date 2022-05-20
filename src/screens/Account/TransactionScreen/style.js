import { StyleSheet } from 'react-native'

import { metrics } from '../../../constants/metrics'

export const transactionStyle = StyleSheet.create({
    separator: {
        height: metrics.size20,
        width: metrics.size20,
    },
    container: {
        flex: metrics.size1,
    },
    bubbles: {
        alignSelf: 'center',
    }
})