import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import LoginScreen from './screens/LoginScreen';
import useAuth from './hooks/useAuth';


const Tab = createBottomTabNavigator();




const TabNavigator = () => {
    // deconst useAuth hook to get user obj
    const { user } = useAuth();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            { user ? (
                <>
                    <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
                    <Tab.Screen name="Chat" component={ChatScreen}></Tab.Screen>
                    <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
                    <Tab.Screen name="Search" component={SearchScreen}></Tab.Screen>

                </>
            ) : (
                <Tab.Screen name="Login" component={LoginScreen}></Tab.Screen>
            )}
        </Tab.Navigator>
    )
}


export default TabNavigator