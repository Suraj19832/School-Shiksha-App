import { View, Text, StyleSheet, Image, Alert } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import { AuthContext } from "../../Utils/context/AuthContext";
import QRCode from "react-native-qrcode-svg";
import { objectToFormData, postDataWithFormData, sendPostData } from "../../Helper/Helper";
const PaymentQR = ({ navigation }) => {
  const [minutes, setMinutes] = useState(4);
  const [seconds, setSeconds] = useState(59);
  const [timerEnded, setTimerEnded] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("pending");
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const { UpiLink } = useContext(AuthContext);
  const { orderid } = useContext(AuthContext);


  // useEffect(() => {
  //   const initialTimeoutId = setTimeout(() => {
  //     if (!paymentCompleted && !timerEnded) {
  //       // Make initial API call after 30 seconds
  //       makeAPICall();
  //       console.log("object")
  //       // Set interval to call API every 4 seconds until 300 seconds complete
  //       const intervalId = setInterval(makeAPICall, 4000);
  //       // Clear interval after 300 seconds
  //       const stopInterval = setTimeout(() => {
  //         clearInterval(intervalId);
  //         setTimerEnded(true);
  //       }, 270000);
  //       return () => {
  //         clearInterval(intervalId);
  //         clearTimeout(stopInterval);
  //       };
  //     }
  //   }, 3000);

  //   // Timer logic
  //   const timerInterval = setInterval(() => {
  //     if (!paymentCompleted && !timerEnded) {
  //       if (seconds === 0) {
  //         if (minutes === 0) {
  //           clearInterval(timerInterval);
  //           setTimerEnded(true);
  //           // Timer has reached 00:00, handle completion logic here
  //           return;
  //         } else {
  //           setMinutes(minutes - 1);
  //           setSeconds(59);
  //         }
  //       } else {
  //         setSeconds(seconds - 1);
  //       }
  //     }
  //   }, 1000);

  //   return () => {
  //     clearInterval(timerInterval);
  //     clearTimeout(initialTimeoutId);
  //   };
  // }, [minutes, seconds, timerEnded, paymentCompleted]);


  // useEffect(() => {
  
  
  //   // Timer logic
  //   const timerInterval = setInterval(() => {
  //     if (!paymentCompleted && !timerEnded) {
  //       if (seconds === 0) {
  //         if (minutes === 0) {
  //           clearInterval(timerInterval);
  //           setTimerEnded(true);
  //           // Timer has reached 00:00, handle completion logic here
  //           return;
  //         } else {
  //           setMinutes(minutes - 1);
  //           setSeconds(59);
  //         }
  //       } else {
  //         setSeconds(seconds - 1);
  //       }
  //     }
  //   }, 1000);
  
  //   return () => {
  //     clearInterval(timerInterval);
  //     clearTimeout(initialTimeoutId);
  //   };
  // }, [minutes, seconds, timerEnded]);
  useEffect(() => {
    const countdownInterval = setInterval(() => {
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
    makeAPICall();
  
    // Set interval to call API every 4 seconds until payment is completed or timer ends
    const intervalId = setInterval(() => {
      if (!paymentCompleted && !timerEnded) {
        makeAPICall();
      }
    }, 4000);
    if(paymentCompleted){
      navigation.navigate("Login");
    }
  
    // Clear interval after 5 minutes
    const stopInterval = setTimeout(() => {
      clearInterval(intervalId);
      setTimerEnded(true);
    }, 300000); // 5 minutes
  
    return () => {
      clearInterval(intervalId);
      clearTimeout(stopInterval);
    };
  }, [paymentCompleted, timerEnded]);
  



  // const qrValue =
  //   "upi://pay?cu=INR&pa=paytmqr2810050501011c7hdlw291fz@paytm&pn=Paytm Merchant&am=1&mam=1&tr=laRFeh88vh1715582842&tn=UPI Payment";
  //  useEffect( async () => {
  //   try {
  //     const postData = {
  //       order_id: "DTPL1715335745",
  //     };
  //     const formData = objectToFormData(postData);
  //     const res = await postDataWithFormData("auth/txn-status", formData);
  //     console.log("Response from API for district:",res);
  //     if (res?.data?.status === 'SUCCESS') {
  //       setPaymentStatus(res?.data?.status);
  //       alert("Payment completed successfully.");
  //       setPaymentCompleted(true);
  //       setTimerEnded(true);
  //     } else if (res?.data?.status === "PENDING") {
  //       setPaymentStatus("pending");
  //       console.log("Payment is pending. Making another API call."); 
  //     }
  //   } catch (error) {
  //     console.error("Error making API call:", error);
  //   }
  //  }, [])
   
  const makeAPICall = async () => {
    console.log("nothingf")
    try {
      const postData = {
        order_id: orderid,
      };
      const formData = objectToFormData(postData);
      const res = await postDataWithFormData("auth/txn-status", formData);
      console.log("Response from API for district:", res?.data?.status);
      if (res?.data?.status === 'SUCCESS') {
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
  // const qrValue="upi://pay?cu=INR&pa=paytmqr2810050501011c7hdlw291fz@paytm&pn=Paytm Merchant&am=1&mam=1&tr=k8I63nh0Zf1715601118&tn=UPI Payment"
  // console.log("fffffffffffffffffffffffffffffffff", UpiLink);
 
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
          <QRCode
            value={UpiLink}
            size={200}
            color="black"
            backgroundColor="white"
          />
        </View>
        <View style={styles.qrcode}>
          <Text style={styles.headingText}>
            This QR code will expire in{" "}
            {`${minutes.toString().padStart(2, "0")}:${seconds
              .toString()
              .padStart(2, "0")}`}
            {/* {timerEnded && <p>QR code has expired.</p>} */}
      {timerEnded && <Text>QR code has expired.</Text>}
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

//make a set timeout that after 30 sec a api call and inside the set timeout a set interval is present which same api will code and this set interval run after 4 - 4  sec till 300 sec complete and if by any chance api return the status successful then set time out off
//Aree you dont get my point i said there i qr which will valid for 5 min means 300 sec so that i tell you that after 30 second i can first api call and i check payment is succesfull or not if suppose first call made in 30 second then only 300-30 sec left for made payment and this 270sec we call the api after 4 -4 section and chrck the payment status is complete in any call then  show a alert that payment complete and if status is pending then again again make call api and chaeck status and if in 300 sec not get the status complete then show a that qr expire .i also give you code in which a background timer is runniung and decrese by 1 sec you also make call on
