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
import BottomBar from '../screenComponents/BottomBar';
import TopBar from '../screenComponents/TopBar';








const HomeScreen = () => {

    const navigation = useNavigation();
    const { user, logout } = useAuth();
    


    const DUMMY_DATA = [
        {   
            firstName: "Kyle",
            lastName: "Andruczk",
            age: 20,
            college: "Yale",
            major: "Psychology",
            gradYear: 24,
            photoURL: "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/265624399_1323280181453256_6540662098610217199_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=s8_afe79iuIAX8mIBhc&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_5MXgpRmEEXLJd0x92dGKbel9-42eTXdL9JOEpdRDXBg&oe=61D7EA82&_nc_sid=4f375e",
            key:0
        },
        {   
            firstName: "Carolyn",
            lastName: "Qu",
            age: 19,
            college: "Yale",
            major: "Computer Science",
            gradYear: 24,
            photoURL: "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/271252401_299622165426704_3176272600548155699_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=svF6B3hALQkAX9UEw8z&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT92-SBvn1LMPzSG_J_ieRcoojthAYOEiX1EXGqO6a_HjQ&oe=61D95B16&_nc_sid=4f375e",
            key:1
        },
        {   
            firstName: "Suba",
            lastName: "Ramesh",
            age: 19,
            college: "Yale",
            major: "Computer Science",
            gradYear: 24,
            photoURL: "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/248429970_921674231782724_8314217184271061258_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=zd7aBeE7cA4AX9Xp9OB&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_lGq7qPXLDnMLF-byegh9tvTk7g-J0Vn5Xujk_NHkgvQ&oe=61D863FA&_nc_sid=4f375e",
            key:2
        },
        {   
            firstName: "Suba",
            lastName: "Ramesh",
            age: 19,
            college: "Yale",
            major: "Computer Science",
            gradYear: 24,
            photoURL: "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/248429970_921674231782724_8314217184271061258_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=zd7aBeE7cA4AX9Xp9OB&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_lGq7qPXLDnMLF-byegh9tvTk7g-J0Vn5Xujk_NHkgvQ&oe=61D863FA&_nc_sid=4f375e",
            key:2
        },        {   
            firstName: "Suba",
            lastName: "Ramesh",
            age: 19,
            college: "Yale",
            major: "Computer Science",
            gradYear: 24,
            photoURL: "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/248429970_921674231782724_8314217184271061258_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=zd7aBeE7cA4AX9Xp9OB&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_lGq7qPXLDnMLF-byegh9tvTk7g-J0Vn5Xujk_NHkgvQ&oe=61D863FA&_nc_sid=4f375e",
            key:2
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
            <SafeAreaView style={tw("bg-white")}>
                <TopBar></TopBar>

                {/* cards */}
                <FeedSwiper data={DUMMY_DATA}></FeedSwiper>
                {/* end cards */}
                
                {/* Bottom Bar */}
                <BottomBar></BottomBar>
                {/* end bottom bar */}
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
    },
    imgCard: {
        marginTop: -59,
        height: "90%",
        marginLeft: -20,

        // backgroundColor: "blue",
        width: '112%',
        backgroundColor: "white"

    },
    imgCardText : {
        // alignSelf: "stretch",

        // flex: 1,
        fontFamily: "Chivo-Regular",
        fontSize: 24,
        marginTop: 12,
        marginLeft: 9

    },
    imgCardTextAlt : {
        // alignSelf: "stretch",

        // flex: 1,
        fontFamily: "Chivo-Regular",
        fontSize: 18,
        color: "#939393",
        marginBottom: 9,
        marginLeft: 9

    },
    cardButton: {
        // marginTop: -20,
        // marginLeft: -20,
        // backgroundColor: "transparent"
        // marginRight: -20

        margin: 10,




    },
    bottomContainer: {
        position: "absolute",
        
    }
})


export default HomeScreen


