import React, { useState, useEffect, useContext } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  useColorScheme,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "../../components/GradientText";
import { BorderGradient } from "../../components/BoderGradient";
import { getdata, getrequestwithtoken } from "../../Helper/Helper";
import { AuthContext } from "../../Utils/context/AuthContext";
import { Header } from "react-native/Libraries/NewAppScreen";

const MembershipPlan = ({ navigation }) => {
  const { userToken } = useContext(AuthContext);
  const colorScheme = useColorScheme();
  const statusBarColor = colorScheme === "dark" ? "black" : "white";
  const [cardData, setCardData] = useState([]);
  const [planId, setPlanId] = useState(null);
  const [loadingPage, setLoadingPage] = useState(false);
  const [activePlanAmount, setActivePlanAmount] = useState(null);

  console.log(planId, "here is plan id frssom membership plan");

  useEffect(() => {
    getrequestwithtoken("student/profile", userToken)
      .then((res) => {
        setPlanId(res.data.subscription.plan_id);
        setActivePlanAmount(res.data.subscription.plan_amount);
      })
      .catch((err) => {
        console.log(err, "===========>error from membership for plan ID");
      });
  }, []);

  useEffect(() => {
    setLoadingPage(true);
    getdata("master/plan")
      .then((res) => {
        setCardData(res.data);
        setLoadingPage(false);
      })
      .catch((err) => {
        setLoadingPage(false);
        console.log(err, "===========>error from membership api");
      });
  }, []);

  const sortedCardData = cardData.sort((a, b) => (a.id === planId ? -1 : 1));

  if (loadingPage) {
    return (
      <View style={{}}>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: "row",
            gap: 10,
            paddingVertical: 15,
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <TouchableOpacity onPress={navigation.goBack}>
            <Image
              source={require("../../assets/icons/arrow.png")}
              style={{ height: 24, width: 24 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              lineHeight: 27,
              color: "rgba(55, 55, 55, 1)",
            }}
          >
            Membership Plan
          </Text>
        </View>
        <ActivityIndicator
          size={"large"}
          color={"#00367E"}
          style={styles.loader}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={statusBarColor}
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <ScrollView>
        <View style={styles.mainView}>
          <View style={styles.innerView}>
            <TouchableOpacity onPress={navigation.goBack}>
              <Image
                source={require("../../assets/icons/arrow.png")}
                style={{ height: 24, width: 24 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                lineHeight: 27,
                color: "rgba(55, 55, 55, 1)",
              }}
            >
              Membership Plann
            </Text>
          </View>
          <View style={styles.hairline} />

          <View style={{ justifyContent: "center", paddingVertical: 12 }}>
            <GradientText
              style={{ fontSize: 30, fontWeight: "700" }}
              text="Choose your plan"
            />
          </View>
          <View style={{ gap: 30, marginBottom: 70 }}>
            {sortedCardData.map((cards, index) => {
              console.log(cards.id, "getting id from map");
              const descriptionData = JSON.parse(
                cards.plan_description || "[]"
              );

              const isActive = cards.id === planId;
              const backgroundColor = isActive ? "white" : "#00367E";
              const textPrice = isActive ? "black" : "white";
              const textColor = isActive ? "#006641" : "#FFAE2B";
              const borderbottom = isActive ? "#00367E" : "#D9D9D9";
              const textDescription = isActive ? "#435354" : "white";
              const disableButton = cards.plan_amount < activePlanAmount;

              return (
                <View key={index}>
                  <LinearGradient
                    colors={["#00367E", "#FEA613"]}
                    start={[1.2, 0]}
                    end={[1, 1]}
                    style={{
                      borderRadius: 12,
                      overflow: "hidden",
                      padding: 1.5,
                    }}
                  >
                    <View style={[styles.card_main, { backgroundColor }]}>
                      <View
                        style={{
                          borderRadius: 10,
                        }}
                      >
                        {/* action status */}
                        {cards?.id === planId ? (
                          <View
                            style={{
                              backgroundColor: "#006641",
                              borderRadius: 50,
                              height: Dimensions.get("window").height * 0.032,
                              width: Dimensions.get("window").width * 0.23,
                              justifyContent: "center",
                              left: "68%",
                            }}
                          >
                            <Text
                              style={{
                                color: "white",
                                textAlign: "center",
                                fontWeight: "500",
                                fontSize: 14,
                                lineHeight: 21,
                              }}
                            >
                              Active
                            </Text>
                          </View>
                        ) : (
                          <View></View>
                        )}

                        <View
                          style={{
                            flexDirection: "row",
                            gap: 10,
                            alignItems: "center",
                          }}
                        >
                          {cards.plan_name === "Free Plan" ? (
                            <Image
                              source={require("../../assets/img/free.png")}
                              style={styles.image}
                            />
                          ) : (
                            <Image
                              source={require("../../assets/img/crown.png")}
                              style={styles.image}
                            />
                          )}
                          <Text
                            style={{
                              fontSize: 25,
                              fontWeight: "500",
                              lineHeight: 37.5,
                              color: textColor,
                            }}
                          >
                            {cards?.plan_name}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 5,
                          alignItems: "baseline",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: "600",
                            color: textPrice,
                          }}
                        >
                          Rs.
                        </Text>
                        <Text
                          style={{
                            fontSize: 45,
                            fontWeight: "600",
                            lineHeight: 67.5,
                            color: textPrice,
                          }}
                        >
                          {cards.plan_amount}
                        </Text>
                        <Text
                          style={{
                            fontSize: 65,
                            fontWeight: "600",
                            lineHeight: 65.5,
                            color: textPrice,
                          }}
                        >
                          /-{" "}
                        </Text>
                      </View>

                      <View style={{ marginVertical: 10 }}>
                        <Text
                          style={{
                            color: textPrice,
                            fontSize: 14,
                            lineHeight: 21,
                          }}
                        >
                          ( {cards.plan_duration} months )
                        </Text>
                      </View>

                      {descriptionData.map((item, index) => {
                        return (
                          <View
                            key={index}
                            style={{
                              marginVertical: 10,
                              paddingHorizontal: 8,
                              borderBottomWidth: 0.2,
                              borderBottomColor: borderbottom,
                              paddingBottom: 10,
                              flexDirection: "row",
                              gap: 8,
                              alignItems: "center",
                            }}
                          >
                            {item.length > 0 && (
                              <Image
                                style={{ width: 20, height: 20 }}
                                source={require("../../assets/img/correct.png")}
                              />
                            )}

                            <Text
                              style={{
                                fontWeight: "400",
                                fontSize: 14,
                                lineHeight: 21,
                                color: textDescription,
                              }}
                            >
                              {item}
                            </Text>
                          </View>
                        );
                      })}
                      <View style={{ marginTop: 20 }}>
                        {cards.id === planId ? (
                          <BorderGradient
                            text="Get Started"
                            plan_id={planId}
                            disabled={false}
                          />
                        ) : (
                          <BorderGradient
                            text="Buy Now"
                            plan_id={cards.id}
                            disabled={disableButton}
                          />
                        )}
                      </View>
                    </View>
                  </LinearGradient>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MembershipPlan;

const styles = StyleSheet.create({
  container: {},
  mainView: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "auto",
  },
  innerView: {
    width: "90%",
    height: "auto",
    alignItems: "center",
    marginTop: 12,
    flexDirection: "row",
    gap: 12,
  },
  loader: {
    height: Dimensions.get("window").height * 1,
    // width: Dimensions.get("window").width * 0.7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  hairline: {
    backgroundColor: "#00367E66",
    height: 1,
    width: "100%",
    marginTop: 15,
    shadowColor: "#00367E66",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonbox: {
    width: 100,
    height: 40,
    borderRadius: 10,
    overflow: "hidden",
  },
  gradientText: {
    color: "white",
    textAlign: "center",
  },
  card: {
    backgroundColor: "white",
    width: Dimensions.get("screen").width * 0.88,
    height: Dimensions.get("screen").height * 0.55,
    borderRadius: 10,
    margin: 15,
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 15,
    position: "relative",
    borderWidth: 1,
  },
  card_main: {
    width: Dimensions.get("screen").width * 0.88,
    height: "auto",
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "transparent",
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 15,
    paddingRight: 30,
  },
  image: {
    width: 20,
    height: 20,
  },
  hairlineMenu: {
    height: 0.5,
    width: "98%",
    marginVertical: 18,
    alignSelf: "center",
  },
});
