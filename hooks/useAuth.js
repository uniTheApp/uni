import React, { createContext, useContext } from 'react'
import * as Google from "expo-google-app-auth"
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut } from "@firebase/auth"
import { auth } from "../firebase"

const AuthContext = createContext({})

const config = {
    androidClientId: "230372004385-h5c36lha0m0331fa1nnlt3tp60siaegt.apps.googleusercontent.com",
    iosClientId: "230372004385-60a7rikhsh9pa9v5spm7oil0evah2vo3.apps.googleusercontent.com",
    scopes: ["profile", "email"],
    permissions: ["public profile", "email", "gender", "location"]
}

export const AuthProvider = ({ children }) => {

    // may have issue with android in future
    // expo build:android did not let change name to expo hosting
    // around ~1:09:00 in tut vid
    // so may not be able to use expo on android, but will 
    // be able to in future when we change apk package name
    const signInWithGoogle = async () => {
            await Google.logInAsync(config).then( async (logInResult) => {
                if (logInResult.type === 'success') {
                    const { idToken, accessToken } = logInResult;
                    const credential = GoogleAuthProvider.credential(idToken, accessToken);
                    await signInWithCredential(auth, credential)
                }

                return Promise.reject();
            })
    }


    return (
        <AuthContext.Provider 
            value={{
                user: null,
                signInWithGoogle
            }}
            
        >        
        {children}
        </AuthContext.Provider>
    );
};

export default function useAuth() {
    return useContext(AuthContext);
}
