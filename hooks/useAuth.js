import React, { createContext, useContext } from 'react'
import * as Google from "expo-google-app-auth"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

    // may have issue with android in future
    // expo build:android did not let change name to expo hosting
    // around ~1:09:00 in tut vid
    // so may not be able to use expo on android, but will 
    // be able to in future when we change apk package name
    const signInWithGoogle = async () => {

    }


    return (
    <AuthContext.Provider 
        value={{
            user: null,
        }}
        
    >        
    {children}
    </AuthContext.Provider>
    );
};

export default function useAuth() {
    return useContext(AuthContext);
}
