import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Header from "../../components/Header";
import { Image } from "react-native";
import { getrequestwithtoken } from "../../Helper/Helper";
import { AuthContext } from "../../Utils/context/AuthContext";
import { ActivityIndicator } from "react-native";

const ApplicationHistory = ({navigation}) => {
  const { userToken } = useContext(AuthContext);
  const [ApplicationHistory, setApplicationHistory] = useState(null);
  const [pageloading, setpageloading] = useState(true)

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };
  useEffect(() => {
    getrequestwithtoken("master/order-history", userToken).then((res) => {
      console.log(res?.status, "dsdjkpspospojsvsjpogip[rif[gi[ir[iksois[");
       setApplicationHistory(res?.data);
      setpageloading(false)
    });
  }, [userToken]);


  if (pageloading) {
    return (
      <View>
        <Header
          title="Application History"
          navigateTo={() => navigation.goBack("Home")}
        />
        <View style={{justifyContent:'center' ,alignItems:'center'  ,height:'90%'}}>
        <ActivityIndicator
          size="large"
          color="#00367E"
          style={{justifyContent:'center',alignSelf:'center'}}
        />
        </View>
      
      </View>
    );
  }
  return (
    <SafeAreaView >
      <Header title="Application History" navigateTo={() => navigation.goBack("Home")} />
      
      {/* <Header title="Application History" /> */}
      <ScrollView style={styles.scrollView}>
      
        <View style={styles.reactangleCardConatainer}>
          {/* Data from Api  */}
          {ApplicationHistory?.length > 0 &&
            ApplicationHistory.map((item, index) => {
              return item?.status === "completed" ? (
                <View style={styles.reactangleCard}>
                  <View style={styles.innerCard}>
                    <Image
                      style={{ height: 45, width: 45 }}
                      source={require("../../assets/img/ApplicationStatusSucess.png")}
                    />
                    <View style={{ justifyContent: "center", width: "80%" }}>
                      <Text style={styles.text}>
                        {item?.service_name}
                      </Text>
                      <Text style={styles.dateText}>{formatDate(item?.created_at)}</Text>
                    </View>
                  </View>
                </View>
              ) : item.status === "pending" ? (
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
                      <Text style={styles.dateText}>{formatDate(item?.created_at)}</Text>
                    </View>
                  </View>
                </View>
              ) : item?.status === "rejected" && item?.cancel_reason ===null ? (
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
                      <Text style={styles.dateText}>{formatDate(item?.created_at)}</Text>
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
                      <Text style={styles.text}>
                      {item?.service_name}
                      </Text>
                      <Text style={styles.dateText}>{formatDate(item?.created_at)}</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApplicationHistory;
const styles = StyleSheet.create({
    scrollView: {
    // top:53
    marginBottom:50
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
});

//if i have three state cancel, pending and completed how can i render diffrent diffrent jsx based pn condition using ternamry operator because i only know that to use ternary operator using two condition how to deal 3 cndition using ternary oprator i dont know i can use if status== complete?(one jsx for complete ):(one jsx for not complete) i can do that but i want that if ststus complete render complete jsx ,if ststus pending then another jsx and if cancel then another jsx and then whole function is runninf in map return
