import { useNavigation } from '@react-navigation/native'
import {React, useLayoutEffect} from 'react'
import {
  SafeAreaView,
  StyleSheet,
} from "react-native";
import tw from "tailwind-rn";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase'
import useAuth from '../hooks/useAuth'
import FeedSwiper from "../screenComponents/FeedSwiper";
import TopBar from "../screenComponents/TopBar";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout, handleSignOut } = useAuth();

    useLayoutEffect(() => {
      onSnapshot(doc(db, "users", user.uid), (snapshot) => {
        if(!snapshot.exists) {
          console.log(`no profile for ${user.uid}`)
          navigation.navigate("Profile")
        }
        console.log(`profile exists for ${user.uid}`)
      })
    })
      
    let [fontsLoaded] = useFonts({
        "Chivo-Regular": require("../assets/fonts/Chivo-Regular.ttf"),
    });


    if (!fontsLoaded) {
        // NEED TO CREATE A SPLASH SCREEN
        return <AppLoading></AppLoading>;
    } else {
        return (
          <SafeAreaView style={tw("bg-white")}>
            <TopBar></TopBar>
    
            {/* cards */}
            <FeedSwiper></FeedSwiper>
            {/* end cards */}
    
            
    
            {/* end bottom bar */}
          </SafeAreaView>
        );
    }
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
  })
