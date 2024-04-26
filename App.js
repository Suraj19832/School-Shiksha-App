import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Dashboard from "./src/screen/Dashboard";

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard />
      {/* <StatusBar style="auto" hidden={true} /> */}
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
