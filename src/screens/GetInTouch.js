import React, { useContext, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  ScrollView,
  ActivityIndicator,
  Animated,
  RefreshControl,
} from "react-native";
import Header from "../../components/Header";
import { AuthContext } from "../../Utils/context/AuthContext";
import {
  getrequestwithtoken,
  objectToFormData,
  postDataWithFormDataWithToken,
} from "../../Helper/Helper";
const GetInTouch = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [pageloading, setpageloading] = useState(true);
  const { userToken } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);

  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSend = async () => {
    setIsLoading(true);
    if (!name || !email || !mobile || !message) {
      Alert.alert("All fields are required", "Please enter all fields");
      setIsLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    if (mobile.length !== 10) {
      Alert.alert("Mobile number must be 10 digits");
      setIsLoading(false);
      return;
    }
    const postData = {
      name: name,
      email: email,
      mobile: mobile,
      message: message,
    };
    const formDatablock = objectToFormData(postData); //convert in form data
    await postDataWithFormDataWithToken(
      "/student/query",
      formDatablock,
      userToken
    )
      .then((res) => {
        if (res?.status) {
          showToast("Query Send Successfully");
          setIsLoading(false);
          setTimeout(() => {
            navigation.navigate("Dashboard");
          }, 500);
        }
      })
      .catch((error) => {
        console.error("Error posting c:ss", error?.message);

        setIsLoading(false);
      });
  };
  const handlechangenumber = (text) => {
    if (/^[0-9]*$/.test(text) || text === "") {
      setMobile(text);
    }
  };
  function showToast(message) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }
  const fetchData = () => {
    const apiUrl = "/student/profile";
    getrequestwithtoken(apiUrl, userToken)
      .then((res) => {
        setMobile(res?.data?.mobile);
        setName(res?.data?.name);
        setEmail(res?.data.email);
        setpageloading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  };

  const CardSkeleton = () => {
    const opacity = useRef(new Animated.Value(0.3)).current;

    useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0.3,
            duration: 800,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }, [opacity]);

    return (
      <>
        <Header title="Query" navigateTo={navigation.goBack} />
        <View style={styles.container12}>
          {[...Array(1)].map((_, index) => (
            <Animated.View
              key={index}
              style={[styles.placeholder, { opacity }]}
            />
          ))}
        </View>
      </>
    );
  };

  if (pageloading) {
    return <CardSkeleton />;
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Header navigateTo={navigation.goBack} title="Query" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        <View style={styles.main_container}>
          <View>
            <Text style={styles.heading}>Get In Touch</Text>
          </View>
          <View style={styles.details_box}>
            <View style={styles.details}>
              <View>
                <Text style={styles.text}>Your Name</Text>
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                />
              </View>
              <View>
                <Text style={styles.text}>Your Email</Text>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <View>
                <Text style={styles.text}>Mobile Number</Text>
                <TextInput
                  style={styles.input}
                  value={mobile}
                  // onChangeText={setMobile}
                  onChangeText={(text) => handlechangenumber(text)}
                  keyboardType="numeric"
                  maxLength={10}
                />
              </View>
              <View>
                <Text style={styles.text}>Write a Message</Text>
                <TextInput
                  multiline={true}
                  numberOfLines={3}
                  style={[styles.input, { height: 100 }]}
                  value={message}
                  onChangeText={setMessage}
                />
              </View>
              <View style={styles.borderline}>
                <TouchableOpacity style={styles.button} onPress={handleSend}>
                  {isLoading ? (
                    <ActivityIndicator size="small" color="#ffffff" />
                  ) : (
                    <Text style={styles.buttonText}>Send Us</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default GetInTouch;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // top: 52,
  },
  main_container: {
    marginHorizontal: 20,
  },
  heading: {
    color: "#373737",
    fontSize: 30,
    lineHeight: 45,
    fontWeight: "600",
    marginVertical: 15,
  },
  details_box: {
    backgroundColor: "#FFFCCE",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#00367E",
  },
  details: {
    padding: 16,
    gap: 20,
  },
  input: {
    borderBottomWidth: 0.8,
    borderBottomColor: "#D9D9D9",
  },
  text: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    color: "#435354",
  },
  borderline: {
    // borderTopWidth: 0.8,
    borderTopColor: "#D9D9D9",
    paddingTop: 10,
  },
  button: {
    width: 155,
    backgroundColor: "#03357D",
    borderRadius: 40,
    padding: 16,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 16,
    textAlign: "center",
  },
  container12: {
    backgroundColor: "#F6F6F6",
    borderRadius: 13,
    padding: 16,
    marginBottom: 16,
    height: "80%",
  },
  placeholder: {
    backgroundColor: "#ccc",
    height: "100%",
    borderRadius: 20,
  },
});
