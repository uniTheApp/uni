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
} from "react-native";
import {
  backgroundColor,
  color,
} from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import tw from "tailwind-rn";
import { styles } from "./Style";

const profilePictures = ({ Data }) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={[styles.topText]}>Daniel</Text>
        <Text style={[styles.topText, { fontSize: 15, color: "#939393" }]}>
          Yale University
        </Text>
      </View>

      {/* first three pictures here */}
      <View style={styles.pictureContainer}>
        <FlatList
          data={Data}
          //style={{ position: "absolute", bottom: 80 }}
          //carolyn note: not too sure why but you need key in order to change columns
          //may want to change this lol and just use wrapping
          numColumns={3}
          key={3}
          renderItem={({ item }) => (
            <Image style={styles.pictures} source={{ uri: item.photoURL }} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default profilePictures;
