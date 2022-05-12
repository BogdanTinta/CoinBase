import { StyleSheet } from 'react-native'

import { metrics } from '../../constants/metrics'

export const themeStyle = StyleSheet.create({
    container: {
        marginTop: metrics.size40,
        marginBottom: metrics.size20,
    },
    image: {
        height: 140,
        width: metrics.size200,
        marginBottom: metrics.size20,
        alignSelf: 'center',
    },
    title: {
        fontSize: metrics.size22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})