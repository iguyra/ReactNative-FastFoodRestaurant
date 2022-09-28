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

const headerBottomImg = require("../assets/f1.jpg");
const search = require("../assets/s.png");

export default function Search({ navigation }) {
  return (
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
          navigation.navigate("SearchScreen", { item: "item container" })
        }
      >
        <Image style={styles.searchIcon} source={search} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    // width: "80%",
    // flexDirection: "row",
    // justifyContent: "space-between",
  },

  searchIcon: {
    width: 30,
    height: 30,
  },
});
