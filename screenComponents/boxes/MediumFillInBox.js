import React from "react";
import { View, Text } from "react-native";
import { logToConsole } from "react-native/Libraries/Utilities/RCTLog";
import { styles } from "../Style";

const MediumFillInBox = ({ textQuestion, textAnswer }) => {
  return (
    <View style={[styles.boxFillIn, { width: "100%" }]}>
      <View style={styles.textInTheBox}>
        <Text style={[styles.boxFillInText, { color: "#939393" }]}>
          {textQuestion}
        </Text>
        <Text style={[styles.boxFillInText, { color: "#000000" }]}>
          {textAnswer}
        </Text>
      </View>
    </View>
  );
};

export default MediumFillInBox;
