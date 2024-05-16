import { View, Text, StyleSheet, Image, Alert, Platform } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import { AuthContext } from "../../Utils/context/AuthContext";
import QRCode from "react-native-qrcode-svg";
import {
  objectToFormData,
  postDataWithFormData,
  sendPostData,
} from "../../Helper/Helper";
const PaymentQR = ({ navigation }) => {
  const [minutes, setMinutes] = useState(4);
  const [seconds, setSeconds] = useState(59);
  const [timerEnded, setTimerEnded] = useState(false);

  const [paymentStatus, setPaymentStatus] = useState("pending");
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const { UpiLink } = useContext(AuthContext);
  const { orderid } = useContext(AuthContext);

  useEffect(() => {
    console.log("Timer Effect Call");
    const countdownInterval = setInterval(() => {
      console.log(timerEnded);
      if (!timerEnded) {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(countdownInterval);
            // Timer has reached 00:00, handle completion logic here
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
    // Make initial API call
    console.log("Api effect is call");
    makeAPICall();

    // Set interval to call API every 4 seconds until payment is completed or timer ends
    const intervalId = setInterval(() => {
      if (!paymentCompleted && !timerEnded) {
        makeAPICall();
      }
    }, 4000);
    if (paymentCompleted) {
      showToast("Payment Successfull");
      navigation.navigate("Login");
    }

    // Clear interval after 5 minutes
    const stopInterval = setTimeout(() => {
      clearInterval(intervalId);
      setTimerEnded(true);
    }, 318000); // 5 minutes

    return () => {
      clearInterval(intervalId);
      clearTimeout(stopInterval);
    };
  }, [paymentCompleted, timerEnded]);

  const makeAPICall = async () => {
    console.log("nothingf");
    try {
      const postData = {
        order_id: orderid,
      };
      const formData = objectToFormData(postData);
      const res = await postDataWithFormData("auth/txn-status", formData);
      console.log("Response from API for district:", res?.data?.status);
      if (res?.data?.status === "SUCCESS") {
        setPaymentStatus(res?.data?.status);
        // alert("Payment completed successfully.");
        setPaymentCompleted(true);
        setTimerEnded(true);
        showToast("Payment Successfull");
      } else if (res?.data?.status === "PENDING") {
        setPaymentStatus("pending");
        console.log("Payment is pending. Making another API call.");
      }
    } catch (error) {
      console.error("Error making API call:", error);
    }
  };

  const showToast = (message) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      alert(message);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Header title="Payment QR code" navigateTo={navigation.goBack} /> */}
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
          {timerEnded ?(
            <View style={{alignItems:'center' }}>
 <Text style={{fontWeight:'600' ,fontSize:20,color:'red' }}>QR Code Expired</Text>
          <Text style={{fontWeight:'900' ,fontSize:30,color:'red' }}>Register Again</Text>
            </View>
         
          ):(
            
            <QRCode
            value={UpiLink || "test"}
            size={200}
            color="black"
            backgroundColor="white"
          />
          )}
      
        </View>
        <View style={styles.qrcode}>
          {!timerEnded ?(  <Text style={styles.headingText}>
            This QR code will expire in{" "}
            {`${minutes.toString().padStart(2, "0")}:${seconds
              .toString()
              .padStart(2, "0")}`}
            {/* {timerEnded && <p>QR code has expired.</p>} */}
            {timerEnded && <Text>QR code has expired.</Text>}
          </Text>):(<Text></Text>)}
        
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
