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
  Animated,
  RefreshControl,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
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
import { AuthContext } from "../../Utils/context/AuthContext";
import { Image } from "react-native";
import Header from "../../components/Header";
import {
  getRequestWithParamsTokens,
  getrequestwithtoken,
} from "../../Helper/Helper";
import { ActivityIndicator } from "react-native";

const PaymentHistory = ({ navigation }) => {
  const { userToken } = useContext(AuthContext);
  // console.log(userToken);
  const [orderHistory, setorderHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [getdatalength, setgetdatalength] = useState();
  const [pageloading, setpageloading] = useState(true);
  const [limit, setlimit] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const getInfoData = async () => {
    const url = "student/order-details";
    const params = { page: limit };
    if (limit === 1) {
      setorderHistory([]);
    }
    await getRequestWithParamsTokens(url, userToken, params)
      .then((res) => {
        const order = res.data?.items.map((item, index) => item);
        setorderHistory((prev) => [...prev, ...order]);
        setgetdatalength(res?.data?.total_count);
        setIsLoading(false);
        setpageloading(false);
      })
      .catch((error) => {
        console.error("Error posting css", error?.message);
      });
  };
  useEffect(() => {
    getInfoData();
  }, [userToken, limit]);

  const handleRefresh = () => {
    const url = "student/order-details";
    const params = { page: limit };
    if (limit === 1) {
      setorderHistory([]);
    }
    setRefreshing(true);
    getRequestWithParamsTokens(url, userToken, params)
      .then((res) => {
        const order = res.data?.items.map((item, index) => item);
        setorderHistory((prev) => [...prev, ...order]);
        setgetdatalength(res?.data?.total_count);
      })
      .catch((error) => {
        console.error("Error posting css", error?.message);
      })
      .finally(() => {
        setRefreshing(false);
      });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();

    const formattedDate = `${day}.${month}.${year}`;
    const options = {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    const formattedTime = date.toLocaleString("en-US", options);

    return `${formattedDate} ${formattedTime}`;
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
        <Header title="Payment History" navigateTo={navigation.goBack} />
        <View style={styles.container12}>
          {[...Array(11)].map((_, index) => (
            <Animated.View
              key={index}
              style={[styles.placeholder, { opacity }]}
            />
          ))}
        </View>
      </>
    );
  };
  if (pageloading) {
    return <CardSkeleton />;
  }
  const loadmore = () => {
    setIsLoading(true);
    setlimit(limit + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Payment History" navigateTo={navigation.goBack} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        <View style={{ alignItems: "center", marginTop: 20 }}>
          {/* By api implementation  */}
          {orderHistory?.length === 0 && (
            <View
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/img/planet.png")}
                style={styles.img}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 27,
                    alignItems: "center",
                  }}
                >
                  No Record Found
                </Text>
                {/* <Image
              source={require("../../assets/img/sad-face.png")}
              style={{width:37 ,height:37}}
            /> */}
              </View>
            </View>
          )}
          {orderHistory?.map((items, key) => (
            <>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "85%",
                }}
                key={key}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 20,
                  }}
                >
                  <Image
                    style={styles.image}
                    source={require("../../assets/img/Group 68.png")}
                  />
                  <View>
                    <Text
                      style={{
                        color: "#1A1A1A",
                        fontWeight: "500",
                        fontSize: 14,
                      }}
                    >
                      {items.item_description}
                    </Text>
                    <Text
                      style={{
                        color: "#A6A6A6",
                        fontWeight: "400",
                        fontSize: 10,
                      }}
                    >
                      {formatDate(items.created_at)}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: "#BE0000",
                      fontWeight: "500",
                      fontSize: 14,
                    }}
                  >
                    -{items.total}
                  </Text>
                </View>
              </View>

              <View style={styles.hairlineMenu} />
            </>
          ))}

          {/* end  */}

          {getdatalength > orderHistory?.length && (
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "auto",
              }}
              onPress={loadmore}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  borderRadius: 8,
                  height: 42,
                  width: 120,
                  backgroundColor: "#FFFFFF",
                  marginBottom: 30,
                  paddingHorizontal: 10,
                  borderWidth: 1, // Specify border width
                  borderColor: "#DDDDDD",
                }}
              >
                {isLoading ? (
                  <ActivityIndicator
                    size="small"
                    color="grey"
                    style={{ alignSelf: "center", width: "100%" }}
                  />
                ) : (
                  <>
                    <Text
                      style={{
                        color: "#435354",
                        fontSize: 14,
                        fontWeight: "500",
                        lineHeight: 17,
                      }}
                    >
                      Load More
                    </Text>
                    <AntDesign name="down" size={20} color="#435354" />
                  </>
                )}
              </View>
            </TouchableOpacity>
          )}
          {/* dummy  */}
          {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/img/Group 68.png")}
              />
              <View>
                <Text
                  style={{ color: "#1A1A1A", fontWeight: "500", fontSize: 14 }}
                >
                  Premium
                </Text>
                <Text
                  style={{ color: "#A6A6A6", fontWeight: "400", fontSize: 10 }}
                >
                  31.03.2024 9:30 PM
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{ color: "#BE0000", fontWeight: "500", fontSize: 14 }}
              >
                -299
              </Text>
            </View>
          </View>

          <View style={styles.hairlineMenu} />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/img/Group 68.png")}
              />
              <View>
                <Text
                  style={{ color: "#1A1A1A", fontWeight: "500", fontSize: 14 }}
                >
                  Premium
                </Text>
                <Text
                  style={{ color: "#A6A6A6", fontWeight: "400", fontSize: 10 }}
                >
                  31.03.2024 12:40 PM
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{ color: "#BE0000", fontWeight: "500", fontSize: 14 }}
              >
                -299
              </Text>
            </View>
          </View>

          <View style={styles.hairlineMenu} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/img/Group 68.png")}
              />
              <View>
                <Text
                  style={{ color: "#1A1A1A", fontWeight: "500", fontSize: 14 }}
                >
                  Ultra Premium
                </Text>
                <Text
                  style={{ color: "#A6A6A6", fontWeight: "400", fontSize: 10 }}
                >
                  31.03.2024 6:00 PM
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{ color: "#BE0000", fontWeight: "500", fontSize: 14 }}
              >
                -499
              </Text>
            </View>
          </View>

          <View style={styles.hairlineMenu} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/img/Group 68.png")}
              />
              <View>
                <Text
                  style={{ color: "#1A1A1A", fontWeight: "500", fontSize: 14 }}
                >
                  Premium
                </Text>
                <Text
                  style={{ color: "#A6A6A6", fontWeight: "400", fontSize: 10 }}
                >
                  31.03.2024 6:00 PM
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{ color: "#BE0000", fontWeight: "500", fontSize: 14 }}
              >
                -299
              </Text>
            </View>
          </View>

          <View style={styles.hairlineMenu} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/img/Group 68.png")}
              />
              <View>
                <Text
                  style={{ color: "#1A1A1A", fontWeight: "500", fontSize: 14 }}
                >
                  Premium
                </Text>
                <Text
                  style={{ color: "#A6A6A6", fontWeight: "400", fontSize: 10 }}
                >
                  31.03.2024 9:30 PM
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{ color: "#BE0000", fontWeight: "500", fontSize: 14 }}
              >
                -299
              </Text>
            </View>
          </View>

          <View style={styles.hairlineMenu} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/img/Group 68.png")}
              />
              <View>
                <Text
                  style={{ color: "#1A1A1A", fontWeight: "500", fontSize: 14 }}
                >
                  Ultra Premium
                </Text>
                <Text
                  style={{ color: "#A6A6A6", fontWeight: "400", fontSize: 10 }}
                >
                  31.03.2024 12:40 PM
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{ color: "#BE0000", fontWeight: "500", fontSize: 14 }}
              >
                -499
              </Text>
            </View>
          </View>

          <View style={styles.hairlineMenu} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/img/Group 68.png")}
              />
              <View>
                <Text
                  style={{ color: "#1A1A1A", fontWeight: "500", fontSize: 14 }}
                >
                  Premium
                </Text>
                <Text
                  style={{ color: "#A6A6A6", fontWeight: "400", fontSize: 10 }}
                >
                  31.03.2024 9:30 PM
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{ color: "#BE0000", fontWeight: "500", fontSize: 14 }}
              >
                -299
              </Text>
            </View>
          </View>

          <View style={styles.hairlineMenu} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/img/Group 68.png")}
              />
              <View>
                <Text
                  style={{ color: "#1A1A1A", fontWeight: "500", fontSize: 14 }}
                >
                  Ultra Premium
                </Text>
                <Text
                  style={{ color: "#A6A6A6", fontWeight: "400", fontSize: 10 }}
                >
                  31.03.2024 6:00 PM
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{ color: "#BE0000", fontWeight: "500", fontSize: 14 }}
              >
                -499
              </Text>
            </View>
          </View>

          <View style={styles.hairlineMenu} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentHistory;
const styles = StyleSheet.create({
  container: {
    // marginTop: 28,
    // top: 53,
    paddingBottom: 48,
  },
  heading: {
    fontWeight: "500",
    fontSize: 16,
  },
  mainheadercontainer: {
    backgroundColor: "white",
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
    height: 45,
    width: 45,
  },
  hairlineMenu: {
    backgroundColor: "#00367E33",
    height: 1,
    width: "85%",
    marginBottom: 20,
    alignSelf: "center",
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
    height: "15%",
    borderRadius: 4,
    marginBottom: 8,
  },
  img: {
    height: 236,
    width: 236,
  },
});
