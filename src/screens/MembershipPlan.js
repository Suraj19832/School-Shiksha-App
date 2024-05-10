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
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import GradientText from "../../components/GradientText";
import { BorderGradient } from "../../components/BoderGradient";

const SpanText = (props) => {
  return (
    <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
      <Image
        style={{ width: 20, height: 20 }}
        source={require("../../assets/img/correct.png")}
      />
      <Text
        style={[
          { fontWeight: "400", fontSize: 16 },
          props.textColor ? { color: "#FFFFFF" } : { color: "#435354" },
        ]}
      >
        {props.text}
      </Text>
    </View>
  );
};

const MembershipPlan = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainView}>
          <View style={styles.innerView}>
            <TouchableOpacity onPress={navigation.goBack}>
              <Image
                source={require("../../assets/icons/arrow.png")}
                style={{ height: 24, width: 24 }}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 21, fontWeight: "500" }}>
              Membership Plan
            </Text>
          </View>
          <View style={styles.hairline} />

          <View style={{ justifyContent: "center", paddingVertical: 12 }}>
            <GradientText
              style={{ fontSize: 30, fontWeight: "700" }}
              text="Choose your plan"
            />
          </View>
          <View>
            <View
              style={[styles.card, { borderColor: "green", borderWidth: 3 }]}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../../assets/img/free.png")}
                    style={styles.image}
                  />
                  <Text
                    style={{
                      color: "#006641",
                      fontSize: 25,
                      fontWeight: "500",
                    }}
                  >
                    Free
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#006641",
                    borderRadius: 50,
                    height: Dimensions.get("window").height * 0.032,
                    width: Dimensions.get("window").width * 0.23,
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontWeight: "500",
                    }}
                  >
                    Active
                  </Text>
                </View>
              </View>
              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "baseline" }}
              >
                <Text style={{ fontSize: 20, fontWeight: "600" }}>Rs.</Text>
                <Text style={{ fontSize: 48, fontWeight: "900" }}>0</Text>
                <Text style={{ fontSize: 65, fontWeight: "900" }}>/- </Text>
              </View>

              <View style={{ paddingVertical: 15, paddingHorizontal: 8 }}>
                <SpanText text="Free College Admission" />
                <View style={styles.hairlineMenu} />
                <SpanText text="Free Govt. Certificate" />
                <View style={styles.hairlineMenu} />
                <SpanText text="Free Apprenticeship training with Stipend" />
                <View style={styles.hairlineMenu} />
              </View>
              <BorderGradient text="Get Started" />
            </View>
          </View>
          <View>
            <View style={[styles.card, { backgroundColor: "#00367E" }]}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../../assets/img/crown.png")}
                    style={styles.image}
                  />
                  <Text
                    style={{
                      color: "#FFAE2B",
                      fontSize: 25,
                      fontWeight: "500",
                    }}
                  >
                    Premium
                  </Text>
                </View>
              </View>

              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "baseline" }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "600", color: "white" }}
                >
                  Rs.
                </Text>
                <Text
                  style={{ fontSize: 48, fontWeight: "900", color: "white" }}
                >
                  299
                </Text>
                <Text
                  style={{ fontSize: 65, fontWeight: "900", color: "white" }}
                >
                  /-{" "}
                </Text>
              </View>
              <Text
                style={{ color: "#C9C9C9", fontWeight: "400", fontSize: 16 }}
              >
                (3 years validity)
              </Text>
              <View style={{ paddingVertical: 15, paddingHorizontal: 8 }}>
                <SpanText textColor="#FFFFFF" text="Paid College Admission" />
                <View
                  style={[
                    styles.hairlineMenu,
                    { backgroundColor: "#D9D9D933" },
                  ]}
                />
                <SpanText textColor="#FFFFFF" text="Paid Certificate Course" />
                <View
                  style={[
                    styles.hairlineMenu,
                    { backgroundColor: "#D9D9D933" },
                  ]}
                />
                <SpanText
                  textColor="#FFFFFF"
                  text="Education Government Scholarship"
                />
                <View
                  style={[
                    styles.hairlineMenu,
                    { backgroundColor: "#D9D9D933" },
                  ]}
                />
              </View>
              <BorderGradient text="Buy Plan" />
            </View>
          </View>
          <View>
            <View style={[styles.card, { backgroundColor: "#00367E" }]}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../../assets/img/member.png")}
                    style={styles.image}
                  />
                  <Text
                    style={{
                      color: "#FFAE2B",
                      fontSize: 25,
                      fontWeight: "500",
                    }}
                  >
                    Ultra Premium
                  </Text>
                </View>
              </View>

              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "baseline" }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "600", color: "white" }}
                >
                  Rs.
                </Text>
                <Text
                  style={{ fontSize: 48, fontWeight: "900", color: "white" }}
                >
                  499
                </Text>
                <Text
                  style={{ fontSize: 65, fontWeight: "900", color: "white" }}
                >
                  /-{" "}
                </Text>
              </View>
              <Text
                style={{ color: "#C9C9C9", fontWeight: "400", fontSize: 16 }}
              >
                (3 years validity)
              </Text>
              <View style={{ paddingVertical: 15, paddingHorizontal: 8 }}>
                <SpanText textColor="#FFFFFF" text="Entrance Scholarship" />
                <View
                  style={[
                    styles.hairlineMenu,
                    { backgroundColor: "#D9D9D933" },
                  ]}
                />
                <SpanText textColor="#FFFFFF" text="Merit Scholarship" />
                <View
                  style={[
                    styles.hairlineMenu,
                    { backgroundColor: "#D9D9D933" },
                  ]}
                />
                <SpanText textColor="#FFFFFF" text="Education Loan" />
                <View
                  style={[
                    styles.hairlineMenu,
                    { backgroundColor: "#D9D9D933" },
                  ]}
                />
              </View>
              <BorderGradient text="Buy Plan" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MembershipPlan;

const styles = StyleSheet.create({
  container: {
    // marginTop: 28,
  },
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
    alignItems: "center",
    marginTop: 12,
    flexDirection: "row",
    gap: 12,
  },
  hairline: {
    backgroundColor: "#00367E66", // Change the color
    height: 2,
    width: "100%",
    marginTop: 15,
    shadowColor: "#00367E66", // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: 2, // Shadow radius
    elevation: 2, // Android shadow elevation
  },
  buttonbox: {
    width: 100, // Adjust width according to your requirement
    height: 40, // Adjust height according to your requirement
    borderRadius: 10, // Adjust border radius according to your requirement
    overflow: "hidden", // Ensure that gradient doesn't overflow the button
  },
  gradientText: {
    color: "white", // Text color
    textAlign: "center", // Text alignment
    // You can add more styles to the text if needed
  },
  card: {
    backgroundColor: "white",
    width: Dimensions.get("screen").width * 0.88,
    height: Dimensions.get("screen").height * 0.55,
    // width:318,
    // height:440,
    borderRadius: 10,
    margin: 15,
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 15,
    position: "relative", // To allow absolute positioning of lock image
    borderWidth: 1,
  },
  image: {
    width: 25,
    height: 25,
  },
  hairlineMenu: {
    backgroundColor: "#00367E33",
    height: 1,
    width: "98%",
    marginVertical: 18,
    alignSelf: "center",
  },
});
