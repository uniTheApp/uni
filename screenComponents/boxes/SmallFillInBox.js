import React from "react";
import { View, Text } from "react-native";
import { styles } from "../Style";

const FillInBox = ({ textQuestion, textAnswer }) => {
  return (
    <View style={[styles.boxFillIn, { width: "48%" }]}>
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

export default FillInBox;
