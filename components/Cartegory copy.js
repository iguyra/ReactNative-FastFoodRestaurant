import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import CartegoryItem from "./CartegoryItem";

const f1 = require("../assets/f1.jpg");
const f2 = require("../assets/f2.jpg");
const f3 = require("../assets/f3.jpg");

const items = [
  {
    key: 1,
    name: "Dom Food",
    price: "c300.00",
    addToCart: "Add cart",
  },
  {
    key: 2,
    name: "Dom Food",
    price: "c300.00",
    addToCart: "Add cart",
  },
  {
    key: 3,
    name: "Dom Food",
    price: "c300.00",
    addToCart: "Add cart",
  },
  {
    key: 5,
    name: "Dom Food",
    price: "c300.00",
    addToCart: "Add cart",
  },
  {
    key: 6,
    name: "Dom Food",
    price: "c300.00",
    addToCart: "Add cart",
  },
  {
    key: 7,
    name: "Dom Food",
    price: "c300.00",
    addToCart: "Add cart",
  },
  {
    key: 8,
    name: "Dom Food",
    price: "c300.00",
    addToCart: "Add cart",
  },
  {
    key: 49,
    name: "Dom Food",
    price: "c300.00",
    addToCart: "Add cart",
  },
  {
    key: 94,
    name: "Dom Food",
    price: "c300.00",
    addToCart: "Add cart",
  },
  {
    key: 40,
    name: "Dom Food",
    price: "c300.00",
    addToCart: "Add cart",
  },
];

export default function Cartegory() {
  return (
    <View style={styles.container}>
      <Text style={styles.cartegoryText}>Food cartegory</Text>

      <View style={styles.innerContainer}>
        {/* <FlatList
            contentContainerStyle={{ margin: 4 }}
            horizontal={false}
          numColumns={3}
          data={items}
          renderItem={(categoryItem) => (
            //   console.log(categoryItem)
            <CartegoryItem item={categoryItem.item} />
          )}
            keyExtractor={(category) => category.id}
        /> */}

        <View style={styles.itemContainer}>
          <Image style={styles.image} source={f1} />
          <View>
            <Text style={styles.foodName}>dom food</Text>
            <Text style={styles.foodPrice}>C300.00</Text>
            <Text style={styles.addToCart}>Add cart</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image style={styles.image} source={f2} />
          <View>
            <Text style={styles.foodName}>dom food</Text>
            <Text style={styles.foodPrice}>C140.00</Text>
            <Text style={styles.addToCart}>Add cart</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image style={styles.image} source={f3} />
          <View>
            <Text style={styles.foodName}>dom food</Text>
            <Text style={styles.foodPrice}>C600.00</Text>
            <Text style={styles.addToCart}>Add cart</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image style={styles.image} source={f3} />
          <View>
            <Text style={styles.foodName}>dom food</Text>
            <Text style={styles.foodPrice}>C600.00</Text>
            <Text style={styles.addToCart}>Add cart</Text>
          </View>
        </View>
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
    width: "33%",
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
