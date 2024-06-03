import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import Header from "../../components/Header";
import { Image } from "react-native";
import {
  getRequestWithParamsTokens,
  getrequestwithtoken,
} from "../../Helper/Helper";
import { AuthContext } from "../../Utils/context/AuthContext";
import { ActivityIndicator } from "react-native";
import { AntDesign } from "@expo/vector-icons";
// import { Animated } from "react-native-web";

const ApplicationHistory = ({ navigation }) => {
  const [limit, setlimit] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { userToken } = useContext(AuthContext);
  const [ApplicationHistory, setApplicationHistory] = useState([]);
  const [pageloading, setpageloading] = useState(true);
  const [getdatalength, setgetdatalength] = useState([]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };
  useEffect(() => {
    const params = { page: limit };
 if (limit === 1) {
  setApplicationHistory([])    
 }
    getRequestWithParamsTokens("master/order-history", userToken, params).then(
      (res) => {

        if (res.status) {
          setgetdatalength(res?.data?.total_count);
          console.log(
            "))))))))))))))))))))))))##########################",
            res?.data?.total_count
          );
         
          setApplicationHistory((prev) => [...prev, ...res?.data?.items]);
          setIsLoading(false); 
          setpageloading(false);
        }else{
          Alert.alert("Alert", "Error!!!!")
        }
    
      }
    );
  }, [userToken, limit]);

  console.log("shdueud", ApplicationHistory);



  //skeleton design
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
       <Header
        title="Application History"
        navigateTo={() => navigation.goBack("Home")}
      />
            <View style={styles.container}>
          {[...Array(11)].map((_, index) => (
              <Animated.View key={index} style={[styles.placeholder, { opacity }]} />
          ))}
      </View>
    </>

  );
};
  if (pageloading) {
    return (
      // <View>
      //   <Header
      //     title="Application History"
      //     navigateTo={() => navigation.goBack("Home")}
      //   />
      //   <View
      //     style={{
      //       justifyContent: "center",
      //       alignItems: "center",
      //       height: "90%",
      //     }}
      //   >
      //     <ActivityIndicator
      //       size="large"
      //       color="#00367E"
      //       style={{ justifyContent: "center", alignSelf: "center" }}
      //     />
      //   </View>
      // </View>
      <CardSkeleton /> 
    );
  }

  const loadmore = () => {
    setIsLoading(true);
    console.log("Loadmore is clicked");
    setlimit(limit + 1);
    console.log(limit);
    // fetchUserData("master/organization-course", id);
  };
  return (
    <SafeAreaView>
      <Header
        title="Application History"
        navigateTo={() => navigation.goBack("Home")}
      />

      {/* <Header title="Application History" /> */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.reactangleCardConatainer}>
        {ApplicationHistory?.length===0 && (
            <View  style={{width:'100%' ,height:'100%' ,justifyContent:'center' ,alignItems:'center'}}>
                <Image
              source={require("../../assets/img/planet.png")}
              style={styles.img}
            />
            <View style={{flexDirection:'row' ,justifyContent:'center' ,alignItems:'center', gap:10}}>
            <Text style={{fontWeight:'600' ,fontSize:27 ,alignItems:'center'}}>No Record Found</Text>
            {/* <Image
              source={require("../../assets/img/sad-face.png")}
              style={{width:37 ,height:37}}
            /> */}
            </View>

            </View>
          
          )}
          {/* Data from Api  */}
          {ApplicationHistory?.length > 0 &&
            ApplicationHistory.map((item, index) => {
              return item?.status === "completed" ? (
                <View style={styles.reactangleCard} key={index}>
                  <View style={styles.innerCard}>
                    <Image
                      style={{ height: 45, width: 45 }}
                      source={require("../../assets/img/ApplicationStatusSucess.png")}
                    />
                    <View style={{ justifyContent: "center", width: "80%" }}>
                      <Text style={styles.text}>{item?.service_name}</Text>
                      <Text style={styles.dateText}>
                        {formatDate(item?.created_at)}
                      </Text>
                    </View>
                  </View>
                </View>
              ) : item?.status === "pending" ? (
                <View
                  style={[
                    styles.reactangleCard,
                    { backgroundColor: "rgba(255, 238, 205, 1)" },
                  ]}
                >
                  <View style={styles.innerCard}>
                    <Image
                      style={{ height: 45, width: 45 }}
                      source={require("../../assets/img/ApplicationStatusPending.png")}
                    />
                    <View style={{ justifyContent: "center", width: "80%" }}>
                      <Text style={styles.text}>{item?.service_name}</Text>
                      <Text style={styles.dateText}>
                        {formatDate(item?.created_at)}
                      </Text>
                    </View>
                  </View>
                </View>
              ) : item?.status === "rejected" &&
                item?.cancel_reason === null ? (
                <View
                  style={[
                    styles.reactangleCard,
                    { backgroundColor: "rgba(255, 205, 205, 1)" },
                  ]}
                >
                  <View style={styles.innerCard}>
                    <Image
                      style={{ height: 45, width: 45 }}
                      source={require("../../assets/img/ApplicationStatusCancel.png")}
                    />
                    <View style={{ justifyContent: "center", width: "80%" }}>
                      <Text style={styles.text}>{item?.service_name}</Text>
                      <Text style={styles.dateText}>
                        {formatDate(item?.created_at)}
                      </Text>
                    </View>
                  </View>
                </View>
              ) : (
                <View
                  style={[
                    styles.reactangleCard,
                    { backgroundColor: "rgba(255, 205, 205, 1)" },
                  ]}
                >
                  <View style={styles.innerCardCancel}>
                    <Image
                      style={{ height: 45, width: 45 }}
                      source={require("../../assets/img/ApplicationStatusCancel.png")}
                    />
                    <View
                      style={{ justifyContent: "center", width: "80%", gap: 5 }}
                    >
                      <Text style={styles.text}>{item?.service_name}</Text>
                      <Text style={styles.dateText}>
                        {formatDate(item?.created_at)}
                      </Text>
                      <View
                        style={{
                          width: "100%",
                          height: "auto",
                          backgroundColor: "rgba(255, 223, 223, 1)",
                          alignItems: "center",
                          borderRadius: 5,
                        }}
                      >
                        <View
                          style={{ width: "85%", gap: 4, marginVertical: 10 }}
                        >
                          <Text
                            style={{
                              fontWeight: "600",
                              color: "rgba(118, 118, 118, 1) ",
                              fontSize: 10,
                            }}
                          >
                            Reason
                          </Text>
                          <Text style={{ fontWeight: "400", fontSize: 10 }}>
                            {item?.cancel_reason}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}

          {/* success */}
          {/* <View style={styles.reactangleCard}>
            <View style={styles.innerCard}>
              <Image
                style={{ height: 45, width: 45 }}
                source={require("../../assets/img/ApplicationStatusSucess.png")}
              />
              <View style={{justifyContent:'center' ,width:'80%'}}>
                <Text style={styles.text}>
                Free Govt. College Application
                </Text>
                <Text style={styles.dateText}>
                31.04.2024
                </Text>
              </View>
            </View>
          </View> */}

          {/* //pending */}
          {/* <View style={[styles.reactangleCard ,{backgroundColor:'rgba(255, 238, 205, 1)'}]}>
            <View style={styles.innerCard}>
              <Image
                style={{ height: 45, width: 45 }}
                source={require("../../assets/img/ApplicationStatusPending.png")}
              />
              <View style={{justifyContent:'center' ,width:'80%'}}>
                <Text style={styles.text}>
                Paid College Application
                </Text>
                <Text style={styles.dateText}>
                31.03.2024
                </Text>
              </View>
            </View>
          </View> */}

          {/* cancel status without reason  */}
          {/* <View style={[styles.reactangleCard ,{backgroundColor:'rgba(255, 205, 205, 1)'}]}>
            <View style={styles.innerCard}>
              <Image
                style={{ height: 45, width: 45 }}
                source={require("../../assets/img/ApplicationStatusCancel.png")}
              />
              <View style={{justifyContent:'center' ,width:'80%'}}>
                <Text style={styles.text}>
                Online Course Application
                </Text>
                <Text style={styles.dateText}>
                31.03.2024
                </Text>
              </View>
            </View>
          </View> */}

          {/* cancel  with reason*/}
          {/* <View
            style={[
              styles.reactangleCard,
              { backgroundColor: "rgba(255, 205, 205, 1)" },
            ]}
          >
            <View style={styles.innerCardCancel}>
              <Image
                style={{ height: 45, width: 45 }}
                source={require("../../assets/img/ApplicationStatusCancel.png")}
              />
              <View style={{ justifyContent: "center", width: "80%", gap: 5 }}>
                <Text style={styles.text}>Free Govt. College Application</Text>
                <Text style={styles.dateText}>31.03.2024</Text>
                <View
                  style={{
                    width: "100%",
                    height: "auto",
                    backgroundColor: "rgba(255, 223, 223, 1)",
                    alignItems: "center",
                    borderRadius: 5,
                  }}
                >
                  <View style={{ width: "85%", gap: 4, marginVertical: 10 }}>
                    <Text
                      style={{
                        fontWeight: "600",
                        color: "rgba(118, 118, 118, 1) ",
                        fontSize: 10,
                      }}
                    >
                      Reason
                    </Text>
                    <Text style={{ fontWeight: "400", fontSize: 10 }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View> */}
        </View>
        <View>
          {getdatalength > ApplicationHistory?.length && (
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
                  <ActivityIndicator size="small" color="grey" style={{alignSelf:"center" ,width:'100%'}} />
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApplicationHistory;
const styles = StyleSheet.create({
  scrollView: {
    // top:53
    marginBottom: 50,
  },

  reactangleCard: {
    backgroundColor: "#E0FFCD",
    width: "95%",
    height: "auto",
    // marginHorizontal:20
    paddingVertical: 10,

    borderRadius: 6,
    alignItems: "center",
  },
  reactangleCardConatainer: {
    alignItems: "center",
    gap: 15,
    marginVertical: 16,
  },
  innerCard: {
    flexDirection: "row",
    gap: 10,
    width: "89%",
    alignItems: "center",
  },
  text: {
    fontWeight: "500",
    fontSize: 14,
    color: "rgba(26, 26, 26, 1)",
  },
  dateText: {
    fontSize: 10,
    color: "rgba(75, 75, 75, 1)",
    fontWeight: "400",
  },
  innerCardCancel: {
    flexDirection: "row",
    gap: 10,
    width: "89%",
  },
  container: {
    backgroundColor: '#F6F6F6',
    borderRadius: 13,
    padding: 16,
    marginBottom: 16,
    height:'80%'
},
placeholder: {
    backgroundColor: '#ccc',
    height: '10%',
    borderRadius: 4,
    marginBottom: 8,
},
});


