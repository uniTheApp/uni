import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import LoginScreen from './screens/LoginScreen';
import useAuth from './hooks/useAuth';


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
                    <Stack.Screen name="Chat" component={ChatScreen}></Stack.Screen>
                    <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
                    <Stack.Screen name="Search" component={SearchScreen}></Stack.Screen>

                </>
            ) : (
                <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
            )}
        </Stack.Navigator>
    )
}


export default StackNavigator