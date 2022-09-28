import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

const f1 = require("../assets/f1.jpg");
const f2 = require("../assets/f2.jpg");
const f3 = require("../assets/f3.jpg");

const items = [
  {
    name: "Dom Food",
    price: "c300.00",
    addToCart: "Add cart",
  },
  {
    name: "Dom Food",
    price: "c300.00",
    addToCart: "Add cart",
  },
  {
    name: "Dom Food",
    price: "c300.00",
    addToCart: "Add cart",
  },
];

export default function CartegoryItem({ item }) {
  console.log(item);

  return (
    <View style={styles.itemContainer}>
      {/* <Image style={styles.image} source={f1} /> */}
      <View>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.foodPrice}>{item.price}</Text>
        <Text style={styles.addToCart}>{item.addToCart}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    marginTop: 20,
    padding: 10,
    alignItems: "center",
  },

  cartegoryText: {
    color: "white",
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "600",
  },

  innerContainer: {
    width: "96%",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "white",
  },
  itemContainer: {
    width: 110,
    height: 110,

    marginRight: 10,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },

  foodName: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  foodPrice: {
    fontSize: 16,
    color: "white",
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
});
