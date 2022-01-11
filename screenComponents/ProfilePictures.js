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
import { useState, useEffect } from "react/cjs/react.development";
import useAuth from "../hooks/useAuth";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import {
  Ionicons,
  Entypo,
  AntDesign,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { styles } from "./Style";
import SmallFillInBox from "./boxes/SmallFillInBox";
import MediumFillInBox from "./boxes/MediumFillInBox";
import LargeFillInBox from "./boxes/LargeFillInBox";
import PictureEdit from "./items/PictureEdit";
import Position from "react-native/Libraries/Components/Touchable/Position";

const Item = ({ image }) => (
  <View style={styles.pictureContainer}>
    <Image style={styles.pictures} source={{ uri: image.photoURL }} />
  </View>
);

const profilePictures = () => {
  //RETRIEVING PHOTOS
  const [profiles, setProfiles] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    let unsub;

    const fetchCards = async () => {
      unsub = onSnapshot(collection(db, "users"), (snapshot) => {
        setProfiles(
          snapshot.docs
            .filter((doc) => doc.id !== user.uid)
            .map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
        );
      });
    };

    fetchCards();
    return unsub;
  }, []);

  const renderItem = ({ item }) => {
    console.log(item);
    return <Item image={item} />;
  };

  return (
    <SafeAreaView>
      {/* <View> */}
      {/* <Text style={[styles.topText]}>Yale University</Text> */}
      {/* <Text style={[styles.collegeText]}>Yale University</Text> */}
      {/* </View> */}

      {/* all pictures */}

      <View style={styles.abovePictureContainer}>
        <FlatList
          data={profiles}
          scrollEnabled="false"
          //style={{ position: "absolute", bottom: 80 }}
          //carolyn note: not too sure why but you need key in order to change columns
          //may want to change this lol and just use wrapping
          numColumns={3}
          key={3}
          keyExtractor={(item, index) => item.key}
          renderItem={renderItem}
        />
      </View>

      <View style={styles.beneathContainer}>
        <PictureEdit></PictureEdit>
        <PictureEdit></PictureEdit>
        <PictureEdit></PictureEdit>
        <PictureEdit></PictureEdit>
        <PictureEdit></PictureEdit>
        <PictureEdit></PictureEdit>
      </View>

      {/* <PictureEdit></PictureEdit> */}

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
              <MediumFillInBox
                textQuestion={"Height"}
                textAnswer={"5'5\""}
              ></MediumFillInBox>
            </View>
          </View>

          <View>
            <Text style={[styles.moduleHeaderText, { marginTop: 10 }]}>
              Questions + Preferences
            </Text>
            <View style={[styles.rectContainer, { height: 550 }]}>
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
