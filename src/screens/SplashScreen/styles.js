import { StyleSheet } from 'react-native'

import { metrics } from '../../constants/metrics'

export const splashStyle = StyleSheet.create({
    splash: {
        flex: metrics.size1,
    },
    logo: {
        alignSelf: 'center',
        marginTop: '70%',
    }
})