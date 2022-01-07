import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendEmailVerification } from "@firebase/auth"
import {doc, setDoc} from "@firebase/firestore"
import { auth, db } from "../firebase"
import first from 'ee-first'
import UploadImage from '../screenComponents/UploadImage'

const CreateUserScreen = () => {
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [college, setCollege] = useState('')
  const [gradYear, setGradYear] = useState('')
  const [major, setMajor] = useState('')

  const [image, setImage] = useState(null)
  const [loadingInitial, setLoadingInitial] = useState(true)
  const [loading, setLoading] = useState(false);

  // const [image, setImage] = useState(null);
  // const [uploading, setUploading] = useState(false);
  // const [transferred, setTransferred] = useState(0);


  const navigation = useNavigation()

  const loadUser = () => {
    auth.onAuthStateChanged(async function(user)  {
      if(user){
          setDoc(doc(db, "users", auth.currentUser.uid), {
              age: age, //current date rn
              email: auth.currentUser.email,
              firstName: firstName,
              lastName: lastName,
              college: college,
              gradYear: gradYear,
              major: major,
              photoURL: image,
              userId: auth.currentUser.uid

          })
          // db.doc('/users/${auth.currentUser.userId}').set(userCredentials)
          console.log(`just set doc /users/${auth.currentUser.uid}`)
        }
        else{
          console.log("no user")
        }
      })
      navigation.navigate("Home")
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          style={styles.input}
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          style={styles.input}
        />
        <TextInput
            placeholder="Age"
            value={age}
            onChangeText={setAge}
            style={styles.input}
        />
        <TextInput
            placeholder="College"
            value={college}
            onChangeText={setCollege}
            style={styles.input}
        />
        <TextInput
            placeholder="Grad Year"
            value={gradYear}
            onChangeText={setGradYear}
            style={styles.input}
        />
        <TextInput
            placeholder="Major"
            value={major}
            onChangeText={setMajor}
            style={styles.input}
        />
        <TextInput
            placeholder="Profile Pic"
            value={image}
            onChangeText={setImage}
            style={styles.input}
        />

        <UploadImage></UploadImage>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={loadUser}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Done</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default CreateUserScreen

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