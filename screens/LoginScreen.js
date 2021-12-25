import React from 'react'
import { View, Text } from 'react-native'
import useAuth from '../hooks/useAuth';

const LoginScreen = () => {
    // ES6 deconstrution operator
        const { user } = useAuth();

        console.log(user)
    return (
        <View>
            <Text>Please Login</Text>
        </View>
    )
}

export default LoginScreen
