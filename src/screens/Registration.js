import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";

import React, { useState } from "react";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Entypo,
  FontAwesome5,
  Feather,
  Octicons,
} from "@expo/vector-icons";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Checkbox from "expo-checkbox";

const Registration = () => {
  const [isChecked, setChecked] = useState(false);
  // const [fullName, setFullName] = useState("");
  // const [fullNameError, setFullNameError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    mobileNumber: "",
    whatsappNumber: "",
    email: "",
    dob: "",
    class: "",
    gender: "",
    fullAddress: "",
    district: "",
    policeStation: "",
    pin: "",
  });

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [formErrors, setFormErrors] = useState({});
  const [fieldTouched, setFieldTouched] = useState({});
  const [customErrorMessage, setCustomErrorMessage] = useState("");
  const validateForm = () => {
    const errors = {};

    // Validate each field
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim() && fieldTouched[key]) {
        errors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleInputBlur = (key) => {
    setFieldTouched({ ...fieldTouched, [key]: true });
    validateForm();
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Proceed with form submission
      console.log("Form submitted:", formData);
    }
  };
// email validation 
  const validateEmail = () => {
    // Regular expression pattern to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setEmailError('Email is required');
    } else if (!emailPattern.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    if (text.trim()) {
      setEmailError('');
    }
  };

  // password validation 

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = () => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;

    if (!password.trim()) {
      setPasswordError('Password is required');
    } else if (!passwordPattern.test(password)) {
      setPasswordError('Password must contain a capital letter, a lowercase letter, a special symbol, and have a minimum length of 5 characters');
    } else {
      setPasswordError('');
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    if (text.trim()) {
      setPasswordError('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainView}>
          <View style={styles.innerView}>
            <MaterialIcons name="arrow-back" size={30} color={"#00367E"} />
            <View style={styles.ImageView}>
              <Image
                style={styles.image}
                source={require("/home/desunub7/School Shiksharthi/school-shiksha-app/assets/img/registration.png")}
              />
            </View>
            <View style={{ left: 0 }}>
              <View>
                <Text style={styles.CreateAccountText}>Create </Text>
              </View>
              <View>
                <Text style={styles.CreateAccountText}>your account</Text>
              </View>
            </View>

            {/* Input fields  */}
            <View style={{ left: 0, marginTop: 20 }}>
              {/* Name  */}
              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Full Name
                  </Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Feather name="user" size={16} color="rgba(0, 54, 126, 1)" />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Your Full Name"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={formData.fullName}
                    onChangeText={(text) => handleInputChange("fullName", text)}
                    onBlur={() => handleInputBlur("fullName")}
                  />
                </View>
                {formErrors.fullName && fieldTouched.fullName && (
                  <Text style={{ color: "red" }}>{formErrors.fullName}</Text>
                )}
                {!formErrors.fullName &&
                  !formData.fullName &&
                  fieldTouched.fullName && (
                    <Text style={{ color: "red" }}>Full Name is required</Text>
                  )}
              </View>

              {/* Father name  */}

              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Father's Name
                  </Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Feather name="user" size={16} color="rgba(0, 54, 126, 1)" />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Your Father's name"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={formData.fatherName}
                    onChangeText={(text) =>
                      handleInputChange("fatherName", text)
                    }
                    onBlur={() => handleInputBlur("fatherName")}
                  />
                </View>
                {formErrors.fatherName &&
                  !formData.fatherName &&
                  fieldTouched.fatherName && (
                  <Text style={{ color: "red" }}>father's name required</Text>
                )}
           
              </View>

              {/* Mobile number  */}
              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Mobile Number
                  </Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Feather
                    name="phone-call"
                    size={16}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Enter your mobile number"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={formData.mobileNumber}
                    onChangeText={(text) =>
                      handleInputChange("mobileNumber", text)
                    }
                    onBlur={() => handleInputBlur("mobileNumber")}
                  />
                </View>
                {formErrors.mobileNumber && fieldTouched.mobileNumber && (
                  <Text style={{ color: "red" }}>
                    Mobile Number required
                  </Text>
                )}
                {!formErrors.mobileNumber &&
                  formData.mobileNumber &&
                  formData.mobileNumber.trim().length !== 10 && (
                    <Text style={{ color: "red" }}>
                      Mobile number must be 10 digits
                    </Text>
                  )}
              </View>
              {/* whatsapp number  */}
              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    WhatsApp Number
                  </Text>
                </View>
                <View style={styles.inputbox_container}>
                  <FontAwesome5
                    name="whatsapp"
                    size={16}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Enter your WhatsApp number"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={formData.whatsappNumber}
                    onChangeText={(text) =>
                      handleInputChange("whatsappNumber", text)
                    }
                    onBlur={() => handleInputBlur("whatsappNumber")}
                  />
                </View>
                {formErrors.whatsappNumber && fieldTouched.whatsappNumber && (
                  <Text style={{ color: "red" }}>
                    Whatsapp number Required 
                  </Text>
                )}
                {!formErrors.whatsappNumber &&
                  formData.whatsappNumber &&
                  formData.whatsappNumber.trim().length !== 10 && (
                    <Text style={{ color: "red" }}>
                      Mobile number must be 10 digits
                    </Text>
                  )}
              </View>

              {/* email id  */}
              <View style={styles.inputbox_main_container}>
        <View>
          <Text style={{ color: "rgba(0, 54, 126, 1)", fontWeight: "500", fontSize: 18 }}>
            Email Id
          </Text>
        </View>
        <View style={styles.inputbox_container}>
          <Feather name="mail" size={16} color="rgba(0, 54, 126, 1)" />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="rgba(166, 166, 166, 1)"
            value={email}
            onChangeText={handleEmailChange}
            onBlur={validateEmail}
          />
        </View>
        {emailError ? <Text style={{ color: 'red' }}>{emailError}</Text> : null}
      </View>

              {/* date of birth  */}
              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    D.O.B
                  </Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Feather
                    name="calendar"
                    size={16}
                    color="
                rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Date of birth"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={formData.dob}
                    onChangeText={(text) =>
                      handleInputChange("dob", text)
                    }
                    onBlur={() => handleInputBlur("dob")}
                  />
                </View>
                {formErrors.dob &&
                  !formData.dob &&
                  fieldTouched.dob && (
                  <Text style={{ color: "red" }}>DOB required</Text>
                )}
              </View>

              {/* class  */}
              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Class
                  </Text>
                </View>
                <View
                  style={[
                    styles.inputbox_container,
                    { justifyContent: "space-between" },
                  ]}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <Feather
                      name="book-open"
                      size={16}
                      color="
                rgba(0, 54, 126, 1)"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Select"
                      placeholderTextColor="rgba(166, 166, 166, 1)"
                      value={formData.class}
                      onChangeText={(text) =>
                        handleInputChange("class", text)
                      }
                      onBlur={() => handleInputBlur("class")}
                    />
                  </View>
                  <View>
                    <AntDesign
                      name="caretdown"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                  </View>
                </View>
                {formErrors.class &&
                  !formData.class &&
                  fieldTouched.class && (
                  <Text style={{ color: "red" }}>Please select class</Text>
                )}
              </View>
              {/* gender  */}
              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Gender
                  </Text>
                </View>
                <View
                  style={[
                    styles.inputbox_container,
                    { justifyContent: "space-between" },
                  ]}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="gender-male-female-variant"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Select"
                      placeholderTextColor="rgba(166, 166, 166, 1)"
                      value={formData.gender}
                      onChangeText={(text) =>
                        handleInputChange("gender", text)
                      }
                      onBlur={() => handleInputBlur("gender")}
                    />
                  </View>
                  <View>
                    <AntDesign
                      name="caretdown"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                  </View>
                </View>
                {formErrors.gender &&
                  !formData.gender &&
                  fieldTouched.gender && (
                  <Text style={{ color: "red" }}>Please select your gender </Text>
                )}
              </View>
              {/* full address  */}
              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Full Address
                  </Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Feather
                    name="map-pin"
                    size={16}
                    color="
                rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your full address"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={formData.fullAddress}
                    onChangeText={(text) =>
                      handleInputChange("fullAddress", text)
                    }
                    onBlur={() => handleInputBlur("fullAddress")}
                  />
                </View>
                {formErrors.fullAddress &&
                  !formData.fullAddress &&
                  fieldTouched.fullAddress && (
                  <Text style={{ color: "red" }}>Please enter full address </Text>
                )}
              </View>
              {/* district  */}
              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    District
                  </Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Feather
                    name="map"
                    size={16}
                    color="
                rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your full address"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={formData.district}
                    onChangeText={(text) =>
                      handleInputChange("district", text)
                    }
                    onBlur={() => handleInputBlur("district")}
                  />
                </View>
                {formErrors.district &&
                  !formData.district &&
                  fieldTouched.district && (
                  <Text style={{ color: "red" }}>Please enter your District</Text>
                )}
              </View>
              {/* police station  */}
              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Police Station
                  </Text>
                </View>
                <View
                  style={[
                    styles.inputbox_container,
                    { justifyContent: "space-between" },
                  ]}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="police-station"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Choose Option"
                      placeholderTextColor="rgba(166, 166, 166, 1)"
                      value={formData.policeStation}
                      onChangeText={(text) =>
                        handleInputChange("policeStation", text)
                      }
                      onBlur={() => handleInputBlur("policeStation")}
                    />
                  </View>
                  <View>
                    <AntDesign
                      name="caretdown"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                  </View>
                </View>
                {formErrors.policeStation &&
                  !formData.policeStation &&
                  fieldTouched.policeStation && (
                  <Text style={{ color: "red" }}>Please enter your Police Station</Text>
                )}
              </View>
              {/* pin  */}
              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Pin
                  </Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Feather
                    name="map-pin"
                    size={16}
                    color="
                rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter pin code"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={formData.pin}
                      onChangeText={(text) =>
                        handleInputChange("pin", text)
                      }
                      onBlur={() => handleInputBlur("pin")}
                  />
                </View>
                {formErrors.pin &&
                  !formData.pin &&
                  fieldTouched.pin && (
                  <Text style={{ color: "red" }}>Please enter your Pin</Text>
                )}
              </View>
              {/* member plan  */}
              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Member Plan
                  </Text>
                </View>
                <View
                  style={[
                    styles.inputbox_container,
                    { justifyContent: "space-between" },
                  ]}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="crown"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                    <TextInput
                      style={[styles.input,{}]}
                      placeholder="Select"
                      placeholderTextColor="rgba(166, 166, 166, 1)"
                    />
                  </View>
                  <View>
                    <AntDesign
                      name="caretdown"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                  </View>
                </View>
              </View>
              {/* refereal code  */}
              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Referral code
                  </Text>
                </View>
                <View style={styles.inputbox_container}>
                  <FontAwesome5
                    name="ticket-alt"
                    size={16}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={[styles.input,{}]}
                    placeholder="Enter Your Referral Code (Optional)"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                  />
                </View>
              </View>
              {/* Payment fee  */}
              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Payment/Free
                  </Text>
                </View>
                <View
                  style={[
                    styles.inputbox_container,
                    { justifyContent: "space-between" },
                  ]}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="crown"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Select"
                      placeholderTextColor="rgba(166, 166, 166, 1)"
                    />
                  </View>
                  <View>
                    <AntDesign
                      name="caretdown"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                  </View>
                </View>
              </View>
              {/* password  */}
              <View style={styles.inputbox_main_container}>
        <View>
          <Text style={{ color: "rgba(0, 54, 126, 1)", fontWeight: "500", fontSize: 18 }}>
            Password
          </Text>
        </View>
        <View style={[styles.inputbox_container, { justifyContent: "space-between" }]}>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }}>
            <MaterialCommunityIcons name="lock" size={16} color="rgba(0, 54, 126, 1)" />
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="rgba(166, 166, 166, 1)"
              secureTextEntry={true}
              value={password}
              onChangeText={handlePasswordChange}
              onBlur={validatePassword}
            />
          </View>
          <View>
            <MaterialIcons name="hide-source" size={16} color="rgba(0, 54, 126, 1)" />
          </View>
        </View>
        {passwordError ? <Text style={{ color: 'red' }}>{passwordError}</Text> : null}
      </View>
            </View>

            <View>

              <View style={styles.section}>
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={setChecked}
                />
                <Text style={{ fontSize: 14, fontWeight: "400" }}>
                  I agree with the
                </Text>
                <Text style={{ fontSize: 14, fontWeight: "600" }}>
                  Terms & Conditions
                </Text>
              </View>

              {/* button  */}

              <View style={styles.inputbox_main_container}>
                <LinearGradient
                  colors={["#03357D", "#03357D"]} // Define your gradient colors here
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={[styles.buttonbox, { justifyContent: "center" }]}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "500",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        color:'white'
                      }}
                    >
                      Sign Up
                    </Text>
                  </View>
                </LinearGradient>
              </View>
              <View
                style={{
                  display: "flex ",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "#424242", fontWeight: "400", fontSize: 16 }}
                >
                  Already have an account?{" "}
                </Text>
                <Text
                  style={{ color: "#03357D", fontWeight: "700", fontSize: 18 }}
                >
                  Sign in
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
const styles = StyleSheet.create({
  mainView: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "auto",
    // backgroundColor: "red",
  },
  innerView: {
    width: "90%",
    height: "auto",
    // backgroundColor: "yellow",
    marginBottom: 20,
    marginTop: 50,
    // justifyContent:'center',
    // alignItems:'center'
  },
  ImageView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 220,
    width: 220,
  },

  CreateAccountText: {
    fontSize: 30,
    fontWeight: "600",
  },
  inputbox_container: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#03357D",
    padding: 12,
    paddingHorizontal: 20,
    backgroundColor: "#FDF1DD",
    borderRadius: 30,
    gap: 8,
  },

  buttonbox: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#03357D",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    gap: 8,
  },

  buttonbox1: {
    textAlign: "center",
    alignItems: "center",
  },
  inputbox_main_container: {
    gap: 12,
    marginBottom: 10,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    gap: 8,
    marginBottom: 15,
    marginTop:25
  },
  buttonboxWrapper: {
    borderRadius: 30, // Retain the border radius from the buttonbox style
    overflow: "hidden", // Clip the linear gradient to the border radius
  },
  input:{
width:'82%'
  }
});
