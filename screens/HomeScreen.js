import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text>I am the home screen</Text>
            <Button title="Go to the Chat Screen" onPress={() => navigation.navigate("Chat")}></Button>
        </View>
    )
}

export default HomeScreen
