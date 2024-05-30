import React, { useContext, useEffect, useState } from "react";
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
  Alert,
  StatusBar,
  useColorScheme,
} from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  EvilIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import {
  getrequestwithtoken,
  objectToFormData,
  postDataWithFormDataWithToken,
} from "../../Helper/Helper";
import { AuthContext } from "../../Utils/context/AuthContext";
const ChangePassword = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPassword, setcurrentPassword] = useState("");
  const [newPassToggle, setNewPassToggle] = useState(false);
  const [confirmToggle, setConfirmToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const handleNewPasswordChange = (text) => {
    setNewPassword(text);
    checkPasswordsMatch(text, confirmPassword);
  };
  const handleCurrentPassword = (text) => {
    setcurrentPassword(text);
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
  const [changePasswordServerMessage, setchangePasswordServerMessage] =
    useState("");
  const { userToken } = useContext(AuthContext);
  const handleResetPassword = async () => {
    setIsLoading(true);
    const postData = {
      mobile: LoginUserNumber,
      current_password: currentPassword,
      new_password: newPassword,
      confirm_password: confirmPassword,
    };
    const formDatablock = objectToFormData(postData);

    postDataWithFormDataWithToken(
      "auth/change-password",
      formDatablock,
      userToken
    )
      .then((res) => {
        setchangePasswordServerMessage(res?.message);
        if (res?.status) {
          showToast("Password Reset Successfull");
          setIsLoading(false);
          navigation.navigate("Dashboard");
        } else {
          Alert.alert("Alert", "Password Not Match");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error posting c:ss", error?.message);

        setIsLoading(false);
      });
  };

  const [LoginUserNumber, setLoginUserNumber] = useState("");

  const colorScheme = useColorScheme();
  const statusBarColor = colorScheme === "dark" ? "black" : "white";

  useEffect(() => {
    // Define the URL you want to fetch data from
    const apiUrl = "/student/profile";

    // Call the getstatedata function with the API URL
    getrequestwithtoken(apiUrl, userToken)
      .then((res) => {
        setLoginUserNumber(res?.data?.mobile);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
              source={require("../../assets/img/changepasswordImage.png")}
              style={styles.img}
            />
          </View>
          <View style={styles.welcome_texts}>
            <Text style={styles.welcome}>Change Password</Text>
            <Text style={styles.text}>Please enter a strong new password</Text>
          </View>

          <View style={styles.inputbox_container_parent}>
            <View style={styles.inputbox_main_container}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Current Password</Text>
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
                    placeholder="Enter Current Password "
                    secureTextEntry={!confirmToggle}
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    onChangeText={handleCurrentPassword}
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
                    placeholder="Enter New Password "
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
                    placeholder="Enter Confirm Password"
                    secureTextEntry={!newPassToggle}
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    onChangeText={handleConfirmPasswordChange}
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
              <TouchableOpacity
                style={[
                  styles.inputbox_submit,
                  isButtonActive ? null : styles.disabled,
                ]}
                disabled={!isButtonActive || isLoading}
                onPress={() => handleResetPassword()}
              >
                {isLoading ? (
                  <ActivityIndicator size="small" color="#ffffff" />
                ) : (
                  <Text style={styles.submitText}>Change Password</Text>
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

export default ChangePassword;
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: "white",
  },
  main_content: {
    marginHorizontal: 20,
    marginBottom: 40,
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
    backgroundColor: "white",
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
