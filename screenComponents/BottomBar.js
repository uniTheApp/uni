import { useNavigation } from '@react-navigation/native'

import React from 'react'
import { View, Text, Button, SafeAreaView, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import useAuth from '../hooks/useAuth'
import tw from "tailwind-rn";
import { Ionicons, Entypo, AntDesign, Feather } from "@expo/vector-icons"
import { useFonts }from 'expo-font'
import AppLoading from 'expo-app-loading';
import Swiper from "react-native-deck-swiper"
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import FeedSwiper from '../screenComponents/FeedSwiper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BottomBar = () => {
    return (

    <SafeAreaView style={tw("absolute bottom-10 bg-white w-full h-20 pt-6")} >
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{position: "absolute", marginLeft: "15%", marginTop: "2%"}}>
            <Ionicons name="home-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Search")} style={{position: "absolute", marginLeft: "36%", marginTop: "2%"}}>
            <AntDesign name="search1" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")} style={{position: "absolute", marginLeft: "57%", marginTop: "2%"}}>
            <MaterialCommunityIcons name="message-text-outline" size={30} color="black" />                        
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={{position: "absolute", marginLeft: "78%", marginTop: "2%"}}>
            <Feather name="user" size={30} color="black" />                      
        </TouchableOpacity>
    </SafeAreaView>

    )
}

export default BottomBar
