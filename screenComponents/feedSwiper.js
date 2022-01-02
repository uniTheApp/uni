import React from 'react';
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
} from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import tw from "tailwind-rn";
import { Ionicons, Entypo, AntDesign, Feather } from "@expo/vector-icons"
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react/cjs/react.development';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from "../firebase"
import Carousel from './Carousel';



const FeedSwiper = ({data}) => {

    const [profiles, setProfiles] = useState([]);
    const swipeDist = Dimensions.get("window").height *.81

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
            style={tw("mb-32")}
            showsVerticalScrollIndicator={false}
            snapToInterval={swipeDist}
            snapToAlignment={"start"}
            decelerationRate={"fast"}
            renderItem={({item}) => item ? (
                <View>
                    {/* 2nd header */}
                    <View>
                        <View>
                            <Text style={styles.imgCardText}>{item.firstName} - {item.college} '{item.gradYear}</Text>
                            <Text style={styles.imgCardTextAlt}>{item.age} years old | {item.major}</Text>
                        </View>
                        <TouchableOpacity style={tw("absolute right-4 top-4")}>
                            <Entypo name="dots-three-vertical" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    {/* end 2nd header */}
                
                    {/* Image  */}
                    {/* <Image style={{width: '100%', height: Dimensions.get('window').height - 244, marginBottom: 10}} source={{uri: item.photoURL}}></Image> */}
                    <Carousel data={data}></Carousel>
                    {/* end image */}


                    {/* Bottom more info */}
                    <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,0.9)']}
                                style={tw("absolute bottom-0 h-24 w-full")}
                            >
                        <TouchableOpacity style={tw("absolute bottom-0 h-24  w-full")}>
                            <View style={tw("")}>
                            <Entypo name="chevron-right" size={24} color="white" style={{position: "absolute", marginTop: "10%", marginLeft: "27%"}} />
                            <Text style={{color: "white", marginTop: "10.4%", position: "absolute", marginLeft: "37%", fontSize: 18}}>Lorem Ipsum</Text>
                            </View>
                        </TouchableOpacity>
                    </LinearGradient>
                    {/* end bottom more info */}
                

                    
                    {/* buttons */}
                    <TouchableOpacity style={tw("absolute bottom-36 right-2 bg-white rounded-full")}>
                            <Feather name="send" size={26} color="#B8EFFF" style={styles.cardButton} />
                    </TouchableOpacity>
                    <TouchableOpacity style={tw("absolute bottom-20 right-2 bg-white rounded-full")}>
                            <AntDesign name="hearto" size={26} color="#B8EFFF" style={styles.cardButton} />
                    </TouchableOpacity>
                    {/* end buttons */}


                </View>
            
            ) : (

                <Text>No more profiles</Text>


            )}
        />
    </SafeAreaView>
)}




const styles = StyleSheet.create({
    headerText: {
        textAlign: "center",
        fontSize: 24,
        fontFamily: "Chivo-Regular"
    },
    headerLine: {
        borderBottomColor: "#9C9C9C",
        borderBottomWidth: 1, 
        marginTop: 10,
        marginLeft: 9,
        marginRight: 9,
    },
    imgCard: {
        marginTop: -59,
        height: "90%",
        marginLeft: -20,

        // backgroundColor: "blue",
        width: '112%',
        backgroundColor: "white"

    },
    imgCardText : {
        // alignSelf: "stretch",

        // flex: 1,
        fontFamily: "Chivo-Regular",
        fontSize: 24,
        marginTop: 12,
        marginLeft: 9

    },
    imgCardTextAlt : {
        // alignSelf: "stretch",

        // flex: 1,
        fontFamily: "Chivo-Regular",
        fontSize: 18,
        color: "#939393",
        marginBottom: 9,
        marginLeft: 9

    },
    cardButton: {
        // marginTop: -20,
        // marginLeft: -20,
        // backgroundColor: "transparent"
        // marginRight: -20

        margin: 10,
    },

})

export default FeedSwiper