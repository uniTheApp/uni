import React, { useEffect } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import ChatHeader from '../screenComponents/ChatHeader'
import { useNavigation, useRoute } from '@react-navigation/native'
import getMatchedUserInfo from '../lib/getMatchedUserInfo'
import useAuth from '../hooks/useAuth'


const MessageScreen = () => {

    const navigation = useNavigation();
    const user = useAuth()
    const {params} = useRoute()

    const { matchDetails } = params
    console.log(matchDetails)
    return (
        <SafeAreaView>
            <ChatHeader title={matchDetails.firstName}
            callEnabled
            ></ChatHeader>
            <Text>messages</Text>
        </SafeAreaView>
    )
}

export default MessageScreen
