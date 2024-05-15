import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Header from "./Header";

const Succesfully = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Header title={props.title} /> */}
      <Header title={"Submit Page"} navigateTo={navigation.goBack} />
      <View style={styles.content}>
        <View style={styles.content_child}>
          <Image
            source={require("../assets/icons/9327633fdd30f929e29d8a0b51d92eee.gif")}
            style={styles.image}
          />
          {/* <Text style={styles.text}>{props.message}</Text> */}
          <Text style={styles.text}>Form Succesfully Submitted</Text>
        </View>
      </View>
    </View>
  );
};

export default Succesfully;

const styles = StyleSheet.create({
  container: {
    // top: 53,
    backgroundColor: "white",
    height: "100%",
  },
  content: {
    height: "85%",
    justifyContent: "center",
    alignItems: "center",
  },
  content_child: {
    alignItems: "center",
    gap: 15,
  },
  image: {
    height: 80,
    width: 80,
  },
  text: {
    color: "#00367E",
    fontSize: 22,
    lineHeight: 33,
    fontWeight: "700",
  },
});
