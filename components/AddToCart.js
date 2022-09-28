import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import AddToCartHandler from "../handlers/addToCartHandler";
import { cartContext } from "../context/cartContext";
import { useContext } from "react";

export default function AddToCart({ item }) {
  const [cart, setCart] = useContext(cartContext);

  return (
    <TouchableOpacity onPress={() => AddToCartHandler(item, setCart)}>
      <View>
        <Text style={styles.addToCart}>Add cart</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addToCart: {
    fontSize: 16,
    backgroundColor: "#fd514e",
    alignSelf: "flex-start",
    paddingLeft: 10,
    paddingRight: 10,
    color: "white",
    borderRadius: 20,
  },
});
