import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import {
  Feather,
  Fontisto,
  FontAwesome5,
  MaterialCommunityIcons,
  EvilIcons,
} from "@expo/vector-icons";

const Login_Page = () => {
  const [newPassToggle, setNewPassToggle] = useState(false);
  const [confirmToggle, setConfirmToggle] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView>
        <View style={styles.main_content}>
          <FontAwesome5
            name="arrow-left"
            size={24}
            color="rgba(0, 54, 126, 1)"
            style={styles.arrowleft}
          />
          <View style={styles.loginImage}>
            <Image
              source={require("../../assets/img/forgetPassImg.png")}
              style={styles.img}
            />
          </View>
          <View style={styles.welcome_texts}>
            <Text style={styles.welcome}>Forget Password?</Text>
            <Text style={styles.text}>Please Enter a strong new password</Text>
          </View>

          <View style={styles.inputbox_container_parent}>
            <View style={styles.inputbox_main_container}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Enter New Password</Text>
              </View>
              <View style={styles.inputbox_password}>
                <View style={styles.passwordInputContainer}>
                  <EvilIcons
                    name="lock"
                    size={26}
                    color="rgba(0, 54, 126, 1)"
                    style={styles.lockIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    secureTextEntry={!newPassToggle}
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                  />
                </View>
                <TouchableOpacity
                  onPress={() => setNewPassToggle(!newPassToggle)}
                >
                  {newPassToggle ? (
                    <Feather name="eye" size={18} color="rgba(0, 54, 126, 1)" />
                  ) : (
                    <MaterialCommunityIcons
                      name="eye-off-outline"
                      size={18}
                      color="rgba(0, 54, 126, 1)"
                    />
                  )}
                </TouchableOpacity>
              </View>
              {/* {errors.password !== "" && (
                <Text style={styles.error}>{errors.password}</Text>
              )} */}
            </View>
            <View style={styles.inputbox_main_container}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Confirm Password</Text>
              </View>
              <View style={styles.inputbox_password}>
                <View style={styles.passwordInputContainer}>
                  <EvilIcons
                    name="lock"
                    size={26}
                    color="rgba(0, 54, 126, 1)"
                    style={styles.lockIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry={!confirmToggle}
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                  />
                </View>
                <TouchableOpacity
                  onPress={() => setConfirmToggle(!confirmToggle)}
                >
                  {confirmToggle ? (
                    <Feather name="eye" size={18} color="rgba(0, 54, 126, 1)" />
                  ) : (
                    <MaterialCommunityIcons
                      name="eye-off-outline"
                      size={18}
                      color="rgba(0, 54, 126, 1)"
                    />
                  )}
                </TouchableOpacity>
              </View>
              {/* {errors.password !== "" && (
                <Text style={styles.error}>{errors.password}</Text>
              )} */}
            </View>
            <View style={styles.inputbox_main_container}>
              <TouchableOpacity
                style={[
                  styles.inputbox_submit,
                  { opacity: isFormValid ? 1 : 0.5 },
                ]}
                disabled={!isFormValid}
                // onPress={handleSubmit}
              >
                <Text style={styles.submitText}>Reset Password</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.createSignup}></View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login_Page;

const styles = StyleSheet.create({
  container: {
    top: 53,
    // marginBottom: 100
  },
  main_content: {
    marginHorizontal: 20,
  },
  loginImage: {
    alignItems: "center",
    marginTop: 10,
  },
  arrowleft: {
    position: "absolute",
  },
  img: {
    height: 219,
    width: 236,
  },
  welcome_texts: {
    marginTop: 30,
    marginBottom: 8,
  },
  welcome: {
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
  input: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    width: "85%",
    marginLeft: 20,
  },
  inputbox_container_parent: {
    top: 18,
    gap: 15,
  },
  inputbox_container: {
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
    borderWidth: 2,
    borderColor: "rgba(3, 53, 125, 1)",
    padding: 16,
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
    backgroundColor: "red",
  },

  label: {
    color: "rgba(0, 54, 126, 1)",
    fontWeight: "500",
    fontSize: 18,
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
    position: "relative",
  },
  lockIcon: {
    position: "absolute",
    top: 1.5,
    left: -6,
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
