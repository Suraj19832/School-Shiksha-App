import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  ActivityIndicator,
  ToastAndroid,
  StatusBar,
  useColorScheme,
} from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  EvilIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { sendPostData } from "../../Helper/Helper";
import { useRoute } from "@react-navigation/native";
import Header from "../../components/Header";

const ForgetPassword = ({ navigation }) => {
  const route = useRoute();
  const { email } = route.params;

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassToggle, setNewPassToggle] = useState(false);
  const [confirmToggle, setConfirmToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleNewPasswordChange = (text) => {
    setNewPassword(text);
    checkPasswordsMatch(text, confirmPassword);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    checkPasswordsMatch(newPassword, text);
  };

  const checkPasswordsMatch = (newPassword, confirmPassword) => {
    setIsButtonActive(newPassword === confirmPassword && newPassword !== "");
  };

  function showToast(message) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }
  const colorScheme = useColorScheme();
  const statusBarColor = colorScheme === "dark" ? "black" : "white";

  const handleConfirmPassword = () => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("new_password", newPassword);
    formData.append("confirm_password", confirmPassword);
    formData.append("email", email);

    sendPostData("auth/reset-password", formData)
      .then((res) => {
        setIsLoading(false);
        if (res?.status) {
          showToast(res.message);
          navigation.navigate("Login");
        } else {
          showToast(res.errors?.confirm_password);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err, "error message from login side");
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <StatusBar
        animated={true}
        backgroundColor={statusBarColor}
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <ScrollView>
        <View style={styles.main_content}>
          <FontAwesome5
            name="arrow-left"
            size={24}
            color="rgba(0, 54, 126, 1)"
            style={styles.arrowleft}
            onPress={navigation.goBack}
          />
          <View style={styles.loginImage}>
            <Image
              source={require("../../assets/img/FORGET PASSWORD.png")}
              style={styles.img}
            />
          </View>
          <View style={styles.welcome_texts}>
            <Text style={styles.welcome}>Forgot Password?</Text>
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
                    onChangeText={handleNewPasswordChange}
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
                    onChangeText={handleConfirmPasswordChange}
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
            </View>
            <View style={styles.inputbox_main_container}>
              <TouchableOpacity
                style={[
                  styles.inputbox_submit,
                  isButtonActive ? null : styles.disabled,
                ]}
                disabled={!isButtonActive || isLoading}
                onPress={() => handleConfirmPassword()}
              >
                {isLoading ? (
                  <ActivityIndicator size="small" color="#ffffff" />
                ) : (
                  <Text style={styles.submitText}>Reset Password</Text>
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.createSignup}></View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    // top: 53,
  },
  main_content: {
    marginHorizontal: 20,
    marginTop: 10,
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
    // borderWidth: 2,
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
  disabled: {
    opacity: 0.5,
  },
});
