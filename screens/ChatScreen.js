import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import ChatHeader from '../screenComponents/ChatHeader'
import ChatList from '../screenComponents/ChatList'

const ChatScreen = () => {
    return (
        <SafeAreaView  style={{backgroundColor: "white", flex: 1}}>
            <ChatHeader title="Messages"></ChatHeader>
            <ChatList />

        </SafeAreaView>
    )
}

export default ChatScreen
