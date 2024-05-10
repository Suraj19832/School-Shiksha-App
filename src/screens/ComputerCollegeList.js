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
const FreeCollegeList = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [open, setOpen] = useState(false);
  const items = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Computer College List" navigateTo={navigation.goBack} />
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
              Computer Course Admission{" "}
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

            <View style={{ gap: 15, alignSelf: "center" }}>
              <Text
                style={{
                  color: "#00367E",
                  fontWeight: "600",
                  fontSize: 20,
                  // left: 17,
                }}
              >
                Course Name
              </Text>
              <View style={styles.inputbox_main_container1}>
                <View
                  style={[
                    styles.inputbox_container,
                    { borderRadius: 30, backgroundColor: "#FDF1DD" },
                  ]}
                >
                  <View style={{ flexDirection: "row", gap: 4 }}>
                    <Image
                      style={{}}
                      source={require("../../assets/img/online-course.png")}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Select"
                      placeholderTextColor="rgba(166, 166, 166, 1)"
                    />
                  </View>

                  <AntDesign name="caretdown" size={16} color="#03357D" />
                </View>
                <Text
                  style={{
                    alignSelf: "flex-end",
                    color: "#0567F5",
                    fontWeight: "500",
                    fontSize: 14,
                    textDecorationLine: "underline",
                  }}
                >
                  Request Course
                </Text>
              </View>
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
                IEM Institute
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
                onPress={() => navigation.navigate("computerCourseDetails")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#0567F5",
                    fontWeight: "500",
                    fontSize: 14,
                    lineHeight: 16.41,
                  }}
                >
                  View All Details
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("computerAdmissionForm")}
              >
                <LinearGradient
                  colors={["#03357D", "#0569FA"]} // Define your gradient colors here
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={[
                    styles.buttonbox,
                    { justifyContent: "center", paddingHorizontal: 30 },
                  ]}
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
                        fontSize: 14,
                        fontWeight: "500",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        color: "white",
                        lineHeight: 16.41,
                      }}
                    >
                      Apply Link
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
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
                Techno India University
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
                onPress={() => navigation.navigate("computerCourseDetails")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#0567F5",
                    fontWeight: "500",
                    fontSize: 14,
                    lineHeight: 16.41,
                  }}
                >
                  View All Details
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("computerAdmissionForm")}
              >
                <LinearGradient
                  colors={["#03357D", "#0569FA"]} // Define your gradient colors here
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={[
                    styles.buttonbox,
                    { justifyContent: "center", paddingHorizontal: 30 },
                  ]}
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
                        fontSize: 14,
                        fontWeight: "500",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        color: "white",
                        lineHeight: 16.41,
                      }}
                    >
                      Apply Link
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
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
                The Heritage Academy
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
                onPress={() => navigation.navigate("computerCourseDetails")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#0567F5",
                    fontWeight: "500",
                    fontSize: 14,
                    lineHeight: 16.41,
                  }}
                >
                  View All Details
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("computerAdmissionForm")}
              >
                <LinearGradient
                  colors={["#03357D", "#0569FA"]} // Define your gradient colors here
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={[
                    styles.buttonbox,
                    { justifyContent: "center", paddingHorizontal: 30 },
                  ]}
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
                        fontSize: 14,
                        fontWeight: "500",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        color: "white",
                        lineHeight: 16.41,
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

export default FreeCollegeList;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#FFFCCE",
    // top: 53,
  },
  heading: {
    fontWeight: "500",
    fontSize: 16,
  },
  mainheadercontainer: {
    // backgroundColor: "white",
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
    alignItems: "center",
    width: "89%",
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
    paddingHorizontal: 15,
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
});
