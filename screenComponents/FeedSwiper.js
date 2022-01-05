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
import { SwiperFlatList } from "react-native-swiper-flatlist";
import tw from "tailwind-rn";
import { Ionicons, Entypo, AntDesign, Feather } from "@expo/vector-icons"
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react/cjs/react.development';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from "../firebase"
import Carousel from './Carousel';
import { styles } from "./Style"



const FeedSwiper = ({data}) => {

    const [profiles, setProfiles] = useState([]);
    

    useEffect(() => {
        let unsub;

        const fetchCards = async () => {
            unsub = onSnapshot(collection(db, "users", snapshot => {
                setProfiles(
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                )
            }))
        }


        fetchCards();
        return unsub
    }, [])

    

     return (
     
     <SafeAreaView>

        <FlatList
            data={data}
            index={0}
            showsVerticalScrollIndicator={false}
            snapToInterval={Dimensions.get('window').height - 138}
            snapToAlignment="start"
            decelerationRate={"fast"}
            contentContainerStyle={{ paddingBottom: "45%" }} 
            renderItem={({item}) => item ? (
                <View>
                  <Text style={styles.imgCardText}>
                    {item.firstName} - {item.college} '{item.gradYear}
                  </Text>
                  <Text style={styles.imgCardTextAlt}>
                    {item.age} years old | {item.major}
                  </Text>
                </View>
                
            
            ) : (

                <Text>No more profiles</Text>


            )}
        />

    </SafeAreaView>
  );
};

export default FeedSwiper;
