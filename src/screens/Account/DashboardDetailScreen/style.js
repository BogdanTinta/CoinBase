import { StyleSheet } from 'react-native'

import { colors } from '../../../constants/colors'

export const detailStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradientView: {
        height: 280,
        width: 450,
        borderTopLeftRadius: 160,
        borderTopRightRadius: 160,
        alignSelf: 'center',
        marginTop: 50,
        position: 'absolute',
    },
    card: {
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 30,
        elevation: 50,
        borderColor: 'transparent',
        borderRadius: 5,
    },
    textView: {
        alignSelf: 'center',
        flexDirection: 'row',
        //position: 'absolute',
        textAlign: 'center',
        marginTop: 260,
        marginBottom: 25,
    },
    conversionRate: {
        fontWeight: 'bold',
    },
    textContainer: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
    },
    info: {
        textAlign: 'center',
        fontSize: 12,
        marginTop: 20,
        marginBottom: 15,
    },
    rectangle: {
        alignSelf: 'center',
        marginTop: 20,
    },
    dropdownArea: {
        borderColor: colors.inputBorder,
        borderWidth: 1,
        alignSelf: 'center',
        width: '75%',
        height: 40,
        marginBottom: 20,
    },
    dropdownText: {
        fontSize: 14,
        textAlign: 'left',
    },

})