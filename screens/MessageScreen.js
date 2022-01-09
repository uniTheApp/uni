import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, TextInput, Button, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, FlatList } from 'react-native'
import ChatHeader from '../screenComponents/ChatHeader'
import { useNavigation, useRoute } from '@react-navigation/native'
import getMatchedUserInfo from '../lib/getMatchedUserInfo'
import useAuth from '../hooks/useAuth'
import tw from "tailwind-rn"
import SenderMessage from '../screenComponents/SenderMessage'
import ReceiverMessage from "../screenComponents/ReceiverMessage"


const MessageScreen = () => {

    const navigation = useNavigation();
    const user = useAuth()
    const {params} = useRoute()
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([])
    const sendMessage = () => {};

    const { matchDetails } = params

    return (
        <SafeAreaView style={tw('flex-1 bg-white')}>
            <ChatHeader title={matchDetails.firstName}
            callEnabled
            ></ChatHeader>
            
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? "padding" : "height"}
                style={tw("flex-1")}
                keyboardVerticalOffset={10}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <FlatList
                        data={messages}
                        style={tw('pl-4')}
                        keyExtractor={item => item.id}
                        renderItem={({ item: message }) => 
                            message.userId === user.uid ? (
                                <SenderMessage key={message.id} messages={message}/>
                            ) : (
                                <ReceiverMessage key={message.id} messages={message}/>

                            )
                        }
                    />
                </TouchableWithoutFeedback>




                <View
                    style={tw(
                        "flex-row justify-between bg-white items-center border-t border-gray-200 px-5 py-2"
                        )}
                >
                    <TextInput
                        style={tw('h-10 text-lg')}
                        placeholder="Send Message..."
                        onChangeText={setInput}
                        onSubmitEditing={sendMessage}
                        value={input}
                    />
                    <Button onPress={sendMessage} title="Send" color="#25CDFE"/>
                </View>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

export default MessageScreen
