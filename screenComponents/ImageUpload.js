import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
// import storage from '@react-native-firebase/storage';
// import * as Progress from 'react-native-progress';
import useAuth from "../hooks/useAuth";
import { doc, setDoc, updateDoc } from "@firebase/firestore";
import { auth, db } from "../firebase";
import { getStorage, ref, uploadBytes, now } from "@firebase/storage";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  const { user } = useAuth();
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
    console.log(reference);
    return uploadBytes(reference, blob);
    // updateDoc(doc(db, "users", auth.currentUser.uid), {image: blob})
  };

  return (
    <TouchableOpacity style={styles.selectButton} onPress={selectImage}>
      <Text style={styles.buttonText}>Pick an image</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#bbded6",
  },
  selectButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: "#8ac6d1",
    alignItems: "center",
    justifyContent: "center",
  },
  uploadButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: "#ffb6b9",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: "center",
  },
  progressBarContainer: {
    marginTop: 20,
  },
  imageBox: {
    width: 300,
    height: 300,
  },
});

export default ImageUpload;
