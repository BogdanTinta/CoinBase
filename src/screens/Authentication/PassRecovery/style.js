import { StyleSheet } from 'react-native'

import { metrics } from '../../../constants/metrics'

export const recoveryStyle = StyleSheet.create({
    container: {
        flex: metrics.size1,
    },
    image: {
        height: metrics.size130,
        width: metrics.size180,
        marginBottom: metrics.size20,
    },
    title: {
        fontSize: metrics.size22,
        fontWeight: 'bold',
    },
})