import React, { useEffect } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import ChatHeader from '../screenComponents/ChatHeader'
import { useNavigation } from '@react-navigation/native'


const MessageScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" }},);
        return () => {
            navigation.getParent()?.setOptions({ tabBarStyle: undefined},);
            
        }
    }, [navigation])


    return (
        <SafeAreaView>
            <ChatHeader></ChatHeader>
            <Text>messages</Text>
        </SafeAreaView>
    )
}

export default MessageScreen
