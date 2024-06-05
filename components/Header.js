import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  useColorScheme,
} from "react-native";
import React from "react";

const Header = ({ navigateTo, title, titleColor }) => {
  const colorScheme = useColorScheme();
  const statusBarColor = colorScheme === "dark" ? "black" : "white";
  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor={statusBarColor}
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <View style={styles.topBar}>
        <View style={styles.topBar_box}>
          <TouchableOpacity onPress={navigateTo}>
            <Image
              source={require("../assets/icons/arrow.png")}
              style={{ height: 24, width: 24 }}
            />
          </TouchableOpacity>
          <View style={{ width: "89%" }}>
            <Text
              style={[
                styles.topBar_text,
                { color: titleColor ? titleColor : "rgba(55, 55, 55, 1)" },
              ]}
            >
              {title}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  topBar: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 54, 126, 0.4)",
    paddingVertical: 13,
    // backgroundColor: "rgba(217, 217, 217, 1)",
    backgroundColor: "white",
  },
  topBar_box: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  topBar_text: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 27,
    color: "rgba(55, 55, 55, 1)",
  },
});
