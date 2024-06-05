import React, { useState, useEffect, useContext } from "react";
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
  ActivityIndicator,
  ToastAndroid,
  useColorScheme,
  StatusBar,
} from "react-native";
import { Feather, EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { sendPostData } from "../../Helper/Helper";
import { writeData } from "../../Utils/utils";
import { AuthContext } from "../../Utils/context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Login_Page = ({ navigation }) => {
  const { setuserToken, setmyLoading } = useContext(AuthContext);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validationError, setValidationError] = useState({});
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const errors = {};
  function validateData() {
    if (!phoneNumber) {
      errors.phoneNumber = "Mobile number is required";
    } else if (!/^[0-9]*$/.test(phoneNumber)) {
      errors.phoneNumber = "Phone number should only contain numbers";
    } else if (phoneNumber.length !== 10) {
      errors.phoneNumber = "Phone number should be 10 digits";
    }
    if (password == null) {
      errors.password = "Password is required";
    }
    if (password == "") {
      errors.password = "Password is required";
    }
    if (password != "") {
      if (password?.length < 4) {
        errors.password = "Password should be more than 6";
      }
    }

    setValidationError({});

    if (Object.keys(errors)?.length > 0) {
      setValidationError(errors);

      return false;
    }
    return true;
  }
  function showToast(message) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }
  const handleLogin = () => {
    if (validateData() === false) {
      return;
    } else {
      setIsLoading(true);
      setButtonDisabled(true);
      // Create FormData object
      const formData = new FormData();
      formData.append("username", phoneNumber);
      formData.append("password", password);

      // Send POST request with FormData
      sendPostData("login", formData)
        .then((res) => {
          setIsLoading(false);
          setButtonDisabled(false);
          if (res?.code === 500) {
            showToast("Server Error");
          }
          if (res?.status) {
            showToast(res?.message);
            // navigation.navigate("Dashboard");
            setuserToken(res?.data?.access_token);
            AsyncStorage.setItem("userToken", res?.data?.access_token);
            setmyLoading(false);
          } else {
            showToast(res.errors?.password || res.errors?.username);
          }
        })
        .catch((err) => {
          setIsLoading(false);
          setButtonDisabled(false);
          console.log(err, "error message from login side");
        });
    }
  };
  const colorScheme = useColorScheme();
  const statusBarColor = colorScheme === "dark" ? "black" : "white";
  useEffect(() => {
    if (phoneNumber && password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [phoneNumber, password]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <StatusBar
        animated={true}
        backgroundColor={statusBarColor}
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <ScrollView>
        <View style={styles.main_content}>
          <View style={styles.loginImage}>
            <Image
              source={require("../../assets/img/welcome_banner.png")}
              style={styles.img}
            />
          </View>
          <View style={styles.welcome_texts}>
            <Text style={styles.welcome}>Welcome Back!</Text>
            <Text style={styles.text}>Log In to your existing account</Text>
          </View>

          <View style={styles.inputbox_container_parent}>
            <View style={styles.inputbox_main_container}>
              <View>
                <Text style={styles.label}>Phone</Text>
              </View>
              <View style={styles.inputbox_container}>
                <Feather
                  name="phone-call"
                  size={16}
                  color="rgba(0, 54, 126, 1)"
                />
                <TextInput
                  placeholder={"Enter Mobile Number"}
                  value={phoneNumber}
                  onChangeText={(value) => {
                    if (/^[0-9]*$/.test(value) || value === "") {
                      setPhoneNumber(value);
                    }
                  }}
                  style={styles.input}
                  keyboardType={"number-pad"}
                  maxLength={10}
                />
              </View>
              {validationError.phoneNumber && (
                <Text
                  style={{
                    color: "red",
                    fontSize: 12,
                    fontWeight: "500",
                  }}
                >
                  {validationError.phoneNumber}
                </Text>
              )}
            </View>
            <View style={styles.inputbox_main_container}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Password</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("VerifyEmail")}
                >
                  <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
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
                    placeholder={"Enter Password"}
                    onChangeText={(value) => setPassword(value)}
                    secureTextEntry={!showPassword}
                    style={styles.inputPass}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
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
              {validationError.password && (
                <Text
                  style={{
                    color: "red",
                    fontSize: 12,
                    fontWeight: "500",
                  }}
                >
                  {validationError.password}
                </Text>
              )}
            </View>
            <View style={styles.inputbox_main_container}>
              <TouchableOpacity
                style={[
                  styles.inputbox_submit,
                  { opacity: buttonDisabled ? 0.5 : 1 },
                ]}
                disabled={buttonDisabled}
                onPress={handleLogin}
              >
                {isLoading ? (
                  <ActivityIndicator size={"small"} color={"#ffffff"} />
                ) : (
                  <Text style={styles.submitText}>Sign In</Text>
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.createSignup}>
              <Text style={styles.signupText}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Registration")}
              >
                <Text style={[styles.signupText, styles.signupLink]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login_Page;

const styles = StyleSheet.create({
  container: {
    // top: 53,
    marginTop: 10,
    paddingBottom: 500,
  },
  main_content: {
    marginHorizontal: 20,
  },
  loginImage: {
    alignItems: "center",
  },
  img: {
    height: 236,
    width: 236,
    marginVertical: 10,
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
  },
  inputPass: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    width: "85%",
    marginLeft: 20,
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
