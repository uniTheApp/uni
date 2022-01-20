import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

//Carolyn NOTE: NEED TO MAKE THESE MORE CONSISTENT (like have a defined look for headers)
const styles = StyleSheet.create({
  //Profile

  rectContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "90%",
    //calc: 15 + 15 + 50 * num of box + 10 * num of box
    height: 510, //330
    //borderWidth: 1,
    borderColor: "#CDCDCD",
    paddingTop: 15,
    // paddingLeft: "4%",
    // paddingRight: "4%",
    marginLeft: "5%",
    marginTop: 4,
    borderRadius: 5,
    // backgroundColor: "black",
  },

  //name is put as editable an
  //putting yale university in basics (but non editable)
  topText: {
    textAlign: "center",
    fontFamily: "OpenSansSemiBold",
    fontSize: 20,
    paddingTop: 14,
  },
  collegeText: {
    textAlign: "center",
    fontFamily: "OpenSansSemiBold",
    fontSize: 20,
    color: "#939393",
  },
  beneathContainer: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    flexBasis: "33.333333%",
    width: "100%",
    flexGrow: 1,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "flex-start",
    flexWrap: "wrap",
    // height: 120,
    //backgroundColor: "black",
  },
  abovePictureContainer: {
    position: "absolute",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    height: 204,

    //backgroundColor: "red",
  },
  pictureContainer: {
    // display: "flex",
    // // flexGrow: 1,
    // // marginTop: 10,
    // // marginBottom: 10,
    // alignItems: "flex-start",
    // flexWrap: "wrap",
    // justifyContent: "space-evenly",
    // flexWrap: "wrap",
    // alignContent: "center",
    // alignItems: "center",
    //backgroundColor: "black",
  },
  pictures: {
    width: 90,
    height: 90,
    marginTop: 12,
    marginLeft: screenWidth * 0.05,
    marginRight: screenWidth * 0.05,
    borderRadius: 10,
    //backgroundColor: "red",
  },
  circleButton: {
    width: 18,
    height: 18,
    borderRadius: 18 / 2,
    backgroundColor: "#565656",
  },
  moduleHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    //backgroundColor: "black",
    //paddingTop: "5%",
  },
  //there are some spacing issues I need to resolve lol
  moduleHeaderText: {
    fontFamily: "OpenSansRegular",
    fontSize: 20,
    color: "#939393",
    textTransform: "capitalize",
    marginLeft: "5%",
    // paddingRight: "70%",
    // marginTop: 10,
  },
  editIcon: {},

  //

  //
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
