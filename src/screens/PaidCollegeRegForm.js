import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  FontAwesome5,
  SimpleLineIcons,
  Fontisto,
  FontAwesome,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
import Header from "../../components/Header";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";

const PaidCollegeRegForm = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Header
        title="Paid College Admission Form"
        navigateTo={navigation?.goBack}
      />
      <ScrollView>
        <View style={styles.main_content}>
          <View style={styles.profile}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.img}
                source={require("../../assets/img/admission.png")}
              />
            </View>
            <View style={{ width: "80%" }}>
              <Text style={styles.profileText}>
                Paid College Admission Form
              </Text>
            </View>
          </View>
          <View style={styles.college_details}>
            <View>
              <Text style={styles.college_details_text}>College name</Text>
              <TextInput
                style={styles.college_details_input}
                placeholder="Deshvbandhu College"
                placeholderTextColor={"rgba(166, 166, 166, 1)"}
              />
            </View>
            <View>
              <Text style={styles.college_details_text}>Course name</Text>
              <TextInput
                style={styles.college_details_input}
                placeholder="B.C.A"
                placeholderTextColor={"rgba(166, 166, 166, 1)"}
              />
            </View>
          </View>
          <View style={styles.personal_details}>
            <View style={styles.heading}>
              <Text style={styles.text}>Student Personal Details</Text>
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
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Father's Name</Text>
                <View style={styles.input_box}>
                  <FontAwesome5
                    name="user"
                    size={14}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Your Father's name"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Date of Birth</Text>
                <View style={styles.input_box}>
                  <Image
                    style={styles.iconImage}
                    source={require("../../assets/icons/calendar.png")}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Date of Birth"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Aadhar Number</Text>
                <View style={styles.input_box}>
                  <FontAwesome
                    name="id-card-o"
                    size={14.5}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter aadhar number"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Gender</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/gender.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Select"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                  <AntDesign
                    name="caretdown"
                    style={styles.arrowdown}
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                </View>
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
                  />
                </View>
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
                    placeholder="Enter your mobile number"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Nationality</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/united-nations.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Select"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                  <AntDesign
                    name="caretdown"
                    style={styles.arrowdown}
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Religion</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/religion.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Select"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                  <AntDesign
                    name="caretdown"
                    style={styles.arrowdown}
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                </View>
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
                    placeholder="Enter your full address"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
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
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>

              <View style={styles.headingg}>
                <Text style={styles.text}>Family Details</Text>
              </View>

              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Mother's Name</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/female-student.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Your Mother's name"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Father's Name</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/user (1).png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Your Father's Name"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Father's Mobile Number</Text>
                <View style={styles.input_box}>
                  <Feather
                    name="phone-call"
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter mobile number"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Parents Occupation</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/businessman.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Select"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                  <AntDesign
                    name="caretdown"
                    style={styles.arrowdown}
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Family Income</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/receive (1).png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Amount"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Number of Member</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/team.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter the number of member"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              <View style={styles.headingg}>
                <Text style={styles.text}>Education Details</Text>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Last Qualification</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/qualification.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Select"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                  <AntDesign
                    name="caretdown"
                    style={styles.arrowdown}
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>H.S Pass Out Year</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/school.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Select"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                  <AntDesign
                    name="caretdown"
                    style={styles.arrowdown}
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>H.S Roll Number</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/number-blocks.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Roll Number"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Percentage</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/discount.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Percentage"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Total Number</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/exam-results.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Marks"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>

              <View style={styles.condition_box_main}>
                <Text style={styles.discountText}>
                  Note: You will get up to 5% discount of course.
                </Text>
                <View style={styles.conditions_box}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? "rgba(0, 54, 126, 1)" : undefined}
                  />
                  <Text style={styles.text_condition}>
                    I agree with the{" "}
                    <Text style={styles.text_condition1}>
                      Terms & Conditions
                    </Text>
                  </Text>
                </View>
              </View>

              <View style={styles.submitButton}>
                <TouchableOpacity>
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
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PaidCollegeRegForm;

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
  uploadBox: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(245, 245, 245, 1)",
    padding: 30,
    borderWidth: 0.5,
    borderColor: "rgba(217, 217, 217, 1)",
    borderRadius: 0.58,
    marginTop: 8,
  },
  uploadItems: {
    alignItems: "center",
    gap: 3,
  },
  uploadtext: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "rgba(55, 55, 55, 1)",
  },
  conditions: {
    marginTop: 40,
  },
  conditiontext: {
    fontSize: 13,
    lineHeight: 15.23,
    fontWeight: "400",
    color: "rgba(0, 0, 0, 1)",
  },
  condition_box_main: {
    marginTop: 30,
    gap: 20,
  },
  discountText: {
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 15.23,
    color: "#1A1A1A",
  },
  conditions_box: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 15,
    borderColor: "rgba(0, 54, 126, 1)",
    borderWidth: 1,
  },
  text_condition: {
    fontSize: 14,
    lineHeight: 16.41,
    fontWeight: "400",
    color: "rgba(34, 34, 34, 1)",
  },
  text_condition1: {
    fontSize: 14,
    lineHeight: 16.41,
    fontWeight: "600",
    color: "rgba(34, 34, 34, 1)",
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
});
