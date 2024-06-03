import { Linking, ActivityIndicator, RefreshControl } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Animated,
  SafeAreaView,
} from "react-native";
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
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false); // State for refreshing

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getdata("master/contact-details")
      .then((res) => {
        setData(res?.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const handleRefresh = () => {
    setRefreshing(true);
    getdata("master/contact-details")
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => {})
      .finally(() => {
        setRefreshing(false);
      });
  };

  const handleCall = (phoneNumber) => {
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

  const CardSkeleton = () => {
    const opacity = useRef(new Animated.Value(0.3)).current;

    useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0.3,
            duration: 800,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }, [opacity]);

    return (
      <>
        <Header title="Contact Us" navigateTo={navigation.goBack} />
        <View style={styles.container12}>
          {[...Array(1)].map((_, index) => (
            <Animated.View
              key={index}
              style={[styles.placeholder, { opacity }]}
            />
          ))}
        </View>
      </>
    );
  };

  if (isLoading) {
    return <CardSkeleton />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Contact Us" navigateTo={() => navigation.goBack("Home")} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
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
  container: {},
  mainView: {
    flex: 0,
    width: "100%",
    height: "auto",
  },
  innerView: {
    width: "90%",
    height: "auto",
    gap: 10,
  },
  hairline: {
    backgroundColor: "#00367E66",
    height: 2,
    width: "100%",
    shadowColor: "#00367E66",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
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
  loaderContainer: {
    height: Dimensions.get("window").height * 1,
    // width: Dimensions.get("window").width * 0.7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  container12: {
    backgroundColor: "#F6F6F6",
    borderRadius: 13,
    padding: 16,
    marginBottom: 16,
    height: "80%",
  },
  placeholder: {
    backgroundColor: "#ccc",
    height: "60%",
    borderRadius: 20,
  },

  // placeholder2: {
  //   backgroundColor: 'grey',
  //   height: '20%',
  //   borderRadius: 10,
  //   marginVertical:20
  // },
});
