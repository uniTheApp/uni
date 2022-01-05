import React from "react";
import { View, Text, StyleSheet } from "react-native";

//Carolyn NOTE: NEED TO MAKE THESE MORE CONSISTENT (like have a defined look for headers)
const styles = StyleSheet.create({
  //Profile

  topText: {
    textAlign: "center",
    fontFamily: "OpenSansSemiBold",
    fontSize: 20,
  },
  pictureContainer: {
    display: "flex",
    flexGrow: 1,
    paddingTop: 19,
    paddingLeft: 5,
    paddingRight: 5,
    // justifyContent: "space-evenly",
    // flexWrap: "wrap",
    // alignContent: "center",
    alignItems: "center",
    //backgroundColor: "black",
  },
  pictures: {
    width: 84,
    height: 84,
    margin: 16,
    borderRadius: 10,
    //backgroundColor: "red",
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
