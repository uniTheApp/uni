import { useNavigation } from "@react-navigation/native";

import React from "react";
import { SafeAreaView } from "react-native";
import useAuth from "../hooks/useAuth";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import TopBar from "../screenComponents/TopBar";
import ProfilePictures from "../screenComponents/ProfilePictures";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user, handleSignOut } = useAuth();

  let [fontsLoaded] = useFonts({
    OpenSansRegular: require("../assets/fonts/OpenSans-Regular.ttf"),
    OpenSansSemiBold: require("../assets/fonts/OpenSans-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading></AppLoading>;
    //splash screen here as well
  } else {
    return (
      <SafeAreaView>
        <TopBar></TopBar>
        <ProfilePictures> </ProfilePictures>
      </SafeAreaView>
    );
  }
};

export default ProfileScreen;
