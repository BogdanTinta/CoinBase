import { StyleSheet } from 'react-native'

import { metrics } from '../../constants/metrics'

export const boxStyle = StyleSheet.create({
    box: {
        position: 'absolute',
        marginTop: metrics.size15,
        alignSelf: 'center',
    },
    value: {
        textAlign: 'center',
        fontSize: metrics.size25,
        marginTop: metrics.size28,
    },
    gradient: {
        width: metrics.size100,
        alignSelf: 'center',
        marginBottom: metrics.size10,
        position: 'absolute',
        height: metrics.size30,
        justifyContent: 'center',
        zIndex: metrics.size1,
    },
    container: {
        marginVertical: metrics.size10
    },
    gradientText: {
        color: 'white',
        textAlign: 'center',
        fontSize: metrics.size12,
    }
})