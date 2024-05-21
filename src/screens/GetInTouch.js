import React, { useContext, useEffect, useState } from "react";
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
  const [pageloading, setpageloading] = useState(true)
  console.log("name-->", name);
  console.log("email-->", email);
  console.log("mobile-->", mobile);
  console.log("message-->", message);
  const { userToken } = useContext(AuthContext);
  console.log(userToken);

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

    // All validations passed, proceed with sending the message
    // You can implement your send message logic here
    // For now, let's just display the entered data
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
        console.log("skskskeodkkdjfkejnljflvnn", res?.status);
        if (res?.status) {
          showToast("Query Send Successfully");
          setIsLoading(false);
          setTimeout(() => {
            navigation.navigate("Dashboard")
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
  useEffect(() => {
    // Define the URL you want to fetch data from
    const apiUrl = "/student/profile";

    // Call the getstatedata function with the API URL
    getrequestwithtoken(apiUrl, userToken)
      .then((res) => {
        // console.log('Response from API:', res.data);
        // setStateData(res?.data);
        console.log(
          ".................................................",
          res?.data?.mobile
        );
        setMobile(res?.data?.mobile);
        setName(res?.data?.name);
        setEmail(res?.data.email)
setpageloading(false)
        
        // Do something with the response data, e.g., update component state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  if (pageloading) {
    return (
      <View>
        <Header
          title="Query"
          navigateTo={() => navigation.goBack("Home")}
        />
        <View style={{justifyContent:'center' ,alignItems:'center'  ,height:'90%'}}>
        <ActivityIndicator
          size="large"
          color="#00367E"
          style={{justifyContent:'center',alignSelf:'center'}}
        />
        </View>
      
      </View>
    );
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Header navigateTo={navigation.goBack} title="Query" />
      <ScrollView>
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
});
