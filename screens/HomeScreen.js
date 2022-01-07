import { useNavigation } from '@react-navigation/native'
import {React, useEffect} from 'react'
import {KeyboardAvoidingView, StyleSheet, TextInput, View, Text, Button, TouchableOpacity } from 'react-native'
import {doc, getDoc} from '@firebase/firestore'
import { auth, db } from '../firebase'
import useAuth from '../hooks/useAuth'
// import {handleSignOut} from useAuth

const HomeScreen = () => {

    const navigation = useNavigation();
    const { user, handleSignOut } = useAuth();
    console.log("home screen")
    // try{
    //   const userDoc = getDoc(doc(db, "users", auth.currentUser.uid))
    //   console.log("found user doc")
    // } catch (e){
    //   console.log("could not find user doc")
    // }

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          if(!user.emailVerified)
            navigation.navigate("VerifyEmail")
        }else{
          navigation.navigate("LoginScreen")
        }
      })
  
      return unsubscribe
    }, [])

    return (
        <View>
            <Text>I am the home screen</Text>
            <Text>Email: {auth.currentUser?.email}</Text>

            <Button title="Go to the Chat Screen" onPress={() => navigation.navigate("CreateUser")}></Button>

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