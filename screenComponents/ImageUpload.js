import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  Image
} from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import useAuth from '../hooks/useAuth';
import {doc, setDoc, updateDoc, arrayUnion} from "@firebase/firestore"
import { auth, db } from "../firebase"
import {getStorage, ref, uploadBytes, getDownloadURL} from "@firebase/storage"

const ImageUpload = (props, {style}) => {

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
            imageName = `images/${auth.currentUser.uid}/` + new Date().getTime()
            await uploadImage(result.uri, imageName)
            addUrl(imageName)
          }
    };

    const uploadImage = async (uri, imageName) => {
        const response = await fetch(uri)
        const blob = await response.blob()

        //image upload
        var reference = ref(storage, imageName);
        console.log(reference)
        console.log("image: " + imageName)
        return uploadBytes(reference, blob)
    }

    const addUrl = async (imageName) => {
      photoURL = await getDownloadURL(ref(storage, imageName))
      console.log("photo URL: " + photoURL)
      //add image to firestore
      if(user){
        updateDoc(doc(db, "users", auth.currentUser.uid), {
          photos: arrayUnion(photoURL)
        });
      }
    };

  return (
    <TouchableOpacity style={style} onPress={selectImage}>
      {props.children}
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
