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
  ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import { TextInput } from "react-native";
import { FontAwesome5, Fontisto, Feather, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { postDataWithFormDataWithToken } from "../../Helper/Helper";
import { AuthContext } from "../../Utils/context/AuthContext";

const CareerGuidanceForm = ({ navigation }) => {
  const { userToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  //for Stream
  const [stream, setStream] = useState("");
  const [isStreamDropDown, setIsStreamDropDown] = useState(false);
  const [selectedOptionStream, setSelectedOptionStream] = useState(null);
  const [inputValueStream, setInputValueStream] = useState("");

  //handle toggle for stream
  const toggleDropdownStream = () => {
    setIsStreamDropDown(!isStreamDropDown);
  };

  const handleSelectOptionStream = (option) => {
    setSelectedOptionStream(option);
    setInputValueStream(option);
    setStream(option);
    setIsStreamDropDown(false);
  };

  const handleInputChangeStream = (text) => {
    setInputValueStream(text);
    setIsStreamDropDown(null); // Clear selected option when user edits input
  };

  const showToast = (message) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      alert(message);
    }
  };

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [percentage10th, setPercentage10th] = useState("");
  const [percentage12th, setPercentage12th] = useState("");
  const [courseName, setCourseName] = useState("");

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      name.trim() === "" ||
      mobile.trim() === "" ||
      email.trim() === "" ||
      guardianName.trim() === "" ||
      whatsappNumber.trim() === "" ||
      percentage10th.trim() === "" ||
      stream.trim() === "" ||
      percentage12th.trim() === "" ||
      courseName.trim() === ""
    ) {
      showToast("Please fill all fields");
    } else if (!emailRegex.test(email)) {
      showToast("Please enter a valid email address");
    } else if (mobile.length !== 10 || !/^\d+$/.test(mobile)) {
      showToast("Mobile number must be a 10-digit number");
    } else {
      const formData = new FormData();
      setLoading(true);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("mobile", mobile);
      formData.append("guardian_name", guardianName);
      formData.append("whatsapp_number", whatsappNumber);
      formData.append("mp_percentage", percentage10th);
      formData.append("hs_percentage", percentage12th);
      formData.append("stream", stream);
      formData.append("interest_course_name", courseName);

      postDataWithFormDataWithToken(
        "/student/carrier-guidance",
        formData,
        userToken
      )
        .then((res) => {
          setLoading(false);
          showToast(res.message);
          navigation.navigate("Dashboard");
        })
        .catch((err) => {
          setLoading(false);
          console.error(err);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Career Guidance Form" navigateTo={navigation?.goBack} />
      <ScrollView>
        <View style={styles.main_content}>
          <View style={styles.profile}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.img}
                source={require("../../assets/splash.png")}
              />
            </View>
            <View style={{ width: "80%" }}>
              <Text style={styles.profileText}>Career Councelling</Text>
            </View>
          </View>
          <View style={styles.personal_details}>
            <View style={styles.input_fields}>
              <View style={styles.fields_main}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.inputHeading}>Name</Text>
                  <Text style={{ color: "red", fontSize: 18 }}> *</Text>
                </View>
                <View style={styles.input_box}>
                  <FontAwesome5
                    name="user"
                    size={14}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                    onChangeText={(text) => setName(text)}
                    value={name}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.inputHeading}>Mobile Number</Text>
                  <Text style={{ color: "red", fontSize: 18 }}> *</Text>
                </View>
                <View style={styles.input_box}>
                  <Feather
                    name="phone-call"
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your mobile number"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                    keyboardType="numeric"
                    maxLength={10}
                    onChangeText={(text) => setMobile(text)}
                    value={mobile}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.inputHeading}>Email</Text>
                  <Text style={{ color: "red", fontSize: 18 }}> *</Text>
                </View>
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
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.inputHeading}>Gurdian Name</Text>
                  <Text style={{ color: "red", fontSize: 18 }}> *</Text>
                </View>
                <View style={styles.input_box}>
                  <FontAwesome5
                    name="user"
                    size={14}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your gurdian name"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                    onChangeText={(text) => setGuardianName(text)}
                    value={guardianName}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.inputHeading}>WhatsApp Number</Text>
                  <Text style={{ color: "red", fontSize: 18 }}> *</Text>
                </View>
                <View style={styles.input_box}>
                  <FontAwesome5
                    name="whatsapp"
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your whatsapp number"
                    keyboardType="numeric"
                    maxLength={10}
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                    onChangeText={(text) => setWhatsappNumber(text)}
                    value={whatsappNumber}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.inputHeading}>
                    Percentage (10th Class)
                  </Text>
                  <Text style={{ color: "red", fontSize: 18 }}> *</Text>
                </View>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/discount.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Percentage"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                    onChangeText={(text) => setPercentage10th(text)}
                    value={percentage10th}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Stream</Text>
                <TouchableOpacity onPress={toggleDropdownStream}>
                  <View style={styles.input_box}>
                    <Image
                      source={require("../../assets/icons/school.png")}
                      style={styles.iconImage}
                    />
                    <Text style={[styles.input, { paddingVertical: 5 }]}>
                      {selectedOptionStream || "Choose option"}
                    </Text>
                    <AntDesign
                      name="caretdown"
                      style={styles.arrowdown}
                      size={15}
                      color="rgba(0, 54, 126, 1)"
                    />
                  </View>
                </TouchableOpacity>
                {isStreamDropDown && (
                  <View style={styles.dropdownContainer}>
                    {["Science", "Commerce", "Arts"].map((option) => (
                      <TouchableOpacity
                        key={option}
                        style={styles.dropdownOption}
                        onPress={() => handleSelectOptionStream(option)}
                      >
                        <Text>{option}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>

              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Percentage Marks (10+2)</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/discount.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Percentage"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                    onChangeText={(text) => setPercentage12th(text)}
                    value={percentage12th}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>
                  Interest for Course Name
                </Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/school.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Course name"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                    onChangeText={(text) => setCourseName(text)}
                    value={courseName}
                  />
                </View>
              </View>
            </View>
            <View style={styles.submitButton}>
              <TouchableOpacity onPress={handleSubmit}>
                <LinearGradient
                  colors={["rgba(3, 53, 125, 1)", "rgba(5, 105, 250, 1)"]}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={styles.inputbox_submit}
                >
                  {loading ? (
                    <ActivityIndicator size={"small"} color={"white"} />
                  ) : (
                    <Text style={styles.submitText}>Submit</Text>
                  )}
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CareerGuidanceForm;

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
    position: "relative",
    color: "black",
    width: "90%",
  },
  errorText: {
    color: "red",
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
