import { useNavigation } from '@react-navigation/native'
import { TwitterAuthProvider } from 'firebase/auth'
import React from 'react'
import { View, Text, Button, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import useAuth from '../hooks/useAuth'
import tw from "tailwind-rn";
import { Ionicons } from "@expo/vector-icons"
import { useFonts, Chivo_300Light } from '@expo-google-fonts/chivo'

const styles = StyleSheet.create({
    headerText: {
        textAlign: "center",
        fontSize: 24,
        fontFamily: "Chivo_300Light"
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

    let [fontsloaded] = useFonts({
        Chivo_300Light,
    })


    return (
        <SafeAreaView>
            {/* header */}
            <View style={tw("items-center relative")} >
                <Text style={styles.headerText}>UnI</Text>
                <TouchableOpacity style={tw("absolute right-0")}>
                    <Ionicons name="filter" size={24} color="black" />
                </TouchableOpacity>
                
            </View>
            <View style={styles.headerLine}></View>



            {/* end of header */}


            <Text >I am the home screen</Text>
            <Button title="Go to the Chat Screen" onPress={() => navigation.navigate("Chat")}></Button>

            <Button title="Logout" onPress={logout} ></Button>
        </SafeAreaView>
    )


}

export default HomeScreen


