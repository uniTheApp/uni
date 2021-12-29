import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { auth } from '../firebase'
import useAuth from '../hooks/useAuth'

const HomeScreen = () => {

    const navigation = useNavigation();
    const { logout } = useAuth();

    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }


    return (
        <View>
            <Text>I am the home screen</Text>
            <Text>Email: {auth.currentUser?.email}</Text>
            <Button title="Go to the Chat Screen" onPress={() => navigation.navigate("Chat")}></Button>

            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.button}>Log Out</Text>

            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen
