import React, {
  useState,

} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./ItemStyle";
import { Ionicons } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";
import { auth, db } from "../../firebase";
import { getStorage, ref, uploadBytes, now } from "@firebase/storage";
import ImageUpload from "../ImageUpload"

const PictureEdit = () => {
  //IMAGE UPLOAD REPASTED

  return (
    <ImageUpload style={styles.editBoxContainer}>
      <Ionicons name="ios-add" size={24} color="#D4D4D4" />
    </ImageUpload>
  );
};

export default PictureEdit;
