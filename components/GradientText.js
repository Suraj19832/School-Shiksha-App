import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
const GradientText = (props) => {
  return (
    <MaskedView maskElement={<Text style={[props?.style]}>{props.text}</Text>}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#00367E", "#0062E4"]}
      >
        <Text style={[props?.style, { opacity: 0 }]}>{props.text}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
