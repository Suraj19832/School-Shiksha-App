import React, { useState, useRef, useEffect, useContext } from "react";
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
import { getrequestwithtoken } from "../../Helper/Helper";
import { AuthContext } from "../../Utils/context/AuthContext";
import moment from "moment";

const formatNotificationTime = (dateString) => {
  const now = moment();
  const date = moment(dateString);
  const duration = moment.duration(now.diff(date));

  const minutes = duration.asMinutes();
  const hours = duration.asHours();
  const days = duration.asDays();
  const weeks = duration.asWeeks();

  if (minutes < 60) {
    return `${Math.floor(minutes)} min ago`;
  } else if (hours < 24) {
    return `${Math.floor(hours)} hr ago`;
  } else if (days < 7) {
    return `${Math.floor(days)} day ago`;
  } else if (weeks < 2) {
    return "a week ago";
  } else {
    return `${Math.floor(weeks)}W ago`;
  }
};

const NotificationContainer = (props) => {
  const imgPath = {
    // "phone-call": require("../../assets/img/phone-call.png"),
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
          marginTop: 6,
          backgroundColor: "white",
          paddingVertical: 15,
          height: 85,
        }}
      >
        <View
          style={{
            marginHorizontal: 20,
            gap: 10,
            flexDirection: "row",
            width: Dimensions.get("screen").width * 0.9,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <View style={[styles.icon, { backgroundColor: props.iconColor }]}>
            <Text>{props.iconName}</Text>
          </View>
          {/* <View>
          // </View> */}
          <View style={{ position: "relative" }}>
            <Text
              style={{
                position: "absolute",
                bottom: 22,
                fontSize: 10,
                fontWeight: "500",
                lineHeight: 18,
              }}
            >
              {props.subjectMsg}
            </Text>
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
              {formatNotificationTime(props.msgTime)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Notification = ({ navigation }) => {
  const [notifiData, setNotifiData] = useState([]);
  const { userToken } = useContext(AuthContext);
  useEffect(() => {
    getrequestwithtoken("student/notifications", userToken)
      .then((res) => {
        const objData = res.data.map((item) => item);
        setNotifiData(objData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Notifications" navigateTo={navigation.goBack} />
      <ScrollView>
        <View style={styles.mainView}>
          <View style={styles.innerView}></View>

          <View>
            {notifiData.map((item, index) => {
              return (
                <View key={index}>
                  <NotificationContainer
                    subjectMsg={item.subject}
                    NotificationMsg={item.message}
                    msgTime={item.created_at}
                    iconColor="#C5F2EC"
                    iconName="SS"
                  />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {},
  mainView: {
    flex: 0,
    width: "100%",
    height: Dimensions.get("screen").height * 0.9,
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
