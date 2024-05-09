import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  Platform,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import { TextInput } from "react-native";
import { FontAwesome5, Fontisto, Feather, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const OnlineAdmissionForm = ({ navigation }) => {
  //For gender
  const showToast = (message) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      alert(message);
    }
  };
  const [genderData, setGenderData] = useState("");
  const [isDropdownOpengender, setDropdownOpengender] = useState(false);
  const [selectedOptiongender, setSelectedOptiongender] = useState(null);
  const [inputValuegender, setInputValuegender] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  //handle toggle for gender
  const toggleDropdowngender = () => {
    setDropdownOpengender(!isDropdownOpengender);
  };
  const handleSelectOptiongender = (option) => {
    setSelectedOptiongender(option);
    setInputValuegender(option);
    setGenderData(option);
    setDropdownOpengender(false);
  };
  const handleInputChangegender = (text) => {
    setInputValuegender(text);
    setDropdownOpengender(null); // Clear selected option when user edits input
  };

  //For datePicker
  const [userDetails, setUserDetails] = useState({
    date_of_birth: "",
  });
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // const handleConfirm = (date) => {
  //   setUserDetails({
  //     ...userDetails,
  //     date_of_birth: date.toISOString().split("T")[0],
  //   });
  //   hideDatePicker();
  // };
  const handleConfirm = (date) => {
    setFormData({
      ...formData,
      date_of_birth: date.toISOString().split("T")[0],
    });
    hideDatePicker();
  };

  //for qualification
  const [qualificationData, setQualification] = useState("");
  const [isDropdownOpenQualification, setDropdownOpenQualification] =
    useState(false);
  const [selectedOptionQualification, setSelectedOptionQualification] =
    useState(null);
  const [inputValueQualification, setInputValueQualification] = useState("");

  //handle toggle for qualification
  const toggleDropdownQualification = () => {
    setDropdownOpenQualification(!isDropdownOpenQualification);
  };
  const handleSelectOptionQualification = (option) => {
    setSelectedOptionQualification(option);
    setInputValueQualification(option);
    setQualification(option);
    setDropdownOpenQualification(false);
  };
  const handleInputChangeQualification = (text) => {
    setInputValueQualification(text);
    setDropdownOpenQualification(null); // Clear selected option when user edits input
  };
  const validateForm = () => {
    const errors = {};

    // Validate each field
    Object.keys(formData).forEach((key) => {
      if (formData[key] && !formData[key].trim() && fieldTouched[key]) {
        errors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    });
    console.log(">>", errors);
    // setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const [formData, setFormData] = useState({
    name: "",
    date_of_birth: "",
    roll_number: "",
    total_number: "",
    percentage: "",
    fatherName: "",
    motherName: "",
    mobile: "",
    fatherMobile: "",
    whatsapp_number: "",
    address: "",
    police_station: "",
    pincode: "",
    aadhar_number: "",
    nationality: "",
    religion: "",
    district_id: "",
    password: "",
    referral_code: "",
  });
  const [fieldTouched, setFieldTouched] = useState({});
  const handleSubmission = () => {
    if (formData.name && formData.mobile) {
    }
    const formsData = new FormData();
    if (
      formData.name &&
      formData.mobile &&
      // formData.pincode &&
      // formData.police_station &&
      formData.address &&
      formData.whatsapp_number &&
      formData.date_of_birth &&
      email &&
      inputValuegender
    ) {
      // formsData.append("name", formData.name);
      // formsData.append("email", email);
      // formsData.append("mobile", formData.mobile);
      // formsData.append("date_of_birth", userDetails.date_of_birth);
      // formsData.append("aadhar_number", formData.aadhar_number);
      // formsData.append("gender", genderData);
      // formsData.append("pincode", formData.pincode);
      // formsData.append("police_station", formData.police_station);
      // formsData.append("district_id", districtId);
      // formsData.append("address", formData.address);
      // formsData.append("whatsapp_number", formData.whatsapp_number);
      // formsData.append("password", password);
      // formsData.append("referral_code", formData.referral_code);
      // formsData.append("nationality", formData.nationality);
      // formsData.append("religion", formData.religion);
      // formsData.append("block", blockId);
      // formsData.append("class", inputValueclass);
      // console.log("6565655", formsData);
      // sendPostData("register", formsData)
      //   .then((res) => {
      //     if (res?.status) {
      //       showToast("Registration Successfull");
      //       console.log("11111111", res?.status);
      //       navigation.navigate("Dashboard");
      //     } else {
      //       console.log("00", res);
      //       console.log("888", formsData);
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err, "--err");
      //   });
      showToast("Submitted Successfully");
    } else {
      // console.log("Registration failed: Required fields are missing");
      Alert.alert("Alert", "Please Fill up All Fields");
    }
  };
  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  const handleInputBlur = (key) => {
    setFieldTouched({ ...fieldTouched, [key]: true });
    console.log("first", key);
    validateForm();
    setDropdownOpengender(false);
  };
  const handleEmailChange = (text) => {
    setEmail(text);
    if (text.trim()) {
      setEmailError("");
    }
  };
  const validateEmail = () => {
    // Regular expression pattern to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setEmailError("Email is required");
    } else if (!emailPattern.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };
  return (
    <View style={styles.container}>
      <Header
        title="Online Course Admission Form"
        navigateTo={navigation?.goBack}
      />
      <ScrollView>
        <View style={styles.main_content}>
          <View style={styles.profile}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.img}
                source={require("../../assets/img/webinar.png")}
              />
            </View>
            <View style={{ width: "80%" }}>
              <Text style={styles.profileText}>Online Course</Text>
            </View>
          </View>
          <View style={styles.college_details}>
            <View>
              <Text style={styles.college_details_text}>College name</Text>
              <TextInput
                style={styles.college_details_input}
                placeholder="Brainware Univesity"
                placeholderTextColor={"rgba(166, 166, 166, 1)"}
              />
            </View>
            <View>
              <Text style={styles.college_details_text}>Course name</Text>
              <TextInput
                style={styles.college_details_input}
                placeholder="Course"
                placeholderTextColor={"rgba(166, 166, 166, 1)"}
              />
            </View>
          </View>
          <View style={styles.personal_details}>
            <View style={styles.heading}>
              <Text style={styles.text}>Student Details</Text>
            </View>
            <View style={styles.input_fields}>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Name</Text>
                <View style={styles.input_box}>
                  <FontAwesome5
                    name="user"
                    size={14}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Name"
                    onChangeText={(text) => handleInputChange("name", text)}
                    onBlur={() => handleInputBlur("name")}
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
                {!formData.name && fieldTouched.name && (
                  <Text style={{ color: "red" }}>Full Name is required</Text>
                )}
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Date of Birth</Text>
                <View style={styles.input_box}>
                  <Fontisto
                    name="date"
                    size={14}
                    color="rgba(0, 54, 126, 1)"
                    onPress={showDatePicker}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Date of Birth"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                    value={formData.date_of_birth}
                    onChangeText={(text) =>
                      handleInputChange("date_of_birth", text)
                    }
                    onFocus={showDatePicker} // Show date picker when input field is focused
                    editable={true} // Make the input field editable
                    onBlur={() => handleInputBlur("date_of_birth")}
                  />
                </View>
                {!formData.date_of_birth && fieldTouched.date_of_birth && (
                  <Text style={{ color: "red" }}>D.O.B is required</Text>
                )}
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </View>

              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Gender</Text>
                <TouchableOpacity onPress={toggleDropdowngender}>
                  <View style={styles.input_box}>
                    <Image
                      source={require("../../assets/icons/gender.png")}
                      style={styles.iconImage}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Choose Option"
                      placeholderTextColor="rgba(166, 166, 166, 1)"
                      value={inputValuegender}
                      onChangeText={handleInputChangegender}
                      onBlur={() => handleSelectOptiongender(inputValuegender)}
                      editable={false} // Allow editing only when dropdown is closed
                    />
                    <AntDesign
                      name="caretdown"
                      style={styles.arrowdown}
                      size={15}
                      color="rgba(0, 54, 126, 1)"
                    />
                  </View>
                </TouchableOpacity>
                {isDropdownOpengender && (
                  <View style={styles.dropdownContainer}>
                    <TouchableOpacity
                      style={styles.dropdownOption}
                      onPress={() => handleSelectOptiongender("male")}
                    >
                      <Text>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.dropdownOption}
                      onPress={() => handleSelectOptiongender("female")}
                    >
                      <Text>Female</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>

              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Email Id</Text>
                <View style={styles.input_box}>
                  <Fontisto
                    name="email"
                    size={14}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                    value={email}
                    onChangeText={handleEmailChange}
                    onBlur={validateEmail}
                  />
                </View>
                {emailError ? (
                  <Text style={{ color: "red" }}>{emailError}</Text>
                ) : null}
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Mobile Number</Text>
                <View style={styles.input_box}>
                  <Feather
                    name="phone-call"
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your Number"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                    value={formData.mobile}
                    keyboardType="numeric"
                    onChangeText={(text) => handleInputChange("mobile", text)}
                    onBlur={() => handleInputBlur("mobile")}
                    maxLength={10}
                  />
                </View>
                {formData.mobile && formData.mobile.trim().length !== 10 && (
                  <Text style={{ color: "red" }}>
                    Mobile number must be 10 digits
                  </Text>
                )}
                {!formData.mobile && fieldTouched.mobile && (
                  <Text style={{ color: "red" }}>
                    Mobile Number is required
                  </Text>
                )}
              </View>

              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Full Address</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/home (1).png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your Address"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                    value={formData.address}
                    onChangeText={(text) => handleInputChange("address", text)}
                    onBlur={() => handleInputBlur("address")}
                  />
                </View>
                {!formData.address && fieldTouched.address && (
                  <Text style={{ color: "red" }}>
                    Please enter Your Address{" "}
                  </Text>
                )}
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Qualification</Text>
                <TouchableOpacity onPress={toggleDropdownQualification}>
                  <View style={styles.input_box}>
                    <Image
                      source={require("../../assets/icons/qualification.png")}
                      style={styles.iconImage}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Select"
                      placeholderTextColor={"rgba(166, 166, 166, 1)"}
                      value={inputValueQualification}
                      onChangeText={handleInputChangeQualification}
                      onBlur={() =>
                        handleSelectOptionQualification(inputValueQualification)
                      }
                      editable={false} // Allow editing only when dropdown is closed
                    />
                    <AntDesign
                      name="caretdown"
                      style={styles.arrowdown}
                      size={15}
                      color="rgba(0, 54, 126, 1)"
                    />
                  </View>
                </TouchableOpacity>
                {isDropdownOpenQualification && (
                  <View style={styles.dropdownContainer}>
                    <TouchableOpacity
                      style={styles.dropdownOption}
                      onPress={() => handleSelectOptionQualification("10th")}
                    >
                      <Text>10th</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.dropdownOption}
                      onPress={() => handleSelectOptionQualification("H.S")}
                    >
                      <Text>H.S</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Whatsapp Number</Text>
                <View style={styles.input_box}>
                  <FontAwesome5
                    name="whatsapp"
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    value={formData.whatsapp_number}
                    keyboardType="numeric"
                    onChangeText={(text) =>
                      handleInputChange("whatsapp_number", text)
                    }
                    onBlur={() => handleInputBlur("whatsapp_number")}
                    maxLength={10}
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
                {formData.whatsapp_number &&
                  formData.whatsapp_number.trim().length !== 10 && (
                    <Text style={{ color: "red" }}>
                      Whatsapp number must be 10 digits
                    </Text>
                  )}
                {!formData.whatsapp_number && fieldTouched.whatsapp_number && (
                  <Text style={{ color: "red" }}>
                    Whatsapp Number is required
                  </Text>
                )}
              </View>
            </View>
            <View style={styles.submitButton}>
              <TouchableOpacity onPress={handleSubmission}>
                <LinearGradient
                  colors={["rgba(3, 53, 125, 1)", "rgba(5, 105, 250, 1)"]}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={styles.inputbox_submit}
                >
                  <Text style={styles.submitText}>Submit</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OnlineAdmissionForm;

const styles = StyleSheet.create({
  container: {
    // top: 53,
  },
  main_content: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  profile: {
    height: 76,
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    gap: 20,
    marginTop: 12,
  },
  imageContainer: {
    height: 70,
    backgroundColor: "#FFE380",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  img: {
    height: 50,
    width: 50,
    margin: 10,
  },
  profileText: {
    fontSize: 25,
    lineHeight: 37.5,
    fontWeight: "600",
    color: "rgba(55, 55, 55, 1)",
  },
  college_details: {
    marginVertical: 20,
    gap: 15,
  },
  college_details_text: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: "500",
    color: " rgba(166, 166, 166, 1)",
  },
  college_details_input: {
    borderWidth: 1,
    borderColor: "rgba(3, 53, 125, 1)",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  heading: {
    borderStyle: "dashed",
    borderBottomWidth: 0.5,
    borderColor: "rgba(67, 83, 84, 1)",
  },
  headingg: {
    marginTop: 20,
    borderStyle: "dashed",
    borderBottomWidth: 0.5,
    borderColor: "rgba(67, 83, 84, 1)",
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 27,
    color: "rgba(4, 106, 241, 1)",
    paddingBottom: 10,
  },
  fields_main: {
    marginTop: 17,
  },
  inputHeading: {
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 27,
    color: "rgba(0, 54, 126, 1)",
    paddingBottom: 10,
  },
  input: {
    paddingRight: "35%",
    position: "relative",
    color: "black",
    width: "80%",
  },
  iconImage: {
    height: 17,
    width: 17,
    right: 3,
  },
  arrowdown: {
    position: "absolute",
    right: 22,
  },
  input_box: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 199, 0, 0.2)",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    gap: 8,
    borderWidth: 0.5,
    borderColor: "rgba(3, 53, 125, 1)",
  },
  submitButton: {
    marginTop: 16,
    marginBottom: 90,
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
  submitText: {
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 18.75,
  },
  dropdownContainer: {
    position: "absolute",
    top: "100%",
    marginTop: 10,
    width: "89%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    zIndex: 1,
    left: 17,
    alignSelf: "center",
  },
  dropdownOption: {
    paddingVertical: 8,
    alignSelf: "center",
    width: "100%",
    alignItems: "center",
  },
});
