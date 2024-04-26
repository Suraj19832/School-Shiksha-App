import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import LandingPage from "./src/screens/LandingPage";
import Registration from "./src/screens/Registration";
import FreeCollegeList from "./src/screens/FreeCollegeList";
// import DropDown from "./src/components/Dropdown"
import { StyleSheet, Text, View } from "react-native";
import Dashboard from "./src/screen/Dashboard";

export default function App() {
  const statedata=['acc','dff']
  const state='apple'
  return (
    <View style={styles.container}>
      {/* <LandingPage /> */}
      {/* <Registration/> */}
      <FreeCollegeList/>
      <Dashboard />
    </View>
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
