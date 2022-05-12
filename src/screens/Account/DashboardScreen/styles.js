import { StyleSheet } from 'react-native'

import { metrics } from '../../../constants/metrics'

export const dashboardStyle = StyleSheet.create({
    container: {
        flex: metrics.size1,
    },
    cards: {
        alignSelf: 'center',
        marginVertical: metrics.size10,
    },
    greet: {
        fontSize: metrics.size25,
        fontWeight: '500',
        marginLeft: metrics.size35,
        marginTop: metrics.size30,
    },
    text: {
        marginLeft: metrics.size35,
        fontSize: metrics.size16,
        marginBottom: metrics.size10,
    }
})