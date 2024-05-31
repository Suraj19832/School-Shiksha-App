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
  StatusBar,
  useColorScheme,
  Linking,
} from "react-native";
import {
  Ionicons,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import TitleDash from "../../components/TitleDash";

import Footer from "../../components/Footer";
import { AuthContext } from "../../Utils/context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GetfetchDataWithParams,
  getdata,
  getrequestwithtoken,
} from "../../Helper/Helper";
const Dashboard = ({ navigation }) => {
  const [isLoadingpage, setisLoadingpage] = useState(true);
  const [isLoadingcard, setisLoadingcard] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userToken, setuserToken, setmyLoading, profileAllData } =
    useContext(AuthContext);
  const menuWidth = Dimensions.get("window").width * 0.8;

  const menuTranslateX = useRef(new Animated.Value(-menuWidth)).current;

  const colorScheme = useColorScheme();
  const statusBarColor = colorScheme === "dark" ? "black" : "white";

  const [name, setname] = useState();
  const [phone, setphone] = useState();
  const [gender, setgender] = useState();
  const [plan, setplan] = useState();
  const [bannerData, setBannerData] = useState([]);

  const toggleMenu = () => {
    getrequestwithtoken("student/profile", userToken).then((res) => {
      if (res?.status) {
        setname(res?.data?.name);
        setphone(res?.data?.mobile);
        setgender(res?.data?.gender);
        setplan(res?.data?.subscription?.plan_name);
      }
    });

    setIsMenuOpen(!isMenuOpen);
    Animated.timing(menuTranslateX, {
      toValue: isMenuOpen ? -menuWidth : 0,
      duration: 100,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    Animated.timing(menuTranslateX, {
      toValue: -menuWidth,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const images = bannerData;

  const flatListRef = useRef(null);

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems && viewableItems?.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  };

  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        <View style={styles.pagination}>
          {images?.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === activeIndex && styles.paginationDotActive,
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: item?.banner }} // Ensure this URi is correct
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );

  useEffect(() => {
    getrequestwithtoken("master/dashboard-banner", userToken)
      .then((res) => {
        setBannerData(res.data);
        setisLoadingpage(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userToken]);

  const lastIndex = images?.length - 1;

  const setLoopedActiveIndex = (index) => {
    if (index < 0) {
      setActiveIndex(lastIndex);
    } else if (index > lastIndex) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  };

  const cards = [
    {
      title: "Computer Training",
      image: require("../../assets/img/computer.png"),
      status: "active",
    },
    {
      title: "ITI /Diplomatic any Course",
      image: require("../../assets/img/certification.png"),
      status: "inActive",
    },
    {
      title: "Education Govt Scholarship",
      image: require("../../assets/img/degree.png"),
      status: "active",
    },
    {
      title: "Free College Admission",
      image: require("../../assets/img/student.png"),
      status: "active",
    },
    {
      title: "Paid College Admission",
      image: require("../../assets/img/admission.png"),
      status: "inActive",
    },
    {
      title: "Free Govt Certificate Course",
      image: require("../../assets/img/online-certificate.png"),
      status: "active",
    },
    {
      title: "College Admission for Higher Education",
      image: require("../../assets/img/tuition.png"),
      status: "active",
    },
    {
      title: "Online Course",
      image: require("../../assets/img/webinar.png"),
      status: "active",
    },
    {
      title: "Job Campusing",
      image: require("../../assets/img/campus.png"),
      status: "inActive",
    },
    {
      title: "Private Scholarship",
      image: require("../../assets/img/scholarship.png"),
      status: "active",
    },
    {
      title: "Entrance Scholarship",
      image: require("../../assets/img/loan.png"),
      status: "active",
    },
    {
      title: "Merit Scholarship",
      image: require("../../assets/img/university.png"),
      status: "inActive",
    },
  ];
  const [alldata, setalldata] = useState([]);
  useEffect(() => {
    Animated.timing(menuTranslateX, {
      toValue: isMenuOpen ? 0 : -menuWidth,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [isMenuOpen]);
  const handlelogout = () => {
    setuserToken(null);
    AsyncStorage.removeItem("userToken");
    setmyLoading(false);
  };
  const [carddata, setcarddata] = useState([]);
  // useEffect(() => {
  //   const apiUrl = "master/service-type";
  //   getdata(apiUrl)
  //     .then((res) => {
  //       const longheading = res.data.map((item) => item);
  //       setcarddata([]);
  //       longheading?.map(async (item) => {
  //         return await fetchUserData(item);
  //       });
  //       setheading(longheading);
  //       const st_title = res?.data?.map((item) => item.short_name);
  //       setsortheading(st_title);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data in dashboard:", error);
  //     });

  //   getrequestwithtoken("student/profile", userToken).then((res) => {
  //     if (res?.status) {
  //       setname(res?.data?.name);
  //       setphone(res?.data?.mobile);
  //       setgender(res?.data?.gender);
  //       setplan(res?.data?.subscription?.plan_name);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    fetchUserData();
    // getrequestwithtoken("student/profile", userToken).then((res) => {
    //   if (res?.status) {
    //     setname(res?.data?.name);
    //     setphone(res?.data?.mobile);
    //     setgender(res?.data?.gender);
    //     setplan(res?.data?.subscription?.plan_name);
    //   }
    //   console.log(gender)
    // });
  }, []);
  const [activeServices, setActiveServices] = useState([]);
  useEffect(() => {
    getrequestwithtoken("student/profile", userToken).then((res) => {
      console.log(res.data.subscription.plan_services, "lolololololloloo");
      if (res?.status) {
        setname(res?.data?.name);
        setphone(res?.data?.mobile);
        setgender(res?.data?.gender);
        setplan(res?.data?.subscription?.plan_name);
        setActiveServices(res.data.subscription.plan_services);
      }
    });
  }, [gender]);
  console.log("66666", gender);

  const isServiceActive = (serviceId) => {
    return activeServices.includes(serviceId.toString());
  };

  const handleNavigate = (item) => {
    const requiredFields = JSON.parse(item?.required_field);
    const isActive = isServiceActive(item.id);
    if (isActive) {
      navigation.navigate("freeCollege", {
        id: item.id,
        heading: item.service_name,
        searchrequired: requiredFields?.is_search_required,
      });
    } else {
      navigation.navigate("membershipPlan");
    }
  };

  const colorMap = {
    "Secondary Pass Student's Benefits": "#C83000",
    "H.S Pass Student's Benefits": "#004F3C",
    "Graduate Pass Student's Benefits": "#951F1F",
    "Others Benefits": "#60317D",
  };
  async function fetchUserData() {
    try {
      getdata("master/service-type").then((res) => {
        if(res?.status){
          console.log(res.status);
          setcarddata(res?.data);
          setisLoadingcard(false);
          // setmyLoading(false)
        }
      
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  const naviagteToServices = {
    "FREE COLLEGE ADMISSION": "freeCollege",
    "PAID COLLEGE ADMISSION": "membershipPlan",
    "FREE GOVT CERTIFICATE COURSE": "freeGovCertificate",
  };
  const whatsappclicked = () => {
    const whatsappUrl = `whatsapp://send?phone=9088776656`;
    Linking.openURL(whatsappUrl);
  };

  // Skeleton?

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

        <View style={styles.container12}>
          {[...Array(1)].map((_, index) => (
            <>
   <Animated.View
                    key={index}
                    style={[styles.placeholder, { opacity, height: "7%" }]}
                  />

            <Animated.View
              key={index}
              style={[styles.placeholder, { opacity, height: "20%" }]}
            />
            </>

          ))}
           <Animated.View
                    style={[styles.placeholder, { opacity, height: "7%" }]}
                  />
          <Animated.View
            style={[styles.placeholder, { opacity, height: "35%" }]}
          />
              <Animated.View
                    style={[styles.placeholder, { opacity, height: "7%" }]}
                  />
          <Animated.View
            style={[styles.placeholder, { opacity, height: "35%" }]}
          />
        </View>
      </>
    );
  };

  if (isLoadingpage || isLoadingcard) {
    return (
      // <View>
      //   <Header
      //     title="Payment History"
      //     navigateTo={() => navigation.goBack("Home")}
      //   />
      //   <View style={{justifyContent:'center' ,alignItems:'center'  ,height:'90%'}}>
      //   <ActivityIndicator
      //     size="large"
      //     color="#00367E"
      //     style={{justifyContent:'center',alignSelf:'center'}}
      //   />
      //   </View>

      // </View>
      <CardSkeleton />
    );
  }

  // Skeleton End ?

  const truncateMessage = (message, maxLength = 25) => {
    if (message.length > maxLength) {
      return message.substring(0, maxLength) + "...";
    }
    return message;
  };

  return (
    <View style={styles.container}>
      {isMenuOpen && (
        <View
          style={{
            backgroundColor: "#000000B2",
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 10,
            top: 0,
            bottom: 0,
          }}
        ></View>
      )}

      <StatusBar
        animated={true}
        backgroundColor={statusBarColor}
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <View style={styles.menubarDiv}>
        <TouchableOpacity onPress={toggleMenu}>
          <Ionicons name="menu" size={35} color="#00367E" />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <TouchableOpacity onPress={() => whatsappclicked()}>
            <Image
              source={require("../../assets/img/whatsapp.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("notification")}>
            <Image
              source={require("../../assets/icons/notification.png")}
              style={{ width: 25, height: 25, position: "relative" }}
            />
            <View style={styles.online}></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("editProfile")}
            style={{
              backgroundColor: "#00367E",
              height: 35,
              width: 35,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            {profileAllData === "female" ? (
              <Image
                source={require("../../assets/img/human (1).png")}
                style={styles.avatarImg}
              />
            ) : (
              <Image
                source={require("../../assets/img/man (1).png")}
                style={styles.avatarImg}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {isMenuOpen && (
        <Animated.View
          style={[styles.menu, { transform: [{ translateX: menuTranslateX }] }]}
        >
          <TouchableOpacity
            onPress={closeMenu}
            style={[
              styles.closeIcon,
              {
                height: "100%",
                width: "19.6%",
                alignItems: "center",
                right: 0,
              },
            ]}
          >
            <Ionicons
              name="close"
              size={35}
              color="white"
              style={{ justifyContent: "flex-end", paddingRight: 10 }}
            />
          </TouchableOpacity>
          <View style={styles.menuOptionContainer}>
            <View>
              <Image
                style={{
                  width: Dimensions.get("window").width * 0.8,
                  position: "relative",
                  resizeMode: "cover",
                }}
                source={require("../../assets/img/waves.png")}
              />
              <View
                style={{
                  alignItems: "center",
                  position: "absolute",
                  top: "20%",
                  left: "10%",
                  flexDirection: "row",
                  gap: 20,
                }}
              >
                {profileAllData === "female" ? (
                  <Image
                    style={{
                      marginBottom: 12,
                      width: 60,
                      height: 60,
                      resizeMode: "cover",
                    }}
                    source={require("../../assets/img/human (1).png")}
                  />
                ) : (
                  <Image
                    style={{
                      marginBottom: 12,
                      width: 60,
                      height: 60,
                      resizeMode: "cover",
                    }}
                    source={require("../../assets/img/man (1).png")}
                  />
                )}

                <View style={{ marginBottom: 15 }}>
                  <Text
                    style={{
                      color: "white",
                      paddingBottom: 8,
                      fontSize: 18,
                      fontWeight: "700",
                    }}
                  >
                    {name}
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      paddingBottom: 5,
                      fontSize: 12,
                      fontWeight: "500",
                    }}
                  >
                    +91 {phone}
                  </Text>
                  {/* <Image
                    style={{ width: 82, height: 17, marginTop: 5 }}
                    source={require("../../assets/img/premium1.png")}
                  /> */}
                  <View
                    style={{
                      backgroundColor: "#FFAE2B",
                      height: 20,
                      width: "auto",
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                      gap: 4,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="crown"
                      size={10}
                      color="white"
                    />
                    <Text
                      style={{
                        fontWeight: "500",
                        fontSize: 10,
                        color: "white",
                      }}
                    >
                      {plan}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[
                { flexDirection: "row", alignItems: "center", gap: 20 },
                styles.menuItem,
              ]}
            >
              <Image
                style={{ width: 25, height: 25, tintColor: "#435354" }}
                source={require("../../assets/img/data-analytics.png")}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Dashboard", setIsMenuOpen(!isMenuOpen))
                }
              >
                <Text style={styles.menuText}>Dashboard</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hairlineMenu} />
            <View
              style={[
                { flexDirection: "row", alignItems: "center", gap: 20 },
                styles.menuItem,
              ]}
            >
              <Image
                style={{ width: 25, height: 25, tintColor: "#435354" }}
                source={require("../../assets/img/user.png")}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate("editProfile")}
              >
                <Text style={styles.menuText}>View Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hairlineMenu} />

            <View
              style={[
                { flexDirection: "row", alignItems: "center", gap: 20 },
                styles.menuItem,
              ]}
            >
              <Image
                style={{ width: 25, height: 25, tintColor: "#435354" }}
                source={require("../../assets/img/file.png")}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    "paymentHistory",
                    setIsMenuOpen(!isMenuOpen)
                  )
                }
              >
                <Text style={styles.menuText}>Transaction History</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hairlineMenu} />
            <View
              style={[
                { flexDirection: "row", alignItems: "center", gap: 20 },
                styles.menuItem,
              ]}
            >
              <Image
                style={{ width: 25, height: 25, tintColor: "#435354" }}
                source={require("../../assets/img/writing.png")}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("howToApply", setIsMenuOpen(!isMenuOpen))
                }
              >
                <Text style={styles.menuText}>How to apply</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hairlineMenu} />
            <View
              style={[
                { flexDirection: "row", alignItems: "center", gap: 20 },
                styles.menuItem,
              ]}
            >
              <Image
                style={{ width: 25, height: 25, tintColor: "#435354" }}
                source={require("../../assets/img/question.png")}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("getInTouch", setIsMenuOpen(!isMenuOpen))
                }
              >
                <Text style={styles.menuText}>Query</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hairlineMenu} />
            <View
              style={[
                { flexDirection: "row", alignItems: "center", gap: 20 },
                styles.menuItem,
              ]}
            >
              <Image
                style={{ width: 25, height: 25, tintColor: "#435354" }}
                source={require("../../assets/icons/community.png")}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    "membershipPlan",
                    setIsMenuOpen(!isMenuOpen)
                  )
                }
              >
                <Text style={styles.menuText}>Membership Plan</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hairlineMenu} />
            <View
              style={[
                { flexDirection: "row", alignItems: "center", gap: 20 },
                styles.menuItem,
              ]}
            >
              <Image
                style={{ width: 25, height: 25, tintColor: "#435354" }}
                source={require("../../assets/img/contact-us.png")}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("contactUs", setIsMenuOpen(!isMenuOpen))
                }
              >
                <Text style={styles.menuText}>Contact Us</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hairlineMenu} />
            <View
              style={[
                { flexDirection: "row", alignItems: "center", gap: 20 },
                styles.menuItem,
              ]}
            >
              <Image
                style={{ width: 25, height: 25, tintColor: "#435354" }}
                source={require("../../assets/img/tracking.png")}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    "applicationHistory",
                    setIsMenuOpen(!isMenuOpen)
                  )
                }
              >
                <Text style={styles.menuText}>Application History</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hairlineMenu} />
            <View
              style={[
                { flexDirection: "row", alignItems: "center", gap: 20 },
                styles.menuItem,
              ]}
            >
              <Image
                style={{ width: 25, height: 25, tintColor: "#435354" }}
                source={require("../../assets/icons/reset-password.png")}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    "resetPassword",
                    setIsMenuOpen(!isMenuOpen)
                  )
                }
              >
                <Text style={styles.menuText}>Change Password</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hairlineMenu} />
            <View
              style={[
                { flexDirection: "row", alignItems: "center", gap: 20 },
                styles.menuItem,
              ]}
            >
              <Image
                style={{ width: 25, height: 25, tintColor: "#435354" }}
                source={require("../../assets/img/logout.png")}
              />
              <TouchableOpacity
                onPress={
                  // navigation.navigate("Login", setIsMenuOpen(!isMenuOpen))
                  handlelogout
                }
              >
                <Text style={styles.menuText}>Logout</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hairlineMenu} />
          </View>
        </Animated.View>
      )}
      <View style={styles.hairline} />
      <ScrollView>
        <View style={{ paddingTop: 18, position: "relative" }}>
          <FlatList
            ref={flatListRef}
            data={images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            onViewableItemsChanged={onViewableItemsChanged}
          />
          {renderPagination()}
        </View>
        <View>
          {/* new start  */}
          <View>
            {/* data from api  */}
            <View style={{ paddingBottom: 20 }}>
              {carddata?.map((item, index) => {
                return (
                  <View key={index}>
                    <TitleDash
                      title={item?.long_name}
                      primaryColor={colorMap[item?.long_name]}
                    />
                    <View style={{ alignItems: "center" }}>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 8,
                          justifyContent: "center",
                        }}
                      >
                        {carddata[index]?.services?.map((cd) => {
                          const isActive = isServiceActive(cd.id.toString());
                          return (
                            <>
                              <TouchableOpacity
                                style={styles.card}
                                onPress={() => handleNavigate(cd)}
                                // onPress={() =>
                                //   navigation.navigate("freeCollege", {
                                //     id: cd?.id,
                                //     heading: cd?.service_name,
                                //   })
                                // }
                              >
                                <View
                                  style={{
                                    position: "absolute",
                                    top: 10,
                                    right: 5,
                                  }}
                                >
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
                                    style={[
                                      styles.image,
                                      { height: 45, width: 45 },
                                    ]}
                                    source={{ uri: cd.image }}
                                  />
                                </View>
                                <Text style={styles.textStyle}>
                                  {truncateMessage(cd.service_name)}
                                </Text>
                              </TouchableOpacity>
                            </>
                          );
                        })}
                      </View>

                      <View style={{ paddingTop: 20 }}>
                        <TouchableOpacity
                          style={styles.button}
                          onPress={() =>
                            navigation.navigate("mpBenefits", {
                              sortheading: item?.short_name,
                              heading: item?.long_name,
                            })
                          }
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Text style={styles.text}>Show More</Text>
                            <MaterialIcons
                              name="keyboard-arrow-right"
                              size={22}
                              color="#435354"
                            />
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
            {/* end here  */}
          </View>
        </View>

        {/* Dummy Data  */}

        {/* <View>
          <TitleDash
            title="Secondary Pass Student’s Benefits"
            primaryColor="#C83000"
          />
          <View style={{ alignItems: "center" }}>
            <View
              style={{ flexDirection: "row", gap: 8, justifyContent: "center" }}
            >
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate("computerCollegeList")}
              >
                {cards[0].status === "inActive" && (
                  <View style={styles.lockContainer}>
                    <Fontisto name="locked" />
                  </View>
                )}
                <View style={styles.imgContainer}>
                  <Image source={cards[0].image} style={styles.image} />
                </View>
                <Text style={styles.textStyle}>{cards[0].title}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate("membershipPlan")}
              >
                {cards[1].status === "inActive" && (
                  <View style={styles.lockContainer}>
                    <Fontisto name="locked" color="white" size={17} />
                  </View>
                )}
                <View style={styles.imgContainer}>
                  <Image source={cards[1].image} style={styles.image} />
                </View>
                <Text style={styles.textStyle}>{cards[1].title}</Text>
              </TouchableOpacity>
              <View style={styles.card}>
                {cards[2].status === "inActive" && (
                  <View style={styles.lockContainer}>
                    <Fontisto name="locked" color="white" size={17} />
                  </View>
                )}
                <View style={styles.imgContainer}>
                  <Image source={cards[2].image} style={styles.image} />
                </View>
                <Text style={styles.textStyle}>{cards[2].title}</Text>
              </View>
            </View>

            <View style={{ paddingTop: 20 }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("mpBenefits")}
              >
                <Text style={styles.text}>{"Show More >"}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TitleDash
            title="H.S Pass Student’s Benefits"
            primaryColor="#004F3C"
          />
          <View style={{ alignItems: "center" }}>
            <View
              style={{ flexDirection: "row", gap: 8, justifyContent: "center" }}
            >
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate("freeCollege")}
              >
                {cards[3].status === "inActive" && (
                  <View style={styles.lockContainer}>
                    <Fontisto name="locked" color="white" size={17} />
                  </View>
                )}
                <View style={styles.imgContainer}>
                  <Image source={cards[3].image} style={styles.image} />
                </View>
                <Text style={styles.textStyle}>{cards[3].title}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.card}
                // onPress={() => navigation.navigate("paidCollegeList")}
                onPress={() => navigation.navigate("membershipPlan")}
              >
                {cards[4].status === "inActive" && (
                  <View style={styles.lockContainer}>
                    <Fontisto name="locked" color="white" size={17} />
                  </View>
                )}
                <View style={styles.imgContainer}>
                  <Image source={cards[4].image} style={styles.image} />
                </View>
                <Text style={styles.textStyle}>{cards[4].title}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate("freeGovCertificate")}
              >
                {cards[5].status === "inActive" && (
                  <View style={styles.lockContainer}>
                    <Fontisto name="locked" color="white" size={17} />
                  </View>
                )}
                <View style={styles.imgContainer}>
                  <Image source={cards[5].image} style={styles.image} />
                </View>
                <Text style={styles.textStyle}>{cards[5].title}</Text>
              </TouchableOpacity>
            </View>

            <View style={{ paddingTop: 20 }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("hsBenefits")}
              >
                <Text style={styles.text}>{"Show More >"}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TitleDash
            title="Graduate Pass Student’s Benefits"
            primaryColor="#951F1F"
          />
          <View style={{ alignItems: "center" }}>
            <View
              style={{ flexDirection: "row", gap: 8, justifyContent: "center" }}
            >
              <View style={styles.card}>
                {cards[6].status === "inActive" && (
                  <View style={styles.lockContainer}>
                    <Fontisto name="locked" color="white" size={17} />
                  </View>
                )}
                <View style={styles.imgContainer}>
                  <Image source={cards[6].image} style={styles.image} />
                </View>
                <Text style={styles.textStyle}>{cards[6].title}</Text>
              </View>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate("onlineCourses")}
              >
                {cards[7].status === "inActive" && (
                  <View style={styles.lockContainer}>
                    <Fontisto name="locked" color="white" size={17} />
                  </View>
                )}
                <View style={styles.imgContainer}>
                  <Image source={cards[7].image} style={styles.image} />
                </View>
                <Text style={styles.textStyle}>{cards[7].title}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate("membershipPlan")}
              >
                {cards[8].status === "inActive" && (
                  <View style={styles.lockContainer}>
                    <Fontisto name="locked" color="white" size={17} />
                  </View>
                )}
                <View style={styles.imgContainer}>
                  <Image source={cards[8].image} style={styles.image} />
                </View>
                <Text style={styles.textStyle}>{cards[8].title}</Text>
              </TouchableOpacity>
            </View>

            <View style={{ paddingTop: 20 }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("graduateBenefits")}
              >
                <Text style={styles.text}>{"Show More >"}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TitleDash title="Others Benefits" primaryColor="#60317D" />
          <View style={{ alignItems: "center" }}>
            <View
              style={{ flexDirection: "row", gap: 8, justifyContent: "center" }}
            >
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate("membershipPlan")}
              >
                {cards[9].status != "inActive" && (
                  <View style={styles.lockContainer}>
                    <Fontisto name="locked" color="white" size={17} />
                  </View>
                )}
                <View style={styles.imgContainer}>
                  <Image source={cards[9].image} style={styles.image} />
                </View>
                <Text style={styles.textStyle}>{cards[9].title}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate("paidCollegeList")}
              >
                {cards[10].status === "inActive" && (
                  <View style={styles.lockContainer}>
                    <Fontisto name="locked" color="white" size={17} />
                  </View>
                )}
                <View style={styles.imgContainer}>
                  <Image source={cards[10].image} style={styles.image} />
                </View>
                <Text style={styles.textStyle}>{cards[10].title}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate("membershipPlan")}
              >
                {cards[11].status === "inActive" && (
                  <View style={styles.lockContainer}>
                    <Fontisto name="locked" color="white" size={17} />
                  </View>
                )}
                <View style={styles.imgContainer}>
                  <Image source={cards[11].image} style={styles.image} />
                </View>
                <Text style={styles.textStyle}>{cards[11].title}</Text>
              </TouchableOpacity>
            </View>

            <View style={{ paddingVertical: 20 }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("otherBenefits")}
              >
                <Text style={styles.text}>{"Show More >"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View> */}

        {/* dummy data end here  */}
      </ScrollView>
      <Footer />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hairline: {
    backgroundColor: "#D9D9D9",
    height: 2,
    width: "100%",
  },
  imageContainer: {
    width: 360,
    height: 190, // Adjust based on your requirement
    borderRadius: 10,
  },
  menubarDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "white",
  },
  imgStyle: {
    height: Dimensions.get("window").height * 0.29,
    width: Dimensions.get("window").width * 0.999,
    borderRadius: 10,
  },
  paginationContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "white",
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: "#00367E",
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  avatarImg: {
    width: 35,
    height: 35,
  },
  menu: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: Dimensions.get("window").width,
    // backgroundColor: "#000000B2", // Set your desired background color
    zIndex: 14,
    elevation: 10, // For Android elevation effect
  },
  menuOptionContainer: {
    width: Dimensions.get("window").width * 0.8,
    // height: Dimensions.get("window").height * 1.04,
    height: "100%",
    backgroundColor: "#FFFCCE",
  },
  closeIcon: {
    alignSelf: "flex-end",
    right: "4%",
    // marginTop: 0,
    position: "absolute",
  },
  menuItem: {
    paddingVertical: Dimensions.get("window").width * 0.035,
    paddingHorizontal: 20,
    // borderBottomWidth: 1,

    borderBottomColor: "#D9D9D9",
  },
  menuText: {
    fontSize: 18,
    color: "#435354",
    fontWeight: "500",
  },
  hairlineMenu: {
    backgroundColor: "#00367E33",
    height: 1,
    width: "85%",
    alignSelf: "center",
  },
  online: {
    position: "absolute",
    height: 10,
    width: 10,
    backgroundColor: "#FF0000",
    borderRadius: 50,
    right: 3,
    top: 0,
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
    width: 360,
    height: 190,
    marginBottom: 10,
    borderRadius: 10,
  },
  textStyle: {
    textAlign: "center",
    color: "white",
    fontSize: 13,
    fontWeight: "500",
  },
  lockContainer: {
    position: "absolute",
    top: 6,
    right: 6,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1, // Ensure the lock image is above other content
  },

  showMore: {
    backgroundColor: "#F6B02E",
    width: 200,
    height: 40,
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FFFAE7",
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1, // Specify border width
    borderColor: "#DDDDDD",
  },
  text: {
    color: "#435354",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
  },
  container12: {
    backgroundColor: "#F6F6F6",
    borderRadius: 13,
    padding: 16,
    marginBottom: 16,
    height: "100%",
    width: "100%",
  },
  placeholder: {
    backgroundColor: "#ccc",
    height: "20%",
    width: "100%",
    borderRadius: 4,
    marginBottom: 8,
  },
});

//i will tell you the senario there is 2 api from first api will give the title and second api will take the title name and give data corresponsing to the title . i show tell you  the design first title is render and then data belong to that title is render and again another title and then data regarding second title and show on how xan i achive that
