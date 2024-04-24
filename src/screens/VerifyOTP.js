import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

const VerifyOTP = () => {
  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.main_content}>
        <View style={styles.loginImage}>
          <Image
            source={require("../../assets/img/EnterOTP.png")}
            style={styles.img}
          />
        </View>
        <View style={styles.welcome_texts}>
          <Text style={styles.welcome}>OTP Verification</Text>
          <Text style={styles.text}>
            We Will send You one time password on this <Text>Email Id</Text>
          </Text>
        </View>

        <View style={styles.inputbox_container_parent}>
          <View style={styles.inputbox_main_container}>
            <TouchableOpacity
              style={[
                styles.inputbox_submit,
                { opacity: isFormValid ? 1 : 0.6 },
              ]}
              disabled={!isFormValid}
            >
              <Text style={styles.submitText}>Send OTP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.createSignup}></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default VerifyOTP;

const styles = StyleSheet.create({
  container: {
    top: 53,
  },
  main_content: {
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  loginImage: {
    alignItems: "center",
  },
  img: {
    height: 220,
    width: 250,
  },
  welcome_texts: {
    marginVertical: 4,

    width: 250,
  },
  welcome: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
    color: "rgba(55, 55, 55, 1)",
    lineHeight: 45,
  },
  text: {
    color: "rgba(166, 166, 166, 1)",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
  },
  inputbox_container_parent: {
    top: 18,
    gap: 15,
  },
  inputbox_main_container: {
    gap: 12,
  },
  inputbox_submit: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: "rgba(3, 53, 125, 1)",
    padding: 16,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "rgba(3, 53, 125, 1)",
    shadowColor: "rgba(3, 53, 125, 0.25)",
  },
  createSignup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 20,
  },
  submitText: {
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 18.75,
  },
  error: {
    color: "red",
  },
});
