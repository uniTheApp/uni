import React from 'react'
import { View, Text } from 'react-native'
import tw from "tailwind-rn"
import { Foundations, Ionicons } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-web'
import { useNavigation } from '@react-navigation/native'



const ChatHeader = ({title, callEnabled}) => {
    const navigation = useNavigation();

    return (
        <View style={tw("p-2 flex-row items-center justify-between")}>
            <View style={tw('flex flex-row items-center')}>
                {/* <TouchableOpacity onPress={ () => navigation.goBack()} style={tw("p-2")}>
                    <Ionicons name="chevron-back-outline" size={34} color="#B8EFFF"></Ionicons>
                </TouchableOpacity> */}
            </View>

        </View>
    )
}

export default ChatHeader
