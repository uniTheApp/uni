import React from "react";
import { View, Text, TextInput } from "react-native";
import { logToConsole } from "react-native/Libraries/Utilities/RCTLog";
import { styles } from "../Style";

const MediumFillInBox = ({ textQuestion, textAnswer, textValue, textFunction }) => {
  return (
    <View style={[styles.boxFillIn, { width: "100%" }]}>
      <View style={styles.textInTheBox}>
        <Text style={[styles.boxFillInText, { color: "#939393" }]}>
            {textQuestion}
        </Text>
        <TextInput 
          placeholder={textAnswer}
          style={[styles.boxFillInText, { color: "#000000" }]}
          textValue={textValue}
          onChangeText={textFunction}
          >
        </TextInput>
      </View>
    </View>
  );
};

export default MediumFillInBox;
