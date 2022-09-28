import { useState } from "react";
import {
  Image,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import AddToCart from "../components/AddToCart";
import Footer from "../components/Footer";
import foodList from "../data/foodList";
const f1 = require("../assets/f1.jpg");

export default function SearchScreen({ route, navigation }) {
  const [searchValue, setsearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = (text) => {
    setsearchValue(text);

    const textLowerCase = text.toLowerCase();
    const results = foodList.filter((food) => {
      return Object.values(food.name)
        .join("")
        .toLowerCase()
        .includes(textLowerCase);
    });
    setSearchResults(results);
  };

  // console.log(searchResults, "searchResults");

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
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.bottomContent}>
          <Text style={styles.foodPrice}>{item.price}</Text>

          <AddToCart item={item} />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <Header /> */}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={searchValue}
          onChangeText={(text) => searchHandler(text)}
          placeholder="search something"
        />
      </View>

      {searchValue.length > 0 && searchResults.length < 1 ? (
        <Text
          style={{
            marginTop: 20,
            flex: 1,
            alignSelf: "center",
            color: "white",
            fontSize: 22,
          }}
        >
          NO RESULTS FOUND FOR {searchValue}
        </Text>
      ) : (
        <FlatList
          data={searchResults.length > 0 ? searchResults : foodList}
          renderItem={_renderItem}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{ paddingVertical: 20 }}
        />
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

  inputContainer: {
    marginTop: 20,
  },

  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    color: "black",
    backgroundColor: "white",
    width: "70%",
    alignSelf: "center",
    borderRadius: 15,
    padding: 10,
  },

  itemContainer: {
    flexDirection: "row",
    alignSelf: "center",
    width: "96%",
    marginRight: 10,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  imageContainer: {
    width: 120,
    height: 120,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
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
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#52526b",
  },
  addToCart: {
    fontSize: 16,
    backgroundColor: "#fd514e",
    alignSelf: "flex-start",
    paddingVertical: 10,

    color: "white",
    borderRadius: 20,
  },
  bottomContent: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
