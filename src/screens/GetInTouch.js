import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import Header from "../../components/Header";

const GetInTouch = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSend = () => {
    if (!name || !email || !mobile || !message) {
      Alert.alert("All fields are required", "Please enter all fields");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Please enter a valid email address");
      return;
    }

    if (mobile.length !== 10) {
      Alert.alert("Mobile number must be 10 digits");
      return;
    }

    // All validations passed, proceed with sending the message
    // You can implement your send message logic here
    // For now, let's just display the entered data
    Alert.alert(
      "Message Sent",
      `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Header
        navigateTo={() => navigation.navigate("Dashboard")}
        title="Query"
      />
      <View style={styles.main_container}>
        <View>
          <Text style={styles.heading}>Get In Touch</Text>
        </View>
        <View style={styles.details_box}>
          <View style={styles.details}>
            <View>
              <Text style={styles.text}>Name</Text>
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
                onChangeText={setMobile}
                keyboardType="numeric"
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
                <Text style={styles.buttonText}>Send Us</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
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
