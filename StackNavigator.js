import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import VerifyEmailScreen from './screens/VerifyEmailScreen'
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import useAuth from './hooks/useAuth';
import CreateUserScreen from './screens/CreateUserScreen';



const Stack = createNativeStackNavigator();




const StackNavigator = () => {
    // deconst useAuth hook to get user obj
    const { user } = useAuth();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            { user ? (
                <>
                    
                    <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
                    <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen}></Stack.Screen>
                    <Stack.Screen name="Chat" component={ChatScreen}></Stack.Screen>
                    <Stack.Screen name="CreateUser" component={CreateUserScreen}></Stack.Screen>

                </>
            ) : (
                <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
            )}
        </Stack.Navigator>
    )
}


export default StackNavigator