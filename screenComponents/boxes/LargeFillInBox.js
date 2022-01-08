import React from "react";
import { View, Text } from "react-native";
import { styles } from "../Style";

const LargeFillInBox = ({ textAnswer }) => {
  return (
<<<<<<< HEAD
    <View style={[styles.boxFillIn, { width: "100%", height: 100 }]}>
=======
    <View style={[styles.boxFillIn, { width: "100%", height: 85 }]}>
>>>>>>> 4574514f32a3061105b7eed6d7a88f824e541ff0
      <View style={styles.textInTheBox}>
        <Text style={[styles.boxFillInText, { color: "#000000" }]}>
          {textAnswer}
        </Text>
      </View>
    </View>
  );
};

export default LargeFillInBox;
