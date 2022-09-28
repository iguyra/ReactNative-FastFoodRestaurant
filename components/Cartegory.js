import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
// import { SafeAreaView, FlatList, Text, View, Image } from "react-native";
import foodList from "../data/foodList";
import AddToCart from "./AddToCart";

const f1 = require("../assets/f1.jpg");
const f2 = require("../assets/f2.jpg");
const f3 = require("../assets/f3.jpg");

const Cartegory = ({ navigation }) => {
  const _renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("FoodScreen", { item })}
      >
        <Image style={styles.image} source={f2} />
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.foodPrice}>{item.price}</Text>
        <AddToCart item={item} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.cartegoryText}>Food cartegory</Text>

      <FlatList
        data={foodList}
        renderItem={_renderItem}
        keyExtractor={(item) => item.key}
        numColumns={3}
        contentContainerStyle={{ paddingVertical: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    // marginTop: 20,
    padding: 10,
    flex: 1,
  },

  cartegoryText: {
    color: "white",
    fontSize: 22,
    // marginBottom: 20,
    fontWeight: "600",
    alignSelf: "center",
  },

  // innerContainer: {
  //   width: "96%",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   color: "white",
  // },
  itemContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
    width: 90,
    flex: 1,
  },

  image: {
    width: "100%",
    height: 100,
    borderRadius: 15,
  },
  contentContainer: {
    height: 100,
    justifyContent: "space-around",
  },

  foodName: {
    fontSize: 14,
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

export default Cartegory;
