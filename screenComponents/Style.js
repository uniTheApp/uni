import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

//Carolyn NOTE: NEED TO MAKE THESE MORE CONSISTENT (like have a defined look for headers)
const styles = StyleSheet.create({
  //Profile

  boxFillIn: {
    height: 32,
    backgroundColor: "#F5F5F5",
    paddingLeft: 6,
    paddingTop: 9,
    marginBottom: 11,
  },
  textInTheBox: {
    display: "flex",
    flexDirection: "row",
  },
  boxFillInText: {
    fontFamily: "OpenSansRegular",
    fontSize: 10,
    marginRight: 18,
    textTransform: "capitalize",
  },

  rectContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "90%",
    height: 190,
    borderWidth: 1,
    borderColor: "#CDCDCD",
    paddingTop: 14,
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: "5%",
    marginTop: 4,
    borderRadius: 5,
    //backgroundColor: "black",
  },

  topText: {
    textAlign: "center",
    fontFamily: "OpenSansSemiBold",
    fontSize: 30,
    paddingTop: 14,
  },
  collegeText: {
    textAlign: "center",
    fontFamily: "OpenSansSemiBold",
    fontSize: 20,
    color: "#939393",
  },
  pictureContainer: {
    display: "flex",
    flexGrow: 1,
    marginTop: 10,
    // justifyContent: "space-evenly",
    // flexWrap: "wrap",
    // alignContent: "center",
    alignItems: "center",
    //backgroundColor: "black",
  },
  pictures: {
    width: 90,
    height: 90,
    marginTop: 12,
    marginLeft: "5%",
    marginRight: "5%",
    borderRadius: 10,
    //backgroundColor: "red",
  },
  //there are some spacing issues I need to resolve lol
  moduleHeaderText: {
    fontFamily: "OpenSansRegular",
    fontSize: 15,
    color: "#939393",
    textTransform: "capitalize",
    marginLeft: "5%",
    marginTop: 10,
  },
  //HOME
  headerText: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Chivo-Regular",
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
    width: "112%",
    backgroundColor: "white",
  },
  imgCardText: {
    // alignSelf: "stretch",

    // flex: 1,
    fontFamily: "Chivo-Regular",
    fontSize: 24,
    marginTop: 12,
    marginLeft: 9,
  },
  imgCardTextAlt: {
    // alignSelf: "stretch",

    // flex: 1,
    fontFamily: "Chivo-Regular",
    fontSize: 18,
    color: "#939393",
    marginBottom: 9,
    marginLeft: 9,
  },
  cardButton: {
    // marginTop: -20,
    // marginLeft: -20,
    // backgroundColor: "transparent"
    // marginRight: -20

    margin: 10,
  },
});

export { styles };
