import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Modal,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
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
import Header from "../../components/Header";
const OnlineCourseList = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [open, setOpen] = useState(false);
  const items = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];
  const [isDropdownOpenclass, setDropdownOpenclass] = useState(false);
  const [selectedOptionclass, setSelectedOptionclass] = useState(null);
  const [inputValueclass, setInputValueclass] = useState("");

  const toggleDropdownclass = () => {
    setDropdownOpenclass(!isDropdownOpenclass);
  };

  const handleSelectOptionclass = (option) => {
    setSelectedOptionclass(option);
    setInputValueclass(option);
    setDropdownOpenclass(false);
  };

  const handleInputChangeclass = (text) => {
    setInputValueclass(text);
    setDropdownOpenclass(null); // Clear selected option when user edits input
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}> */}
      {/* <View style={styles.mainheadercontainer}>
          <View style={styles.headercontainer}>
            <MaterialIcons
              name="arrow-back"
              size={30}
              color={"#00367E"}
              onPress={navigation.goBack}
            />
            <Text style={styles.heading}>Online Course College List</Text>
          </View>
        </View> */}
      <Header
        title="Online Course College List"
        navigateTo={navigation.goBack}
      />
      <ScrollView style={{ backgroundColor: "#FFFCCE" }}>
        <View>
          <Image
            style={styles.image}
            source={require("../../assets/img/onlinecourselist.png")}
          />
        </View>

        <View style={styles.searchContainer}>
          <View style={{ gap: 15 }}>
            <Text
              style={{
                color: "#00367E",
                fontWeight: "600",
                fontSize: 20,
                alignSelf: "center",
              }}
            >
              Online Course Admission{" "}
            </Text>
            <View style={styles.inputbox_main_container1}>
              <View style={styles.inputbox_container}>
                <TextInput
                  style={styles.input}
                  placeholder="Search"
                  placeholderTextColor="rgba(166, 166, 166, 1)"
                />

                <AntDesign name="search1" size={16} color="#A6A6A6" />
              </View>
            </View>

            <View style={styles.inputbox_main_container}>
              <View>
                <Text
                  style={{
                    color: "rgba(0, 54, 126, 1)",
                    fontWeight: "500",
                    fontSize: 18,
                    alignSelf: "flex-start",
                  }}
                >
                  Course Name
                </Text>
              </View>
              <View
                style={[
                  styles.inputbox_container,
                  {
                    justifyContent: "space-between",
                    width: "91%",
                    backgroundColor: "#FDF1DD",
                  },
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
                      style={{}}
                      source={require("../../assets/img/online-course.png")}
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
                <View style={styles.dropdownContainer}>
                  <TouchableOpacity
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
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => handleSelectOptionclass("2")}
                  >
                    <View
                      style={{
                        width: Dimensions.get("window").width * 0.7,
                        alignItems: "center",
                      }}
                    >
                      <Text>2</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => handleSelectOptionclass("3")}
                  >
                    <View
                      style={{
                        width: Dimensions.get("window").width * 0.7,
                        alignItems: "center",
                      }}
                    >
                      <Text>3</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            <View>
              <Text
                style={{
                  alignSelf: "flex-end",
                  right: 10,
                  color: "#0567F5",
                  fontWeight: "500",
                }}
              >
                Request Course
              </Text>
              <View style={styles.hairlineMenu} />
            </View>
          </View>
        </View>
        <View style={styles.listContainer}>
          {/* 1st college  */}
          <View style={styles.listCart}>
            <View style={styles.cardTop}>
              <View
                style={{
                  backgroundColor: "rgba(255, 199, 0, 0.5)",
                  width: 55,
                  height: 55,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{}}
                  source={require("../../assets/img/college.png")}
                />
              </View>

              <Text
                style={{
                  color: "rgba(55, 55, 55, 1)",
                  fontWeight: "600",
                  fontSize: 18,
                }}
              >
                Deshbandhu College
              </Text>
            </View>
            <View style={styles.course}>
              <Text
                style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
              >
                Course Name -
              </Text>
              <Text
                style={{ color: "#595959", fontWeight: "600", fontSize: 14 }}
              >
                B.C.A
              </Text>
            </View>

            <View style={styles.aboutCourse}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
                >
                  Course Duration
                </Text>
                <Text
                  style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
                >
                  Course Fees{" "}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#595959", fontWeight: "700", fontSize: 12 }}
                >
                  4 Months
                </Text>
                <Text
                  style={{ color: "#595959", fontWeight: "700", fontSize: 12 }}
                >
                  30000/-
                </Text>
              </View>
            </View>

            <View style={styles.cardButtons}>
              <TouchableOpacity
                style={styles.buttonbox}
                onPress={() => navigation.navigate("onlineCourseDetails")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#0567F5",
                    fontWeight: "500",
                    fontSize: 16,
                    lineHeight: 18.75,
                  }}
                >
                  View All Details
                </Text>
              </TouchableOpacity>

              <LinearGradient
                colors={["#03357D", "#0569FA"]} // Define your gradient colors here
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={[styles.buttonbox, { justifyContent: "center" }]}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("onlineAdmissionForm")}
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
                      color: "white",
                    }}
                  >
                    Apply Link
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>

          {/* second college   */}
          <View style={styles.listCart}>
            <View style={styles.cardTop}>
              <View
                style={{
                  backgroundColor: "rgba(255, 199, 0, 0.5)",
                  width: 55,
                  height: 55,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{}}
                  source={require("../../assets/img/college.png")}
                />
              </View>

              <Text
                style={{
                  color: "rgba(55, 55, 55, 1)",
                  fontWeight: "600",
                  fontSize: 18,
                }}
              >
                Behala College
              </Text>
            </View>
            <View style={styles.course}>
              <Text
                style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
              >
                Course Name -
              </Text>
              <Text
                style={{ color: "#595959", fontWeight: "600", fontSize: 14 }}
              >
                B.C.A
              </Text>
            </View>

            <View style={styles.aboutCourse}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
                >
                  Course Duration
                </Text>
                <Text
                  style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
                >
                  Course Fees{" "}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#595959", fontWeight: "700", fontSize: 12 }}
                >
                  4 Months
                </Text>
                <Text
                  style={{ color: "#595959", fontWeight: "700", fontSize: 12 }}
                >
                  40000/-
                </Text>
              </View>
            </View>

            <View style={styles.cardButtons}>
              <TouchableOpacity
                style={styles.buttonbox}
                onPress={() => navigation.navigate("onlineCourseDetails")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#0567F5",
                    fontWeight: "500",
                    fontSize: 16,
                    lineHeight: 18.75,
                  }}
                >
                  View All Details
                </Text>
              </TouchableOpacity>

              <LinearGradient
                colors={["#03357D", "#0569FA"]} // Define your gradient colors here
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={[styles.buttonbox, { justifyContent: "center" }]}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("onlineAdmissionForm")}
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
                      color: "white",
                    }}
                  >
                    Apply Link
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>

          {/* third college */}
          <View style={styles.listCart}>
            <View style={styles.cardTop}>
              <View
                style={{
                  backgroundColor: "rgba(255, 199, 0, 0.5)",
                  width: 55,
                  height: 55,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{}}
                  source={require("../../assets/img/college.png")}
                />
              </View>

              <Text
                style={{
                  color: "rgba(55, 55, 55, 1)",
                  fontWeight: "600",
                  fontSize: 18,
                }}
              >
                Pandaveswar College
              </Text>
            </View>
            <View style={styles.course}>
              <Text
                style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
              >
                Course Name -
              </Text>
              <Text
                style={{ color: "#595959", fontWeight: "600", fontSize: 14 }}
              >
                B.C.A
              </Text>
            </View>

            <View style={styles.aboutCourse}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
                >
                  Course Duration
                </Text>
                <Text
                  style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
                >
                  Course Fees{" "}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#595959", fontWeight: "700", fontSize: 12 }}
                >
                  4 Months
                </Text>
                <Text
                  style={{ color: "#595959", fontWeight: "700", fontSize: 12 }}
                >
                  30000/-
                </Text>
              </View>
            </View>

            <View style={styles.cardButtons}>
              <TouchableOpacity
                style={styles.buttonbox}
                onPress={() => navigation.navigate("onlineCourseDetails")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#0567F5",
                    fontWeight: "500",
                    fontSize: 16,
                    lineHeight: 18.75,
                  }}
                >
                  View All Details
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("onlineAdmissionForm")}
              >
                <LinearGradient
                  colors={["#03357D", "#0569FA"]} // Define your gradient colors here
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
                        color: "white",
                      }}
                    >
                      Apply Link
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              height: 32,
              backgroundColor: "#FFFFFF",
              marginBottom: 80,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ color: "#435354" }}>Load More</Text>
            <AntDesign name="down" size={15} color="#435354" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnlineCourseList;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#FFFCCE",
    // marginTop: 28,
    // top: 53,
    // marginBottom: 95,
    paddingBottom: 48,
  },
  heading: {
    fontWeight: "500",
    fontSize: 16,
  },
  mainheadercontainer: {
    backgroundColor: "white",
    height: 50,
    justifyContent: "center",

    position: "relative",
  },
  headercontainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    left: 20,
    gap: 10,
  },
  image: {
    height: 220,
    width: "100%",
  },
  listContainer: {
    width: "100%",
    height: "auto",
    alignItems: "center",
  },
  searchContainer: {
    gap: 15,
    marginVertical: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  inputbox_container: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "rgba(3, 53, 125, 1)",
    backgroundColor: "white",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "89%",
    gap: 8,
    height: 43,
  },
  inputbox_main_container: {
    gap: 12,
    // alignItems: "center",
    width: "100%",
  },
  inputbox_main_container1: {
    gap: 12,
    alignItems: "center",
    width: "100%",
  },

  listCart: {
    // flexDirection: "row",
    textAlign: "center",
    // alignItems: "center",
    // justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    // paddingVertical: 12,
    // paddingHorizontal: 20,
    borderRadius: 20,
    width: "89%",
    gap: 15,
    height: "auto",
    marginBottom: 20,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    // padding: 12,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  course: {
    flexDirection: "row",
    gap: 5,
    // padding: 12,
    paddingHorizontal: 20,
  },
  aboutCourse: {
    backgroundColor: "#E2FDFF",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    gap: 10,
    padding: 12,
    // position:'absolute'
  },
  cardButtons: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonbox: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0567F5",
    padding: 12,
    paddingHorizontal: 15,
    borderRadius: 30,
    gap: 8,
    width: "auto",
    marginBottom: 10,
  },
  input: {
    width: "80%",
    color: "black",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    maxHeight: 150,
    overflow: "auto",
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  optionText: {
    textAlign: "center",
  },

  dropdownContainer: {
    position: "absolute",
    top: "100%",
    left: 0,
    // zIndex:1,
    backgroundColor: "yellow",
    marginTop: 10,
    width: "85%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    zIndex: 1,
    left: 17,
    alignSelf: "center",
    // justifyContent:'center'
  },
  dropdownOption: {
    paddingVertical: 8,
    alignSelf: "center",
  },
  hairlineMenu: {
    backgroundColor: "#0567F5",
    height: 1.3,
    width: "30%",
    right: 9,
    alignSelf: "flex-end",
  },
});
