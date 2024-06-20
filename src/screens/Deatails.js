import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Linking,
  Animated,
  RefreshControl,
  Platform,
  ToastAndroid,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../components/Header";
import { useRoute } from "@react-navigation/native";
import {
  GetfetchDataWithParams,
  objectToFormData,
  postDataWithFormDataWithToken,
} from "../../Helper/Helper";
import { Entypo, Feather } from "@expo/vector-icons";
import { AuthContext } from "../../Utils/context/AuthContext";

const BannerCarousel = ({ bannerData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const images = bannerData;

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        if (flatListRef.current) {
          flatListRef.current.scrollToIndex({
            index: nextIndex,
            animated: true,
          });
        }
        return nextIndex;
      });
    }, 2000); // 2000ms for 2 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);
  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        <View style={styles.pagination}>
          {images?.length > 0 &&
            images.map((_, index) => (
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
        source={{ uri: item.banner_image }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
  return (
    <View style={{ position: "relative" }}>
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
  );
};
const Details = ({ navigation }) => {
  const route = useRoute();
  const { userToken } = useContext(AuthContext);
  const {
    collegeName,
    courseName,
    courseid,
    heading,
    id,
    organization_Id,
    Location,
    IncomeCertificateRequired,
    aadharRequired,
    ServiceName,
    GuardiansDetailsRequired,
    PassportPhotoRequired,
    TermAndConditionRequird,
    EducationFieldRequired,
    feetype,
  } = route.params;

  function firstWordPicker(name) {
    const value = name.split(" ");
    return value[0];
  }

  const showToast = (message) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      alert(message);
    }
  };
  const [bannerData, setBannerData] = useState([]);
  const [isLoadingpage, setisLoadingpage] = useState(true);
  const [isLoadingcard, setisLoadingcard] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    console.log("1111111111111111111111");
    const params = {
      organization_id: organization_Id,
    };
    GetfetchDataWithParams("master/organization-banner", params)
      .then((res) => {
        setBannerData(res.data);
        setisLoadingpage(false);
        console.log(res.data, "Banner Data");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [organization_Id]);

  const [detailsData, setDetailsData] = useState([]);
  const [callShow, setCallIcon] = useState(false);
  async function fetchUserData(endpoint, id) {
    try {
      const params = {
        organization_course_id: id,
      };

      GetfetchDataWithParams(endpoint, params).then((res) => {
        setDetailsData(res?.data);
        // const special = JSON.parse(res?.data?.required_field);
        // console.log(
        //   special,
        //   "<<<<<<<<<<<<<<<<<99999999999999999999999999999999999999999999999<<<response"
        // );
        setisLoadingcard(false);
        if (res?.data?.required_field) {
          const requiredFieldz = JSON.parse(res?.data?.required_field);
          const isCallRequired = requiredFieldz.is_call_required;

          if (isCallRequired === "yes") {
            setCallIcon(true);
          } else {
            setCallIcon(false);
          }
        } else {
          setCallIcon(false);
          console.log("call number is null or undefined");
        }
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  useEffect(() => {
    console.log("33333333333333333333333333");
    fetchUserData("master/course-details", courseid);
  }, [courseid]);

  const whatsappclicked = (phonenumber) => {
    const whatsappUrl = `tel:${phonenumber}`;
    Linking.openURL(whatsappUrl);
  };

  const DetailsCard = ({ extraFields }) => {
    const renderItem = ({ item }) => (
      <View
        key={item.key}
        style={{
          flex: 1,
          flexDirection: "column",
          margin: 5,
          width: "48%", // Adjusting the width to fit two items in a row with spacing
          paddingHorizontal: 8,
        }}
      >
        <Text
          style={{
            color: "#01265B",
            fontWeight: "600",
            fontSize: 14,
            alignSelf: "baseline",
            paddingVertical: 3,
          }}
        >
          {item.key}
        </Text>
        <Text
          style={{
            color: "#595959",
            fontWeight: "700",
            fontSize: 12,
            alignSelf: "baseline",
          }}
        >
          {item.value}
        </Text>
      </View>
    );

    const data = extraFields
      ? Object.entries(extraFields).map(([key, value]) => ({ key, value }))
      : [];

    return (
      <FlatList
        contentContainerStyle={{
          backgroundColor: "#E2FDFF",
        }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
      />
    );
  };

  const navigateToForm = (
    navigation,
    collegeName,
    courseName,
    id,
    IncomeCertificateRequired,
    aadharRequired,
    logo,
    orgId,
    register_through,
    url
  ) => {
    console.log(courseid, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    const postData = {
      organization_course_id: courseid,
    };
    const formDatablock = objectToFormData(postData);
    showToast("wait a second ...");
    postDataWithFormDataWithToken(
      "/student/external-link-records",
      formDatablock,
      userToken
    )
      .then((res) => {
        // console.log(res?.status)
        if (res?.status) {
          if (register_through === "internal_form_submit") {
            navigation.navigate("freeAdmissionForm", {
              collegeName,
              courseName,
              id,
              IncomeCertificateRequired,
              aadharRequired,
              logo,
              courseid,
            });
          } else {
            Linking.openURL(url);
          }
        } else {
          showToast("something went wrong");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        showToast("Server Issue");
      });
  };

  const handleRefresh = () => {
    console.log("redreeeeeeeeeeeeeeeeeeeeeee");
    setRefreshing(true);
    fetchUserData("master/course-details", courseid)
      .then(() => {
        setRefreshing(false);
      })
      .catch((error) => {
        console.error("Error refreshing data:", error);
        setRefreshing(false);
      });
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
        <Header title={`${heading} List`} navigateTo={navigation.goBack} />
        <View style={styles.container12}>
          {[...Array(1)].map((_, index) => (
            <Animated.View
              key={index}
              style={[styles.placeholder, { opacity, height: "25%" }]}
            />
          ))}
          <Animated.View
            style={[
              styles.placeholder,
              {
                opacity,
                height: "45%",
                width: "100%",
                borderRadius: 20,
                alignSelf: "center",
              },
            ]}
          />
        </View>
      </>
    );
  };

  if (isLoadingpage || isLoadingcard) {
    return <CardSkeleton />;
  }
  const formatKey = (key) => {
    return key
      ?.replace(/_/g, " ")
      ?.replace(/\b\w/g, (char) => char.toUpperCase());
  };
  const formatAmount = (amount) => {
    return `₹ ${amount.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} `;
  };
  const formatCourseDuration = (duration) => {
    if (duration == "1") {
      return "1 Month";
    } else if (parseInt(duration) > 1) {
      return `${duration} Months`;
    }
    return duration;
  };
  let extraFields = JSON.parse(detailsData?.extra_data);

  console.log(extraFields, ":::::::|||||||||||||||||||||||");
  if (detailsData?.eligibility != null && detailsData?.eligibility != "") {
    extraFields = {
      [formatKey("eligibility")]: detailsData?.eligibility,
      ...extraFields,
    };
  }

  if (detailsData?.course_fees != "0.00") {
    extraFields = {
      [formatKey(feetype)]: formatAmount(detailsData?.course_fees),
      ...extraFields,
    };
  }

  if (detailsData?.last_submission_date != "0000-00-00") {
    extraFields = {
      [formatKey("last_submission_date")]: detailsData?.last_submission_date,
      ...extraFields,
    };
  }

  if (detailsData?.course_duration != "0") {
    extraFields = {
      [formatKey("course_duration")]: formatCourseDuration(
        detailsData?.course_duration
      ),
      ...extraFields,
    };
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={`${heading} LIST`} navigateTo={navigation.goBack} />
      <ScrollView
        style={{ backgroundColor: "#FFFCCE", height: "100%" }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        {bannerData?.length > 0 && <BannerCarousel bannerData={bannerData} />}

        <View style={styles.listContainer}>
          {/* card */}
          <View style={styles.listCard}>
            <View style={styles.cardTop}>
              <View
                style={{
                  backgroundColor: "rgba(255, 199, 0, 0.5)",
                  width: 55,
                  height: 55,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ height: 55, width: 55, borderRadius: 50 }}
                  source={{ uri: detailsData?.logo }}
                  resizeMode="cover"
                />
              </View>
              <View style={{ gap: 10, paddingRight: 50 }}>
                <Text
                  style={{
                    color: "rgba(55, 55, 55, 1)",
                    fontWeight: "600",
                    fontSize: 18,
                  }}
                >
                  {collegeName}
                </Text>

                {Location === "yes" && (
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 4,
                      alignItems: "center",
                    }}
                  >
                    <Entypo name="location" size={12} color="#373737" />
                    <View style={{ paddingRight: 20 }}>
                      <Text
                        style={{
                          fontSize: 10,
                          color: "#373737",
                          fontWeight: "500",
                        }}
                      >
                        {detailsData?.block_name}, {detailsData?.district_name},
                        {detailsData?.state_name}{" "}
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            </View>

            <View style={styles.course}>
              <Text
                style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
              >
                {ServiceName} -
              </Text>

              <Text
                style={{ color: "#595959", fontWeight: "600", fontSize: 14 }}
              >
                {courseName}
              </Text>
            </View>

            <DetailsCard extraFields={extraFields} />

            <View style={{ gap: 20 }}>
              <Text
                style={{
                  paddingHorizontal: 20,
                  fontWeight: "600",
                  color: "#00367E",
                  fontSize: 22,
                }}
              >
                {firstWordPicker(ServiceName)} Description
              </Text>
              <Text
                style={{
                  paddingHorizontal: 20,
                  color: "#373737",
                  fontWeight: "400",
                  fontSize: 14,
                }}
              >
                {detailsData.course_details}
              </Text>
            </View>
            <View style={styles.cardButtons}>
              {callShow ? (
                <TouchableOpacity
                  style={{
                    borderColor: "rgba(5, 105, 250, 1)",
                    borderWidth: 1,
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                    borderRadius: 30,
                    bottom: 5,
                  }}
                  onPress={() => whatsappclicked(detailsData?.mobile)}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <Feather
                      name="phone-call"
                      size={15}
                      color="rgba(5, 103, 245, 1)"
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "500",
                        lineHeight: 16.41,
                        color: "rgba(5, 103, 245, 1)",
                      }}
                    >
                      Call Now
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                ""
              )}

              <TouchableOpacity
                onPress={() =>
                  navigateToForm(
                    navigation,
                    collegeName,
                    courseName,
                    id,
                    IncomeCertificateRequired,
                    aadharRequired,
                    TermAndConditionRequird,
                    EducationFieldRequired,
                    PassportPhotoRequired,
                    GuardiansDetailsRequired,
                    detailsData?.logo,
                    courseid,
                    detailsData?.register_through,
                    detailsData?.url
                  )
                }
              >
                <LinearGradient
                  colors={["#03357D", "#0569FA"]}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={[styles.buttonbox, { justifyContent: "center" }]}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "500",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      Apply Now
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    marginBottom: 48,
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
    height: 220,
    width: "100%",
  },
  imageContainer: {
    width: 360,
    height: 162, // Adjust based on your requirement
    borderRadius: 10,
  },
  listContainer: {
    marginTop: 20,
    width: "100%",
    height: "auto",
    alignItems: "center",
  },
  listCard: {
    textAlign: "center",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 20,
    width: "89%",
    gap: 15,
    height: "auto",
    marginBottom: 20,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  course: {
    flexDirection: "row",
    gap: 5,
    paddingHorizontal: 20,
    width: "70%",
    // flexWrap: "wrap",
  },
  aboutCourse: {
    backgroundColor: "#E2FDFF",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    gap: 10,
    padding: 12,
  },
  cardButtons: {
    paddingHorizontal: 20,
    gap: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  imgStyle: {
    height: 162,
    width: 360,
  },
  buttonbox: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0567F5",
    padding: 12,
    paddingHorizontal: 15,
    borderRadius: 30,
    gap: 8,
    width: 130,
    height: 48,
    marginBottom: 10,
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
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: "center",
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
