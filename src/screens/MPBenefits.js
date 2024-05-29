import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  Dimensions,
} from "react-native";

import Header from "../../components/Header";
import {
  GetfetchDataWithParams,
  getrequestwithtoken,
} from "../../Helper/Helper";
import { useRoute } from "@react-navigation/native";
import { AuthContext } from "../../Utils/context/AuthContext";

const MPBenefits = ({ navigation }) => {
  const { userToken } = useContext(AuthContext);
  const route = useRoute();
  const { sortheading, heading } = route.params;
  const [loading, setLoading] = useState(false);
  const [activeServices, setActiveServices] = useState([]);
  const [serviceId, setServiceId] = useState([]);
  const [cardData, setCardData] = useState([]);

  console.log(serviceId, "array of serviceId");
  console.log(activeServices, "array of active services");

  useEffect(() => {
    const params = {
      service_type: sortheading,
    };
    setLoading(true);
    GetfetchDataWithParams("master/services", params)
      .then((res) => {
        setCardData(res.data);
        const value = res.data.map((item) => item.id);
        setServiceId(value);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getrequestwithtoken("student/profile", userToken)
      .then((res) => {
        console.log(res.data.subscription.plan_services, "yuppp");
        setActiveServices(res.data.subscription.plan_services);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const isServiceActive = (serviceId) => {
    return activeServices.includes(serviceId.toString());
  };

  const handleNavigate = (item) => {
    const isActive = isServiceActive(item.id);
    if (isActive) {
      navigation.navigate("freeCollege", {
        id: item.id,
        heading: item.service_name,
      });
    } else {
      navigation.navigate("membershipPlan");
    }
  };
  const truncateMessage = (message, maxLength = 25) => {
    if (message.length > maxLength) {
      return message.substring(0, maxLength) + "...";
    }
    return message;
  };
  if (loading) {
    return (
      <View>
        <Header
          title={heading}
          titleColor="#00367E"
          navigateTo={navigation.goBack}
        />
        <ActivityIndicator
          size={"large"}
          olor={"#00367E"}
          style={styles.loader}
        />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={heading}
        titleColor="#00367E"
        navigateTo={navigation.goBack}
      />
      <ScrollView>
        <View style={styles.mainView}>
          <View
            style={{
              marginTop: 15,
              marginHorizontal: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              {sortheading !== "other" && (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => navigation.navigate("careerGuidance")}
                >
                  <View style={styles.imgContainer}>
                    <Image
                      source={require("../../assets/icons/guidance.png")}
                      style={styles.image}
                    />
                  </View>
                  <Text style={styles.textStyle}>Career Guidance</Text>
                </TouchableOpacity>
              )}

              {cardData.map((item, index) => {
                const isActive = isServiceActive(item.id.toString());
                console.log(isActive);
                return (
                  <TouchableOpacity
                    style={styles.card}
                    key={index}
                    onPress={() => handleNavigate(item)}
                  >
                    <View style={{ position: "absolute", top: 10, right: 5 }}>
                      {!isActive && (
                        <Image
                          source={require("../../assets/img/lock_frame.png")}
                          style={{
                            height: 20,
                            width: 20,
                          }}
                        />
                      )}
                    </View>
                    <View style={styles.imgContainer}>
                      <Image
                        source={{
                          uri: item?.image,
                        }}
                        style={styles.image}
                      />
                    </View>
                    {/* {isActive && <Text style={styles.lockedText}>LO</Text>} */}
                    <Text style={styles.textStyle}>
                      {truncateMessage(item.service_name)}
                    </Text>
                  </TouchableOpacity>
                );
              })}
              {sortheading !== "other" && (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() =>
                    navigation.navigate("computerCollegeList", {
                      title: "Exam Enquiry",
                    })
                  }
                >
                  <View style={styles.imgContainer}>
                    <Image
                      source={require("../../assets/icons/exam_enquiry.png")}
                      style={styles.image}
                    />
                  </View>
                  <Text style={styles.textStyle}>Exam Enquiry</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MPBenefits;

const styles = StyleSheet.create({
  container: {},
  mainView: {
    width: "100%",
    height: "auto",
  },
  loader: {
    height: Dimensions.get("window").height * 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
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
    fontWeight: "700",
    lineHeight: 15,
  },
  lockContainer: {
    position: "absolute",
    top: 6,
    right: 6,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1, // Ensure the lock image is above other content
  },
});
