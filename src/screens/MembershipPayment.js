import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  Platform,
  TouchableOpacity,
  Linking,
} from "react-native";
import Header from "../../components/Header";

import QRCode from "react-native-qrcode-svg";
import { useEffect } from "react";
import { GetfetchDataWithParams } from "../../Helper/Helper";

const MembershipPayment = ({ navigation }) => {
  useEffect(() => {
    GetfetchDataWithParams("student/buy-plan")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const payviaApps = () => {
    const upiLink = "upi://pay?pa=example@upi&pn=Example&am=1";
    Linking.openURL(upiLink).catch((err) => {
      console.error("Failed to open UPI link:", err);
      showToast("Failed to open UPI link. Please try again.");
    });
  };
  return (
    <View style={styles.container}>
      <Header title="Buy Membership" navigateTo={navigation.goBack} />
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
            marginVertical: 20,
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
        <View style={{ alignItems: "center", top: 10 }}>
          <QRCode size={200} />
        </View>
        <View style={styles.qrcode}>
          <Text style={styles.headingText}>
            This QR code will expire in 04:45
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={payviaApps}
            style={{
              backgroundColor: "#00367E",
              width: "45%",
              textAlign: "center",
              alignItems: "center",
              padding: 12,
              top: 40,
              alignSelf: "center",
              borderRadius: 8,
            }}
          >
            <Text style={{ color: "white", fontWeight: "500" }}>
              Pay via apps
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MembershipPayment;

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
