import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {KeyboardAvoidingView, StyleSheet, TextInput, View, Text, Button, TouchableOpacity } from 'react-native'
import { auth } from '../firebase'
import useAuth from '../hooks/useAuth'

const VerifyEmailScreen = () => {

    const navigation = useNavigation();
    const { logout } = useAuth();

    checkForVerifiedInterval = setInterval(() => {
        auth.currentUser
          .reload()
          .then(ok => {
            if (auth.currentUser.emailVerified) {
              console.log("email verified")
              navigation.replace("CreateUser")//instead go to create profile?
              clearInterval(checkForVerifiedInterval)

            }
            else{
                console.log("not verified")
            }
          })
      }, 1000)


    return (
        <View>
            <Text>I am the verification screen</Text>
            <Text>Email: {auth.currentUser?.email}</Text>

        </View>
    )
}

export default VerifyEmailScreen

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