import { StyleSheet } from 'react-native'

import { metrics } from '../../constants/metrics'

export const socialAccountsStyle = StyleSheet.create({
    socialAccounts: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: metrics.size30,
    },
    logo: {
        height: metrics.size60,
        width: metrics.size60,
        marginHorizontal: metrics.size10,
    },
    logoText: {
        textAlign: 'center',
        fontSize: metrics.size16,
        marginBottom: metrics.size20,
        fontWeight: '500',
        marginTop: metrics.size30
    },
})