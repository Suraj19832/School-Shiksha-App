<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './src/screen/Dashboard';

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard/>
      {/* <StatusBar style="auto" hidden={true} /> */}
    </View>
=======
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
>>>>>>> 91750494a3fb19bfe91d7017c386da8a5d1bdc16
  );
}

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
=======
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
>>>>>>> 91750494a3fb19bfe91d7017c386da8a5d1bdc16
  },
});
