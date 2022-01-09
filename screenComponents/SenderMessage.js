import React from 'react'
import { View, Text } from 'react-native'
import tw from "tailwind-rn"

const SenderMessage = ({ message }) => {
    return (
        <View
            style={[tw("rounded-lg rounded-tr-none px-5 py-3 mx-3 my-2"), { alignSelf: "flex-start", marginLeft: "auto", backgroundColor: "#25CDFE"}]}
        >
            <Text style={tw('text-white')}>{message.message}</Text>
        </View>
    )
}

export default SenderMessage

