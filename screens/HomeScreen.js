import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'
import useAuth from '../hooks/useAuth'

const HomeScreen = () => {

    const navigation = useNavigation();
    const { logout } = useAuth();

    return (
        <SafeAreaView>
            <Text>I am the home screen</Text>
            <Button title="Go to the Chat Screen" onPress={() => navigation.navigate("Chat")}></Button>

            <Button title="Logout" onPress={logout} ></Button>
        </SafeAreaView>
    )
}

export default HomeScreen
