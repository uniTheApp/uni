import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Style";

const FillInBox = ({ textQuestion }) => {
  return (
    <View style={styles.boxFillIn}>
      <Text style={[styles.boxFillInText, { color: "#939393" }]}>
        {textQuestion}
      </Text>
    </View>
  );
};

export default FillInBox;
