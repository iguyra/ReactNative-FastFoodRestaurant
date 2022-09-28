import { StyleSheet, StatusBar, Text, View } from "react-native";
import Cartegory from "../components/Cartegory";
import Header from "../components/Header";
import LoginHeader from "../components/LoginHeader";
import Constants from "expo-constants";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LoginHeader navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#100f1f",
    marginTop: Constants.statusBarHeight,
  },
});
