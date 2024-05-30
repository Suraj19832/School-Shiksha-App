import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Linking,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../components/Header";
import { getdata, postDataWithFormData } from "../../Helper/Helper";
const CareerGuidance = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageData, setImageData] = useState([]);
  const [bannerType, setBannerType] = useState([]);

  const images = imageData;

  const flatListRef = useRef(null);

  // const images = [
  //   require("../../assets/img/onlinecourselist.png"),
  //   require("../../assets/img/slider3.png"),
  //   require("../../assets/img/slider2.png"),
  // ];
  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  };
  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        <View style={styles.pagination}>
          {images.map((_, index) => (
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
    // console.log(item.banner_image, "helloooooooooo"),
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
        // onError={(error) => console.log("Error loading image:", error)}
      />
    </View>
  );

  useEffect(() => {
    getdata("master/banner-types")
      .then((res) => {
        const values = res.data.map((item) => item.type);
        setBannerType(values, "bnnere tyoe is here");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const formData = new FormData();
    bannerType.forEach((element) => {
      if (element === "career_guidance") {
        formData.append("type", element);
      }
    });
    postDataWithFormData("master/career-guidance-banner", formData)
      .then((res) => {
        setImageData(res.data);
        console.log(res.data, "image data we got from here");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [bannerType]);

  const whatsappclicked = () => {
    const whatsappUrl = `whatsapp://send?phone=${7908154725}`;
    Linking.openURL(whatsappUrl);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Career Guidance" navigateTo={navigation.goBack} />
      <ScrollView style={{ backgroundColor: "#FFFCCE", height: "100%" }}>
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

        <View style={styles.listContainer}>
          <View style={{ marginTop: 23, marginBottom: 18 }}>
            <Text style={styles.heading}>Career Guidance</Text>
          </View>
          <View style={styles.listCart}>
            <View style={styles.cardTop}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    backgroundColor: "rgba(255, 199, 0, 0.5)",
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    style={{ height: 40, width: 40 }}
                    source={require("../../assets/splash.png")}
                  />
                </View>

                <Text
                  style={{
                    color: "rgba(55, 55, 55, 1)",
                    fontWeight: "600",
                    fontSize: 18,
                  }}
                >
                  Career Councelling
                </Text>
              </View>
              <TouchableOpacity onPress={() => whatsappclicked()}>
                <Image
                  source={require("../../assets/icons/whatsapp.png")}
                  style={{ width: 30, height: 30 }}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.aboutCourse}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: "rgba(1, 38, 91, 1)",
                    fontWeight: "600",
                    fontSize: 14,
                    lineHeight: 20,
                  }}
                >
                  Course
                </Text>
                <Text
                  style={{
                    color: "rgba(1, 38, 91, 1)",
                    fontWeight: "600",
                    fontSize: 14,
                    lineHeight: 20,
                  }}
                >
                  Eligibility
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: "#595959",
                    fontWeight: "700",
                    fontSize: 12,
                    lineHeight: 18,
                  }}
                >
                  Suggest Course
                </Text>
                <Text
                  style={{
                    color: "#595959",
                    fontWeight: "700",
                    fontSize: 12,
                    lineHeight: 18,
                  }}
                >
                  10th/ 12th/Graduate
                </Text>
              </View>
            </View>

            <View style={styles.cardButtons}>
              <TouchableOpacity
                onPress={() => navigation.navigate("careerGuidanceForm")}
              >
                <LinearGradient
                  colors={["#03357D", "#0569FA"]}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={[
                    styles.buttonbox,
                    { justifyContent: "center", paddingHorizontal: 30 },
                  ]}
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
                        fontSize: 14,
                        fontWeight: "500",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        color: "white",
                        lineHeight: 16.41,
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

export default CareerGuidance;
const styles = StyleSheet.create({
  container: {},

  listContainer: {
    width: "100%",
    height: "auto",
    alignItems: "center",
  },
  heading: {
    color: "#00367E",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 30,
  },
  listCart: {
    textAlign: "center",

    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",

    borderRadius: 20,
    width: "89%",
    gap: 15,
    height: "auto",
    marginBottom: 20,
    paddingVertical: 5,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    justifyContent: "space-between",
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
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    alignSelf: "center",
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
    width: "auto",
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
  imageContainer: {
    width: 360,
    height: 162,
    borderRadius: 10,
  },
  image: {
    height: 220,
    width: "100%",
  },
  imgStyle: {
    height: 172,
    width: 360,
  },
});
