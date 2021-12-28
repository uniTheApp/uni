import { useNavigation } from '@react-navigation/native'

import React from 'react'
import { View, Text, Button, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import useAuth from '../hooks/useAuth'
import tw from "tailwind-rn";
import { Ionicons } from "@expo/vector-icons"
import { useFonts }from 'expo-font'
import AppLoading from 'expo-app-loading';
import Swiper from "react-native-deck-swiper"







const HomeScreen = () => {

    const navigation = useNavigation();
    const { user, logout } = useAuth();


    const DUMMY_DATA = [
        {   
            firstName: "Kyle",
            lastName: "Andruczk",
            age: 20,
            photoURL: "https://avatars.githubusercontent.com/u/84470596?v=4",
        },
        {   
            firstName: "Carolyn",
            lastName: "Qu",
            age: 19,
            photoURL: "https://avatars.githubusercontent.com/u/67798872?v=4",
        },
        {   
            firstName: "Suba",
            lastName: "Ramesh",
            age: 19,
            photoURL: "https://avatars.githubusercontent.com/u/18357230?v=4",
        },
    ]

    
    





     let [fontsLoaded] = useFonts({
        'Chivo-Regular': require('../assets/fonts/Chivo-Regular.ttf')
      });

    if (!fontsLoaded) {
        // NEED TO CREATE A SPLASH SCREEN
        return <AppLoading></AppLoading>
    } else {
        return (
            <SafeAreaView>
                {/* header */}
                <View style={tw("items-center relative")} >
                    <Text style={styles.headerText}>UnI</Text>
                    <TouchableOpacity style={tw("absolute right-4")}>
                        <Ionicons name="filter" size={24} color="black" />
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.headerLine}></View>
                {/* end of header */}


                {/* body / swipe section */}
                <View style={tw("items-center relative")} >
                    
                    <Text style={styles.headerText}>USER - COLLEGE YEAR</Text>
                    <TouchableOpacity style={tw("absolute right-4")}>
                        <Ionicons name="filter" size={24} color="black" />
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.headerLine}></View>

                {/* cards */}
                <View style={tw("relative")}>
                    <Swiper cards={DUMMY_DATA}
                        renderCard={(card) => 
                            <View key={card.id} style={tw("bg-red-500 h-3/4 left-0")}>
                                <Text>{card.firstName}</Text>
                            </View>

                        }
                    />
                </View>


                {/* end cards */}
                
          
    
                {/* end of body */}
    
    
                <Text >I am the home screen</Text>
                <Button title="Go to the Chat Screen" onPress={() => navigation.navigate("Chat")}></Button>
    
                <Button title="Logout" onPress={logout} ></Button>
            </SafeAreaView>
        )
    }


    


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


