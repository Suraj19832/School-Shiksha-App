import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export const BorderGradient = (props) => {
  const navigation = useNavigation();
  const isDisabled = props.disabled;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#00367E", "#0062E4"]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={[styles.gradient, isDisabled && styles.disabledGradient]}
      >
        <TouchableOpacity
          style={[styles.buttonContainer, isDisabled && styles.disabledButton]}
          onPress={() => {
            if (!isDisabled) {
              if (props.text === "Buy Now") {
                navigation.navigate("membershipPayment", {
                  plan_id: props.plan_id,
                });
              } else {
                navigation.navigate("Dashboard");
              }
            }
          }}
          disabled={isDisabled}
        >
          <Text style={[styles.buttonText, isDisabled && styles.disabledText]}>
            {props.text}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    bottom: 25,
    alignSelf: "center",
  },
  gradient: {
    height: 44,
    width: 150,
    justifyContent: "center",
    borderRadius: 12,
    paddingVertical: 1,
    paddingHorizontal: 1.5,
    alignSelf: "center",
  },
  disabledGradient: {
    opacity: 0.5,
  },
  buttonContainer: {
    flex: 1.0,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "99%",
    height: "10%",
    margin: 1,
    borderRadius: 10,
  },
  disabledButton: {
    backgroundColor: "#fff",
  },
  buttonText: {
    textAlign: "center",
    alignSelf: "center",
    fontWeight: "500",
    fontSize: 18,
    color: "#00367E",
  },
  disabledText: {
    color: "#00367E",
  },
});
