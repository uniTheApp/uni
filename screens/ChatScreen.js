import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import ChatHeader from '../screenComponents/ChatHeader'

const ChatScreen = () => {
    return (
        <SafeAreaView  style={{backgroundColor: "white", flex: 1}}>
            <ChatHeader title="Chat"></ChatHeader>
            <Text>I am the chat screen</Text>

        </SafeAreaView>
    )
}

export default ChatScreen
