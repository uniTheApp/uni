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




const { width, height } = Dimensions.get('window');

const DUMMY_DATA = [
    {   
        firstName: "Kyle",
        lastName: "Andruczk",
        age: 20,
        college: "Yale",
        major: "Psychology",
        gradYear: 24,
        photoURL: "https://avatars.githubusercontent.com/u/84470596?v=4",
        key:0
    },
    {   
        firstName: "Carolyn",
        lastName: "Qu",
        age: 19,
        college: "Yale",
        major: "Computer Science",
        gradYear: 24,
        photoURL: "https://avatars.githubusercontent.com/u/67798872?v=4",
        key:1
    },
    {   
        firstName: "Suba",
        lastName: "Ramesh",
        age: 19,
        college: "Yale",
        major: "Computer Science",
        gradYear: 24,
        photoURL: "https://avatars.githubusercontent.com/u/18357230?v=4",
        key:2
    },
]



export default () => 
<SafeAreaView>

            <FlatList
            data={DUMMY_DATA}
            index={0}
            style={tw("mb-32")}
            showsVerticalScrollIndicator={false}
            snapToInterval={Dimensions.get("window").height - 163}
            snapToAlignment={"start"}
            decelerationRate={"fast"}
            renderItem={({item}) => 
            <View>
                <View>
                <View>
                    <Text style={styles.imgCardText}>{item.firstName} - {item.college} '{item.gradYear}</Text>
                    <Text style={styles.imgCardTextAlt}>{item.age} years old | {item.major}</Text>
                </View>
                <TouchableOpacity style={tw("absolute right-4 top-4 green")}>
                    <Entypo name="dots-three-vertical" size={20} color="black" />
                </TouchableOpacity>
            
            


            </View>
            
            
            
            <Image style={{width: '100%', height: Dimensions.get('window').height - 244, marginBottom: 10}} source={{uri: item.photoURL}}></Image>


            <TouchableOpacity style={tw("absolute bottom-20 right-4 bg-white rounded-full")}>
                    <Feather name="send" size={24} color="#B8EFFF" style={styles.cardButton} />
            </TouchableOpacity>
            <TouchableOpacity style={tw("absolute bottom-5 right-4 bg-white rounded-full")}>
                    <AntDesign name="hearto" size={24} color="#B8EFFF" style={styles.cardButton} />
            </TouchableOpacity>

  

            </View>
            
            
        
        
        }
    />



</SafeAreaView>


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
    // bottomBar: {
    //     position: "absolute",
    //     backgroundColor: "#FFFFFF",
    //     height: 40,
    //     width: "100%",
    //     marginBottom: 0
    // }
})

