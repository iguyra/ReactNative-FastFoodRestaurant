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
import AddToCart from "../components/AddToCart";
import Footer from "../components/Footer";

const headerBottomImg = require("../assets/f1.jpg");

export default function FoodScreen({ navigation, route }) {
  const item = route.params.item;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ImageBackground
          style={styles.image}
          source={headerBottomImg}
          imageStyle={{ opacity: 0.4 }}
        >
          <Text style={styles.backgrounfImageTxt}>{item.name}</Text>
        </ImageBackground>
      </View>

      <View style={styles.foodContent}>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.foodPrice}>{item.price}</Text>
        <Text style={styles.foodDescription}>
          Lorem Ipsum is simply dummy text of the printing and
          typesettingindustry. Lorem Ipsum has been
        </Text>

        <AddToCart item={item} />
      </View>

      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  backgrounfImageTxt: {
    color: "white",
    fontSize: 42,
    textAlign: "center",
    fontWeight: "900",
  },
  foodContent: {
    alignSelf: "center",
    width: "96%",
    backgroundColor: "white",
    padding: 10,
  },

  foodName: {
    fontSize: 26,
  },
  foodPrice: {
    fontSize: 22,
    marginTop: 20,
  },
  foodDescription: {
    fontSize: 18,
    marginTop: 20,
  },
  addToCart: {
    fontSize: 22,
    backgroundColor: "#fd514e",
    alignSelf: "flex-start",
    paddingLeft: 10,
    paddingRight: 10,
    color: "white",
    borderRadius: 20,
    marginTop: 20,
    padding: 10,
  },
});
