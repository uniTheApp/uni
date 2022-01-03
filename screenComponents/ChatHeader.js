import { useNavigation } from '@react-navigation/native'

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from "tailwind-rn"
import { Foundations, Ionicons } from "@expo/vector-icons"





const ChatHeader = ({title, callEnabled}) => {
    const navigation = useNavigation();

    return (
        <View style={tw("p-2 flex-row items-center justify-between")}>
            <View style={tw('flex flex-row items-center')}>
                <TouchableOpacity onPress={ () => navigation.goBack()} style={{margin: "4%", backgroundColor: "#939393", borderRadius: 10}}>
                    <Ionicons name="chevron-back-outline" size={32} color="#B8EFFF" style={{margin: 3}}></Ionicons>
                </TouchableOpacity>
                <Text style={{fontSize: 34, marginLeft: "7%"}}>Chat</Text>
            </View>

        </View>
    )
}

export default ChatHeader
