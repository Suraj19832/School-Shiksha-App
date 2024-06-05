import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  AntDesign,
  Octicons,
  MaterialIcons,
  FontAwesome6,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("Home");

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
    // Navigate to different screens based on the selected tab
    if (tabName === "Home") {
      // navigation.navigate("Home");
    } else if (tabName === "Refer") {
      // navigation.navigate("refer");
    } else if (tabName === "Query") {
      navigation.navigate("getInTouch");
    } else if (tabName === "Contact") {
      navigation.navigate("contactUs");
    }
  };

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleTabPress("Home")}
      >
        <Image
          source={require("./../assets/icons/home (2).png")}
          style={[styles.img1, selectedTab === "Home" && styles.selectedIcon1]}
        />
        <Text
          style={[styles.text, selectedTab === "Home" && styles.selectedText1]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleTabPress("Refer")}
      >
        <Image
          source={require("./../assets/icons/refer (1).png")}
          style={[styles.img, selectedTab === "Refer" && styles.selectedIcon]}
        />
        <Text style={[styles.text, styles.selectedText]}>Refer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleTabPress("Query")}
      >
        <Image
          source={require("./../assets/icons/question (1).png")}
          style={[styles.img, selectedTab === "Query" && styles.selectedIcon]}
        />
        <Text style={[styles.text, styles.selectedText]}>Query</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleTabPress("Contact")}
      >
        <Image
          source={require("./../assets/icons/customer-service.png")}
          style={[styles.img, selectedTab === "Contact" && styles.selectedIcon]}
        />
        <Text style={[styles.text, styles.selectedText]}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFCCE",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
  },
  iconContainer: {
    alignItems: "center",
  },
  text: {
    marginTop: 5,
    color: "#03357D",
    fontSize: 13,
    lineHeight: 19.5,
    fontWeight: "500",
  },
  img: {
    height: 24,
    width: 24,
    tintColor: "#373737",
  },
  img1: {
    height: 24,
    width: 24,
  },
  // selectedIcon: {
  //   tintColor: "#373737",
  // },
  selectedText: {
    color: "#373737",
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 19.5,
  },
  selectedText1: {
    color: "#03357D",
    fontWeight: "500",
  },
});

export default Footer;
