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
  ActivityIndicator,
  ToastAndroid,
  StatusBar,
  useColorScheme,
} from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { sendPostData } from "../../Helper/Helper";
import Header from "../../components/Header";

const VerifyEmail = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [sendOtpPressed, setSendOtpPressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function showToast(message) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }
  const colorScheme = useColorScheme();
  const statusBarColor = colorScheme === "dark" ? "black" : "white";

  useEffect(() => {
    setIsEmailValid(validateEmail(email));
  }, [email]);

  const handleSendOtp = () => {
    if (!isEmailValid) {
      setSendOtpPressed(true);
      return;
    }

    setIsLoading(true);
    setButtonDisabled(true);

    // Send OTP logic
    const formData = new FormData();
    formData.append("email", email);

    // Send POST request with FormData
    sendPostData("auth/forget-password", formData)
      .then((res) => {
        setIsLoading(false);
        setButtonDisabled(false);
        if (res?.status) {
          showToast(res?.message);
          navigation.navigate("VerifyOtp", { email });
        } else {
          showToast(res.errors?.email);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setButtonDisabled(false);
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
          <TouchableOpacity onPress={navigation.goBack}>
            <Image
              source={require("../../assets/icons/arrow.png")}
              style={{ height: 24, width: 24 }}
            />
          </TouchableOpacity>
          <View style={styles.loginImage}>
            <Image
              source={require("../../assets/img/6-Recovered.png")}
              style={styles.img}
              resizeMode="stretch"
            />
          </View>

          <View style={styles.welcome_texts}>
            <View>
              <Text style={styles.welcome}>Enter Your Email Id</Text>
              <Text style={styles.text}>
                We Will send You one time password on this
                <Text style={styles.emailText}> Email Id</Text>
              </Text>
            </View>
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
                disabled={!isEmailValid || isLoading || buttonDisabled} // Disable button when loading or already clicked
                onPress={handleSendOtp}
              >
                {isLoading ? (
                  <ActivityIndicator size="small" color="#ffffff" />
                ) : (
                  <Text style={styles.submitText}>Send OTP</Text>
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.createSignup}>
              <Text style={styles.signupText}>Already a Member?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
    // top: 53,
    marginTop: 10,
  },
  main_content: {
    marginHorizontal: 20,
  },
  loginImage: {
    alignItems: "center",
    marginBottom: 10,
  },
  img: {
    marginTop: 10,
    height: 220,
    width: "100%",
  },
  arrowleft: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  welcome_texts: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  welcome: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
    color: "rgba(55, 55, 55, 1)",
    lineHeight: 45,
  },
  text: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
    color: "rgba(55, 55, 55, 1)",
    margin: 8,
  },
  emailText: {
    fontWeight: "600",
    color: "rgba(55, 55, 55, 1)",
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
