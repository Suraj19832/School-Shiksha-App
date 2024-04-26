import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  AntDesign,
  Octicons,
  MaterialIcons,
  FontAwesome6,
} from "@expo/vector-icons";

const Footer = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleTabPress("Home")}
      >
        <Image
          source={require("./../assets/img/home.png")}
          style={[styles.img, selectedTab === "Home" && styles.selectedIcon]}
        />
        <Text
          style={[styles.text, selectedTab === "Home" && styles.selectedText]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleTabPress("Refer")}
      >
        <Image
          source={require("./../assets/img/refer.png")}
          style={[styles.img, selectedTab === "Refer" && styles.selectedIcon]}
        />
        <Text
          style={[styles.text, selectedTab === "Refer" && styles.selectedText]}
        >
          Refer
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleTabPress("Query")}
      >
        <Image
          source={require("./../assets/img/question.png")}
          style={[styles.img, selectedTab === "Query" && styles.selectedIcon]}
        />
        <Text
          style={[styles.text, selectedTab === "Query" && styles.selectedText]}
        >
          Query
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleTabPress("Contact")}
      >
        <Image
          source={require("./../assets/img/Contack_Icon.png")}
          style={[styles.img, selectedTab === "Contact" && styles.selectedIcon]}
        />
        <Text
          style={[
            styles.text,
            selectedTab === "Contact" && styles.selectedText,
          ]}
        >
          Contact
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    // marginTop: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0, 54, 126, 1)",
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
    color: "#fff",
    fontSize: 13,
    lineHeight: 19.5,
    fontWeight: "500",
  },
  img: {
    height: 35,
    width: 35,
  },
  selectedIcon: {
    tintColor: "rgba(255, 227, 128, 1)",
  },
  selectedText: {
    color: "rgba(255, 227, 128, 1)",
  },
});

export default Footer;
