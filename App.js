import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import LandingPage from "./src/screens/LandingPage";
import Registration from "./src/screens/Registration";
import FreeCollegeList from "./src/screens/FreeCollegeList";
// import DropDown from "./src/components/Dropdown"
export default function App() {
  const statedata=['acc','dff']
  const state='apple'
  return (
    <View >
      {/* <LandingPage /> */}
      {/* <Registration/> */}
      <FreeCollegeList/>
      {/* <StatusBar style='light' /> */}
{/* <DropDown/> */}
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
