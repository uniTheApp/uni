
import { useNavigation } from '@react-navigation/core'
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendEmailVerification } from "@firebase/auth"
import { auth } from "../firebase"

const AuthContext = createContext({})

// const config = {
//     androidClientId: "230372004385-h5c36lha0m0331fa1nnlt3tp60siaegt.apps.googleusercontent.com",
//     iosClientId: "230372004385-60a7rikhsh9pa9v5spm7oil0evah2vo3.apps.googleusercontent.com",
//     scopes: ["profile", "email"],
//     permissions: ["public profile", "email", "gender", "location"]
// }

export const AuthProvider = ({ children }) => {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null)
    const [loadingInitial, setLoadingInitial] = useState(true)
    const [loading, setLoading] = useState(false);
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const email = ""
    const password = ""

    const navigation = useNavigation()

    useEffect(() => auth.onAuthStateChanged((user) => {
        if (user) {
            setUser(user)
            console.log("auth state changed")
            // if(user.emailVerified)
            //   navigation.navigate("Home")
            // else
            //   navigation.navigate("VerifyEmail")
          }else{
            setUser(null)
            console.log("no user?")
          }

            setLoadingInitial(false)
        }), [])

    const handleSignUp = (email, password) => {
        const a = auth
        setLoading(true);
        //check if email
        createUserWithEmailAndPassword(a, email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Registered with:', user.email);
          sendEmailVerification(user)
          
        })
        .then(() => {
          console.log("sent verification email")
        })
        
        .catch(error => alert(error.message))
        .finally(() => setLoading(false))
    
    }

    const handleLogin = (email, password) => {
        const a = auth
        setLoading(true);
        signInWithEmailAndPassword(a, email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Login with:', user.email);
        })
        .catch(error => alert(error.message))
        .finally(() => setLoading(false))
    }

    const handleSignOut = () => {
        console.log("attempting sign out")
        setLoading(true)
        auth
        .signOut()
        .then(() => {
            console.log("Logged out")
            // navigation.replace("Login")
        })
        .catch(error => alert(error.message))
        .finally(() => setLoading(false))
    }

    const memoedValue = useMemo(() => ({
        user,
        loading,
        error,
        handleLogin,
        handleSignUp,
        handleSignOut
    }), [user, loading, error])


    return (
        <AuthContext.Provider 
            value={memoedValue}
        >        
            {/* show the home screen if already logged in */}
            {!loadingInitial && children}
        </AuthContext.Provider>
    );
};

export default function useAuth() {
    return useContext(AuthContext);
}
