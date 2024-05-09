import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { WebView } from "react-native-webview";
import Header from "../../components/Header";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function HowtoApply({ navigation }) {
  return (
    <View style={styles.container}>
      <Header
        title="How to Apply "
        navigateTo={() => navigation.navigate("Dashboard")}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.content_box}>
          <View style={styles.box}>
            <Text style={styles.text}>
              Free College admission form fill up tutorial
            </Text>
            <WebView
              containerStyle={{ borderRadius: 15 }}
              style={styles.video}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              allowsFullscreenVideo={true}
              source={{
                uri: "https://www.youtube.com/embed/MYNZjrWszT0?rel=0",
              }}
            />
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>
              Free College admission form fill up tutorial
            </Text>
            <WebView
              containerStyle={{ borderRadius: 15 }}
              style={styles.video}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              allowsFullscreenVideo={true}
              source={{
                uri: "https://www.youtube.com/embed/OMBEtL6-mnU?rel=0",
              }}
            />
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>
              Free College admission form fill up tutorial
            </Text>
            <WebView
              containerStyle={{ borderRadius: 15 }}
              style={styles.video}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              allowsFullscreenVideo={true}
              source={{
                uri: "https://www.youtube.com/embed/OMBEtL6-mnU?rel=0",
              }}
            />
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>
              Free College admission form fill up tutorial
            </Text>
            <WebView
              containerStyle={{ borderRadius: 15 }}
              style={styles.video}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              allowsFullscreenVideo={true}
              source={{
                uri: "https://www.youtube.com/embed/fWTpBBXx7DM?rel=0",
              }}
            />
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={{ alignItems: "center", flexDirection: "row" }}
          >
            <Text style={{ color: "#435354", fontWeight: "500", fontSize: 14 }}>
              Show More
            </Text>
            <Entypo name="chevron-small-down" size={24} color="#435354" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // top: 53,
    // marginBottom: 48,
  },
  scrollView: {
    flex: 1,
  },
  content_box: {
    marginHorizontal: 20,
  },
  video: {
    flex: 1,
    height: 196,
    width: "100%",
    borderRadius: 10,
    marginTop: 8,
    // zIndex: 100,
    marginTop: -1,
  },
  box: {
    marginTop: 15,
  },
  text: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 21,
    color: "#00367E",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#FFFAE7",
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "center",
    width: 130,
    marginVertical: 14,
    alignSelf: "center",
  },
});
