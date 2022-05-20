import { StyleSheet } from 'react-native'

import { metrics } from '../../constants/metrics'

export const dataStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    status: {
        fontSize: 10,
        marginLeft: 10,
    },
    date: {
        fontSize: 10,
        textAlign: 'right',
    },
    amount: {
        fontSize: 14,
        textAlign: 'right',
        color: '#0FE133'
    },
    gradient: {
        height: 45,
        width: 45,
        borderRadius: 180,
        justifyContent: 'center',
        marginLeft: 25
    },
    type: {
        fontSize: 14,
        marginLeft: 10,
    },
    icon: {
        alignSelf: 'center',
    },
    statusView: {
        flex: 1,
        justifyContent: 'center'
    },
    dateView: {
        marginRight: 25,
        justifyContent: 'center'
    }
})