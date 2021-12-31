import React from 'react'
import { View, Text, Button, SafeAreaView, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import useAuth from '../hooks/useAuth'
import tw from "tailwind-rn";
import { Ionicons, Entypo, AntDesign, Feather } from "@expo/vector-icons"
import { useFonts }from 'expo-font'
import AppLoading from 'expo-app-loading';
import Swiper from "react-native-deck-swiper"
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import FeedSwiper from '../screenComponents/FeedSwiper';
