import React from "react";
import {
  Text,
  FlatList,
  Image,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react/cjs/react.development";
import useAuth from "../hooks/useAuth";
import { doc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { styles } from "./Style";
import MediumFillInBox from "./boxes/MediumFillInBox";
import LargeFillInBox from "./boxes/LargeFillInBox";
import PictureEdit from "./items/PictureEdit";

//profile pictures
const Item = ({ image }) => (
  <View style={styles.pictureContainer}>
    <Image style={styles.pictures} source={{ uri: image.photoURL }} />
  </View>
);

const profilePictures = () => {
  //RETRIEVING PHOTOS
  const [profile, setProfile] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    let unsub;

    const fetchCards = async () => {
      unsub = onSnapshot(doc(db, "users", user.uid), (snapshot) => {
        setProfile(
          snapshot.data()
        )
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
      {/* list of pictures from firebase */}
      <View style={styles.abovePictureContainer}>
        <FlatList
          data={profile}
          scrollEnabled="false"
          numColumns={3}
          key={3}
          keyExtractor={(item, index) => item.key}
          renderItem={renderItem}
        />
      </View>

      {/* overlaying buttons to edit profile pictures */}
      <View style={styles.beneathContainer}>
        <PictureEdit index={0} photos={profile.photos}></PictureEdit>
        <PictureEdit index={1} photos={profile.photos}></PictureEdit>
        <PictureEdit index={2} photos={profile.photos}></PictureEdit>
        <PictureEdit index={3} photos={profile.photos}></PictureEdit>
        <PictureEdit index={4} photos={profile.photos}></PictureEdit>
        <PictureEdit index={5} photos={profile.photos}></PictureEdit>
      </View>

      <View style={{ flexGrow: 1 }}>
        {/* percentages need to change and data needs to be dynamic */}
        <ScrollView style={{ height: "63%" }}>
          {/* Basic Module */}
          <View>
            <View style={styles.moduleHeaderContainer}>
              <Text style={styles.moduleHeaderText}>Basics</Text>
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

          {/* Question Module */}
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
