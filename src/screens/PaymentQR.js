import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Header from "../../components/Header";

const PaymentQR = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Payment QR code" navigateTo={navigation.goBack} />
      <View style={styles.main_container}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>
            Scan QR code using BHIM or your preferred UPI app
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: "row",
            marginVertical: 28,
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/icons/gpay.png")}
            style={{ height: 22, width: 50 }}
          />
          <Image
            source={require("../../assets/icons/paytm.png")}
            style={{ height: 22, width: 67 }}
          />
          <Image
            source={require("../../assets/icons/phonepe.png")}
            style={{ height: 22, width: 22 }}
          />
          <Image
            source={require("../../assets/icons/bharatpe.png")}
            style={{ height: 22, width: 22 }}
          />
          <Image
            source={require("../../assets/icons/amazonpay.png")}
            style={{ height: 22, width: 35 }}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={require("../../assets/icons/qr_code.png")} />
        </View>
        <View style={styles.qrcode}>
          <Text style={styles.headingText}>
            This QR code will expire in 04:54
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentQR;

const styles = StyleSheet.create({
  container: {},
  main_container: {
    marginHorizontal: 20,
    marginTop: 50,
  },
  heading: {
    marginHorizontal: 20,
  },
  headingText: {
    color: "#787878",
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 23.44,
    textAlign: "center",
  },
  qrcode: {
    marginHorizontal: 40,
    marginTop: 25,
  },
});
