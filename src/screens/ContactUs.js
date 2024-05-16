import { Linking } from "react-native";
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
import { LinearGradient } from "expo-linear-gradient";
import { getdata } from "../../Helper/Helper";
const ContactContainer = (props) => {
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
          marginTop: 15,
        }}
      >
        <View>
          <Text style={{ color: "#00367E", fontSize: 22, fontWeight: "500" }}>
            {props.contactTitle}
          </Text>
          <Text
            style={{
              color: "#435354",
              fontSize: 16,
              fontWeight: "400",
              paddingVertical: 10,
            }}
          >
            {props.contactMode}
          </Text>
        </View>

        <View>
          <LinearGradient
            colors={["#03357D", "#0569FA"]}
            style={styles.icon}
            start={[0, 0]}
            end={[1, 1]}
          >
            <Image
              style={{ height: 22, width: 22, tintColor: "white" }}
              source={imgPath[props.imgName]}
            />
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const ContactUs = ({ navigation }) => {
  const [data, setData] = useState({});
  console.log(data, "====>ssssssss");
  useEffect(() => {
    getdata("master/contact-details")
      .then((res) => {
        console.log(res?.data);
        setData(res?.data);
      })
      .catch((err) => {
        console.log("dkjhkjghk");
      });
  }, []);
  const handleCall = (phoneNumber) => {
    // console.log("first")

    const contactUrl = `tel:${data.mobile}`;
    Linking.openURL(contactUrl);
  };
  const handleEmail = (email) => {
    const emailUrl = `mailto:${data.email}`;
    Linking.openURL(emailUrl);
  };
  const handleWhatsapp = (phoneNumber) => {
    const whatsappUrl = `whatsapp://send?phone=${data.whatsapp_number}`;
    Linking.openURL(whatsappUrl);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Contact Us" navigateTo={() => navigation.goBack("Home")} />
      <ScrollView>
        <View style={styles.mainView}>
          <View style={styles.innerView}></View>

          <View style={styles.mainContainer}>
            <View>
              <Text
                style={{ color: "#373737", fontSize: 30, fontWeight: "600" }}
              >
                Contact Us
              </Text>
              <View
                style={[
                  styles.hairline,
                  { backgroundColor: "#D9D9D9", marginTop: 10, height: 1 },
                ]}
              />
            </View>
            <TouchableOpacity onPress={() => handleCall()}>
              <ContactContainer
                contactTitle="Mobile Number"
                contactMode={data.mobile}
                imgName="phone-call"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleEmail()}>
              <ContactContainer
                contactTitle="Email Id"
                contactMode={data.email}
                imgName="email"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleWhatsapp()}>
              <ContactContainer
                contactTitle="Whatsapp"
                contactMode={data.whatsapp_number}
                imgName="whatsapp"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    // marginTop: 52,
  },
  mainView: {
    flex: 0,
    // justifyContent: "center",
    // alignItems: "center",
    width: "100%",
    height: "auto",
    // backgroundColor: "red",
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
    marginVertical: 20,
  },
  icon: {
    backgroundColor: "red",
    borderRadius: 50,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
