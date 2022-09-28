import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useState } from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const cartImage = require("../assets/cart.png");
import { cartContext } from "../context/cartContext";

export default function CartButton({ navigation }) {
  const [cart, setCart] = useContext(cartContext);

  return (
    <View style={styles.container}>
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
        <View style={styles.innerContainer}>
          <Image style={styles.cartIcon} source={cartImage} />

          <Text style={styles.cartNumber}>{+cart.length}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  innerContainer: {
    position: "relative",
  },

  cartIcon: {
    width: "80%",
    resizeMode: "contain",
  },
  cartNumber: {
    position: "absolute",
    right: 0,
    backgroundColor: "#fd514e",
    padding: 5,
    borderRadius: 15,
    color: "white",
    fontSize: 16,
  },
});
