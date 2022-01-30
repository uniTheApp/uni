import React, {
  useState,

} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./ItemStyle";
import { Ionicons } from "@expo/vector-icons";
import tw from 'tailwind-rn'
import * as ImagePicker from "expo-image-picker";
import { auth, db } from "../../firebase";
import { getStorage, ref, uploadBytes, now } from "@firebase/storage";
import ImageUpload from "../ImageUpload"

const PictureEdit = (props) => {
  //IMAGE UPLOAD REPASTED
  // console.log("picture edit, ", props.index, " photo is", props.photos[props.index])
  return (
    <ImageUpload index={props.index} photos={props.photos} style={styles.editBoxContainer}>
      {
        // (props.photos != undefined && props.photos[props.index]) ? (console.log("no picture")) : (console.log("photo is", props.photos[props.index]))
        (props.photos) ? 
        (
          (props.photos[props.index]) ?
          (
            // console.log("PICTURE ", props.index)
            <Image style={tw("h-16 w-16 mr-4")} source={{ uri: props.photos[props.index] }} />
          )
          :(
            <Ionicons name="ios-add" size={24} color="#D4D4D4" />
          )
        
        )
        : (
          
          <Ionicons name="ios-add" size={24} color="#D4D4D4" />
        )
      } 
    </ImageUpload>
  );
};

export default PictureEdit;
