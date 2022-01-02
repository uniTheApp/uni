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
                <TouchableOpacity onPress={ () => navigation.navigate("Home")} style={tw("p-2")}>
                    <Ionicons name="chevron-back-outline" size={34} color="#B8EFFF"></Ionicons>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ChatHeader
