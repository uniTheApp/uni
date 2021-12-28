import { useNavigation } from '@react-navigation/native'

import React from 'react'
import { View, Text, Button, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import useAuth from '../hooks/useAuth'
import tw from "tailwind-rn";
import { Ionicons } from "@expo/vector-icons"
import { useFonts }from 'expo-font'
import AppLoading from 'expo-app-loading';








const HomeScreen = () => {

    const navigation = useNavigation();
    const { user, logout } = useAuth();

     let [fontsLoaded] = useFonts({
        'Chivo-Regular': require('../assets/fonts/Chivo-Regular.ttf')
      });

    if (!fontsLoaded) {
        // NEED TO CREATE A SPLASH SCREEN
        return <AppLoading></AppLoading>
    }

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


const styles = StyleSheet.create({
    headerText: {
        textAlign: "center",
        fontSize: 24,
        fontFamily: "Chivo-Regular"
    },
    headerLine: {
        borderBottomColor: "#9C9C9C",
        borderBottomWidth: 1, 
        marginTop: 10,
        marginLeft: 9,
        marginRight: 9,
    }
})


export default HomeScreen


