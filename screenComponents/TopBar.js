
import React from 'react'
import { View, Text, Button, SafeAreaView, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import tw from "tailwind-rn";
import { Ionicons, Entypo, AntDesign, Feather } from "@expo/vector-icons"


const TopBar = () => {

    const navigation = useNavigation();
    
    return (
    <View>
        <View style={tw("items-center relative")} >
            <Text style={styles.headerText}>UnI</Text>
            <TouchableOpacity style={tw("absolute right-4")}>
                <Ionicons name="filter" size={24} color="black" />
            </TouchableOpacity>
            
        </View>
        <View style={styles.headerLine}></View>
    </View>
        


    )
}

export default TopBar

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
    bottomContainer: {
        position: "absolute",
        
    }
})