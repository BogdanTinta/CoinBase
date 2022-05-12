import { StyleSheet } from 'react-native'

import { colors } from '../../../constants/colors'
import { metrics } from '../../../constants/metrics'

export const signupStyle = StyleSheet.create({
    container: {
        flex: metrics.size1,
        justifyContent: 'center',
        backgroundColor: colors.appBackground
    },
    image: {
        alignSelf: 'center',
        marginBottom: metrics.size20,
        width: metrics.size94,
        height: metrics.size98,
        marginTop: metrics.size30,
    },
    orText: {
        fontSize: metrics.size14,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
})