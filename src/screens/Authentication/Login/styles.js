import { StyleSheet } from 'react-native'

import { colors } from '../../../constants/colors'
import { metrics } from '../../../constants/metrics'

export const loginStyle = StyleSheet.create({
    container: {
        flex: metrics.size1,
        justifyContent: 'center',
        backgroundColor: colors.appBackground
    },
    iconPassword: {
        width: metrics.size15,
        height: metrics.size19,
    },
    passwordText: {
        alignSelf: 'center',
        marginTop: metrics.size20,
        textDecorationLine: 'underline',
        fontWeight: '500',
        fontSize: metrics.size12,
    },
    passwordTextTouch: {
        marginHorizontal: '30%',
    },
    buttonText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        color: colors.white,
        fontSize: metrics.size15,
    },
    image: {
        alignSelf: 'center',
        marginBottom: metrics.size20,
        width: metrics.size94,
        height: metrics.size98,
        marginTop: metrics.size120,
    },
    quote: {
        fontSize: metrics.size11,
        textAlign: 'center',
        lineHeight: metrics.size15,
        fontWeight: '500',
        marginBottom: metrics.size10,
    },
    buttonCreate: {
        height: metrics.size50,
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: metrics.size16,
    },
    createAccountText: {
        color: colors.white,
        fontSize: metrics.size15,
        textAlignVertical: 'center',
    }
})