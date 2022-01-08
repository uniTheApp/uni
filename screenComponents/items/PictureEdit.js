import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./ItemStyle";
import { Ionicons } from "@expo/vector-icons";

const PictureEdit = () => {
  return (
    <TouchableOpacity style={styles.editBoxContainer}>
      <Ionicons name="ios-add" size={24} color="#D4D4D4" />
    </TouchableOpacity>
  );
};

export default PictureEdit;
