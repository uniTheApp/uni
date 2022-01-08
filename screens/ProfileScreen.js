import { useNavigation } from "@react-navigation/native";

import React from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import useAuth from "../hooks/useAuth";
import tw from "tailwind-rn";
import { Ionicons, Entypo, AntDesign, Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {
  backgroundColor,
  color,
} from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import TopBar from "../screenComponents/TopBar";
import PictureEdit from "../screenComponents/items/PictureEdit";
import ProfilePictures from "../screenComponents/ProfilePictures";

const ProfileScreen = () => {
  const DUMMY_PHOTOS = [
    {
      photoURL:
        "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/265624399_1323280181453256_6540662098610217199_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=s8_afe79iuIAX8mIBhc&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_5MXgpRmEEXLJd0x92dGKbel9-42eTXdL9JOEpdRDXBg&oe=61D7EA82&_nc_sid=4f375e",
      key: 0,
    },
    {
      photoURL:
        "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/271252401_299622165426704_3176272600548155699_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=svF6B3hALQkAX9UEw8z&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT92-SBvn1LMPzSG_J_ieRcoojthAYOEiX1EXGqO6a_HjQ&oe=61D95B16&_nc_sid=4f375e",
      key: 1,
    },
    {
      photoURL:
        "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/248429970_921674231782724_8314217184271061258_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=zd7aBeE7cA4AX9Xp9OB&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_lGq7qPXLDnMLF-byegh9tvTk7g-J0Vn5Xujk_NHkgvQ&oe=61D863FA&_nc_sid=4f375e",
      key: 2,
    },
    {
      photoURL:
        "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/248429970_921674231782724_8314217184271061258_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=zd7aBeE7cA4AX9Xp9OB&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_lGq7qPXLDnMLF-byegh9tvTk7g-J0Vn5Xujk_NHkgvQ&oe=61D863FA&_nc_sid=4f375e",
      key: 3,
    },
    {
      photoURL:
        "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/248429970_921674231782724_8314217184271061258_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=zd7aBeE7cA4AX9Xp9OB&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_lGq7qPXLDnMLF-byegh9tvTk7g-J0Vn5Xujk_NHkgvQ&oe=61D863FA&_nc_sid=4f375e",
      key: 4,
    },
    {
      photoURL:
        "https://instagram.fagc1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/248429970_921674231782724_8314217184271061258_n.jpg?_nc_ht=instagram.fagc1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=zd7aBeE7cA4AX9Xp9OB&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_lGq7qPXLDnMLF-byegh9tvTk7g-J0Vn5Xujk_NHkgvQ&oe=61D863FA&_nc_sid=4f375e",
      key: 5,
    },
  ];

  const navigation = useNavigation();
  const { user, logout } = useAuth();

  let [fontsLoaded] = useFonts({
    OpenSansRegular: require("../assets/fonts/OpenSans-Regular.ttf"),
    OpenSansSemiBold: require("../assets/fonts/OpenSans-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading></AppLoading>;
    //splash screen here as well
  } else {
    return (
      <SafeAreaView style={tw("bg-white")}>
        <TopBar></TopBar>
        <ProfilePictures Data={DUMMY_PHOTOS}> </ProfilePictures>
        {/* <BottomBar> </BottomBar> */}
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  topText: {
    textAlign: "center",
    fontFamily: "OpenSansSemiBold",
    fontSize: 50,
  },
});

export default ProfileScreen;
