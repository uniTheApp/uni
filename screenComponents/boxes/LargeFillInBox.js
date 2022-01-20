import React from "react";
import { View, Text } from "react-native";
import { styles } from "./boxStyle";

const LargeFillInBox = ({ textAnswer }) => {
  return (
    <View style={[styles.boxFillIn, { width: "100%", height: 100 }]}>
      <View style={styles.textInTheBox}>
        <Text style={[styles.boxFillInText, { color: "#000000" }]}>
          {textAnswer}
        </Text>
      </View>
    </View>
  );
};

export default LargeFillInBox;
