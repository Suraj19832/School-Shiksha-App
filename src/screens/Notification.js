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
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../../components/Header";

const NotificationContainer = (props) => {
  const imgPath = {
    "phone-call": require("../../assets/img/phone-call.png"),
    email: require("../../assets/img/email.png"),
    whatsapp: require("../../assets/img/whatsappIcon.png"),
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 8,
          backgroundColor: "white",
          paddingVertical: 15,
        }}
      >
        <View
          style={{
            marginHorizontal: 20,
            gap: 10,
            flexDirection: "row",
            width: Dimensions.get("screen").width * 0.9,
            flexWrap: "wrap",
          }}
        >
          <View style={[styles.icon, { backgroundColor: props.iconColor }]}>
            <Text>{props.iconName}</Text>
          </View>
          <View>
            <Text
              style={{
                marginTop: 5,
                color: "#435354",
                fontSize: 14,
                fontWeight: "400",
                maxWidth: Dimensions.get("screen").width * 0.6,
                fontWeight: "500",
              }}
            >
              {props.NotificationMsg}
            </Text>
          </View>
          <View style={{ position: "absolute", bottom: 0, right: 0 }}>
            <Text style={{ fontSize: 11, color: "#A6A6A6" }}>
              {props.msgTime}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Notification = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Notifications"
        navigateTo={() => navigation.navigate("Dashboard")}
      />
      <ScrollView>
        <View style={styles.mainView}>
          <View style={styles.innerView}></View>

          <View>
            <NotificationContainer
              NotificationMsg="Jenny Wilson  completed create new component."
              imgName="phone-call"
              msgTime="Just now"
              iconColor="#C5F2EC"
              iconName="JW"
            />
            <NotificationContainer
              NotificationMsg="Ajax Valerio  completed create new component."
              imgName="phone-call"
              msgTime="1h"
              iconColor="#E8A96E"
              iconName="JW"
            />
            <NotificationContainer
              NotificationMsg="Jenny Wilson  completed create new component."
              imgName="phone-call"
              msgTime="2h"
              iconColor="#19CF4C"
              iconName="JW"
            />
            <NotificationContainer
              NotificationMsg="Jenny Wilson  completed create new component."
              imgName="phone-call"
              msgTime="4h"
              iconColor="#8A9A98"
              iconName="JW"
            />
            <NotificationContainer
              NotificationMsg="Annete Black  completed Improve workflow in React."
              imgName="phone-call"
              msgTime="5h"
              iconColor="#F47272"
              iconName="AB"
            />
            <NotificationContainer
              NotificationMsg="Jenny Wilson  completed create new component."
              imgName="phone-call"
              msgTime="23h"
              iconColor="#6E90E8"
              iconName="JW"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    // marginTop: 52,
  },
  mainView: {
    flex: 0,
    // justifyContent: "center",
    // alignItems: "center",
    width: "100%",
    height: Dimensions.get("screen").height * 1.2,
    backgroundColor: "#FFFCCE",
    paddingTop: 12,
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
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
