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
import BottomBar from "../screenComponents/BottomBar";
import TopBar from "../screenComponents/TopBar";
import ProfilePictures from "../screenComponents/profilePictures";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();

  //splash screen here as well

  let [fontsLoaded] = useFonts({
    OpenSansRegular: require("../assets/fonts/OpenSans-Regular.ttf"),
    OpenSansSemiBold: require("../assets/fonts/OpenSans-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaView>
        <BottomBar></BottomBar>
      </SafeAreaView>
      //   <View>
      //     <Text style={styles.topText}> Daniel </Text>
      //   </View>
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
