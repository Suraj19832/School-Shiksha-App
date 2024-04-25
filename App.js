import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login_Page from "./src/screens/Login_Page";
import ForgetPassword from "./src/screens/ForgetPassword";
import VerifyEmail from "./src/screens/VerifyEmail";
import VerifyOTP from "./src/screens/VerifyOTP";
import Footer from "./components/Footer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={<Login_Page />} />
        <Stack.Screen name="verifyemail" component={<VerifyEmail />} />
        <Stack.Screen name="verifyOTP" component={<VerifyOTP />} />
        <Stack.Screen name="forgetPassword" component={<ForgetPassword />} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   {/* <Login_Page /> */}
    //   {/* <ForgetPassword /> */}
    //   <VerifyOTP />
    //   {/* <VerifyEmail /> */}
    //   {/* <Footer /> */}
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
