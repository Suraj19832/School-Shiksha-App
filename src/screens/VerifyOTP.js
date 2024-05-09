import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { sendPostData } from "../../Helper/Helper";
import { useRoute } from "@react-navigation/native";
import Header from "../../components/Header";

const VerifyOTP = ({ navigation }) => {
  const route = useRoute();
  const { email } = route.params;

  const [otp, setOTP] = useState(["", "", "", ""]);
  const otpFields = [useRef(), useRef(), useRef(), useRef()];
  const [timer, setTimer] = useState(30);
  const [isLoading, setIsLoading] = useState(false);
  const [resendOff, setResendOff] = useState(true);
  function showToast(message) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(interval);
          setResendOff(false);
        }
        return prevTimer === 0 ? 0 : prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [resendOff]);

  const handleOTPChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value !== "" && index < 3) {
      otpFields[index + 1].current.focus();
    } else if (value === "" && index > 0) {
      otpFields[index - 1].current.focus();
    }
  };

  const isOTPComplete = () => {
    return otp.every((digit) => digit !== "");
  };

  const resendOTP = () => {
    // Logic to resend OTP
    setTimer(30);
    setResendOff(true);
    handleResendOtp();
  };

  const handleForgetPassword = () => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("otp", otp.join(""));
    formData.append("email", email);

    // Send POST request with FormData
    sendPostData("auth/forget-password/verify-otp", formData)
      .then((res) => {
        setIsLoading(false);
        if (res?.status) {
          showToast(res.message);
          navigation.navigate("ForgetPassword", { email });
        } else {
          showToast(res.errors?.otp);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err, "error message from login side");
      });
  };

  const handleResendOtp = () => {
    // Send OTP logic
    const formData = new FormData();
    formData.append("email", email);

    // Send POST request with FormData
    sendPostData("auth/forget-password", formData)
      .then((res) => {
        setIsLoading(false);
        if (res?.status) {
          showToast(res?.message);
        } else {
          showToast(res.errors?.email);
        }
      })
      .catch((err) => {
        console.error(err, "error message from login side");
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* <Header navigateTo={navigation.goBack} /> */}
      <ScrollView style={styles.container}>
        <View style={styles.main_content}>
          <FontAwesome5
            name="arrow-left"
            size={24}
            color="rgba(0, 54, 126, 1)"
            style={styles.arrowleft}
            onPress={() => navigation.navigate("VerifyEmail")}
          />
          <View style={styles.loginImage}>
            <Image
              source={require("../../assets/img/EnterOTP.png")}
              style={styles.img}
            />
          </View>

          <View style={styles.welcome_texts}>
            <View>
              <Text style={styles.welcome}>OTP Verification</Text>
              <Text style={styles.text}>
                We Will send You one time password on {"     "}this
                <Text style={styles.emailText}> Email Id</Text>
              </Text>
            </View>
            <View>
              <View style={styles.editEmail}>
                <Text style={styles.email}>abc@gmail.com</Text>
                <TouchableOpacity style={styles.editBtn}>
                  <MaterialIcons name="edit" size={9} color="white" />
                  <Text style={styles.edittext}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.otp}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  style={styles.otpDigit}
                  keyboardType="numeric"
                  maxLength={1}
                  onChangeText={(value) => handleOTPChange(index, value)}
                  value={digit}
                  ref={otpFields[index]}
                />
              ))}
            </View>
            <View>
              <Text style={styles.timer}>
                00:{timer < 10 ? `0${timer}` : timer}
              </Text>
            </View>
            <View style={styles.resendview}>
              <Text>Didn't receive OTP?</Text>
              {resendOff ? (
                <Text style={[styles.resend, { color: "grey" }]}>
                  Resend OTP
                </Text>
              ) : (
                <TouchableOpacity onPress={resendOTP}>
                  <Text style={styles.resend}>Resend OTP</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={styles.buttonBox}>
            <TouchableOpacity
              style={[
                styles.submitButton,
                isOTPComplete() ? styles.activeButton : styles.disabledButton,
              ]}
              onPress={() => {
                if (isOTPComplete() && !isLoading) {
                  handleForgetPassword();
                }
              }}
              disabled={!isOTPComplete() || isLoading}
            >
              {isLoading ? (
                <ActivityIndicator size={"small"} color={"#ffffff"} />
              ) : (
                <Text style={styles.submit}>Submit</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default VerifyOTP;

const styles = StyleSheet.create({
  container: {
    // top: 53,
  },
  main_content: {
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  arrowleft: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  loginImage: {
    alignItems: "center",
  },
  img: {
    height: 220,
    width: 250,
  },
  welcome_texts: {
    marginVertical: 10,
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
  email: {
    color: "rgba(166, 166, 166, 1)",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
  },
  editBtn: {
    backgroundColor: "rgba(3, 53, 125, 1)",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 4,
    gap: 4,
  },
  editEmail: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  edittext: {
    fontWeight: "500",
    fontSize: 10,
    lineHeight: 12.5,
    color: "#fff",
  },
  timer: {
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 12.5,
    textAlign: "center",
  },
  resendview: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  sendotp: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18.75,
    color: "rgba(66, 66, 66, 1)",
  },
  resend: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 21.09,
    color: "rgba(0, 54, 126, 1)",
  },
  otp: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  otpDigit: {
    borderWidth: 2,
    borderColor: "rgba(3, 53, 125, 1)",
    borderRadius: 4,
    width: 50,
    height: 50,
    textAlign: "center",
    fontSize: 20,
  },
  buttonBox: {
    width: "100%",
  },
  submitButton: {
    marginTop: 10,
    padding: 16,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "rgba(3, 53, 125, 1)",
    shadowColor: "rgba(3, 53, 125, 0.25)",
    alignItems: "center",
  },
  submit: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#fff",
  },
  error: {
    color: "red",
  },
  activeButton: {
    opacity: 1,
  },
  disabledButton: {
    opacity: 0.5,
  },
});
