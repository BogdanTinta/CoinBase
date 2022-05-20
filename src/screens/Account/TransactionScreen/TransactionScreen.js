import React from 'react'
import { View, FlatList } from 'react-native'

import TransactionBubble from '../../../components/TransactionBubble/TransactionBubble'
import ValueBox from '../../../components/ValueBox/ValueBox'
import Title from '../../../components/Title/Title'
import TransactionData from '../../../components/TransactionData/TransactionData'

import { bubbles } from '../../../constants/arrays'
import { transactionHistory } from '../../../constants/arrays'
import { transactionStyle } from './style'
import { metrics } from '../../../constants/metrics'

const TransactionScreen = () => {
    return (
        <View style={transactionStyle.container}>
            <Title text={'Transaction History'} />

            <TransactionBubble
                size={metrics.size120}
                icon={require('../../../../assets/icons/bubble_icons/transactions.png')}
                text={'Total Number'}
                value={metrics.size13}
                iconSize={{ height: metrics.size28, width: metrics.size39 }}
            />

            <FlatList
                style={transactionStyle.bubbles}
                ItemSeparatorComponent={() => {
                    return <View style={transactionStyle.separator}></View>
                }}
                horizontal
                data={bubbles}
                keyExtractor={(bubbles) => bubbles.text}
                contentContainerStyle={{ paddingBottom: metrics.size20 }}
                renderItem={({ item }) => {
                    return <TransactionBubble
                        size={metrics.size85}
                        icon={item.icon}
                        text={item.text}
                        value={item.value}
                        iconSize={item.iconSize}
                    />
                }}
            />

            <ValueBox
                showGradient={true}
                value={'N 12,508.05'}
            />

            <Title text={'Recent Transactions'} />

            <FlatList
                data={transactionHistory}
                scrollEnabled={true}
                keyExtractor={(transactionHistory) => transactionHistory.id}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => {
                    return <View style={transactionStyle.separator}></View>
                }}
                renderItem={({ item }) => {
                    return (
                        <TransactionData
                            gradient={item.gradient}
                            type={item.type}
                            status={item.status}
                            amount={item.amount}
                            date={item.date}
                        />
                    )
                }}
            />


        </View>
    )
}

export default TransactionScreen