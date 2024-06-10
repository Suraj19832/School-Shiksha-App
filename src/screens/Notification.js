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
  Modal,
  RefreshControl,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Header from "../../components/Header";
import {
  getRequestWithParamsTokens,
  getrequestwithtoken,
} from "../../Helper/Helper";
import { AuthContext } from "../../Utils/context/AuthContext";
import moment from "moment";
import { ActivityIndicator } from "react-native";

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

const truncateMessage = (message, maxLength = 35) => {
  if (message?.length > maxLength) {
    return message?.substring(0, maxLength) + "...";
  }
  return message;
};
const truncateSubject = (message, maxLength = 25) => {
  if (message?.length > maxLength) {
    return message?.substring(0, maxLength) + "...";
  }
  return message;
};

const NotificationContainer = (props) => {
  const { userToken } = useContext(AuthContext);
  const imgPath = {
    email: require("../../assets/img/email.png"),
    whatsapp: require("../../assets/img/whatsappIcon.png"),
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [isRead, setIsRead] = useState(props?.is_read);

  useEffect(() => {
    setIsRead(props?.is_read);
  }, [props.is_read]);
  const readMessage = () => {
    const params = {
      id: props?.id,
    };
    getRequestWithParamsTokens("student/notification/view", userToken, params)
      .then((res) => {
        setIsRead(res?.data?.is_read);
        console.log(res?.data?.is_read);
      })
      .catch((err) => [console.log(err, "error from notification api view")]);
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "600",
                paddingVertical: 10,
                fontSize: 18,
              }}
            >
              {props?.subjectMsg}
            </Text>
            <Text style={{ color: "#435354" }}>{props?.NotificationMsg}</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
          readMessage();
        }}
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
          <View style={[styles.icon, { backgroundColor: props?.iconColor }]}>
            <Text>{props?.iconName}</Text>
          </View>

          <View style={{ position: "relative" }}>
            <View
              style={{
                position: "absolute",
                bottom: 22,
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 18,
                flexDirection: "row",
                gap: 5,
              }}
            >
              <Text
                style={{
                  color: "#435354",
                  fontWeight: "500",
                  fontSize: 15,
                  width: 250,
                }}
              >
                {truncateSubject(props?.subjectMsg)}
              </Text>
              {isRead == 0 ? (
                <View
                  style={{
                    height: 7,
                    width: 7,
                    backgroundColor: "red",
                    borderRadius: 50,
                    left: 5,
                  }}
                ></View>
              ) : (
                <View></View>
              )}
            </View>
            <Text
              style={{
                marginTop: 5,
                color: "#435354",
                fontSize: 12,
                fontWeight: "400",
              }}
            >
              {truncateMessage(props?.NotificationMsg)}
            </Text>
          </View>
          <View style={{ position: "absolute", bottom: 0, right: 0 }}>
            <Text style={{ fontSize: 11, color: "#A6A6A6" }}>
              {formatNotificationTime(props?.msgTime)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Notification = ({ navigation }) => {
  const [notifiData, setNotifiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setlimit] = useState(1);
  const { userToken } = useContext(AuthContext);
  const [getdatalength, setgetdatalength] = useState([]);
  const [loadingPage, setLoadingPage] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    const params = { page: limit };
    if (limit === 1) {
      setNotifiData([]);
    }
    setLoadingPage(true);
    getRequestWithParamsTokens("student/notifications", userToken, params)
      .then((res) => {
        setgetdatalength(res?.data?.total_count);
        const objData = res?.data?.items.map((item) => item);
        // setNotifiData(objData);
        setNotifiData((prev) => [...prev, ...objData]);
        setIsLoading(false);
        setLoadingPage(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingPage(false);
      });
  }, [userToken, limit]);

  const handleRefreshing = () => {
    setRefreshing(true);
    const params = { page: limit };
    if (limit === 1) {
      setNotifiData([]);
    }
    getRequestWithParamsTokens("student/notifications", userToken, params)
      .then((res) => {
        setgetdatalength(res?.data?.total_count);
        const objData = res?.data?.items.map((item) => item);
        setNotifiData((prev) => [...prev, ...objData]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setRefreshing(false);
      });
  };

  const loadmore = () => {
    setIsLoading(true);
    // console.log("Loadmore is clicked");
    setlimit(limit + 1);
    // console.log(limit);
    // fetchUserData("master/organization-course", id);
  };

  if (loadingPage) {
    return (
      <View>
        <Header title="Notifications" navigateTo={navigation.goBack} />
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
      <Header title="Notifications" navigateTo={navigation.goBack} />
      <View>
        <ScrollView
          style={styles.mainView}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefreshing}
            />
          }
        >
          <View style={{ marginBottom: 40 }}>
            {notifiData?.length === 0 && (
              <View
                style={{
                  width: "100%",
                  height: "90%",
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
                    No Alerts
                  </Text>
                  {/* <Image
              source={require("../../assets/img/sad-face.png")}
              style={{width:37 ,height:37}}
            /> */}
                </View>
              </View>
            )}
            {notifiData?.length != 0 &&
              notifiData?.map((item, index) => {
                // console.log(item,"????????????")
                return (
                  <View key={index}>
                    <NotificationContainer
                      subjectMsg={item?.subject}
                      NotificationMsg={item?.message}
                      msgTime={item?.created_at}
                      id={item?.id}
                      is_read={item?.is_read}
                      iconColor="#C5F2EC"
                      iconName="SS"
                    />
                  </View>
                );
              })}
          </View>
          {getdatalength > notifiData?.length && notifiData?.length != 0 && (
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {},
  mainView: {
    // flex: 0,
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
  loader: {
    height: "95%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFCCE",
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
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
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
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    // width: "80%",
    alignSelf: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    elevation: 5,
    width: 300,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 4,
    elevation: 2,
    marginTop: 15,
    width: 100,
    alignSelf: "center",
  },
  img: {
    height: 236,
    width: 236,
  },
});
