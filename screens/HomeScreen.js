import { useNavigation } from '@react-navigation/native'
import {React, useEffect, useLayoutEffect, useState} from 'react'
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-rn";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase'
import useAuth from '../hooks/useAuth'
import FeedSwiper from "../screenComponents/FeedSwiper";
import TopBar from "../screenComponents/TopBar";
// import {handleSignOut} from useAuth

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout, handleSignOut } = useAuth();

  // const DUMMY_DATA = [
  //   {
  //     firstName: "Kyle",
  //     lastName: "Andruczk",
  //     age: 20,
  //     college: "Yale",
  //     major: "Psychology",
  //     gradYear: 24,
  //     photoURL:
  //       "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/265624399_1323280181453256_6540662098610217199_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=s8_afe79iuIAX8mIBhc&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_5MXgpRmEEXLJd0x92dGKbel9-42eTXdL9JOEpdRDXBg&oe=61D7EA82&_nc_sid=4f375e",
  //     key: 0,
  //   },
  //   {
  //     firstName: "Carolyn",
  //     lastName: "Qu",
  //     age: 19,
  //     college: "Yale",
  //     major: "Computer Science",
  //     gradYear: 24,
  //     photoURL:
  //       "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/271252401_299622165426704_3176272600548155699_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=svF6B3hALQkAX9UEw8z&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT92-SBvn1LMPzSG_J_ieRcoojthAYOEiX1EXGqO6a_HjQ&oe=61D95B16&_nc_sid=4f375e",
  //     key: 1,
  //   },
  //   {
  //     firstName: "Suba",
  //     lastName: "Ramesh",
  //     age: 19,
  //     college: "Yale",
  //     major: "Computer Science",
  //     gradYear: 24,
  //     photoURL:
  //       "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/248429970_921674231782724_8314217184271061258_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=zd7aBeE7cA4AX9Xp9OB&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_lGq7qPXLDnMLF-byegh9tvTk7g-J0Vn5Xujk_NHkgvQ&oe=61D863FA&_nc_sid=4f375e",
  //     key: 2,
  //   },
  //   {
  //     firstName: "Suba",
  //     lastName: "Ramesh",
  //     age: 19,
  //     college: "Yale",
  //     major: "Computer Science",
  //     gradYear: 24,
  //     photoURL:
  //       "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/248429970_921674231782724_8314217184271061258_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=zd7aBeE7cA4AX9Xp9OB&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_lGq7qPXLDnMLF-byegh9tvTk7g-J0Vn5Xujk_NHkgvQ&oe=61D863FA&_nc_sid=4f375e",
  //     key: 2,
  //   },
  //   {
  //     firstName: "Suba",
  //     lastName: "Ramesh",
  //     age: 19,
  //     college: "Yale",
  //     major: "Computer Science",
  //     gradYear: 24,
  //     photoURL:
  //       "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/248429970_921674231782724_8314217184271061258_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=zd7aBeE7cA4AX9Xp9OB&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_lGq7qPXLDnMLF-byegh9tvTk7g-J0Vn5Xujk_NHkgvQ&oe=61D863FA&_nc_sid=4f375e",
  //     key: 2,
  //   },
  // ];

  //   // const navigation = useNavigation();
  //   // const { user,  } = useAuth();
  //   console.log("home screen")

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //       if (user) {
    //         if(!user.emailVerified)
    //           navigation.navigate("VerifyEmail")
    //       }else{
    //         navigation.navigate("LoginScreen")
    //       }
    //     })
    
    //     return unsubscribe
    // }, [])

    useLayoutEffect(() => {
      onSnapshot(doc(db, "users", user.uid), (snapshot) => {
        if(!snapshot.exists) {
          console.log(`no profile for ${user.uid}`)
          navigation.navigate("Profile")
        }
        console.log(`profile exists for ${user.uid}`)
      })
    })


    const DUMMY_DATA = [
        {
          firstName: "Kyle",
          lastName: "Andruczk",
          age: 20,
          college: "Yale",
          major: "Psychology",
          gradYear: 24,
          photoURL:
            "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/265624399_1323280181453256_6540662098610217199_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=s8_afe79iuIAX8mIBhc&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_5MXgpRmEEXLJd0x92dGKbel9-42eTXdL9JOEpdRDXBg&oe=61D7EA82&_nc_sid=4f375e",
          key: 0,
        },
        {
          firstName: "Carolyn",
          lastName: "Qu",
          age: 19,
          college: "Yale",
          major: "Computer Science",
          gradYear: 24,
          photoURL:
            "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/271252401_299622165426704_3176272600548155699_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=svF6B3hALQkAX9UEw8z&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT92-SBvn1LMPzSG_J_ieRcoojthAYOEiX1EXGqO6a_HjQ&oe=61D95B16&_nc_sid=4f375e",
          key: 1,
        },
        {
          firstName: "Suba",
          lastName: "Ramesh",
          age: 19,
          college: "Yale",
          major: "Computer Science",
          gradYear: 24,
          photoURL:
            "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/248429970_921674231782724_8314217184271061258_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=zd7aBeE7cA4AX9Xp9OB&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_lGq7qPXLDnMLF-byegh9tvTk7g-J0Vn5Xujk_NHkgvQ&oe=61D863FA&_nc_sid=4f375e",
          key: 2,
        },
        {
          firstName: "Suba",
          lastName: "Ramesh",
          age: 19,
          college: "Yale",
          major: "Computer Science",
          gradYear: 24,
          photoURL:
            "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/248429970_921674231782724_8314217184271061258_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=zd7aBeE7cA4AX9Xp9OB&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_lGq7qPXLDnMLF-byegh9tvTk7g-J0Vn5Xujk_NHkgvQ&oe=61D863FA&_nc_sid=4f375e",
          key: 2,
        },
        {
          firstName: "Suba",
          lastName: "Ramesh",
          age: 19,
          college: "Yale",
          major: "Computer Science",
          gradYear: 24,
          photoURL:
            "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/248429970_921674231782724_8314217184271061258_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=zd7aBeE7cA4AX9Xp9OB&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_lGq7qPXLDnMLF-byegh9tvTk7g-J0Vn5Xujk_NHkgvQ&oe=61D863FA&_nc_sid=4f375e",
          key: 2,
        },
    ];
      
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
            <FeedSwiper data={DUMMY_DATA}></FeedSwiper>
            {/* end cards */}
    
            
    
            {/* end bottom bar */}
          </SafeAreaView>
        );
    }

    // return (
    //     <View>
    //         <Text>I am the home screen</Text>
    //         <Text>Email: {auth.currentUser?.email}</Text>

    //         <Button title="Go to the Chat Screen" onPress={() => navigation.navigate("CreateUser")}></Button>

    //         <TouchableOpacity
    //             onPress={handleSignOut}
    //             style={styles.button}
    //         >
    //             <Text style={styles.button}>Log Out</Text>

    //         </TouchableOpacity>
    //     </View>
    // )
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
