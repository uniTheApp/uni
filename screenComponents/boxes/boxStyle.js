import { View, Text, StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  boxFillIn: {
    height: 50, //32
    backgroundColor: "#F5F5F5",
    paddingLeft: 8,
    paddingTop: 15,
    marginBottom: 10,
  },
  textInTheBox: {
    display: "flex",
    flexDirection: "row",
  },
  boxFillInText: {
    fontFamily: "OpenSansRegular",
    fontSize: 15,
    marginRight: 8,
    textTransform: "capitalize",
  },
});

export { styles };
