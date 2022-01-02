import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "@firebase/auth"
import { auth } from "../firebase"

const HomeScreen = () => {

    const navigation = useNavigation();
    const { logout } = useAuth();

    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            console.log("Logged out")
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }


    return (
        <View>
            <Text>\n\nI am the create user screen</Text>
            <Text>Email: {auth.currentUser?.email}</Text>
            {/* <Button title="Go to the Chat Screen" onPress={() => navigation.navigate("Chat")}></Button> */}

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