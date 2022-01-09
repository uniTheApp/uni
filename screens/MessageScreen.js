import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import ChatHeader from '../screenComponents/ChatHeader'

const MessageScreen = () => {
    return (
        <SafeAreaView>
            <ChatHeader></ChatHeader>
            <Text>messages</Text>
        </SafeAreaView>
    )
}

export default MessageScreen
