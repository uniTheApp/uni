import { useNavigation } from '@react-navigation/native'

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from "tailwind-rn"
import { Ionicons } from "@expo/vector-icons"


const ChatHeader = ({title}) => {
    const navigation = useNavigation();

    return (
        <View style={tw("p-2 flex-row items-center justify-between")}>
                <TouchableOpacity style={{padding: 6, marginLeft: 10, borderRadius: 10}} onPress={ () => navigation.goBack()}>
                    <Ionicons name="chevron-back-outline" size={32} color="#939393"></Ionicons>
                </TouchableOpacity>
                <Text style={{fontSize: 30, alignSelf: "center"}}>{title}</Text>
                <TouchableOpacity style={{ padding: 6, marginLeft: 10, borderRadius: 10}} onPress={ () => navigation.goBack()}>
                    <Ionicons name="search" size={32} color="#939393"></Ionicons>
                </TouchableOpacity>
        </View>
    )
}

export default ChatHeader
