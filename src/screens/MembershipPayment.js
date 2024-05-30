import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  Linking,
  Platform,
  ToastAndroid,
} from "react-native";
import Header from "../../components/Header";
import QRCode from "react-native-qrcode-svg";
import { useContext, useEffect, useState } from "react";
import {
  getRequestWithParamsTokens,
  objectToFormData,
  postDataWithFormDataWithToken,
} from "../../Helper/Helper";
import { AuthContext } from "../../Utils/context/AuthContext";
import { useRoute } from "@react-navigation/native";

const MembershipPayment = ({ navigation }) => {
  const { userToken } = useContext(AuthContext);
  const [upiLink, setUpiLink] = useState("");
  const route = useRoute();
  const { plan_id } = route.params;
  const [minutes, setMinutes] = useState(4);
  const [seconds, setSeconds] = useState(59);
  const [timerEnded, setTimerEnded] = useState(false);
  const [orderId, setOrderId] = useState("");

  console.log(plan_id, "here is plan id mention here");
  // console.log(orderId, "here is order id mention here");

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (!timerEnded) {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(countdownInterval);
            setTimerEnded(true);
            return;
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [seconds, minutes, timerEnded]);

  useEffect(() => {
    const params = { plan_id: plan_id };
    getRequestWithParamsTokens("student/buy-plan", userToken, params)
      .then((res) => {
        if (res.data && res.data.upi_link) {
          setUpiLink(res.data.upi_link);
          setOrderId(res.data.order_id);
        } else {
          console.error("UPI link not found in response");
        }
      })
      .catch((err) => {
        console.log(err, "got error from payment");
      });
  }, [plan_id, userToken]);

  // const payviaApps = () => {
  //   if (upiLink) {
  //     Linking.openURL(upiLink).catch((err) => {
  //       console.error("Failed to open UPI link:", err);
  //       Alert.alert("Error", "Failed to open UPI link. Please try again.");
  //     });
  //   } else {
  //     Alert.alert("Error", "UPI link is not available.");
  //   }
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      if (orderId) checkPaymentStatus();
    }, 4000);

    return () => clearInterval(interval);
  }, [orderId, userToken]);

  const checkPaymentStatus = async () => {
    try {
      const postData = {
        order_id: orderId,
        plan_id: plan_id,
      };
      const formData = objectToFormData(postData);
      const res = await postDataWithFormDataWithToken(
        "student/buy-plan/status-check",
        formData,
        userToken
      );

      if (res?.data?.status === "SUCCESS") {
        setTimerEnded(true);
        showToast("Payment Successful");
        navigation.navigate("sucessfully");
        setTimeout(() => {
          navigation.navigate("Dashboard");
        }, 2000);
      } else if (res?.data?.status === "PENDING") {
        console.log("Payment is pending. Making another API call.", res);
      }
    } catch (error) {
      console.error("Error making API call:", error);
    }
  };

  const showToast = (message) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert(message);
    }
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
        <View style={styles.iconContainer}>
          <Image
            source={require("../../assets/icons/gpay.png")}
            style={styles.icon}
          />
          <Image
            source={require("../../assets/icons/paytm.png")}
            style={styles.iconLarge}
          />
          <Image
            source={require("../../assets/icons/phonepe.png")}
            style={styles.icon}
          />
          <Image
            source={require("../../assets/icons/bharatpe.png")}
            style={styles.icon}
          />
          <Image
            source={require("../../assets/icons/amazonpay.png")}
            style={styles.iconMedium}
          />
        </View>
        <View style={styles.qrCodeContainer}>
          {timerEnded ? (
            <Text style={styles.expiredText}>
              QR code expired. Please try again.
            </Text>
          ) : upiLink ? (
            <QRCode value={upiLink} size={200} />
          ) : (
            <Text style={styles.loadingQr}>Loading QR code...</Text>
          )}
        </View>
        <View style={styles.qrcode}>
          {!timerEnded ? (
            <Text style={styles.headingText}>
              This QR code will expire in{" "}
              {`${minutes.toString().padStart(2, "0")}:${seconds
                .toString()
                .padStart(2, "0")}`}
            </Text>
          ) : (
            <Text></Text>
          )}
        </View>
        {/* <View>
          <TouchableOpacity onPress={payviaApps} style={styles.payButton}>
            <Text style={styles.payButtonText}>Pay Via UPI's</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
};

export default MembershipPayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
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
  iconContainer: {
    flexDirection: "row",
    marginVertical: 20,
    gap: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 22,
    width: 22,
  },
  iconLarge: {
    height: 22,
    width: 67,
  },
  iconMedium: {
    height: 22,
    width: 35,
  },
  qrCodeContainer: {
    alignItems: "center",
    top: 10,
  },
  qrcode: {
    marginHorizontal: 40,
    marginTop: 25,
  },
  payButton: {
    backgroundColor: "#00367E",
    width: "45%",
    textAlign: "center",
    alignItems: "center",
    padding: 12,
    top: 40,
    alignSelf: "center",
    borderRadius: 8,
  },
  payButtonText: {
    color: "white",
    fontWeight: "500",
  },
  loadingQr: {
    fontSize: 18,
    fontWeight: "600",
    color: "red",
  },
  expiredText: {
    fontSize: 16,
    textAlign: "center",
    color: "red",
  },
});
