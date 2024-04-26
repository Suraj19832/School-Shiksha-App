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
import { Feather, EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const Login_Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = (email) => {
    if (!email) {
      return "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Invalid email format.";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!password) {
      return "Password is required.";
    } else if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    } else if (
      !/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)
    ) {
      return "Password must contain at least one capital letter, one special character, and one number.";
    }
    return "";
  };

  const handleChangeEmail = (text) => {
    const errorMessage = validateEmail(text);
    setEmail(text);
    setErrors((prevErrors) => ({ ...prevErrors, email: errorMessage }));
  };

  const handleChangePassword = (text) => {
    const errorMessage = validatePassword(text);
    setPassword(text);
    setErrors((prevErrors) => ({ ...prevErrors, password: errorMessage }));
  };

  useEffect(() => {
    setIsFormValid(!errors.email && !errors.password && email && password);
  }, [errors, email, password]);

  const handleSubmit = () => {
    if (isFormValid) {
      // Perform form submission logic here
      alert("Form Submitted Successfully!");
      console.log("Form submitted successfully!");
    } else {
      // Display error messages
      Alert.alert(
        "Form has errors",
        "Please correct the errors before submitting."
      );
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView>
        <View style={styles.main_content}>
          <View style={styles.loginImage}>
            <Image
              source={require("../../assets/img/loginimg.png")}
              style={styles.img}
            />
          </View>
          <View style={styles.welcome_texts}>
            <Text style={styles.welcome}>Welcome Back!</Text>
            <Text style={styles.text}>Log in to your existing account</Text>
          </View>

          <View style={styles.inputbox_container_parent}>
            <View style={styles.inputbox_main_container}>
              <View>
                <Text style={styles.label}>Email</Text>
              </View>
              <View style={styles.inputbox_container}>
                <Feather name="mail" size={16} color="rgba(0, 54, 126, 1)" />
                <TextInput
                  style={styles.input}
                  placeholder="Enter Your Email"
                  placeholderTextColor="rgba(166, 166, 166, 1)"
                  value={email}
                  onChangeText={handleChangeEmail}
                />
              </View>
              {errors.email !== "" && (
                <Text style={styles.error}>{errors.email}</Text>
              )}
            </View>
            <View style={styles.inputbox_main_container}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Password</Text>
                <TouchableOpacity
                  onPress={() => console.log("Forgot Password?")}
                >
                  <Text style={styles.forgotPassword}>Forget Password?</Text>
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
                    style={styles.inputPass}
                    placeholder="Enter Password"
                    secureTextEntry={!showPassword}
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={password}
                    onChangeText={handleChangePassword}
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
              {errors.password !== "" && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
            </View>
            <View style={styles.inputbox_main_container}>
              <TouchableOpacity
                style={[
                  styles.inputbox_submit,
                  { opacity: isFormValid ? 1 : 0.5 },
                ]}
                disabled={!isFormValid}
                onPress={handleSubmit}
              >
                <Text style={styles.submitText}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.createSignup}>
              <Text style={styles.signupText}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => console.log("Sign Up")}>
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
    top: 53,
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
