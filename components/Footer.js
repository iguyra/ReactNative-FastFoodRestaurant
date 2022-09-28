import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CartButton from "./CartIcon";
import Search from "./Search";

const headerBottomImg = require("../assets/f1.jpg");
const home = require("../assets/home.png");
const user = require("../assets/user.png");

export default function Footer({ navigation }) {
  return (
    <View style={styles.container}>
      <Search navigation={navigation} />
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            padding: 10,
            //   marginTop: 20,
            width: 60,
          }}
          onPress={() =>
            navigation.navigate("HomeScreen", { item: "item container" })
          }
        >
          <Image style={styles.searchIcon} source={home} />
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            padding: 10,
            //   marginTop: 20,
            width: 60,
          }}
          onPress={() =>
            navigation.navigate("CartScreen", { item: "item container" })
          }
        >
          <Image style={styles.searchIcon} source={user} />
        </TouchableOpacity>
      </View>

      <CartButton navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
