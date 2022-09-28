import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View } from "react-native";

const menu = require("../assets/menu.png");

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>cuisone</Text>

        <Image source={menu} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    // marginTop: 20,
    // padding: 10,
    alignItems: "center",
    position: "relative",
    width: "90%",
    alignSelf: "center",
  },
  innerContainer: {
    width: "98%",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "white",
    position: "absolute",
  },
  title: {
    fontSize: 30,
    color: "#fd514e",
    // backgroundColor: "#fd514e",
    // padding: 10,
    // paddingLeft: 30,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    fontStyle: "italic",
    fontWeight: "900",
  },
});
