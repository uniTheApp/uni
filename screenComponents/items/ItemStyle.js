import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

//Carolyn NOTE: NEED TO MAKE THESE MORE CONSISTENT (like have a defined look for headers)
const styles = StyleSheet.create({
  editBoxContainer: {
    width: 90,
    height: 90,
    paddingLeft: 33,
    paddingTop: 33,
    borderWidth: 1,
    borderColor: "#D4D4D4",
    borderRadius: 10,
    marginTop: 12,
    marginLeft: screenWidth * 0.05,
    marginRight: screenWidth * 0.05,
  },
});

export { styles };
