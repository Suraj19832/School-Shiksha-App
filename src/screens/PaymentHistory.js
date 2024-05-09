import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Modal,
  TouchableOpacity,
} from "react-native";
import React from "react";
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
import Header from "../../components/Header";
const PaymentHistory = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}> */}
      {/* <View style={styles.mainheadercontainer}>
          <View style={styles.headercontainer}>
            <MaterialIcons
              name="arrow-back"
              size={30}
              color={"#00367E"}
              onPress={navigation.goBack}
            />
            <Text style={styles.heading}>Payment History</Text>
          </View>
        </View> */}
      <Header title="Payment History" navigateTo={navigation.goBack} />
      <ScrollView>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/img/Group 68.png")}
              />
              <View>
                <Text
                  style={{ color: "#1A1A1A", fontWeight: "500", fontSize: 14 }}
                >
                  Premium
                </Text>
                <Text
                  style={{ color: "#A6A6A6", fontWeight: "400", fontSize: 10 }}
                >
                  31.03.2024 9:30 PM
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{ color: "#BE0000", fontWeight: "500", fontSize: 14 }}
              >
                -299
              </Text>
            </View>
          </View>

          <View style={styles.hairlineMenu} />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/img/Group 68.png")}
              />
              <View>
                <Text
                  style={{ color: "#1A1A1A", fontWeight: "500", fontSize: 14 }}
                >
                  Premium
                </Text>
                <Text
                  style={{ color: "#A6A6A6", fontWeight: "400", fontSize: 10 }}
                >
                  31.03.2024 12:40 PM
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{ color: "#BE0000", fontWeight: "500", fontSize: 14 }}
              >
                -299
              </Text>
            </View>
          </View>

          <View style={styles.hairlineMenu} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/img/Group 68.png")}
              />
              <View>
                <Text
                  style={{ color: "#1A1A1A", fontWeight: "500", fontSize: 14 }}
                >
                  Ultra Premium
                </Text>
                <Text
                  style={{ color: "#A6A6A6", fontWeight: "400", fontSize: 10 }}
                >
                  31.03.2024 6:00 PM
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{ color: "#BE0000", fontWeight: "500", fontSize: 14 }}
              >
                -499
              </Text>
            </View>
          </View>

          <View style={styles.hairlineMenu} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/img/Group 68.png")}
              />
              <View>
                <Text
                  style={{ color: "#1A1A1A", fontWeight: "500", fontSize: 14 }}
                >
                  Premium
                </Text>
                <Text
                  style={{ color: "#A6A6A6", fontWeight: "400", fontSize: 10 }}
                >
                  31.03.2024 6:00 PM
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{ color: "#BE0000", fontWeight: "500", fontSize: 14 }}
              >
                -299
              </Text>
            </View>
          </View>

          <View style={styles.hairlineMenu} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/img/Group 68.png")}
              />
              <View>
                <Text
                  style={{ color: "#1A1A1A", fontWeight: "500", fontSize: 14 }}
                >
                  Premium
                </Text>
                <Text
                  style={{ color: "#A6A6A6", fontWeight: "400", fontSize: 10 }}
                >
                  31.03.2024 9:30 PM
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{ color: "#BE0000", fontWeight: "500", fontSize: 14 }}
              >
                -299
              </Text>
            </View>
          </View>

          <View style={styles.hairlineMenu} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/img/Group 68.png")}
              />
              <View>
                <Text
                  style={{ color: "#1A1A1A", fontWeight: "500", fontSize: 14 }}
                >
                  Ultra Premium
                </Text>
                <Text
                  style={{ color: "#A6A6A6", fontWeight: "400", fontSize: 10 }}
                >
                  31.03.2024 12:40 PM
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{ color: "#BE0000", fontWeight: "500", fontSize: 14 }}
              >
                -499
              </Text>
            </View>
          </View>

          <View style={styles.hairlineMenu} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/img/Group 68.png")}
              />
              <View>
                <Text
                  style={{ color: "#1A1A1A", fontWeight: "500", fontSize: 14 }}
                >
                  Premium
                </Text>
                <Text
                  style={{ color: "#A6A6A6", fontWeight: "400", fontSize: 10 }}
                >
                  31.03.2024 9:30 PM
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{ color: "#BE0000", fontWeight: "500", fontSize: 14 }}
              >
                -299
              </Text>
            </View>
          </View>

          <View style={styles.hairlineMenu} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/img/Group 68.png")}
              />
              <View>
                <Text
                  style={{ color: "#1A1A1A", fontWeight: "500", fontSize: 14 }}
                >
                  Ultra Premium
                </Text>
                <Text
                  style={{ color: "#A6A6A6", fontWeight: "400", fontSize: 10 }}
                >
                  31.03.2024 6:00 PM
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{ color: "#BE0000", fontWeight: "500", fontSize: 14 }}
              >
                -499
              </Text>
            </View>
          </View>

          <View style={styles.hairlineMenu} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentHistory;
const styles = StyleSheet.create({
  container: {
    // marginTop: 28,
    // top: 53,
    paddingBottom: 48,
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
    height: 45,
    width: 45,
  },
  hairlineMenu: {
    backgroundColor: "#00367E33",
    height: 1,
    width: "85%",
    marginBottom: 20,
    alignSelf: "center",
  },
});
