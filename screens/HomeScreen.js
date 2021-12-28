import { useNavigation } from '@react-navigation/native'
import { TwitterAuthProvider } from 'firebase/auth'
import React from 'react'
import { View, Text, Button, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import useAuth from '../hooks/useAuth'
import tw from "tailwind-rn";

const styles = StyleSheet.create({
    headerText: {
        textAlign: "center",
        fontSize: 24,
    },
    headerLine: {
        borderBottomColor: "#9C9C9C",
        borderBottomWidth: 1, 
        marginTop: 10,
        marginLeft: 9,
        marginRight: 9,
    }
})

const HomeScreen = () => {

    const navigation = useNavigation();
    const { user, logout } = useAuth();


    return (
        <SafeAreaView>
            {/* header */}
            <View >
                <Text style={styles.headerText}>UnI</Text>
                <View style={styles.headerLine}></View>
                <TouchableOpacity></TouchableOpacity>
            </View>


            {/* end of header */}


            <Text >I am the home screen</Text>
            <Button title="Go to the Chat Screen" onPress={() => navigation.navigate("Chat")}></Button>

            <Button title="Logout" onPress={logout} ></Button>
        </SafeAreaView>
    )


}

export default HomeScreen


