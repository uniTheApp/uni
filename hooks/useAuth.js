import React, { createContext } from 'react'
import { View, Text } from 'react-native';

const AuthContext = createContext({
    // init state
})

const AuthProvider = ({ children }) => {
    return (
        <View>
            <AuthContext.Provider value={null}>
            {children}
            </AuthContext.Provider>
        </View>
    )
}

export default AuthProvider
