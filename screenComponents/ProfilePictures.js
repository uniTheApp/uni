import React from "react";
import {
  Alert,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Image,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  backgroundColor,
  color,
} from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import tw from "tailwind-rn";
<<<<<<< HEAD
import {
  Ionicons,
  Entypo,
  AntDesign,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
=======
>>>>>>> 4574514f32a3061105b7eed6d7a88f824e541ff0
import { styles } from "./Style";
import SmallFillInBox from "./boxes/SmallFillInBox";
import MediumFillInBox from "./boxes/MediumFillInBox";
import LargeFillInBox from "./boxes/LargeFillInBox";
<<<<<<< HEAD
import PictureEdit from "./items/PictureEdit";
=======
>>>>>>> 4574514f32a3061105b7eed6d7a88f824e541ff0

const profilePictures = ({ Data }) => {
  return (
    <SafeAreaView>
<<<<<<< HEAD
      {/* <View> */}
      {/* <Text style={[styles.topText]}>Yale University</Text> */}
      {/* <Text style={[styles.collegeText]}>Yale University</Text> */}
      {/* </View> */}

      {/* all pictures */}
      <View>
        <FlatList
          data={Data}
          scrollEnabled="false"
          keyExtractor={(item, index) => item.key}
=======
      <View>
        <Text style={[styles.topText]}>Daniel</Text>
        <Text style={[styles.collegeText]}>Yale University</Text>
      </View>

      {/* all pictures */}
      <View style={styles.pictureContainer}>
        <FlatList
          data={Data}
>>>>>>> 4574514f32a3061105b7eed6d7a88f824e541ff0
          //style={{ position: "absolute", bottom: 80 }}
          //carolyn note: not too sure why but you need key in order to change columns
          //may want to change this lol and just use wrapping
          numColumns={3}
          key={3}
<<<<<<< HEAD
          renderItem={({ item, index }) => (
            <View style={styles.pictureContainer}>
              <Image style={styles.pictures} source={{ uri: item.photoURL }} />
            </View>
          )}
        />
        {/* <PictureEdit></PictureEdit> */}
      </View>
      <View style={{ flexGrow: 1 }}>
        {/* CAROLYN NOTE: this percentage is kinda messed up ngl, need to do some calculations */}
        <ScrollView style={{ height: "63%" }}>
          {/* Basic Module */}
          <View>
            <View style={styles.moduleHeaderContainer}>
              <Text style={styles.moduleHeaderText}>Basics</Text>
              {/* <MaterialIcons name="edit" size={25} color="#939393" /> */}
            </View>
            <View style={styles.rectContainer}>
              <MediumFillInBox
                textQuestion={"First Name"}
                textAnswer={"Daniel"}
              ></MediumFillInBox>
              <MediumFillInBox
                textQuestion={"University"}
                textAnswer={"Yale University"}
              ></MediumFillInBox>
              <MediumFillInBox
                textQuestion={"Class Year"}
                textAnswer={"2024"}
              ></MediumFillInBox>
              <MediumFillInBox
                textQuestion={"Pronouns"}
                textAnswer={"they/them"}
              ></MediumFillInBox>
=======
          renderItem={({ item }) => (
            <Image style={styles.pictures} source={{ uri: item.photoURL }} />
          )}
        />
      </View>
      <View style={{ flexGrow: 1 }}>
        {/* CAROLYN NOTE: this percentage is kinda messed up ngl, need to do some calculations */}
        <ScrollView style={{ height: "54%" }}>
          {/* Basic Module */}
          <View>
            <Text style={styles.moduleHeaderText}>Basics</Text>
            <View style={styles.rectContainer}>
              <SmallFillInBox
                textQuestion={"Class Year"}
                textAnswer={"2024"}
              ></SmallFillInBox>
              <SmallFillInBox
                textQuestion={"Pronouns"}
                textAnswer={"she/her"}
              ></SmallFillInBox>
>>>>>>> 4574514f32a3061105b7eed6d7a88f824e541ff0
              <MediumFillInBox
                textQuestion={"Major"}
                textAnswer={"Computer Science"}
              ></MediumFillInBox>
              <MediumFillInBox
                textQuestion={"Second Major/Minor"}
                textAnswer={"Economics"}
              ></MediumFillInBox>
              <MediumFillInBox
                textQuestion={"Location"}
                textAnswer={"Grace Hopper College"}
              ></MediumFillInBox>
<<<<<<< HEAD
              <MediumFillInBox
                textQuestion={"Height"}
                textAnswer={"5'5\""}
              ></MediumFillInBox>
=======
>>>>>>> 4574514f32a3061105b7eed6d7a88f824e541ff0
            </View>
          </View>

          <View>
<<<<<<< HEAD
            <Text style={[styles.moduleHeaderText, { marginTop: 10 }]}>
              Questions + Preferences
            </Text>
            <View style={[styles.rectContainer, { height: 550 }]}>
=======
            <Text style={styles.moduleHeaderText}>Questions + Preferences</Text>
            <View style={[styles.rectContainer, { height: 450 }]}>
>>>>>>> 4574514f32a3061105b7eed6d7a88f824e541ff0
              <MediumFillInBox
                textQuestion={"Where do you wanna go now?"}
              ></MediumFillInBox>
              <LargeFillInBox
                textAnswer={"I want to go home now"}
              ></LargeFillInBox>
              <MediumFillInBox
                textQuestion={"Where do you wanna go now?"}
              ></MediumFillInBox>
              <LargeFillInBox
                textAnswer={"I want to go home now"}
              ></LargeFillInBox>
              <MediumFillInBox
                textQuestion={"Where do you wanna go now?"}
              ></MediumFillInBox>
              <LargeFillInBox
                textAnswer={"I want to go home now"}
              ></LargeFillInBox>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default profilePictures;
