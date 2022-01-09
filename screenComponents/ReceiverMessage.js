import React from 'react'
import { View, Text } from 'react-native'

const ReceiverMessage = ({ message }) => {
    return (
        <View
            style={[tw("rounded-lg rounded-tl-none px-5 py-3 mx-3 my-2"), { alignSelf: "flex-start", marginLeft: "auto", backgroundColor: "#939393"}]}
        
        >
            <Text></Text>
        </View>
    )
}

export default ReceiverMessage
