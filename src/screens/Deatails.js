import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  Modal,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
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
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../components/Header";
import { useRoute } from "@react-navigation/native";
// import { FlatList } from "react-native-web";

const Details = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const images = [
    require("../../assets/img/freeCollege.png"),
    require("../../assets/img/slider3.png"),
    require("../../assets/img/slider2.png"),
  ];
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
  const route = useRoute();
  const { collegeName, courseName } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Free College List" navigateTo={navigation.goBack} />
      <ScrollView style={{ backgroundColor: "#FFFCCE" }}>
        <View style={{ position: "relative" }}>
          <FlatList
            ref={flatListRef}
            data={images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Image style={styles.imgStyle} source={item} resizeMode="cover" />
            )}
            keyExtractor={(item, index) => index.toString()}
            onViewableItemsChanged={onViewableItemsChanged}
          />
          {renderPagination()}
        </View>
        <View style={styles.listContainer}>
          {/* cardd */}
          <View style={styles.listCart}>
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
                  style={{}}
                  source={require("../../assets/img/college.png")}
                />
              </View>

              <Text
                style={{
                  color: "rgba(55, 55, 55, 1)",
                  fontWeight: "600",
                  fontSize: 18,
                }}
              >
                {collegeName}
              </Text>
            </View>
            <View style={styles.course}>
              <Text
                style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
              >
                Course Name -
              </Text>
              <Text
                style={{ color: "#595959", fontWeight: "600", fontSize: 14 }}
              >
                {courseName}
              </Text>
            </View>

            <View style={styles.aboutCourse}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
                >
                  Course Duration
                </Text>
                <Text
                  style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
                >
                  Last Submission Date{" "}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#595959", fontWeight: "700", fontSize: 12 }}
                >
                  4 Months
                </Text>
                <Text
                  style={{ color: "#595959", fontWeight: "700", fontSize: 12 }}
                >
                  22.04.2024
                </Text>
              </View>
            </View>
            <View style={{ gap: 20 }}>
              <Text
                style={{
                  paddingHorizontal: 20,
                  fontWeight: "600",
                  color: "#00367E",
                  fontSize: 22,
                }}
              >
                Course Description
              </Text>
              <Text
                style={{
                  paddingHorizontal: 20,
                  color: "#373737",
                  fontWeight: "400",
                  fontSize: 14,
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </View>
            <View style={styles.cardButtons}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("freeAdmissionForm", {
                    collegeName,
                    courseName,
                  })
                }
              >
                <LinearGradient
                  colors={["#03357D", "#0569FA"]} // Define your gradient colors here
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
                      Apply Link
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
    // backgroundColor: "#FFFCCE",
    // top: 53,
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
  listContainer: {
    marginTop: 20,
    width: "100%",
    height: "auto",
    alignItems: "center",
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
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    // padding: 12,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  course: {
    flexDirection: "row",
    gap: 5,
    // padding: 12,
    paddingHorizontal: 20,
  },
  aboutCourse: {
    backgroundColor: "#E2FDFF",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    gap: 10,
    padding: 12,
    // position:'absolute'
  },
  cardButtons: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: {
    // height: Dimensions.get("window").height * 0.29,
    // width: Dimensions.get("window").width * 0.999,
    // borderRadius: 10,
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
});
