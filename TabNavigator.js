import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/CreateUserScreen";
import VerifyEmailScreen from "./screens/VerifyEmailScreen";
import SearchScreen from "./screens/SearchScreen";
import LoginScreen from "./screens/LoginScreen";
import useAuth from "./hooks/useAuth";
import {
  Ionicons,
  Entypo,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  // deconst useAuth hook to get user obj
  const { user } = useAuth();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      {user ? (
        <>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name="home-outline"
                  size={30}
                  color={focused ? "#565656" : "#9C9C9C"}
                />
              ),
            }}
          ></Tab.Screen>
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <AntDesign
                  name="search1"
                  size={30}
                  color={focused ? "#565656" : "#9C9C9C"}
                />
              ),
            }}
          ></Tab.Screen>
          <Tab.Screen
            name="Chat"
            component={ChatScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <MaterialCommunityIcons
                  name="message-text-outline"
                  size={30}
                  color={focused ? "#565656" : "#9C9C9C"}
                />
              ),
            }}
          ></Tab.Screen>
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather
                  name="user"
                  size={30}
                  color={focused ? "#565656" : "#9C9C9C"}
                />
              ),
            }}
          ></Tab.Screen>
        </>
      ) : (
        <Tab.Screen name="Login" component={LoginScreen}></Tab.Screen>
      )}
    </Tab.Navigator>
  );
};

export default TabNavigator;
