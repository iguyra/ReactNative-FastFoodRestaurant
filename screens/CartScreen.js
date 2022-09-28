import {
  Image,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../context/cartContext";
import removeItemFromCart from "../handlers/removeItemFromCart";
import Footer from "../components/Footer";

const f1 = require("../assets/f1.jpg");

export default function CartScreen({ route, navigation }) {
  const [cart, setCart] = useContext(cartContext);

  const itemSizeHandler = async (item, type) => {
    const oldCart = await AsyncStorage.getItem("cart");

    let parsedCart = JSON.parse(oldCart);

    const cartItemIndex = parsedCart.findIndex((itemInCart) => {
      return item.key === itemInCart.key;
    });

    let cartItem = parsedCart[cartItemIndex];
    if (type === "decrease" && cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    } else if (type === "increase") {
      cartItem.quantity += 1;
    }

    await AsyncStorage.setItem("cart", JSON.stringify(parsedCart));

    setCart(parsedCart);
  };

  const _renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("FoodScreen", { item })}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={f1} />
        </View>
      </TouchableOpacity>

      <View style={styles.textContent}>
        <Text style={styles.foodName}>{item.name}</Text>
        <View style={styles.bottomContent}>
          <Text style={styles.foodPrice}>{item.price}</Text>

          <Text style={styles.addToCart}>{item.quantity}</Text>
        </View>

        <TouchableOpacity onPress={() => removeItemFromCart(item, setCart)}>
          <View style={styles.removeItemContainer}>
            <Text style={styles.removeItem}>remove</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.itemSize}>
          <Text
            onPress={() => itemSizeHandler(item, "decrease")}
            style={styles.itemSizeText}
          >
            Decrease
          </Text>
          <Text
            onPress={() => itemSizeHandler(item, "increase")}
            style={styles.itemSizeText}
          >
            increase
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <Header /> */}

      <View style={styles.totalItemContainer}>
        <Text style={styles.totalItemText}>
          Total {cart.length} items in cart
        </Text>
      </View>

      {cart.length ? (
        <FlatList
          data={cart}
          renderItem={_renderItem}
          keyExtractor={(item) => item.key}
          // numColumns={3}
          contentContainerStyle={{ paddingVertical: 20 }}
        />
      ) : (
        <Text
          style={{
            marginTop: 20,
            flex: 1,
            alignSelf: "center",
            color: "white",
            fontSize: 22,
          }}
        >
          YOUR CART IS EMPTY
        </Text>
      )}

      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#100f1f",
  },

  itemContainer: {
    flexDirection: "row",
    alignSelf: "center",
    width: "80%",
    marginRight: 10,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  imageContainer: {
    width: 90,
    height: 90,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    resizeMode: "contain",
  },
  textContent: {
    flex: 1,
    marginLeft: 10,
  },
  foodPrice: {
    fontSize: 16,
    color: "white",
  },

  foodName: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    // marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: "#52526b",
  },
  addToCart: {
    fontSize: 16,
    backgroundColor: "#fd514e",
    alignSelf: "flex-start",
    paddingLeft: 10,
    paddingRight: 10,
    color: "white",
    borderRadius: 20,
  },
  bottomContent: {
    marginTop: 10,
    // flexDirection: "row",
    justifyContent: "space-between",
  },

  removeItem: {
    fontSize: 16,
    backgroundColor: "#fd514e",
    paddingLeft: 10,
    paddingRight: 10,
    color: "white",
    borderRadius: 20,
    alignSelf: "flex-end",
  },

  totalItemContainer: {
    paddingTop: 30,
    justifyContent: "center",
    alignContent: "center",
  },

  totalItemText: {
    fontSize: 26,
    color: "white",
    width: "90%",
    alignSelf: "flex-end",
  },

  itemSize: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
  },
  itemSizeText: {
    color: "yellow",
    fontSize: 16,
  },
});
