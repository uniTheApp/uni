import { useNavigation } from '@react-navigation/native'

import React from 'react'
import { View, Text, Button, SafeAreaView, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import useAuth from '../hooks/useAuth'
import tw from "tailwind-rn";
import { Ionicons, Entypo } from "@expo/vector-icons"
import { useFonts }from 'expo-font'
import AppLoading from 'expo-app-loading';
import Swiper from "react-native-deck-swiper"
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';







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
            photoURL: "https://avatars.githubusercontent.com/u/84470596?v=4",
        },
        {   
            firstName: "Carolyn",
            lastName: "Qu",
            age: 19,
            college: "Yale",
            major: "Computer Science",
            gradYear: 24,
            photoURL: "https://avatars.githubusercontent.com/u/67798872?v=4",
        },
        {   
            firstName: "Suba",
            lastName: "Ramesh",
            age: 19,
            college: "Yale",
            major: "Computer Science",
            gradYear: 24,
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
                {/* <View>
                    
                    <Text style={styles.headerText}>USER - COLLEGE YEAR</Text>
                    <TouchableOpacity style={tw("absolute right-4")}>
                        <Ionicons name="filter" size={24} color="black" />
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.headerLine}></View> */}

                {/* cards */}
                <View style={styles.imgCardSwipe}>
                    <Swiper cards={DUMMY_DATA}
                        renderCard={(card) => 
                            <View key={card.id} style={styles.imgCard}>
                                <View>
                                    <View>
                                        <Text style={styles.imgCardText}>{card.firstName} - {card.college} '{card.gradYear}</Text>
                                        <Text style={styles.imgCardText}>{card.age} years old | {card.major}</Text>
                                    </View>
                                    <TouchableOpacity style={tw("absolute right-4")}>
                                        <Entypo name="dots-three-vertical" size={20} color="black" />
                                    </TouchableOpacity>


                                </View>
                                <Image style={{flex:1 , width: undefined, height: undefined}}  source={{uri: card.photoURL}}></Image>
                            </View>

                        }
            
                    />
                </View>


                {/* end cards */}
                
          
    
                {/* end of body */}
    
    

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
        backgroundColor: "blue",
        width: '112%'

    },
    imgCardText : {
        // alignSelf: "stretch",
        backgroundColor: "red",
        // flex: 1,
        fontFamily: "Chivo-Regular",
        fontSize: 24

    },
    imgCardSwipe: {
        // marginTop: -20,
        marginLeft: -20,
        // backgroundColor: "transparent"
        // marginRight: -20





    },
})


export default HomeScreen


