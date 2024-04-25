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
import { Feather } from "@expo/vector-icons";

const VerifyEmail = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [sendOtpPressed, setSendOtpPressed] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    setIsEmailValid(validateEmail(email));
  }, [email]);

  const handleSendOtp = () => {
    if (!isEmailValid) {
      setSendOtpPressed(true);
      return; // Do not proceed if email is invalid
    }
    // Send OTP logic
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView>
        <View style={styles.main_content}>
          <View style={styles.loginImage}>
            <Image
              source={require("../../assets/img/VerifyEmail_Img.png")}
              style={styles.img}
            />
          </View>
          <View style={styles.welcome_texts}>
            <Text style={styles.welcome}>Enter Your Email Id</Text>
          </View>

          <View style={styles.inputbox_container_parent}>
            <View style={styles.inputbox_main_container}>
              <View style={styles.inputbox_container}>
                <Feather name="mail" size={16} color="rgba(0, 54, 126, 1)" />
                <TextInput
                  style={styles.input}
                  placeholder="Enter Your Email"
                  placeholderTextColor="rgba(166, 166, 166, 1)"
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
            </View>
            {sendOtpPressed && !isEmailValid && (
              <Text style={styles.error}>Invalid email address</Text>
            )}
            <View style={styles.inputbox_main_container}>
              <TouchableOpacity
                style={[
                  styles.inputbox_submit,
                  isEmailValid ? null : styles.disabled,
                ]}
                disabled={!isEmailValid}
                onPress={handleSendOtp}
              >
                <Text style={styles.submitText}>Send OTP</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.createSignup}>
              <Text style={styles.signupText}>Already a Member?</Text>
              <TouchableOpacity
                onPress={() => console.log("check member or not?")}
              >
                <Text style={[styles.signupText, styles.signupLink]}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default VerifyEmail;

const styles = StyleSheet.create({
  container: {
    top: 53,
  },
  main_content: {
    marginHorizontal: 20,
  },
  loginImage: {
    alignItems: "center",
  },
  img: {
    height: 220,
    width: 220,
  },
  welcome_texts: {
    marginVertical: 4,
  },
  welcome: {
    fontSize: 30,
    fontWeight: "600",
    color: "rgba(55, 55, 55, 1)",
    lineHeight: 45,
  },
  input: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    width: "85%",
  },
  lockIcon: {
    position: "absolute",
    top: 1.5,
    left: -6,
  },
  inputbox_container_parent: {
    top: 18,
    gap: 15,
  },
  inputbox_container: {
    backgroundColor: "rgba(253, 241, 221, 1)",
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "rgba(3, 53, 125, 1)",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    gap: 8,
  },
  inputbox_password: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "rgba(3, 53, 125, 1)",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  inputbox_submit: {
    marginTop: 10,
    borderColor: "rgba(3, 53, 125, 1)",
    padding: 18,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "rgba(3, 53, 125, 1)",
    shadowColor: "rgba(3, 53, 125, 0.25)",
  },
  inputbox_main_container: {
    gap: 12,
  },
  createSignup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 20,
  },
  signupText: {
    color: "rgba(66, 66, 66, 1)",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18.75,
  },
  signupLink: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 21.09,
    color: "rgba(0, 54, 126, 1)",
    marginLeft: 5,
  },
  labelContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  forgotPassword: {
    color: "rgba(166, 166, 166, 1)",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 18,
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
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
  disabled: {
    opacity: 0.5,
  },
});
