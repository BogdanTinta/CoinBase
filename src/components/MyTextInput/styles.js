import { StyleSheet } from 'react-native'

import { metrics } from '../../constants/metrics'
import { colors } from '../../constants/colors'

export const textInputStyle = StyleSheet.create({
    textInputArea: {
        borderWidth: metrics.size1,
        borderColor: colors.inputBorder,
        borderRadius: metrics.size5,
        marginHorizontal: metrics.size45,
        flexDirection: 'row',
        marginVertical: metrics.size10,
    },
    textInput: {
        marginLeft: metrics.size10,
        flex: metrics.size1,
    },
    icon: {
        alignSelf: 'center',
        marginRight: metrics.size20,
        width: metrics.size19,
        height: metrics.size18,
    },
})