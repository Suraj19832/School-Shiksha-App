import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  Platform,
  Dimensions,
  useColorScheme,
  ActivityIndicator,
} from "react-native";
import DropDownComponent from "../../components/Dropdown";
import React, { useContext, useEffect, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Modal from "react-native-modal";
import { AuthContext } from "../../Utils/context/AuthContext";
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
  EvilIcons,
} from "@expo/vector-icons";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Checkbox from "expo-checkbox";
import {
  getdata,
  objectToFormData,
  postDataWithFormData,
  sendPostData,
} from "../../Helper/Helper";
// import { getstatedata } from "../../Helper/Helper";
import Header from "../../components/Header";
// import { TouchableOpacity } from "react-native-web";

const Registration = ({ navigation }) => {
  const { updateUpiLink } = useContext(AuthContext);
  const { updateOrderid } = useContext(AuthContext);
  const [isChecked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [name, setname] = useState("");
  // const [nameError, setnameError] = useState("");
  const showToast = (message) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      alert(message);
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    mobile: "",
    whatsapp_number: "",
    address: "",
    police_station: "",
    pincode: "",
    aadhar_number: "",
    nationality: "",
    religion: "",
    district_id: "",
    password: "",
  });
  // console.log(formData.fatherName)
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formValid, setFormValid] = useState(false);

  const [formErrors, setFormErrors] = useState({});
  const [fieldTouched, setFieldTouched] = useState({});
  const [customErrorMessage, setCustomErrorMessage] = useState("");

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

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleInputBlur = async (key) => {
    setFieldTouched({ ...fieldTouched, [key]: true });
    validateForm();
  };
  const [refercode, setrefercode] = useState("");
  const handleRegistration = async () => {
    if (formData.name && formData.mobile) {
      setLoading(true);
    }
    const formsData = new FormData();
    if (
      formData.name &&
      formData.mobile &&
      formData.pincode &&
      formData.police_station &&
      formData.address &&
      formData.whatsapp_number
    ) {
      formsData.append("name", formData.name);
      formsData.append("father_name", formData.fatherName);
      formsData.append("email", email);
      formsData.append("mobile", formData.mobile);
      formsData.append("date_of_birth", userDetails.date_of_birth);
      // formsData.append("aadhar_number", formData.aadhar_number);
      formsData.append("gender", genderData);
      formsData.append("pincode", formData.pincode);
      formsData.append("police_station", formData.police_station);
      formsData.append("district_id", districtId);
      formsData.append("address", formData.address);
      formsData.append("whatsapp_number", formData.whatsapp_number);
      formsData.append("password", password);
      formsData.append("referral_code", formData.referral_code);
      formsData.append("nationality", formData.nationality);
      formsData.append("religion", formData.religion);
      // formsData.append("block", blockId);
      formsData.append("class_id", classid);
      formsData.append("plan_id", planid);
      formsData.append("referral_code", refercode);
      console.log("6565655", formsData);
      await sendPostData("/register", formsData)
        .then((res) => {
          setLoading(false);
          console.log(
            "-0-0-0-0-0-0-0-0-0-0-0-0-0-00-0-0--0-0-0-0-0-00-0-",
            res
          );
          if (res?.message === "Success") {
            updateUpiLink(res?.data?.upi_link);
            console.log(
              "djdjdddddddddddddd-----------------------=============-=",
              res?.data?.order_id
            );
            updateOrderid(res?.data?.order_id);

            navigation.navigate("QR_Screen");
          }
          if (res?.message === "Student registration successful") {
            console.log("=================grpgp=gppg", res?.message);
            showToast("Registration Successfull");
            console.log("11111111", res?.status);
            navigation.navigate("Login");
          }
          if (res?.message === "Validation errors") {
            showToast("User Exists");
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err, "--err");
        });
    } else {
      console.log("Registration failed: Required fields are missing");
      // Alert.alert("Alert", "Please Fill up All Fields");
      showToast("Please fill up all blacks");
    }
  };
  // email validation
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

  const handleEmailChange = (text) => {
    setEmail(text);
    if (text.trim()) {
      setEmailError("");
    }
  };

  // password validation

  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validatePassword = () => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;

    if (!password.trim()) {
      setPasswordError("Password is required");
    } else if (!passwordPattern.test(password)) {
      setPasswordError(
        "Password must contain a capital letter, a lowercase letter, a special symbol, and have a minimum length of 5 characters"
      );
    } else {
      setPasswordError("");
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    if (text.trim()) {
      setPasswordError("");
    }
  };

  // date picker
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

  const handleConfirm = (date) => {
    setUserDetails({
      ...userDetails,
      date_of_birth: date.toISOString().split("T")[0],
    });
    hideDatePicker();
  };
  // Date picker end

  // Gender selection
  const [genderData, setGenderData] = useState("");

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const selectGender = (selectedGender) => {
    setGenderData(selectedGender);
    toggleModal();
  };
  const [selectedCountry, setSelectedCountry] = useState("Select Country");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleInputChange1 = (text) => {
    setSelectedCountry(text);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country.country);
    setIsDropdownVisible(false);
  };
  const isFormValid = () => {
    // Check if any field has an error
    for (const key in formErrors) {
      if (formErrors[key]) {
        return false;
      }
    }
    // Check if all required fields are filled
    for (const key in formData) {
      if (!formData[key] && fieldTouched[key]) {
        return false;
      }
    }
    // Check if email and password are valid
    if (emailError || passwordError) {
      return false;
    }
    // Return true if the form is valid
    return true;
  };
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpenstate, setDropdownOpenstate] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedOptionstate, setSelectedOptionstate] = useState(null);
  const [inputValuestate, setInputValuestate] = useState("");
  const [stateData, setStateData] = useState({});
  const [districtData, setDistrictData] = useState({});
  const [blockdata, setBlockData] = useState({});
  const [stateInfo, setStateInfo] = useState();
  const [districtId, setDistrictId] = useState();
  const [blockId, setBlockId] = useState();
  const toggleDropdownpolice = () => {
    setDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) {
      setDropdownOpenplan(false);
      setDropdownOpengender(false);
      setDropdownOpenblock(false);
      setDropdownOpenstate(false);
      setDropdownOpenPayment(false);
      setDropdownOpenclass(false);
    }
  };
  const toggleDropdownstate = () => {
    setDropdownOpenstate(!isDropdownOpenstate);
    if (!isDropdownOpenstate) {
      setDropdownOpenplan(false);
      setDropdownOpengender(false);
      setDropdownOpenblock(false);
      setDropdownOpen(false);
      setDropdownOpenPayment(false);
      setDropdownOpenclass(false);
    }
  };

  const handleSelectOption = (districtName, id) => {
    setSelectedOption(districtName);
    setInputValue(districtName);
    setDistrictId(id);
    setInputValueblock("");
    setDropdownOpen(false);
  };
  const handleSelectOptionstate = (stateName, stateId) => {
    setSelectedOptionstate(stateName);
    setInputValuestate(stateName);
    setStateInfo(stateId);
    setInputValue("");
    setInputValueblock("");
    setDistrictId();
    setDropdownOpenstate(false);
  };
  console.log("[][]", stateInfo);
  const handleInputChangedistrict = (text) => {
    setInputValue(text);
    setSelectedOption(null); // Clear selected option when user edits input
  };

  const handleInputChangestate = (text) => {
    setInputValuestate(text);
    setDropdownOpenstate(null); // Clear selected option when user edits input
  };

  const [isDropdownOpenplan, setDropdownOpenplan] = useState(false);
  const [selectedOptionplan, setSelectedOptionplan] = useState(null);
  const [inputValueplan, setInputValueplan] = useState("");
  // for block
  const [isDropdownOpenblock, setDropdownOpenblock] = useState(false);
  const [selectedOptionblock, setSelectedOptionblock] = useState(null);
  const [inputValueblock, setInputValueblock] = useState("");

  // for class

  const [isDropdownOpenclass, setDropdownOpenclass] = useState(false);
  const [selectedOptionclass, setSelectedOptionclass] = useState(null);
  const [inputValueclass, setInputValueclass] = useState("");

  // for gender

  const [isDropdownOpengender, setDropdownOpengender] = useState(false);
  const [selectedOptiongender, setSelectedOptiongender] = useState(null);
  const [inputValuegender, setInputValuegender] = useState("");

  // For payemnt

  const [isDropdownOpenPayment, setDropdownOpenPayment] = useState(false);
  const [selectedOptionPayment, setSelectedOptionPayment] = useState(null);
  const [inputValuePayment, setInputValuePayment] = useState("");

  // handle toggle for payment

  const toggleDropdownPayment = () => {
    setDropdownOpenPayment(!isDropdownOpenPayment);
    if (!isDropdownOpenPayment) {
      setDropdownOpenplan(false);
      setDropdownOpenstate(false);
      setDropdownOpenblock(false);
      setDropdownOpen(false);
      setDropdownOpengender(false);
      setDropdownOpenclass(false);
    }
  };

  const handleSelectOptionPayment = (option) => {
    setSelectedOptionPayment(option);
    setInputValuePayment(option);
    setDropdownOpenPayment(false);
  };

  const handleInputChangePayment = (text) => {
    setInputValuePayment(text);
    setDropdownOpenPayment(null); // Clear selected option when user edits input
  };

  //handle togle for gender

  const toggleDropdowngender = () => {
    setDropdownOpengender(!isDropdownOpengender);
    if (!isDropdownOpengender) {
      setDropdownOpenplan(false);
      setDropdownOpenstate(false);
      setDropdownOpenblock(false);
      setDropdownOpen(false);
      setDropdownOpenPayment(false);
      setDropdownOpenclass(false);
    }
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

  //handle togle for class
  const toggleDropdownclass = () => {
    setDropdownOpenclass(!isDropdownOpenclass);
    if (!isDropdownOpenclass) {
      setDropdownOpengender(false);
      setDropdownOpenstate(false);
      setDropdownOpenblock(false);
      setDropdownOpen(false);
      setDropdownOpenPayment(false);
      setDropdownOpenplan(false);
    }
  };
  const [classid, setclassid] = useState("");
  const handleSelectOptionclass = (option, classidd) => {
    setSelectedOptionclass(option);
    setInputValueclass(option);
    setDropdownOpenclass(false);
    setclassid(classidd);
  };

  const handleInputChangeclass = (text) => {
    setInputValueclass(text);
    setDropdownOpenclass(null); // Clear selected option when user edits input
  };

  // handle toggle of plan
  const toggleDropdownplan = () => {
    setDropdownOpenplan(!isDropdownOpenplan);
    if (!isDropdownOpenplan) {
      setDropdownOpengender(false);
      setDropdownOpenstate(false);
      setDropdownOpenblock(false);
      setDropdownOpen(false);
      setDropdownOpenPayment(false);
      setDropdownOpenclass(false);
    }
  };
  const [planid, setplanid] = useState("");
  const handleSelectOptionplan = (option, plannnid) => {
    setSelectedOptionplan(option);
    setInputValueplan(option);
    setDropdownOpenplan(false);
    setplanid(plannnid);
    console.log("uiyuiyiyuiuyiuykkhjkhjkkjkjk", planid);
  };

  const handleInputChangeplan = (text) => {
    setInputValueplan(text);
    setDropdownOpenplan(null); // Clear selected option when user edits input
  };
  const handleInputChangerefer = (text) => {
    setrefercode(text);
    console.log(refercode);
    // setDropdownOpenplan(null); // Clear selected option when user edits input
  };
  const toggleDropdownblock = () => {
    setDropdownOpenblock(!isDropdownOpenblock);
    if (!isDropdownOpenblock) {
      setDropdownOpengender(false);
      setDropdownOpenstate(false);
      setDropdownOpenplan(false);
      setDropdownOpen(false);
      setDropdownOpenPayment(false);
      setDropdownOpenclass(false);
    }
  };

  const handleSelectOptionblock = (option, id) => {
    setSelectedOptionblock(option);
    setInputValueblock(option);
    setBlockId(id);
    setDropdownOpenblock(false);
  };

  const handleInputChangeblock = (text) => {
    setInputValueblock(text);
    setDropdownOpenblock(null); // Clear selected option when user edits input
  };

  // get state data here

  useEffect(() => {
    // Define the URL you want to fetch data from
    const apiUrl = "master/state";

    // Call the getstatedata function with the API URL
    getdata(apiUrl)
      .then((res) => {
        // console.log('Response from API:', res.data);
        setStateData(res?.data);
        // Do something with the response data, e.g., update component state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("00", stateData);
  useEffect(() => {
    // Define the object data you want to convert to FormData and send
    const postData = {
      state_id: stateInfo,
    };

    // Convert object data to FormData
    const formData = objectToFormData(postData);

    // Call the postDataWithFormData function with the API URL and FormData
    postDataWithFormData("master/district", formData)
      .then((res) => {
        console.log("Response from API for district:", res?.data);
        setDistrictData(res?.data);
        // Do something with the response data, if needed
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  }, [stateInfo]); // Run once on component mount

  useEffect(() => {
    //post request for block

    const postData = {
      district_id: districtId,
    };

    // Convert object data to FormData
    const formDatablock = objectToFormData(postData);

    // Call the postDataWithFormData function with the API URL and FormData
    postDataWithFormData("master/block", formDatablock)
      .then((res) => {
        console.log("Response from API for block:", res?.data);
        setBlockData(res?.data);
        // Do something with the response data, if needed
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  }, [districtId]);
  const [plan, setplan] = useState("");

  // for plan
  useEffect(() => {
    // Define the URL you want to fetch data from
    const apiUrl = "master/plan";

    // Call the getstatedata function with the API URL
    getdata(apiUrl)
      .then((res) => {
        console.log("Response from API:", res?.message);
        const planNames = res.data.map((item) => item);
        setplan(planNames);
        // console.log("Plan Names:", planNames);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const colorScheme = useColorScheme();
  const statusBarColor = colorScheme === "dark" ? "black" : "white";

  // console.log("----------------------------------------------------------------------------------------")
  // get data for class
  const [classname, setclassname] = useState("");
  useEffect(() => {
    // Define the URL you want to fetch data from
    const apiUrl = "master/class";

    // Call the getstatedata function with the API URL
    getdata(apiUrl)
      .then((res) => {
        // console.log("Response from API of classs ----------------------------->:", res?.data );
        const classeshere = res.data.map((item) => item);

        setclassname(classeshere);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // console.log("88", blockdata);

  console.log("789", formData);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <StatusBar
          animated={true}
          backgroundColor={statusBarColor}
          barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
        />
        <View style={styles.mainView}>
          <View style={styles.innerView}>
            <FontAwesome5
              name="arrow-left"
              size={24}
              color="rgba(0, 54, 126, 1)"
              style={styles.arrowleft}
              onPress={() => navigation.navigate("Login")}
            />
            <View style={styles.ImageView}>
              <Image
                style={styles.image}
                source={require("../../assets/img/registration.png")}
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
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Full Name
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Feather name="user" size={16} color="rgba(0, 54, 126, 1)" />
                  <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={formData.name}
                    onChangeText={(text) => handleInputChange("name", text)}
                    onBlur={() => handleInputBlur("name")}
                  />
                </View>
                {formErrors.name && fieldTouched.name && (
                  <Text style={{ color: "red" }}>{formErrors.name}</Text>
                )}
                {!formErrors.name && !formData.name && fieldTouched.name && (
                  <Text style={{ color: "red" }}>Full Name is required</Text>
                )}
              </View>

              {/* Father name  */}

              <View style={styles.inputbox_main_container}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Father's Name
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
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
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Mobile Number
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
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
                    value={formData.mobile}
                    onChangeText={(text) => handleInputChange("mobile", text)}
                    onBlur={() => handleInputBlur("mobile")}
                    maxLength={10}
                  />
                </View>
                {formErrors.mobile && fieldTouched.mobile && (
                  <Text style={{ color: "red" }}>Mobile Number required</Text>
                )}
                {!formErrors.mobile &&
                  formData.mobile &&
                  formData.mobile.trim().length !== 10 && (
                    <Text style={{ color: "red" }}>
                      Mobile number must be 10 digits
                    </Text>
                  )}
              </View>
              {/* whatsapp number  */}
              <View style={styles.inputbox_main_container}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Whatsapp Number
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
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
                    placeholder="Phone"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={formData.whatsapp_number}
                    onChangeText={(text) =>
                      handleInputChange("whatsapp_number", text)
                    }
                    onBlur={() => handleInputBlur("whatsapp_number")}
                    maxLength={10}
                  />
                </View>
                {formErrors.whatsapp_number && fieldTouched.whatsapp_number && (
                  <Text style={{ color: "red" }}>Whatsapp number Required</Text>
                )}
                {!formErrors.whatsapp_number &&
                  formData.whatsapp_number &&
                  formData.whatsapp_number.trim().length !== 10 && (
                    <Text style={{ color: "red" }}>
                      Mobile number must be 10 digits
                    </Text>
                  )}
              </View>

              {/* email id  */}
              <View style={styles.inputbox_main_container}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Email Id
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
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
                {emailError ? (
                  <Text style={{ color: "red" }}>{emailError}</Text>
                ) : null}
              </View>

              {/* date of birth  */}

              {/* <View style={styles.inputbox_main_container}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    D.O.B
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Image
                    style={styles.iconImage}
                    source={require("../../assets/icons/calendar.png")}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Date of Birth"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={userDetails.date_of_birth}
                    onChangeText={(text) =>
                      setUserDetails({ ...userDetails, date_of_birth: text })
                    }
                    onFocus={showDatePicker} // Show date picker when input field is focused
                    editable={false} // Make the input field editable
                  />
                </View>

                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </View> */}
              <View style={styles.inputbox_main_container}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    D.O.B
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
                </View>
                <TouchableOpacity
                  style={styles.inputbox_container}
                  onPress={showDatePicker}
                >
                  <View>
                    <Image
                      style={styles.iconImage}
                      source={require("../../assets/icons/calendar.png")}
                    />
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder="YY/MM/DD"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={userDetails.date_of_birth}
                    onChangeText={(text) =>
                      setUserDetails({ ...userDetails, date_of_birth: text })
                    }
                    onFocus={showDatePicker} // Show date picker when input field is focused
                    editable={false} // Make the input field editable
                  />
                </TouchableOpacity>

                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </View>

              {/* class  */}

              <View style={styles.inputbox_main_container}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Class
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
                </View>
                <View
                  style={[
                    styles.inputbox_container,
                    { justifyContent: "space-between" },
                  ]}
                >
                  <TouchableOpacity onPress={toggleDropdownclass}>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <Image
                        style={styles.iconImage}
                        source={require("../../assets/icons/presentation.png")}
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Select"
                        placeholderTextColor="rgba(166, 166, 166, 1)"
                        value={inputValueclass}
                        onChangeText={handleInputChangeclass}
                        onBlur={() => handleSelectOptionclass(inputValueclass)}
                        editable={false} // Allow editing only when dropdown is closed
                      />
                      <AntDesign
                        name="caretdown"
                        size={16}
                        color="rgba(0, 54, 126, 1)"
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                {isDropdownOpenclass && (
                  // this is old dropdown
                  // <View style={styles.dropdownContainer}>
                  //   <TouchableOpacity
                  //     style={styles.dropdownOption}
                  //     onPress={() => handleSelectOptionclass("1")}
                  //   >
                  //     <View
                  //       style={{
                  //         width: Dimensions.get("window").width * 0.7,
                  //         alignItems: "center",
                  //       }}
                  //     >
                  //       <Text>1</Text>
                  //     </View>
                  //   </TouchableOpacity>

                  //   <TouchableOpacity
                  //     style={styles.dropdownOption}
                  //     onPress={() => handleSelectOptionclass("1")}
                  //   >
                  //     <View
                  //       style={{
                  //         width: Dimensions.get("window").width * 0.7,
                  //         alignItems: "center",
                  //       }}
                  //     >
                  //       <Text>1</Text>
                  //     </View>
                  //   </TouchableOpacity>
                  //   <TouchableOpacity
                  //     style={styles.dropdownOption}
                  //     onPress={() => handleSelectOptionclass("1")}
                  //   >
                  //     <View
                  //       style={{
                  //         width: Dimensions.get("window").width * 0.7,
                  //         alignItems: "center",
                  //       }}
                  //     >
                  //       <Text>1</Text>
                  //     </View>
                  //   </TouchableOpacity>
                  //   <TouchableOpacity
                  //     style={styles.dropdownOption}
                  //     onPress={() => handleSelectOptionclass("1")}
                  //   >
                  //     <View
                  //       style={{
                  //         width: Dimensions.get("window").width * 0.7,
                  //         alignItems: "center",
                  //       }}
                  //     >
                  //       <Text>1</Text>
                  //     </View>
                  //   </TouchableOpacity>

                  //   <TouchableOpacity
                  //     style={styles.dropdownOption}
                  //     onPress={() => handleSelectOptionclass("2")}
                  //   >
                  //     <View
                  //       style={{
                  //         width: Dimensions.get("window").width * 0.7,
                  //         alignItems: "center",
                  //       }}
                  //     >
                  //       <Text>2</Text>
                  //     </View>
                  //   </TouchableOpacity>
                  //   <TouchableOpacity
                  //     style={styles.dropdownOption}
                  //     onPress={() => handleSelectOptionclass("3")}
                  //   >
                  //     <View
                  //       style={{
                  //         width: Dimensions.get("window").width * 0.7,
                  //         alignItems: "center",
                  //       }}
                  //     >
                  //       <Text>3</Text>
                  //     </View>
                  //   </TouchableOpacity>
                  // </View>

                  <View style={styles.dropdownContainer}>
                    <ScrollView
                      nestedScrollEnabled={true}
                      style={{ maxHeight: 100 }}
                    >
                      {/* <TouchableOpacity
          style={styles.dropdownOption}
          onPress={() => handleSelectOptionclass("1")}
        >
          <View
            style={{
              width: Dimensions.get("window").width * 0.7,
              alignItems: "center",
            }}
          >
            <Text>1</Text>
          </View>
        </TouchableOpacity> */}

                      {classname.map((option, index) => (
                        <TouchableOpacity
                          key={index}
                          style={styles.dropdownOption}
                          onPress={() =>
                            handleSelectOptionclass(option?.name, option?.id)
                          }
                        >
                          <View
                            style={{
                              width: Dimensions.get("window").width * 0.7,
                              alignItems: "center",
                            }}
                          >
                            <Text>{option?.name}</Text>
                          </View>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                )}
              </View>

              {/* gender  */}
              {/* <View style={styles.inputbox_main_container}>
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
                      onChangeText={(text) => handleInputChange("gender", text)}
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
                    <Text style={{ color: "red" }}>
                      Please select your gender{" "}
                    </Text>
                  )}
              </View> */}

              <View style={styles.inputbox_main_container}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Gender
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
                </View>
                <View
                  style={[
                    styles.inputbox_container,
                    { justifyContent: "space-between" },
                  ]}
                >
                  <TouchableOpacity onPress={toggleDropdowngender}>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <Image
                        style={styles.iconImage}
                        source={require("../../assets/icons/gender (1).png")}
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Select"
                        placeholderTextColor="rgba(166, 166, 166, 1)"
                        value={inputValuegender}
                        onChangeText={handleInputChangegender}
                        onBlur={() =>
                          handleSelectOptiongender(inputValuegender)
                        }
                        editable={false} // Allow editing only when dropdown is closed
                      />
                      <AntDesign
                        name="caretdown"
                        size={16}
                        color="rgba(0, 54, 126, 1)"
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                {isDropdownOpengender && (
                  <View style={styles.dropdownContainer}>
                    <TouchableOpacity
                      style={styles.dropdownOption}
                      onPress={() => handleSelectOptiongender("Male")}
                    >
                      <Text>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.dropdownOption}
                      onPress={() => handleSelectOptiongender("Female")}
                    >
                      <Text>Female</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              {/* Nationality */}
              <View style={styles.inputbox_main_container}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Nationality
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
                </View>
                <View style={styles.inputbox_container}>
                  {/* <MaterialCommunityIcons
                    name="home-map-marker"
                    size={16}
                    color="rgba(0, 54, 126, 1)"
                  /> */}
                  <Image
                    source={require("../../assets/icons/united-nations.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Select"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={formData.nationality}
                    onChangeText={(text) =>
                      handleInputChange("nationality", text)
                    }
                    onBlur={() => handleInputBlur("nationality")}
                  />
                </View>
                {!formErrors.nationality &&
                  !formData.nationality &&
                  fieldTouched.nationality && (
                    <Text style={{ color: "red" }}>
                      Please enter Nationality{" "}
                    </Text>
                  )}
              </View>
              {/* Religion */}
              <View style={styles.inputbox_main_container}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Religion
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Image
                    source={require("../../assets/icons/religion.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Select"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={formData.religion}
                    onChangeText={(text) => handleInputChange("religion", text)}
                    onBlur={() => handleInputBlur("religion")}
                  />
                </View>
                {formErrors.religion &&
                  !formData.religion &&
                  fieldTouched.religion && (
                    <Text style={{ color: "red" }}>Please enter Religion </Text>
                  )}
              </View>
              {/* full address  */}
              <View style={styles.inputbox_main_container}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Full Address
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Image
                    source={require("../../assets/icons/home (1).png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your full address"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={formData.address}
                    onChangeText={(text) => handleInputChange("address", text)}
                    onBlur={() => handleInputBlur("address")}
                  />
                </View>
                {formErrors.address &&
                  !formData.address &&
                  fieldTouched.address && (
                    <Text style={{ color: "red" }}>
                      Please enter full address{" "}
                    </Text>
                  )}
              </View>

              {/* state  */}
              <View style={styles.inputbox_main_container}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    State
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
                </View>
                <View
                  style={[
                    styles.inputbox_container,
                    { justifyContent: "space-between" },
                  ]}
                >
                  <TouchableOpacity onPress={toggleDropdownstate}>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <Image
                        style={styles.iconImage}
                        source={require("../../assets/icons/map.png")}
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Choose Option"
                        placeholderTextColor="rgba(166, 166, 166, 1)"
                        value={inputValuestate}
                        onChangeText={handleInputChangestate}
                        onBlur={() => handleSelectOptionstate(inputValuestate)}
                        editable={false} // Allow editing only when dropdown is closed
                      />
                      <AntDesign
                        name="caretdown"
                        size={16}
                        color="rgba(0, 54, 126, 1)"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
                {/* Dropdown menu */}
                {isDropdownOpenstate && (
                  <View style={styles.dropdownContainer}>
                    {stateData.map((state, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          style={styles.dropdownOption}
                          onPress={() =>
                            handleSelectOptionstate(state.name, state.id)
                          }
                        >
                          <Text>{state.name}</Text>
                        </TouchableOpacity>
                      );
                    })}

                    {/* Add more options as needed */}
                  </View>
                )}
              </View>

              {/* Police  */}
              <View style={styles.inputbox_main_container}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Police Station
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Image
                    style={styles.iconImage}
                    source={require("../../assets/icons/police-station.png")}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Police Station"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={formData.police_station}
                    onChangeText={(text) =>
                      handleInputChange("police_station", text)
                    }
                    onBlur={() => handleInputBlur("police_station")}
                    // editable={false}
                  />
                </View>
                {formErrors.police_station &&
                  !formData.police_station &&
                  fieldTouched.police_station && (
                    <Text style={{ color: "red" }}>
                      Please enter your Police Station
                    </Text>
                  )}
              </View>
              {/* District  */}
              {/* <View style={styles.inputbox_main_container}>
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
                      value={formData.police_station}
                      onChangeText={(text) =>
                        handleInputChange("police_station", text)
                      }
                      onBlur={() => handleInputBlur("police_station")}
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
                {formErrors.police_station &&
                  !formData.police_station &&
                  fieldTouched.police_station && (
                    <Text style={{ color: "red" }}>
                      Please enter your Police Station
                    </Text>
                  )}
              </View> */}

              <View style={styles.inputbox_main_container}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    District
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
                </View>
                <View
                  style={[
                    styles.inputbox_container,
                    { justifyContent: "space-between" },
                  ]}
                >
                  <TouchableOpacity onPress={toggleDropdownpolice}>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <Image
                        style={styles.iconImage}
                        source={require("../../assets/icons/district (1).png")}
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Choose Option"
                        placeholderTextColor="rgba(166, 166, 166, 1)"
                        value={inputValue}
                        onChangeText={(text) =>
                          handleInputChangedistrict("district_id", text)
                        }
                        onBlur={() => handleSelectOption(inputValue)}
                        editable={false} // Allow editing only when dropdown is closed
                      />
                      <AntDesign
                        name="caretdown"
                        size={16}
                        color="rgba(0, 54, 126, 1)"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <View style={styles.dropdownContainer}>
                    {districtData.map((district, index) => {
                      return (
                        <TouchableOpacity
                          style={styles.dropdownOption}
                          key={index}
                          onPress={() =>
                            handleSelectOption(district?.name, district?.id)
                          }
                        >
                          <Text>{district?.name}</Text>
                        </TouchableOpacity>
                      );
                    })}

                    {/* Add more options as needed */}
                  </View>
                )}
              </View>
              {/* Block */}
              <View style={styles.inputbox_main_container}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Block
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
                </View>
                <View
                  style={[
                    styles.inputbox_container,
                    { justifyContent: "space-between" },
                  ]}
                >
                  <TouchableOpacity onPress={toggleDropdownblock}>
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
                        value={inputValueblock}
                        onChangeText={handleInputChangeblock}
                        onBlur={() => handleSelectOptionblock(inputValueblock)}
                        editable={false} // Allow editing only when dropdown is closed
                      />
                      <AntDesign
                        name="caretdown"
                        size={16}
                        color="rgba(0, 54, 126, 1)"
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                {isDropdownOpenblock && (
                  <View style={styles.dropdownContainer}>
                    {blockdata.map((block, index) => {
                      return (
                        <TouchableOpacity
                          style={styles.dropdownOption}
                          key={index}
                          onPress={() =>
                            handleSelectOptionblock(block?.name, block?.id)
                          }
                        >
                          <Text>{block?.name}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                )}
              </View>
              {/* Aadhar  */}
              {/* <View style={styles.inputbox_main_container}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Aadhar Number
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Image
                    style={styles.iconImage}
                    source={require("../../assets/icons/identity.png")}
                  />
                  <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Enter your Aadhar number"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={formData.aadhar_number}
                    onChangeText={(text) =>
                      handleInputChange("aadhar_number", text)
                    }
                    onBlur={() => handleInputBlur("aadhar_number")}
                    maxLength={12}
                  />
                </View>
                {formErrors.aadhar_number && fieldTouched.aadhar_number && (
                  <Text style={{ color: "red" }}>Aadhar Number required</Text>
                )}
                {!formErrors.aadhar_number &&
                  formData.aadhar_number &&
                  formData.aadhar_number.trim().length !== 12 && (
                    <Text style={{ color: "red" }}>
                      Aadhar number must be 12 digits
                    </Text>
                  )}
              </View> */}
              {/* pincode  */}
              <View style={styles.inputbox_main_container}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Pincode
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Image
                    style={styles.iconImage}
                    source={require("../../assets/icons/pin-code.png")}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Pin Code"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={formData.pincode}
                    onChangeText={(text) => handleInputChange("pincode", text)}
                    onBlur={() => handleInputBlur("pincode")}
                    keyboardType="numeric"
                  />
                </View>
                {formErrors.pincode &&
                  !formData.pincode &&
                  fieldTouched.pincode && (
                    <Text style={{ color: "red" }}>
                      Please enter your pincode
                    </Text>
                  )}
              </View>
              {/* member plan  */}
              <View style={styles.inputbox_main_container}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Member Plan
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
                </View>
                <View
                  style={[
                    styles.inputbox_container,
                    { justifyContent: "space-between" },
                  ]}
                >
                  <TouchableOpacity onPress={toggleDropdownplan}>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <Image
                        style={styles.iconImage}
                        source={require("../../assets/icons/premium.png")}
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Select"
                        placeholderTextColor="rgba(166, 166, 166, 1)"
                        value={inputValueplan}
                        onChangeText={handleInputChangeplan}
                        onBlur={() => handleSelectOptionstate(inputValueplan)}
                        editable={false} // Allow editing only when dropdown is closed
                      />
                      <AntDesign
                        name="caretdown"
                        size={16}
                        color="rgba(0, 54, 126, 1)"
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                {isDropdownOpenplan && (
                  <View style={styles.dropdownContainer}>
                    {plan.map((option, index) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.dropdownOption}
                        onPress={() =>
                          handleSelectOptionplan(option?.plan_name, option?.id)
                        }
                      >
                        <Text>{option?.plan_name}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
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
                  <Image
                    style={styles.iconImage}
                    source={require("../../assets/icons/referral-code.png")}
                  />
                  {/* <TextInput
                    style={[styles.input, {}]}
                    placeholder="Enter Your Referral Code (Optional)"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    
                  /> */}
                  <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={refercode}
                    onChangeText={handleInputChangerefer}
                    onBlur={() => handleInputBlur("referral_code")}
                  />
                </View>
              </View>
              {/* Payment fee  */}
              <View style={styles.inputbox_main_container}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Payment/Free
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
                </View>
                <View
                  style={[
                    styles.inputbox_container,
                    { justifyContent: "space-between" },
                  ]}
                >
                  <TouchableOpacity onPress={toggleDropdownPayment}>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <Image
                        style={styles.iconImage}
                        source={require("../../assets/icons/premium.png")}
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Select"
                        placeholderTextColor="rgba(166, 166, 166, 1)"
                        value={inputValuePayment}
                        onChangeText={handleInputChangePayment}
                        onBlur={() =>
                          handleSelectOptionPayment(inputValuePayment)
                        }
                        editable={false} // Allow editing only when dropdown is closed
                      />
                      <AntDesign
                        name="caretdown"
                        size={16}
                        color="rgba(0, 54, 126, 1)"
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                {isDropdownOpenPayment && (
                  <View style={styles.dropdownContainer}>
                    <TouchableOpacity
                      style={styles.dropdownOption}
                      onPress={() => handleSelectOptionPayment("Free Plan")}
                    >
                      <Text>Free Plan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.dropdownOption}
                      onPress={() => handleSelectOptionPayment("Payment")}
                    >
                      <Text>Payment</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.dropdownOption} onPress={() => handleSelectOptionPayment("3")}>
                                          <Text>3</Text>
                                      </TouchableOpacity> */}
                  </View>
                )}
              </View>

              {/* password  */}
              <View style={styles.inputbox_main_container}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Password
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}>*</Text>
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
                    <Image
                      style={styles.iconImage}
                      source={require("../../assets/icons/padlock.png")}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Password"
                      placeholderTextColor="rgba(166, 166, 166, 1)"
                      secureTextEntry={!passwordVisible}
                      value={password}
                      onChangeText={handlePasswordChange}
                      onBlur={validatePassword}
                    />
                  </View>
                  <View>
                    <MaterialIcons
                      name={passwordVisible ? "visibility" : "visibility-off"}
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                      onPress={togglePasswordVisibility}
                    />
                  </View>
                </View>
                {passwordError ? (
                  <Text style={{ color: "red" }}>{passwordError}</Text>
                ) : null}
              </View>
            </View>

            <View style={{ gap: 7 }}>
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
                <TouchableOpacity
                  onPress={handleRegistration}
                  disabled={!isFormValid()}
                >
                  <LinearGradient
                    colors={[
                      !isFormValid() ? "gray" : "#03357D",
                      !isFormValid() ? "gray" : "#03357D",
                    ]}
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
                      {loading ? (
                        <ActivityIndicator size={"small"} color={"white"} />
                      ) : (
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "500",
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center",
                            color: "white",
                          }}
                        >
                          Sign Up
                        </Text>
                      )}
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
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
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text
                    style={{
                      color: "#03357D",
                      fontWeight: "700",
                      fontSize: 18,
                    }}
                  >
                    Sign in
                  </Text>
                </TouchableOpacity>
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
  container: {
    // top:53
  },
  mainView: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "auto",
  },
  innerView: {
    width: "90%",
    height: "auto",
    marginBottom: 20,
    marginTop: 10,
  },
  ImageView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 192,
    width: 220,
  },

  CreateAccountText: {
    fontSize: 30,
    fontWeight: "600",
  },
  inputbox_container: {
    flexDirection: "row",
    // textAlign: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#03357D",
    padding: 12,
    paddingHorizontal: 20,
    backgroundColor: "#FDF1DD",
    borderRadius: 30,
    gap: 8,
  },
  lockIcon: {
    top: 1.5,
    left: -6,
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
    justifyContent: "center",
    gap: 8,
    marginBottom: 15,
    marginTop: 25,
  },
  buttonboxWrapper: {
    borderRadius: 30, // Retain the border radius from the buttonbox style
    overflow: "hidden", // Clip the linear gradient to the border radius
  },
  input: {
    width: "82%",
    color: "black",
    // backgroundColor: "red",
  },
  iconImage: {
    height: 17,
    width: 17,
    // right: 3,
  },

  modalContainer: {
    flex: 1,
    backgroundColor: "#FDF1DD",
    alignItems: "center",
    width: 200,
    height: 80,
    justifyContent: "center",
    position: "absolute",
    left: "20%",
    borderRadius: 16,
  },

  modalText: {
    fontSize: 16,
    paddingVertical: 10,
  },

  // dropdownContainer: {
  //   position: "absolute",
  //   top: "100%",
  //   // left: 0,
  //   marginTop: 10,
  //   width: "89%",
  //   backgroundColor: "#fff",
  //   borderWidth: 1,
  //   borderColor: "#ccc",
  //   borderRadius: 4,
  //   padding: 8,
  //   zIndex: 1,
  //   left: 17,

  //   alignSelf: "center",
  //   // justifyContent:'center'
  // },

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
    width: "100%",
    alignItems: "center",
  },
});
