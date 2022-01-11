import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./ItemStyle";
import { Ionicons } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";
import { auth, db } from "../../firebase";
import { getStorage, ref, uploadBytes, now } from "@firebase/storage";

const PictureEdit = () => {
  //IMAGE UPLOAD REPASTED

  const [image, setImage] = useState(null);

  // const { user } = useAuth();
  const storage = getStorage();

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      ImageUpload(
        result.uri,
        `images/${auth.currentUser.uid}/` + new Date().toString()
      );
    }
  };

  const ImageUpload = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var reference = ref(storage, imageName);
    //console.log(reference);
    return uploadBytes(reference, blob);
    // updateDoc(doc(db, "users", auth.currentUser.uid), {image: blob})
  };

  return (
    <TouchableOpacity style={styles.editBoxContainer} onPress={selectImage}>
      <Ionicons name="ios-add" size={24} color="#D4D4D4" />
    </TouchableOpacity>
  );
};

export default PictureEdit;
