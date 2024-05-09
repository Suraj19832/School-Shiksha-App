import React, { useState, useRef, useEffect } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Animated,
  Easing,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialIcons, Fontisto } from "@expo/vector-icons";
import TitleDash from "../../components/TitleDash";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

const OtherBenefits = ({ navigation }) => {
  const cards = [
    {
      title: "Computer Training",
      image: require("../../assets/img/computer.png"),
      status: "active",
    },
    {
      title: "ITI /Diplomatic any Course",
      image: require("../../assets/img/certification.png"),
      status: "inActive",
    },
    {
      title: "Education Govt Scholarship",
      image: require("../../assets/img/degree.png"),
      status: "active",
    },
    {
      title: "Free College Admission",
      image: require("../../assets/img/student.png"),
      status: "active",
    },
    {
      title: "Paid College Admission",
      image: require("../../assets/img/admission.png"),
      status: "inActive",
    },
    {
      title: "Free Govt Certificate Course",
      image: require("../../assets/img/online-certificate.png"),
      status: "active",
    },
    {
      title: "College Admission for Higher Education",
      image: require("../../assets/img/tuition.png"),
      status: "active",
    },
    {
      title: "Online Course",
      image: require("../../assets/img/webinar.png"),
      status: "active",
    },
    {
      title: "Job Campusing",
      image: require("../../assets/img/campus.png"),
      status: "inActive",
    },
    {
      title: "Private Scholarship",
      image: require("../../assets/img/scholarship.png"),
      status: "active",
    },
    {
      title: "Entrance Scholarship",
      image: require("../../assets/img/loan.png"),
      status: "active",
    },
    {
      title: "Merit Scholarship",
      image: require("../../assets/img/university.png"),
      status: "inActive",
    },
    {
      title: "Education Loan",
      image: require("../../assets/img/educationloan.png"),
      status: "inActive",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Others Benefits"
        titleColor="#00367E"
        navigateTo={navigation.goBack}
      />
      <ScrollView style={styles.container_main}>
        <View style={styles.mainView}>
          <View style={{ marginTop: 15 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.card}>
                {cards[0].status === "inActive" && (
                  <View style={styles.lockContainer}>
                    <Fontisto name="locked" />
                  </View>
                )}
                <View style={styles.imgContainer}>
                  <Image source={cards[9].image} style={styles.image} />
                </View>
                <Text style={styles.textStyle}>{cards[9].title}</Text>
              </View>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate("membershipPlan")}
              >
                {cards[1].status === "inActive" && (
                  <View style={styles.lockContainer}>
                    <Fontisto name="locked" color="white" size={17} />
                  </View>
                )}
                <View style={styles.imgContainer}>
                  <Image source={cards[10].image} style={styles.image} />
                </View>
                <Text style={styles.textStyle}>{cards[10].title}</Text>
              </TouchableOpacity>
              <View style={styles.card}>
                {cards[2].status === "inActive" && (
                  <View style={styles.lockContainer}>
                    <Fontisto name="locked" color="white" size={17} />
                  </View>
                )}
                <View style={styles.imgContainer}>
                  <Image source={cards[11].image} style={styles.image} />
                </View>
                <Text style={styles.textStyle}>{cards[11].title}</Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.card}>
                {cards[0].status === "inActive" && (
                  <View style={styles.lockContainer}>
                    <Fontisto name="locked" />
                  </View>
                )}
                <View style={styles.imgContainer}>
                  <Image source={cards[12].image} style={styles.image} />
                </View>
                <Text style={styles.textStyle}>{cards[12].title}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default OtherBenefits;

const styles = StyleSheet.create({
  container: {
    // marginTop: 52,
  },
  container_main: {
    // backgroundColor: "red",
    // flex: 1,
    marginHorizontal: 10,
  },
  mainView: {
    flex: 0,
    // justifyContent: "center",
    // alignItems: "center",
    width: "100%",
    height: "auto",
    // backgroundColor: "red",
    // marginHorizontal: 25,
  },
  innerView: {
    width: "90%",
    height: "auto",
    // backgroundColor: "yellow",

    gap: 10,
    // justifyContent:'center',
    // alignItems:'center'
  },
  hairline: {
    backgroundColor: "#00367E66", // Change the color
    height: 2,
    width: "100%",
    shadowColor: "#00367E66", // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: 2, // Shadow radius
    elevation: 2, // Android shadow elevation
  },
  mainContainer: {
    marginHorizontal: 20,
    marginVertical: 25,
  },
  icon: {
    backgroundColor: "red",
    borderRadius: 50,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#03357D",
    width: 102,
    height: 170,
    borderRadius: 10,
    margin: 5,
    padding: 10,
    position: "relative", // To allow absolute positioning of lock image
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  imgContainer: {
    backgroundColor: "white",
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  textStyle: {
    textAlign: "center",
    color: "white",
    fontSize: 13,
    fontWeight: "500",
  },
  lockContainer: {
    position: "absolute",
    top: 6,
    right: 6,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1, // Ensure the lock image is above other content
  },

  showMore: {
    backgroundColor: "#F6B02E",
    width: 200,
    height: 40,
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FFFAE7",
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1, // Specify border width
    borderColor: "#DDDDDD",
  },
  text: {
    color: "black",
    fontSize: 16,
  },
});
