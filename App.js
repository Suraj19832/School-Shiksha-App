import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import LandingPage from "./src/screens/LandingPage";
import Registration from "./src/screens/Registration";
export default function App() {
  return (
    <View >
      {/* <LandingPage /> */}
      <Registration/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
 
  appcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "FFFCCE",
    height: "100%",
  },
});
