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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "../../components/GradientText";
import { BorderGradient } from "../../components/BoderGradient";
import { getdata, getrequestwithtoken } from "../../Helper/Helper";
import { AuthContext } from "../../Utils/context/AuthContext";

const SpanText = (props) => {
  return (
    <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
      <Image
        style={{ width: 20, height: 20 }}
        source={require("../../assets/img/correct.png")}
      />
      <Text
        style={[
          { fontWeight: "400", fontSize: 14, lineHeight: 21 },
          props.color ? { color: "#435354" } : { color: "white" },
        ]}
      >
        {props.text}
      </Text>
    </View>
  );
};

const MembershipPlan = ({ navigation }) => {
  const { userToken } = useContext(AuthContext);
  const colorScheme = useColorScheme();
  const statusBarColor = colorScheme === "dark" ? "black" : "white";
  const [cardData, setCardData] = useState([]);
  const [planId, setPlanId] = useState(null);
  const [activePlanAmount, setActivePlanAmount] = useState(null);

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
    getdata("master/plan")
      .then((res) => {
        setCardData(res.data);
      })
      .catch((err) => {
        console.log(err, "===========>error from membership api");
      });
  }, []);

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
          <View style={{ gap: 30, marginBottom: 70 }}>
            {cardData.map((cards, index) => {
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
                            }}
                          >
                            <SpanText
                              text={item}
                              color={textDescription}
                              style={{ color: "red" }}
                            />
                          </View>
                        );
                      })}
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
                  </LinearGradient>
                </View>
              );
            })}
          </View>
          {/* <View>
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
          </View> */}
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
    height: 1,
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
  card_main: {
    width: Dimensions.get("screen").width * 0.88,
    height: Dimensions.get("screen").height * 0.55,
    // backgroundColor: "red",
    backgroundColor: "white",
    borderRadius: 10,
    // borderWidth: 1,
    borderColor: "transparent",
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 15,
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
